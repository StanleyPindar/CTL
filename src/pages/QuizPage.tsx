import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, CheckCircle, Star, Calendar, Clock, Video, Truck, Shield, Users, CreditCard } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import DisclaimerPopup from '../components/DisclaimerPopup';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import QuizComponent from '../components/QuizComponent';
import { useClinicData } from '../context/ClinicDataProvider';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const { clinics } = useClinicData();
  const [currentStep, setCurrentStep] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  useEffect(() => {
    // Check if disclaimer has been accepted in this session
    const accepted = sessionStorage.getItem('disclaimerAccepted');
    if (accepted) {
      setDisclaimerAccepted(true);
    }
  }, []);

  const handleFindClinics = () => {
    if (disclaimerAccepted) {
      setCurrentStep(1);
    } else {
      setShowDisclaimer(true);
    }
  };

  const handleLearnLegalities = () => {
    navigate('/legalities');
  };

  // If disclaimer accepted, show the quiz component
  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gray-50">
        <MetaTags 
          title="Medical Cannabis Eligibility Checker UK - Find Your Perfect Clinic in 3 Minutes"
          description="Free medical cannabis eligibility checker & clinic matching quiz. Find perfect UK clinic for your condition, budget & location. 20+ verified MHRA regulated clinics. Used by 60,000+ patients."
          keywords={[
            'find medical cannabis clinic UK',
            'medical cannabis eligibility checker',
            'medical cannabis clinic quiz UK',
            'medical cannabis eligibility checker',
            'compare medical cannabis clinics',
            'medical cannabis consultation UK',
            'UK medical cannabis doctors',
            'medical cannabis cost calculator',
            'personalized clinic recommendations',
            'medical cannabis treatment UK',
            'book medical cannabis consultation',
            'urgent medical cannabis access',
            'how to get medical cannabis UK',
            'medical cannabis budget calculator',
            'best medical cannabis clinics UK',
            'get medical cannabis prescription UK'
          ]}
          canonicalUrl="https://comparetheleaf.co.uk/quiz"
          breadcrumbData={[
            { name: 'Home', url: 'https://comparetheleaf.co.uk/' },
            { name: 'Clinic Quiz', url: 'https://comparetheleaf.co.uk/quiz' }
          ]}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <QuizComponent clinics={clinics} />
        </div>
      </div>
    );
  }

  // Otherwise show the intro screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <MetaTags 
        title="Medical Cannabis Clinic Matching Quiz UK - Find Your Perfect Clinic in 3 Minutes"
        description="Find your perfect UK medical cannabis clinic in 3 minutes. Compare 20+ verified, MHRA regulated clinics, get personalized recommendations, and book consultations. Free, confidential, and used by 60,000+ patients."
        keywords={[
          'medical cannabis clinic quiz UK',
          'find medical cannabis clinic',
          'medical cannabis eligibility checker',
          'UK medical cannabis consultation',
          'compare medical cannabis clinics',
          'medical cannabis cost UK',
          'book medical cannabis appointment',
          'medical cannabis doctors UK',
          'personalized clinic matching',
          'medical cannabis treatment finder',
          'urgent medical cannabis access',
          'how to get medical cannabis UK',
          'best medical cannabis clinics UK',
          'medical cannabis prescription UK'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/quiz"
        breadcrumbData={[
          { name: 'Home', url: 'https://comparetheleaf.co.uk/' },
          { name: 'Clinic Quiz', url: 'https://comparetheleaf.co.uk/quiz' }
        ]}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-8">
            <img 
              src="/images/CTL_Logo_192 (1).webp" 
              alt="CompareTheLeaf Logo" 
              className="h-24 w-24 rounded-full"
              width="192"
              height="192"
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <Leaf className="h-16 w-16 text-white hidden" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect UK Medical Cannabis Clinic in 3 Minutes
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join 60,000+ UK patients who've found legal medical cannabis treatment. Compare 20+ verified, MHRA regulated clinics and get personalized recommendations instantly. Free clinic matching quiz used by thousands of patients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compare 20+ Clinics</h3>
              <p className="text-gray-600 text-sm">Verified specialists across the UK</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Strain Intelligence</h3>
              <p className="text-gray-600 text-sm">Personalized strain recommendations</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">See Pricing & Strains</h3>
              <p className="text-gray-600 text-sm">Transparent costs and availability</p>
            </div>
          </div>

          <button
            onClick={handleFindClinics}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mb-6"
          >
            Start My Clinic Match
          </button>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>Free</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>Unbiased</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>Confidential</span>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalDisclaimer />
        </div>

        {/* Disclaimer Popup */}
        <DisclaimerPopup
          isOpen={showDisclaimer}
          onClose={() => setShowDisclaimer(false)}
          onAccept={() => {
            setDisclaimerAccepted(true);
            sessionStorage.setItem('disclaimerAccepted', 'true');
            setShowDisclaimer(false);
            setCurrentStep(1);
          }}
        />
      </div>
    </div>
  );
};

export default QuizPage;