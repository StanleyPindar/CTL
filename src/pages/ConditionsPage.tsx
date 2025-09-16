import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Shield, Zap, Moon, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const ConditionsPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [conditionData, setConditionData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [evidenceFilter, setEvidenceFilter] = useState('all');

  // Static metadata for conditions
  const conditionMetadata: Record<string, { icon: any; color: string; description: string; hasDetailedPage: boolean; evidenceLevel: string; mapTo?: string }> = {
    'chronic pain': {
      icon: Activity,
      color: 'bg-red-100 text-red-600',
      description: 'Long-term pain conditions including arthritis, fibromyalgia, and neuropathic pain.',
      hasDetailedPage: true,
      evidenceLevel: 'strong'
    },
    'epilepsy': {
      icon: Zap,
      color: 'bg-yellow-100 text-yellow-600',
      description: 'Seizure disorders and treatment-resistant epilepsy in children and adults.',
      hasDetailedPage: true,
      evidenceLevel: 'strong'
    },
    'multiple sclerosis': {
      icon: Brain,
      color: 'bg-purple-100 text-purple-600',
      description: 'MS-related spasticity, pain, and mobility issues.',
      hasDetailedPage: true,
      evidenceLevel: 'strong'
    },
    'cancer': {
      icon: Shield, // Map to cancer support
      color: 'bg-pink-100 text-pink-600',
      description: 'Managing chemotherapy side effects, nausea, and cancer-related pain.',
      hasDetailedPage: true,
      evidenceLevel: 'moderate'
    },
    'anxiety': {
      icon: Heart,
      color: 'bg-blue-100 text-blue-600', // Map to anxiety & ptsd
      description: 'PTSD, anxiety, depression, and other mental health conditions.',
      hasDetailedPage: true,
      evidenceLevel: 'moderate'
    },
    'insomnia': {
      icon: Moon,
      color: 'bg-indigo-100 text-indigo-600', // Map to sleep disorders
      description: 'Insomnia, sleep apnea, and other sleep-related conditions.',
      hasDetailedPage: true,
      evidenceLevel: 'moderate'
    },
    'fibromyalgia': {
      icon: Activity,
      color: 'bg-red-100 text-red-600', // Map to chronic pain
      description: 'Widespread pain, fatigue, and cognitive difficulties.',
      hasDetailedPage: false,
      evidenceLevel: 'moderate',
      mapTo: 'chronic pain'
    },
    'arthritis': {
      icon: Activity,
      color: 'bg-red-100 text-red-600', // Map to chronic pain
      description: 'Joint inflammation, pain, and stiffness.',
      hasDetailedPage: false,
      evidenceLevel: 'moderate',
      mapTo: 'chronic pain'
    },
    'anxiety & ptsd': {
      icon: Heart,
      color: 'bg-blue-100 text-blue-600',
      description: 'PTSD, generalized anxiety, social anxiety, and other mental health conditions.',
      hasDetailedPage: true,
      evidenceLevel: 'moderate'
    },
    'cancer support': {
      icon: Shield,
      color: 'bg-pink-100 text-pink-600',
      description: 'Managing chemotherapy side effects, nausea, and cancer-related pain.',
      hasDetailedPage: true,
      evidenceLevel: 'moderate'
    },
    'sleep disorders': {
      icon: Moon,
      color: 'bg-indigo-100 text-indigo-600',
      description: 'Insomnia, sleep apnea, and other sleep-related conditions.',
      hasDetailedPage: true,
      evidenceLevel: 'moderate'
    }
  };

  // Fallback static conditions data
  const staticConditions = [
    {
      id: 1,
      slug: 'chronic-pain', // Keep as is
      name: 'Chronic Pain',
      description: 'Long-term pain conditions including arthritis, fibromyalgia, and neuropathic pain.',
      icon: Activity,
      color: 'bg-red-100 text-red-600',
      clinicCount: 45,
      patientCount: 1200,
      evidenceLevel: 'strong'
    },
    {
      id: 2,
      slug: 'epilepsy', // Keep as is
      name: 'Epilepsy',
      description: 'Seizure disorders and treatment-resistant epilepsy in children and adults.',
      icon: Zap,
      color: 'bg-yellow-100 text-yellow-600',
      clinicCount: 32,
      patientCount: 800,
      evidenceLevel: 'strong'
    },
    {
      id: 3,
      slug: 'multiple-sclerosis', // Keep as is
      name: 'Multiple Sclerosis',
      description: 'MS-related spasticity, pain, and mobility issues.',
      icon: Brain,
      color: 'bg-purple-100 text-purple-600',
      clinicCount: 38,
      patientCount: 650,
      evidenceLevel: 'strong'
    },
    {
      id: 4,
      slug: 'cancer-support', // Consolidated
      name: 'Cancer Support',
      description: 'Managing chemotherapy side effects, nausea, and cancer-related pain.',
      icon: Shield,
      color: 'bg-pink-100 text-pink-600',
      clinicCount: 42,
      patientCount: 900,
      evidenceLevel: 'moderate'
    },
    {
      id: 5,
      slug: 'anxiety-ptsd', // Consolidated
      name: 'Anxiety & PTSD',
      description: 'PTSD, anxiety, depression, and other mental health conditions.',
      icon: Heart,
      color: 'bg-blue-100 text-blue-600',
      clinicCount: 35,
      patientCount: 750,
      evidenceLevel: 'moderate'
    },
    {
      id: 6,
      slug: 'sleep-disorders', // Consolidated
      name: 'Sleep Disorders',
      description: 'Insomnia, sleep apnea, and other sleep-related conditions.',
      icon: Moon,
      color: 'bg-indigo-100 text-indigo-600',
      clinicCount: 28,
      patientCount: 450,
      evidenceLevel: 'moderate'
    }
  ];

  useEffect(() => {
    const fetchConditionData = async () => {
      try {
        setLoading(true);
        
        // Fetch condition data from Supabase (assuming clinic_condition_match_count view exists)
        const { data, error } = await supabase
          .from('clinic_condition_match_count')
          .select('*');
        
        if (error) throw error;
        
        // Process and enhance the data with metadata, consolidating duplicates
        const consolidatedDataMap = new Map<string, any>();

        data.forEach((item) => {
          const conditionKey = item.condition.toLowerCase();
          let metadata = conditionMetadata[conditionKey];

          // If the condition has a 'mapTo' property, use the metadata of the mapped condition
          if (metadata && metadata.mapTo) {
            metadata = conditionMetadata[metadata.mapTo];
          }

          // Fallback for conditions not explicitly mapped or found
          if (!metadata) {
            metadata = {
              name: item.condition, // Use original name if no specific metadata
              slug: conditionKey.replace(/\s+/g, '-'),
              icon: Activity, // Default icon
              color: 'bg-gray-100 text-gray-600', // Default color
              description: 'Medical condition that may be treated with cannabis.',
              hasDetailedPage: false,
              evidenceLevel: 'limited'
            };
          }

          const slug = metadata.slug || conditionKey.replace(/\s+/g, '-');
          const currentEntry = consolidatedDataMap.get(slug) || {
            id: item.id || Math.random().toString(36).substr(2, 9), // Keep original ID or generate new
            slug: slug,
            name: item.condition,
            description: metadata.description,
            icon: metadata.icon,
            color: metadata.color,
            clinicCount: item.clinic_count || 0,
            patientCount: item.patient_count || 0,
            strainCount: item.matching_strain_count || 0,
            hasDetailedPage: metadata.hasDetailedPage,
            evidenceLevel: metadata.evidenceLevel,
          };

          // Merge counts if the same consolidated condition appears multiple times
          currentEntry.clinicCount += item.clinic_count || 0;
          currentEntry.patientCount += item.patient_count || 0;
          currentEntry.strainCount += item.matching_strain_count || 0;
          
          consolidatedDataMap.set(slug, {
            ...currentEntry,
          });
        });
        
        const enhancedData = Array.from(consolidatedDataMap.values());
        setConditionData(enhancedData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching condition data:', err);
        setError('Failed to load conditions data');
        // Fall back to static data
        setConditionData(staticConditions); // Fallback uses the consolidated static data
        setLoading(false);
      }
    };

    fetchConditionData();
  }, []);

  // Filter conditions based on search and evidence level
  const filteredConditions = conditionData.filter(condition => {
    const matchesSearch = condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         condition.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEvidence = evidenceFilter === 'all' || condition.evidenceLevel === evidenceFilter;
    return matchesSearch && matchesEvidence;
  });

  const handleConditionClick = (slug: string) => {
    navigate(`/conditions/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Medical Cannabis Conditions UK - Treatable Conditions & 20+ Specialist Clinics"
        description="Medical conditions treatable with cannabis UK. Chronic pain, anxiety, epilepsy, MS, cancer support & sleep disorders. 20+ specialist clinics, GMC doctors, MHRA regulated."
        keywords={[
          'medical cannabis conditions UK',
          'medical cannabis for chronic pain UK',
          'anxiety medical cannabis UK',
          'epilepsy cannabis prescription UK',
          'medical cannabis for MS UK',
          'cancer medical cannabis UK',
          'insomnia medical cannabis UK',
          'medical cannabis treatable conditions',
          'UK medical cannabis specialists',
          'medical cannabis condition guide',
          'compare medical cannabis clinics UK',
          'medical cannabis clinic UK',
          'get medical cannabis prescription UK'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/conditions"
        medicalEntityData={{
          type: 'MedicalCondition',
          name: 'Medical Cannabis Treatable Conditions',
          description: 'Various medical conditions that can be treated with medical cannabis in the UK',
          possibleTreatment: [
            'Medical Cannabis Treatment',
            'CBD Products',
            'THC Products',
            'Balanced Cannabis Formulations',
            'Cannabis-Based Medicines'
          ],
          relevantSpecialty: [
            'Pain Medicine',
            'Neurology',
            'Psychiatry',
            'Oncology',
            'Palliative Care',
            'Epileptology'
          ],
          typicalTest: [
            'Medical history review',
            'Physical examination',
            'Specialist assessment',
            'Treatment response evaluation'
          ],
          guideline: [
            {
              name: 'NICE Guidelines on Cannabis-based medicinal products',
              url: 'https://www.nice.org.uk/guidance/ng144',
              organization: 'National Institute for Health and Care Excellence'
            },
            {
              name: 'MHRA Guidance on Cannabis-based products for medicinal use',
              url: 'https://www.gov.uk/government/publications/cannabis-scheduling-review-part-1/cannabis-based-products-for-medicinal-use-cbpms-guidance-for-healthcare-professionals',
              organization: 'Medicines and Healthcare products Regulatory Agency'
            }
          ]
        }}
      />
      
      {/* Header */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Conditions', path: '/conditions' }
        ]}
      />
      
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Cannabis Conditions UK - Treatable Conditions & Specialist Clinics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about medical conditions treatable with cannabis in the UK. Find specialist clinics 
              for chronic pain, anxiety, epilepsy, MS, cancer support, and sleep disorders.
            </p>
          </div>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <select
              value={evidenceFilter}
              onChange={(e) => setEvidenceFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Evidence Levels</option>
              <option value="strong">Strong Evidence</option>
              <option value="moderate">Moderate Evidence</option>
              <option value="limited">Limited Evidence</option>
            </select>
          </div>
        </div>
      </div>

      {/* Conditions Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-red-600">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            ) : (
              <>
                {filteredConditions.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg mb-2">No conditions match your search criteria</p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setEvidenceFilter('all');
                      }}
                      className="mt-4 text-blue-600 hover:text-blue-800"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredConditions.map((condition) => {
                      const IconComponent = condition.icon;
                      return (
                        <div 
                          key={condition.id}
                          onClick={() => handleConditionClick(condition.slug)}
                          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-200"
                        >
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${condition.color} mr-4`}>
                                  <IconComponent className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">{condition.name}</h3>
                              </div>
                              <div className={`px-2 py-1 text-xs font-medium rounded-full ${
                                condition.evidenceLevel === 'strong' ? 'bg-green-100 text-green-800' :
                                condition.evidenceLevel === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {condition.evidenceLevel.charAt(0).toUpperCase() + condition.evidenceLevel.slice(1)} Evidence
                              </div>
                            </div>

                            <p className="text-gray-600 mb-6 line-clamp-3">
                              {condition.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">
                                  {condition.clinicCount}
                                </div>
                                <div className="text-sm text-gray-600">Specialist Clinics</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">
                                  {condition.strainCount || 0}
                                </div>
                                <div className="text-sm text-gray-600">Matching Strains</div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                              <span className="text-sm text-gray-500">
                                {condition.hasDetailedPage ? 'View detailed guide' : 'Find matching clinics'}
                              </span>
                              <ArrowRight className="h-4 w-4 text-blue-600" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Understanding Medical Cannabis Treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Medical cannabis can be an effective treatment option for various conditions when traditional treatments haven't provided adequate relief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Evidence-Based
              </h3>
              <p className="text-gray-600">
                All treatments are based on clinical evidence and prescribed by qualified medical professionals.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Patient-Centered
              </h3>
              <p className="text-gray-600">
                Treatment plans are tailored to individual patient needs and medical history.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                Continuous monitoring and support throughout your treatment journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Your Treatment Options?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take our quick assessment to find clinics that specialize in treating your condition.
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

export default ConditionsPage;