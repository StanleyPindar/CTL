import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Activity, Users, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const ConditionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Mock data - in a real app, this would be fetched based on the slug
  const condition = {
    name: 'Chronic Pain',
    description: 'Chronic pain is pain that persists for more than 3-6 months, often beyond the normal healing time. It can significantly impact quality of life and daily functioning.',
    overview: `
      Chronic pain affects millions of people worldwide and can result from various underlying conditions including arthritis, fibromyalgia, neuropathic pain, and musculoskeletal disorders. Traditional pain management approaches may include medications, physical therapy, and surgical interventions, but these don't always provide adequate relief for all patients.

      Medical cannabis has shown promise in managing chronic pain through its interaction with the body's endocannabinoid system, which plays a role in pain perception, inflammation, and mood regulation.
    `,
    symptoms: [
      'Persistent pain lasting more than 3 months',
      'Reduced mobility and function',
      'Sleep disturbances',
      'Fatigue and low energy',
      'Mood changes including depression and anxiety',
      'Difficulty concentrating'
    ],
    howCannabisCan: [
      'Reduce pain intensity and frequency',
      'Improve sleep quality',
      'Reduce inflammation',
      'Enhance mood and reduce anxiety',
      'Improve overall quality of life',
      'Potentially reduce dependence on opioid medications'
    ],
    treatmentOptions: [
      {
        type: 'CBD-dominant products',
        description: 'High CBD, low THC formulations for anti-inflammatory and pain-relieving effects with minimal psychoactive effects.'
      },
      {
        type: 'Balanced THC:CBD ratios',
        description: 'Equal or varying ratios of THC and CBD for enhanced pain relief and improved sleep.'
      },
      {
        type: 'Topical applications',
        description: 'Localized treatment for specific areas of pain without systemic effects.'
      }
    ],
    eligibility: [
      'Diagnosis of chronic pain condition',
      'Inadequate response to conventional treatments',
      'Significant impact on quality of life',
      'No contraindications to cannabis use',
      'Willingness to comply with treatment monitoring'
    ],
    clinicCount: 45,
    patientCount: 1200
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title={`Medical Cannabis for ${condition.name} - Treatment Guide & Specialist Clinics`}
        description={`Learn about medical cannabis treatment for ${condition.name.toLowerCase()}. Find specialist clinics, understand treatment options, and read patient experiences.`}
        canonicalUrl={`https://comparetheleaf.co.uk/conditions/${slug}`}
        keywords={[`medical cannabis for ${condition.name.toLowerCase()}`, 'treatment guide', 'specialist clinics', 'UK medical cannabis']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/conditions')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Conditions
          </button>
        </div>
      </div>

      {/* Condition Header */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Activity className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {condition.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {condition.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {condition.clinicCount}
                </div>
                <div className="text-sm text-gray-600">Specialist Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {condition.patientCount}+
                </div>
                <div className="text-sm text-gray-600">Patients Treated</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {condition.overview.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph.trim()}</p>
              ))}
            </div>
          </div>

          {/* Symptoms */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Symptoms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {condition.symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How Cannabis Can Help */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Medical Cannabis Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {condition.howCannabisCan.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Options */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Options</h2>
            <div className="space-y-6">
              {condition.treatmentOptions.map((option, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {option.type}
                  </h3>
                  <p className="text-gray-700">{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <div className="space-y-3">
              {condition.eligibility.map((criteria, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{criteria}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Treatment Options?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Find specialist clinics that treat {condition.name.toLowerCase()} and start your journey to better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/quiz')}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Take our three-minute quiz
              </button>
              <button 
                onClick={() => navigate('/clinics')}
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Find Clinics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionDetailPage;