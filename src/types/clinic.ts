interface ClinicOverview {
  id: string;
  name: string;
  slug?: string;
  tagline?: string;
  description: string;
  website?: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    region: string;
  };
  establishedYear?: number;
  logoUrl?: string;
  heroImageUrl?: string;
}

interface ClinicServices {
  consultationTypes: ('in-person' | 'video' | 'phone')[];
  specialties: string[];
  conditions: string[];
  languages: string[];
  accessibility: string[];
  homeDelivery: boolean;
  urgentAppointments: boolean;
  followUpSupport: boolean;
  educationalResources: boolean;
}

interface ClinicPricing {
  initialConsultation: {
    price: number | null;
    duration: number;
    includes: string[];
  };
  followUpConsultation: {
    price: number | null;
    duration: number;
    includes: string[];
  };
  prescriptionFee: number | null;
  deliveryFee: number | null;
  membershipOptions: {
    name: string;
    annualFee: number;
    benefits: string[];
  }[];
  annualCostFirstYear?: number;
  estimatedAnnualCost: {
    low: number | null;
    average: number | null;
    high: number | null;
  };
}

interface PatientExperience {
  overallRating: number;
  totalReviews: number;
  ratingBreakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  averageWaitTime: string;
  nextAvailableAppointment: string;
  responseTime: string;
  patientSatisfactionScore: number;
  recommendationRate: number;
}

interface ClinicProsAndCons {
  pros: string[];
  cons: string[];
  standoutFeatures: string[];
  potentialDrawbacks: string[];
}

interface PharmacyIntegration {
  inHousePharmacy: boolean;
  partnerPharmacies: string[];
  availableProducts: {
    flowers: string[];
    oils: string[];
    capsules: string[];
    topicals: string[];
    vaporizers: string[];
  };
  stockAvailability: string;
  deliveryOptions: {
    standard: { days: string; cost: number };
    express: { days: string; cost: number };
    sameDay?: { areas: string[]; cost: number };
  };
}

interface ClinicVerdict {
  overallScore: number;
  bestFor: string[];
  notIdealFor: string[];
  keyStrengths: string[];
  areasForImprovement: string[];
  recommendationLevel: string;
  summary: string;
  lastUpdated: string;
}

interface ClinicAccreditation {
  type: string;
  name: string;
  certificationNumber?: string;
  validUntil?: string;
  verifiedDate: string;
}

export interface FullClinicProfile {
  overview: ClinicOverview;
  services: ClinicServices;
  pricing: ClinicPricing;
  patientExperience: PatientExperience;
  prosAndCons: ClinicProsAndCons;
  pharmacy: PharmacyIntegration;
  verdict: ClinicVerdict;
  accreditations: ClinicAccreditation[];
  
  // Review-specific fields
  review_introduction?: string;
  review_overview?: string;
  target_audience?: string;
  market_position_detail?: string;
  pricing_table?: PricingTableItem[];
  patient_process?: ProcessStep[];
  key_features?: KeyFeatureItem[];
  review_published?: boolean;
  review_slug?: string;
  cqc_registered?: boolean;
  clinic_logo_url?: string;
  hero_background_color?: string;
}

export interface PricingTableItem {
  fee_type: string;
  amount: string;
  frequency_notes: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface KeyFeatureItem {
  icon: string; // e.g., 'clock', 'target', 'users'
  title: string;
  description: string;
}