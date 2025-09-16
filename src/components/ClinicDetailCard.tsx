import React from 'react';
import { MapPin, Phone, Mail, Globe, Star, Calendar, Clock, Video, Truck, Shield, Users, CheckCircle, ExternalLink, FileText } from 'lucide-react';
import StarRating from './common/StarRating';
import { FullClinicProfile } from '../types/clinic';

interface ClinicDetailCardProps {
  clinic: FullClinicProfile;
  className?: string;
}

const ClinicDetailCard: React.FC<ClinicDetailCardProps> = ({ clinic, className = '' }) => {
  const getName = () => clinic?.overview?.name || 'Unknown Clinic';
  const getTagline = () => clinic?.overview?.tagline || '';
  const getDescription = () => clinic?.overview?.description || 'No description available';
  
  const getPhone = () => clinic?.overview?.phone || 'Contact clinic';
  const getEmail = () => clinic?.overview?.email || 'Contact clinic';
  const getWebsite = () => clinic?.overview?.website || '#';
  
  const getStreet = () => clinic?.overview?.address?.street || 'TBC';
  const getCity = () => clinic?.overview?.address?.city || 'TBC';
  const getPostcode = () => clinic?.overview?.address?.postcode || 'TBC';
  const getRegion = () => clinic?.overview?.address?.region || 'TBC';
  const getFullAddress = () => {
    const street = getStreet();
    const city = getCity();
    const postcode = getPostcode();
    
    if (street === 'TBC' && city === 'TBC' && postcode === 'TBC') {
      return 'Address not available';
    }
    
    return `${street}, ${city}, ${postcode}`;
  };
  
  const getRating = () => clinic?.patientExperience?.overallRating || 0;
  const getReviewCount = () => clinic?.patientExperience?.totalReviews || 0;
  
  const getWaitTime = () => clinic?.patientExperience?.averageWaitTime || 'Contact clinic';
  const getNextAvailable = () => clinic?.patientExperience?.nextAvailableAppointment || 'Contact clinic';
  const getResponseTime = () => clinic?.patientExperience?.responseTime || 'Contact clinic';
  
  const getInitialConsultationFee = () => clinic?.pricing?.initialConsultation?.price || 'TBC';
  const getFollowUpFee = () => clinic?.pricing?.followUpConsultation?.price || 'TBC';
  const getPrescriptionFee = () => clinic?.pricing?.prescriptionFee || 'TBC';
  const getDeliveryFee = () => clinic?.pricing?.deliveryFee || 'TBC';
  const getAnnualCostLow = () => clinic?.pricing?.estimatedAnnualCost?.low || 'TBC';
  const getAnnualCostAverage = () => clinic?.pricing?.estimatedAnnualCost?.average || 'TBC';
  const getAnnualCostHigh = () => clinic?.pricing?.estimatedAnnualCost?.high || 'TBC';
  
  const getSpecialties = () => clinic?.services?.specialties || [];
  const getConditions = () => clinic?.services?.conditions || [];
  const getConsultationTypes = () => clinic?.services?.consultationTypes || [];
  const getLanguages = () => clinic?.services?.languages || [];
  const getAccessibility = () => clinic?.services?.accessibility || [];
  
  const hasHomeDelivery = () => clinic?.services?.homeDelivery || false;
  const hasUrgentAppointments = () => clinic?.services?.urgentAppointments || false;
  const hasFollowUpSupport = () => clinic?.services?.followUpSupport || false;
  const hasEducationalResources = () => clinic?.services?.educationalResources || false;
  
  const hasInHousePharmacy = () => clinic?.pharmacy?.inHousePharmacy || false;
  const getPartnerPharmacies = () => clinic?.pharmacy?.partnerPharmacies || [];
  const getStockAvailability = () => clinic?.pharmacy?.stockAvailability || 'TBC';
  
  const getPros = () => clinic?.prosAndCons?.pros || [];
  const getCons = () => clinic?.prosAndCons?.cons || [];
  const getStandoutFeatures = () => clinic?.prosAndCons?.standoutFeatures || [];
  const getPotentialDrawbacks = () => clinic?.prosAndCons?.potentialDrawbacks || [];
  
  const getOverallScore = () => clinic?.verdict?.overallScore || 'TBC';
  const getBestFor = () => clinic?.verdict?.bestFor || [];
  const getNotIdealFor = () => clinic?.verdict?.notIdealFor || [];
  const getRecommendationLevel = () => clinic?.verdict?.recommendationLevel || 'TBC';
  
  const formatCurrency = (value: number | null | string) => {
    if (value === null) return 'TBC';
    if (value === 'TBC') return 'TBC';
    return `£${value}`;
  };
  
  const getRecommendationColor = () => {
    const level = getRecommendationLevel();
    switch (level) {
      case 'highly-recommended': return 'bg-green-100 text-green-800';
      case 'recommended': return 'bg-blue-100 text-blue-800';
      case 'conditional': return 'bg-yellow-100 text-yellow-800';
      case 'not-recommended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${className}`}>
      {/* Header Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{getName()}</h2>
            {getTagline() && <p className="text-gray-600 mb-2">{getTagline()}</p>}
            
            <div className="flex items-center mb-2">
              <StarRating value={Math.round(getRating())} size={18} />
              <span className="ml-2 text-lg font-semibold">{getRating().toFixed(1)}</span>
              <span className="text-gray-600 ml-1">({getReviewCount()} reviews)</span>
              
              <span className={`ml-4 px-2 py-0.5 text-xs font-medium rounded-full ${getRecommendationColor()}`}>
                {getRecommendationLevel().replace('-', ' ')}
              </span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{getFullAddress()}</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {formatCurrency(getInitialConsultationFee())}
            </div>
            <div className="text-sm text-gray-500">Initial Consultation</div>
            
            <div className="mt-2 text-sm">
              <span className="font-medium">Annual Cost:</span> {formatCurrency(getAnnualCostAverage())}
            </div>
          </div>
        </div>
      </div>
      
      {/* Description Section */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">About {getName()}</h3>
        <p className="text-gray-700">{getDescription()}</p>
      </div>
      
      {/* Contact Information */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {getPhone() !== 'Contact clinic' && (
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm font-medium text-gray-900">Phone</div>
                <a href={`tel:${getPhone()}`} className="text-blue-600 hover:underline">{getPhone()}</a>
              </div>
            </div>
          )}
          
          {getEmail() !== 'Contact clinic' && (
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm font-medium text-gray-900">Email</div>
                <a href={`mailto:${getEmail()}`} className="text-blue-600 hover:underline">{getEmail()}</a>
              </div>
            </div>
          )}
          
          {getWebsite() !== '#' && (
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="text-sm font-medium text-gray-900">Website</div>
                <a 
                  href={getWebsite()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Visit Website
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Pricing Information */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Initial Consultation</div>
            <div className="text-xl font-bold text-blue-600">{formatCurrency(getInitialConsultationFee())}</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Follow-up</div>
            <div className="text-xl font-bold text-green-600">{formatCurrency(getFollowUpFee())}</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Prescription Fee</div>
            <div className="text-xl font-bold text-purple-600">{formatCurrency(getPrescriptionFee())}</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Delivery Fee</div>
            <div className="text-xl font-bold text-orange-600">{formatCurrency(getDeliveryFee())}</div>
          </div>
        </div>
        
        <h4 className="font-medium text-gray-900 mb-3">Estimated Annual Costs</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 p-3 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Low Usage</div>
            <div className="text-lg font-semibold text-gray-900">{formatCurrency(getAnnualCostLow())}</div>
          </div>
          
          <div className="border border-gray-200 p-3 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Average Usage</div>
            <div className="text-lg font-semibold text-gray-900">{formatCurrency(getAnnualCostAverage())}</div>
          </div>
          
          <div className="border border-gray-200 p-3 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">High Usage</div>
            <div className="text-lg font-semibold text-gray-900">{formatCurrency(getAnnualCostHigh())}</div>
          </div>
        </div>
      </div>
      
      {/* Availability Information */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <div className="text-sm font-medium text-gray-900">Next Available</div>
              <div className="text-gray-700">{getNextAvailable()}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <div className="text-sm font-medium text-gray-900">Average Wait Time</div>
              <div className="text-gray-700">{getWaitTime()}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <div className="text-sm font-medium text-gray-900">Response Time</div>
              <div className="text-gray-700">{getResponseTime()}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services and Specialties */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Services & Specialties</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Specialties</h4>
            {getSpecialties().length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {getSpecialties().map((specialty, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Specialties not specified</p>
            )}
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Consultation Types</h4>
            {getConsultationTypes().length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {getConsultationTypes().map((type, index) => {
                  let icon = null;
                  if (type === 'video') icon = <Video className="h-4 w-4 mr-1" />;
                  if (type === 'in-person') icon = <Users className="h-4 w-4 mr-1" />;
                  if (type === 'phone') icon = <Phone className="h-4 w-4 mr-1" />;
                  
                  return (
                    <span key={index} className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {icon}
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500">Consultation types not specified</p>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-medium text-gray-900 mb-3">Service Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center">
              <CheckCircle className={`h-5 w-5 mr-2 ${hasHomeDelivery() ? 'text-green-500' : 'text-gray-300'}`} />
              <span className="text-gray-700">Home Delivery</span>
            </div>
            
            <div className="flex items-center">
              <CheckCircle className={`h-5 w-5 mr-2 ${hasUrgentAppointments() ? 'text-green-500' : 'text-gray-300'}`} />
              <span className="text-gray-700">Urgent Appointments</span>
            </div>
            
            <div className="flex items-center">
              <CheckCircle className={`h-5 w-5 mr-2 ${hasFollowUpSupport() ? 'text-green-500' : 'text-gray-300'}`} />
              <span className="text-gray-700">Follow-up Support</span>
            </div>
            
            <div className="flex items-center">
              <CheckCircle className={`h-5 w-5 mr-2 ${hasEducationalResources() ? 'text-green-500' : 'text-gray-300'}`} />
              <span className="text-gray-700">Educational Resources</span>
            </div>
            
            <div className="flex items-center">
              <CheckCircle className={`h-5 w-5 mr-2 ${hasInHousePharmacy() ? 'text-green-500' : 'text-gray-300'}`} />
              <span className="text-gray-700">In-House Pharmacy</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-medium text-gray-900 mb-3">Conditions Treated</h4>
          {getConditions().length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {getConditions().map((condition, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {condition}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Conditions not specified</p>
          )}
        </div>
      </div>
      
      {/* Pharmacy Information */}
      {(hasInHousePharmacy() || getPartnerPharmacies().length > 0) && (
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pharmacy Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Pharmacy Type</h4>
              {hasInHousePharmacy() ? (
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">In-House Pharmacy</span>
                </div>
              ) : (
                <div>
                  <div className="flex items-center mb-2">
                    <Truck className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-700">Partner Pharmacies</span>
                  </div>
                  
                  {getPartnerPharmacies().length > 0 ? (
                    <ul className="text-sm text-gray-600 pl-7 space-y-1">
                      {getPartnerPharmacies().map((pharmacy, index) => (
                        <li key={index}>• {pharmacy}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 pl-7">Partner pharmacies not specified</p>
                  )}
                </div>
              )}
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Stock Availability</h4>
              <div className="flex items-center">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  getStockAvailability() === 'excellent' ? 'bg-green-100 text-green-800' :
                  getStockAvailability() === 'good' ? 'bg-blue-100 text-blue-800' :
                  getStockAvailability() === 'fair' ? 'bg-yellow-100 text-yellow-800' :
                  getStockAvailability() === 'limited' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {getStockAvailability() === 'TBC' ? 'Not specified' : 
                   getStockAvailability().charAt(0).toUpperCase() + getStockAvailability().slice(1)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Pros and Cons */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pros & Cons</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Pros</h4>
            {getPros().length > 0 ? (
              <ul className="space-y-2">
                {getPros().map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{pro}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Pros not specified</p>
            )}
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Cons</h4>
            {getCons().length > 0 ? (
              <ul className="space-y-2">
                {getCons().map((con, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">×</span>
                    <span className="text-gray-700">{con}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Cons not specified</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Best For / Not Ideal For */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Best For</h4>
            {getBestFor().length > 0 ? (
              <ul className="space-y-2">
                {getBestFor().map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Best for information not specified</p>
            )}
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Not Ideal For</h4>
            {getNotIdealFor().length > 0 ? (
              <ul className="space-y-2">
                {getNotIdealFor().map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">×</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Not ideal for information not specified</p>
            )}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="p-6 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Ready to book a consultation?</h4>
            <p className="text-gray-600 text-sm">Next available: {getNextAvailable()}</p>
          </div>
          
          <div className="flex gap-3">
            {getWebsite() !== '#' && (
              <a
                href={getWebsite()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all shadow-sm"
              >
                Book Consultation
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            )}
            
            <a
              href="/quiz"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Find Similar Clinics
            </a>
            
            <a
              href={getName().toLowerCase().includes('cb1') ? '/reviews/cb1-medical-review' : 
                    getName().toLowerCase().includes('releaf') ? '/reviews/releaf-review' :
                    getName().toLowerCase().includes('mamedica') ? '/reviews/mamedica-review' :
                    getName().toLowerCase().includes('alternaleaf') ? '/reviews/alternaleaf-review' :
                    getName().toLowerCase().includes('cantourage') ? '/reviews/cantourage-review' :
                    getName().toLowerCase().includes('dispensed') ? '/reviews/dispensed-review' :
                    getName().toLowerCase().includes('birmingham') ? '/reviews/birmingham-cannabis-care-review' :
                    '/reviews'}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              Read Review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetailCard;