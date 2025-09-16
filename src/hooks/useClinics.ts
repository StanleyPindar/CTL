import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { FullClinicProfile } from '../types/clinic';

const useClinics = () => {
  const [data, setData] = useState<FullClinicProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClinics = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Add null check for supabase client
      if (!supabase) {
        throw new Error('Supabase client not available');
      }

      const { data: clinicsData, error: clinicsError } = await supabase
        .from('clinics')
        .select('*')
        .order('name', { ascending: true });
        
      if (clinicsError) throw clinicsError;
      
      if (!clinicsData) {
        setData([]);
        return;
      }
      
      const transformedClinics = clinicsData.map((c, index) => {
        try {
          return transformClinicData(c);
        } catch (transformError) {
          console.error(`Error transforming clinic ${index + 1} in useClinics:`, transformError);
          // Return minimal valid clinic
          return {
            overview: {
              id: c.id || `fallback-${index}`,
              name: c.name || 'Medical Cannabis Clinic',
              tagline: c.tagline || '',
              description: c.description || '',
              website: c.website || c.booking_url || '',
              phone: c.phone || '',
              email: c.email || '',
              address: {
                street: '',
                city: c.location || 'UK',
                postcode: '',
                region: c.location || 'UK'
              },
              establishedYear: null,
              logoUrl: c.clinic_logo_url || '',
              heroImageUrl: ''
            },
            services: {
              consultationTypes: ['video'],
              specialties: c.specialisations || ['General Treatment'],
              conditions: [],
              languages: ['English'],
              accessibility: [],
              homeDelivery: c.home_delivery || false,
              urgentAppointments: false,
              followUpSupport: true,
              educationalResources: false
            },
            pricing: {
              initialConsultation: {
                price: c.consultation_price || c.consultation_fee || c.initial_consultation_fee || 150,
                duration: 30,
                includes: []
              },
              followUpConsultation: {
                price: c.follow_up_price || c.follow_up_consultation_fee || 75,
                duration: 15,
                includes: []
              },
              prescriptionFee: c.prescription_fee || 30,
              deliveryFee: c.delivery_fee || 10,
              membershipOptions: c.membership_options || [],
              estimatedAnnualCost: {
                low: c.annual_cost_long_term || c.estimated_annual_cost_low || c.annual_cost || 1500,
                average: c.annual_cost_first_year || c.estimated_annual_cost_average || c.annual_cost || 2000,
                high: c.estimated_annual_cost_high || c.annual_cost || 2500
              }
            },
            patientExperience: {
              overallRating: c.rating || 4.0,
              totalReviews: c.review_count || c.google_reviews_count || 0,
              ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
              averageWaitTime: c.waiting_time || '1-2 weeks',
              nextAvailableAppointment: c.waiting_time || '1-2 weeks',
              responseTime: '24-48 hours',
              patientSatisfactionScore: 85,
              recommendationRate: 90
            },
            prosAndCons: {
              pros: c.pros || [],
              cons: c.cons || [],
              standoutFeatures: c.features || [],
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
              summary: `${c.name || 'This clinic'} offers professional medical cannabis treatment.`,
              lastUpdated: new Date().toISOString().split('T')[0]
            },
            accreditations: []
          };
        }
      });
      
      // Filter out any null/undefined results
      const validClinics = transformedClinics.filter(clinic => clinic && clinic.overview);
      
      console.log('useClinics: Transformed', validClinics.length, 'valid clinics out of', clinicsData.length, 'raw records');
      setData(validClinics);
      
    } catch (err) {
      console.error('Error fetching clinics in useClinics:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch clinics');
      // Provide empty array instead of crashing
      setData([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClinics();
  }, [fetchClinics]);

  const retry = useCallback(() => {
    fetchClinics();
  }, [fetchClinics]);

  return { clinics: data, isLoading, error, retry };
};

export const useClinic = (id: string) => {
  const [clinic, setClinic] = useState<FullClinicProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClinic = async () => {
      if (!id) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        console.log('useClinic: Fetching clinic with ID:', id);
        
        const { data: clinicData, error: clinicError } = await supabase
          .from('clinics')
          .select('*')
          .eq('id', id)
          .maybeSingle();
        
        if (clinicError) {
          console.error('useClinic: Supabase error:', clinicError);
          throw clinicError;
        }
        
        if (!clinicData) {
          console.log('useClinic: No clinic found for ID:', id);
          setClinic(null);
          return;
        }
        
        try {
          const transformedClinic = transformClinicData(clinicData);
          console.log('useClinic: Successfully transformed clinic:', transformedClinic.overview?.name);
          setClinic(transformedClinic);
        } catch (transformError) {
          console.error('useClinic: Error transforming clinic data:', transformError);
          setError('Failed to process clinic data');
        }
      } catch (err) {
        console.error('useClinic: Error fetching clinic:', err);
        setError('Failed to fetch clinic data');
      } finally {
        setLoading(false);
      }
    };

    fetchClinic();
  }, [id]);

  return { clinic, loading, error };
};

function transformClinicData(c: any) {
  return {
        ...c,
        overview: {
          id: c.id,
          name: c.name,
          slug: c.slug || '',
          tagline: c.tagline || '',
          description: c.description || '',
          website: c.website || '',
          phone: c.phone || '',
          email: c.email || '',
          address: {
            street: '',
            city: c.location || '',
            postcode: '',
            region: c.location || ''
          },
          establishedYear: null,
          logoUrl: '',
          heroImageUrl: ''
        },
        services: {
          consultationTypes: [],
          specialties: c.specialisations || [],
          conditions: [],
          languages: [],
          accessibility: [],
          homeDelivery: false,
          urgentAppointments: false,
          followUpSupport: false,
          educationalResources: false
        },
        pricing: {
          initialConsultation: {
            price: c.consultation_price ?? 0,
            duration: 30,
            includes: []
          },
          followUpConsultation: {
            price: c.follow_up_price ?? 0,
            duration: 15,
            includes: []
          },
          prescriptionFee: c.prescription_fee ?? 0,
          deliveryFee: 0,
          membershipOptions: [],
          estimatedAnnualCost: {
            low: c.annual_cost_long_term ?? 0,
            average: c.annual_cost_first_year ?? 0,
            high: c.annual_cost_first_year ? (c.annual_cost_first_year * 1.2) : 0
          }
        },
        patientExperience: {
          overallRating: c.rating ?? 0,
          totalReviews: c.review_count ?? 0,
          ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
          averageWaitTime: c.waiting_time || '',
          nextAvailableAppointment: c.waiting_time || 'Contact clinic',
          responseTime: '',
          patientSatisfactionScore: 0,
          recommendationRate: 0
        },
        prosAndCons: {
          pros: c.pros || [],
          cons: c.cons || [],
          standoutFeatures: c.features || [],
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
          stockAvailability: '',
          deliveryOptions: {
            standard: { days: '', cost: 0 },
            express: { days: '', cost: 0 }
          }
        },
        verdict: {
          overallScore: 0,
          bestFor: c.best_for || [],
          notIdealFor: [],
          keyStrengths: [],
          areasForImprovement: [],
          recommendationLevel: '',
          summary: '',
          lastUpdated: ''
        },
        accreditations: []
      };
}

export const useClinicReviews = (clinicId: string) => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!clinicId) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('clinic_reviews')
          .select('*')
          .eq('clinic_id', clinicId)
          .order('created_at', { ascending: false });

        if (error) throw error;

        setReviews(data || []);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [clinicId]);

  return { reviews, loading, error };
};

export const useClinicStrains = (clinicId: string) => {
  const [strains, setStrains] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStrains = async () => {
      if (!clinicId) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('clinic_strains')
          .select('*')
          .eq('clinic_id', clinicId);

        if (error) throw error;

        setStrains(data || []);
      } catch (err) {
        console.error('Error fetching strains:', err);
        setError('Failed to load strains');
      } finally {
        setLoading(false);
      }
    };

    fetchStrains();
  }, [clinicId]);

  return { strains, loading, error };
};

const useClinicAvailability = (clinicId: string) => {
  const [availability, setAvailability] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvailability = async () => {
      if (!clinicId) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        
        const { data, error } = await supabase
          .from('clinic_availability')
          .select('*')
          .eq('clinic_id', clinicId)
          .gte('date', formattedDate)
          .order('date', { ascending: true });

        if (error) throw error;

        setAvailability(data || []);
      } catch (err) {
        console.error('Error fetching availability:', err);
        setError('Failed to load availability');
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, [clinicId]);

  return { availability, loading, error };
};