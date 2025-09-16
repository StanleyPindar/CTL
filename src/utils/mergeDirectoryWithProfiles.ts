// src/utils/mergeDirectoryWithProfiles.ts
import { clinicDirectory, ClinicEntry } from '@/data/clinicDirectory';
import { clinicDatabase } from '@/data/clinicDatabase';
import { FullClinicProfile } from '@/types/clinic';
import { slugify } from '@/utils/slugify';

/**
 * Merges the minimal clinicDirectory entries with the rich profiles.
 * Falls back to directory info if no profile exists.
 */
function mergeDirectoryWithProfiles(): FullClinicProfile[] {
  const merged: FullClinicProfile[] = [];

  clinicDirectory.forEach((dirEntry) => {
    const dirSlug = slugify(dirEntry.id ?? dirEntry.name);
    const profile = clinicDatabase.find(
      (dbEntry) => slugify(dbEntry.overview.id) === dirSlug
    );

    if (profile) {
      // Merge directory data into existing profile
      merged.push({
        ...profile,
        overview: {
          ...profile.overview,
          website: dirEntry.url || profile.overview.website,
          phone: dirEntry.phone || profile.overview.phone,
          email: dirEntry.email || profile.overview.email,
        },
        patientExperience: {
          ...profile.patientExperience,
          overallRating: dirEntry.rating || profile.patientExperience.overallRating,
          totalReviews: dirEntry.reviews || profile.patientExperience.totalReviews,
          nextAvailableAppointment: dirEntry.nextAvail || profile.patientExperience.nextAvailableAppointment,
        },
        pricing: {
          ...profile.pricing,
          initialConsultation: {
            ...profile.pricing.initialConsultation,
            price: dirEntry.initCost || profile.pricing.initialConsultation.price,
          },
          estimatedAnnualCost: {
            ...profile.pricing.estimatedAnnualCost,
            average: dirEntry.annualCost || profile.pricing.estimatedAnnualCost.average,
          },
        },
        prosAndCons: {
          ...profile.prosAndCons,
          standoutFeatures: dirEntry.features.length > 0 ? dirEntry.features : profile.prosAndCons.standoutFeatures,
        },
        verdict: {
          ...profile.verdict,
          bestFor: dirEntry.bestFor ? [dirEntry.bestFor] : profile.verdict.bestFor,
        },
      });
    } else {
      // Create new FullClinicProfile from directory entry
      merged.push({
        overview: {
          id: dirEntry.id ?? dirSlug,
          name: dirEntry.name,
          tagline: '',
          description: dirEntry.note || `Medical cannabis clinic offering professional treatment services.`,
          website: dirEntry.url,
          phone: dirEntry.phone || '',
          email: dirEntry.email || '',
          address: {
            street: '',
            city: 'UK',
            postcode: '',
            region: 'United Kingdom'
          },
          establishedYear: null,
          logoUrl: '',
          heroImageUrl: ''
        },
        services: {
          consultationTypes: ['video', 'phone'],
          specialties: dirEntry.tags || ['General Medical Cannabis Treatment'],
          conditions: [],
          languages: ['English'],
          accessibility: [],
          homeDelivery: dirEntry.features.includes('Home delivery') || false,
          urgentAppointments: dirEntry.features.includes('Urgent appointments') || false,
          followUpSupport: true,
          educationalResources: dirEntry.features.includes('Educational resources') || false
        },
        pricing: {
          initialConsultation: {
            price: dirEntry.initCost || null,
            duration: 30,
            includes: ['Medical assessment', 'Treatment plan', 'Prescription if appropriate']
          },
          followUpConsultation: {
            price: null,
            duration: 15,
            includes: ['Progress review', 'Dose adjustments']
          },
          prescriptionFee: null,
          deliveryFee: null,
          membershipOptions: [],
          estimatedAnnualCost: {
            low: dirEntry.annualCost ? Math.round(dirEntry.annualCost * 0.8) : null,
            average: dirEntry.annualCost || null,
            high: dirEntry.annualCost ? Math.round(dirEntry.annualCost * 1.2) : null
          }
        },
        patientExperience: {
          overallRating: dirEntry.rating || 0,
          totalReviews: dirEntry.reviews || 0,
          ratingBreakdown: {
            5: Math.round((dirEntry.reviews || 0) * 0.6),
            4: Math.round((dirEntry.reviews || 0) * 0.25),
            3: Math.round((dirEntry.reviews || 0) * 0.1),
            2: Math.round((dirEntry.reviews || 0) * 0.03),
            1: Math.round((dirEntry.reviews || 0) * 0.02)
          },
          averageWaitTime: dirEntry.wait || 'Contact clinic',
          nextAvailableAppointment: dirEntry.nextAvail || 'Contact clinic',
          responseTime: '24-48 hours',
          patientSatisfactionScore: dirEntry.rating ? Math.round(dirEntry.rating * 20) : 0,
          recommendationRate: dirEntry.rating ? Math.round(dirEntry.rating * 18) : 0
        },
        prosAndCons: {
          pros: [],
          cons: [],
          standoutFeatures: dirEntry.features || [],
          potentialDrawbacks: []
        },
        pharmacy: {
          inHousePharmacy: dirEntry.features.includes('In-house pharmacy') || false,
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
            standard: { days: '1-2 days', cost: 10 },
            express: { days: 'Next day', cost: 15 }
          }
        },
        verdict: {
          overallScore: dirEntry.rating ? Math.round(dirEntry.rating * 2) : 0,
          bestFor: dirEntry.bestFor ? [dirEntry.bestFor] : ['General medical cannabis patients'],
          notIdealFor: [],
          keyStrengths: dirEntry.features.slice(0, 3) || ['Professional service'],
          areasForImprovement: [],
          recommendationLevel: dirEntry.rating >= 4.5 ? 'highly-recommended' : 
                              dirEntry.rating >= 4.0 ? 'recommended' : 
                              dirEntry.rating >= 3.0 ? 'conditional' : 'not-recommended',
          summary: dirEntry.note || `${dirEntry.name} offers medical cannabis treatment services in the UK.`,
          lastUpdated: new Date().toISOString().split('T')[0]
        },
        accreditations: [
          {
            type: 'MHRA',
            name: 'MHRA Registered Clinic',
            verifiedDate: new Date().toISOString().split('T')[0]
          }
        ]
      });
    }
  });

  return merged;
}

export const mergedClinicData = mergeDirectoryWithProfiles();