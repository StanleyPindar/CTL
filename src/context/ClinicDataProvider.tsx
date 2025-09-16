import React, { createContext, useContext, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { FullClinicProfile } from '../types/clinic';
import { clinicDatabase } from '../data/clinicDatabase';
import { slugify } from '../utils/slugify';
import { transformClinicData } from '../utils/schemaAdapter';

interface ClinicDataContextType {
  clinics: FullClinicProfile[];
  isLoading: boolean;
  error: string | null;
  retry: () => void;
  getClinicById: (id: string) => FullClinicProfile | undefined;
  getClinicBySlug: (slug: string) => FullClinicProfile | undefined;
}

const ClinicDataContext = createContext<ClinicDataContextType>({
  clinics: [],
  isLoading: false,
  error: null,
  retry: () => {},
  getClinicById: () => undefined,
  getClinicBySlug: () => undefined,
});

export const ClinicDataProvider = ({ children }: { children: ReactNode }) => {
  const [clinics, setClinics] = useState<FullClinicProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClinics = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check if Supabase is available
      if (!supabase) {
        console.warn('Supabase not configured - using static data');
        setClinics(clinicDatabase);
        return;
      }

      console.log('Fetching clinics from Supabase...');
      
      const { data, error: supabaseError } = await supabase
        .from('clinics')
        .select('*')
        .eq('active', true)
        .order('rating', { ascending: false, nullsLast: true });

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        throw supabaseError;
      }

      console.log('Supabase data received:', data?.length || 0, 'clinics');

      if (data && data.length > 0) {
        // Transform Supabase data to FullClinicProfile format with error handling
        const transformedClinics = data.map((clinic, index) => {
          try {
            return transformClinicData(clinic);
          } catch (transformError) {
            console.error(`Error transforming clinic ${index + 1} (${clinic?.name || 'unknown'}):`, transformError);
            // Return a safe fallback clinic object
            return {
              overview: {
                id: clinic?.id || `fallback-${index}`,
                name: clinic?.name || 'Medical Cannabis Clinic',
                slug: clinic?.slug || '',
                tagline: clinic?.tagline || '',
                description: clinic?.description || 'Professional medical cannabis treatment',
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
                specialties: clinic?.specialisations || ['General Treatment'],
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
                  price: clinic?.consultation_fee || clinic?.initial_consultation_fee || 150,
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
        console.log('Transformed clinics:', transformedClinics.length);
        setClinics(transformedClinics);
      } else {
        // Fallback to static data if no data in Supabase  
        console.warn('No Supabase data found, using fallback static data:', clinicDatabase.length, 'clinics');
        setClinics(clinicDatabase);
      }
    } catch (err) {
      console.error('Error fetching clinics from Supabase:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch clinics');
      // Always provide fallback data to prevent empty state
      console.warn('Using fallback data due to error:', clinicDatabase.length, 'clinics');
      setClinics(clinicDatabase);
    } finally {
      setIsLoading(false);
    }
  };

  const retry = () => {
    fetchClinics();
  };

  useEffect(() => {
    fetchClinics();
  }, []);

  // Function to get a clinic by ID
  const getClinicById = (id: string) => {
    return clinics.find(clinic => clinic.overview?.id === id);
  };
  
  // Function to get a clinic by slug (derived from name)
  const getClinicBySlug = (slug: string) => {
    return clinics.find(clinic => slugify(clinic.overview?.name || '') === slug);
  };
  
  return (
    <ClinicDataContext.Provider value={{ clinics, isLoading, error, retry, getClinicById, getClinicBySlug }}>
      {children}
    </ClinicDataContext.Provider>
  );
};

/**
 * Custom hook for consuming the clinic data
 */
export const useClinicData = () => {
  return useContext(ClinicDataContext);
};