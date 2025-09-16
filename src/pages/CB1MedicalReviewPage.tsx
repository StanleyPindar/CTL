import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Phone, Mail, Globe, ExternalLink, CheckCircle, AlertTriangle, Award, Shield, Calendar, Clock, CreditCard, Users, Target } from 'lucide-react';
import StarRating from '../components/common/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { generateClinicMetaDescription } from '../utils/metaDescriptionGenerator';
import MetaTags from '../components/MetaTags';

const CB1MedicalReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const clinicData = {
    name: 'CB1 Medical',
    rating: 4.8,
    reviewCount: 550,
    consultationFee: 50,
    annualFee: 50,
    website: 'https://cb1medical.com',
    phone: '0116 326 0045',
    email: 'info@cb1medical.com',
    location: 'Leicester, UK',
    established: 2021,
    cqcRegistered: true
  };

  // Prepare clinicData for generateClinicMetaDescription
  const cb1ClinicDataForMeta = {
    name: clinicData.name,
    rating: clinicData.rating,
    reviewCount: clinicData.reviewCount,
    consultationFee: clinicData.consultationFee,
    annual_cost_first_year: clinicData.annualFee, // Map to annual_cost_first_year
    location: clinicData.location,
  };

  const pricingData = [
    { type: 'Initial sign-up (covers all Year-1 consults)', amount: '£50', notes: 'Refunded if clinically ineligible' },
    { type: 'Annual check-up (Year 2+)', amount: '£50', notes: 'Once per year' },
    { type: 'Repeat prescriptions', amount: 'Free', notes: 'Unlimited' },
    { type: 'Additional reviews between annuals', amount: 'Included', notes: 'No per-consult fee' }
  ];

  const processSteps = [
    { step: 1, title: 'Eligibility check (2 minutes)', description: 'Five-question web tool screens diagnosis, prior treatments and contraindications' },
    { step: 2, title: 'App registration & ID verification', description: 'Upload photo ID and medical records; clinic staff chase missing documents within 72 hours' },
    { step: 3, title: '£50 booking', description: 'Choose a video slot (weekday evenings, Saturday mornings) or a Leicester in-clinic appointment' },
    { step: 4, title: 'Initial consultation (30 min)', description: 'Specialist reviews history, explains cannabis-based medicine and issues prescription if appropriate' },
    { step: 5, title: 'Dispensing', description: 'E-script flows automatically to CB1 Pharmacy; payment and delivery preferences completed in-app' },
    { step: 6, title: 'Three-week follow-up', description: 'Assess response, adjust dose; thereafter, annual reviews unless issues arise' },
    { step: 7, title: 'Ongoing support', description: 'Unlimited in-app messaging; telephone line (Mon–Fri, 9 a.m.–5 p.m.) and email within one business day' },
    { step: 8, title: 'Progress tracking', description: 'App dashboards plot pain, sleep and anxiety scores against dosage, empowering shared decision-making' }
  ];

  const prosAndCons = {
    strengths: [
      '£50 flat fee covers all consultations for 12 months—cheapest in UK',
      'Integrated CB1 Pharmacy means seamless same-day prescription routing',
      'App-based tracking, unlimited messaging and Google 4.8-star rating',
      'Free specialist consults for veterans and ex-emergency personnel',
      'Automatic refund if deemed ineligible'
    ],
    limitations: [
      'Up-front cost higher than Alternaleaf\'s £10 entry',
      'Smaller product formulary than open-access clinics; no vape carts',
      'Physical appointments limited to one Leicester site',
      'No in-house allied-health services (e.g., physiotherapy, CBT)',
      'Annual review still required; not as hands-off as Mamedica\'s 12-month-only model'
    ]
  };

  const handleBookConsultation = () => {
    window.open(clinicData.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {slug && ( // Only render MetaTags if slug is available
        <MetaTags
          title="CB1 Medical Review - UK's Most Affordable Medical Cannabis Clinic"
          description={generateClinicMetaDescription(cb1ClinicDataForMeta)}
          keywords={['CB1 Medical', 'medical cannabis clinic', 'UK cannabis clinic review', 'affordable medical cannabis', 'Leicester clinic']}
          type="Article"
          reviewData={{
            rating: 4.8,
            reviewCount: 550,
            bestRating: 5,
            worstRating: 1
          }}
          canonicalUrl={`https://comparetheleaf.co.uk/reviews/${slug}`}
        />
      )}

      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Reviews', path: '/reviews' },
          { label: 'CB1 Medical Review', path: '/reviews/cb1-medical-review' }
        ]}
      />

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/reviews')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Reviews
          </button>
        </div>
      </div>

      {/* Clinic Header */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Clinic Image */}
            <div className="lg:col-span-1">
              <div className="h-64 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">CB1</div>
                    <div className="text-lg opacity-90">Medical Cannabis Clinic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{clinicData.name}</h1>
                  <p className="text-lg text-gray-600 mb-4">UK's Most Affordable Medical Cannabis Clinic</p>
                  
                  <div className="flex items-center mb-2">
                    <StarRating value={Math.round(clinicData.rating)} size={20} />
                    <span className="text-lg font-semibold ml-2">{clinicData.rating}</span>
                    <span className="text-gray-600 ml-2">({clinicData.reviewCount}+ Google reviews)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{clinicData.location}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <Shield className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-green-700 font-medium">CQC Registered</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    £{clinicData.consultationFee}
                  </div>
                  <div className="text-sm text-gray-500">All consultations for 12 months</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${clinicData.phone}`}
                  className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
                <a
                  href={`mailto:${clinicData.email}`}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
                <a
                  href={clinicData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Introduction and Overview */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction and Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                CB1 Medical has branded itself the "UK's most affordable medical-cannabis clinic," charging a single £50 flat fee that covers every consultation for an entire year—with no hidden extras or subscription trap. By vertically integrating its own dispensing arm, CB1 Pharmacy, the clinic promises a friction-free patient journey from video appointment to next-day delivery, all inside one digital ecosystem.
              </p>
              <p className="mb-4">
                Holding an estimated 12.4 per cent share of UK clinic web traffic—third after Alternaleaf and Mamedica—CB1 Medical speaks to cost-conscious adults who still want predictable, full-service care. Its hybrid model adds a physical consulting room in Leicester for patients preferring face-to-face reviews, while everyone else can manage care through a dedicated smartphone app and encrypted video calls.
              </p>
              <p className="mb-4">
                This CB1 Medical Review evaluates services, pricing, patient experience, pharmacy integration and regulatory credentials. Our analysis finds a clinic that front-loads value—all consults for £50—yet may not satisfy patients needing intensive multidisciplinary support or the very lowest entry cost. Read on to decide whether CB1's flat-fee, vertically integrated approach aligns with your treatment goals.
              </p>
            </div>
          </div>

          {/* Services and Specialisations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services and Specialisations</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                CB1 Medical employs GMC-licensed consultants in pain medicine, neurology and psychiatry who conduct 30-minute video or in-person assessments. Core indications include chronic musculoskeletal and neuropathic pain, migraine, multiple-sclerosis spasticity, anxiety disorders (including PTSD), insomnia and neuro-developmental conditions—all highlighted in clinic and industry-council profiles.
              </p>
              <p className="mb-4">
                The clinical pathway begins with a five-question eligibility quiz, followed by a download link to the CB1 Medical app, where ID verification and records upload occur in minutes. After the initial consultation, patients receive a three-week follow-up, then shift to annual check-ups unless titration issues arise—striking a middle ground between Alternaleaf's unlimited reviews and Mamedica's once-yearly cadence. Unlimited asynchronous chat in the app lets patients request dose adjustments without extra fees.
              </p>
              <p className="mb-4">
                CB1 distinguishes itself with targeted access programmes: veterans and ex-emergency-service workers get their specialist consultations free of charge, lowering barriers for groups with higher PTSD prevalence. All patients can track symptom scores, side-effects and sleep metrics in the app and share data with their NHS GP (with consent) for integrated care.
              </p>
              <p className="mb-4">
                While CB1 doesn't provide in-house psychotherapy or physiotherapy, its consultants issue referral letters to community providers and liaise with GPs for blood tests or imaging. The result is an evidence-based, technology-forward service best suited to efficiency-minded adults who prefer a light-touch clinical schedule supported by robust digital tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Core Specialisations</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Chronic musculoskeletal and neuropathic pain</li>
                  <li>• Migraine and headache disorders</li>
                  <li>• Multiple sclerosis spasticity</li>
                  <li>• Anxiety disorders (including PTSD)</li>
                  <li>• Insomnia and sleep disorders</li>
                  <li>• Neuro-developmental conditions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Special Programmes</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Free consultations for veterans</li>
                  <li>• Ex-emergency service worker support</li>
                  <li>• NHS GP integration (with consent)</li>
                  <li>• App-based symptom tracking</li>
                  <li>• Unlimited messaging support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing and Cost Analysis */}
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
                  {pricingData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{item.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                First-year professional fees total just £50, matching Alternaleaf's £10+£10×4 monthly outlay after five months and beating every other pay-as-you-go clinic. Ongoing annual cost remains £50, on par with CB1's first year and identical to Alternaleaf's £120 yearly, Mamedica's £75 and Releaf's £480 subscription.
              </p>
              <p className="mb-4">
                Medication pricing mirrors wider market averages—flower generally £5–£7 per gram and balanced oils £75–£95 for 30 ml, subject to product chosen. Because prescriptions route directly to CB1 Pharmacy, patients avoid external pharmacy fees, and the clinic advertises reduced delivery costs compared with competitors.
              </p>
              <p className="mb-4">
                <strong>Bottom line:</strong> CB1 Medical offers the lowest all-inclusive consultation price in the UK, with no monthly commitments, making it an ideal testing ground for budget-minded newcomers and maintenance-phase patients alike.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">Cost Advantage</h3>
              </div>
              <p className="text-green-700">
                At £50 for unlimited consultations for 12 months, CB1 Medical offers exceptional value compared to traditional per-consultation pricing models used by other UK clinics.
              </p>
            </div>
          </div>

          {/* Patient Experience and Process */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Experience and Process</h2>
            
            <div className="space-y-6 mb-8">
              {processSteps.map((step, index) => (
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

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                With 4.8/5 from more than 550 Google reviews and a Care Quality Commission registration displayed prominently on its homepage, CB1 leverages social proof and regulatory transparency to build trust. Mystery-shopper calls found same-week appointment availability and pharmacy dispatch within 24 hours for in-stock products. Patients who cancel before eligibility confirmation receive an automatic refund, mitigating financial risk.
              </p>
              <p className="mb-4">
                The hybrid model's main limitation is geographic: in-person reviews are Leicester-only, so hands-on physical exams for complex cases may require local NHS referrals. Nonetheless, for most tech-savvy adults the journey feels quick, intuitive and low-stress, with the app acting as a patient passport from first click to refill.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">Same-week availability</div>
                <div className="text-sm text-blue-600">Appointments typically available within 7 days</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">24-hour dispatch</div>
                <div className="text-sm text-green-600">Pharmacy processes orders within 1 business day</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">App-based care</div>
                <div className="text-sm text-purple-600">Digital-first patient management system</div>
              </div>
            </div>
          </div>

          {/* Pros and Cons Analysis */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pros and Cons Analysis</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Strengths */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-700">Strengths</h3>
                </div>
                
                <ul className="space-y-3">
                  {prosAndCons.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mr-3">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-700">Limitations</h3>
                </div>
                
                <ul className="space-y-3">
                  {prosAndCons.limitations.map((limitation, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Competitive Analysis */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-2">Competitive Advantages</h4>
                <p className="text-blue-700 text-sm">
                  CB1 Medical's flat-fee simplicity and vertical supply chain outshine the pay-per-review unpredictability of Lyphe or Integro, while undercutting subscription pricing by Releaf. The app and refund policy further de-risk adoption for first-time patients.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-800 mb-2">Potential Drawbacks</h4>
                <p className="text-orange-700 text-sm">
                  Patients needing weekly titration guidance, advanced psychiatric input or multiprofessional pain clinics might prefer subscription clinics offering unlimited synchronous reviews or those with dedicated psychologists (e.g., Zerenia).
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">Suitability Snapshot</h4>
                <p className="text-green-700 text-sm">
                  <strong>Ideal for:</strong> budget-focused adults with chronic pain, anxiety or insomnia who are comfortable with digital health tools.<br/>
                  <strong>Less ideal for:</strong> patients seeking wide product choice, paediatric pathways or blended psychotherapy within the same organisation.
                </p>
              </div>
            </div>
          </div>

          {/* Pharmacy and Prescription Management */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pharmacy and Prescription Management</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                CB1 Pharmacy is a GPhC-registered dispensary created specifically to serve CB1 Medical patients, eliminating the need to forward paper scripts or chase third-party stock. Prescriptions transmit instantly from the electronic health-record system, allowing pharmacists to label and release medication the same day for orders confirmed before 3 p.m.
              </p>
              <p className="mb-4">
                Delivery options include Royal Mail Special Delivery (guaranteed by 1 p.m. next day) and a discounted private-courier service for high-value or temperature-sensitive parcels—part of the clinic's "reduced delivery costs" promise. Tracking links arrive via SMS and push notification inside the app.
              </p>
              <p className="mb-4">
                The formulary focuses on EU-GMP flower (balanced to high-THC), high-CBD and balanced oils, plus soft-gel capsules. Out-of-stock alerts trigger pharmacist contact with suggested alternatives, usually sourced within 48 hours through the clinic's import partners. Repeat prescriptions remain free; patients request them with one tap, and doctors approve electronically within 24 hours.
              </p>
              <p className="mb-4">
                By owning the entire prescription workflow, CB1 accelerates dispatch, reduces administrative errors and keeps total treatment cost predictably low.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-purple-800">Integrated Pharmacy Benefits</h3>
              </div>
              <ul className="space-y-2 text-purple-700">
                <li>• Same-day prescription processing</li>
                <li>• Reduced delivery costs</li>
                <li>• Real-time stock availability</li>
                <li>• One-tap repeat prescriptions</li>
                <li>• 24-hour electronic approvals</li>
              </ul>
            </div>
          </div>

          {/* Regulatory Compliance and Credentials */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Compliance and Credentials</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                CB1 Medical operates under full UK regulatory compliance with all necessary licenses and certifications for medical cannabis prescribing. All doctors are GMC-registered specialists with expertise in medical cannabis treatment.
              </p>
              <p className="mb-4">
                The clinic maintains high standards of patient care and safety, following all MHRA guidelines for medical cannabis treatment. Professional indemnity insurance and regulatory oversight ensure patient protection and treatment quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">CQC Registered</div>
                <div className="text-xs text-green-600">Care Quality Commission</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">GMC Licensed</div>
                <div className="text-xs text-blue-600">General Medical Council</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">Industry Council</div>
                <div className="text-xs text-purple-600">Cannabis Industry Council</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-orange-800">MHRA Licensed</div>
                <div className="text-xs text-orange-600">Wholesale Dealer Licence</div>
              </div>
            </div>
          </div>

          {/* Final Verdict and Recommendations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Verdict and Recommendations</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">8.5/10</div>
                <div className="text-lg text-gray-600 mb-4">Overall Score</div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 border border-green-200">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Highly Recommended</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                This CB1 Medical Review finds a clinic that delivers maximum consultation value for the lowest all-in fee in the UK, backed by a vertically integrated pharmacy and an intuitive mobile app. For a one-time £50 payment you receive unlimited consultations for 12 months, free repeat scripts and discounted delivery—making CB1 an excellent choice for cost-aware adults wanting straightforward access to medical cannabis.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Key Reasons to Choose CB1 Medical</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• One-year of care for £50—no hidden or monthly charges</li>
                  <li>• Integrated CB1 Pharmacy for rapid, hassle-free dispensing</li>
                  <li>• Veteran/emergency-services concessions and refund guarantee</li>
                </ul>
                
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Best suited for:</strong> adults with chronic pain, anxiety, insomnia or neuro-divergent conditions who prefer a digital-first experience and stable annual budgeting.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Consider Other Clinics If</h3>
                <p className="text-orange-700 mb-4">
                  Consider other clinics if you need extensive multidisciplinary support, a wider product formulary (e.g., vape cartridges) or physical reviews outside Leicester—alternatives like Releaf (concierge extras) or Cantourage (veterans' group therapies) may serve those needs better.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book Your £50 Consultation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your medical cannabis journey with CB1 Medical's affordable, comprehensive care model.
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
                onClick={() => navigate('/quiz')}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Take Our Clinic Quiz
              </button>
            </div>
            
            <div className="mt-6 text-sm text-blue-100">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-4 w-4 mr-2" />
                <span>Refund guaranteed if you're not eligible</span>
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
                  This review is for informational purposes only. Always consult with qualified healthcare professionals before making medical decisions. Pricing and service details are accurate as of February 2025 and may change without notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CB1MedicalReviewPage;