import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, Zap, Activity, CheckCircle, AlertCircle, ArrowRight, Target } from 'lucide-react';
import PositiveOutcomesSection from '../components/PositiveOutcomesSection';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const MultipleSclerosisPage: React.FC = () => {
  const navigate = useNavigate();

  const msSymptoms = [
    {
      category: 'Spasticity and Muscle Issues',
      symptoms: ['Muscle spasms', 'Stiffness', 'Muscle weakness', 'Tremors'],
      cannabisHelp: 'THC and CBD can reduce muscle spasticity and improve mobility'
    },
    {
      category: 'Pain and Sensory Issues',
      symptoms: ['Neuropathic pain', 'Burning sensations', 'Numbness', 'Tingling'],
      cannabisHelp: 'Balanced formulations effective for nerve pain and sensory symptoms'
    },
    {
      category: 'Mobility and Coordination',
      symptoms: ['Walking difficulties', 'Balance problems', 'Coordination issues', 'Fatigue'],
      cannabisHelp: 'May improve mobility and reduce fatigue-related symptoms'
    },
    {
      category: 'Bladder and Bowel',
      symptoms: ['Bladder dysfunction', 'Urgency', 'Incontinence', 'Constipation'],
      cannabisHelp: 'Some patients report improved bladder control with cannabis treatment'
    }
  ];

  const treatmentApproaches = [
    {
      name: 'Sativex (Nabiximols)',
      type: 'Licensed MS Medication',
      ratio: '1:1 THC:CBD',
      description: 'The only licensed cannabis-based medicine specifically for MS spasticity in the UK',
      benefits: [
        'Clinically proven for MS spasticity',
        'Standardized dosing',
        'Extensive safety data',
        'Oromucosal spray delivery'
      ],
      considerations: [
        'May not be suitable for all patients',
        'Can cause side effects',
        'Requires specialist prescription',
        'May take weeks to show full effect'
      ]
    },
    {
      name: 'Balanced Oil Formulations',
      type: 'Custom Prescriptions',
      ratio: '1:1 to 2:1 CBD:THC',
      description: 'Tailored oil-based products for comprehensive MS symptom management',
      benefits: [
        'Customizable dosing',
        'Multiple symptom relief',
        'Flexible administration',
        'Cost-effective option'
      ],
      considerations: [
        'Individual response varies',
        'May require dose adjustments',
        'Effects can take time to optimize',
        'Need for regular monitoring'
      ]
    },
    {
      name: 'CBD-Dominant Products',
      type: 'Low-THC Options',
      ratio: '10:1 to 20:1 CBD:THC',
      description: 'High-CBD formulations for patients sensitive to THC or requiring daytime use',
      benefits: [
        'Minimal psychoactive effects',
        'Suitable for daytime use',
        'Anti-inflammatory properties',
        'Neuroprotective potential'
      ],
      considerations: [
        'May be less effective for spasticity',
        'Higher doses may be required',
        'Limited evidence for MS-specific benefits',
        'Individual response varies'
      ]
    }
  ];

  const researchEvidence = [
    {
      study: 'Sativex Clinical Trials',
      findings: 'Significant reduction in spasticity scores in multiple randomized controlled trials',
      significance: 'Led to licensing approval for MS spasticity treatment'
    },
    {
      study: 'Long-term Safety Studies',
      findings: 'Good safety profile with long-term use in MS patients',
      significance: 'Supports sustained treatment for chronic MS symptoms'
    },
    {
      study: 'Quality of Life Research',
      findings: 'Improvements in sleep, pain, and overall quality of life measures',
      significance: 'Demonstrates broader benefits beyond spasticity reduction'
    },
    {
      study: 'Neuroprotection Studies',
      findings: 'Potential neuroprotective effects of cannabinoids in MS models',
      significance: 'May offer disease-modifying benefits beyond symptom relief'
    }
  ];

  const clinicStats = {
    specialistClinics: 38,
    patientsHelped: 4800,
    averageImprovement: 65,
    satisfactionRate: 87
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Medical Cannabis for Multiple Sclerosis UK - 38+ MS Specialists & Spasticity Treatment"
        description="Medical cannabis for Multiple Sclerosis UK. 38+ MS specialists, spasticity treatment, Sativex alternatives & patient reviews. GMC neurologists, MHRA regulated clinics."
        keywords={[
          'medical cannabis for MS UK',
          'medical cannabis multiple sclerosis UK',
          'MS medical cannabis UK',
          'multiple sclerosis cannabis treatment',
          'MS spasticity medical cannabis',
          'Sativex alternative UK',
          'medical cannabis MS clinics UK',
          'MS cannabis prescription UK',
          'medical cannabis neurologists UK',
          'multiple sclerosis treatment UK',
          'compare medical cannabis clinics UK',
          'medical cannabis clinic UK'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/conditions/multiple-sclerosis"
        conditionData={{
          name: 'Multiple Sclerosis',
          symptoms: ['Muscle spasticity', 'Fatigue', 'Walking difficulties', 'Pain', 'Cognitive changes'],
          treatments: ['Medical Cannabis Treatment', 'Disease-modifying therapies', 'Physiotherapy', 'Sativex'],
          prevalence: 'Affects 130,000 people in the UK',
          riskFactors: ['Age 20-40', 'Female gender', 'Family history', 'Geography'],
          diagnosis: ['MRI scans', 'Lumbar puncture', 'Evoked potentials', 'Clinical assessment']
        }}
        healthTopicData={{
          name: 'Multiple Sclerosis',
          description: 'Autoimmune condition affecting the central nervous system',
          symptoms: ['Spasticity', 'Fatigue', 'Mobility issues', 'Pain', 'Cognitive symptoms'],
          causes: ['Autoimmune response', 'Genetics', 'Environmental factors', 'Viral infections'],
          treatments: ['Medical Cannabis', 'DMTs', 'Physiotherapy', 'Occupational therapy'],
          prevention: ['Vitamin D', 'Healthy lifestyle', 'Stress management', 'Regular exercise']
        }}
        breadcrumbData={[
          { name: 'Home', url: 'https://comparetheleaf.co.uk/' },
          { name: 'Conditions', url: 'https://comparetheleaf.co.uk/conditions' },
          { name: 'Multiple Sclerosis', url: 'https://comparetheleaf.co.uk/conditions/multiple-sclerosis' }
        ]}
        medicalEntityData={{
          type: 'MedicalCondition',
          name: 'Multiple Sclerosis',
          alternateName: ['MS', 'Disseminated Sclerosis', 'Encephalomyelitis Disseminata'],
          description: 'Autoimmune demyelinating disease of the central nervous system',
          medicalCode: [
            { code: 'G35', codingSystem: 'ICD-10' }
          ],
          signOrSymptom: [
            'Muscle spasticity',
            'Fatigue',
            'Walking difficulties',
            'Pain',
            'Cognitive changes',
            'Vision problems',
            'Bladder dysfunction',
            'Tremor',
            'Numbness and tingling'
          ],
          possibleTreatment: [
            'Medical Cannabis Treatment',
            'Sativex (Nabiximols)',
            'Disease-modifying therapies',
            'Physiotherapy',
            'Occupational therapy',
            'Baclofen',
            'Gabapentin',
            'Corticosteroids'
          ],
          riskFactor: [
            'Age 20-40',
            'Female gender',
            'Family history',
            'Geographic location',
            'Vitamin D deficiency',
            'Smoking',
            'Viral infections'
          ],
          associatedAnatomy: [
            'Central nervous system',
            'Brain',
            'Spinal cord',
            'Optic nerves',
            'Myelin sheath'
          ],
          epidemiology: 'Affects 130,000 people in the UK, more common in women',
          pathophysiology: 'Autoimmune destruction of myelin sheaths leading to neurological dysfunction',
          subtype: [
            'Relapsing-remitting MS',
            'Secondary progressive MS',
            'Primary progressive MS',
            'Progressive-relapsing MS'
          ],
          typicalTest: [
            'MRI brain and spinal cord',
            'Lumbar puncture',
            'Evoked potentials',
            'Clinical assessment',
            'Blood tests'
          ],
          relevantSpecialty: [
            'Neurology',
            'MS Specialist Nursing',
            'Physiotherapy',
            'Occupational Therapy'
          ],
          contraindication: [
            'Severe immunosuppression',
            'Active infections',
            'Pregnancy (for some treatments)'
          ]
        }}
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Conditions', path: '/conditions' },
          { label: 'Multiple Sclerosis', path: '/conditions/multiple-sclerosis' }
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Brain className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Cannabis for Multiple Sclerosis UK - MS Treatment Guide & Specialist Clinics
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive guide to medical cannabis for Multiple Sclerosis in the UK. Learn about spasticity treatment, find MS specialist clinics, and understand Sativex alternatives. 38+ MS specialists available.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.specialistClinics}</div>
                <div className="text-sm text-gray-600">MS Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.patientsHelped.toLocaleString()}+</div>
                <div className="text-sm text-gray-600">MS Patients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{clinicStats.averageImprovement}%</div>
                <div className="text-sm text-gray-600">Spasticity Improvement</div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Multiple Sclerosis</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Multiple Sclerosis (MS) is a chronic autoimmune condition affecting the central nervous system, 
                where the immune system attacks the protective covering (myelin) of nerve fibers. This damage 
                disrupts communication between the brain and the rest of the body, leading to a wide range of 
                symptoms that can significantly impact quality of life.
              </p>
              <p className="mb-4">
                Medical cannabis, particularly products containing both THC and CBD, has shown significant promise 
                in managing MS symptoms, especially spasticity. The UK was one of the first countries to license 
                a cannabis-based medicine (Sativex) specifically for MS spasticity, providing strong evidence 
                for its therapeutic benefits.
              </p>
            </div>
          </div>

          {/* MS Symptoms */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">MS Symptoms and Cannabis Treatment</h2>
            <div className="space-y-6">
              {msSymptoms.map((symptomGroup, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{symptomGroup.category}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Common Symptoms:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {symptomGroup.symptoms.map((symptom, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">How Cannabis Can Help:</h4>
                      <p className="text-sm text-gray-600">{symptomGroup.cannabisHelp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Approaches */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Cannabis Treatment Options for MS</h2>
            <div className="space-y-6">
              {treatmentApproaches.map((treatment, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{treatment.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded">
                          {treatment.type}
                        </span>
                        <span className="text-sm text-blue-600 font-medium">
                          {treatment.ratio}
                        </span>
                      </div>
                    </div>
                    {treatment.name === 'Sativex (Nabiximols)' && (
                      <div className="text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Licensed Medicine
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Benefits
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {treatment.benefits.map((benefit, i) => (
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
                        {treatment.considerations.map((consideration, i) => (
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

          {/* Research Evidence */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Evidence</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchEvidence.map((research, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <Target className="h-5 w-5 text-blue-600 mr-2" />
                    {research.study}
                  </h3>
                  <p className="text-gray-600 mb-3">{research.findings}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800 text-sm font-medium">
                      Significance: {research.significance}
                    </p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Eligibility for MS Cannabis Treatment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Confirmed MS diagnosis from neurologist</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Moderate to severe spasticity symptoms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Inadequate response to conventional anti-spasticity medications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Significant impact on daily activities and quality of life</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Willingness to comply with monitoring requirements</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Treatment Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Specialist Assessment</h4>
                      <p className="text-sm text-gray-600">Comprehensive evaluation by MS specialist or neurologist</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Treatment Selection</h4>
                      <p className="text-sm text-gray-600">Choose appropriate cannabis medicine based on symptoms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Titration Period</h4>
                      <p className="text-sm text-gray-600">Gradual dose increase to find optimal therapeutic level</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Ongoing Monitoring</h4>
                      <p className="text-sm text-gray-600">Regular reviews to assess effectiveness and adjust treatment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">Important Considerations for MS Patients</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Specialist Supervision</h4>
                    <p className="text-yellow-700 text-sm mb-4">
                      MS cannabis treatment should always be supervised by specialists familiar with both 
                      MS management and medical cannabis prescribing.
                    </p>
                    
                    <h4 className="font-medium text-yellow-800 mb-2">Interaction with MS Medications</h4>
                    <p className="text-yellow-700 text-sm">
                      Cannabis may interact with other MS medications. Always inform all healthcare 
                      providers about your complete treatment regimen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Realistic Expectations</h4>
                    <p className="text-yellow-700 text-sm mb-4">
                      While cannabis can significantly help with symptoms, it's not a cure for MS. 
                      Benefits may take several weeks to become apparent.
                    </p>
                    
                    <h4 className="font-medium text-yellow-800 mb-2">Driving and Activities</h4>
                    <p className="text-yellow-700 text-sm">
                      Cannabis treatment may affect driving ability and other activities. Discuss 
                      safety considerations with your healthcare provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Evidence Section */}
          <PositiveOutcomesSection />

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Explore MS Treatment Options?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Find MS specialists who understand medical cannabis treatment and can help you manage your symptoms effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/quiz')}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Take our three-minute quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('/clinics')}
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors"
              >
                Find MS Specialists
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleSclerosisPage;