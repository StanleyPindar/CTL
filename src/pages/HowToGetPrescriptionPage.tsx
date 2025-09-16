import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertTriangle, Calendar, FileText, Stethoscope, CreditCard, Clock, Phone } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const HowToGetPrescriptionPage: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      title: 'Check Your Eligibility',
      icon: CheckCircle,
      description: 'Ensure you meet the basic requirements for medical cannabis treatment.',
      details: [
        'Have a qualifying medical condition',
        'Tried conventional treatments without adequate relief',
        'No contraindications to cannabis use',
        'Willing to comply with treatment monitoring'
      ],
      timeframe: '1-2 days'
    },
    {
      number: 2,
      title: 'Gather Medical Records',
      icon: FileText,
      description: 'Collect comprehensive documentation of your condition and treatment history.',
      details: [
        'GP records and referral letters',
        'Specialist reports and test results',
        'List of current and previous medications',
        'Treatment history and effectiveness notes'
      ],
      timeframe: '3-5 days'
    },
    {
      number: 3,
      title: 'Choose a Specialist Clinic',
      icon: Stethoscope,
      description: 'Select a clinic that specializes in your condition and meets your needs.',
      details: [
        'Research clinics using our comparison tool',
        'Check specialist expertise in your condition',
        'Compare consultation fees and locations',
        'Read patient reviews and ratings'
      ],
      timeframe: '1-2 days'
    },
    {
      number: 4,
      title: 'Book Initial Consultation',
      icon: Calendar,
      description: 'Schedule your appointment with a specialist doctor.',
      details: [
        'Call the clinic or book online',
        'Provide basic medical information',
        'Choose between in-person or video consultation',
        'Confirm appointment details and requirements'
      ],
      timeframe: '1-14 days wait'
    },
    {
      number: 5,
      title: 'Attend Consultation',
      icon: Stethoscope,
      description: 'Meet with the specialist for comprehensive medical assessment.',
      details: [
        'Detailed discussion of symptoms and history',
        'Review of previous treatments and effectiveness',
        'Physical examination if required',
        'Education about medical cannabis options'
      ],
      timeframe: '60-90 minutes'
    },
    {
      number: 6,
      title: 'Receive Prescription',
      icon: FileText,
      description: 'If appropriate, receive your medical cannabis prescription.',
      details: [
        'Prescription for specific cannabis products',
        'Detailed dosing instructions',
        'Information about potential side effects',
        'Schedule for follow-up appointments'
      ],
      timeframe: 'Same day'
    },
    {
      number: 7,
      title: 'Collect Medication',
      icon: CreditCard,
      description: 'Obtain your prescribed medical cannabis from the pharmacy.',
      details: [
        'Prescription sent to specialist pharmacy',
        'Payment for medication and delivery',
        'Secure delivery to your address',
        'Instructions for storage and use'
      ],
      timeframe: '1-3 days'
    }
  ];

  const requirements = [
    {
      title: 'Medical Requirements',
      items: [
        'Diagnosed medical condition',
        'Inadequate response to conventional treatments',
        'Significant impact on quality of life',
        'No contraindications to cannabis use'
      ]
    },
    {
      title: 'Legal Requirements',
      items: [
        'Consultation with specialist doctor',
        'Valid prescription from licensed clinic',
        'Compliance with treatment monitoring',
        'Understanding of legal responsibilities'
      ]
    },
    {
      title: 'Practical Requirements',
      items: [
        'Ability to attend regular appointments',
        'Budget for ongoing treatment costs',
        'Safe storage for medication',
        'Understanding of dosing instructions'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Education', path: '/education/hub' },
          { label: 'How to Get a Prescription', path: '/education/how-to-get-prescription' }
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/education/how-to-get-prescription"
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Education', path: '/education/hub' },
          { label: 'How to Get a Prescription', path: '/education/how-to-get-prescription' }
        ]}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/education')}
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Get a Medical Cannabis Prescription in the UK
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive step-by-step guide to obtaining a legal medical cannabis prescription, 
              from initial consultation to receiving your medication.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Updated January 2024</span>
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
          <p className="text-gray-700 mb-4">
            Getting a medical cannabis prescription in the UK involves several steps and requirements. 
            Since medical cannabis became legal in November 2018, thousands of patients have successfully 
            obtained prescriptions for various conditions. This guide will walk you through the entire 
            process, from determining eligibility to receiving your medication.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-800 mb-1">Important Note</h4>
                <p className="text-blue-700 text-sm">
                  Only specialist doctors on the General Medical Council's Specialist Register can 
                  prescribe medical cannabis. GPs cannot prescribe medical cannabis directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements for Medical Cannabis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{req.title}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Step-by-Step Process</h2>
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300 hidden md:block"></div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Step Number and Icon */}
                    <div className="flex items-center md:flex-col md:items-center gap-4 md:gap-2">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-sm text-blue-600 font-medium">{step.timeframe}</p>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cost Information */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Costs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-1">Cost Considerations</h4>
                <p className="text-yellow-700 text-sm">
                  Medical cannabis is not currently available on the NHS except in very limited circumstances. 
                  Some private health insurance policies may provide coverage - check with your provider.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips for Success */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for a Successful Application</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Before Your Consultation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Compile a chronological list of your symptoms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Document all treatments you've tried</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Note any allergies or adverse reactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Bring copies of recent test results</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions to Ask</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">What products do you recommend for my condition?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">What are the potential side effects?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">How will you monitor my progress?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">What should I do if I experience problems?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Use our clinic comparison tool to find specialists who can help with your specific condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/quiz')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Take our three-minute quiz
            </button>
            <button
              onClick={() => navigate('/clinics')}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Browse Clinics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToGetPrescriptionPage;