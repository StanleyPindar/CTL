import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Moon, Clock, Brain, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import PositiveOutcomesSection from '../components/PositiveOutcomesSection';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const InsomniaPage: React.FC = () => {
  const navigate = useNavigate();

  const sleepDisorders = [
    {
      name: 'Chronic Insomnia',
      description: 'Difficulty falling asleep, staying asleep, or early morning awakening for 3+ months',
      symptoms: ['Difficulty falling asleep', 'Frequent night wakings', 'Early morning awakening', 'Non-restorative sleep'],
      cannabisApproach: 'THC-dominant products for sleep initiation, CBD for sleep maintenance'
    },
    {
      name: 'Sleep Maintenance Insomnia',
      description: 'Frequent awakening during the night with difficulty returning to sleep',
      symptoms: ['Multiple night wakings', 'Difficulty returning to sleep', 'Light sleep', 'Daytime fatigue'],
      cannabisApproach: 'Balanced THC:CBD formulations with extended-release properties'
    },
    {
      name: 'Pain-Related Sleep Disruption',
      description: 'Sleep disturbances caused by chronic pain conditions',
      symptoms: ['Pain preventing sleep onset', 'Pain-related awakening', 'Position-dependent sleep', 'Morning stiffness'],
      cannabisApproach: 'Combined pain and sleep formulations with anti-inflammatory properties'
    },
    {
      name: 'Anxiety-Related Insomnia',
      description: 'Sleep difficulties caused by racing thoughts and anxiety',
      symptoms: ['Racing thoughts at bedtime', 'Worry about sleep', 'Tension and restlessness', 'Fear of not sleeping'],
      cannabisApproach: 'CBD-dominant products to reduce anxiety before sleep-inducing THC'
    }
  ];

  const sleepProducts = [
    {
      type: 'THC-Dominant Sleep Formulations',
      ratio: 'High THC, Low CBD (10:1 to 20:1)',
      timing: '30-60 minutes before bedtime',
      benefits: [
        'Rapid sleep onset',
        'Reduced sleep latency',
        'Deeper sleep phases',
        'Reduced REM sleep (fewer dreams/nightmares)'
      ],
      considerations: [
        'May cause morning grogginess',
        'Tolerance can develop',
        'Not suitable for daytime use',
        'May affect REM sleep patterns'
      ]
    },
    {
      type: 'Balanced Sleep Blends',
      ratio: 'Moderate THC:CBD (1:1 to 2:1)',
      timing: '45-90 minutes before bedtime',
      benefits: [
        'Balanced sleep induction',
        'Reduced anxiety before sleep',
        'Less morning grogginess',
        'Suitable for sleep maintenance'
      ],
      considerations: [
        'May take longer to take effect',
        'Individual response varies',
        'May need dose adjustment',
        'Best for comprehensive sleep issues'
      ]
    },
    {
      type: 'CBD with Minor Cannabinoids',
      ratio: 'High CBD with CBN, CBG',
      timing: '60-120 minutes before bedtime',
      benefits: [
        'Natural sleep promotion',
        'Minimal psychoactive effects',
        'Anxiety reduction',
        'Suitable for sensitive patients'
      ],
      considerations: [
        'Effects may be subtle',
        'May require higher doses',
        'Best combined with sleep hygiene',
        'Individual response varies significantly'
      ]
    }
  ];

  const sleepHygieneTips = [
    'Maintain consistent sleep schedule',
    'Create comfortable sleep environment',
    'Limit screen time before bed',
    'Avoid caffeine late in the day',
    'Regular exercise (not close to bedtime)',
    'Manage stress and anxiety',
    'Consider meditation or relaxation techniques',
    'Keep bedroom cool, dark, and quiet'
  ];

  const clinicStats = {
    specialistClinics: 28,
    patientsHelped: 6200,
    averageImprovement: 78,
    satisfactionRate: 89
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Medical Cannabis for Insomnia UK - 28+ Sleep Disorder Specialists"
        description="Medical cannabis for insomnia & sleep disorders UK. 28+ sleep specialists, treatment options, patient reviews & booking. Improve sleep quality naturally. MHRA regulated clinics."
        keywords={[
          'medical cannabis for insomnia UK',
          'medical cannabis sleep disorders UK',
          'insomnia medical cannabis UK',
          'medical cannabis for sleep UK',
          'sleep disorder medical cannabis',
          'medical cannabis sleep clinics UK',
          'insomnia cannabis prescription UK',
          'medical cannabis sleep specialists',
          'sleep quality medical cannabis',
          'medical cannabis for sleep problems',
          'compare medical cannabis clinics UK',
          'medical cannabis clinic UK'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/conditions/insomnia"
        conditionData={{
          name: 'Insomnia & Sleep Disorders',
          symptoms: ['Difficulty falling asleep', 'Frequent night wakings', 'Early morning awakening', 'Non-restorative sleep'],
          treatments: ['Medical Cannabis Treatment', 'Sleep hygiene', 'CBT-I', 'Medication'],
          prevalence: 'Affects 16 million adults in the UK',
          riskFactors: ['Stress', 'Age', 'Medical conditions', 'Medications'],
          diagnosis: ['Sleep diary', 'Medical history', 'Sleep study', 'Physical examination']
        }}
        healthTopicData={{
          name: 'Insomnia & Sleep Disorders',
          description: 'Sleep disorders affecting quality of life and daily functioning',
          symptoms: ['Difficulty falling asleep', 'Frequent wakings', 'Early awakening', 'Daytime fatigue'],
          causes: ['Stress', 'Medical conditions', 'Medications', 'Lifestyle factors'],
          treatments: ['Medical Cannabis', 'Sleep hygiene', 'Therapy', 'Medication'],
          prevention: ['Regular sleep schedule', 'Sleep environment', 'Stress management', 'Exercise']
        }}
        breadcrumbData={[
          { name: 'Home', url: 'https://comparetheleaf.co.uk/' },
          { name: 'Conditions', url: 'https://comparetheleaf.co.uk/conditions' },
          { name: 'Insomnia', url: 'https://comparetheleaf.co.uk/conditions/insomnia' }
        ]}
        medicalEntityData={{
          type: 'MedicalCondition',
          name: 'Insomnia and Sleep Disorders',
          alternateName: [
            'Sleep Disorder',
            'Sleep Disturbance',
            'Chronic Insomnia',
            'Sleep Maintenance Insomnia'
          ],
          description: 'Sleep disorders characterized by difficulty falling asleep, staying asleep, or achieving restorative sleep',
          medicalCode: [
            { code: 'G47.0', codingSystem: 'ICD-10' },
            { code: 'F51.0', codingSystem: 'ICD-10' }
          ],
          signOrSymptom: [
            'Difficulty falling asleep',
            'Frequent night wakings',
            'Early morning awakening',
            'Non-restorative sleep',
            'Daytime fatigue',
            'Difficulty concentrating',
            'Mood disturbances',
            'Impaired performance'
          ],
          possibleTreatment: [
            'Medical Cannabis Treatment',
            'THC-dominant sleep formulations',
            'CBD with minor cannabinoids',
            'Sleep hygiene education',
            'Cognitive Behavioral Therapy for Insomnia (CBT-I)',
            'Melatonin',
            'Prescription sleep medications'
          ],
          riskFactor: [
            'Stress and anxiety',
            'Age over 60',
            'Medical conditions',
            'Medications',
            'Shift work',
            'Poor sleep environment'
          ],
          associatedAnatomy: [
            'Central nervous system',
            'Hypothalamus',
            'Pineal gland',
            'Brainstem'
          ],
          epidemiology: 'Affects 16 million adults in the UK',
          pathophysiology: 'Disruption of circadian rhythms and sleep-wake cycle regulation',
          subtype: [
            'Acute insomnia',
            'Chronic insomnia',
            'Sleep onset insomnia',
            'Sleep maintenance insomnia',
            'Early morning awakening'
          ],
          relevantSpecialty: [
            'Sleep Medicine',
            'Neurology',
            'Psychiatry',
            'Pulmonology'
          ]
        }}
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Conditions', path: '/conditions' },
          { label: 'Insomnia', path: '/conditions/insomnia' }
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <Moon className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Cannabis for Insomnia & Sleep Disorders UK - Treatment Guide & Sleep Specialists
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive guide to medical cannabis for insomnia and sleep disorders in the UK. Learn about treatment approaches, find sleep specialist clinics, and improve sleep quality. 28+ sleep specialists available.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.specialistClinics}</div>
                <div className="text-sm text-gray-600">Sleep Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.patientsHelped.toLocaleString()}+</div>
                <div className="text-sm text-gray-600">Better Sleep</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.averageImprovement}%</div>
                <div className="text-sm text-gray-600">Sleep Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.satisfactionRate}%</div>
                <div className="text-sm text-gray-600">Patient Satisfaction</div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Sleep Disorders</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Sleep disorders affect millions of people worldwide, significantly impacting quality of life, 
                cognitive function, and overall health. Chronic insomnia, the most common sleep disorder, 
                affects approximately 10-15% of adults and can lead to serious health consequences if left untreated.
              </p>
              <p className="mb-4">
                Traditional sleep medications often come with significant side effects, dependency risks, and 
                may not address underlying causes. Medical cannabis offers a natural alternative that can help 
                with sleep initiation, maintenance, and quality while potentially addressing related issues 
                like pain and anxiety that contribute to sleep problems.
              </p>
            </div>
          </div>

          {/* Sleep Disorders Breakdown */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Sleep Disorders</h2>
            <div className="space-y-6">
              {sleepDisorders.map((disorder, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{disorder.name}</h3>
                  <p className="text-gray-600 mb-4">{disorder.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Common Symptoms:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {disorder.symptoms.map((symptom, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Cannabis Approach:</h4>
                      <p className="text-sm text-gray-600">{disorder.cannabisApproach}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sleep Products */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Cannabis Sleep Products</h2>
            <div className="space-y-6">
              {sleepProducts.map((product, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{product.type}</h3>
                    <div className="text-right">
                      <div className="text-sm text-indigo-600 font-medium bg-indigo-100 px-3 py-1 rounded-full">
                        {product.ratio}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{product.timing}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Benefits
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <AlertCircle className="h-4 w-4 text-orange-500 mr-2" />
                        Considerations
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {product.considerations.map((consideration, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-orange-500 mr-2">!</span>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sleep Hygiene */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Combining Cannabis with Sleep Hygiene</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Moon className="h-5 w-5 text-indigo-600 mr-2" />
                  Sleep Hygiene Essentials
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {sleepHygieneTips.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  Timing and Dosing Tips
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">Start Low, Go Slow</h4>
                    <p className="text-blue-700 text-sm">
                      Begin with the lowest effective dose and gradually increase. Sleep products 
                      can have delayed onset, so wait at least 2 hours before taking more.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-800 mb-2">Consistent Timing</h4>
                    <p className="text-green-700 text-sm">
                      Take your sleep medication at the same time each night to establish a routine 
                      and optimize effectiveness.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium text-purple-800 mb-2">Monitor Effects</h4>
                    <p className="text-purple-700 text-sm">
                      Keep a sleep diary to track sleep quality, duration, and any side effects 
                      to optimize your treatment plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">Important Safety Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Morning Impairment</h4>
                    <p className="text-yellow-700 text-sm mb-4">
                      THC-containing sleep products may cause morning grogginess. Avoid driving or 
                      operating machinery until you know how the medication affects you.
                    </p>
                    
                    <h4 className="font-medium text-yellow-800 mb-2">Tolerance Development</h4>
                    <p className="text-yellow-700 text-sm">
                      Regular use of THC for sleep may lead to tolerance. Periodic breaks or 
                      dose adjustments may be necessary under medical supervision.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Drug Interactions</h4>
                    <p className="text-yellow-700 text-sm mb-4">
                      Cannabis can interact with other sleep medications and sedatives. Always 
                      inform your healthcare providers about all medications you're taking.
                    </p>
                    
                    <h4 className="font-medium text-yellow-800 mb-2">Underlying Conditions</h4>
                    <p className="text-yellow-700 text-sm">
                      Sleep disorders can be symptoms of underlying medical conditions. Ensure 
                      proper medical evaluation before starting cannabis treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Evidence Section */}
          <PositiveOutcomesSection />

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Better Sleep?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Find sleep specialists who understand medical cannabis treatment for insomnia and sleep disorders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/quiz')}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Take our three-minute quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('/clinics')}
                className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-800 transition-colors"
              >
                Find Sleep Specialists
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsomniaPage;