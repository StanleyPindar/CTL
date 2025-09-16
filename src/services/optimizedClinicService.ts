import { supabase } from '../lib/supabase';
import { cacheService } from './cacheService';
import type { FullClinicProfile } from '../types/clinic';
import { transformClinicData } from '../utils/schemaAdapter';

// Add error handling wrapper for Supabase operations
const safeSupabaseQuery = async (queryFn: () => Promise<any>) => {
  try {
    // Check if Supabase is properly configured
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey || !supabase) {
      console.warn('Supabase not configured - using fallback data');
      return { data: null, error: new Error('Supabase not configured') };
    }
    
    return await queryFn();
  } catch (error) {
    console.warn('Supabase query failed:', error);
    return { data: null, error };
  }
};

interface SearchFilters {
  searchTerm?: string;
  minRating?: number;
  maxConsultationFee?: number;
  location?: string;
  specialty?: string;
  limit?: number;
}

class OptimizedClinicService {
  private readonly CACHE_KEYS = {
    ALL_CLINICS: 'all-clinics',
    CLINIC_STATS: 'clinic-stats',
    CLINIC_BY_ID: (id: string) => `clinic-${id}`,
    CLINIC_REVIEWS: (id: string) => `reviews-${id}`,
    CLINIC_STRAINS: (id: string) => `strains-${id}`,
    SEARCH_RESULTS: (filters: SearchFilters) => `search-${JSON.stringify(filters)}`,
    CONDITION_CLINICS: (condition: string) => `condition-${condition}`
  };

  private readonly CACHE_TTL = {
    CLINICS: 10 * 60 * 1000, // 10 minutes
    STATS: 30 * 60 * 1000,   // 30 minutes
    REVIEWS: 5 * 60 * 1000,  // 5 minutes
    SEARCH: 5 * 60 * 1000    // 5 minutes
  };

  async getAllClinics(): Promise<FullClinicProfile[]> {
    return cacheService.prefetch(
      this.CACHE_KEYS.ALL_CLINICS,
      async () => {
        console.log('OptimizedClinicService: Fetching from Supabase...');
        
        const { data, error } = await safeSupabaseQuery(() => {
          return supabase
            .from('clinics')
            .select('*')
            .eq('active', true)
            .order('rating', { ascending: false, nullsLast: true });
        });

        if (error) {
          console.error('OptimizedClinicService: Supabase error:', error);
          // Return empty array instead of throwing to prevent crashes
          return [];
        }
        
        console.log('OptimizedClinicService: Raw data received:', data?.length || 0, 'records');
        
        const transformed = (data || []).map(clinic => {
          try {
            return transformClinicData(clinic);
          } catch (transformError) {
            console.error('Error transforming clinic data for:', clinic?.name || 'unknown', transformError);
            // Return a minimal valid clinic object to prevent crashes
            return {
              overview: {
                id: clinic?.id || 'unknown',
                name: clinic?.name || 'Unknown Clinic',
                slug: clinic?.slug || '',
                tagline: clinic?.tagline || '',
                description: clinic?.description || '',
                website: clinic?.website || clinic?.booking_url || '',
                phone: clinic?.phone || '',
                email: clinic?.email || '',
                address: {
                  street: '',
                  city: clinic?.location || 'UK',
                  postcode: '',
                  region: clinic?.location || 'UK'
                },
                establishedYear: null,
                logoUrl: clinic?.clinic_logo_url || '',
                heroImageUrl: ''
              },
              services: {
                consultationTypes: ['video'],
                specialties: clinic?.specialisations || [],
                conditions: [],
                languages: ['English'],
                accessibility: [],
                homeDelivery: clinic?.home_delivery || false,
                urgentAppointments: false,
                followUpSupport: true,
                educationalResources: false
              },
              pricing: {
                initialConsultation: {
                  price: clinic?.consultation_price || clinic?.consultation_fee || clinic?.initial_consultation_fee || 150,
                  duration: 30,
                  includes: []
                },
                followUpConsultation: {
                  price: clinic?.follow_up_consultation_fee || 75,
                  duration: 15,
                  includes: []
                },
                prescriptionFee: clinic?.prescription_fee || 30,
                deliveryFee: clinic?.delivery_fee || 10,
                membershipOptions: clinic?.membership_options || [],
                estimatedAnnualCost: {
                  low: clinic?.estimated_annual_cost_low || clinic?.annual_cost || 1500,
                  average: clinic?.estimated_annual_cost_average || clinic?.annual_cost || 2000,
                  high: clinic?.estimated_annual_cost_high || clinic?.annual_cost || 2500
                }
              },
              patientExperience: {
                overallRating: clinic?.rating || 4.0,
                totalReviews: clinic?.review_count || clinic?.google_reviews_count || 0,
                ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
                averageWaitTime: clinic?.waiting_time || '1-2 weeks',
                nextAvailableAppointment: clinic?.waiting_time || '1-2 weeks',
                responseTime: '24-48 hours',
                patientSatisfactionScore: 85,
                recommendationRate: 90
              },
              prosAndCons: {
                pros: clinic?.pros || [],
                cons: clinic?.cons || [],
                standoutFeatures: clinic?.features || [],
                potentialDrawbacks: []
              },
              pharmacy: {
                inHousePharmacy: false,
                partnerPharmacies: [],
                availableProducts: {
                  flowers: [],
                  oils: [],
                  capsules: [],
                  topicals: [],
                  vaporizers: []
                },
                stockAvailability: 'good',
                deliveryOptions: {
                  standard: { days: '2-3 days', cost: 10 },
                  express: { days: 'Next day', cost: 15 }
                }
              },
              verdict: {
                overallScore: 7.5,
                bestFor: ['General medical cannabis patients'],
                notIdealFor: [],
                keyStrengths: [],
                areasForImprovement: [],
                recommendationLevel: 'recommended',
                summary: `${clinic?.name || 'This clinic'} offers professional medical cannabis treatment.`,
                lastUpdated: new Date().toISOString().split('T')[0]
              },
              accreditations: []
            };
          }
        });
        console.log('OptimizedClinicService: Transformed data:', transformed.length, 'clinics');
        
        return transformed;
      },
      this.CACHE_TTL.CLINICS
    );
  }

  async searchClinics(filters: SearchFilters = {}): Promise<FullClinicProfile[]> {
    const cacheKey = this.CACHE_KEYS.SEARCH_RESULTS(filters);
    
    return cacheService.prefetch(
      cacheKey,
      async () => {
        const { data, error } = await safeSupabaseQuery(() => {
          // Use clinics table directly - select all columns for complete data
          let query = supabase
            .from('clinics')
            .select('*')
            .eq('active', true);

          // Apply basic filters
          if (filters.minRating && filters.minRating > 0) {
            query = query.gte('rating', filters.minRating);
          }
          if (filters.searchTerm) {
            query = query.ilike('name', `%${filters.searchTerm}%`);
          }

          query = query.order('rating', { ascending: false, nullsLast: true }).limit(filters.limit || 50);
          
          return query;
        });

        if (error) {
          console.error('OptimizedClinicService: Search error:', error);
          return [];
        }
        return (data || []).map(clinic => {
          try {
            return transformClinicData(clinic);
          } catch (transformError) {
            console.error('Error transforming search clinic data for:', clinic?.name || 'unknown', transformError);
            // Return minimal valid clinic for search results
            return {
              overview: {
                id: clinic?.id || 'unknown',
                name: clinic?.name || 'Unknown Clinic',
                slug: clinic?.slug || '',
                tagline: clinic?.tagline || '',
                description: clinic?.description || '',
                website: clinic?.website || clinic?.booking_url || '',
                phone: clinic?.phone || '',
                email: clinic?.email || '',
                address: {
                  street: '',
                  city: clinic?.location || 'UK',
                  postcode: '',
                  region: clinic?.location || 'UK'
                },
                establishedYear: null,
                logoUrl: clinic?.clinic_logo_url || '',
                heroImageUrl: ''
              },
              services: {
                consultationTypes: ['video'],
                specialties: clinic?.specialisations || [],
                conditions: [],
                languages: ['English'],
                accessibility: [],
                homeDelivery: clinic?.home_delivery || false,
                urgentAppointments: false,
                followUpSupport: true,
                educationalResources: false
              },
              pricing: {
                initialConsultation: {
                  price: clinic?.consultation_fee || 150,
                  duration: 30,
                  includes: []
                },
                followUpConsultation: {
                  price: clinic?.follow_up_price || 75,
                  duration: 15,
                  includes: []
                },
                prescriptionFee: 30,
                deliveryFee: 10,
                membershipOptions: [],
                estimatedAnnualCost: {
                  low: clinic?.annual_cost_long_term || clinic?.annual_cost || 1500,
                  average: clinic?.annual_cost_first_year || clinic?.annual_cost || 2000,
                  high: clinic?.annual_cost || 2500
                }
              },
              patientExperience: {
                overallRating: clinic?.rating || 4.0,
                totalReviews: clinic?.review_count || 0,
                ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
                averageWaitTime: clinic?.waiting_time || '1-2 weeks',
                nextAvailableAppointment: clinic?.waiting_time || '1-2 weeks',
                responseTime: '24-48 hours',
                patientSatisfactionScore: 85,
                recommendationRate: 90
              },
              prosAndCons: {
                pros: clinic?.pros || [],
                cons: clinic?.cons || [],
                standoutFeatures: clinic?.features || [],
                potentialDrawbacks: []
              },
              pharmacy: {
                inHousePharmacy: false,
                partnerPharmacies: [],
                availableProducts: {
                  flowers: [],
                  oils: [],
                  capsules: [],
                  topicals: [],
                  vaporizers: []
                },
                stockAvailability: 'good',
                deliveryOptions: {
                  standard: { days: '2-3 days', cost: 10 },
                  express: { days: 'Next day', cost: 15 }
                }
              },
              verdict: {
                overallScore: 7.5,
                bestFor: ['General medical cannabis patients'],
                notIdealFor: [],
                keyStrengths: [],
                areasForImprovement: [],
                recommendationLevel: 'recommended',
                summary: `${clinic?.name || 'This clinic'} offers professional medical cannabis treatment.`,
                lastUpdated: new Date().toISOString().split('T')[0]
              },
              accreditations: []
            };
          }
        });
      },
      this.CACHE_TTL.SEARCH
    );
  }

  async getClinicById(id: string): Promise<FullClinicProfile | null> {
    return cacheService.prefetch(
      this.CACHE_KEYS.CLINIC_BY_ID(id),
      async () => {
        console.log('OptimizedClinicService: Fetching clinic by ID:', id);
        
        const { data, error } = await safeSupabaseQuery(() => {
          return supabase
            .from('clinics')
            .select('*')
            .eq('id', id)
            .eq('active', true)
            .maybeSingle();
        });

        if (error) {
          console.error('OptimizedClinicService: Error fetching clinic by ID:', error);
          return null;
        }
        
        if (!data) {
          console.log('OptimizedClinicService: No clinic found for ID:', id);
          return null;
        }
        
        try {
          const transformed = transformClinicData(data);
          console.log('OptimizedClinicService: Successfully transformed clinic:', transformed.overview?.name);
          return transformed;
        } catch (transformError) {
          console.error('OptimizedClinicService: Error transforming clinic data:', transformError);
          return null;
        }
      },
      this.CACHE_TTL.CLINICS
    );
  }

  async getClinicsByCondition(condition: string): Promise<FullClinicProfile[]> {
    return cacheService.prefetch(
      this.CACHE_KEYS.CONDITION_CLINICS(condition),
      async () => {
        const { data, error } = await safeSupabaseQuery(() => {
          // Use basic text search on clinics table - only existing columns
          return supabase
            .from('clinics')
            .select('id,name,rating,specialisations,active,updated_at')
            .eq('active', true)
            .or(`name.ilike.%${condition}%,specialisations.cs.{${condition}}`)
            .order('rating', { ascending: false, nullsLast: true })
            .limit(10);
        });

        if (error) {
          console.error('OptimizedClinicService: Condition search error:', error);
          return [];
        }
        return (data || []).map(transformClinicData);
      },
      this.CACHE_TTL.CLINICS
    );
  }

  async getClinicReviews(clinicId: string) {
    return cacheService.prefetch(
      this.CACHE_KEYS.CLINIC_REVIEWS(clinicId),
      async () => {
        const { data, error } = await safeSupabaseQuery(() => {
          return supabase
            .from('clinic_reviews')
            .select('*')
            .eq('clinic_id', clinicId)
            .order('created_at', { ascending: false })
            .limit(20);
        });

        if (error) {
          console.error('OptimizedClinicService: Reviews error:', error);
          return [];
        }
        return data || [];
      },
      this.CACHE_TTL.REVIEWS
    );
  }

  async getClinicStrains(clinicId: string) {
    return cacheService.prefetch(
      this.CACHE_KEYS.CLINIC_STRAINS(clinicId),
      async () => {
        const { data, error } = await safeSupabaseQuery(() => {
          return supabase
            .from('clinic_strains')
            .select('*')
            .eq('clinic_id', clinicId);
        });

        if (error) {
          console.error('OptimizedClinicService: Strains error:', error);
          return [];
        }
        return data || [];
      },
      this.CACHE_TTL.REVIEWS
    );
  }

  async getClinicStats() {
    return cacheService.prefetch(
      this.CACHE_KEYS.CLINIC_STATS,
      async () => {
        const { data, error } = await safeSupabaseQuery(() => {
          // Calculate stats from clinics table - use only existing columns
          return supabase
            .from('clinics')
            .select('id, name, rating, specialisations, active')
            .eq('active', true);
        });

        if (error) {
          console.error('OptimizedClinicService: Stats error:', error);
          return {
            total_clinics: 0,
            active_clinics: 0,
            avg_rating: 0,
            avg_consultation_fee: 0,
            avg_annual_cost: 0,
            published_reviews: 0,
            all_specialties: []
          };
        }
        
        // Calculate aggregated stats
        const clinics = data || [];
        const activeRatings = clinics.filter(c => c.rating && c.rating > 0).map(c => c.rating);
        const allSpecialties = clinics.flatMap(c => c.specialisations || []).filter(Boolean);
        
        return {
          total_clinics: clinics.length,
          active_clinics: clinics.length, // Already filtered by active = true
          avg_rating: activeRatings.length > 0 ? activeRatings.reduce((a, b) => a + b, 0) / activeRatings.length : 0,
          avg_consultation_fee: 0, // Not available without consultation_fee column
          avg_annual_cost: 0, // Not available without annual_cost column
          published_reviews: 0, // Not available without review_published column
          all_specialties: [...new Set(allSpecialties)]
        };
      },
      this.CACHE_TTL.STATS
    );
  }

  // Batch operations for better performance
  async getMultipleClinics(ids: string[]): Promise<FullClinicProfile[]> {
    const cached: FullClinicProfile[] = [];
    const uncachedIds: string[] = [];

    // Check cache first
    ids.forEach(id => {
      const cachedClinic = cacheService.get<FullClinicProfile>(this.CACHE_KEYS.CLINIC_BY_ID(id));
      if (cachedClinic) {
        cached.push(cachedClinic);
      } else {
        uncachedIds.push(id);
      }
    });

    // Fetch uncached clinics in batch
    if (uncachedIds.length > 0) {
      const { data, error } = await safeSupabaseQuery(() => {
        return supabase
          .from('clinics')
          .select('*')
          .in('id', uncachedIds)
          .eq('active', true);
      });

      if (error) {
        console.error('OptimizedClinicService: Batch fetch error:', error);
        return cached; // Return only cached results
      }

      const fetchedClinics = (data || []).map(transformClinicData);
      
      // Cache individual clinics
      fetchedClinics.forEach(clinic => {
        if (clinic.overview?.id) {
          cacheService.set(
            this.CACHE_KEYS.CLINIC_BY_ID(clinic.overview.id),
            clinic,
            this.CACHE_TTL.CLINICS
          );
        }
      });

      cached.push(...fetchedClinics);
    }

    return cached;
  }

  // Preload critical data
  async preloadCriticalData(): Promise<void> {
    try {
      // Preload top clinics
      await this.getAllClinics();
      
      // Preload clinic stats
      await this.getClinicStats();
      
      // Preload common condition searches
      const commonConditions = ['chronic-pain', 'anxiety', 'epilepsy', 'insomnia'];
      await Promise.all(
        commonConditions.map(condition => this.getClinicsByCondition(condition))
      );
    } catch (error) {
      console.warn('Failed to preload critical data:', error);
      // Silent fail for preloading - don't throw errors that could crash the app
    }
  }

  // Cache invalidation
  invalidateClinicCache(clinicId: string): void {
    cacheService.delete(this.CACHE_KEYS.CLINIC_BY_ID(clinicId));
    cacheService.delete(this.CACHE_KEYS.CLINIC_REVIEWS(clinicId));
    cacheService.delete(this.CACHE_KEYS.CLINIC_STRAINS(clinicId));
    cacheService.delete(this.CACHE_KEYS.ALL_CLINICS);
    cacheService.delete(this.CACHE_KEYS.CLINIC_STATS);
  }

  invalidateAllCache(): void {
    cacheService.clear();
  }

  getCacheStats() {
    return cacheService.getStats();
  }
}

export const optimizedClinicService = new OptimizedClinicService();

// Preload critical data on service initialization
if (typeof window !== 'undefined') {
  // Delay preloading to not block initial render
  setTimeout(() => {
    optimizedClinicService.preloadCriticalData().catch(error => {
      console.warn('Failed to preload critical data:', error);
    });
  }, 1000);
}