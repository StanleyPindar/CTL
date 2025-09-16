import React from 'react';
import { Scale, CheckCircle, AlertTriangle, BookOpen } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const LegalitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="UK Medical Cannabis Legalities - Legal Framework & Patient Rights"
        description="Comprehensive guide to UK medical cannabis legalities. Understand the legal framework, patient rights, prescribing requirements, and compliance since 2018."
        canonicalUrl="https://comparetheleaf.co.uk/legalities"
        keywords={['UK medical cannabis law', 'medical cannabis legal', 'cannabis legalities UK', 'medical cannabis rights']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Scale className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              UK Medical Cannabis Legalities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive guide to the legal framework surrounding medical cannabis in the United Kingdom
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Legal Status */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Legal Status</h3>
                  <p className="text-green-700 mb-0">
                    Medical cannabis has been legal in the UK since November 1, 2018, when the Misuse of Drugs 
                    Regulations 2001 were amended to allow specialist doctors to prescribe cannabis-based products 
                    for medicinal use (CBPMs).
                  </p>
                </div>
              </div>
            </div>

            <h2>The Legal Framework</h2>
            <p>
              The legalization of medical cannabis in the UK followed high-profile cases, particularly those of 
              Alfie Dingley and Billy Caldwell, young patients with severe epilepsy who benefited from cannabis-based 
              treatments. The change in law recognizes the therapeutic potential of cannabis while maintaining strict 
              controls to ensure patient safety and prevent misuse.
            </p>

            <h2>Who Can Prescribe Medical Cannabis?</h2>
            <p>
              Only specialist doctors listed on the General Medical Council's Specialist Register can prescribe 
              medical cannabis. This includes:
            </p>
            <ul>
              <li>Consultant physicians in relevant specialties</li>
              <li>Consultant psychiatrists</li>
              <li>Consultant paediatricians</li>
              <li>Other specialist consultants with relevant expertise</li>
            </ul>
            <p>
              General practitioners (GPs) cannot prescribe medical cannabis, though they can refer patients to 
              appropriate specialists.
            </p>

            <h2>Qualifying Conditions</h2>
            <p>
              While the law doesn't specify exact conditions, medical cannabis is typically prescribed when:
            </p>
            <ul>
              <li>Conventional treatments have been tried and proven inadequate</li>
              <li>The patient has a condition that may benefit from cannabis-based treatment</li>
              <li>The potential benefits outweigh the risks</li>
            </ul>

            <p>Common conditions include:</p>
            <ul>
              <li>Chronic pain conditions</li>
              <li>Treatment-resistant epilepsy</li>
              <li>Multiple sclerosis spasticity</li>
              <li>Nausea and vomiting from chemotherapy</li>
              <li>Severe anxiety and PTSD (in specific circumstances)</li>
            </ul>

            <h2>Legal Requirements for Patients</h2>
            
            <h3>Valid Prescription</h3>
            <p>
              Patients must have a valid prescription from a specialist doctor to legally possess and use medical 
              cannabis. The prescription must specify the exact product, dosage, and duration of treatment.
            </p>

            <h3>Licensed Products</h3>
            <p>
              Only cannabis products that meet pharmaceutical standards and are prescribed by licensed doctors 
              are legal. Self-medication with cannabis remains illegal, regardless of medical need.
            </p>

            <h3>Driving and Medical Cannabis</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important: Driving Considerations</h4>
                  <p className="text-yellow-700 mb-0">
                    Driving under the influence of cannabis is illegal, even with a valid prescription. However, 
                    patients with valid prescriptions may have a legal defense if they are not impaired and are 
                    following medical advice. Always consult your doctor about driving safety.
                  </p>
                </div>
              </div>
            </div>

            <h2>Workplace Considerations</h2>
            <p>
              Medical cannabis patients should inform their employers about their treatment, especially in 
              safety-sensitive roles. While discrimination based on medical treatment is generally prohibited, 
              workplace safety requirements may apply.
            </p>

            <h2>Travel with Medical Cannabis</h2>
            
            <h3>Within the UK</h3>
            <p>
              Patients can travel within the UK with their prescribed medical cannabis, provided they carry 
              their prescription and the medication is in its original packaging.
            </p>

            <h3>International Travel</h3>
            <p>
              International travel with medical cannabis is complex and varies by destination. Many countries 
              do not recognize UK medical cannabis prescriptions. Patients should:
            </p>
            <ul>
              <li>Research destination country laws thoroughly</li>
              <li>Contact relevant embassies or consulates</li>
              <li>Consider obtaining additional documentation</li>
              <li>Consult with their prescribing doctor</li>
            </ul>

            <h2>NHS vs Private Prescriptions</h2>
            <p>
              While medical cannabis is legal, it is rarely available on the NHS. Most patients receive private 
              prescriptions, which means:
            </p>
            <ul>
              <li>Patients pay full cost of treatment</li>
              <li>Consultation fees apply</li>
              <li>Regular follow-up appointments are required</li>
              <li>Some private insurance may provide coverage</li>
            </ul>

            <h2>Quality and Safety Standards</h2>
            <p>
              All legal medical cannabis products must meet strict pharmaceutical standards, including:
            </p>
            <ul>
              <li>Good Manufacturing Practice (GMP) standards</li>
              <li>Consistent cannabinoid content</li>
              <li>Testing for contaminants and pesticides</li>
              <li>Proper labeling and packaging</li>
              <li>Batch tracking and quality control</li>
            </ul>

            <h2>Patient Rights and Protections</h2>
            <p>
              Medical cannabis patients have the same rights as other patients, including:
            </p>
            <ul>
              <li>Confidentiality of medical information</li>
              <li>Right to informed consent</li>
              <li>Protection from discrimination</li>
              <li>Access to medical records</li>
              <li>Right to seek second opinions</li>
            </ul>

            <h2>Future Developments</h2>
            <p>
              The legal landscape for medical cannabis continues to evolve. Ongoing developments include:
            </p>
            <ul>
              <li>Expanded research into therapeutic applications</li>
              <li>Potential changes to NHS availability</li>
              <li>Development of new cannabis-based medicines</li>
              <li>Refinement of prescribing guidelines</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Need More Information?</h4>
                  <p className="text-blue-700 mb-4">
                    For the most current legal information, consult official government sources and speak with 
                    qualified medical professionals.
                  </p>
                  <a
                    href="/quiz"
                    className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-md hover:from-blue-700 hover:to-green-700 transition-all font-medium"
                  >
                    Take our three-minute quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalitiesPage;