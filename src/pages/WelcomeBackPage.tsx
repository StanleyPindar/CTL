import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, Shield, Award, Users, Calendar, 
  ArrowRight, Mail, MapPin, FileText, Clock, X,
  Scale, Stethoscope, Quote, Star, AlertTriangle,
  ChevronRight, Target, TrendingUp, Phone, Globe
} from 'lucide-react';
import { useClinicData } from '../context/ClinicDataProvider';
import StarRating from '../components/common/StarRating';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import MetaTags from '../components/MetaTags';

const WelcomeBackPage: React.FC = () => {
  const navigate = useNavigate();
  const { clinics } = useClinicData();
  const [userPreferences, setUserPreferences] = useState<any>(null);
  const [showUrgencyBanner, setShowUrgencyBanner] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    condition: '',
    priority: 'consultation'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check for previous engagement data
    const previousCondition = localStorage.getItem('previousCondition');
    const previousLocation = localStorage.getItem('previousLocation');
    const lastVisit = localStorage.getItem('lastVisit');
    
    if (previousCondition || previousLocation || lastVisit) {
      setUserPreferences({
        condition: previousCondition,
        location: previousLocation,
        lastVisit: lastVisit
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate enhanced form submission with priority booking
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Redirect to quiz with pre-filled data
    setTimeout(() => {
      navigate('/quiz', { state: { prefilled: formData } });
    }, 3000);
  };

  const conditions = [
    'Chronic Pain',
    'Anxiety & PTSD', 
    'Insomnia & Sleep Disorders',
    'Multiple Sclerosis',
    'Epilepsy',
    'Cancer Support',
    'Other Condition'
  ];

  const objections = [
    {
      question: 'Is medical cannabis legal in the UK?',
      answer: 'Yes, medical cannabis has been fully legal in the UK since November 2018. It can be prescribed by specialist doctors on the GMC Specialist Register for qualifying conditions when conventional treatments haven\'t provided adequate relief.',
      icon: Scale,
      color: 'bg-green-100 text-green-600'
    },
    {
      question: 'Will it show up on drug tests?',
      answer: 'If you have a valid prescription and are not impaired, you have legal protection under UK employment law. However, some employers may have specific policies, so it\'s important to discuss this with your prescribing doctor.',
      icon: Shield,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      question: 'What will my GP think?',
      answer: 'Many GPs are now familiar with medical cannabis and can refer patients to specialist clinics. The medical community increasingly recognizes cannabis as a legitimate treatment option for qualifying conditions.',
      icon: Stethoscope,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      question: 'How much does it cost?',
      answer: 'Initial consultations typically range from £150-£300, with follow-ups £50-£150. Monthly medication costs vary from £150-£400. Some private insurance policies now provide coverage, and many clinics offer payment plans.',
      icon: FileText,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const enhancedTestimonials = [
    {
      name: 'Sarah M.',
      age: 42,
      location: 'Manchester',
      condition: 'Chronic Pain',
      rating: 5,
      text: 'I was skeptical about medical cannabis 6 months ago. Now I can\'t imagine life without my treatment. My chronic pain is finally manageable, and I\'ve reduced my opioid use by 90%.',
      beforeAfter: 'Pain level reduced from 8/10 to 3/10',
      clinic: 'Manchester Medical Cannabis',
      timeframe: '6 months ago'
    },
    {
      name: 'James T.',
      age: 35,
      location: 'London',
      condition: 'Anxiety',
      rating: 5,
      text: 'After months of hesitation, I finally started medical cannabis treatment. Best decision I\'ve made for my mental health. My anxiety is finally manageable without the side effects of traditional medications.',
      beforeAfter: 'Panic attacks reduced by 90%',
      clinic: 'London Cannabis Clinic',
      timeframe: '3 months ago'
    },
    {
      name: 'Emma L.',
      age: 29,
      location: 'Birmingham',
      condition: 'Insomnia',
      rating: 4,
      text: 'I researched medical cannabis for months before starting treatment. Wish I\'d done it sooner - I\'m finally sleeping through the night and waking up refreshed.',
      beforeAfter: 'Sleep quality improved from 3/10 to 8/10',
      clinic: 'Birmingham Cannabis Care',
      timeframe: '4 months ago'
    }
  ];

  const recentUpdates = [
    {
      title: 'New Clinic Partnership',
      description: '3 additional licensed clinics added in Scotland',
      date: 'This week'
    },
    {
      title: 'Reduced Wait Times',
      description: 'Average appointment wait time now 5 days',
      date: '2 weeks ago'
    },
    {
      title: 'Enhanced Matching',
      description: 'Improved algorithm for better clinic matches',
      date: '1 month ago'
    }
  ];

  const priorityOffers = [
    {
      title: 'Priority Consultation Booking',
      description: 'Skip the queue with priority access to appointments',
      badge: 'Returning Visitor Exclusive'
    },
    {
      title: 'Free 15-Minute Pre-Consultation',
      description: 'Complimentary phone consultation to discuss your needs',
      badge: 'Limited Time'
    },
    {
      title: 'Personalized Clinic Comparison',
      description: 'Detailed comparison report based on your specific needs',
      badge: 'Enhanced Service'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Welcome Back - Continue Your Medical Cannabis Clinic Search"
        description="Welcome back to CompareTheLeaf. Continue your medical cannabis clinic search with enhanced recommendations and priority booking options."
        canonicalUrl="https://comparetheleaf.co.uk/welcome-back"
        keywords={['welcome back', 'continue clinic search', 'priority booking', 'returning visitor']}
      />
      
      {/* Urgency Banner */}
      {showUrgencyBanner && (
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 animate-pulse" />
                <span className="font-medium">Limited Time: Priority booking for returning visitors - Only 12 slots remaining this month</span>
              </div>
              <button
                onClick={() => setShowUrgencyBanner(false)}
                className="text-white hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
              <Target className="h-16 w-16 text-blue-600 hidden" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome Back - Ready to Find Your{' '}
              <span className="text-yellow-300">Perfect UK Medical Cannabis Clinic?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {userPreferences?.condition 
                ? `Continue your ${userPreferences.condition} treatment search with enhanced recommendations`
                : 'Complete your clinic search with our enhanced matching system'
              }
            </p>

            {userPreferences && (
              <div className="bg-white bg-opacity-20 rounded-lg p-4 max-w-2xl mx-auto mb-8">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">
                    {userPreferences.condition && `Looking for ${userPreferences.condition} treatment`}
                    {userPreferences.location && ` in ${userPreferences.location}`}
                  </span>
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Users className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Used by 10,000+ UK Patients</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Shield className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">100% Legal Since 2018</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Award className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">MHRA Regulated</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('priority-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Priority Access Now
              <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Social Proof */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join 360,000+ UK Patients Who Found Relief
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real success stories from patients across the UK who took the next step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {enhancedTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 relative">
                <div className="absolute top-4 right-4">
                  <Quote className="h-6 w-6 text-blue-200" />
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}, {testimonial.age}</div>
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
                
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <div className="text-sm font-medium text-green-800">Result:</div>
                  <div className="text-sm text-green-700">{testimonial.beforeAfter}</div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Started treatment: {testimonial.timeframe}</span>
                  <span>{testimonial.clinic}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Updates */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              What's New Since Your Last Visit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentUpdates.map((update, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{update.title}</h4>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {update.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{update.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Objection Handling */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common UK Patient Questions Answered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand you may have concerns. Here are the facts about medical cannabis in the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objections.map((objection, index) => {
              const IconComponent = objection.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${objection.color} mr-4 flex-shrink-0`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{objection.question}</h3>
                  </div>
                  <p className="text-gray-700">{objection.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Offer Section */}
      <div id="priority-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12">
            <div className="text-center text-white mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Exclusive Returning Visitor Benefits
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
                Get priority access to UK medical cannabis clinics with enhanced services
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {priorityOffers.map((offer, index) => (
                  <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="text-xs bg-yellow-400 text-blue-900 px-2 py-1 rounded-full mb-2 inline-block">
                      {offer.badge}
                    </div>
                    <h3 className="font-semibold mb-2">{offer.title}</h3>
                    <p className="text-sm text-blue-100">{offer.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {isSubmitted ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Priority Access Confirmed!
                </h3>
                <p className="text-gray-600 mb-6">
                  We've sent your priority booking information to {formData.email}. 
                  You'll be redirected to our enhanced clinic matching system.
                </p>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>

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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john.smith@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="07123 456789"
                    />
                    <p className="text-xs text-gray-500 mt-1">For priority booking assistance</p>
                  </div>

                  <div>
                    <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                      UK Postcode *
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="SW1A 1AA"
                    />
                  </div>

                  <div>
                    <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Condition *
                    </label>
                    <select
                      id="condition"
                      name="condition"
                      value={formData.condition}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your condition</option>
                      {conditions.map(condition => (
                        <option key={condition} value={condition}>{condition}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                      Priority Service *
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="consultation">Priority Consultation Booking</option>
                      <option value="pre-consultation">Free 15-Minute Pre-Consultation</option>
                      <option value="comparison">Personalized Clinic Comparison</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 py-4 px-8 rounded-lg text-lg font-bold hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-900"></div>
                  ) : (
                    <>
                      <Calendar className="h-5 w-5 mr-2" />
                      Claim My Priority Access
                    </>
                  )}
                </button>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <Shield className="h-4 w-4 mr-1" />
                    <span>GDPR compliant. Your data is secure and will not be shared.</span>
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    By submitting this form, you consent to receive priority booking information and 
                    educational content about UK medical cannabis treatment. Unsubscribe anytime.
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* UK Clinic Showcase */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Licensed UK Medical Cannabis Clinics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All clinics are MHRA regulated, staffed by GMC-registered specialists, and offer priority booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {clinics.slice(0, 3).map((clinic, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
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
                    <span>Priority slots: {clinic.patientExperience?.nextAvailableAppointment || 'This week'}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>From £{clinic.pricing?.initialConsultation?.price || '150'}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(clinic.services?.specialties || ['Pain Management', 'Anxiety Treatment']).slice(0, 2).map((specialty, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {specialty}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => window.open(clinic.overview?.website, '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all font-medium text-sm"
                >
                  Priority Booking Available
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/clinics')}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              View All Licensed UK Clinics
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* UK Statistics & Trust */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why UK Patients Choose CompareTheLeaf
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The UK's most trusted medical cannabis clinic comparison platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">36,000+</div>
              <div className="text-gray-600">UK Patients Helped</div>
              <div className="text-xs text-gray-500 mt-1">Since 2018</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-600">Licensed UK Clinics</div>
              <div className="text-xs text-gray-500 mt-1">MHRA Regulated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
              <div className="text-xs text-gray-500 mt-1">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">£205M</div>
              <div className="text-gray-600">UK Market Value</div>
              <div className="text-xs text-gray-500 mt-1">Growing Industry</div>
            </div>
          </div>

          {/* UK Compliance Badges */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
              Fully Compliant with UK Regulations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-1">MHRA Regulated</h4>
                <p className="text-green-700 text-sm">All clinics follow strict guidelines</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-1">Licensed Specialists</h4>
                <p className="text-green-700 text-sm">GMC-registered doctors only</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <Scale className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-1">Legal Since 2018</h4>
                <p className="text-green-700 text-sm">Full UK compliance</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-1">Quality Assured</h4>
                <p className="text-green-700 text-sm">Pharmaceutical standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't Wait Another Day for Relief
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of UK patients who have found legal, effective treatment through licensed medical cannabis clinics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/quiz')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start My Clinic Search
            </button>
            <button
              onClick={() => navigate('/clinics')}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Browse Licensed Clinics
            </button>
          </div>
        </div>
      </div>

      {/* UK Medical Disclaimers */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <Stethoscope className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Medical Disclaimer</h3>
              <p className="text-sm text-gray-600">
                This information is for educational purposes only. Always consult with a qualified UK medical professional.
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

export default WelcomeBackPage;