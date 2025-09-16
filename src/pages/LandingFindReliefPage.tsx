import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle, Shield, Award, Users, Calendar, 
  ArrowRight, Mail, MapPin, FileText, Clock, X,
  Scale, Stethoscope, Quote, Star, AlertTriangle
} from 'lucide-react';
import { useClinicData } from '../context/ClinicDataProvider';
import StarRating from '../components/common/StarRating';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import MetaTags from '../components/MetaTags';

const LandingFindReliefPage: React.FC = () => {
  const navigate = useNavigate();
  const { clinics } = useClinicData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postcode: '',
    condition: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Redirect to quiz after successful submission
    setTimeout(() => {
      navigate('/quiz');
    }, 2000);
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

  const ukTimeline = [
    { year: '2018', event: 'Medical cannabis legalised in the UK' },
    { year: '2019', event: 'First private clinics begin prescribing' },
    { year: '2020', event: 'Project Twenty21 launches for patient data' },
    { year: '2024', event: '36,000+ patients now receiving treatment' }
  ];

  const patientTestimonials = [
    {
      name: 'Sarah M.',
      location: 'Manchester',
      condition: 'Chronic Pain',
      rating: 5,
      text: 'After 8 years of chronic pain, medical cannabis has given me my life back. My daily pain went from unbearable to manageable, and I can finally enjoy activities with my family again.',
      clinic: 'Licensed UK Clinic'
    },
    {
      name: 'James T.',
      location: 'London',
      condition: 'Anxiety',
      rating: 5,
      text: 'Medical cannabis has transformed my anxiety management. I no longer experience daily panic attacks, and my sleep has improved dramatically. The treatment has been life-changing.',
      clinic: 'Licensed UK Clinic'
    },
    {
      name: 'Emma L.',
      location: 'Birmingham',
      condition: 'Insomnia',
      rating: 4,
      text: 'Finally sleeping through the night for the first time in years. I went from 2-3 hours of broken sleep to 7-8 hours of quality rest. My energy levels have completely transformed.',
      clinic: 'Licensed UK Clinic'
    }
  ];

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

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Find Relief with Medical Cannabis UK - Licensed Clinics & Treatment"
        description="Struggling with chronic conditions? Discover legal medical cannabis treatment in the UK. 36,000+ patients found relief through licensed clinics since 2018."
        canonicalUrl="https://comparetheleaf.co.uk/landing/find-relief"
        keywords={['find relief medical cannabis', 'chronic pain relief UK', 'medical cannabis treatment', 'legal cannabis UK']}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Struggling with Chronic Pain?{' '}
                <span className="text-yellow-300">Discover What 360,000 UK Patients Already Know</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Medical Cannabis Has Been Legal in the UK Since 2018 - Find Your Licensed Clinic
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">100% Legal</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Shield className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">MHRA Regulated</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">36,000+ Patients</span>
                </div>
              </div>
              
              <button
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get My Free UK Guide
                <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <img 
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="UK doctor consultation"
                  className="w-full h-72 object-cover rounded-lg mb-4"
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

      {/* Trust & Compliance Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fully Legal & Regulated in the UK
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Medical cannabis has been legal in the UK since November 2018. All clinics on our platform 
              are fully licensed and regulated by the appropriate UK authorities.
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

          {/* UK Timeline */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
              UK Medical Cannabis Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {ukTimeline.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-green-700 mb-2">{item.year}</div>
                  <p className="text-green-800 text-sm">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Educational Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Quote className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                "I Had No Idea Medical Cannabis Was Legal in the UK"
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Like many UK residents, Sarah from Manchester suffered with chronic pain for years, 
                  trying countless NHS treatments and private therapies. She had no idea that medical 
                  cannabis had been legal in the UK since 2018.
                </p>
                <p className="mb-4">
                  "My GP mentioned it as an option, but I thought it was still illegal. When I researched 
                  it properly, I discovered there are over 20 licensed clinics across the UK, all fully 
                  regulated by the MHRA."
                </p>
                <p className="mb-6">
                  Today, Sarah is one of over 36,000 UK patients who have found relief through legal 
                  medical cannabis treatment. Her quality of life has dramatically improved, and she's 
                  reduced her reliance on traditional pain medications by 80%.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah M.</div>
                    <div className="text-sm text-gray-600">Manchester, UK • Chronic Pain Patient</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <StarRating value={5} size={16} />
                  <span className="ml-2 text-sm text-gray-600">Treated at Licensed UK Clinic</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common UK Misconceptions</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">"It's still illegal in the UK"</div>
                      <div className="text-sm text-gray-600">Medical cannabis has been legal since November 2018</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">"It's not available on the NHS"</div>
                      <div className="text-sm text-gray-600">While rare on NHS, private prescriptions are widely available</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">"My GP can't help"</div>
                      <div className="text-sm text-gray-600">GPs can refer to specialist clinics for assessment</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-2">NHS Guidelines Reference</h4>
                <p className="text-blue-700 text-sm">
                  The NHS recognises medical cannabis as a treatment option when conventional 
                  treatments have not provided adequate relief. NICE guidelines support its use 
                  for specific conditions under specialist supervision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture Section */}
      <div id="lead-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12">
            <div className="text-center text-white mb-8">
              <div className="inline-flex items-center justify-center w-100 h-100 bg-white rounded-full mb-6">
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
                <FileText className="h-12 w-12 text-blue-600 hidden" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Free UK Medical Cannabis Eligibility Guide
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Get your personalised guide to medical cannabis treatment in the UK, including 
                eligibility criteria, costs, and how to find the right licensed clinic.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Free Guide is On Its Way!
                </h3>
                <p className="text-gray-600 mb-6">
                  We've sent your personalised UK Medical Cannabis Eligibility Guide to {formData.email}. 
                  You'll also be redirected to our clinic matching quiz.
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
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-8 rounded-lg text-lg font-bold hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Mail className="h-5 w-5 mr-2" />
                      Get My Free UK Guide
                    </>
                  )}
                </button>

                <div className="mt-4 text-xs text-gray-500 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="h-4 w-4 mr-1" />
                    <span>We comply with UK GDPR regulations. Your data is secure.</span>
                  </div>
                  <p>
                    By submitting this form, you consent to receive educational information about 
                    medical cannabis treatment in the UK. You can unsubscribe at any time.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What UK Patients Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from patients across the UK who have found relief through 
              legal medical cannabis treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

          {/* UK Statistics */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              UK Medical Cannabis by the Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">36,000+</div>
                <div className="text-gray-600">Active UK Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-gray-600">Licensed UK Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">£205M</div>
                <div className="text-gray-600">UK Market Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured UK Clinics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Licensed UK Medical Cannabis Clinics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All clinics are fully licensed, MHRA regulated, and staffed by GMC-registered specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinics.slice(0, 3).map((clinic, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
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
                
                <div className="flex flex-wrap gap-2">
                  {(clinic.services?.specialties || ['Pain Management', 'Anxiety Treatment']).slice(0, 2).map((specialty, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
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

      {/* UK Compliance & Disclaimers */}
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

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Legal Medical Cannabis Treatment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of UK patients who have found relief through legal, regulated medical cannabis treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/quiz')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Take Our Clinic Matching Quiz
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

      {/* Medical Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default LandingFindReliefPage;