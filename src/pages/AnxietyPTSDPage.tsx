import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, Shield, Heart, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import PositiveOutcomesSection from '../components/PositiveOutcomesSection';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const AnxietyPTSDPage: React.FC = () => {
  const navigate = useNavigate();

  const conditions = [
    {
      name: 'Generalized Anxiety Disorder (GAD)',
      description: 'Persistent and excessive worry about various aspects of life',
      symptoms: ['Excessive worry', 'Restlessness', 'Fatigue', 'Difficulty concentrating', 'Sleep disturbances'],
      cannabisApproach: 'CBD-dominant products for anxiety relief without psychoactive effects'
    },
    {
      name: 'Post-Traumatic Stress Disorder (PTSD)',
      description: 'Mental health condition triggered by experiencing or witnessing traumatic events',
      symptoms: ['Flashbacks', 'Nightmares', 'Severe anxiety', 'Avoidance behaviors', 'Hypervigilance'],
      cannabisApproach: 'Balanced THC:CBD ratios for comprehensive symptom management'
    },
    {
      name: 'Panic Disorder',
      description: 'Recurrent panic attacks and persistent fear of future attacks',
      symptoms: ['Sudden panic attacks', 'Heart palpitations', 'Sweating', 'Fear of losing control', 'Agoraphobia'],
      cannabisApproach: 'Low-dose CBD for prevention, with rescue protocols for acute episodes'
    },
    {
      name: 'Social Anxiety Disorder',
      description: 'Intense fear of social situations and being judged by others',
      symptoms: ['Fear of social situations', 'Physical symptoms in social settings', 'Avoidance of social events', 'Low self-esteem'],
      cannabisApproach: 'CBD products to reduce social anxiety without impairing cognitive function'
    }
  ];

  const treatmentApproaches = [
    {
      type: 'CBD-Dominant Products',
      ratio: 'High CBD, Low THC (20:1 to 10:1)',
      benefits: [
        'Anxiolytic (anti-anxiety) effects',
        'No psychoactive impairment',
        'Suitable for daytime use',
        'Minimal side effects'
      ],
      considerations: [
        'May take time to build therapeutic levels',
        'Effects can be subtle initially',
        'Best for general anxiety management'
      ]
    },
    {
      type: 'Balanced Formulations',
      ratio: 'Moderate THC:CBD (1:1 to 1:2)',
      benefits: [
        'Enhanced anxiety relief',
        'Improved sleep quality',
        'Mood stabilization',
        'PTSD symptom management'
      ],
      considerations: [
        'May cause mild psychoactive effects',
        'Better for evening use',
        'Requires careful dosing'
      ]
    },
    {
      type: 'Microdosing THC',
      ratio: 'Very low THC doses (1-2.5mg)',
      benefits: [
        'Subtle mood enhancement',
        'Reduced anxiety without impairment',
        'Improved stress resilience',
        'Better sleep initiation'
      ],
      considerations: [
        'Requires precise dosing',
        'Individual tolerance varies',
        'May not be suitable for all patients'
      ]
    }
  ];

  const clinicStats = {
    specialistClinics: 35,
    patientsHelped: 8500,
    averageImprovement: 72,
    satisfactionRate: 91
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Medical Cannabis for Anxiety & PTSD UK - 35+ Mental Health Specialists"
        description="Medical cannabis for anxiety & PTSD UK. 35+ mental health specialists, GMC registered psychiatrists, treatment options & patient reviews. Book consultations for GAD, panic, trauma. MHRA regulated."
        keywords={[
          'anxiety medical cannabis UK',
          'medical cannabis for anxiety UK',
          'PTSD medical cannabis UK',
          'medical cannabis mental health UK',
          'anxiety treatment medical cannabis',
          'medical cannabis for PTSD UK',
          'medical cannabis anxiety clinics UK',
          'anxiety cannabis prescription UK',
          'medical cannabis psychiatrists UK',
          'GAD medical cannabis UK',
          'panic disorder medical cannabis',
          'trauma medical cannabis UK',
          'compare medical cannabis clinics UK',
          'medical cannabis clinic UK'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/conditions/anxiety-ptsd"
        conditionData={{
          name: 'Anxiety & PTSD',
          symptoms: ['Excessive worry', 'Panic attacks', 'Flashbacks', 'Avoidance behaviors', 'Sleep disturbances'],
          treatments: ['Medical Cannabis Treatment', 'CBD Products', 'Therapy', 'Medication'],
          prevalence: 'Affects 8.2 million adults in the UK',
          riskFactors: ['Trauma exposure', 'Family history', 'Chronic stress', 'Other mental health conditions'],
          diagnosis: ['Clinical interview', 'Psychological assessment', 'Symptom evaluation', 'Medical history']
        }}
        healthTopicData={{
          name: 'Anxiety & PTSD',
          description: 'Mental health conditions affecting millions of UK adults',
          symptoms: ['Excessive worry', 'Panic attacks', 'Flashbacks', 'Avoidance behaviors'],
          causes: ['Trauma', 'Genetics', 'Brain chemistry', 'Environmental factors'],
          treatments: ['Medical Cannabis', 'Therapy', 'Medication', 'Lifestyle changes'],
          prevention: ['Stress management', 'Regular exercise', 'Social support', 'Professional help']
        }}
        breadcrumbData={[
          { name: 'Home', url: 'https://comparetheleaf.co.uk/' },
          { name: 'Conditions', url: 'https://comparetheleaf.co.uk/conditions' },
          { name: 'Anxiety & PTSD', url: 'https://comparetheleaf.co.uk/conditions/anxiety-ptsd' }
        ]}
        medicalEntityData={{
          type: 'MedicalCondition',
          name: 'Anxiety Disorders and PTSD',
          alternateName: [
            'Generalized Anxiety Disorder',
            'Post-Traumatic Stress Disorder',
            'Panic Disorder',
            'Social Anxiety Disorder'
          ],
          description: 'Mental health conditions characterized by excessive fear, worry, and related behavioral disturbances',
          medicalCode: [
            { code: 'F41', codingSystem: 'ICD-10' },
            { code: 'F43.1', codingSystem: 'ICD-10' }
          ],
          signOrSymptom: [
            'Excessive worry',
            'Panic attacks',
            'Flashbacks',
            'Avoidance behaviors',
            'Sleep disturbances',
            'Hypervigilance',
            'Restlessness',
            'Difficulty concentrating'
          ],
          possibleTreatment: [
            'Medical Cannabis Treatment',
            'CBD-dominant products',
            'Balanced THC:CBD formulations',
            'Cognitive Behavioral Therapy',
            'SSRI medications',
            'Benzodiazepines (short-term)',
            'EMDR therapy',
            'Mindfulness-based interventions'
          ],
          riskFactor: [
            'Trauma exposure',
            'Family history of anxiety',
            'Chronic stress',
            'Other mental health conditions',
            'Substance abuse',
            'Medical conditions'
          ],
          associatedAnatomy: [
            'Central nervous system',
            'Amygdala',
            'Hippocampus',
            'Prefrontal cortex'
          ],
          epidemiology: 'Affects 8.2 million adults in the UK annually',
          pathophysiology: 'Dysregulation of neurotransmitter systems including GABA, serotonin, and norepinephrine',
          subtype: [
            'Generalized Anxiety Disorder',
            'Panic Disorder',
            'Social Anxiety Disorder',
            'Specific Phobias',
            'Combat PTSD',
            'Complex PTSD'
          ],
          relevantSpecialty: [
            'Psychiatry',
            'Clinical Psychology',
            'Mental Health Nursing',
            'Trauma Therapy'
          ]
        }}
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Conditions', path: '/conditions' },
          { label: 'Anxiety & PTSD', path: '/conditions/anxiety-ptsd' }
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Cannabis for Anxiety & PTSD UK - Treatment Guide & Specialist Clinics
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive guide to medical cannabis for anxiety disorders and PTSD in the UK. Learn about treatment approaches, find specialist mental health clinics, and understand effectiveness. 35+ specialist clinics available.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.specialistClinics}</div>
                <div className="text-sm text-gray-600">Mental Health Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.patientsHelped.toLocaleString()}+</div>
                <div className="text-sm text-gray-600">Patients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.averageImprovement}%</div>
                <div className="text-sm text-gray-600">Symptom Improvement</div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Anxiety and PTSD</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Anxiety disorders and PTSD are among the most common mental health conditions, affecting millions 
                of people worldwide. These conditions can significantly impact daily functioning, relationships, 
                and overall quality of life. Traditional treatments include therapy, medications, and lifestyle 
                interventions, but many patients don't achieve adequate relief from conventional approaches.
              </p>
              <p className="mb-4">
                Medical cannabis has shown promise in managing anxiety and PTSD symptoms through its interaction 
                with the endocannabinoid system, which plays a crucial role in mood regulation, stress response, 
                and emotional processing. The key is finding the right cannabinoid profile and dosing strategy 
                for each individual's specific needs.
              </p>
            </div>
          </div>

          {/* Conditions Breakdown */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Anxiety and PTSD Conditions</h2>
            <div className="space-y-6">
              {conditions.map((condition, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{condition.name}</h3>
                  <p className="text-gray-600 mb-4">{condition.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Common Symptoms:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {condition.symptoms.map((symptom, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Cannabis Approach:</h4>
                      <p className="text-sm text-gray-600">{condition.cannabisApproach}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Approaches */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Cannabis Treatment Approaches</h2>
            <div className="space-y-6">
              {treatmentApproaches.map((approach, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{approach.type}</h3>
                    <span className="text-sm text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
                      {approach.ratio}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Benefits
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {approach.benefits.map((benefit, i) => (
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
                        {approach.considerations.map((consideration, i) => (
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

          {/* Research and Evidence */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research and Evidence</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Brain className="h-5 w-5 text-blue-600 mr-2" />
                  Anxiety Research
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>CBD has shown anxiolytic effects in multiple clinical studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Neuroimaging studies show CBD affects anxiety-related brain regions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Social anxiety studies demonstrate significant symptom reduction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lower doses often more effective than higher doses for anxiety</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-purple-600 mr-2" />
                  PTSD Research
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cannabis may help reduce nightmares and improve sleep quality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Observational studies show reduced PTSD symptom severity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>May help with hypervigilance and emotional regulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Potential to reduce reliance on traditional psychiatric medications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Safety Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">Important Safety Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Mental Health Monitoring</h4>
                    <p className="text-yellow-700 text-sm mb-4">
                      Regular monitoring by mental health professionals is essential. Cannabis should complement, 
                      not replace, established mental health treatments.
                    </p>
                    
                    <h4 className="font-medium text-yellow-800 mb-2">Paradoxical Effects</h4>
                    <p className="text-yellow-700 text-sm">
                      Some patients may experience increased anxiety with THC. Starting with CBD-only products 
                      is often recommended for anxiety disorders.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Drug Interactions</h4>
                    <p className="text-yellow-700 text-sm mb-4">
                      Cannabis can interact with psychiatric medications. Always inform your healthcare providers 
                      about all treatments you're using.
                    </p>
                    
                    <h4 className="font-medium text-yellow-800 mb-2">Dependency Considerations</h4>
                    <p className="text-yellow-700 text-sm">
                      While rare with medical use, psychological dependence is possible. Use should be monitored 
                      and integrated with other therapeutic approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Evidence Section */}
          <PositiveOutcomesSection />

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Explore Mental Health Treatment?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Find mental health specialists who understand medical cannabis treatment for anxiety and PTSD.
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
                Find Mental Health Specialists
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnxietyPTSDPage;