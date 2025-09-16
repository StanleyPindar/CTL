import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, BarChart2, PieChart, DollarSign, Users, Calendar, ArrowRight } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const MarketInsightsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/Article">
      <MetaTags 
        title="UK Medical Cannabis Market Insights and Trends"
        description="Current trends, statistics, and future outlook for the UK medical cannabis industry. Explore market size, patient demographics, and regulatory developments."
        datePublished="2024-01-30"
        dateModified="2024-02-20"
        author="James Wilson"
        type="Article"
        keywords={['UK cannabis market', 'medical cannabis statistics', 'cannabis industry trends', 'market analysis', 'patient demographics']}
        canonicalUrl="https://comparetheleaf.co.uk/education/market-insights"
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Education', path: '/education/hub' },
          { label: 'Market Insights', path: '/education/market-insights' }
        ]}
      />
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Education', path: '/education/hub' },
          { label: 'Market Insights', path: '/education/market-insights' }
        ]}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/education/hub')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Education Hub
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4" itemProp="headline">
              UK Medical Cannabis Market Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto" itemProp="description">
              Current trends, statistics, and future outlook for the UK medical cannabis industry.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                <span>By <span itemProp="name">James Wilson</span>, Market Analyst</span>
              </div>
              <div className="flex items-center" itemProp="dateModified">
                <span>Updated February 20, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Statistics */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Market Statistics</h2>
          <p className="text-gray-700 mb-6">
            {{CONTENT_PLACEHOLDER}}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                <DollarSign className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                £205 million
              </div>
              <div className="text-sm text-gray-600 mb-2">
                UK Market Size
              </div>
              <div className="text-xs font-medium text-green-600">
                +24% year-over-year
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                36,000+
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Active Patients
              </div>
              <div className="text-xs font-medium text-green-600">
                +42% year-over-year
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                20+
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Licensed Clinics
              </div>
              <div className="text-xs font-medium text-green-600">
                +25% year-over-year
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4">
                <DollarSign className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                £1,200
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Average Annual Cost
              </div>
              <div className="text-xs font-medium text-green-600">
                -8% year-over-year
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-sm text-gray-500 text-right">
            Data as of {{PUBLICATION_DATE}} | Sources: Industry reports, clinic data
          </div>
        </div>

        {/* Market Trends */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Market Trends</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Increasing Product Diversity</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex items-start">
                  <BarChart2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-700 text-sm">
                    <span className="font-medium">Impact:</span> {{CONTENT_PLACEHOLDER}}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Price Stabilization</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="flex items-start">
                  <BarChart2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-green-700 text-sm">
                    <span className="font-medium">Impact:</span> {{CONTENT_PLACEHOLDER}}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telemedicine Dominance</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="flex items-start">
                  <BarChart2 className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-purple-700 text-sm">
                    <span className="font-medium">Impact:</span> {{CONTENT_PLACEHOLDER}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Developments */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Developments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Twenty21 Data Collection</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Status: Ongoing
                </span>
                <span className="text-sm text-gray-500">
                  {{CONTENT_PLACEHOLDER}}
                </span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">NICE Guideline Reviews</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Status: In Progress
                </span>
                <span className="text-sm text-gray-500">
                  {{CONTENT_PLACEHOLDER}}
                </span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pharmacy Dispensing Changes</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Status: Implemented 2023
                </span>
                <span className="text-sm text-gray-500">
                  {{CONTENT_PLACEHOLDER}}
                </span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Driving Regulations Clarification</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  Status: Under Review
                </span>
                <span className="text-sm text-gray-500">
                  {{CONTENT_PLACEHOLDER}}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Demographics */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Demographics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <PieChart className="h-5 w-5 text-blue-600 mr-2" />
                Primary Conditions Treated
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">Chronic Pain (65%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-green-600 h-4 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">Anxiety (12%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-purple-600 h-4 rounded-full" style={{ width: '8%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">MS (8%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-yellow-600 h-4 rounded-full" style={{ width: '6%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">PTSD (6%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-red-600 h-4 rounded-full" style={{ width: '4%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">Epilepsy (4%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-gray-600 h-4 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">Other (5%)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                Patient Age Distribution
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">18-24 (5%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">25-34 (18%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">35-44 (32%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">45-54 (28%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">55-64 (12%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 w-24">65+ (5%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Outlook */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Future Outlook</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">NHS Integration</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Moderate Certainty
                </span>
              </div>
              <p className="text-gray-700 mb-3">{{CONTENT_PLACEHOLDER}}</p>
              <div className="text-sm text-gray-500">Expected timeline: 2-5 years</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Product Innovation</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  High Certainty
                </span>
              </div>
              <p className="text-gray-700 mb-3">{{CONTENT_PLACEHOLDER}}</p>
              <div className="text-sm text-gray-500">Expected timeline: 1-3 years</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Price Trends</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  High Certainty
                </span>
              </div>
              <p className="text-gray-700 mb-3">{{CONTENT_PLACEHOLDER}}</p>
              <div className="text-sm text-gray-500">Expected timeline: 1-2 years</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Ahead of Market Developments
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Find the best clinics offering innovative treatments and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/quiz')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Take our three-minute quiz
              <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </button>
            <button
              onClick={() => navigate('/clinics')}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Compare All Clinics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsightsPage;