import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, ClipboardCheck } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

interface QualificationData {
  conditions: string[];
  previousTreatments: string;
  treatmentEffectiveness: string;
  compliance: {
    followInstructions: boolean;
    regularAppointments: boolean;
    informedConsent: boolean;
  };
}

const QualificationCheckerPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [qualificationData, setQualificationData] = useState<QualificationData>({
    conditions: [],
    previousTreatments: '',
    treatmentEffectiveness: '',
    compliance: {
      followInstructions: false,
      regularAppointments: false,
      informedConsent: false
    }
  });
  const [result, setResult] = useState<'eligible' | 'not-eligible' | null>(null);

  const totalSteps = 3;

  const conditions = [
    'Chronic Pain',
    'Epilepsy',
    'Multiple Sclerosis',
    'Cancer-related symptoms',
    'PTSD',
    'Anxiety',
    'Depression',
    'Insomnia',
    'Inflammatory Bowel Disease',
    'Tourette Syndrome',
    'Other qualifying condition'
  ];

  const handleConditionChange = (condition: string) => {
    setQualificationData(prev => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter(c => c !== condition)
        : [...prev.conditions, condition]
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateEligibility();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateEligibility = () => {
    const hasQualifyingCondition = qualificationData.conditions.length > 0;
    const hasTriedTreatments = qualificationData.previousTreatments.trim() !== '';
    const treatmentInadequate = ['not-effective', 'side-effects'].includes(qualificationData.treatmentEffectiveness);
    const isCompliant = Object.values(qualificationData.compliance).every(value => value === true);

    if (hasQualifyingCondition && hasTriedTreatments && treatmentInadequate && isCompliant) {
      setResult('eligible');
    } else {
      setResult('not-eligible');
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return qualificationData.conditions.length > 0;
      case 2:
        return qualificationData.previousTreatments.trim() !== '' && qualificationData.treatmentEffectiveness !== '';
      case 3:
        return Object.values(qualificationData.compliance).every(value => value === true);
      default:
        return false;
    }
  };

  const resetChecker = () => {
    setCurrentStep(1);
    setQualificationData({
      conditions: [],
      previousTreatments: '',
      treatmentEffectiveness: '',
      compliance: {
        followInstructions: false,
        regularAppointments: false,
        informedConsent: false
      }
    });
    setResult(null);
  };

  if (result) {
    return (
      <div className="min-h-screen bg-gray-50">
        <MetaTags 
          title="Medical Cannabis Eligibility Results - Are You Qualified for Treatment?"
          description="Your medical cannabis eligibility assessment results. Find out if you qualify for legal medical cannabis treatment in the UK and discover your next steps."
          keywords={[
            'medical cannabis eligibility UK',
            'medical cannabis qualification checker',
            'am I eligible for medical cannabis',
            'medical cannabis assessment UK',
            'qualify for medical cannabis UK'
          ]}
          canonicalUrl="https://comparetheleaf.co.uk/qualify"
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            {result === 'eligible' ? (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  You're Likely Eligible!
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Based on your responses, you may qualify for medical cannabis treatment. 
                  The next step is to consult with a specialist doctor.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-green-800 mb-3">What happens next?</h3>
                  <ul className="text-green-700 text-left space-y-2">
                    <li>• Book a consultation with a specialist doctor</li>
                    <li>• Bring your medical records and treatment history</li>
                    <li>• Discuss your symptoms and treatment goals</li>
                    <li>• If appropriate, receive a prescription and treatment plan</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  <XCircle className="h-8 w-8 text-red-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Not Currently Eligible
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Based on your responses, you may not currently qualify for medical cannabis treatment. 
                  This could change as your treatment journey progresses.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-yellow-800 mb-3">Consider these options:</h3>
                  <ul className="text-yellow-700 text-left space-y-2">
                    <li>• Continue with conventional treatments as advised by your doctor</li>
                    <li>• Keep detailed records of treatment effectiveness</li>
                    <li>• Discuss all treatment options with your healthcare provider</li>
                    <li>• Retake this assessment if your situation changes</li>
                  </ul>
                </div>
              </>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {result === 'eligible' && (
                <a
                  href="/quiz"
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-md hover:from-blue-700 hover:to-green-700 transition-all font-medium"
                >
                  Take our three-minute quiz
                </a>
              )}
              <button
                onClick={resetChecker}
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
              >
                Check Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Medical Cannabis Qualification Checker UK - Am I Eligible?"
        description="Check if you qualify for medical cannabis treatment in the UK. Free 3-step assessment covering conditions, treatments, and eligibility criteria. Get instant results."
        keywords={[
          'medical cannabis eligibility checker UK',
          'medical cannabis qualification UK',
          'am I eligible for medical cannabis',
          'medical cannabis assessment UK',
          'qualify for medical cannabis UK',
          'medical cannabis eligibility criteria',
          'medical cannabis qualification test',
          'check medical cannabis eligibility',
          'medical cannabis eligibility quiz',
          'UK medical cannabis qualification'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/qualify"
        medicalProcedureData={{
          name: 'Medical Cannabis Eligibility Assessment',
          description: 'Comprehensive assessment to determine eligibility for medical cannabis treatment based on UK guidelines',
          procedureType: 'Medical eligibility assessment',
          preparation: [
            'Review medical history',
            'Document current treatments',
            'Assess treatment effectiveness',
            'Evaluate compliance readiness'
          ],
          howPerformed: 'Structured questionnaire assessing medical conditions, treatment history, and eligibility criteria',
          category: [
            'Medical Assessment',
            'Eligibility Screening',
            'Treatment Planning'
          ],
          expectedPrognosis: 'Determination of treatment eligibility and appropriate next steps',
          contraindication: [
            'Severe cardiovascular disease',
            'Severe psychiatric disorders',
            'Pregnancy and breastfeeding',
            'Inability to comply with monitoring'
          ]
        }}
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Tools', path: '/tools' },
          { label: 'Qualification Checker', path: '/qualify' }
        ]}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <ClipboardCheck className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Medical Cannabis Qualification Checker UK - Check Your Eligibility
            </h1>
            <p className="text-xl text-gray-600">
              Check if you qualify for medical cannabis treatment in the UK. Answer 3 simple questions to assess your eligibility based on current UK guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Step 1: Conditions */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Do you have any of these qualifying conditions?
              </h2>
              <p className="text-gray-600 mb-6">
                Select all conditions that apply to you. Medical cannabis is typically prescribed for these conditions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {conditions.map((condition) => (
                  <label
                    key={condition}
                    className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={qualificationData.conditions.includes(condition)}
                      onChange={() => handleConditionChange(condition)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-gray-900">{condition}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Previous Treatments */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Previous Treatments
              </h2>
              <p className="text-gray-600 mb-6">
                Medical cannabis is typically considered when conventional treatments haven't provided adequate relief.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What treatments have you tried for your condition(s)?
                  </label>
                  <textarea
                    value={qualificationData.previousTreatments}
                    onChange={(e) => setQualificationData(prev => ({ ...prev, previousTreatments: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Prescription medications, physiotherapy, surgery, injections..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How effective have these treatments been?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'very-effective', label: 'Very effective - managing symptoms well' },
                      { value: 'somewhat-effective', label: 'Somewhat effective - partial relief' },
                      { value: 'not-effective', label: 'Not effective - little to no relief' },
                      { value: 'side-effects', label: 'Effective but with significant side effects' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          name="effectiveness"
                          value={option.value}
                          checked={qualificationData.treatmentEffectiveness === option.value}
                          onChange={(e) => setQualificationData(prev => ({ ...prev, treatmentEffectiveness: e.target.value }))}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-3 text-gray-900">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Compliance */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Treatment Compliance
              </h2>
              <p className="text-gray-600 mb-6">
                Medical cannabis treatment requires commitment to following medical advice and regular monitoring.
              </p>
              
              <div className="space-y-4">
                <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={qualificationData.compliance.followInstructions}
                    onChange={(e) => setQualificationData(prev => ({
                      ...prev,
                      compliance: { ...prev.compliance, followInstructions: e.target.checked }
                    }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  />
                  <div className="ml-3">
                    <div className="text-gray-900 font-medium">Follow medical instructions</div>
                    <div className="text-sm text-gray-600">I will follow my doctor's dosing and usage instructions carefully</div>
                  </div>
                </label>

                <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={qualificationData.compliance.regularAppointments}
                    onChange={(e) => setQualificationData(prev => ({
                      ...prev,
                      compliance: { ...prev.compliance, regularAppointments: e.target.checked }
                    }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  />
                  <div className="ml-3">
                    <div className="text-gray-900 font-medium">Attend regular appointments</div>
                    <div className="text-sm text-gray-600">I will attend follow-up appointments for monitoring and adjustments</div>
                  </div>
                </label>

                <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={qualificationData.compliance.informedConsent}
                    onChange={(e) => setQualificationData(prev => ({
                      ...prev,
                      compliance: { ...prev.compliance, informedConsent: e.target.checked }
                    }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  />
                  <div className="ml-3">
                    <div className="text-gray-900 font-medium">Informed consent</div>
                    <div className="text-sm text-gray-600">I understand the potential benefits and risks of medical cannabis treatment</div>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-md hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {currentStep < totalSteps ? (
                <>
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Check Eligibility
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationCheckerPage;