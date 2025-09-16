import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, AlertTriangle, ArrowRight, FileText } from 'lucide-react';
import MedicalDisclaimer from '../../components/MedicalDisclaimer';
import MetaTags from '../../components/MetaTags';

const CancerArticle: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/MedicalWebPage">
      <MetaTags 
        title="Medical Cannabis for Cancer Support - Treatment Guide"
        description="Understanding how medical cannabis can help manage cancer symptoms and treatment side effects, improving quality of life for cancer patients."
        datePublished="2024-01-28"
        dateModified="2024-02-22"
        author="Dr. Amanda Lewis"
        keywords={['cancer', 'cancer support', 'medical cannabis', 'chemotherapy', 'nausea', 'cancer pain']}
        canonicalUrl="https://comparetheleaf.co.uk/conditions/cancer-article"
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Conditions', path: '/conditions' },
          { label: 'Cancer Support', path: '/conditions/cancer-article' }
        ]}
      />
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Conditions', path: '/conditions' },
          { label: 'Cancer Support', path: '/conditions/cancer-article' }
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

      {/* Article Header */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-pink-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4" itemProp="headline">
              Medical Cannabis for Cancer Support
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto" itemProp="description">
              Understanding how medical cannabis can help manage cancer symptoms and treatment side effects, 
              improving quality of life for cancer patients.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500" itemProp="author" itemScope itemType="https://schema.org/Person">
              <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                <span>By <span itemProp="name">Dr. Amanda Lewis</span>, Oncologist</span>
              </div>
              <div className="flex items-center" itemProp="dateModified">
                <span>Updated February 22, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction to Cancer Supportive Care</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {{CONTENT_PLACEHOLDER}}
            </div>
          </div>

          {/* Cancer Symptoms */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cancer Symptoms and Cannabis Support</h2>
            <div className="space-y-6">
              {{CONTENT_PLACEHOLDER}}
            </div>
          </div>

          {/* How Cannabis Works for Cancer Symptoms */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Cannabis Works for Cancer Symptoms</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {{CONTENT_PLACEHOLDER}}
            </div>
          </div>

          {/* Research Evidence */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Evidence</h2>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Clinical Findings</h3>
              <div className="space-y-4">
                {{CITATIONS_PLACEHOLDER}}
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              {{CONTENT_PLACEHOLDER}}
            </div>
          </div>

          {/* Treatment Approaches */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatment Approaches</h2>
            <div className="space-y-6">
              {{CONTENT_PLACEHOLDER}}
            </div>
          </div>

          {/* Patient Considerations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Considerations for Cancer Patients</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {{CONTENT_PLACEHOLDER}}
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Important: Oncologist Involvement</h4>
                  <p className="text-yellow-700">
                    {{CONTENT_PLACEHOLDER}}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <MedicalDisclaimer />

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Find Cancer Support Specialists
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Compare clinics that specialize in supporting cancer patients with medical cannabis and find the right 
              treatment approach for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/quiz')}
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Take our three-minute quiz
                <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </button>
              <button
                onClick={() => navigate('/clinics')}
                className="bg-pink-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-800 transition-colors"
              >
                Compare Cancer Support Clinics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancerArticle;