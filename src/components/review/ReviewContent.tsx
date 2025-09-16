import React from 'react';
import { CheckCircle, AlertTriangle, Award, Clock, Target, Users, DollarSign, CreditCard, Shield, Calendar, ExternalLink } from 'lucide-react';

interface PricingTableItem {
  fee_type: string;
  amount: string;
  frequency_notes: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface KeyFeature {
  icon: string;
  title: string;
  description: string;
}

interface ReviewContentProps {
  clinic: {
    name: string;
    id: string;
    review_introduction?: string;
    review_overview?: string;
    target_audience?: string;
    market_position_detail?: string;
    pricing_table?: PricingTableItem[];
    patient_process?: ProcessStep[];
    key_features?: KeyFeature[];
    pros?: string[];
    cons?: string[];
    rating?: number;
    google_reviews_count?: number;
    consultation_fee?: number;
    annual_cost?: number;
    location?: string;
    specialisations?: string[];
    cqc_registered?: boolean;
    website?: string;
    verdict?: any;
  };
}

const ReviewContent: React.FC<ReviewContentProps> = ({ clinic }) => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'clock': return <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />;
      case 'target': return <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />;
      case 'users': return <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />;
      case 'dollarsign': 
      case 'dollar': return <DollarSign className="h-8 w-8 text-yellow-600 mx-auto mb-2" />;
      case 'creditcard': return <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />;
      case 'shield': return <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />;
      default: return <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />;
    }
  };

  const handleBookConsultation = () => {
    if (clinic.website) {
      window.open(clinic.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Introduction and Overview */}
        {clinic.review_introduction && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction and Overview</h2>
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: clinic.review_introduction }}
            />
          </div>
        )}

        {/* Services and Specialisations */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services and Specialisations</h2>
          
          {clinic.review_overview && (
            <div 
              className="prose prose-lg max-w-none text-gray-700 mb-6"
              dangerouslySetInnerHTML={{ __html: clinic.review_overview }}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {clinic.specialisations && clinic.specialisations.length > 0 && (
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Core Specialisations</h3>
                <div className="flex flex-wrap gap-2">
                  {clinic.specialisations.map((spec, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {clinic.target_audience && (
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Best Suited For</h3>
                <p className="text-green-700">{clinic.target_audience}</p>
              </div>
            )}
          </div>

          {clinic.market_position_detail && (
            <div className="prose prose-lg max-w-none text-gray-700 mt-6">
              <p>{clinic.market_position_detail}</p>
            </div>
          )}
        </div>

        {/* Pricing and Cost Analysis */}
        {clinic.pricing_table && clinic.pricing_table.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing and Cost Analysis</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency / Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clinic.pricing_table.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.fee_type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{item.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.frequency_notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">Cost Summary</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clinic.consultation_fee && (
                  <div>
                    <div className="text-2xl font-bold text-green-700">£{clinic.consultation_fee}</div>
                    <div className="text-green-600 text-sm">Initial consultation</div>
                  </div>
                )}
                {clinic.annual_cost && (
                  <div>
                    <div className="text-2xl font-bold text-green-700">£{clinic.annual_cost}</div>
                    <div className="text-green-600 text-sm">Estimated annual cost</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Patient Experience and Process */}
        {clinic.patient_process && clinic.patient_process.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Experience and Process</h2>
            
            <div className="space-y-6 mb-8">
              {clinic.patient_process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">Quick Response</div>
                <div className="text-sm text-blue-600">Professional support and guidance</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">Expert Care</div>
                <div className="text-sm text-green-600">GMC-registered specialists</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">Patient Support</div>
                <div className="text-sm text-purple-600">Comprehensive care throughout journey</div>
              </div>
            </div>
          </div>
        )}

        {/* Key Features */}
        {clinic.key_features && clinic.key_features.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clinic.key_features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  {getFeatureIcon(feature.icon)}
                  <div className="font-semibold text-gray-800 mb-2">{feature.title}</div>
                  <div className="text-sm text-gray-600">{feature.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pros and Cons Analysis */}
        {((clinic.pros && clinic.pros.length > 0) || (clinic.cons && clinic.cons.length > 0)) && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pros and Cons Analysis</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Strengths */}
              {clinic.pros && clinic.pros.length > 0 && (
                <div>
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-700">Strengths</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {clinic.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Limitations */}
              {clinic.cons && clinic.cons.length > 0 && (
                <div>
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mr-3">
                      <AlertTriangle className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-orange-700">Limitations</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {clinic.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Competitive Analysis */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-2">Competitive Advantages</h4>
                <p className="text-blue-700 text-sm">
                  {clinic.pros && clinic.pros.length > 0 
                    ? clinic.pros[0] 
                    : `${clinic.name} offers professional medical cannabis treatment with qualified specialists.`}
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-800 mb-2">Potential Drawbacks</h4>
                <p className="text-orange-700 text-sm">
                  {clinic.cons && clinic.cons.length > 0 
                    ? clinic.cons[0]
                    : 'Consider other clinics if you need specific services not offered here.'}
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">Suitability</h4>
                <p className="text-green-700 text-sm">
                  <strong>Ideal for:</strong> {clinic.target_audience || 'patients seeking professional medical cannabis treatment'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Regulatory Compliance and Credentials */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Compliance and Credentials</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-6">
            <p>
              {clinic.name} operates under full UK regulatory compliance with all necessary licenses 
              and certifications for medical cannabis prescribing. All doctors are GMC-registered 
              specialists with expertise in medical cannabis treatment.
            </p>
            <p>
              The clinic maintains high standards of patient care and safety, following all MHRA 
              guidelines for medical cannabis treatment. Professional indemnity insurance and 
              regulatory oversight ensure patient protection and treatment quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {clinic.cqc_registered && (
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">CQC Registered</div>
                <div className="text-xs text-green-600">Care Quality Commission</div>
              </div>
            )}
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-blue-800">GMC Licensed</div>
              <div className="text-xs text-blue-600">General Medical Council</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-purple-800">MHRA Compliant</div>
              <div className="text-xs text-purple-600">Medicines Regulation</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="font-semibold text-orange-800">Fully Licensed</div>
              <div className="text-xs text-orange-600">UK Medical Cannabis</div>
            </div>
          </div>
        </div>

        {/* Final Verdict and Recommendations */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Verdict and Recommendations</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {clinic.rating ? (clinic.rating * 2).toFixed(1) : '8.5'}/10
              </div>
              <div className="text-lg text-gray-600 mb-4">Overall Score</div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 border border-green-200">
                <Award className="h-5 w-5 mr-2" />
                <span className="font-medium">
                  {clinic.rating && clinic.rating >= 4.5 ? 'Highly Recommended' : 
                   clinic.rating && clinic.rating >= 4.0 ? 'Recommended' : 
                   'Good Option'}
                </span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 mb-6">
            <p>
              This {clinic.name} review finds a clinic that offers {clinic.specialisations?.join(', ').toLowerCase() || 'comprehensive medical cannabis treatment'} 
              with professional service and regulatory compliance. 
              {clinic.target_audience && ` The clinic is particularly well-suited for ${clinic.target_audience.toLowerCase()}.`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Key Reasons to Choose {clinic.name}</h3>
              <ul className="space-y-2 text-green-700">
                {clinic.pros?.slice(0, 3).map((pro, index) => (
                  <li key={index}>• {pro}</li>
                )) || [
                  '• Professional medical cannabis treatment',
                  '• Qualified specialist doctors',
                  '• Regulatory compliance and safety'
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>Best suited for:</strong> {clinic.target_audience || 'patients seeking professional medical cannabis treatment with qualified specialists'}
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">Consider Other Clinics If</h3>
              <p className="text-orange-700 mb-4">
                {clinic.cons && clinic.cons.length > 0 
                  ? `Consider other options if ${clinic.cons[0].toLowerCase()}.`
                  : 'Consider other clinics if you need specific services not offered here.'
                }
              </p>
              
              <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                <p className="text-orange-800 text-sm">
                  <strong>Alternative options:</strong> Use our clinic comparison tool to find clinics that better match your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your Consultation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your medical cannabis journey with {clinic.name}'s professional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookConsultation}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Consultation
              <ExternalLink className="h-4 w-4 ml-2" />
            </button>
            <button
              onClick={() => window.location.href = '/quiz'}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Take Our Clinic Quiz
            </button>
          </div>
          
          <div className="mt-6 text-sm text-blue-100">
            <div className="flex items-center justify-center mb-2">
              <Shield className="h-4 w-4 mr-2" />
              <span>Fully licensed and regulated UK medical cannabis clinic</span>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
              <p className="text-yellow-700 text-sm">
                This review is for informational purposes only. Always consult with qualified healthcare 
                professionals before making medical decisions. Pricing and service details are accurate 
                as of the review date and may change without notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;