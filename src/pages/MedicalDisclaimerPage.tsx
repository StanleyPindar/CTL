import React from 'react';
import { AlertTriangle, Stethoscope, Shield } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const MedicalDisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Medical Disclaimer - CompareTheLeaf"
        description="Important medical disclaimer and legal information for CompareTheLeaf users. Understand our role and the importance of professional medical advice."
        canonicalUrl="https://comparetheleaf.co.uk/disclaimer"
        keywords={['medical disclaimer', 'legal information', 'medical advice', 'healthcare disclaimer']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Stethoscope className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Disclaimer
            </h1>
            <p className="text-xl text-gray-600">
              Important medical and legal information
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Important Medical Notice</h3>
                  <p className="text-red-700 mb-0">
                    The information provided on CompareTheLeaf is for educational and informational 
                    purposes only and is not intended as medical advice, diagnosis, or treatment. 
                    Always consult with qualified healthcare professionals before making any medical decisions.
                  </p>
                </div>
              </div>
            </div>

            <h2>1. Not Medical Advice</h2>
            <p>
              CompareTheLeaf is an information platform that provides educational content about medical 
              cannabis and helps users find medical cannabis clinics. We do not provide medical advice, 
              diagnosis, or treatment recommendations. The information on our website should not be used 
              as a substitute for professional medical advice from qualified healthcare providers.
            </p>

            <h2>2. Consult Healthcare Professionals</h2>
            <p>
              Before considering medical cannabis treatment or making any changes to your current treatment 
              plan, you should always consult with qualified healthcare professionals, including:
            </p>
            <ul>
              <li>Your primary care physician (GP)</li>
              <li>Specialist doctors relevant to your condition</li>
              <li>Licensed medical cannabis specialists</li>
              <li>Pharmacists regarding drug interactions</li>
            </ul>

            <h2>3. Individual Medical Circumstances</h2>
            <p>
              Every individual's medical situation is unique. What works for one patient may not be 
              appropriate for another. Factors that may affect treatment suitability include:
            </p>
            <ul>
              <li>Medical history and current health conditions</li>
              <li>Current medications and potential interactions</li>
              <li>Age, weight, and other personal factors</li>
              <li>Severity and nature of symptoms</li>
              <li>Response to previous treatments</li>
            </ul>

            <h2>4. Treatment Risks and Benefits</h2>
            <p>
              Like all medical treatments, medical cannabis may have both benefits and risks. Potential 
              considerations include:
            </p>
            
            <h3>4.1 Potential Benefits</h3>
            <ul>
              <li>Pain relief for certain conditions</li>
              <li>Reduction in seizure frequency for some epilepsy patients</li>
              <li>Improved sleep quality</li>
              <li>Reduced nausea and improved appetite</li>
              <li>Potential reduction in other medication requirements</li>
            </ul>

            <h3>4.2 Potential Risks and Side Effects</h3>
            <ul>
              <li>Drowsiness and fatigue</li>
              <li>Dizziness and coordination issues</li>
              <li>Dry mouth and changes in appetite</li>
              <li>Mood changes</li>
              <li>Potential drug interactions</li>
              <li>Impaired driving ability</li>
            </ul>

            <h2>5. Emergency Medical Situations</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">Emergency Notice</h4>
                  <p className="text-yellow-700 mb-0">
                    If you are experiencing a medical emergency, call 999 immediately. Do not rely on 
                    information from our website for emergency medical situations.
                  </p>
                </div>
              </div>
            </div>

            <h2>6. Legal Compliance</h2>
            <p>
              Medical cannabis is legal in the UK only when prescribed by qualified specialist doctors. 
              It is important to understand:
            </p>
            <ul>
              <li>Self-medication with cannabis remains illegal</li>
              <li>Only licensed clinics can prescribe medical cannabis</li>
              <li>Patients must have valid prescriptions to possess medical cannabis</li>
              <li>Driving under the influence of cannabis is illegal, even with a prescription</li>
            </ul>

            <h2>7. Information Sources</h2>
            <p>
              While we strive to provide accurate and up-to-date information, medical knowledge and 
              regulations are constantly evolving. We recommend verifying information with:
            </p>
            <ul>
              <li>Your healthcare provider</li>
              <li>Official government health websites</li>
              <li>Peer-reviewed medical literature</li>
              <li>Licensed medical cannabis clinics</li>
            </ul>

            <h2>8. User-Generated Content</h2>
            <p>
              Patient reviews and testimonials on our platform represent individual experiences and 
              opinions. These should not be considered as medical advice or guarantees of treatment 
              outcomes. Individual results may vary significantly.
            </p>

            <h2>9. No Doctor-Patient Relationship</h2>
            <p>
              Use of the CompareTheLeaf website does not create a doctor-patient relationship between 
              you and CompareTheLeaf, its employees, or any healthcare providers mentioned on the site. 
              For medical advice and treatment, you must consult directly with qualified healthcare professionals.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              CompareTheLeaf disclaims any liability for decisions made based on information provided 
              on our website. We are not responsible for any adverse outcomes that may result from 
              medical decisions made using information from our platform.
            </p>

            <h2>11. Updates and Changes</h2>
            <p>
              Medical information and regulations change frequently. We cannot guarantee that all 
              information on our website is current or complete. Always verify information with 
              current medical sources and healthcare providers.
            </p>

            <h2>12. Contact for Medical Concerns</h2>
            <p>
              If you have specific medical questions or concerns, please contact:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-medium">For Medical Emergencies</span>
                </div>
                <p className="text-sm text-gray-600 ml-8">Call 999 immediately</p>
                
                <div className="flex items-center">
                  <Stethoscope className="h-5 w-5 text-green-600 mr-3" />
                  <span className="font-medium">For Non-Emergency Medical Advice</span>
                </div>
                <p className="text-sm text-gray-600 ml-8">Contact your GP or call NHS 111</p>
                
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="font-medium">For Platform-Related Questions</span>
                </div>
                <p className="text-sm text-gray-600 ml-8">Email: info@comparetheleaf.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimerPage;