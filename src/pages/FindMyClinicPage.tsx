import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, Shield, Award, Users, Calendar, 
  ArrowRight, Mail, MapPin, FileText, Clock, 
  Scale, Stethoscope, Quote, Star, AlertTriangle,
  ChevronRight, ChevronLeft, Leaf, Phone, X
} from 'lucide-react';
import { useClinicData } from '../context/ClinicDataProvider';
import StarRating from '../components/common/StarRating';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import MVPMatchingAlgorithm from '../utils/matchingAlgorithm';
import EmailCaptureModal from '../components/EmailCaptureModal';
import MetaTags from '../components/MetaTags';

const FindMyClinicPage: React.FC = () => {
  const navigate = useNavigate();
  const { clinics } = useClinicData();
  
  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [matches, setMatches] = useState<any[]>([]);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // UK-specific quiz questions
  const quizQuestions = [
    {
      id: 'condition',
      question: "What condition are you seeking treatment for?",
      options: [
        { value: 'chronic-pain', label: 'Chronic Pain', description: 'Back pain, arthritis, fibromyalgia' },
        { value: 'anxiety', label: 'Anxiety & Mental Health', description: 'GAD, panic attacks, depression' },
        { value: 'insomnia', label: 'Insomnia & Sleep Issues', description: 'Difficulty sleeping, sleep disorders' },
        { value: 'epilepsy', label: 'Epilepsy & Seizures', description: 'Treatment-resistant epilepsy' },
        { value: 'ptsd', label: 'PTSD & Trauma', description: 'Post-traumatic stress disorder' },
        { value: 'cancer', label: 'Cancer-related Symptoms', description: 'Chemotherapy side effects' },
        { value: 'other', label: 'Other Condition', description: 'Multiple sclerosis, etc.' }
      ]
    },
    {
      id: 'location',
      question: "What's your UK location?",
      options: [
        { value: 'london', label: 'London & South East', description: 'Greater London area' },
        { value: 'manchester', label: 'Manchester & North West', description: 'Greater Manchester area' },
        { value: 'birmingham', label: 'Birmingham & Midlands', description: 'West Midlands area' },
        { value: 'leeds', label: 'Leeds & Yorkshire', description: 'Yorkshire region' },
        { value: 'glasgow', label: 'Glasgow & Scotland', description: 'Scotland region' },
        { value: 'other-city', label: 'Other Major UK City', description: 'Cardiff, Newcastle, etc.' },
        { value: 'online', label: 'Prefer Online Consultation', description: 'Video/phone appointments' }
      ]
    },
    {
      id: 'experience',
      question: "Have you tried medical cannabis before?",
      options: [
        { value: 'never', label: 'Never Tried Cannabis', description: 'Complete beginner' },
        { value: 'some-experience', label: 'Some Experience', description: 'Tried CBD or recreational' },
        { value: 'regular-user', label: 'Regular User', description: 'Currently self-medicating' },
        { value: 'cbd-only', label: 'CBD Products Only', description: 'Only tried CBD oils/products' }
      ]
    },
    {
      id: 'consultation-type',
      question: "What's your preferred consultation type?",
      options: [
        { value: 'face-to-face', label: 'Face-to-Face in Clinic', description: 'In-person appointment' },
        { value: 'video', label: 'Video Consultation', description: 'Online video call' },
        { value: 'phone', label: 'Phone Consultation', description: 'Telephone appointment' },
        { value: 'no-preference', label: 'No Preference', description: 'Whatever works best' }
      ]
    },
    {
      id: 'priority',
      question: "What's most important to you?",
      options: [
        { value: 'cost', label: 'Lowest Cost', description: 'Most affordable option' },
        { value: 'speed', label: 'Fastest Appointment', description: 'Available this week' },
        { value: 'experience', label: 'Most Experienced Doctors', description: 'Specialist expertise' },
        { value: 'reviews', label: 'Best Patient Reviews', description: 'Highest rated clinics' }
      ]
    },
    {
      id: 'budget',
      question: "What's your budget for initial consultation?",
      options: [
        { value: 'under-100', label: 'Under £100', description: 'Budget-friendly options' },
        { value: '100-150', label: '£100-£150', description: 'Mid-range pricing' },
        { value: '150-200', label: '£150-£200', description: 'Premium options' },
        { value: '200-plus', label: '£200+', description: 'Cost not a concern' }
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    const newResponses = { ...responses, [quizQuestions[currentQuestion].id]: value };
    setResponses(newResponses);

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => calculateMatches(newResponses), 500);
    }
  };

  const calculateMatches = (quizResponses: Record<string, string>) => {
    setIsLoading(true);
    
    // Use existing matching algorithm
    const algorithm = new MVPMatchingAlgorithm(clinics || []);
    const calculatedMatches = algorithm.calculateMatches(quizResponses);
    
    setMatches(calculatedMatches.slice(0, 3)); // Top 3 matches
    setShowResults(true);
    setShowEmailCapture(true);
    setIsLoading(false);
  };

  const handleEmailCapture = (data: { email: string; name: string }) => {
    setEmailCaptured(true);
    setShowEmailCapture(false);
    
    // Track conversion
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleBooking = (clinic: any) => {
    if (clinic.overview?.website) {
      window.open(clinic.overview.website, '_blank', 'noopener,noreferrer');
    }
  };

  const formatCurrency = (value: number | undefined) => {
    if (!value) return 'TBC';
    return `£${value}`;
  };

  // UK compliance badges
  const complianceBadges = [
    {
      icon: Shield,
      title: 'MHRA Regulated',
      description: 'All clinics follow strict MHRA guidelines'
    },
    {
      icon: Scale,
      title: 'Legal Since 2018',
      description: 'Fully compliant with UK regulations'
    },
    {
      icon: Award,
      title: 'Licensed Specialists',
      description: 'Only GMC-registered doctors prescribe'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Pharmaceutical standards met'
    }
  ];

  const ukStats = [
    { number: '36,000+', label: 'UK Patients Treated', description: 'Since 2018' },
    { number: '20+', label: 'Licensed UK Clinics', description: 'MHRA regulated' },
    { number: '95%', label: 'Patient Satisfaction', description: 'Would recommend' },
    { number: '£205M', label: 'UK Market Value', description: 'Growing industry' }
  ];

  const patientTestimonials = [
    {
      name: 'Sarah M.',
      location: 'Manchester',
      condition: 'Chronic Pain',
      rating: 5,
      text: 'After 8 years of chronic pain, medical cannabis has given me my life back. The process was much easier than I expected.',
      clinic: 'Licensed UK Clinic'
    },
    {
      name: 'James T.',
      location: 'London',
      condition: 'Anxiety',
      rating: 5,
      text: 'My anxiety is finally manageable without the side effects of traditional medications. Highly recommend.',
      clinic: 'Licensed UK Clinic'
    },
    {
      name: 'Emma L.',
      location: 'Birmingham',
      condition: 'Insomnia',
      rating: 4,
      text: 'Sleeping through the night for the first time in years. The specialist was incredibly knowledgeable.',
      clinic: 'Licensed UK Clinic'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4 mx-auto"></div>
          <p className="text-lg text-gray-600">Finding your perfect UK clinic matches...</p>
        </div>
      </div>
    );
  }

  if (showResults && emailCaptured) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Results Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Your Perfect UK Clinic Matches
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on your responses, here are your top-matched licensed UK medical cannabis clinics
              </p>
            </div>
          </div>
        </div>

        {/* Clinic Matches */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            {matches.map((match, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {match.clinic.overview?.name || 'Licensed UK Clinic'}
                      </h3>
                      <div className="flex items-center mb-2">
                        <div className="text-lg font-semibold text-green-600 mr-4">
                          {match.matchPercentage}% match
                        </div>
                        <div className="flex items-center">
                          <StarRating value={Math.round(match.clinic.patientExperience?.overallRating || 4.5)} size={18} />
                          <span className="ml-1 text-sm text-gray-600">
                            {match.clinic.patientExperience?.overallRating?.toFixed(1) || '4.5'} 
                            ({match.clinic.patientExperience?.totalReviews || 0})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{match.clinic.overview?.address?.city || 'UK Wide'}</span>
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

                {/* Clinic Details */}
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
                      {match.clinic.overview?.address?.city || 'UK Wide'}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => handleBooking(match.clinic)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all font-medium flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    Book Consultation
                    <Calendar className="ml-2 h-4 w-4" />
                  </button>
                  <button
                    onClick={() => navigate(`/clinic/${match.clinic.overview?.id}`)}
                    className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center"
                  >
                    View Full Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want to Compare More UK Clinics?
            </h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Explore our full database of licensed UK medical cannabis clinics
            </p>
            <button
              onClick={() => navigate('/clinics')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Browse All UK Clinics
            </button>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-8">
            <MedicalDisclaimer />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Find My Perfect Medical Cannabis Clinic UK - Personalized Matching"
        description="Find your perfect UK medical cannabis clinic with our personalized matching system. Answer 6 questions for tailored clinic recommendations based on your needs."
        canonicalUrl="https://comparetheleaf.co.uk/find-my-clinic"
        keywords={['find medical cannabis clinic', 'clinic matching', 'personalized clinic recommendations', 'UK cannabis clinic finder']}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full mb-8">
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
              <Leaf className="h-16 w-16 text-blue-600 hidden" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect UK Medical Cannabis Clinic in 2 Minutes
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Answer 6 Questions for Personalized UK Clinic Recommendations
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Used by 10,000+ UK Patients</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Shield className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">100% Legal Since 2018</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Award className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Licensed Clinics Only</span>
              </div>
            </div>

            {!showResults && (
              <div className="bg-white bg-opacity-10 rounded-lg p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-1" />
                    <span>Free</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-1" />
                    <span>Unbiased</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-1" />
                    <span>Confidential</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      {!showResults && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {quizQuestions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-blue-700">
                      {option.label}
                    </div>
                    <div className="text-gray-600 group-hover:text-blue-600">
                      {option.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              <div className="text-sm text-gray-500">
                Click an option to continue
              </div>
            </div>
          </div>
        </div>
      )}

      {/* UK Compliance Section */}
      {!showResults && (
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fully Legal & Regulated in the UK
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Medical cannabis has been legal in the UK since November 2018. All clinics are fully licensed and regulated.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {complianceBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{badge.title}</h3>
                    <p className="text-gray-600">{badge.description}</p>
                  </div>
                );
              })}
            </div>

            {/* UK Statistics */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
                UK Medical Cannabis Facts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {ukStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-700 mb-1">{stat.number}</div>
                    <div className="text-green-800 font-medium text-sm mb-1">{stat.label}</div>
                    <div className="text-green-600 text-xs">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Proof Section */}
      {!showResults && (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What UK Patients Are Saying
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real experiences from patients across the UK who found the right clinic through our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {patientTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location} • {testimonial.condition}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <StarRating value={testimonial.rating} size={16} />
                    <span className="ml-2 text-sm text-gray-600">Verified UK Patient</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="text-xs text-gray-500">
                    Treated at: {testimonial.clinic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* UK Medical Disclaimer */}
      {!showResults && (
        <div className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                    Important UK Medical Information
                  </h3>
                  <div className="space-y-2 text-yellow-700 text-sm">
                    <p>
                      <strong>Medical Disclaimer:</strong> This quiz is for educational purposes only and does not constitute medical advice. 
                      Always consult with qualified UK healthcare professionals before making medical decisions.
                    </p>
                    <p>
                      <strong>Legal Notice:</strong> Medical cannabis is available on private prescription in the UK from licensed specialists only. 
                      All clinics listed are MHRA regulated and comply with UK medical cannabis regulations.
                    </p>
                    <p>
                      <strong>Privacy Notice:</strong> We comply with UK GDPR regulations. Your personal data is processed securely and lawfully. 
                      You can unsubscribe from communications at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Email Capture Modal */}
      <EmailCaptureModal
        isOpen={showEmailCapture}
        onClose={() => setShowEmailCapture(false)}
        onSubmit={handleEmailCapture}
      />
    </div>
  );
};

export default FindMyClinicPage;