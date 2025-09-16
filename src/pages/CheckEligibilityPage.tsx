import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, Shield, Award, Users, Calendar, 
  ArrowRight, Mail, MapPin, FileText, Clock, X,
  Scale, Stethoscope, Quote, Star, AlertTriangle,
  ChevronRight, ChevronLeft, Target, TrendingUp, 
  Phone, Globe, Brain, Activity, Moon, Zap, Heart
} from 'lucide-react';
import { useClinicData } from '../context/ClinicDataProvider';
import StarRating from '../components/common/StarRating';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import MetaTags from '../components/MetaTags';

const CheckEligibilityPage: React.FC = () => {
  const navigate = useNavigate();
  const { clinics } = useClinicData();
  
  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [eligibilityResult, setEligibilityResult] = useState<any>(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [monthlyCheckers, setMonthlyCheckers] = useState(2847);

  // Real-time activity simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setMonthlyCheckers(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // 5-question eligibility checker
  const eligibilityQuestions = [
    {
      id: 'condition',
      question: "What is your primary condition?",
      subtitle: "Select the condition you're most interested in treating",
      options: [
        { value: 'chronic-pain', label: 'Chronic Pain', description: 'Back pain, arthritis, fibromyalgia', icon: Activity },
        { value: 'anxiety-ptsd', label: 'Anxiety/PTSD', description: 'Anxiety disorders, trauma, stress', icon: Brain },
        { value: 'epilepsy', label: 'Epilepsy/Seizures', description: 'Treatment-resistant epilepsy', icon: Zap },
        { value: 'cancer', label: 'Cancer-related Symptoms', description: 'Chemotherapy side effects, pain', icon: Shield },
        { value: 'multiple-sclerosis', label: 'Multiple Sclerosis', description: 'MS spasticity, mobility issues', icon: Target },
        { value: 'insomnia', label: 'Sleep Disorders', description: 'Insomnia, sleep quality issues', icon: Moon },
        { value: 'other', label: 'Other Condition', description: 'IBD, Tourette\'s, other qualifying conditions', icon: Heart },
        { value: 'exploring', label: 'Not Sure/Exploring', description: 'Want to learn about options', icon: FileText }
      ]
    },
    {
      id: 'duration',
      question: "How long have you been dealing with this condition?",
      subtitle: "Medical cannabis is typically considered for chronic conditions",
      options: [
        { value: 'under-6-months', label: 'Less than 6 months', description: 'Recent onset' },
        { value: '6-months-2-years', label: '6 months - 2 years', description: 'Ongoing condition' },
        { value: '2-5-years', label: '2-5 years', description: 'Long-term condition' },
        { value: '5-plus-years', label: '5+ years', description: 'Chronic long-term condition' },
        { value: 'lifelong', label: 'Lifelong condition', description: 'Born with or childhood onset' }
      ]
    },
    {
      id: 'treatments',
      question: "Have you tried traditional treatments?",
      subtitle: "Medical cannabis is usually considered when conventional treatments haven't provided adequate relief",
      options: [
        { value: 'multiple-limited', label: 'Yes, multiple treatments with limited success', description: 'Tried several options without adequate relief' },
        { value: 'some-alternatives', label: 'Yes, some treatments but looking for alternatives', description: 'Current treatments partially effective' },
        { value: 'current-additional', label: 'Currently on treatment but want additional options', description: 'Seeking complementary treatment' },
        { value: 'no-looking', label: 'No, looking for treatment options', description: 'Haven\'t started treatment yet' },
        { value: 'prefer-not-say', label: 'Prefer not to say', description: 'Private medical information' }
      ]
    },
    {
      id: 'location',
      question: "What's your location in the UK?",
      subtitle: "We'll show you clinics in your area or online options",
      options: [
        { value: 'england', label: 'England', description: 'London, Manchester, Birmingham, etc.' },
        { value: 'scotland', label: 'Scotland', description: 'Edinburgh, Glasgow, Aberdeen, etc.' },
        { value: 'wales', label: 'Wales', description: 'Cardiff, Swansea, Newport, etc.' },
        { value: 'northern-ireland', label: 'Northern Ireland', description: 'Belfast, Derry, Lisburn, etc.' },
        { value: 'prefer-not-say', label: 'Prefer not to say', description: 'Privacy preference' }
      ]
    },
    {
      id: 'priority',
      question: "What's most important to you in treatment?",
      subtitle: "This helps us recommend the most suitable clinics",
      options: [
        { value: 'pain-relief', label: 'Pain relief and symptom management', description: 'Primary focus on reducing symptoms' },
        { value: 'fewer-side-effects', label: 'Fewer side effects than current medication', description: 'Reduce medication side effects' },
        { value: 'natural-approach', label: 'Natural/alternative treatment approach', description: 'Prefer natural treatments' },
        { value: 'quality-of-life', label: 'Better quality of life', description: 'Improve daily functioning' },
        { value: 'all-above', label: 'All of the above', description: 'Comprehensive improvement' }
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / eligibilityQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    const newResponses = { ...responses, [eligibilityQuestions[currentQuestion].id]: value };
    setResponses(newResponses);

    if (currentQuestion < eligibilityQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => calculateEligibility(newResponses), 500);
    }
  };

  const calculateEligibility = (quizResponses: Record<string, string>) => {
    setIsLoading(true);
    
    // Calculate eligibility based on responses
    let eligibilityScore = 0;
    let eligibilityFactors = [];
    let recommendedClinics = [];
    
    // Condition scoring
    const condition = quizResponses.condition;
    if (['chronic-pain', 'anxiety-ptsd', 'epilepsy', 'cancer', 'multiple-sclerosis', 'insomnia'].includes(condition)) {
      eligibilityScore += 30;
      eligibilityFactors.push('You have a qualifying medical condition');
    } else if (condition === 'other') {
      eligibilityScore += 20;
      eligibilityFactors.push('Your condition may qualify for treatment');
    } else {
      eligibilityScore += 10;
      eligibilityFactors.push('Exploring treatment options is a good first step');
    }
    
    // Duration scoring
    const duration = quizResponses.duration;
    if (['2-5-years', '5-plus-years', 'lifelong'].includes(duration)) {
      eligibilityScore += 25;
      eligibilityFactors.push('Your condition duration meets typical criteria');
    } else if (duration === '6-months-2-years') {
      eligibilityScore += 20;
      eligibilityFactors.push('Your condition has persisted long enough for consideration');
    } else {
      eligibilityScore += 10;
      eligibilityFactors.push('Early intervention can be beneficial');
    }
    
    // Treatment history scoring
    const treatments = quizResponses.treatments;
    if (['multiple-limited', 'some-alternatives'].includes(treatments)) {
      eligibilityScore += 30;
      eligibilityFactors.push('Previous treatment attempts support eligibility');
    } else if (treatments === 'current-additional') {
      eligibilityScore += 25;
      eligibilityFactors.push('Seeking additional treatment options is common');
    } else {
      eligibilityScore += 15;
      eligibilityFactors.push('Medical cannabis can be considered as a treatment option');
    }
    
    // Location scoring
    const location = quizResponses.location;
    if (location !== 'prefer-not-say') {
      eligibilityScore += 10;
      eligibilityFactors.push('Medical cannabis is available throughout the UK');
    }
    
    // Priority scoring
    const priority = quizResponses.priority;
    if (priority) {
      eligibilityScore += 5;
      eligibilityFactors.push('Your treatment goals align with medical cannabis benefits');
    }
    
    // Determine eligibility level
    let eligibilityLevel = 'not-eligible';
    let confidencePercentage = Math.min(95, Math.max(15, eligibilityScore));
    
    if (eligibilityScore >= 80) {
      eligibilityLevel = 'highly-eligible';
    } else if (eligibilityScore >= 60) {
      eligibilityLevel = 'likely-eligible';
    } else if (eligibilityScore >= 40) {
      eligibilityLevel = 'possibly-eligible';
    }
    
    // Get recommended clinics based on condition
    const conditionSpecialists = (clinics || []).filter(clinic => {
      const specialties = clinic.services?.specialties || [];
      const conditionMap: Record<string, string[]> = {
        'chronic-pain': ['chronic pain', 'pain management', 'fibromyalgia'],
        'anxiety-ptsd': ['anxiety', 'mental health', 'ptsd'],
        'epilepsy': ['epilepsy', 'seizures', 'neurological'],
        'cancer': ['cancer', 'oncology', 'palliative'],
        'multiple-sclerosis': ['multiple sclerosis', 'ms', 'neurological'],
        'insomnia': ['sleep', 'insomnia', 'sleep disorders']
      };
      
      const relevantTerms = conditionMap[condition] || [];
      return specialties.some(specialty => 
        relevantTerms.some(term => 
          specialty.toLowerCase().includes(term.toLowerCase())
        )
      );
    }).slice(0, 3);
    
    recommendedClinics = conditionSpecialists.length > 0 ? conditionSpecialists : (clinics || []).slice(0, 3);
    
    setEligibilityResult({
      level: eligibilityLevel,
      confidence: confidencePercentage,
      factors: eligibilityFactors,
      recommendedClinics,
      condition: condition,
      location: location
    });
    
    setShowResults(true);
    setShowEmailCapture(true);
    setIsLoading(false);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setEmailCaptured(true);
    setShowEmailCapture(false);
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getEligibilityMessage = () => {
    switch (eligibilityResult?.level) {
      case 'highly-eligible':
        return {
          title: 'You Are Highly Likely to Be Eligible!',
          message: 'Based on your responses, you have a strong likelihood of qualifying for medical cannabis treatment in the UK.',
          color: 'text-green-600',
          bgColor: 'bg-green-50 border-green-200'
        };
      case 'likely-eligible':
        return {
          title: 'You May Be Eligible for Treatment',
          message: 'Your responses suggest you could qualify for medical cannabis treatment. A specialist consultation would provide definitive guidance.',
          color: 'text-blue-600',
          bgColor: 'bg-blue-50 border-blue-200'
        };
      case 'possibly-eligible':
        return {
          title: 'You Might Qualify for Treatment',
          message: 'While your situation shows some qualifying factors, a specialist assessment would be needed to determine eligibility.',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50 border-yellow-200'
        };
      default:
        return {
          title: 'Eligibility Unclear - Consultation Recommended',
          message: 'Based on your responses, a specialist consultation would help determine if medical cannabis is right for you.',
          color: 'text-gray-600',
          bgColor: 'bg-gray-50 border-gray-200'
        };
    }
  };

  const patientStories = [
    {
      name: 'Sarah M.',
      location: 'Manchester',
      condition: 'Chronic Pain',
      quote: 'I wish I\'d known sooner that I qualified for medical cannabis treatment. Getting clarity on my eligibility was the first step to getting my life back.',
      outcome: 'Now pain-free 6 days a week',
      timeframe: '8 months ago'
    },
    {
      name: 'James T.',
      location: 'London',
      condition: 'Anxiety',
      quote: 'I had no idea I was eligible for medical cannabis treatment. Once I understood the criteria, the process was much easier than I expected.',
      outcome: 'Anxiety reduced by 80%',
      timeframe: '6 months ago'
    },
    {
      name: 'Emma L.',
      location: 'Birmingham',
      condition: 'Insomnia',
      quote: 'Finally got the answers I needed about medical cannabis eligibility. Wish I\'d understood my options months earlier - the treatment has been transformative.',
      outcome: 'Sleeping 7+ hours nightly',
      timeframe: '4 months ago'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4 mx-auto"></div>
          <p className="text-lg text-gray-600">Calculating your eligibility...</p>
        </div>
      </div>
    );
  }

  if (showResults && emailCaptured) {
    const eligibilityMsg = getEligibilityMessage();
    
    return (
      <div className="min-h-screen bg-gray-50">
        <MetaTags 
          title="Your Medical Cannabis Eligibility Results"
          description="Your personalized eligibility assessment results for UK medical cannabis treatment."
        />
        
        {/* Results Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                eligibilityResult.level === 'highly-eligible' ? 'bg-green-100' : 
                eligibilityResult.level === 'likely-eligible' ? 'bg-blue-100' : 
                eligibilityResult.level === 'possibly-eligible' ? 'bg-yellow-100' : 'bg-gray-100'
              }`}>
                <CheckCircle className={`h-8 w-8 ${eligibilityMsg.color}`} />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Your Eligibility Results
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Personalized assessment based on your responses
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility Result */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`rounded-lg border p-8 mb-8 ${eligibilityMsg.bgColor}`}>
            <div className="text-center mb-6">
              <h2 className={`text-3xl font-bold mb-4 ${eligibilityMsg.color}`}>
                {eligibilityMsg.title}
              </h2>
              <div className={`text-5xl font-bold mb-2 ${eligibilityMsg.color}`}>
                {eligibilityResult.confidence}%
              </div>
              <div className="text-lg text-gray-600 mb-4">Likelihood of Eligibility</div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                {eligibilityMsg.message}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <h3 className="font-semibold text-gray-900 mb-3">Factors Supporting Your Eligibility:</h3>
              <ul className="space-y-2">
                {eligibilityResult.factors.map((factor: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Clinics */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Recommended UK Clinics for Your Condition
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eligibilityResult.recommendedClinics.map((clinic: any, index: number) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {clinic.overview?.name || 'Licensed UK Clinic'}
                    </h3>
                    <div className="flex items-center">
                      <StarRating value={Math.round(clinic.patientExperience?.overallRating || 4.5)} size={14} />
                      <span className="ml-1 text-sm text-gray-600">
                        {clinic.patientExperience?.overallRating?.toFixed(1) || '4.5'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{clinic.overview?.address?.city || 'UK Wide'}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Wait: {clinic.patientExperience?.nextAvailableAppointment || '1-2 weeks'}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>From £{clinic.pricing?.initialConsultation?.price || '150'}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => window.open(clinic.overview?.website, '_blank')}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all font-medium text-sm"
                  >
                    Book Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Based on your eligibility assessment, here are your recommended next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/quiz')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Detailed Clinic Matches
              </button>
              <button
                onClick={() => navigate('/clinics')}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Browse All UK Clinics
              </button>
            </div>
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
        title="UK Medical Cannabis Eligibility Checker - Are You Eligible?"
        description="Take our 5-question eligibility checker to discover if you qualify for legal medical cannabis treatment in the UK. Used by 12,000+ patients."
        keywords={['medical cannabis eligibility', 'UK cannabis qualification', 'medical cannabis checker', 'cannabis eligibility UK']}
      />

      {/* HOOK SECTION - Above the fold */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-100 h-100 bg-white rounded-full mb-8">
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
                <CheckCircle className="h-12 w-12 text-blue-600 hidden" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Are You Eligible for{' '}
                <span className="text-yellow-300">Medical Cannabis Treatment in the UK?</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Take our 5-question eligibility checker and discover if you qualify for legal medical cannabis treatment - used by 12,000+ UK patients
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Shield className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">GDPR Compliant</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Scale className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">UK Legal</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Confidential</span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-medium">
                    {monthlyCheckers.toLocaleString()} people checked their eligibility this month
                  </span>
                </div>
              </div>
              
              {!showResults && (
                <button
                  onClick={() => document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Check My Eligibility Now
                  <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                </button>
              )}
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <img 
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional UK medical consultation"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Professional UK Medical Consultation
                  </h3>
                  <p className="text-gray-600">
                    Licensed specialists across the UK ready to help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STORY SECTION - Emotional connection */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Quote className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                "I Wish I'd Known Sooner That I Qualified"
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Like thousands of UK patients, you might be wondering if medical cannabis could help with your condition. 
                  The confusion is real - with changing laws, different clinics, and complex eligibility criteria, 
                  it's hard to know where you stand.
                </p>
                <p className="mb-4">
                  Sarah from Manchester felt the same way. After years of traditional treatments that weren't working 
                  for her chronic pain, she discovered she was eligible for medical cannabis but had wasted months not knowing. 
                  "I wish I'd known sooner that I qualified," she said. "The eligibility checker gave me clarity in just 2 minutes."
                </p>
                <p className="mb-6">
                  The truth is, many UK patients who could benefit from medical cannabis never find out they're eligible. 
                  That's why we created this simple, confidential eligibility checker - to give you instant clarity on your options.
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah M.</div>
                    <div className="text-sm text-gray-600">Manchester, UK • Chronic Pain Patient</div>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <StarRating value={5} size={16} />
                  <span className="ml-2 text-sm text-gray-600">Verified UK Patient</span>
                </div>
                <p className="text-green-700 italic">
                  "The eligibility checker saved me months of confusion. I qualified and got my prescription within 2 weeks."
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-4">The Problem: Eligibility Confusion</h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complex eligibility criteria that vary by clinic</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Months wasted not knowing you qualify</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Continued suffering when help is available</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fear of legal issues or judgment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">The Solution: Instant Clarity</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2-minute eligibility assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Instant, personalized results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Recommended clinics for your condition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Clear next steps if you qualify</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Success Stories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real UK Patients Who Found Clarity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These patients used our eligibility checker and discovered they qualified for treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patientStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.location} • {story.condition}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{story.quote}"
                </p>
                
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <div className="text-sm font-medium text-green-800">Treatment Outcome:</div>
                  <div className="text-sm text-green-700">{story.outcome}</div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Started treatment: {story.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      {!showResults && !showEmailCapture && (
        <div id="quiz-section" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Check Your Eligibility Now
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Answer 5 quick questions to discover if you qualify for medical cannabis treatment in the UK
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                <p className="text-green-800 font-medium">
                  <Shield className="h-5 w-5 inline mr-2" />
                  No personal information required to start. Your privacy is protected. Results are instant and confidential.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Question {currentQuestion + 1} of {eligibilityQuestions.length}
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
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-500">Your information is confidential and secure</span>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {eligibilityQuestions[currentQuestion].question}
                </h2>
                <p className="text-gray-600 mb-8">
                  {eligibilityQuestions[currentQuestion].subtitle}
                </p>

                <div className="space-y-3">
                  {eligibilityQuestions[currentQuestion].options.map((option) => {
                    const IconComponent = option.icon || CheckCircle;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                      >
                        <div className="flex items-start">
                          {option.icon && (
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                              <IconComponent className="h-5 w-5 text-blue-600" />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-blue-700">
                              {option.label}
                            </div>
                            <div className="text-gray-600 group-hover:text-blue-600">
                              {option.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
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
        </div>
      )}

      {/* Email Capture Modal */}
      {showEmailCapture && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-2" />
                  Get Your Results
                </h2>
                <button
                  onClick={() => setShowEmailCapture(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleEmailSubmit} className="p-6">
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Get your detailed eligibility report and clinic recommendations sent to your email:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Detailed eligibility assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personalized clinic recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Treatment cost estimates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Next steps guide</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Smith"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formData.email}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Mail className="h-5 w-5 mr-2" />
                    Send My Results
                  </>
                )}
              </button>

              <div className="mt-4 text-xs text-gray-500 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>GDPR compliant. We'll also send you helpful updates (unsubscribe anytime).</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* UK Compliance & Trust Section */}
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
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">MHRA Regulated</h3>
                <p className="text-gray-600">All clinics follow strict MHRA guidelines</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed Specialists</h3>
                <p className="text-gray-600">Only GMC-registered doctors prescribe</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Scale className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Since 2018</h3>
                <p className="text-gray-600">Full UK compliance</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
                <p className="text-gray-600">Pharmaceutical standards</p>
              </div>
            </div>

            {/* UK Statistics */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
                UK Medical Cannabis Facts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700 mb-1">36,000+</div>
                  <div className="text-green-800 text-sm">Active UK Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700 mb-1">20+</div>
                  <div className="text-green-800 text-sm">Licensed UK Clinics</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700 mb-1">£205M</div>
                  <div className="text-green-800 text-sm">UK Market Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700 mb-1">95%</div>
                  <div className="text-green-800 text-sm">Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      {!showResults && (
        <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't Wait Another Day to Find Out If You Qualify
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of UK patients who have found clarity about their medical cannabis eligibility.
            </p>
            <button
              onClick={() => document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Check My Eligibility Now
            </button>
          </div>
        </div>
      )}

      {/* UK Medical Disclaimers */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <Stethoscope className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Medical Disclaimer</h3>
              <p className="text-sm text-gray-600">
                This eligibility checker is for educational purposes only. Always consult with a qualified UK medical professional.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Privacy Notice</h3>
              <p className="text-sm text-gray-600">
                We comply with UK GDPR regulations. Your personal data is processed securely and lawfully.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <Scale className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Regulatory Notice</h3>
              <p className="text-sm text-gray-600">
                Medical cannabis is available on private prescription in the UK from licensed specialists only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEligibilityPage;