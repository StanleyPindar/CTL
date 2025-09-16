import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, ExternalLink, 
  Mail, Lock 
} from 'lucide-react';
import { useClinicData } from '../context/ClinicDataProvider';
import StarRating from '../components/common/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import EmailCaptureModal from '../components/EmailCaptureModal';
import MetaTags from '../components/MetaTags';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clinics } = useClinicData();
  
  // Parse query parameters to get quiz responses
  const queryParams = new URLSearchParams(location.search);
  const condition = queryParams.get('condition') || '';
  const budget = queryParams.get('budget') || '';
  const location_pref = queryParams.get('location') || '';
  const urgency = queryParams.get('urgency') || '';
  
  // State for matched clinics
  const [matchedClinics, setMatchedClinics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  
  // Calculate matches based on query parameters
  useEffect(() => {
    if (clinics.length === 0) return;
    
    setLoading(true);
    
    // Simple matching algorithm
    const matches = clinics.map(clinic => {
      let score = 0;
      let matchReasons = [];
      
      // Match condition
      if (condition && clinic.services?.specialties?.some(s => 
        s.toLowerCase().includes(condition.toLowerCase().replace('-', ' '))
      )) {
        score += 40;
        matchReasons.push(`Specializes in ${condition.replace('-', ' ')} treatment`);
      }
      
      // Match budget
      const consultationPrice = clinic.pricing?.initialConsultation?.price || 0;
      const annualCost = clinic.pricing?.estimatedAnnualCost?.average || 0;
      const monthlyCost = (consultationPrice / 6) + (annualCost / 12);
      
      if (budget === 'under-150' && monthlyCost <= 150) {
        score += 25;
        matchReasons.push('Fits within your budget range');
      } else if (budget === '150-250' && monthlyCost >= 150 && monthlyCost <= 250) {
        score += 25;
        matchReasons.push('Fits within your budget range');
      } else if (budget === '250-400' && monthlyCost >= 250 && monthlyCost <= 400) {
        score += 25;
        matchReasons.push('Fits within your budget range');
      } else if (budget === '400-plus' && monthlyCost >= 400) {
        score += 25;
        matchReasons.push('Fits within your budget range');
      }
      
      // Match location
      if (location_pref === 'virtual' && clinic.services?.consultationTypes?.includes('video')) {
        score += 15;
        matchReasons.push('Offers virtual consultations');
      } else if (location_pref && clinic.overview?.address?.city?.toLowerCase().includes(location_pref.toLowerCase())) {
        score += 15;
        matchReasons.push('Located in your preferred area');
      }
      
      // Match urgency
      const waitTime = clinic.patientExperience?.nextAvailableAppointment || '';
      if (urgency === 'this-week' && waitTime.includes('day')) {
        score += 10;
        matchReasons.push('Available within your preferred timeframe');
      } else if (urgency === 'two-weeks' && (waitTime.includes('day') || waitTime.includes('week') && parseInt(waitTime) <= 2)) {
        score += 10;
        matchReasons.push('Available within your preferred timeframe');
      }
      
      // Add some randomness to avoid identical scores
      score += Math.random() * 5;
      
      // Ensure we have at least one reason
      if (matchReasons.length === 0) {
        matchReasons.push('Good overall match for your needs');
      }
      
      // Ensure we have at least 2 reasons
      if (matchReasons.length === 1) {
        if (clinic.patientExperience?.overallRating > 4.5) {
          matchReasons.push('Highly rated by patients');
        } else if (clinic.patientExperience?.recommendationRate > 90) {
          matchReasons.push(`${clinic.patientExperience.recommendationRate}% of patients recommend this clinic`);
        } else {
          matchReasons.push('Offers comprehensive treatment options');
        }
      }
      
      // Calculate match percentage (60-99%)
      const matchPercentage = Math.min(99, Math.max(60, Math.round(score)));
      
      return {
        clinic,
        score,
        matchPercentage,
        matchReasons
      };
    });
    
    // Sort by score and take top matches
    const sortedMatches = matches.sort((a, b) => b.score - a.score).slice(0, 5);
    setMatchedClinics(sortedMatches);
    setLoading(false);
  }, [clinics, condition, budget, location_pref, urgency]);
  
  // Handle email capture
  const handleEmailCapture = (data: { email: string; name: string }) => {
    setEmailCaptured(true);
    setShowEmailCapture(false);
  };
  
  // Handle booking click
  const handleBookingClick = (clinic: any) => {
    if (clinic.overview?.website) {
      window.open(clinic.overview.website, '_blank', 'noopener,noreferrer');
    }
  };
  
  // Handle view profile click
  const handleViewProfile = (clinicId: string) => {
    navigate(`/clinic/${clinicId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Your Medical Cannabis Clinic Matches - Personalized Results"
        description="Your personalized medical cannabis clinic recommendations based on your quiz responses. Find the perfect UK clinic for your specific needs."
        canonicalUrl="https://comparetheleaf.co.uk/results"
        keywords={['clinic matches', 'personalized recommendations', 'medical cannabis results', 'clinic finder results']}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Results', path: '/results' }
        ]}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {emailCaptured 
                ? 'Your Personalized Clinic Matches' 
                : 'Your Top Clinic Matches'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {emailCaptured 
                ? 'Based on your responses, here are your best-matched clinics for your specific needs' 
                : 'Enter your email to unlock detailed clinic information, pricing, and booking links'}
            </p>
            
            {!emailCaptured && (
              <button
                onClick={() => setShowEmailCapture(true)}
                className="mt-6 inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Mail className="h-5 w-5 mr-2" />
                Unlock Full Results
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6 mb-10">
          {matchedClinics.slice(0, emailCaptured ? 5 : 3).map((match, index) => (
            <div 
              key={match.clinic.overview?.id || index} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className="p-8">
                {/* Match Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {match.clinic.overview?.name || 'Unknown Clinic'}
                      </h3>
                      <div className="flex items-center">
                        <div className="text-lg font-semibold text-green-600 mr-4">
                          {match.matchPercentage}% match
                        </div>
                        <div className="flex items-center">
                          <StarRating value={Math.round(match.clinic.patientExperience?.overallRating || 0)} size={18} />
                          <span className="ml-1 text-sm text-gray-600">
                            {match.clinic.patientExperience?.overallRating?.toFixed(1) || 'N/A'} 
                            ({match.clinic.patientExperience?.totalReviews || 0})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      £{match.clinic.pricing?.initialConsultation?.price || 'TBC'}
                    </div>
                    <div className="text-sm text-gray-500">consultation</div>
                  </div>
                </div>

                {/* Match Reasons */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Why this clinic matches you:</h4>
                  <ul className="space-y-2">
                    {match.matchReasons.map((reason: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clinic Description */}
                {emailCaptured && (
                  <div className="mb-6">
                    <p className="text-gray-600 line-clamp-3">
                      {match.clinic.overview?.description}
                    </p>
                  </div>
                )}

                {/* Pricing & Details */}
                {emailCaptured && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-500">Follow-up:</div>
                      <div className="font-medium text-gray-900 mt-1">
                        £{match.clinic.pricing?.followUpConsultation?.price || 'TBC'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Annual cost:</div>
                      <div className="font-medium text-gray-900 mt-1">
                        £{match.clinic.pricing?.estimatedAnnualCost?.average || 'TBC'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Wait time:</div>
                      <div className="font-medium text-gray-900 mt-1">
                        {match.clinic.patientExperience?.nextAvailableAppointment || 'Contact clinic'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Location:</div>
                      <div className="font-medium text-gray-900 mt-1">
                        {match.clinic.overview?.address?.city || 'Virtual'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {emailCaptured ? (
                    <>
                      <button
                        onClick={() => handleBookingClick(match.clinic)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all font-medium flex items-center justify-center shadow-md hover:shadow-lg"
                      >
                        Book Consultation
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleViewProfile(match.clinic.overview?.id)}
                        className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center"
                      >
                        View Full Profile
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setShowEmailCapture(true)}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                    >
                      <Lock className="h-5 w-5 mr-2" />
                      Unlock Booking & Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to Compare These Clinics Side-by-Side?
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Use our comparison tool to see detailed differences in pricing, services, and features.
          </p>
          <button
            onClick={() => navigate('/compare')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors"
          >
            Compare Clinics
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        {/* Medical Disclaimer */}
        <div className="mt-8">
          <MedicalDisclaimer />
        </div>
      </div>
      
      {/* Email Capture Modal */}
      <EmailCaptureModal
        isOpen={showEmailCapture}
        onClose={() => setShowEmailCapture(false)}
        onSubmit={handleEmailCapture}
      />
    </div>
  );
};

export default ResultsPage;