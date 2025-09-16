import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Activity, Users, FileText, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import PositiveOutcomesSection from '../components/PositiveOutcomesSection';

const ChronicPainPage: React.FC = () => {
  const navigate = useNavigate();

  const painTypes = [
    {
      type: 'Neuropathic Pain',
      description: 'Nerve damage causing burning, shooting, or tingling sensations',
      examples: ['Diabetic neuropathy', 'Post-surgical nerve pain', 'Sciatica', 'Trigeminal neuralgia'],
      cannabisApproach: 'Balanced THC:CBD ratios often most effective for nerve pain'
    },
    {
      type: 'Inflammatory Pain',
      description: 'Pain caused by inflammation in joints, muscles, or tissues',
      examples: ['Rheumatoid arthritis', 'Inflammatory bowel disease', 'Sports injuries', 'Tendonitis'],
      cannabisApproach: 'CBD-dominant products with anti-inflammatory properties'
    },
    {
      type: 'Musculoskeletal Pain',
      description: 'Pain affecting muscles, bones, ligaments, and tendons',
      examples: ['Fibromyalgia', 'Back pain', 'Osteoarthritis', 'Chronic fatigue syndrome'],
      cannabisApproach: 'Combination of oral and topical applications for targeted relief'
    },
    {
      type: 'Cancer-Related Pain',
      description: 'Pain from cancer itself or treatment side effects',
      examples: ['Tumor pain', 'Chemotherapy-induced neuropathy', 'Radiation pain', 'Bone metastases'],
      cannabisApproach: 'Higher THC ratios for severe pain, with anti-nausea benefits'
    }
  ];

  const treatmentOptions = [
    {
      type: 'CBD-Dominant Products',
      ratio: 'High CBD, Low THC (20:1 to 10:1)',
      benefits: ['Anti-inflammatory effects', 'Pain relief without psychoactive effects', 'Suitable for daytime use'],
      bestFor: ['Inflammatory conditions', 'Mild to moderate pain', 'Patients sensitive to THC']
    },
    {
      type: 'Balanced Formulations',
      ratio: 'Equal CBD:THC (1:1 to 2:1)',
      benefits: ['Enhanced pain relief', 'Mood improvement', 'Better sleep quality'],
      bestFor: ['Moderate to severe pain', 'Nerve pain', 'Evening use']
    },
    {
      type: 'THC-Dominant Products',
      ratio: 'High THC, Low CBD (10:1 to 20:1)',
      benefits: ['Strong pain relief', 'Appetite stimulation', 'Sleep induction'],
      bestFor: ['Severe chronic pain', 'Cancer pain', 'End-of-life care']
    },
    {
      type: 'Topical Applications',
      ratio: 'Various ratios available',
      benefits: ['Localized relief', 'No systemic effects', 'Can be combined with oral treatments'],
      bestFor: ['Joint pain', 'Muscle pain', 'Localized inflammation']
    }
  ];

  const clinicStats = {
    specialistClinics: 45,
    patientsHelped: 12000,
    averageImprovement: 68,
    satisfactionRate: 94
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Medical Cannabis for Chronic Pain UK - 45+ Specialist Clinics & Treatment Guide"
        description="Medical cannabis for chronic pain UK. 45+ specialist clinics, GMC registered doctors, treatment options & patient reviews. Book consultations for fibromyalgia, arthritis, back pain. MHRA regulated."
        keywords={[
          'medical cannabis for chronic pain UK',
          'chronic pain medical cannabis',
          'medical cannabis pain relief UK',
          'chronic pain treatment UK',
          'medical cannabis chronic pain clinics',
          'cannabis for fibromyalgia UK',
          'medical cannabis arthritis UK',
          'neuropathic pain medical cannabis',
          'chronic pain cannabis prescription',
          'medical cannabis pain management',
          'urgent chronic pain treatment UK',
          'book chronic pain consultation',
          'chronic pain specialists UK',
          'medical cannabis for back pain UK',
          'chronic pain relief medical cannabis',
          'compare medical cannabis clinics UK',
          'medical cannabis clinic UK'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/conditions/chronic-pain"
        conditionData={{
          name: 'Chronic Pain',
          symptoms: ['Persistent pain lasting more than 3 months', 'Reduced mobility', 'Sleep disturbances', 'Fatigue'],
          treatments: ['Medical Cannabis Treatment', 'Pain Management', 'CBD Products', 'THC Products'],
          prevalence: 'Affects 28 million adults in the UK',
          riskFactors: ['Age over 65', 'Previous injury', 'Chronic illness', 'Stress'],
          diagnosis: ['Medical history review', 'Physical examination', 'Imaging studies', 'Pain assessment']
        }}
        breadcrumbData={[
          { name: 'Home', url: 'https://comparetheleaf.co.uk/' },
          { name: 'Conditions', url: 'https://comparetheleaf.co.uk/conditions' },
          { name: 'Chronic Pain', url: 'https://comparetheleaf.co.uk/conditions/chronic-pain' }
        ]}
        medicalEntityData={{
          type: 'MedicalCondition',
          name: 'Chronic Pain',
          alternateName: ['Persistent Pain', 'Long-term Pain', 'Chronic Pain Syndrome'],
          description: 'Pain that persists for more than 3-6 months, often beyond normal healing time',
          medicalCode: [
            { code: 'G89.4', codingSystem: 'ICD-10' },
            { code: 'R52', codingSystem: 'ICD-10' }
          ],
          signOrSymptom: [
            'Persistent pain lasting more than 3 months',
            'Reduced mobility and function',
            'Sleep disturbances',
            'Fatigue and low energy',
            'Mood changes',
            'Difficulty concentrating'
          ],
          possibleTreatment: [
            'Medical Cannabis Treatment',
            'CBD-dominant products',
            'Balanced THC:CBD formulations',
            'Topical cannabis applications',
            'Pain management therapy',
            'Physiotherapy',
            'Cognitive behavioral therapy'
          ],
          riskFactor: [
            'Age over 65',
            'Previous injury or surgery',
            'Chronic illness',
            'Stress and mental health conditions',
            'Sedentary lifestyle',
            'Obesity'
          ],
          associatedAnatomy: [
            'Musculoskeletal system',
            'Nervous system',
            'Joints',
            'Muscles',
            'Spine'
          ],
          epidemiology: 'Affects 28 million adults in the UK, more common in women and older adults',
          pathophysiology: 'Complex interaction of nociceptive, neuropathic, and central sensitization mechanisms',
          subtype: [
            'Neuropathic pain',
            'Inflammatory pain',
            'Musculoskeletal pain',
            'Cancer-related pain',
            'Fibromyalgia',
            'Arthritis pain'
          ],
          typicalTest: [
            'Medical history review',
            'Physical examination',
            'Pain assessment scales',
            'Imaging studies (X-ray, MRI)',
            'Blood tests',
            'Nerve conduction studies'
          ],
          relevantSpecialty: [
            'Pain Medicine',
            'Rheumatology',
            'Neurology',
            'Orthopedics',
            'Anesthesiology'
          ],
          contraindication: [
            'Severe cardiovascular disease',
            'Severe psychiatric disorders',
            'Pregnancy and breastfeeding',
            'History of substance abuse (relative)'
          ],
          guideline: [
            {
              name: 'NICE Guidelines on Cannabis-based medicinal products',
              url: 'https://www.nice.org.uk/guidance/ng144',
              organization: 'National Institute for Health and Care Excellence'
            },
            {
              name: 'British Pain Society Guidelines',
              url: 'https://www.britishpainsociety.org/',
              organization: 'British Pain Society'
            }
          ]
        }}
        drugData={{
          name: 'Medical Cannabis',
          alternateName: [
            'Cannabis-based products for medicinal use',
            'CBPMs',
            'Medical marijuana',
            'Therapeutic cannabis'
          ],
          description: 'Cannabis-based products prescribed for medical conditions when conventional treatments have been inadequate',
          activeIngredient: [
            'Tetrahydrocannabinol (THC)',
            'Cannabidiol (CBD)',
            'Cannabigerol (CBG)',
            'Cannabinol (CBN)',
            'Terpenes'
          ],
          dosageForm: [
            'Dried flower for vaporization',
            'Oral oils and tinctures',
            'Capsules',
            'Topical preparations',
            'Oromucosal sprays'
          ],
          routeOfAdministration: [
            'Inhalation (vaporization)',
            'Oral',
            'Sublingual',
            'Topical',
            'Oromucosal'
          ],
          mechanismOfAction: 'Interaction with the endocannabinoid system, primarily CB1 and CB2 receptors',
          indication: [
            'Chronic pain',
            'Epilepsy',
            'Multiple sclerosis spasticity',
            'Chemotherapy-induced nausea',
            'Anxiety disorders',
            'PTSD',
            'Sleep disorders'
          ],
          contraindication: [
            'Severe cardiovascular disease',
            'Severe psychiatric disorders',
            'Pregnancy',
            'Breastfeeding',
            'Children (except specific epilepsy cases)'
          ],
          adverseOutcome: [
            'Drowsiness',
            'Dizziness',
            'Dry mouth',
            'Changes in appetite',
            'Mood changes',
            'Impaired coordination'
          ],
          drugClass: [
            'Cannabinoids',
            'Schedule 2 Controlled Drug (UK)',
            'Cannabis-based medicinal products'
          ],
          legalStatus: 'Legal for medical use in UK since November 2018',
          prescriptionStatus: 'Prescription only medicine - specialist doctors only',
          manufacturer: [
            'Tilray',
            'Aurora Cannabis',
            'Bedrocan',
            'Spectrum Therapeutics',
            'Khiron Life Sciences'
          ]
        }}
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Conditions', path: '/conditions' },
          { label: 'Chronic Pain', path: '/conditions/chronic-pain' }
        ]}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/conditions')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Conditions
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Activity className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Medical Cannabis for Chronic Pain UK - Treatment Guide, Clinics & Specialists
            </h1>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              Comprehensive guide to medical cannabis for chronic pain in the UK. Learn about treatment options, find specialist clinics, understand effectiveness, and book consultations. 45+ specialist clinics available with GMC registered doctors.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.specialistClinics}</div>
                <div className="text-sm text-gray-600">Specialist Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.patientsHelped.toLocaleString()}+</div>
                <div className="text-sm text-gray-600">Patients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.averageImprovement}%</div>
                <div className="text-sm text-gray-600">Average Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.satisfactionRate}%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Chronic Pain</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Chronic pain affects millions of people worldwide and is defined as pain that persists for more than 
                3-6 months, often beyond the normal healing time. It can significantly impact quality of life, 
                affecting sleep, mood, mobility, and daily functioning.
              </p>
              <p className="mb-4">
                Traditional pain management approaches may include medications, physical therapy, and surgical 
                interventions, but these don't always provide adequate relief for all patients. Medical cannabis 
                has shown promise in managing chronic pain through its interaction with the body's endocannabinoid 
                system, which plays a role in pain perception, inflammation, and mood regulation.
              </p>
            </div>
          </div>

          {/* Types of Chronic Pain */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Chronic Pain</h2>
            <div className="space-y-6">
              {painTypes.map((pain, index) => (
                <div key={index} className="border-l-4 border-red-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pain.type}</h3>
                  <p className="text-gray-600 mb-4">{pain.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Common Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {pain.examples.map((example, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Cannabis Approach:</h4>
                      <p className="text-sm text-gray-600">{pain.cannabisApproach}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Options */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Cannabis Treatment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatmentOptions.map((option, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.type}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-4">{option.ratio}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {option.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Best For:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {option.bestFor.map((use, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility and Process */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility and Treatment Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Diagnosis of chronic pain condition lasting 3+ months</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Inadequate response to conventional treatments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Significant impact on quality of life</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No contraindications to cannabis use</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Willingness to comply with treatment monitoring</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Treatment Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Initial Consultation</h4>
                      <p className="text-sm text-gray-600">Comprehensive assessment with specialist doctor</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Treatment Plan</h4>
                      <p className="text-sm text-gray-600">Personalized prescription and dosing schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Ongoing Monitoring</h4>
                      <p className="text-sm text-gray-600">Regular follow-ups and treatment adjustments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Considerations */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">Important Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Individual Response</h4>
                    <p className="text-yellow-700 text-sm mb-4">
                      Everyone responds differently to medical cannabis. What works for one person may not work 
                      for another, even with the same condition.
                    </p>
                    
                    <h4 className="font-medium text-yellow-800 mb-2">Start Low, Go Slow</h4>
                    <p className="text-yellow-700 text-sm">
                      Begin with the lowest possible dose and gradually increase under medical supervision 
                      to find your optimal therapeutic dose.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Medical Supervision</h4>
                    <p className="text-yellow-700 text-sm mb-4">
                      Always work with a qualified medical professional who can monitor your progress 
                      and adjust your treatment plan as needed.
                    </p>
                    
                    <h4 className="font-medium text-yellow-800 mb-2">Drug Interactions</h4>
                    <p className="text-yellow-700 text-sm">
                      Medical cannabis can interact with other medications. Inform your doctor about all 
                      medications and supplements you're taking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Evidence Section */}
          <PositiveOutcomesSection />

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Explore Your Options?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Find clinics that specialize in chronic pain management and can help you determine 
              the best medical cannabis treatment for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/quiz')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Take our three-minute quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('/clinics')}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Browse Specialist Clinics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChronicPainPage;