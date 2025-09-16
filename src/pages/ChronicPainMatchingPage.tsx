import React from 'react';
import { Activity, Target, Zap, Moon, Shield, ArrowRight } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const ChronicPainMatchingPage: React.FC = () => {
  const strainTypes = [
    {
      type: 'CBD-Dominant',
      icon: Shield,
      color: 'bg-green-100 text-green-600',
      ratio: 'High CBD, Low THC (20:1 to 10:1)',
      bestFor: ['Inflammation', 'Daytime pain relief', 'Muscle spasms', 'Anxiety-related pain'],
      effects: ['Anti-inflammatory', 'Pain relief', 'Minimal psychoactive effects', 'Clear-headed'],
      timing: 'Ideal for daytime use'
    },
    {
      type: 'Balanced',
      icon: Target,
      color: 'bg-blue-100 text-blue-600',
      ratio: 'Equal CBD:THC (1:1 to 2:1)',
      bestFor: ['Moderate to severe pain', 'Nerve pain', 'Arthritis', 'Fibromyalgia'],
      effects: ['Balanced pain relief', 'Mood enhancement', 'Mild euphoria', 'Relaxation'],
      timing: 'Suitable for evening or when not driving'
    },
    {
      type: 'THC-Dominant',
      icon: Zap,
      color: 'bg-purple-100 text-purple-600',
      ratio: 'High THC, Low CBD (10:1 to 20:1)',
      bestFor: ['Severe chronic pain', 'Cancer pain', 'End-of-life care', 'Breakthrough pain'],
      effects: ['Strong pain relief', 'Euphoria', 'Sedation', 'Appetite stimulation'],
      timing: 'Best for evening use or when not active'
    },
    {
      type: 'Sleep-Focused',
      icon: Moon,
      color: 'bg-indigo-100 text-indigo-600',
      ratio: 'High THC with sedating terpenes',
      bestFor: ['Pain-related insomnia', 'Restless leg syndrome', 'Night-time pain', 'Sleep disorders'],
      effects: ['Deep relaxation', 'Sedation', 'Pain relief', 'Sleep induction'],
      timing: 'Exclusively for bedtime use'
    }
  ];

  const painTypes = [
    {
      type: 'Neuropathic Pain',
      description: 'Nerve damage causing burning, shooting, or tingling sensations',
      recommendations: ['Balanced CBD:THC ratios', 'Products with specific terpenes like myrcene', 'Gradual dose titration'],
      examples: ['Diabetic neuropathy', 'Post-surgical nerve pain', 'Sciatica']
    },
    {
      type: 'Inflammatory Pain',
      description: 'Pain caused by inflammation in joints, muscles, or tissues',
      recommendations: ['CBD-dominant products', 'Topical applications', 'Anti-inflammatory terpenes'],
      examples: ['Rheumatoid arthritis', 'Inflammatory bowel disease', 'Sports injuries']
    },
    {
      type: 'Musculoskeletal Pain',
      description: 'Pain affecting muscles, bones, ligaments, and tendons',
      recommendations: ['Balanced formulations', 'Both oral and topical options', 'Muscle-relaxing terpenes'],
      examples: ['Fibromyalgia', 'Back pain', 'Osteoarthritis']
    },
    {
      type: 'Cancer-Related Pain',
      description: 'Pain from cancer itself or treatment side effects',
      recommendations: ['Higher THC ratios for severe pain', 'Anti-nausea properties', 'Appetite stimulation'],
      examples: ['Tumor pain', 'Chemotherapy side effects', 'Radiation pain']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Cannabis Strain Matching for Chronic Pain - Treatment Guide"
        description="Learn how to match cannabis strains to specific types of chronic pain for optimal therapeutic outcomes. Expert guidance on strain selection and pain management."
        canonicalUrl="https://comparetheleaf.co.uk/conditions/chronic-pain-matching"
        keywords={['cannabis strain matching', 'chronic pain strains', 'pain management cannabis', 'strain selection guide']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Activity className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Matching Cannabis Strains to Chronic Pain
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understanding how different cannabis formulations can be matched to specific types of chronic pain 
              for optimal therapeutic outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Strain Types */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cannabis Formulation Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different cannabinoid ratios and terpene profiles offer varying benefits for chronic pain management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strainTypes.map((strain, index) => {
              const IconComponent = strain.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${strain.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{strain.type}</h3>
                      <p className="text-sm text-gray-600">{strain.ratio}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Best for:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {strain.bestFor.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Effects:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {strain.effects.map((effect, i) => (
                          <li key={i}>• {effect}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-sm font-medium text-gray-700">{strain.timing}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pain Types */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Matching by Pain Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different types of chronic pain may respond better to specific cannabis formulations.
            </p>
          </div>

          <div className="space-y-8">
            {painTypes.map((pain, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{pain.type}</h3>
                    <p className="text-gray-600 mb-4">{pain.description}</p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {pain.examples.map((example, i) => (
                          <li key={i}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">Recommended Approaches:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pain.recommendations.map((rec, i) => (
                        <div key={i} className="bg-white rounded-md p-4 border border-gray-200">
                          <p className="text-sm text-gray-700">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Important Considerations */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">Important Considerations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-yellow-800 mb-2">Individual Response</h4>
                <p className="text-yellow-700 text-sm">
                  Everyone responds differently to cannabis. What works for one person may not work for another, 
                  even with the same condition.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-800 mb-2">Start Low, Go Slow</h4>
                <p className="text-yellow-700 text-sm">
                  Begin with the lowest possible dose and gradually increase under medical supervision 
                  to find your optimal therapeutic dose.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-800 mb-2">Medical Supervision</h4>
                <p className="text-yellow-700 text-sm">
                  Always work with a qualified medical professional who can monitor your progress 
                  and adjust your treatment plan as needed.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-800 mb-2">Drug Interactions</h4>
                <p className="text-yellow-700 text-sm">
                  Cannabis can interact with other medications. Inform your doctor about all 
                  medications and supplements you're taking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Your Options?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Find clinics that specialize in chronic pain management and can help you determine 
            the best cannabis formulation for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quiz"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Take our three-minute quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/clinics"
              className="inline-flex items-center bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Browse Clinics
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChronicPainMatchingPage;