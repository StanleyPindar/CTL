import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, FileText, Brain, Activity, Moon, Zap, 
  Users, Award, Shield, CheckCircle, Calendar, Clock, Scale
} from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

const EducationHubPage: React.FC = () => {
  const navigate = useNavigate();

  const guides = [
    {
      title: 'How to Get a Medical Cannabis Prescription',
      description: 'A step-by-step guide to obtaining a legal medical cannabis prescription in the UK',
      icon: FileText,
      color: 'bg-blue-100 text-blue-600',
      path: '/education/how-to-get-prescription'
    },
    {
      title: 'How to Get Started with a Clinic',
      description: 'A comprehensive guide to finding and booking your first medical cannabis clinic appointment',
      icon: Calendar,
      color: 'bg-green-100 text-green-600',
      path: '/education/how-to-get-a-clinic'
    },
    {
      title: 'How to Choose the Right Clinic',
      description: 'Key factors to consider when selecting a medical cannabis clinic for your needs',
      icon: Users,
      color: 'bg-green-100 text-green-600',
      path: '/education/how-to-choose-clinic'
    },
    {
      title: 'How to Budget for Medical Cannabis',
      description: 'Understanding the costs involved and planning your medical cannabis budget',
      icon: Shield,
      color: 'bg-purple-100 text-purple-600',
      path: '/education/how-to-budget'
    }
  ];

  const conditions = [
    {
      title: 'Chronic Pain',
      description: 'Medical cannabis for chronic pain management',
      icon: Activity,
      color: 'bg-red-100 text-red-600',
      path: '/conditions/chronic-pain'
    },
    {
      title: 'Anxiety & PTSD',
      description: 'How medical cannabis can help with anxiety disorders',
      icon: Brain,
      color: 'bg-blue-100 text-blue-600',
      path: '/conditions/anxiety-ptsd'
    },
    {
      title: 'Insomnia & Sleep Disorders',
      description: 'Improving sleep quality with medical cannabis',
      icon: Moon,
      color: 'bg-indigo-100 text-indigo-600',
      path: '/conditions/insomnia'
    },
    {
      title: 'Multiple Sclerosis',
      description: 'Managing MS symptoms with medical cannabis',
      icon: Shield,
      color: 'bg-purple-100 text-purple-600',
      path: '/conditions/multiple-sclerosis'
    },
    {
      title: 'Epilepsy',
      description: 'Reducing seizures with medical cannabis treatment',
      icon: Zap,
      color: 'bg-yellow-100 text-yellow-600',
      path: '/conditions/epilepsy'
    },
    {
      title: 'Cancer Support',
      description: 'Managing cancer symptoms and treatment side effects',
      icon: Award,
      color: 'bg-pink-100 text-pink-600',
      path: '/conditions/cancer'
    }
  ];

  const comprehensiveGuides = [
    {
      title: 'UK Complete Guide to Medical Cannabis',
      description: 'Everything you need to know about medical cannabis in the UK',
      path: '/education/uk-complete-guide'
    },
    {
      title: 'Clinic Comparison Guide',
      description: 'Detailed comparison of all UK medical cannabis clinics',
      path: '/education/clinic-comparison-guide'
    },
    {
      title: 'Patient Stories',
      description: 'Real experiences from medical cannabis patients',
      path: '/education/patient-stories'
    },
    {
      title: 'Market Insights',
      description: 'Latest trends and developments in UK medical cannabis',
      path: '/education/market-insights'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/MedicalWebPage">
      <MetaTags 
        title="Medical Cannabis Education Hub UK - Complete Guide & 20+ Clinics"
        description="Medical cannabis education UK. Complete treatment guide, how to get prescriptions, find clinics & understand costs. Expert advice from GMC doctors. 20+ MHRA regulated clinics."
        datePublished="2024-01-05"
        dateModified="2024-02-25"
        author="CompareTheLeaf Medical Team"
        keywords={[
          'medical cannabis education UK',
          'how to get medical cannabis UK',
          'medical cannabis guide UK',
          'medical cannabis treatment guide',
          'UK medical cannabis resources',
          'medical cannabis prescription guide',
          'medical cannabis cost guide',
          'medical cannabis eligibility guide',
          'medical cannabis clinic guide',
          'medical cannabis patient education',
          'medical cannabis research UK',
          'medical cannabis legal guide UK',
          'medical cannabis conditions guide',
          'medical cannabis dosing guide',
          'comprehensive medical cannabis guide',
          'compare medical cannabis clinics UK',
          'medical cannabis clinic UK',
          'medical cannabis doctors UK'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/education/hub"
        medicalProcedureData={{
          name: 'Medical Cannabis Consultation',
          alternateName: [
            'Cannabis Medicine Assessment',
            'Medical Cannabis Evaluation',
            'Cannabis Therapy Consultation'
          ],
          description: 'Comprehensive medical assessment for medical cannabis treatment eligibility and prescription',
          procedureType: 'Medical consultation and assessment',
          preparation: [
            'Gather medical records',
            'List current medications',
            'Document treatment history',
            'Prepare symptom diary'
          ],
          howPerformed: 'Specialist doctor conducts comprehensive medical assessment via video call or in-person consultation',
          followup: [
            'Regular monitoring appointments',
            'Dose adjustments',
            'Treatment response evaluation',
            'Side effect monitoring'
          ],
          category: [
            'Medical Assessment',
            'Specialist Consultation',
            'Treatment Planning'
          ],
          expectedPrognosis: 'Improved symptom management and quality of life with appropriate treatment',
          typicalTest: [
            'Medical history review',
            'Physical examination',
            'Mental state examination',
            'Treatment response assessment'
          ],
          contraindication: [
            'Severe cardiovascular disease',
            'Severe psychiatric disorders',
            'Pregnancy and breastfeeding',
            'Age under 18 (except specific cases)'
          ]
        }}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Education Hub', path: '/education/hub' }
        ]}
      />
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Education Hub', path: '/education/hub' }
        ]}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
              <BookOpen className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
              Medical Cannabis Education Hub UK - Complete Treatment Guide
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8" itemProp="description">
              Comprehensive guides, research insights, and expert advice to help you understand medical cannabis 
              treatment in the UK. Learn how to get prescriptions, find clinics, and understand costs.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-8">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Medically reviewed content by healthcare professionals</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/quiz')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Find My Clinic
              </button>
              <button
                onClick={() => navigate('/education/how-to-get-prescription')}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Get Started Guide
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <MedicalDisclaimer />
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              UK Medical Cannabis Facts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key statistics about medical cannabis treatment in the United Kingdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2018</div>
              <div className="text-gray-600">Year medical cannabis became legal in the UK</div>
              <div className="text-xs text-gray-500 mt-2">Source: UK Government</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">36,000+</div>
              <div className="text-gray-600">Active medical cannabis patients in the UK</div>
              <div className="text-xs text-gray-500 mt-2">Source: Cannabis Patient Advocacy</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-gray-600">Licensed medical cannabis clinics</div>
              <div className="text-xs text-gray-500 mt-2">Source: CQC Registry</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">£1,200</div>
              <div className="text-gray-600">Average annual treatment cost</div>
              <div className="text-xs text-gray-500 mt-2">Source: Industry Analysis</div>
            </div>
          </div>
        </div>
      </div>

      {/* How-To Guides Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How-To Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guides to help you navigate your medical cannabis journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {guides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <div 
                  key={index}
                  onClick={() => navigate(guide.path)}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${guide.color} mr-4`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-medium">
                      Read Guide
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => navigate('/education/how-to-get-prescription')}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              View All Guides
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Condition-Specific Articles */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Condition-Specific Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth information about medical cannabis treatment for specific conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {conditions.map((condition, index) => {
              const IconComponent = condition.icon;
              return (
                <div 
                  key={index}
                  onClick={() => navigate(condition.path)}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${condition.color} mr-3`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{condition.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {condition.description}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-medium">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => navigate('/conditions')}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              View All Conditions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Authority Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Legal & Regulated Treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Medical cannabis has been legal in the UK since November 2018, providing a regulated treatment option
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Scale className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Framework</h3>
              <p className="text-gray-600">
                Medical cannabis was legalized in the UK in November 2018, allowing specialist doctors to prescribe cannabis-based products for medicinal use.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulated Prescribing</h3>
              <p className="text-gray-600">
                Only specialist doctors on the General Medical Council's Specialist Register can prescribe medical cannabis in the UK.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Standards</h3>
              <p className="text-gray-600">
                All medical cannabis products must meet strict pharmaceutical standards for quality, consistency, and safety.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UK Medical Cannabis Facts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key statistics about medical cannabis treatment in the United Kingdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2018</div>
              <div className="text-gray-600">Year medical cannabis became legal in the UK</div>
              <div className="text-xs text-gray-500 mt-2">Source: UK Government</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">36,000+</div>
              <div className="text-gray-600">Active medical cannabis patients in the UK</div>
              <div className="text-xs text-gray-500 mt-2">Source: Cannabis Patient Advocacy</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-gray-600">Licensed medical cannabis clinics</div>
              <div className="text-xs text-gray-500 mt-2">Source: CQC Registry</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">£1,200</div>
              <div className="text-gray-600">Average annual treatment cost</div>
              <div className="text-xs text-gray-500 mt-2">Source: Industry Analysis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Guides */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Education Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed resources to deepen your understanding of medical cannabis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {comprehensiveGuides.map((guide, index) => (
              <div 
                key={index}
                onClick={() => navigate(guide.path)}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  Read Guide
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => navigate('/education/uk-complete-guide')}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Explore All Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Medical Cannabis Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take our clinic matching quiz to find the perfect clinic for your specific needs.
          </p>
          <button
            onClick={() => navigate('/quiz')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Take our three-minute quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationHubPage;