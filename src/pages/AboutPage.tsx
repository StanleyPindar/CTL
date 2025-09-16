import React from 'react';
import { Shield, Users, Award, Heart, CheckCircle, Target } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="About CompareTheLeaf - UK Medical Cannabis Clinic Comparison Platform"
        description="Learn about CompareTheLeaf, the UK's most comprehensive medical cannabis clinic comparison platform. Our mission, values, and commitment to helping patients find the right care."
        canonicalUrl="https://comparetheleaf.co.uk/about"
        keywords={['about CompareTheLeaf', 'medical cannabis platform', 'UK cannabis clinic comparison', 'company information']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About CompareTheLeaf
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're dedicated to connecting patients with the best medical cannabis clinics across the UK, 
              providing transparent information to help you make informed healthcare decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                To democratize access to medical cannabis treatment by providing comprehensive, 
                unbiased information about UK clinics and helping patients find the right care for their needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We provide clear, honest information about clinics, pricing, and treatment options 
                  to help you make informed decisions.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centered</h3>
                <p className="text-gray-600">
                  Every feature we build is designed with patients in mind, ensuring you get the 
                  support and information you need.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  All clinics on our platform are verified and licensed, ensuring you connect 
                  with legitimate healthcare providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at CompareTheLeaf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Privacy</h3>
                <p className="text-gray-600">
                  We respect your privacy and handle all personal information with the utmost care, 
                  following strict data protection protocols.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Unbiased Information</h3>
                <p className="text-gray-600">
                  We don't favor any particular clinic or treatment. Our recommendations are based 
                  purely on patient reviews and verified data.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We constantly update our platform based on user feedback and changing regulations 
                  to provide the best possible experience.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Educational Focus</h3>
                <p className="text-gray-600">
                  We believe in empowering patients with knowledge about medical cannabis treatment 
                  options and regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CompareTheLeaf?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're the UK's most comprehensive medical cannabis clinic comparison platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Clinics</h3>
              <p className="text-gray-600">
                All clinics are thoroughly vetted and verified to ensure they meet regulatory standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Patient Reviews</h3>
              <p className="text-gray-600">
                Read authentic reviews from real patients to help guide your decision-making process.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Insights</h3>
              <p className="text-gray-600">
                Access expert insights and educational content about medical cannabis treatment.
              </p>
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
            Join thousands of patients who have found the right medical cannabis treatment through our platform.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Start Your Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;