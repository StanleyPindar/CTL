import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, MapPin, Star, Scale, Shield, CheckCircle, Award, Users } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import FAQAccordion from '../components/ui/FAQAccordion';
import MetricCardsGrid from '../components/ui/MetricCardsGrid';
import HighlightBanner from '../components/ui/HighlightBanner';
import ArticleCardsGrid from '../components/ui/ArticleCardsGrid';
import SocialProofSection from '../components/home/SocialProofSection';
import HeroSection from '../components/ui/HeroSection';
import TrustIndicatorsBanner from '../components/TrustIndicatorsBanner';
import ValuePropositionSection from '../components/ValuePropositionSection';
import { useClinicData } from '../context/ClinicDataProvider';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { clinics = [], isLoading, error, retry } = useClinicData();
  usePerformanceMonitor('HomePage');

  const handleFindClinics = () => {
    navigate('/quiz');
  };

  const handleLearnLegalities = () => {
    navigate('/legalities');
  };
  
  const metrics = React.useMemo(() => [
    {
      icon: <Users className="h-8 w-8" />,
      metric: '60,000+',
      label: 'PATIENTS HELPED'
    },
    {
      icon: <Award className="h-8 w-8" />,
      metric: '4.8/5',
      label: 'AVERAGE RATING'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '95%',
      label: 'SUCCESS RATE'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      metric: '100%',
      label: 'VERIFIED CLINICS'
    }
  ], []);
  
  const articles = React.useMemo(() => [
    {
      title: 'How to Get a Medical Cannabis Prescription',
      badges: ['Guide'],
      bulletPoints: ['Step-by-step process', 'Required documentation', 'Eligibility criteria'],
      readTime: '8 min read',
      date: 'Jan 15, 2024',
      ctaHref: '/education/how-to-get-prescription'
    },
    {
      title: 'Understanding Medical Cannabis for Chronic Pain',
      badges: ['Condition'],
      bulletPoints: ['Pain management approaches', 'Strain selection', 'Dosing guidelines'],
      readTime: '10 min read',
      date: 'Jan 20, 2024',
      ctaHref: '/conditions/chronic-pain-article'
    }
  ], []);
  
  const faqs = React.useMemo(() => [
    {
      question: 'Is medical cannabis legal in the UK?',
      answer: 'Yes, medical cannabis has been legal in the UK since November 2018. However, it can only be prescribed by specialist doctors on the General Medical Council\'s Specialist Register for specific medical conditions when conventional treatments have not provided adequate relief.',
      defaultOpen: true,
      category: 'Legal',
      author: 'CompareTheLeaf Legal Team',
      dateCreated: '2024-01-15',
      dateModified: '2024-02-20',
      upvoteCount: 127,
      difficulty: 'beginner' as const
    },
    {
      question: 'How much does medical cannabis treatment cost?',
      answer: 'Costs vary by clinic and treatment plan. Typically, initial consultations range from £150-£300, follow-ups £50-£150, and monthly medication costs £150-£400. Medical cannabis is not currently available on the NHS except in very limited circumstances.',
      category: 'Cost',
      author: 'CompareTheLeaf Medical Team',
      dateCreated: '2024-01-15',
      dateModified: '2024-02-25',
      upvoteCount: 89,
      difficulty: 'beginner' as const
    },
    {
      question: 'What conditions can be treated with medical cannabis?',
      answer: 'Medical cannabis is commonly prescribed for chronic pain, epilepsy, multiple sclerosis spasticity, nausea from chemotherapy, anxiety, PTSD, and other conditions where conventional treatments have been inadequate.',
      category: 'Conditions',
      author: 'Dr. Sarah Williams',
      dateCreated: '2024-01-15',
      dateModified: '2024-02-18',
      upvoteCount: 156,
      difficulty: 'beginner' as const
    },
    {
      question: 'How do I get a medical cannabis prescription?',
      answer: 'You need to consult with a specialist doctor who can assess your condition and medical history. The process typically involves an initial consultation, medical assessment, and if appropriate, a prescription with ongoing monitoring.',
      category: 'Process',
      author: 'Dr. Michael Chen',
      dateCreated: '2024-01-15',
      dateModified: '2024-02-22',
      upvoteCount: 203,
      difficulty: 'beginner' as const
    }
  ], []);

  const topClinics = (clinics || []).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Compare Medical Cannabis Clinics UK - Find Licensed Doctors & Best Prices"
        description="Compare 20+ verified UK medical cannabis clinics. Find licensed doctors, transparent pricing, patient reviews & book consultations. Used by 60,000+ patients. MHRA regulated clinics with GMC specialists."
        type="WebSite"
        keywords={[
          'find medical cannabis clinic UK',
          'compare medical cannabis clinics UK',
          'UK medical cannabis doctors',
          'medical cannabis cost UK',
          'book medical cannabis consultation',
          'best medical cannabis clinics UK',
          'medical cannabis eligibility UK',
          'online medical cannabis consultation',
          'medical cannabis prescription UK',
          'licensed medical cannabis clinics',
          'urgent medical cannabis UK',
          'how to get medical cannabis UK',
          'medical cannabis treatment UK',
          'MHRA regulated cannabis clinics',
          'medical cannabis specialists UK',
          'medical cannabis clinic London',
          'get medical cannabis prescription UK',
          'medical cannabis doctors UK'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/"
        organizationData={{
          name: 'CompareTheLeaf',
          url: 'https://comparetheleaf.co.uk',
          logo: 'https://comparetheleaf.co.uk/images/logo.png',
          description: 'UK Medical Cannabis Clinic Comparison Platform helping patients find verified, licensed clinics for legal medical cannabis treatment',
          foundingDate: '2023',
          contactPoint: {
            telephone: '+44-800-123-4567',
            email: 'info@comparetheleaf.co.uk'
          }
        }}
        breadcrumbData={[
          { name: 'Home', url: 'https://comparetheleaf.co.uk/' }
        ]}
      />
      
      <TrustIndicatorsBanner />
      <HeroSection
        title={<>Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 block">UK Medical Cannabis Clinic</span></>}
        subtitle="Compare verified medical cannabis clinics across the UK. Find licensed doctors, check costs, read patient reviews, and book consultations. Used by 60,000+ patients since 2018."
        ctaLabel="Take our three-minute quiz"
        ctaOnClick={handleFindClinics}
        secondaryCtaLabel="How to Get Started"
        secondaryCtaHref="/education/how-to-get-a-clinic"
      />
      
      {/* Metrics Section */}
      <MetricCardsGrid 
        metrics={metrics}
        title="Trusted by Thousands of Patients"
        description="Join the growing community of patients who have found relief through medical cannabis"
      />
      
      {/* Highlight Banner */}
      <HighlightBanner
        title="Limited Time: Fast-Track Appointments Available"
        description="Book now to secure priority appointments with top specialists"
        tags={["24-hour response", "Appointments from tomorrow", "All conditions considered"]}
        ctaLabel="Book Now"
        ctaHref="/quiz"
      />
      
      {/* Article Cards */}
      <ArticleCardsGrid
        articles={articles}
        title="Medical Cannabis Resources"
        description="Learn about medical cannabis treatment options, legal requirements, and patient experiences"
      />
      
      <ValuePropositionSection />
      
      {/* Social Proof Section */}
      <SocialProofSection />
      
      {/* Legal Assurance Section - positioned after hero */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Scale className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                100% Legal & Regulated
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Medical cannabis has been legal in the UK since 2018. All clinics on our platform are 
                fully licensed and regulated by the appropriate authorities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">MHRA Regulated</h4>
                <p className="text-sm text-gray-600">All clinics follow strict MHRA guidelines</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Licensed Specialists</h4>
                <p className="text-sm text-gray-600">Only GMC-registered doctors prescribe</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <Scale className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                <p className="text-sm text-gray-600">Full compliance with UK regulations</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Assured</h4>
                <p className="text-sm text-gray-600">Pharmaceutical standards met</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Clinics Section */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gray-900 mb-4">
              Top-Rated Medical Cannabis Clinics
            </h2>
            <p className="subheading max-w-3xl mx-auto">
              Discover the most trusted and highly-rated medical cannabis clinics across the UK
            </p>
          </div>

          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-200 rounded-lg h-96 animate-pulse" />
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600">Unable to load clinics. Please try again later.</p>
              </div>
            </div>
          )}

          {!isLoading && !error && topClinics.length > 0 && (
            <>
              <ErrorBoundary>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {topClinics.map((clinic, index) => (
                    clinic?.overview?.name ? (
                    <div 
                      key={clinic.overview?.id || index}
                      onClick={() => navigate(`/clinics/${clinic.overview?.name?.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="cursor-pointer"
                      style={{ minHeight: '320px' }} // Prevent layout shift
                    >
                      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-200">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {clinic.overview.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              {clinic.overview?.tagline || clinic.overview?.description?.substring(0, 100) + '...'}
                            </p>
                            <div className="flex items-center mb-2">
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star 
                                    key={star}
                                    className={`h-4 w-4 ${
                                      star <= Math.round(clinic.patientExperience?.overallRating || 4.0) 
                                        ? 'text-yellow-400 fill-current' 
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm font-medium ml-1">
                                {clinic.patientExperience?.overallRating?.toFixed(1) || '4.0'}
                              </span>
                              <span className="text-xs text-gray-500 ml-1">
                                ({clinic.patientExperience?.totalReviews || 0} reviews)
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">
                              £{clinic.pricing?.initialConsultation?.price || '150'}
                            </div>
                            <div className="text-xs text-gray-500">consultation</div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {clinic.services?.specialties?.slice(0, 3).map((specialty, i) => (
                              <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="text-xs text-gray-500">
                            Next: {clinic.patientExperience?.nextAvailableAppointment || '1-2 weeks'}
                          </div>
                          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-green-700 transition-all">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                    ) : null
                  ))}
                </div>
              </ErrorBoundary>

              <div className="text-center">
                <button
                  onClick={() => navigate('/clinics')}
                  className="btn-primary inline-flex items-center px-6 py-3"
                >
                  View All Clinics
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {(clinics || []).length}+
              </div>
              <div className="text-gray-600">Verified Clinics</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">UK Cities</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                <Star className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {(clinics || []).reduce((acc, clinic) => acc + (clinic.patientExperience?.totalReviews || 0), 0)}+
              </div>
              <div className="text-gray-600">Patient Reviews</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQAccordion
        faqs={faqs}
        title="Frequently Asked Questions"
        description="Get answers to the most common questions about medical cannabis treatment in the UK"
        showMetadata={true}
      />
    </div>
  );
};

export default HomePage;