import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, CheckSquare, Star, FileText, ArrowRight } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const ToolsPage: React.FC = () => {
  const navigate = useNavigate();

  const tools = [
    {
      id: 'budget-calculator',
      title: 'Medical Cannabis Budget Calculator',
      description: 'Estimate your monthly and yearly costs for medical cannabis treatment based on your usage, product preferences, and additional fees.',
      icon: Calculator,
      color: 'bg-green-100 text-green-600',
      path: '/budget-tool',
      features: [
        'Customize by product type (flower, oil, edibles)',
        'Adjust monthly usage and THC percentage',
        'Include prescription and delivery fees',
        'Compare yearly and monthly costs'
      ]
    },
    {
      id: 'qualification-checker',
      title: 'Qualification Checker',
      description: 'Answer a few questions to see if you might qualify for medical cannabis treatment under current UK guidelines.',
      icon: CheckSquare,
      color: 'bg-blue-100 text-blue-600',
      path: '/qualify',
      features: [
        'Based on current UK eligibility criteria',
        'Covers medical conditions and treatment history',
        'Instant preliminary assessment',
        'Guidance on next steps'
      ]
    },
    {
      id: 'clinic-reviews',
      title: 'Clinic Reviews',
      description: 'Read authentic reviews from verified patients about their experiences with UK medical cannabis clinics.',
      icon: Star,
      color: 'bg-yellow-100 text-yellow-600',
      path: '/reviews',
      features: [
        'Verified patient reviews',
        'Ratings for all major UK clinics',
        'Filter by condition and treatment type',
        'Detailed clinic experiences'
      ]
    },
    {
      id: 'clinic-finder',
      title: 'Clinic Matching Quiz',
      description: 'Take our comprehensive quiz to find the perfect clinic for your specific condition, preferences, and budget.',
      icon: FileText,
      color: 'bg-purple-100 text-purple-600',
      path: '/quiz',
      features: [
        'Personalized clinic recommendations',
        'Matches based on your condition',
        'Considers budget and preferences',
        'Takes just 3 minutes to complete'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Medical Cannabis Tools UK - Budget Calculator & Eligibility Checker"
        description="Free medical cannabis tools including budget calculator, eligibility checker, clinic reviews, and matching quiz. Essential tools for your UK treatment journey."
        canonicalUrl="https://comparetheleaf.co.uk/tools"
        keywords={['medical cannabis tools UK', 'budget calculator', 'eligibility checker', 'clinic tools', 'cannabis calculator']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Cannabis Tools & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helpful tools to guide your medical cannabis journey, from checking eligibility to 
              calculating costs and finding the right clinic for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div 
                  key={tool.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${tool.color} mr-4`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{tool.title}</h2>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {tool.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Features</h3>
                      <ul className="space-y-2">
                        {tool.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => navigate(tool.path)}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-md hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-medium flex items-center justify-center"
                    >
                      Use This Tool
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our educational content to learn more about medical cannabis treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Articles</h3>
              <p className="text-gray-600 mb-6">
                In-depth guides and articles about medical cannabis treatment, conditions, and research.
              </p>
              <button
                onClick={() => navigate('/education')}
                className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Explore Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Condition Guides</h3>
              <p className="text-gray-600 mb-6">
                Detailed information about specific conditions and how medical cannabis may help.
              </p>
              <button
                onClick={() => navigate('/conditions')}
                className="inline-flex items-center px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors"
              >
                View Conditions
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Information</h3>
              <p className="text-gray-600 mb-6">
                Important information about the legal framework for medical cannabis in the UK.
              </p>
              <button
                onClick={() => navigate('/legalities')}
                className="inline-flex items-center px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
              >
                Learn About Legalities
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Clinic?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take our clinic matching quiz to find the best medical cannabis clinic for your specific needs.
          </p>
          <button
            onClick={() => navigate('/quiz')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Take the Quiz Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;