import React from 'react';
import { 
  ExternalLink, CreditCard, Video, ThumbsUp, 
  AlertTriangle, Check, Clock
} from 'lucide-react';
import AvailabilityBadge from './AvailabilityBadge';
import StarRating from '../common/StarRating';
import { FullClinicProfile } from '../../types/clinic';

interface ClinicCardProps {
  clinic: FullClinicProfile;
  onClick?: () => void;
}

const ClinicCard = React.memo<ClinicCardProps>(({ clinic, onClick }) => {
  // Add error boundary protection
  if (!clinic || !clinic.overview) {
    console.error('ClinicCard: Invalid clinic data received:', clinic);
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 shadow-sm">
        <div className="text-center text-red-600">
          <p className="font-medium">Clinic data unavailable</p>
          <p className="text-sm">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  // Helper functions to extract data from clinic object
  const clinicData = React.useMemo(() => ({
    name: clinic.overview?.name || 'Medical Cannabis Clinic',
    description: clinic.overview?.description || clinic.description || '',
    tagline: clinic.overview?.tagline || clinic.tagline || '',
    rating: clinic.patientExperience?.overallRating || clinic.rating || 4.0,
    reviews: clinic.patientExperience?.totalReviews || clinic.review_count || 0,
    recommendationRate: clinic.patientExperience?.recommendationRate || 0,
    consultationTypes: (() => {
      if (clinic.services?.consultationTypes && clinic.services.consultationTypes.length > 0) {
        return clinic.services.consultationTypes;
      }
      if (clinic.consultation_type) {
        return Array.isArray(clinic.consultation_type) ? clinic.consultation_type : [clinic.consultation_type];
      }
      return [];
    })(),
    specialties: clinic.services?.specialties || clinic.specialisations || [],
    pros: clinic.prosAndCons?.pros || clinic.pros || [],
    cons: clinic.prosAndCons?.cons || clinic.cons || [],
    standoutFeatures: clinic.prosAndCons?.standoutFeatures || clinic.features || [],
    potentialDrawbacks: clinic.prosAndCons?.potentialDrawbacks || [],
    overallScore: clinic.verdict?.overallScore || 'TBC',
    bestFor: clinic.verdict?.bestFor || (clinic.best_for ? [clinic.best_for] : []),
    notIdealFor: clinic.verdict?.notIdealFor || [],
    recommendationLevel: clinic.verdict?.recommendationLevel || clinic.recommendation_level || 'TBC',
    summary: clinic.verdict?.summary || clinic.summary || '',
    lastUpdated: clinic.verdict?.lastUpdated || clinic.last_updated || '',
    nextAvailable: clinic.patientExperience?.nextAvailableAppointment || clinic.waiting_time || clinic.appointment_availability || clinic.nextAvail || "Contact clinic",
    initialCost: clinic.pricing?.initialConsultation?.price ?? clinic.consultation_fee ?? 0,
    followUpCost: clinic.pricing?.followUpConsultation?.price ?? clinic.follow_up_fee ?? 0,
    prescriptionCost: clinic.pricing?.prescriptionFee ?? clinic.prescription_fee ?? 0,
    annualCost: clinic.pricing?.estimatedAnnualCost?.average ?? clinic.annual_cost ?? 0,
    hasHomeDelivery: clinic.services?.homeDelivery || false,
    hasUrgentAppointments: clinic.services?.urgentAppointments || clinic.urgent_appointments || false,
    hasInHousePharmacy: clinic.pharmacy?.inHousePharmacy || false,
    website: clinic.overview?.website || clinic.booking_url || ''
  }), [clinic]);

  const getConsultationTypes = () => {
    if (clinic.services?.consultationTypes && clinic.services.consultationTypes.length > 0) {
      return clinic.services.consultationTypes;
    }
    if (clinic.consultation_type) {
      return Array.isArray(clinic.consultation_type) ? clinic.consultation_type : [clinic.consultation_type];
    }
    return [];
  };

  const getPros = () => clinic.prosAndCons?.pros || clinic.pros || [];
  const getCons = () => clinic.prosAndCons?.cons || clinic.cons || [];
  const getStandoutFeatures = () => clinic.prosAndCons?.standoutFeatures || clinic.features || [];
  const getPotentialDrawbacks = () => clinic.prosAndCons?.potentialDrawbacks || [];

  const getOverallScore = () => clinic.verdict?.overallScore || 'TBC';
  const getBestFor = () => clinic.verdict?.bestFor || (clinic.best_for ? [clinic.best_for] : []);
  const getNotIdealFor = () => clinic.verdict?.notIdealFor || [];
  const getKeyStrengths = () => clinic.verdict?.keyStrengths || clinic.key_strengths || [];
  const getAreasForImprovement = () => clinic.verdict?.areasForImprovement || [];
  const getRecommendationLevel = () => clinic.verdict?.recommendationLevel || clinic.recommendation_level || 'TBC';
  const getSummary = () => clinic.verdict?.summary || clinic.summary || '';
  const getLastUpdated = () => clinic.verdict?.lastUpdated || clinic.last_updated || '';
  
  const getClinicSlug = React.useMemo(() => {
    const name = getName();
    return name.toLowerCase().replace(/\s+/g, '-');
  }, [getName()]);

  const getNextAvailable = () => clinic.patientExperience?.nextAvailableAppointment || clinic.waiting_time || clinic.appointment_availability || clinic.nextAvail || "Contact clinic";
  const getInitialCost = () => {
    const price = clinic.pricing?.initialConsultation?.price ?? clinic.consultation_fee ?? 0;
    return `£${price}`;
  };
  
  const getFollowUpCost = () => {
    const price = clinic.pricing?.followUpConsultation?.price ?? clinic.follow_up_fee ?? 0;
    return `£${price}`;
  };
  
  const getPrescriptionCost = () => {
    const price = clinic.pricing?.prescriptionFee ?? clinic.prescription_fee ?? 0;
    return `£${price}`;
  };
  
  const getAnnualCost = () => {
    const price = clinic.pricing?.estimatedAnnualCost?.average ?? clinic.annual_cost ?? 0;
    return `£${price}`;
  };
  const hasHomeDelivery = () => clinic.services?.homeDelivery || false;
  const hasUrgentAppointments = () => clinic.services?.urgentAppointments || clinic.urgent_appointments || false;
  const hasInHousePharmacy = () => clinic.pharmacy?.inHousePharmacy || false;

  const waitTime = clinicData.nextAvailable;

  return (
    <article 
      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
      style={{ minHeight: '400px' }} // Prevent layout shift
      onClick={onClick}
      itemScope 
      itemType="https://schema.org/MedicalBusiness"
    >
      {/* Header */}
      <header className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1" itemProp="name">
            {clinicData.name}
          </h3>
          <p className="text-sm text-gray-500 mb-1 line-clamp-1" itemProp="description">{clinicData.tagline || clinicData.description}</p>
          
          {/* Rating */}
          <div className="flex items-center mb-1" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <StarRating value={Math.round(clinicData.rating)} size={16} />
            <span className="text-sm font-medium ml-1" itemProp="ratingValue">{clinicData.rating.toFixed(1)}</span>
            <span className="text-xs text-gray-500 ml-1">(<span itemProp="reviewCount">{clinicData.reviews}</span> reviews)</span>
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
          </div>
          {clinicData.recommendationRate > 0 && (
            <div className="text-xs text-gray-600">
              Recommendation Rate: {clinicData.recommendationRate}%
            </div>
          )}
        </div>
        <div className="text-right">
          <AvailabilityBadge waitTime={waitTime} className="mt-1" />
        </div>
      </header>

      {/* Cost box */}
      <div className="rounded-lg bg-gray-50 p-3 text-sm mb-3 border border-gray-100">
        <h4 className="font-medium text-gray-900 mb-1 text-xs">Pricing:</h4>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          <div className="flex items-center">
            <CreditCard className="h-3.5 w-3.5 text-blue-600 mr-1.5" />
            <span>Initial: <span className="font-semibold">£{clinicData.initialCost}</span></span>
          </div>
          <div className="flex items-center">
            <CreditCard className="h-3.5 w-3.5 text-purple-600 mr-1.5" />
            <span>Follow-up: <span className="font-semibold">£{clinicData.followUpCost}</span></span>
          </div>
          <div className="flex items-center">
            <CreditCard className="h-3.5 w-3.5 text-green-600 mr-1.5" />
            <span>Prescription: <span className="font-semibold">£{clinicData.prescriptionCost}</span></span>
          </div>
          <div className="flex items-center">
            <CreditCard className="h-3.5 w-3.5 text-orange-600 mr-1.5" />
            <span>Annual: <span className="font-semibold">£{clinicData.annualCost}</span></span>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <section className="mb-2 flex-grow">
        <div className="flex flex-wrap gap-1 mb-3">
          {clinicData.hasHomeDelivery && (
            <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
              Home Delivery
            </span>
          )}
          {clinicData.hasUrgentAppointments && (
            <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs">
              Urgent Appointments
            </span>
          )}
          {clinicData.hasInHousePharmacy && (
            <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full text-xs">
              In-House Pharmacy
            </span>
          )}
        </div>
        
        <h4 className="font-medium text-gray-900 mb-1 text-xs">Specialties:</h4>
        <div className="flex flex-wrap gap-1">
          {clinicData.specialties.length > 0 ? (
            <>
              {clinicData.specialties.slice(0, 3).map((specialty, index) => (
                <span key={index} className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {specialty}
                </span>
              ))}
              {clinicData.specialties.length > 3 && (
                <span className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs">
                  +{clinicData.specialties.length - 3} more
                </span>
              )}
            </>
          ) : (
            <span className="text-xs text-gray-500">General practice</span>
          )}
        </div>
      </section>

      {/* Consultation Types */}
      <section className="mb-2 flex-grow">
        <h4 className="font-medium text-gray-900 mb-1 text-xs">Consultation Types:</h4>
        <div className="flex flex-wrap gap-1">
          {clinicData.consultationTypes.length > 0 ? (
            clinicData.consultationTypes.map((type, index) => (
              <span key={index} className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {type === 'video' && <Video className="h-3 w-3 mr-1" />}
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            ))
          ) : null}
        </div>
      </section>
      
      {/* Pros & Cons */}
      <section className="mb-2 flex-grow">
        <h4 className="font-medium text-gray-900 mb-1 text-xs">Pros & Cons:</h4>
        <div className="grid grid-cols-2 gap-1">
          <div>
            <h5 className="text-xs font-medium text-gray-700">Pros:</h5>
            {clinicData.pros.length > 0 ? (
              <ul className="text-xs text-gray-600 space-y-1">
                {clinicData.pros.slice(0, 2).map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <ThumbsUp className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1 text-[10px]">{pro}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div>
            <h5 className="text-xs font-medium text-gray-700">Cons:</h5>
            {clinicData.cons.length > 0 ? (
              <ul className="text-xs text-gray-600 space-y-1">
                {clinicData.cons.slice(0, 2).map((con, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-3 w-3 text-orange-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1 text-[10px]">{con}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </section>
      
      {/* Standout Features & Drawbacks */}
      <section className="mb-2 flex-grow">
        <h4 className="font-medium text-gray-900 mb-1 text-xs">Features & Drawbacks:</h4>
        <div className="grid grid-cols-2 gap-1">
          <div>
            <h5 className="text-xs font-medium text-gray-700">Standout Features:</h5>
            {clinicData.standoutFeatures.length > 0 ? (
              <ul className="text-xs text-gray-600 space-y-1">
                {clinicData.standoutFeatures.slice(0, 2).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1 text-[10px]">{feature}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div>
            <h5 className="text-xs font-medium text-gray-700">Potential Drawbacks:</h5>
            {clinicData.potentialDrawbacks.length > 0 ? (
              <ul className="text-xs text-gray-600 space-y-1">
                {clinicData.potentialDrawbacks.slice(0, 2).map((drawback, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-3 w-3 text-orange-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1 text-[10px]">{drawback}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </section>
      
      {/* Verdict */}
      <section className="mb-2 flex-grow">
        <h4 className="font-medium text-gray-900 mb-1 text-xs">Verdict:</h4>
        <div className="text-xs">
          <div className="flex justify-between mb-1">
            <span className="font-medium">Overall Score:</span>
            <span className="text-blue-600 font-semibold">{clinicData.overallScore}/10</span>
          </div>
          <div className="mb-1">
            <span className="font-medium">Recommendation Level:</span>
            <span className="ml-1 px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full text-[10px]">
              {clinicData.recommendationLevel.replace('-', ' ')}
            </span>
          </div>
          <div className="mb-1">
            <span className="font-medium">Summary:</span>
            <p className="text-[10px] text-gray-600 mt-0.5 line-clamp-1">{clinicData.summary}</p>
          </div>
          <div className="text-[9px] text-gray-500">Last Updated: {clinicData.lastUpdated}</div>
        </div>
      </section>

      {/* Footer actions */}
      <footer className="flex items-center justify-between mt-auto pt-2 border-t border-gray-200 flex-shrink-0">
        <div className="text-[10px] text-gray-500">
          <div>Next Available: <span className="font-medium">{clinicData.nextAvailable}</span></div>
        </div>
        <div className="flex gap-2">
          <button 
            className="rounded-full bg-gradient-to-r from-blue-600 to-green-600 px-3 py-1 text-xs font-medium text-white shadow hover:shadow-md hover:from-blue-700 hover:to-green-700 transition-all duration-200 inline-flex items-center transform hover:scale-105"
            onClick={(e) => {
              e.stopPropagation(); 
              const websiteUrl = clinicData.website;
              if (websiteUrl) {
                window.open(websiteUrl, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            Book {waitTime.includes('today') ? 'Today' : ('(' + waitTime + ')')}
            <ExternalLink className="ml-1 h-3.5 w-3.5" />
          </button>
          <button 
            className="rounded border border-gray-300 px-3 py-1 text-xs hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              // Navigate to review page based on clinic name
              const clinicName = clinic.overview?.name?.toLowerCase() || '';
              let reviewPath = '/reviews';
              
              if (clinicName.includes('cb1')) reviewPath = '/reviews/cb1-medical-review';
              else if (clinicName.includes('releaf')) reviewPath = '/reviews/releaf-review';
              else if (clinicName.includes('mamedica')) reviewPath = '/reviews/mamedica-review';
              else if (clinicName.includes('alternaleaf')) reviewPath = '/reviews/alternaleaf-review';
              else if (clinicName.includes('cantourage')) reviewPath = '/reviews/cantourage-review';
              else if (clinicName.includes('dispensed')) reviewPath = '/reviews/dispensed-review';
              else if (clinicName.includes('birmingham')) reviewPath = '/reviews/birmingham-cannabis-care-review';
              
              window.location.href = reviewPath;
            }}
          >
            Read Review
          </button>
        </div>
      </footer>
    </article>
  );
});

export default ClinicCard;