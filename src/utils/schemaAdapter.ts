import type { FullClinicProfile, PricingTableItem, ProcessStep, KeyFeatureItem } from '../types/clinic';

export function transformClinicData(rawClinic: any): FullClinicProfile {
  if (!rawClinic) {
    throw new Error('Cannot transform null or undefined clinic data');
  }
  
  console.log('Transforming clinic data for:', rawClinic?.name || 'Unknown');
  
  // Ensure we have at least basic required fields
  if (!rawClinic.id && !rawClinic.name) {
    throw new Error('Clinic data missing required id or name field');
  }
  
  return {
    overview: {
      id: rawClinic.id || '',
      name: rawClinic.name || 'Unknown Clinic',
      slug: rawClinic.slug || '',
      tagline: rawClinic.overview?.tagline || rawClinic.tagline || '',
      description: rawClinic.overview?.description || rawClinic.description || '',
      website: rawClinic.overview?.website || rawClinic.website || rawClinic.booking_url || '',
      phone: rawClinic.overview?.phone || rawClinic.phone || '',
      email: rawClinic.overview?.email || rawClinic.email || '',
      address: {
        street: rawClinic.overview?.address?.street || '',
        city: rawClinic.overview?.address?.city || rawClinic.location || 'UK',
        postcode: rawClinic.overview?.address?.postcode || '',
        region: rawClinic.overview?.address?.region || rawClinic.location || 'UK'
      },
      establishedYear: rawClinic.overview?.establishedYear || null,
      logoUrl: rawClinic.overview?.logoUrl || rawClinic.clinic_logo_url || '',
      heroImageUrl: rawClinic.overview?.heroImageUrl || ''
    },
    services: {
      consultationTypes: rawClinic.services?.consultationTypes || ['video'],
      specialties: rawClinic.services?.specialties || rawClinic.specialisations || ['General Treatment'],
      conditions: rawClinic.services?.conditions || [],
      languages: rawClinic.services?.languages || ['English'],
      accessibility: rawClinic.services?.accessibility || [],
      homeDelivery: rawClinic.services?.homeDelivery || rawClinic.home_delivery || false,
      urgentAppointments: rawClinic.services?.urgentAppointments || false,
      followUpSupport: rawClinic.services?.followUpSupport || true,
      educationalResources: rawClinic.services?.educationalResources || false
    },
    pricing: {
      initialConsultation: {
        price: rawClinic.pricing?.initialConsultation?.price ?? rawClinic.consultation_price ?? rawClinic.initial_consultation_fee ?? rawClinic.consultation_fee ?? 150,
        duration: rawClinic.pricing?.initialConsultation?.duration || 30,
        includes: rawClinic.pricing?.initialConsultation?.includes || []
      },
      followUpConsultation: {
        price: rawClinic.pricing?.followUpConsultation?.price ?? rawClinic.follow_up_price ?? rawClinic.follow_up_consultation_fee ?? 75,
        duration: rawClinic.pricing?.followUpConsultation?.duration || 15,
        includes: rawClinic.pricing?.followUpConsultation?.includes || []
      },
      prescriptionFee: rawClinic.pricing?.prescriptionFee ?? rawClinic.prescription_fee ?? 30,
      deliveryFee: rawClinic.pricing?.deliveryFee ?? rawClinic.delivery_fee ?? 10,
      membershipOptions: rawClinic.pricing?.membershipOptions || rawClinic.membership_options || [],
      estimatedAnnualCost: {
        low: rawClinic.pricing?.estimatedAnnualCost?.low ?? rawClinic.annual_cost_long_term ?? rawClinic.estimated_annual_cost_low ?? rawClinic.annual_cost ?? 1500,
        average: rawClinic.pricing?.estimatedAnnualCost?.average ?? rawClinic.annual_cost_first_year ?? rawClinic.estimated_annual_cost_average ?? rawClinic.annual_cost ?? 2000,
        high: rawClinic.pricing?.estimatedAnnualCost?.high ?? rawClinic.estimated_annual_cost_high ?? rawClinic.annual_cost ?? 2500
      }
    },
    patientExperience: {
      overallRating: rawClinic.patientExperience?.overallRating || rawClinic.rating || 4.0,
      totalReviews: rawClinic.patientExperience?.totalReviews || rawClinic.review_count || rawClinic.google_reviews_count || 0,
      ratingBreakdown: rawClinic.patientExperience?.ratingBreakdown || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      averageWaitTime: rawClinic.patientExperience?.averageWaitTime || rawClinic.waiting_time || '1-2 weeks',
      nextAvailableAppointment: rawClinic.patientExperience?.nextAvailableAppointment || rawClinic.waiting_time || '1-2 weeks',
      responseTime: rawClinic.patientExperience?.responseTime || '24-48 hours',
      patientSatisfactionScore: rawClinic.patientExperience?.patientSatisfactionScore || 85,
      recommendationRate: rawClinic.patientExperience?.recommendationRate || 90
    },
    prosAndCons: {
      pros: rawClinic.prosAndCons?.pros || rawClinic.pros || [],
      cons: rawClinic.prosAndCons?.cons || rawClinic.cons || [],
      standoutFeatures: rawClinic.prosAndCons?.standoutFeatures || rawClinic.features || [],
      potentialDrawbacks: rawClinic.prosAndCons?.potentialDrawbacks || []
    },
    pharmacy: {
      inHousePharmacy: rawClinic.pharmacy?.inHousePharmacy || false,
      partnerPharmacies: rawClinic.pharmacy?.partnerPharmacies || [],
      availableProducts: rawClinic.pharmacy?.availableProducts || {
        flowers: [],
        oils: [],
        capsules: [],
        topicals: [],
        vaporizers: []
      },
      stockAvailability: rawClinic.pharmacy?.stockAvailability || 'good',
      deliveryOptions: rawClinic.pharmacy?.deliveryOptions || {
        standard: { days: '', cost: 0 },
        express: { days: '', cost: 0 }
      }
    },
    verdict: {
      overallScore: rawClinic.verdict?.overallScore || 7.5,
      bestFor: rawClinic.verdict?.bestFor || ['General medical cannabis patients'],
      notIdealFor: rawClinic.verdict?.notIdealFor || [],
      keyStrengths: rawClinic.verdict?.keyStrengths || [],
      areasForImprovement: rawClinic.verdict?.areasForImprovement || [],
      recommendationLevel: rawClinic.verdict?.recommendationLevel || 'recommended',
      summary: rawClinic.verdict?.summary || `${rawClinic.name || 'This clinic'} offers professional medical cannabis treatment.`,
      lastUpdated: rawClinic.verdict?.lastUpdated || new Date().toISOString().split('T')[0]
    },
    accreditations: rawClinic.accreditations || [],
    
    // Add review-specific fields
    review_introduction: rawClinic.review_introduction,
    review_overview: rawClinic.review_overview,
    target_audience: rawClinic.target_audience,
    market_position_detail: rawClinic.market_position_detail,
    pricing_table: rawClinic.pricing_table,
    patient_process: rawClinic.patient_process,
    key_features: rawClinic.key_features,
    review_published: rawClinic.review_published || false,
    review_slug: rawClinic.review_slug,
    google_reviews_count: rawClinic.google_reviews_count,
    cqc_registered: rawClinic.cqc_registered || false,
    clinic_logo_url: rawClinic.clinic_logo_url,
    hero_background_color: rawClinic.hero_background_color || '#4F46E5'
  };
}