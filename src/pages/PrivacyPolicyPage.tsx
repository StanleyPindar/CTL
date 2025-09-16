import React from 'react';
import { Shield, Mail, Phone } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Privacy Policy - CompareTheLeaf"
        description="CompareTheLeaf privacy policy. Learn how we collect, use, and protect your personal information in compliance with UK GDPR regulations."
        canonicalUrl="https://comparetheleaf.co.uk/privacy"
        keywords={['privacy policy', 'data protection', 'GDPR compliance', 'personal information']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              CompareTheLeaf ("we," "our," or "us") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website and use our services.
            </p>

            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Medical condition information (when using our assessment tool)</li>
              <li>Treatment preferences and requirements</li>
              <li>Communication preferences</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
              <li>Device information</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide personalized clinic recommendations</li>
              <li>Improve our website and services</li>
              <li>Communicate with you about our services</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and abuse</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            
            <h3>4.1 With Your Consent</h3>
            <p>
              We may share your information with medical cannabis clinics when you explicitly request 
              to be connected with them or when you provide consent for us to share your assessment results.
            </p>

            <h3>4.2 Service Providers</h3>
            <p>
              We may share information with trusted third-party service providers who assist us in 
              operating our website and providing our services, subject to confidentiality agreements.
            </p>

            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law, court order, or government regulation, 
              or to protect our rights, property, or safety.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2>7. Your Rights</h2>
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your personal information</li>
              <li>Restrict processing of your information</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, 
              analyze website traffic, and understand user preferences. You can control cookie settings 
              through your browser preferences.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices or content of these external sites. We encourage you to review their 
              privacy policies.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 18 years of age. We do not knowingly 
              collect personal information from children under 18.
            </p>

            <h2>11. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country 
              of residence. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>info@comparetheleaf.co.uk</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>CompareTheLeaf Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;