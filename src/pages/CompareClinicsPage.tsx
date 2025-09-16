import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Search, Filter, Star, Clock, Calendar, 
  MapPin, DollarSign, CheckCircle, X, Info, 
  ExternalLink, ChevronDown, ChevronUp
} from 'lucide-react';
import { useClinicData } from '../context/ClinicDataProvider';
import type { FullClinicProfile } from '../types/clinic';
import StarRating from '../components/common/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

const CompareClinicsPage: React.FC = () => {
  const navigate = useNavigate();
  const { clinics = [], isLoading, error } = useClinicData();
  const [selectedClinics, setSelectedClinics] = useState<FullClinicProfile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClinics, setFilteredClinics] = useState<FullClinicProfile[]>([]);
  const [showClinicSelector, setShowClinicSelector] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['basic', 'pricing', 'services']);

  useEffect(() => {
    // Initialize with top 3 clinics if available
    if (clinics.length > 0 && selectedClinics.length === 0) {
      setSelectedClinics(clinics.slice(0, 3));
    }
    
    // Filter clinics based on search term
    const filtered = clinics.filter(clinic => 
      clinic.overview?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClinics(filtered);
  }, [clinics, searchTerm, selectedClinics.length]);

  const handleAddClinic = (clinic: FullClinicProfile) => {
    if (selectedClinics.length < 4 && !selectedClinics.some(c => c.overview?.id === clinic.overview?.id)) {
      setSelectedClinics([...selectedClinics, clinic]);
    }
    setShowClinicSelector(false);
  };

  const handleRemoveClinic = (clinicId: string) => {
    setSelectedClinics(selectedClinics.filter(c => c.overview?.id !== clinicId));
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section) 
        : [...prev, section]
    );
  };

  const isExpanded = (section: string) => expandedSections.includes(section);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-red-600 mb-4">Error loading clinic data.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Compare Clinics', path: '/compare' }
        ]}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Compare UK Medical Cannabis Clinics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Side-by-side comparison of pricing, services, and features to help you choose the right clinic.
            </p>
          </div>
        </div>
      </div>

      {/* Clinic Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Clinics to Compare</h2>
          
          <div className="flex flex-wrap gap-4 mb-4">
            {selectedClinics.map((clinic) => (
              <div 
                key={clinic.overview?.id} 
                className="flex items-center bg-blue-50 rounded-lg px-4 py-2 border border-blue-200"
              >
                <span className="font-medium text-blue-800">{clinic.overview?.name}</span>
                <button
                  onClick={() => handleRemoveClinic(clinic.overview?.id || '')}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            
            {selectedClinics.length < 4 && (
              <button
                onClick={() => setShowClinicSelector(!showClinicSelector)}
                className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
              >
                <span className="text-gray-700">Add Clinic</span>
                {showClinicSelector ? (
                  <ChevronUp className="h-4 w-4 ml-2" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-2" />
                )}
              </button>
            )}
          </div>
          
          {showClinicSelector && (
            <div className="mt-4 border border-gray-200 rounded-lg p-4">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search clinics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="max-h-60 overflow-y-auto">
                {filteredClinics
                  .filter(clinic => !selectedClinics.some(c => c.overview?.id === clinic.overview?.id))
                  .map((clinic) => (
                    <button
                      key={clinic.overview?.id}
                      onClick={() => handleAddClinic(clinic)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <div className="font-medium">{clinic.overview?.name}</div>
                      <div className="text-sm text-gray-500">
                        Initial Consultation: £{clinic.pricing?.initialConsultation?.price || 'N/A'}
                      </div>
                    </button>
                  ))}
                
                {filteredClinics.filter(clinic => !selectedClinics.some(c => c.overview?.id === clinic.overview?.id)).length === 0 && (
                  <div className="text-center py-4 text-gray-500">
                    No clinics found matching your search.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Comparison Table */}
        {selectedClinics.length > 0 ? (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            {/* Basic Information Section */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('basic')}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                {isExpanded('basic') ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {isExpanded('basic') && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                          Feature
                        </th>
                        {selectedClinics.map((clinic) => (
                          <th key={clinic.overview?.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {clinic.overview?.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Rating
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <StarRating value={Math.round(clinic.patientExperience?.overallRating || 0)} size={16} />
                              <span className="ml-2">{clinic.patientExperience?.overallRating?.toFixed(1) || 'N/A'}</span>
                              <span className="ml-1 text-gray-400">({clinic.patientExperience?.totalReviews || 0})</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Location
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {clinic.overview?.address?.city || 'Virtual'}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Established
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {clinic.overview?.establishedYear || 'N/A'}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Next Available
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {clinic.patientExperience?.nextAvailableAppointment || 'Contact clinic'}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Consultation Types
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {clinic.services?.consultationTypes?.map(type => 
                              type.charAt(0).toUpperCase() + type.slice(1)
                            ).join(', ') || 'Not specified'}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            {/* Pricing Section */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('pricing')}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">Pricing</h3>
                {isExpanded('pricing') ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {isExpanded('pricing') && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                          Feature
                        </th>
                        {selectedClinics.map((clinic) => (
                          <th key={clinic.overview?.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {clinic.overview?.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Initial Consultation
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="font-semibold text-blue-600">£{clinic.pricing?.initialConsultation?.price || 'N/A'}</div>
                            <div className="text-xs text-gray-400">{clinic.pricing?.initialConsultation?.duration || 'N/A'} mins</div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Follow-up Consultation
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="font-semibold text-green-600">£{clinic.pricing?.followUpConsultation?.price || 'N/A'}</div>
                            <div className="text-xs text-gray-400">{clinic.pricing?.followUpConsultation?.duration || 'N/A'} mins</div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Prescription Fee
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            £{clinic.pricing?.prescriptionFee || 'N/A'}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Delivery Fee
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            £{clinic.pricing?.deliveryFee || 'N/A'}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Annual Cost (Average)
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="font-semibold text-purple-600">£{clinic.pricing?.estimatedAnnualCost?.average || 'N/A'}</div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Membership Options
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {clinic.pricing?.membershipOptions && clinic.pricing.membershipOptions.length > 0 ? (
                              <div>
                                <div className="font-medium">{clinic.pricing.membershipOptions[0].name}</div>
                                <div className="text-xs text-gray-400">£{clinic.pricing.membershipOptions[0].annualFee}/year</div>
                              </div>
                            ) : (
                              'None'
                            )}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            {/* Services Section */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">Services & Features</h3>
                {isExpanded('services') ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {isExpanded('services') && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                          Feature
                        </th>
                        {selectedClinics.map((clinic) => (
                          <th key={clinic.overview?.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {clinic.overview?.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Specialties
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 text-sm text-gray-500">
                            <div className="flex flex-wrap gap-1">
                              {(clinic.services?.specialties || []).slice(0, 3).map((specialty, index) => (
                                <span key={index} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                                  {specialty}
                                </span>
                              ))}
                              {(clinic.services?.specialties?.length || 0) > 3 && (
                                <span className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs">
                                  +{(clinic.services?.specialties?.length || 0) - 3} more
                                </span>
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Home Delivery
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {clinic.services?.homeDelivery ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <X className="h-5 w-5 text-red-500" />
                            )}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Urgent Appointments
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {clinic.services?.urgentAppointments ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <X className="h-5 w-5 text-red-500" />
                            )}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Follow-up Support
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {clinic.services?.followUpSupport ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <X className="h-5 w-5 text-red-500" />
                            )}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Educational Resources
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {clinic.services?.educationalResources ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <X className="h-5 w-5 text-red-500" />
                            )}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          In-House Pharmacy
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {clinic.pharmacy?.inHousePharmacy ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <X className="h-5 w-5 text-red-500" />
                            )}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            {/* Verdict Section */}
            <div>
              <button
                onClick={() => toggleSection('verdict')}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">Verdict & Recommendations</h3>
                {isExpanded('verdict') ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {isExpanded('verdict') && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                          Feature
                        </th>
                        {selectedClinics.map((clinic) => (
                          <th key={clinic.overview?.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {clinic.overview?.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Overall Score
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="font-semibold text-blue-600">{clinic.verdict?.overallScore || 'N/A'}/10</div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Recommendation Level
                        </td>
                        {selectedClinics.map((clinic) => {
                          const level = clinic.verdict?.recommendationLevel || '';
                          let badgeColor = 'bg-gray-100 text-gray-800';
                          
                          if (level === 'highly-recommended') badgeColor = 'bg-green-100 text-green-800';
                          else if (level === 'recommended') badgeColor = 'bg-blue-100 text-blue-800';
                          else if (level === 'conditional') badgeColor = 'bg-yellow-100 text-yellow-800';
                          else if (level === 'not-recommended') badgeColor = 'bg-red-100 text-red-800';
                          
                          return (
                            <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeColor}`}>
                                {level.replace('-', ' ')}
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Best For
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 text-sm text-gray-500">
                            <ul className="list-disc pl-5 space-y-1">
                              {(clinic.verdict?.bestFor || []).map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Not Ideal For
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 text-sm text-gray-500">
                            <ul className="list-disc pl-5 space-y-1">
                              {(clinic.verdict?.notIdealFor || []).map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                          Visit Website
                        </td>
                        {selectedClinics.map((clinic) => (
                          <td key={clinic.overview?.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a
                              href={clinic.overview?.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:text-blue-800"
                            >
                              Visit Website
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <Info className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-4">Select clinics to compare</p>
            <button
              onClick={() => setShowClinicSelector(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Add Clinics
            </button>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help Choosing the Right Clinic?
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Take our quick quiz to get personalized clinic recommendations based on your specific needs.
          </p>
          <button
            onClick={() => navigate('/quiz')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors"
          >
            Take our three-minute quiz
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        {/* Medical Disclaimer */}
        <div className="mt-8">
          <MedicalDisclaimer />
        </div>
      </div>
    </div>
  );
};

export default CompareClinicsPage;