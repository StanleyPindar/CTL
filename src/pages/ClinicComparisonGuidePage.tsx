import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart2, CheckCircle, AlertTriangle, ArrowRight, DollarSign, Clock, MapPin, Star, Users } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const ClinicComparisonGuidePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/MedicalWebPage">
      <MetaTags 
        title="UK Medical Cannabis Clinic Comparison Guide"
        description="A comprehensive guide to comparing and selecting the right medical cannabis clinic for your specific needs, preferences, and budget."
        datePublished="2024-01-20"
        dateModified="2024-02-05"
        author="Emma Thompson"
        keywords={['clinic comparison', 'medical cannabis clinics', 'choose clinic', 'UK cannabis clinics', 'clinic selection']}
        canonicalUrl="https://comparetheleaf.co.uk/education/clinic-comparison-guide"
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Education', path: '/education/hub' },
          { label: 'Clinic Comparison Guide', path: '/education/clinic-comparison-guide' }
        ]}
      />
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Education', path: '/education/hub' },
          { label: 'Clinic Comparison Guide', path: '/education/clinic-comparison-guide' }
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

      {/* Guide Header */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <BarChart2 className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4" itemProp="headline">
              UK Medical Cannabis Clinic Comparison Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto" itemProp="description">
              A comprehensive guide to comparing and selecting the right medical cannabis clinic 
              for your specific needs, preferences, and budget.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                <span>By <span itemProp="name">Emma Thompson</span>, Healthcare Consultant</span>
              </div>
              <div className="flex items-center" itemProp="dateModified">
                <span>Updated February 5, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            {{CONTENT_PLACEHOLDER}}
          </div>
        </div>

        {/* Key Comparison Factors */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Factors to Compare</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Specialization & Expertise</h3>
              </div>
              
              <p className="text-gray-700 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">What to Compare:</h4>
                <ul className="space-y-2">
                  {{CONTENT_PLACEHOLDER}}
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 text-green-600 mr-4">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pricing Structure</h3>
              </div>
              
              <p className="text-gray-700 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">What to Compare:</h4>
                <ul className="space-y-2">
                  {{CONTENT_PLACEHOLDER}}
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 text-purple-600 mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Appointment Availability</h3>
              </div>
              
              <p className="text-gray-700 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">What to Compare:</h4>
                <ul className="space-y-2">
                  {{CONTENT_PLACEHOLDER}}
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 mr-4">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Patient Reviews & Ratings</h3>
              </div>
              
              <p className="text-gray-700 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">What to Compare:</h4>
                <ul className="space-y-2">
                  {{CONTENT_PLACEHOLDER}}
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 text-red-600 mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Location & Accessibility</h3>
              </div>
              
              <p className="text-gray-700 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">What to Compare:</h4>
                <ul className="space-y-2">
                  {{CONTENT_PLACEHOLDER}}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Clinics */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Medical Cannabis Clinics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialized Condition Clinics</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-3">
                <h4 className="font-medium text-blue-800 mb-1">Best For:</h4>
                <p className="text-blue-700 text-sm">{{CONTENT_PLACEHOLDER}}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-1">Examples:</h4>
                <p className="text-gray-600 text-sm">{{CONTENT_PLACEHOLDER}}</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">General Medical Cannabis Clinics</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-3">
                <h4 className="font-medium text-blue-800 mb-1">Best For:</h4>
                <p className="text-blue-700 text-sm">{{CONTENT_PLACEHOLDER}}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-1">Examples:</h4>
                <p className="text-gray-600 text-sm">{{CONTENT_PLACEHOLDER}}</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrated Care Clinics</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-3">
                <h4 className="font-medium text-blue-800 mb-1">Best For:</h4>
                <p className="text-blue-700 text-sm">{{CONTENT_PLACEHOLDER}}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-1">Examples:</h4>
                <p className="text-gray-600 text-sm">{{CONTENT_PLACEHOLDER}}</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Membership-Based Clinics</h3>
              <p className="text-gray-600 mb-4">{{CONTENT_PLACEHOLDER}}</p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-3">
                <h4 className="font-medium text-blue-800 mb-1">Best For:</h4>
                <p className="text-blue-700 text-sm">{{CONTENT_PLACEHOLDER}}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-1">Examples:</h4>
                <p className="text-gray-600 text-sm">{{CONTENT_PLACEHOLDER}}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                  <h3 className="font-semibold text-red-800">Choosing Based on Price Alone</h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <h4 className="text-sm font-medium text-gray-700">Potential Consequence:</h4>
                  <p className="text-gray-600">{{CONTENT_PLACEHOLDER}}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Better Approach:</h4>
                  <p className="text-green-600">{{CONTENT_PLACEHOLDER}}</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                  <h3 className="font-semibold text-red-800">Ignoring Specialist Expertise</h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <h4 className="text-sm font-medium text-gray-700">Potential Consequence:</h4>
                  <p className="text-gray-600">{{CONTENT_PLACEHOLDER}}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Better Approach:</h4>
                  <p className="text-green-600">{{CONTENT_PLACEHOLDER}}</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                  <h3 className="font-semibold text-red-800">Not Checking Medication Availability</h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <h4 className="text-sm font-medium text-gray-700">Potential Consequence:</h4>
                  <p className="text-gray-600">{{CONTENT_PLACEHOLDER}}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Better Approach:</h4>
                  <p className="text-green-600">{{CONTENT_PLACEHOLDER}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Checklist */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinic Comparison Checklist</h2>
          <p className="text-gray-700 mb-6">
            Use this checklist when comparing different clinics to ensure you're considering all important factors:
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Specialist expertise in your condition</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Consultation fees and follow-up costs</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Medication pricing and availability</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Waiting times for appointments</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Patient reviews and satisfaction rates</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Telemedicine vs. in-person options</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Prescription delivery options</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Support services and educational resources</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Compare UK Medical Cannabis Clinics
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Use our comparison tool to find the perfect clinic for your specific needs.
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

export default ClinicComparisonGuidePage;