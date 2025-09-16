import React from 'react';
import { Calendar, FileText, Stethoscope, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const HowToGetAClinicPage: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Research and Choose a Clinic',
      icon: FileText,
      description: 'Find a clinic that specializes in your condition and meets your needs.',
      details: [
        'Use our clinic comparison tool to find specialists',
        'Read patient reviews and ratings',
        'Check consultation fees and location preferences',
        'Verify the clinic is properly licensed and regulated'
      ],
      timeframe: '1-2 days'
    },
    {
      number: 2,
      title: 'Gather Your Medical Records',
      icon: Stethoscope,
      description: 'Collect documentation of your condition and previous treatments.',
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
      title: 'Book Your Initial Consultation',
      icon: Calendar,
      description: 'Schedule your appointment with the specialist doctor.',
      details: [
        'Call the clinic or book online',
        'Provide basic medical information',
        'Choose between in-person or video consultation',
        'Confirm appointment details and requirements'
      ],
      timeframe: '1-14 days wait'
    },
    {
      number: 4,
      title: 'Attend Your Consultation',
      icon: Stethoscope,
      description: 'Meet with the specialist to discuss your condition and treatment options.',
      details: [
        'Comprehensive medical assessment',
        'Discussion of symptoms and treatment goals',
        'Review of previous treatments and their effectiveness',
        'Education about medical cannabis options'
      ],
      timeframe: '60-90 minutes'
    },
    {
      number: 5,
      title: 'Receive Your Prescription',
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
      number: 6,
      title: 'Collect Your Medication',
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

  const preparationTips = [
    {
      title: 'Medical History',
      items: [
        'Compile a chronological list of your symptoms',
        'Document all treatments you\'ve tried',
        'Note any allergies or adverse reactions',
        'Bring copies of recent test results'
      ]
    },
    {
      title: 'Questions to Ask',
      items: [
        'What products do you recommend for my condition?',
        'What are the potential side effects?',
        'How will you monitor my progress?',
        'What should I do if I experience problems?'
      ]
    },
    {
      title: 'Practical Considerations',
      items: [
        'Arrange time off work for appointments',
        'Consider transportation if using THC products',
        'Budget for ongoing treatment costs',
        'Inform close family members about your treatment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="How to Get Started with a Medical Cannabis Clinic UK - Step-by-Step Guide"
        description="Complete guide to getting started with a medical cannabis clinic in the UK. Step-by-step process from booking to receiving your prescription."
        canonicalUrl="https://comparetheleaf.co.uk/how-to-get-a-clinic"
        keywords={['how to get medical cannabis clinic', 'medical cannabis process UK', 'clinic booking guide', 'medical cannabis steps']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Get Started with a Medical Cannabis Clinic
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A step-by-step guide to booking your first consultation and beginning your medical cannabis treatment journey.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300 hidden md:block"></div>
                  )}
                  
                  <div className="bg-white rounded-lg shadow-sm p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Step Number and Icon */}
                      <div className="flex items-center md:flex-col md:items-center gap-4 md:gap-2">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          {step.number}
                        </div>
                        <div className="md:hidden">
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                          <p className="text-sm text-gray-500">{step.timeframe}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="hidden md:block mb-4">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Preparation Tips */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preparing for Your Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Being well-prepared will help you get the most out of your consultation and ensure 
              the best possible treatment outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preparationTips.map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{tip.title}</h3>
                <ul className="space-y-3">
                  {tip.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Information */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Understanding the Costs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-2">£10-£300</div>
                <div className="text-sm text-blue-700">Initial Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-2">£50-£150</div>
                <div className="text-sm text-blue-700">Follow-up Visits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-2">£150-£400</div>
                <div className="text-sm text-blue-700">Monthly Medication</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-2">£30</div>
                <div className="text-sm text-blue-700">Prescription Fee</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> Costs vary between clinics and depend on your specific treatment plan. 
                Some private health insurance policies may provide coverage. Always confirm costs before booking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Use our tools to find the right clinic for your needs and start your medical cannabis journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quiz"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Take our three-minute quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/clinics"
              className="inline-flex items-center bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Browse Clinics
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToGetAClinicPage;