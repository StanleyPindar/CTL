import React from 'react';
import { FileText, AlertTriangle, Scale } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Terms of Use - CompareTheLeaf"
        description="Terms of use for CompareTheLeaf platform. Understand your rights and responsibilities when using our medical cannabis clinic comparison service."
        canonicalUrl="https://comparetheleaf.co.uk/terms"
        keywords={['terms of use', 'terms and conditions', 'user agreement', 'platform terms']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Use
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the CompareTheLeaf website and services, you accept and agree to be 
              bound by the terms and provision of this agreement. If you do not agree to abide by the 
              above, please do not use this service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              CompareTheLeaf is an information platform that helps patients find and compare medical 
              cannabis clinics in the UK. We provide educational content, clinic information, patient 
              reviews, and assessment tools to help users make informed decisions about their healthcare.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h4>
                  <p className="text-yellow-700 mb-0">
                    CompareTheLeaf is not a medical practice and does not provide medical advice, 
                    diagnosis, or treatment. Always consult with qualified healthcare professionals 
                    for medical decisions.
                  </p>
                </div>
              </div>
            </div>

            <h2>3. User Responsibilities</h2>
            
            <h3>3.1 Accurate Information</h3>
            <p>You agree to provide accurate, current, and complete information when using our services.</p>

            <h3>3.2 Lawful Use</h3>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms.</p>

            <h3>3.3 Account Security</h3>
            <p>
              If you create an account, you are responsible for maintaining the confidentiality of your 
              account information and password.
            </p>

            <h2>4. Prohibited Uses</h2>
            <p>You may not use our service:</p>
            <ul>
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h2>5. Medical Disclaimer</h2>
            <p>
              The information provided on CompareTheLeaf is for educational and informational purposes only. 
              It is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
              Always seek the advice of your physician or other qualified health provider with any questions 
              you may have regarding a medical condition.
            </p>

            <h2>6. Clinic Information and Reviews</h2>
            
            <h3>6.1 Information Accuracy</h3>
            <p>
              While we strive to provide accurate and up-to-date information about medical cannabis clinics, 
              we cannot guarantee the accuracy, completeness, or timeliness of all information.
            </p>

            <h3>6.2 User Reviews</h3>
            <p>
              User reviews represent the opinions of individual users and do not reflect the views of 
              CompareTheLeaf. We do not endorse or guarantee the accuracy of user-generated content.
            </p>

            <h2>7. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your 
              use of the service, to understand our practices.
            </p>

            <h2>8. Intellectual Property Rights</h2>
            <p>
              The service and its original content, features, and functionality are and will remain the 
              exclusive property of CompareTheLeaf and its licensors. The service is protected by copyright, 
              trademark, and other laws.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              In no event shall CompareTheLeaf, nor its directors, employees, partners, agents, suppliers, 
              or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
              damages, including without limitation, loss of profits, data, use, goodwill, or other 
              intangible losses, resulting from your use of the service.
            </p>

            <h2>10. Disclaimer of Warranties</h2>
            <p>
              The information on this website is provided on an "as is" basis. To the fullest extent 
              permitted by law, this Company excludes all representations, warranties, conditions and 
              terms whether express or implied.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless CompareTheLeaf and its licensee and 
              licensors, and their employees, contractors, agents, officers and directors, from and 
              against any and all claims, damages, obligations, losses, liabilities, costs or debt, 
              and expenses (including but not limited to attorney's fees).
            </p>

            <h2>12. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the service immediately, without 
              prior notice or liability, under our sole discretion, for any reason whatsoever and without 
              limitation, including but not limited to a breach of the Terms.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of England and Wales. Any disputes 
              relating to these terms will be subject to the exclusive jurisdiction of the courts of 
              England and Wales.
            </p>

            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days notice prior to any new terms 
              taking effect.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Scale className="h-5 w-5 text-green-600 mr-3" />
                  <span className="font-medium">Legal Department</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Email: info@comparetheleaf.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;