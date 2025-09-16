import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Leaf, Scale, Shield, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const UKCompleteGuidePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/MedicalWebPage">
      <MetaTags 
        title="UK Complete Guide to Medical Cannabis"
        description="A comprehensive overview of medical cannabis in the United Kingdom, including legal framework, qualifying conditions, prescription process, and patient information."
        datePublished="2024-01-15"
        dateModified="2024-02-10"
        author="Dr. Sarah Williams"
        keywords={['UK medical cannabis', 'legal framework', 'qualifying conditions', 'prescription process', 'patient rights']}
        canonicalUrl="https://comparetheleaf.co.uk/education/uk-complete-guide"
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Education', path: '/education/hub' },
          { label: 'UK Complete Guide', path: '/education/uk-complete-guide' }
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4" itemProp="headline">
              UK Complete Guide to Medical Cannabis
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto" itemProp="description">
              A comprehensive overview of medical cannabis in the United Kingdom, including legal framework, 
              qualifying conditions, prescription process, and patient information.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                <span>By <span itemProp="name">Dr. Sarah Williams</span>, Medical Cannabis Specialist</span>
              </div>
              <div className="flex items-center" itemProp="dateModified">
                <span>Updated February 10, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction to Medical Cannabis in the UK</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Medical cannabis was legalized in the United Kingdom in November 2018, marking a significant shift in healthcare policy. 
              This comprehensive guide provides essential information for patients, caregivers, and healthcare professionals about accessing 
              and using medical cannabis legally in the UK.
            </p>
            <p>
              Since legalization, thousands of patients have gained access to cannabis-based medicinal products (CBMPs) through specialist 
              clinics and private healthcare providers. While NHS prescriptions remain limited, the private medical cannabis sector has 
              grown rapidly to meet patient demand.
            </p>
          </div>
        </div>

        {/* Legal Framework */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Framework</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              The legal framework for medical cannabis in the UK is governed by the Misuse of Drugs Regulations 2001, 
              which was amended in 2018 to allow for the prescription of cannabis-based medicinal products by specialist doctors.
            </p>
            <p>
              Only doctors on the General Medical Council's Specialist Register can prescribe medical cannabis, and they must 
              be satisfied that there is a clinical need that cannot be met by licensed medicines. The prescription must be 
              for a specific patient and condition.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
            <div className="flex items-start">
              <Scale className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Key Legal Points</h4>
                <ul className="space-y-2 text-green-700">
                  <li>• Medical cannabis is legal when prescribed by a specialist doctor</li>
                  <li>• Patients must have a valid prescription from a GMC-registered specialist</li>
                  <li>• Only licensed pharmacies can dispense medical cannabis</li>
                  <li>• Possession without a valid prescription remains illegal</li>
                  <li>• Driving under the influence of cannabis remains illegal, even with a prescription</li>
                  <li>• Traveling abroad with medical cannabis requires additional permissions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifying Conditions */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Qualifying Conditions</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              While there is no official list of qualifying conditions, medical cannabis may be considered for patients with 
              conditions where conventional treatments have been unsuccessful or unsuitable. The decision is made on a 
              case-by-case basis by specialist doctors.
            </p>
            <p>
              Patients typically need to demonstrate that they have tried conventional treatments without success or have 
              experienced significant side effects. A comprehensive medical history and evidence of previous treatments 
              are usually required.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Common Qualifying Conditions</h4>
              <ul className="space-y-2 text-blue-700">
                <li>• Chronic pain conditions</li>
                <li>• Epilepsy and seizure disorders</li>
                <li>• Multiple sclerosis and spasticity</li>
                <li>• Anxiety and PTSD</li>
                <li>• Cancer-related symptoms</li>
                <li>• Inflammatory bowel disease</li>
                <li>• Sleep disorders and insomnia</li>
                <li>• Tourette's syndrome</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-3">Eligibility Criteria</h4>
              <ul className="space-y-2 text-yellow-700">
                <li>• Must be 18 years or older (pediatric cases require additional approval)</li>
                <li>• Have tried conventional treatments without success</li>
                <li>• Provide comprehensive medical history</li>
                <li>• Consultation with a specialist doctor</li>
                <li>• Ongoing medical supervision required</li>
                <li>• Regular follow-up appointments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prescription Process */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prescription Process</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              The prescription process for medical cannabis involves several steps, from initial consultation to ongoing 
              monitoring. The process is designed to ensure patient safety and appropriate use of cannabis-based medicines.
            </p>
            <p>
              Most patients access medical cannabis through private clinics, as NHS prescriptions remain limited. 
              The process typically takes 2-4 weeks from initial consultation to receiving medication.
            </p>
          </div>
          
          <div className="space-y-4 mt-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                1
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Initial Consultation</h4>
                <p className="text-sm text-gray-600">Complete medical assessment with a specialist doctor, including review of medical history and previous treatments.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                2
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Medical Assessment</h4>
                <p className="text-sm text-gray-600">Doctor evaluates suitability for medical cannabis treatment and determines appropriate products and dosing.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                3
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Prescription and Dispensing</h4>
                <p className="text-sm text-gray-600">If approved, prescription is sent to a licensed pharmacy for dispensing and delivery to the patient.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                4
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Follow-up and Monitoring</h4>
                <p className="text-sm text-gray-600">Regular follow-up appointments to monitor treatment effectiveness and adjust dosing as needed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Types */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Medical Cannabis Products</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Medical cannabis products in the UK come in various forms, each with different characteristics, onset times, 
              and duration of effects. The choice of product depends on the patient's condition, preferences, and medical needs.
            </p>
            <p>
              All medical cannabis products must be prescribed by a specialist doctor and dispensed by a licensed pharmacy. 
              Products are quality-controlled and tested for safety and consistency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Flower Products</h4>
              <p className="text-gray-600 text-sm">Dried cannabis flower for vaporization, offering rapid onset and precise dosing control.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Oil Formulations</h4>
              <p className="text-gray-600 text-sm">Cannabis oils and tinctures for sublingual or oral administration, providing longer-lasting effects.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Other Formats</h4>
              <p className="text-gray-600 text-sm">Capsules, tablets, and other specialized formulations for specific medical needs.</p>
            </div>
          </div>
        </div>

        {/* Costs and Insurance */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Costs and Insurance</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Medical cannabis treatment in the UK is primarily available through private healthcare, with costs varying 
              between clinics and depending on the specific treatment required. Most private health insurance policies 
              do not currently cover medical cannabis treatment.
            </p>
            <p>
              Patients should budget for initial consultation fees, follow-up appointments, prescription fees, and the 
              cost of medication. Some clinics offer payment plans or reduced-cost programs for eligible patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-900 mb-2">£10-£300</div>
              <div className="text-sm text-blue-700">Initial Consultation</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-900 mb-2">£50-£150</div>
              <div className="text-sm text-green-700">Follow-up Visits</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-900 mb-2">£150-£400</div>
              <div className="text-sm text-purple-700">Monthly Medication</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-900 mb-2">£30</div>
              <div className="text-sm text-orange-700">Prescription Fee</div>
            </div>
          </div>
        </div>

        {/* Patient Rights and Responsibilities */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Rights and Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                Patient Rights
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Right to access medical cannabis with valid prescription</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Right to quality-controlled, tested products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Right to medical privacy and confidentiality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Right to ongoing medical supervision</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Right to change doctors or clinics</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Patient Responsibilities
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Follow prescribed dosing instructions exactly</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Attend all scheduled follow-up appointments</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Store medication securely and safely</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Do not share medication with others</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Report any adverse effects to your doctor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 my-8">
          <div className="flex items-start">
            <Scale className="h-6 w-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Legal Disclaimer</h3>
              <p className="text-yellow-700 mb-4">
                This guide provides general information about medical cannabis in the UK and should not be 
                considered legal or medical advice. Laws and regulations regarding medical cannabis are subject 
                to change, and individual circumstances vary.
              </p>
              <p className="text-yellow-700">
                Always consult with qualified healthcare professionals and legal experts for advice specific 
                to your situation. The information in this guide is current as of February 2024.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Treatment Options?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Compare UK medical cannabis clinics and find the right specialist for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/quiz')}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Take our three-minute quiz
              <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </button>
            <button
              onClick={() => navigate('/clinics')}
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
            >
              Compare All Clinics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UKCompleteGuidePage;