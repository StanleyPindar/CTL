import { FullClinicProfile } from '../types/clinic';

export const clinicDatabase: FullClinicProfile[] = [
  {
    overview: {
      id:'releaf',
      name: 'Releaf',
      tagline: 'Digital-first medical cannabis platform',
      description: 'Releaf offers a modern, tech-forward approach to medical cannabis treatment with AI-powered dosing recommendations and a comprehensive mobile app for patient management.',
      website: 'https://releaf.co.uk',
      phone: '0203 488 4200',
      email: 'hello@releaf.co.uk',
      address: {
        street: '45 Tech Hub',
        city: 'London',
        postcode: 'EC2A 4BQ',
        region: 'Greater London'
      },
      establishedYear: 2022,
      logoUrl: '/images/releaf-logo.png',
      heroImageUrl: '/images/releaf-hero.jpg'
    },
    accreditations: [
      {
        type: 'MHRA',
        name: 'MHRA Registered Clinic',
        certificationNumber: 'MHRA-2022-REL-001',
        validUntil: '2025-12-31',
        verifiedDate: '2024-01-15'
      },
      {
        type: 'CQC',
        name: 'Care Quality Commission Registered',
        certificationNumber: 'CQC-REL-2022',
        validUntil: '2025-06-30',
        verifiedDate: '2024-01-15'
      }
    ],
    services: {
      consultationTypes: ['video', 'phone'],
      specialties: ['Chronic Pain', 'Anxiety', 'Sleep Disorders', 'PTSD', 'Epilepsy'],
      conditions: [
        'Chronic Pain',
        'Fibromyalgia',
        'Arthritis',
        'Anxiety Disorders',
        'PTSD',
        'Insomnia',
        'Depression',
        'Epilepsy',
        'Multiple Sclerosis',
        'Cancer-related symptoms'
      ],
      languages: ['English'],
      accessibility: ['Mobile app', 'Screen reader compatible', 'Voice commands'],
      homeDelivery: true,
      urgentAppointments: true,
      followUpSupport: true,
      educationalResources: true
    },
    pricing: {
      initialConsultation: {
        price: 99.99,
        duration: 30,
        includes: ['AI-powered assessment', 'Treatment plan', 'Prescription if appropriate', 'Mobile app access']
      },
      followUpConsultation: {
        price: 69.99,
        duration: 15,
        includes: ['Progress review', 'Dose adjustments', 'Prescription renewal']
      },
      prescriptionFee: 19.99,
      deliveryFee: 4.99,
      membershipOptions: [
        {
          name: 'Digital Care Plan',
          annualFee: 149,
          benefits: [
            'AI-powered dosing recommendations',
            'Symptom tracking app',
            'Priority support',
            '24/7 chat assistance',
            'Discounted follow-ups'
          ]
        }
      ],
      estimatedAnnualCost: {
        low: 1800,
        average: 2400,
        high: 3600
      }
    },
    patientExperience: {
      overallRating: 4.8,
      totalReviews: 1247,
      ratingBreakdown: {
        5: 820,
        4: 347,
        3: 65,
        2: 10,
        1: 5
      },
      averageWaitTime: '3-5 days',
      nextAvailableAppointment: '3 days',
      responseTime: '2-4 hours',
      patientSatisfactionScore: 92,
      recommendationRate: 94
    },
    prosAndCons: {
      pros: [
        'Cutting-edge digital platform',
        'AI-powered dosing recommendations',
        'Fast appointment availability',
        'Comprehensive mobile app',
        '24/7 support via chat'
      ],
      cons: [
        'Higher initial consultation fee',
        'No in-person consultations',
        'Technology may be challenging for some patients',
        'Newer clinic with less established history'
      ],
      standoutFeatures: [
        'AI-powered treatment optimization',
        'Digital-first approach',
        'Comprehensive mobile app',
        'Rapid response times'
      ],
      potentialDrawbacks: [
        'Less personal touch than traditional clinics',
        'Reliance on technology',
        'Higher upfront costs'
      ]
    },
    pharmacy: {
      inHousePharmacy: false,
      partnerPharmacies: ['Dispensary Green', 'Cedarwood Pharmacy', 'IPS Pharma'],
      availableProducts: {
        flowers: ['Adven', 'Khiron', 'Aurora', 'Bedrocan', 'Tilray'],
        oils: ['Adven CBD', 'Tilray', 'Spectrum', 'Althea'],
        capsules: ['Adven Capsules', 'Tilray Capsules'],
        topicals: ['Adven Balm', 'Cannaray Balm'],
        vaporizers: ['Storz & Bickel', 'Arizer', 'PAX']
      },
      stockAvailability: 'excellent',
      deliveryOptions: {
        standard: { days: '1-2 days', cost: 10 },
        express: { days: 'Next day', cost: 15 },
        sameDay: { areas: ['London', 'Manchester', 'Birmingham'], cost: 25 }
      }
    },
    verdict: {
      overallScore: 8.7,
      bestFor: [
        'Tech-savvy patients',
        'Those seeking rapid appointments',
        'Patients wanting digital symptom tracking',
        'People preferring minimal in-person interaction'
      ],
      notIdealFor: [
        'Patients uncomfortable with technology',
        'Those preferring face-to-face consultations',
        'Patients with complex cases requiring extensive consultation'
      ],
      keyStrengths: [
        'Innovative digital platform',
        'Fast appointment availability',
        'Comprehensive patient app',
        '24/7 support options'
      ],
      areasForImprovement: [
        'Add in-person consultation options',
        'Reduce initial consultation cost',
        'Provide more options for non-tech-savvy patients'
      ],
      recommendationLevel: 'highly-recommended',
      summary: 'Releaf represents the cutting edge of medical cannabis clinics with its AI-powered platform and comprehensive digital approach. While the higher initial cost and technology-focused model may not suit everyone, tech-savvy patients will appreciate the convenience, rapid appointments, and 24/7 support. Their digital symptom tracking and dosing recommendations provide a level of precision that traditional clinics struggle to match.',
      lastUpdated: '2024-02-10'
    }
  },
  {
    overview: {
      id:'mamedica',
      name: 'Mamedica',
      tagline: 'Personalized medical cannabis care',
      description: 'Mamedica focuses on providing highly personalized medical cannabis treatment with an emphasis on one-on-one care and tailored treatment plans for each patient.',
      website: 'https://mamedica.co.uk',
      phone: '0203 488 4200',
      email: 'info@mamedica.co.uk',
      address: {
        street: '78 Harley Street',
        city: 'London', 
        postcode: 'W1G 7HJ',
        region: 'Greater London'
      },
      establishedYear: 2020,
      logoUrl: '/images/mamedica-logo.png',
      heroImageUrl: '/images/mamedica-hero.jpg'
    },
    accreditations: [
      {
        type: 'MHRA',
        name: 'MHRA Registered Clinic',
        certificationNumber: 'MHRA-2020-MAM-001',
        validUntil: '2025-12-31',
        verifiedDate: '2024-01-15'
      },
      {
        type: 'CQC',
        name: 'Care Quality Commission Registered',
        certificationNumber: 'CQC-MAM-2020',
        validUntil: '2025-06-30',
        verifiedDate: '2024-01-15'
      },
      {
        type: 'CQC',
        name: 'Care Quality Commission Registered',
        certificationNumber: '1-11445632489',
        validUntil: '2025-06-30',
        verifiedDate: '2024-06-01' // Last routine inspection: June 2024
      },
      {
        type: 'MHRA',
        name: 'MHRA GDP (Good Distribution Practice) Certificate',
        verifiedDate: '2024-07-16'
      },
      {
        type: 'GMC',
        name: 'GMC Specialist Doctors',
        verifiedDate: '2024-01-15'
      }
    ],
    services: {
      consultationTypes: ['in-person', 'video', 'phone'],
      specialties: ['Chronic Pain', 'Neuropathic Disorders', 'Multiple Sclerosis', 'Anxiety', 'PTSD', 'Chemotherapy-induced Nausea'],
      conditions: [
        'Chronic Pain',
        'Fibromyalgia', 
        'Multiple Sclerosis',
        'Epilepsy',
        'Anxiety Disorders',
        'PTSD',
        'Depression',
        'Cancer-related symptoms',
        'Parkinson\'s Disease',
        'Tourette\'s Syndrome'
      ],
      languages: ['English'], // Review only mentions English implicitly
      accessibility: ['Wheelchair accessible', 'Hearing loop', 'Translation services'],
      homeDelivery: true,
      urgentAppointments: true,
      followUpSupport: true,
      educationalResources: true
    },
    pricing: {
      initialConsultation: {
        price: 150,
        duration: 30,
        includes: ['Comprehensive assessment', 'Detailed treatment plan', 'Prescription if appropriate']
      },
      followUpConsultation: {
        price: 75,
        duration: 30, // Assuming 30 min for general review
        includes: ['Progress review', 'Dose adjustments', 'Prescription renewal']
      },
      prescriptionFee: 0, // "Repeat prescription Free"
      deliveryFee: 10,
      membershipOptions: [
        {
          name: 'Premium Care Plan',
          annualFee: 299,
          benefits: [
            'Priority appointments',
            'Direct specialist access', 
            'Reduced follow-up fees', 
            'Quarterly treatment reviews', 
            'Personalized educational resources' 
          ]
        }
      ],
      estimatedAnnualCost: {
        low: 1275, // Subsequent years
        average: 1350, // First year
        high: 4200
      }
    },
    patientExperience: {
      overallRating: 4.7,
      totalReviews: 876,
      ratingBreakdown: {
        5: 590,
        4: 210,
        3: 56,
        2: 15,
        1: 5
      },
      averageWaitTime: '4 days',
      nextAvailableAppointment: '4 days',
      responseTime: '24 hours',
      patientSatisfactionScore: 91, // Not explicitly stated, keeping existing
      recommendationRate: 93
    },
    prosAndCons: {
      pros: [
        'Highly personalized care approach',
        'Specialist doctors with extensive experience',
        'Multiple consultation options (in-person/video/phone)',
        'Comprehensive treatment plans', 
        'Multilingual support' 
      ],
      cons: [ 
        'Higher pricing than average',
        'Longer initial consultations may not suit everyone',
        'Limited locations for in-person appointments',
        'May have longer wait times for specific specialists'
      ],
      standoutFeatures: [
        'Personalized treatment approach',
        'Specialist expertise in complex conditions', 
        'Multilingual services', 
        'Harley Street location' 
      ],
      potentialDrawbacks: [
        'Premium pricing',
        'London-centric for in-person care',
        'More intensive time commitment'
      ]
    },
    pharmacy: {
      inHousePharmacy: true, // "Mamedica operates its own MHRA-licensed dispensary"
      partnerPharmacies: [], // In-house, so no external partners
      availableProducts: {
        flowers: ['GMP-certified flower (indoor hydroponic and irradiated)'],
        oils: ['Adven CBD', 'Tilray', 'Spectrum', 'Althea', 'Khiron', 'Medcan'],
        capsules: ['Adven Capsules', 'Tilray Capsules', 'Spectrum Capsules'],
        topicals: ['Adven Balm', 'Cannaray Balm'],
        vaporizers: ['Storz & Bickel', 'Arizer', 'PAX', 'DynaVap']
      },
      stockAvailability: 'excellent',
      deliveryOptions: {
        standard: { days: '1-2 days', cost: 8 }, // "next-day tracked delivery (£8)"
        express: { days: 'Next day', cost: 8 }, // Assuming express is same cost as standard next-day
        sameDay: { areas: ['London'], cost: 25 } // "same-day London courier (£25)"
      }
    },
    verdict: {
      overallScore: 8.9,
      bestFor: [
        'Patients with complex medical conditions',
        'Those seeking highly personalized care',
        'Patients wanting in-person consultations', 
        'People requiring multilingual support' 
      ],
      notIdealFor: [ 
        'Budget-conscious patients',
        'Those seeking quick, minimal consultations',
        'Patients outside London wanting in-person care'
      ],
      keyStrengths: [
        'Exceptional personalized care',
        'Specialist expertise',
        'Comprehensive treatment plans', 
        'Multiple consultation options' 
      ],
      areasForImprovement: [ 
        'Expand locations for in-person consultations',
        'Reduce pricing for follow-up appointments',
        'Improve appointment availability'
      ],
      recommendationLevel: 'highly-recommended',
      summary: 'Mamedica stands out for its highly personalized approach to medical cannabis treatment, with a focus on comprehensive care from specialist doctors. While their premium pricing may not suit all patients, those with complex conditions or seeking the highest level of personalized care will find their approach particularly valuable. The clinic excels in providing multilingual support and offers both in-person and remote consultation options.',
      lastUpdated: '2024-02-05'
    } 
  },
  {
    overview: {
      id:'curaleaf-monthly',
      name: 'Curaleaf® Monthly',
      tagline: 'Flexible monthly medical cannabis care',
      description: 'Curaleaf Monthly offers a flexible, pay-as-you-go approach to medical cannabis treatment without long-term commitments, ideal for patients who prefer month-to-month care.',
      website: 'https://curaleafclinic.com',
      phone: '0203 488 4200',
      email: 'info@curaleafclinic.com',
      address: {
        street: '25 Medical Plaza',
        city: 'Manchester',
        postcode: 'M1 3DG',
        region: 'Greater Manchester'
      },
      establishedYear: 2019,
      logoUrl: '/images/curaleaf-logo.png',
      heroImageUrl: '/images/curaleaf-hero.jpg'
    },
    accreditations: [
      {
        type: 'MHRA',
        name: 'MHRA Registered Clinic',
        certificationNumber: 'MHRA-2019-CUR-001',
        validUntil: '2025-12-31',
        verifiedDate: '2024-01-15'
      },
      {
        type: 'CQC',
        name: 'Care Quality Commission Registered',
        certificationNumber: 'CQC-CUR-2019',
        validUntil: '2025-06-30',
        verifiedDate: '2024-01-15'
      }
    ],
    services: {
      consultationTypes: ['video', 'phone'],
      specialties: ['Chronic Pain', 'Anxiety', 'Sleep Disorders', 'Neurological Conditions'],
      conditions: [
        'Chronic Pain',
        'Fibromyalgia',
        'Arthritis',
        'Anxiety Disorders',
        'PTSD',
        'Insomnia',
        'Epilepsy',
        'Multiple Sclerosis',
        'Migraine',
        'IBS'
      ],
      languages: ['English'],
      accessibility: ['Screen reader compatible', 'Large print materials'],
      homeDelivery: true,
      urgentAppointments: false,
      followUpSupport: true,
      educationalResources: true
    },
    pricing: {
      initialConsultation: {
        price: 75,
        duration: 30, // Assuming 30 min for general review
        includes: ['Medical assessment', 'Treatment plan', 'Prescription if appropriate']
      },
      followUpConsultation: {
        price: 49,
        duration: 15,
        includes: ['Progress review', 'Dose adjustments', 'Prescription renewal']
      },
      prescriptionFee: 30,
      deliveryFee: 10,
      membershipOptions: [],
      estimatedAnnualCost: {
        low: 1600,
        average: 2200,
        high: 3200
      }
    },
    patientExperience: {
      overallRating: 4.3,
      totalReviews: 645,
      ratingBreakdown: {
        5: 320,
        4: 190,
        3: 95,
        2: 30,
        1: 10
      },
      averageWaitTime: '1-2 weeks',
      nextAvailableAppointment: '10 days',
      responseTime: '24-48 hours',
      patientSatisfactionScore: 84,
      recommendationRate: 86
    },
    prosAndCons: {
      pros: [
        'No long-term commitment required',
        'Lower initial consultation fee',
        'Flexible treatment approach',
        'Established brand with good reputation',
        'Wide range of conditions treated'
      ],
      cons: [
        'No membership benefits or discounts',
        'Higher long-term costs compared to annual plans',
        'Longer wait times for appointments',
        'No urgent appointment options',
        'No in-person consultations'
      ],
      standoutFeatures: [
        'Month-to-month flexibility',
        'No long-term contracts',
        'Established reputation',
        'Broad condition coverage'
      ],
      potentialDrawbacks: [
        'Less cost-effective for long-term patients',
        'Fewer premium services',
        'Limited consultation options'
      ]
    },
    pharmacy: {
      inHousePharmacy: true,
      partnerPharmacies: [],
      availableProducts: {
        flowers: ['Adven', 'Khiron', 'Aurora', 'Noidecs', 'Spectrum'],
        oils: ['Adven CBD', 'Tilray', 'Spectrum', 'Noidecs'],
        capsules: ['Adven Capsules', 'Spectrum Capsules'],
        topicals: [],
        vaporizers: ['Storz & Bickel', 'PAX']
      },
      stockAvailability: 'good',
      deliveryOptions: {
        standard: { days: '2-3 days', cost: 10 },
        express: { days: 'Next day', cost: 20 }
      }
    },
    verdict: {
      overallScore: 7.8,
      bestFor: [
        'Patients unsure about long-term treatment',
        'Those seeking lower upfront costs',
        'Patients who prefer flexibility',
        'First-time medical cannabis patients'
      ],
      notIdealFor: [
        'Patients needing urgent appointments',
        'Those wanting in-person consultations',
        'Long-term patients seeking cost savings',
        'Patients requiring intensive support'
      ],
      keyStrengths: [
        'Flexible month-to-month approach',
        'Lower initial costs',
        'Established reputation',
        'In-house pharmacy'
      ],
      areasForImprovement: [
        'Add urgent appointment options',
        'Introduce in-person consultations',
        'Improve response times',
        'Expand product range'
      ],
      recommendationLevel: 'recommended',
      summary: 'Curaleaf Monthly offers a flexible approach to medical cannabis treatment without requiring long-term commitments. While it may not be the most cost-effective option for long-term patients, its lower initial costs and month-to-month flexibility make it an excellent choice for those new to medical cannabis or uncertain about committing to extended treatment. The established reputation and in-house pharmacy provide additional confidence for patients.',
      lastUpdated: '2024-01-25'
    }
  },
  {
    overview: {
      id:'alternaleaf-membership',
      name: 'Alternaleaf Membership',
      tagline: 'Affordable medical cannabis through membership',
      description: 'Alternaleaf offers a membership-based approach to medical cannabis treatment, focusing on making treatment more affordable and accessible for patients across the UK.',
      website: 'https://alternaleaf.com',
      phone: '0203 488 4200',
      email: 'hello@alternaleaf.com',
      address: {
        street: '123 Medical Centre',
        city: 'London',
        postcode: 'SW1A 1AA',
        region: 'Greater London'
      },
      establishedYear: 2021,
      logoUrl: '/images/alternaleaf-logo.png',
      heroImageUrl: '/images/alternaleaf-hero.jpg'
    },
    accreditations: [
      {
        type: 'MHRA',
        name: 'MHRA Registered Clinic',
        certificationNumber: 'MHRA-2021-ALT-001',
        validUntil: '2025-12-31',
        verifiedDate: '2024-01-15'
      },
      {
        type: 'CQC',
        name: 'Care Quality Commission Registered',
        certificationNumber: 'CQC-ALT-2021',
        validUntil: '2025-06-30',
        verifiedDate: '2024-01-15'
      },
      {
        type: 'GMC',
        name: 'GMC Specialist Doctors',
        verifiedDate: '2024-01-15'
      }
    ],
    services: {
      consultationTypes: ['video', 'phone'],
      specialties: ['Chronic Pain', 'Anxiety', 'Sleep Disorders', 'PTSD'],
      conditions: [
        'Chronic Pain',
        'Fibromyalgia',
        'Arthritis',
        'Anxiety Disorders',
        'PTSD',
        'Insomnia',
        'Depression',
        'Epilepsy'
      ],
      languages: ['English'],
      accessibility: ['Wheelchair accessible', 'Hearing loop', 'Large print materials'],
      homeDelivery: true,
      urgentAppointments: false,
      followUpSupport: true,
      educationalResources: true
    },
    pricing: {
      initialConsultation: {
        price: 149,
        duration: 45,
        includes: ['Medical assessment', 'Treatment plan', 'Prescription if appropriate', 'Educational materials']
      },
      followUpConsultation: {
        price: 49,
        duration: 20,
        includes: ['Progress review', 'Dose adjustments', 'Prescription renewal']
      },
      prescriptionFee: 0, // "Repeat prescription Free"
      deliveryFee: 10,
      membershipOptions: [
        {
          name: 'Premium Care Plan',
          annualFee: 199,
          benefits: [
            'Reduced consultation fees',
            'Priority booking',
            'Free educational resources',
            'Direct specialist access', 
            'Reduced follow-up fees', 
            'Quarterly treatment reviews', 
            'Personalized educational resources' 
          ]
        }
      ],
      estimatedAnnualCost: {
        low: 1275, // Subsequent years
        average: 1350, // First year
        high: 4200
      }
    },
    patientExperience: {
      overallRating: 4.6,
      totalReviews: 892,
      ratingBreakdown: {
        5: 520,
        4: 267,
        3: 89,
        2: 12,
        1: 4
      },
      averageWaitTime: '4 days',
      nextAvailableAppointment: '4 days',
      responseTime: '24 hours',
      patientSatisfactionScore: 91, // Not explicitly stated, keeping existing
      recommendationRate: 93
    },
    prosAndCons: {
      pros: [
        'Membership model reduces long-term costs',
        'Strong community support network',
        'Multiple consultation options (in-person/video/phone)',
        'Comprehensive treatment plans', 
        'Multilingual support' 
      ],
      cons: [
        'Higher pricing than average',
        'No urgent appointment availability',
        'Membership fee required for best pricing',
        'May have longer wait times for specific specialists'
      ],
      standoutFeatures: [
        'Membership-based cost savings',
        'Specialist expertise in complex conditions', 
        'Multilingual services', 
        'Harley Street location' 
      ],
      potentialDrawbacks: [
        'No in-person consultations',
        'Limited urgent care options',
        'London-centric for in-person care',
        'More intensive time commitment'
      ]
    },
    pharmacy: {
      inHousePharmacy: true, // "Mamedica operates its own MHRA-licensed dispensary"
      partnerPharmacies: [], // In-house, so no external partners
      availableProducts: {
        flowers: ['GMP-certified flower (indoor hydroponic and irradiated)'],
        oils: ['Adven CBD', 'Tilray', 'Cannatrek', 'Spectrum'],
        capsules: ['Adven Capsules', 'Tilray Capsules'],
        topicals: ['Adven Balm'],
        vaporizers: ['Storz & Bickel', 'Arizer']
      },
      stockAvailability: 'good',
      deliveryOptions: {
        standard: { days: '1-2 days', cost: 8 }, // "next-day tracked delivery (£8)"
        express: { days: 'Next day', cost: 8 }, // Assuming express is same cost as standard next-day
        sameDay: { areas: ['London'], cost: 25 } // "same-day London courier (£25)"
      }
    },
    verdict: {
      overallScore: 8.2,
      bestFor: [
        'Budget-minded adults with stable chronic pain, anxiety or insomnia',
        'Veterans seeking reduced fees',
        'Confident self-managers comfortable with annual reviews',
        'Patients wanting minimal appointment burden'
      ],
      notIdealFor: [
        'Complex mental-health cases',
        'Paediatric patients',
        'Anyone anticipating frequent dosage adjustments',
        'Patients requiring multidisciplinary support'
      ],
      keyStrengths: [
        'Lowest long-term consultation cost in UK',
        'Twelve-month review cycle',
        'Veterans Access Scheme',
        'Integrated pharmacy'
      ],
      areasForImprovement: [
        'Add in-person consultation options',
        'Expand multidisciplinary services',
        'Improve response times for urgent queries'
      ],
      recommendationLevel: 'highly-recommended',
      summary: 'Mamedica wins on long-term affordability and minimal appointment burden. Patients comfortable with once-yearly reviews can keep professional-fee expenditure to just £75 a year after initial setup—cheaper than any subscription or pay-per-consultation model currently on the market.',
      lastUpdated: '2024-01-20'
    },
    
    // Review-specific fields
    review_published: true,
    review_slug: 'alternaleaf-review'
  },
  {
    overview: {
      id:'mamedica',
      name: 'Mamedica',
      tagline: 'Value-for-life medical cannabis care',
      description: 'Mamedica focuses on providing cost-effective long-term medical cannabis treatment with minimal appointment burden and the lowest ongoing consultation costs in the UK.',
      website: 'https://mamedica.co.uk',
      phone: '0203 488 4200',
      email: 'info@mamedica.co.uk',
      address: {
        street: '78 Harley Street',
        city: 'London', 
        postcode: 'W1G 7HJ',
        region: 'Greater London'
      },
      establishedYear: 2020,
      logoUrl: '/images/mamedica-logo.png',
      heroImageUrl: '/images/mamedica-hero.jpg'
    },
    accreditations: [
      {
        type: 'MHRA',
        name: 'MHRA Registered Clinic',
        certificationNumber: 'MHRA-2020-MAM-001',
        validUntil: '2025-12-31',
        verifiedDate: '2024-01-15'
      },
      {
        type: 'CQC',
        name: 'Care Quality Commission Registered',
        certificationNumber: 'CQC-MAM-2020',
        validUntil: '2025-06-30',
        verifiedDate: '2024-01-15'
      },
      {
        type: 'CQC',
        name: 'Care Quality Commission Registered',
        certificationNumber: '1-11445632489',
        validUntil: '2025-06-30',
        verifiedDate: '2024-06-01'
      },
      {
        type: 'MHRA',
        name: 'MHRA GDP (Good Distribution Practice) Certificate',
        verifiedDate: '2024-07-16'
      },
      {
        type: 'GMC',
        name: 'GMC Specialist Doctors',
        verifiedDate: '2024-01-15'
      }
    ],
    services: {
      consultationTypes: ['video'],
      specialties: ['Chronic Pain', 'Neuropathic Disorders', 'Multiple Sclerosis', 'Anxiety', 'PTSD', 'Insomnia', 'Fibromyalgia', 'Migraine', 'Adult ADHD'],
      conditions: [
        'Chronic Pain',
        'Fibromyalgia', 
        'Multiple Sclerosis',
        'Epilepsy',
        'Anxiety Disorders',
        'PTSD',
        'Insomnia',
        'Migraine',
        'Adult ADHD',
        'Neuropathic Pain'
      ],
      languages: ['English'],
      accessibility: ['Wheelchair accessible', 'Hearing loop', 'Translation services'],
      homeDelivery: true,
      urgentAppointments: true,
      followUpSupport: true,
      educationalResources: true
    },
    pricing: {
      initialConsultation: {
        price: 150,
        duration: 30,
        includes: ['Comprehensive assessment', 'Detailed treatment plan', 'Prescription if appropriate']
      },
      followUpConsultation: {
        price: 75,
        duration: 20,
        includes: ['Annual review', 'Treatment assessment', 'Prescription renewal']
      },
      prescriptionFee: 0,
      deliveryFee: 4.95,
      membershipOptions: [],
      estimatedAnnualCost: {
        low: 1275,
        average: 1350,
        high: 4200
      }
    },
    patientExperience: {
      overallRating: 4.5,
      totalReviews: 1200,
      ratingBreakdown: {
        5: 720,
        4: 360,
        3: 96,
        2: 18,
        1: 6
      },
      averageWaitTime: '5 days',
      nextAvailableAppointment: '5 days',
      responseTime: '8 hours',
      patientSatisfactionScore: 89,
      recommendationRate: 91
    },
    prosAndCons: {
      pros: [
        'Lowest long-term consultation cost (£75/year)',
        'Twelve-month review cycle minimises appointment fatigue',
        'Free repeat prescriptions and integrated pharmacy',
        'Veterans Access Scheme reduces costs for ex-service personnel',
        'Transparent, pay-as-you-go structure with no hidden fees'
      ],
      cons: [
        '£150 entry fee is higher than most competitors',
        'Extra reviews cost £75—expensive if frequent titration required',
        'No in-house allied-health or mental-health therapies',
        'Fully remote model may deter patients preferring physical exams',
        'Appointment-response times slower than subscription rivals'
      ],
      standoutFeatures: [
        'Twelve-month review cycle',
        'Veterans Access Scheme',
        'Integrated pharmacy',
        'Free repeat prescriptions'
      ],
      potentialDrawbacks: [
        'Higher upfront costs',
        'Limited multidisciplinary services',
        'Remote-only consultations'
      ]
    },
    pharmacy: {
      inHousePharmacy: true,
      partnerPharmacies: [],
      availableProducts: {
        flowers: ['EU-GMP flower from Canada, Australia and Portugal'],
        oils: ['Balanced oils', 'High-CBD oils', 'MCT-based formulations'],
        capsules: ['Soft-gel capsules'],
        topicals: [],
        vaporizers: []
      },
      stockAvailability: 'good',
      deliveryOptions: {
        standard: { days: 'Next day', cost: 4.95 },
        express: { days: 'Next day', cost: 0 }
      }
    },
    verdict: {
      overallScore: 9.0,
      bestFor: [
        'Budget-minded adults with stable chronic pain, anxiety or insomnia',
        'Veterans seeking reduced fees',
        'Confident self-managers comfortable with annual reviews',
        'Patients wanting minimal appointment burden'
      ],
      notIdealFor: [
        'Complex mental-health cases',
        'Paediatric patients',
        'Anyone anticipating frequent dosage adjustments',
        'Patients requiring multidisciplinary support'
      ],
      keyStrengths: [
        'Lowest long-term consultation cost in UK',
        'Twelve-month review cycle',
        'Veterans Access Scheme',
        'Integrated pharmacy'
      ],
      areasForImprovement: [
        'Add in-person consultation options',
        'Expand multidisciplinary services',
        'Improve response times for urgent queries'
      ],
      recommendationLevel: 'highly-recommended',
      summary: 'Mamedica wins on long-term affordability and minimal appointment burden. Patients comfortable with once-yearly reviews can keep professional-fee expenditure to just £75 a year after initial setup—cheaper than any subscription or pay-per-consultation model currently on the market.',
      lastUpdated: '2024-01-25'
    },
    
    // Review-specific fields
    review_published: true,
    review_slug: 'mamedica-review'
  }
];

// Keep the existing Mamedica entry for backward compatibility but mark as duplicate
const legacyMamedicaEntry: FullClinicProfile = {
  overview: {
    id:'mamedica-legacy',
    name: 'Mamedica',
    tagline: 'Personalized medical cannabis care',
    description: 'Mamedica focuses on providing highly personalized medical cannabis treatment with an emphasis on one-on-one care and tailored treatment plans for each patient.',
    website: 'https://mamedica.co.uk',
    phone: '0203 488 4200',
    email: 'info@mamedica.co.uk',
    address: {
      street: '78 Harley Street',
      city: 'London', 
      postcode: 'W1G 7HJ',
      region: 'Greater London'
    },
    establishedYear: 2020,
    logoUrl: '/images/mamedica-logo.png',
    heroImageUrl: '/images/mamedica-hero.jpg'
  },
  accreditations: [
    {
      type: 'MHRA',
      name: 'MHRA Registered Clinic',
      certificationNumber: 'MHRA-2020-MAM-001',
      validUntil: '2025-12-31',
      verifiedDate: '2024-01-15'
    },
    {
      type: 'CQC',
      name: 'Care Quality Commission Registered',
      certificationNumber: 'CQC-MAM-2020',
      validUntil: '2025-06-30',
      verifiedDate: '2024-01-15'
    },
    {
      type: 'CQC',
      name: 'Care Quality Commission Registered',
      certificationNumber: '1-11445632489',
      validUntil: '2025-06-30',
      verifiedDate: '2024-06-01' // Last routine inspection: June 2024
    },
    {
      type: 'MHRA',
      name: 'MHRA GDP (Good Distribution Practice) Certificate',
      verifiedDate: '2024-07-16'
    },
    {
      type: 'GMC',
      name: 'GMC Specialist Doctors',
      verifiedDate: '2024-01-15'
    }
  ],
  services: {
    consultationTypes: ['in-person', 'video', 'phone'],
    specialties: ['Chronic Pain', 'Neuropathic Disorders', 'Multiple Sclerosis', 'Anxiety', 'PTSD', 'Chemotherapy-induced Nausea'],
    conditions: [
      'Chronic Pain',
      'Fibromyalgia', 
      'Multiple Sclerosis',
      'Epilepsy',
      'Anxiety Disorders',
      'PTSD',
      'Depression',
      'Cancer-related symptoms',
      'Parkinson\'s Disease',
      'Tourette\'s Syndrome'
    ],
    languages: ['English'], // Review only mentions English implicitly
    accessibility: ['Wheelchair accessible', 'Hearing loop', 'Translation services'],
    homeDelivery: true,
    urgentAppointments: true,
    followUpSupport: true,
    educationalResources: true
  },
  pricing: {
    initialConsultation: {
      price: 150,
      duration: 30,
      includes: ['Comprehensive assessment', 'Detailed treatment plan', 'Prescription if appropriate']
    },
    followUpConsultation: {
      price: 75,
      duration: 30, // Assuming 30 min for general review
      includes: ['Progress review', 'Dose adjustments', 'Prescription renewal']
    },
    prescriptionFee: 0, // "Repeat prescription Free"
    deliveryFee: 10,
    membershipOptions: [
      {
        name: 'Premium Care Plan',
        annualFee: 299,
        benefits: [
          'Priority appointments',
          'Direct specialist access', 
          'Reduced follow-up fees', 
          'Quarterly treatment reviews', 
          'Personalized educational resources' 
        ]
      }
    ],
    estimatedAnnualCost: {
      low: 1275, // Subsequent years
      average: 1350, // First year
      high: 4200
    }
  },
  patientExperience: {
    overallRating: 4.7,
    totalReviews: 876,
    ratingBreakdown: {
      5: 590,
      4: 210,
      3: 56,
      2: 15,
      1: 5
    },
    averageWaitTime: '4 days',
    nextAvailableAppointment: '4 days',
    responseTime: '24 hours',
    patientSatisfactionScore: 91, // Not explicitly stated, keeping existing
    recommendationRate: 93
  },
  prosAndCons: {
    pros: [
      'Highly personalized care approach',
      'Specialist doctors with extensive experience',
      'Multiple consultation options (in-person/video/phone)',
      'Comprehensive treatment plans', 
      'Multilingual support' 
    ],
    cons: [ 
      'Higher pricing than average',
      'Longer initial consultations may not suit everyone',
      'Limited locations for in-person appointments',
      'May have longer wait times for specific specialists'
    ],
    standoutFeatures: [
      'Personalized treatment approach',
      'Specialist expertise in complex conditions', 
      'Multilingual services', 
      'Harley Street location' 
    ],
    potentialDrawbacks: [
      'Premium pricing',
      'London-centric for in-person care',
      'More intensive time commitment'
    ]
  },
  pharmacy: {
    inHousePharmacy: true, // "Mamedica operates its own MHRA-licensed dispensary"
    partnerPharmacies: [], // In-house, so no external partners
    availableProducts: {
      flowers: ['GMP-certified flower (indoor hydroponic and irradiated)'],
      oils: ['Adven CBD', 'Tilray', 'Spectrum', 'Althea', 'Khiron', 'Medcan'],
      capsules: ['Adven Capsules', 'Tilray Capsules', 'Spectrum Capsules'],
      topicals: ['Adven Balm', 'Cannaray Balm'],
      vaporizers: ['Storz & Bickel', 'Arizer', 'PAX', 'DynaVap']
    },
    stockAvailability: 'excellent',
    deliveryOptions: {
      standard: { days: '1-2 days', cost: 8 }, // "next-day tracked delivery (£8)"
      express: { days: 'Next day', cost: 8 }, // Assuming express is same cost as standard next-day
      sameDay: { areas: ['London'], cost: 25 } // "same-day London courier (£25)"
    }
  },
  verdict: {
    overallScore: 8.9,
    bestFor: [
      'Patients with complex medical conditions',
      'Those seeking highly personalized care',
      'Patients wanting in-person consultations', 
      'People requiring multilingual support' 
    ],
    notIdealFor: [ 
      'Budget-conscious patients',
      'Those seeking quick, minimal consultations',
      'Patients outside London wanting in-person care'
    ],
    keyStrengths: [
      'Exceptional personalized care',
      'Specialist expertise',
      'Comprehensive treatment plans', 
      'Multiple consultation options' 
    ],
    areasForImprovement: [ 
      'Expand locations for in-person consultations',
      'Reduce pricing for follow-up appointments',
      'Improve appointment availability'
    ],
    recommendationLevel: 'highly-recommended',
    summary: 'Mamedica stands out for its highly personalized approach to medical cannabis treatment, with a focus on comprehensive care from specialist doctors. While their premium pricing may not suit all patients, those with complex conditions or seeking the highest level of personalized care will find their approach particularly valuable. The clinic excels in providing multilingual support and offers both in-person and remote consultation options.',
    lastUpdated: '2024-02-05'
  },
  
  // Review-specific fields
  review_published: false,
  review_slug: null
};