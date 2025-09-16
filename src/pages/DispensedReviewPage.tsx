import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Phone, Mail, Globe, ExternalLink, CheckCircle, AlertTriangle, Award, Shield, Calendar, Clock, CreditCard, Users, Target } from 'lucide-react';
import StarRating from '../components/common/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { generateClinicMetaDescription } from '../utils/metaDescriptionGenerator';
import MetaTags from '../components/MetaTags';

const DispensedReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const clinicData = {
    name: 'Dispensed',
    rating: 4.4,
    reviewCount: 125,
    consultationFee: 19,
    followUpFee: 19,
    website: 'https://dispensed.co.uk',
    phone: '0203 488 4200',
    email: 'info@dispensed.co.uk',
    location: 'Lancashire, UK (Online)',
    established: 2025,
    cqcRegistered: true
  };

  // Prepare clinicData for generateClinicMetaDescription
  const dispensedClinicDataForMeta = {
    name: clinicData.name,
    rating: clinicData.rating,
    reviewCount: clinicData.reviewCount,
    consultationFee: clinicData.consultationFee,
    location: clinicData.location,
    // No direct annual cost or monthly fee, so they will be omitted by the generator
  };

  const pricingData = [
    { type: 'Initial consultation', amount: '£19', notes: 'Credited to first prescription' },
    { type: 'Follow-up consultation', amount: '£19', notes: '28 days, then 3-monthly - Credited when you fill a script' },
    { type: 'Repeat prescription', amount: 'Free', notes: 'No admin charge' },
    { type: 'Delivery', amount: 'Free', notes: 'Tracked courier, 3-5 working days' },
    { type: 'Medication (guide)', amount: '£7–£9/g flower; oils from £80/10ml', notes: 'Depends on product & dose' }
  ];

  const processSteps = [
    { step: 1, title: 'Eligibility (10 mins)', description: 'Complete the web questionnaire; instant outcome. Ineligible patients pay nothing.' },
    { step: 2, title: 'Book & pay £19', description: 'Secure a video slot within 7 days; upload GP Summary Care Record (the clinic can request this with consent).' },
    { step: 3, title: 'Initial video consult (30 mins)', description: 'Doctor reviews history, sets goals, explains CBPM formats and legalities. Informed-consent form e-signed; script sent to a partner pharmacy the same day.' },
    { step: 4, title: 'Dispensing & delivery', description: 'Pharmacy verifies ID, processes payment and ships in discreet packaging. Typical door-step arrival: 3-5 working days. Delivery is free and tracked.' },
    { step: 5, title: 'First follow-up (Day 28)', description: '£19 fee paid up-front but credited against next fill. Clinician reviews symptom tracker (Brief Pain Inventory, GAD-7) and adjusts dose or strain if required.' }
  ];

  const prosAndCons = {
    strengths: [
      '£19 consults credited—clinic fees effectively £0',
      'Free tracked delivery nationwide',
      'Simple, transparent fee structure—no memberships',
      'Partner-pharmacy network gives broad product choice & live stock',
      'Same-day scripting, 3-5 day delivery',
      'CQC coverage via Urban Clinic, clear Terms & Conditions'
    ],
    limitations: [
      'Still a start-up: smaller specialist roster, occasional slot scarcity',
      'Flower price (£7–£9/g) higher than CB1\'s £5/g baseline',
      'Digital-only; no face-to-face assessments',
      'No in-house physiotherapy, psychology or group programmes',
      'Limited published outcomes; registry participation not yet confirmed',
      'Patients must pay £19 even if cancelled <24h'
    ]
  };

  const therapeuticPathways = [
    {
      pathway: 'Chronic & neuropathic pain',
      indications: 'Fibromyalgia, EDS, osteoarthritis',
      format: 'Balanced or THC-rich flower (7-9% CBD / 18-25% THC)'
    },
    {
      pathway: 'Anxiety / PTSD',
      indications: 'GAD, panic disorder, service-related PTSD',
      format: 'CBD-dominant or balanced oils'
    },
    {
      pathway: 'Sleep disturbance',
      indications: 'Insomnia secondary to pain or anxiety',
      format: 'Evening-dose balanced oil, titrated over 2 weeks'
    }
  ];

  const supportFeatures = [
    'LiveChat (09:00-19:00 Mon-Fri) staffed by nurse advisers',
    'Email/phone triage for dose questions within one business day',
    'Free clinician check-ins outside scheduled reviews if adverse effects occur'
  ];

  const handleBookConsultation = () => {
    window.open(clinicData.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {slug && ( // Only render MetaTags if slug is available
        <MetaTags
          title="Dispensed Review - UK's Credit-Back Medical Cannabis Clinic"
          description={generateClinicMetaDescription(dispensedClinicDataForMeta)}
          keywords={['Dispensed', 'medical cannabis clinic', 'UK cannabis clinic review', 'credit-back model', 'Lancashire clinic']}
          type="Article"
          reviewData={{
            rating: 4.4,
            reviewCount: 125,
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
          { label: 'Dispensed Review', path: '/reviews/dispensed-review' }
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
                    <div className="text-6xl font-bold mb-2">D</div>
                    <div className="text-lg opacity-90">Credit-Back Cannabis Clinic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{clinicData.name}</h1>
                  <p className="text-lg text-gray-600 mb-4">UK's Credit-Back Medical Cannabis Clinic</p>
                  
                  <div className="flex items-center mb-2">
                    <StarRating value={Math.round(clinicData.rating)} size={20} />
                    <span className="text-lg font-semibold ml-2">{clinicData.rating}</span>
                    <span className="text-gray-600 ml-2">({clinicData.reviewCount}+ Trustpilot reviews)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{clinicData.location}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <Shield className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-green-700 font-medium">CQC Registered via Urban Clinic</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    £{clinicData.consultationFee}
                  </div>
                  <div className="text-sm text-gray-500">Consultation (credited back)</div>
                  <div className="text-2xl font-bold text-green-600 mt-2">
                    £0
                  </div>
                  <div className="text-sm text-gray-500">Effective clinic fees</div>
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
                Dispensed has entered the UK medical-cannabis landscape with an ultra-lean promise: £19, risk-free consultations and nothing else to pay except for your medicine. Operating out of Lancashire and delivered entirely online, the platform connects patients to GMC-registered specialists via secure video, then routes scripts to a network of partner pharmacies for free, tracked delivery.
              </p>
              <p className="mb-4">
                What sets Dispensed apart is its credit-back model. The £19 fee for both the initial and each follow-up appointment is credited against your prescription spend—so for patients who move ahead with treatment, clinical care becomes effectively cost-neutral. With no annual memberships, hidden prescription charges or delivery fees, the clinic targets price-conscious, digitally savvy adults who have already tried mainstream therapies for chronic pain, anxiety-spectrum disorders or sleep disturbance without lasting relief.
              </p>
              <p className="mb-4">
                Still in the "soft-launch" phase (Q2 2025), Dispensed positions itself as the simplest UK medical cannabis clinic: a 10-minute eligibility form, a £19 booking, same-day scripting, and arrival of medication in three-to-five working days. This Dispensed Review dissects eight critical areas—services, costs, patient journey, pharmacy, compliance and more—to help you decide whether its stripped-back, credit-back model fits your needs for a medical marijuana prescription UK. Early signals point to unrivalled transparency on fees, but—as with any start-up—capacity, breadth of specialisms and published outcomes still have room to mature.
              </p>
            </div>
          </div>

          {/* Services and Specialisations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services and Specialisations</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Dispensed is a 100% tele-health service. After a quick online questionnaire screens diagnosis, prior treatments and red-flag contraindications, eligible patients pay a refundable £19 to secure a 30-minute video consultation. All clinicians are GMC specialists in either pain medicine, psychiatry or neurology and practise under Urban Clinic's CQC registration (Provider ID 1-10993862536).
              </p>
              <p className="mb-6">
                The platform publicly lists three core therapeutic pathways:
              </p>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pathway</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Indications</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First-line Format</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {therapeuticPathways.map((pathway, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pathway.pathway}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{pathway.indications}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{pathway.format}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                During the initial appointment the doctor reviews GP records, discusses product options (flower vs oil), explains DVLA driving rules and sets objective goals (e.g., ≥30% reduction in Brief Pain Inventory score). Follow-ups, also £19 and creditable, are booked at Day 28 and then every three months for ongoing pharmacovigilance.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Support Features</h3>
              <ul className="space-y-2 text-blue-700">
                {supportFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 mt-6">
              <p className="mb-4">
                Because Dispensed relies on a partner-pharmacy model rather than owning stock, clinicians can prescribe from a catalogue of &gt;200 EU-GMP cultivars and 50 oil formulations, checking live availability before completing the script. Allied therapies (physiotherapy, CBT) are not embedded, so patients needing multidisciplinary input will require external referrals.
              </p>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Notes</th>
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
              <h3>First-year scenario</h3>
              <p className="mb-4">
                Assume 30g flower per month at £8/g and four consultations (initial + three reviews):
              </p>
              <ul className="mb-4">
                <li><strong>Clinic/delivery spend:</strong> £76 in booking fees, but £76 credited, so net £0 if each script is filled.</li>
                <li><strong>Medication:</strong> £8 × 30g × 12 months = £2,880.</li>
              </ul>
              <p className="mb-4"><strong>Estimated first-year total ≈ £2,880.</strong></p>

              <h3>Long-term annual cost</h3>
              <p className="mb-4">
                In subsequent years, four reviews = £76 credited-back, delivery free; medication unchanged at £2,880. Total therefore remains ≈ £2,880—competitive with CB1 Medical (£1,970 but lower-grade £5/g flower) and under premium models like Releaf+ (£3,600+ at £10/g) when product quality is equalised.
              </p>

              <p className="mb-4">
                <strong>Value verdict:</strong> Dispensed offers zero effective clinic fees and free logistics. Patients pay only for medicine, making it one of the lowest all-in totals for those happy at the £7–£9/g price bracket.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">Zero Effective Clinic Fees</h3>
              </div>
              <p className="text-green-700">
                With the credit-back model, consultation fees are effectively £0 as they're credited against prescription costs, making this one of the most transparent pricing models in the UK.
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
              <h3>Ongoing support</h3>
              <ul className="mb-4">
                <li>LiveChat 09:00-19:00, phone and email response ≤24h</li>
                <li>Out-of-hours on-call doctor via partner clinic for adverse events</li>
                <li>Automated reminders cover DVLA driving rules when THC-dominant products are dispatched</li>
              </ul>

              <h3>Accessibility & convenience</h3>
              <p className="mb-4">
                Everything is digital—no travel costs, WCAG 2.2-AA portal with captions. Patients who prefer hands-on exams or multidisciplinary programmes will need to look elsewhere, but for tech-comfortable users the journey is fast, paper-light and cost-neutral on fees. Early Trustpilot feedback (rating 4.4/5) praises transparency and speed, though some users note "limited evening appointments" during launch phase.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">7-day booking</div>
                <div className="text-sm text-blue-600">Video slots within 7 days</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">Same-day scripting</div>
                <div className="text-sm text-green-600">Prescriptions sent same day</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">3-5 day delivery</div>
                <div className="text-sm text-purple-600">Free tracked courier</div>
              </div>
            </div>
          </div>

          {/* Pros and Cons Analysis */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pros and Cons Analysis</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pros */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-700">Pros</h3>
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

              {/* Cons */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mr-3">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-700">Cons</h3>
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

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-4">Suitability Assessment</h4>
              <p className="text-blue-700">
                <strong>Best for:</strong> budget-conscious, tech-savvy adults seeking straightforward access to a UK medical cannabis clinic with zero hidden costs. Look elsewhere if you need multidisciplinary care, ultra-low-cost flower, or in-person reassurance.
              </p>
            </div>
          </div>

          {/* Pharmacy and Prescription Management */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pharmacy and Prescription Management</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Dispensed scripts are fulfilled by a rotating panel of partner pharmacies holding MHRA and GPhC licences; Terms define these as independent third parties bound by their own sale conditions. Clinicians can check live stock before finalising the prescription to minimise "out-of-stock" disappointments.
              </p>
              
              <ul className="mb-4">
                <li><strong>Dispatch:</strong> same day if payment, ID and address verification completed by 15:00.</li>
                <li><strong>Delivery:</strong> free, tracked courier; patient receives tracking link and SMS updates. Typical timeline 3–5 working days.</li>
                <li><strong>Returns/recalls:</strong> unopened packs can be returned within 14 days; MHRA recall alerts trigger portal notifications.</li>
                <li><strong>Repeat scripts:</strong> requested via one-click portal; clinician approval within 24h; no admin fee. Dose or strain changes require the standard £19 review (again credit-back on fill).</li>
              </ul>
              
              <p className="mb-4">
                Product range spans EU-GMP indoor, greenhouse and balanced strains, plus oils from £80/10ml. Each batch ships with digital CoA, supporting DVLA and workplace disclosures. Overall, the pharmacy pathway matches best-practice standards while reinforcing Dispensed's "no extra fees" value proposition.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-purple-800">Partner Pharmacy Network Benefits</h3>
              </div>
              <ul className="space-y-2 text-purple-700">
                <li>• &gt;200 EU-GMP cultivars and 50 oil formulations</li>
                <li>• Live stock checking before prescription</li>
                <li>• Same-day dispatch for orders before 3pm</li>
                <li>• Free tracked delivery nationwide</li>
                <li>• Digital Certificate of Analysis with every batch</li>
              </ul>
            </div>
          </div>

          {/* Regulatory Compliance and Credentials */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Compliance and Credentials</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Dispensed is the trading name of Plantmed Clinic UK Ltd, operating under the clinical governance of SJLD Ltd / Urban Clinic, which is CQC-registered (Provider ID 1-10993862536). All prescribers are GMC-registered specialists with Schedule 2 controlled-drug authority.
              </p>
              <p className="mb-4">
                Marketing copy steers clear of product promotion, focusing on service descriptions, in line with MHRA Blue Guide rules on advertising prescription-only medicines. SOPs—summarised in the Terms—reference the Misuse of Drugs Regulations 2001 and the Human Medicines Regulations 2012 for controlled-drug handling, witnessed destruction and Yellow Card pharmacovigilance.
              </p>
              <p className="mb-4">
                Data security meets UK GDPR: the site uses TLS encryption and multi-factor authentication for the portal (verified in Privacy Policy). Video consultations occur on an NHS-approved tele-platform. Internal audits and annual clinician revalidation underpin early-stage but solid governance. A full standalone CQC inspection of Dispensed itself is anticipated in 2026; until then, compliance rides on Urban Clinic's licence—adequate, though some patients may prefer clinics with an existing public rating.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">CQC Registered</div>
                <div className="text-xs text-green-600">Via Urban Clinic</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">GMC Licensed</div>
                <div className="text-xs text-blue-600">Specialist Doctors</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">GDPR Compliant</div>
                <div className="text-xs text-purple-600">Data Security</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-orange-800">MHRA Compliant</div>
                <div className="text-xs text-orange-600">Medicines Regulation</div>
              </div>
            </div>
          </div>

          {/* Final Verdict and Recommendations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Verdict and Recommendations</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">8.2/10</div>
                <div className="text-lg text-gray-600 mb-4">Overall Score</div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 border border-green-200">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Recommended</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Overall rating: 4.1/5 – Dispensed delivers the UK market's cleanest fee model: £19 consultations that vanish into your medicine bill, plus free delivery. For patients on 30g/month flower or comparable oil dosing, the total yearly outlay is broadly in line with rivals—yet every penny goes on product, not admin. The trade-off is a lean, digital-only ecosystem still scaling its consultant pool and outcome database.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Choose Dispensed if you:</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Want predictable, fee-free clinical care once treatment begins</li>
                  <li>• Are comfortable with video-only appointments and self-managed symptom tracking</li>
                  <li>• Prefer freedom from lock-in subscriptions or annual memberships</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Consider alternatives if you:</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Need face-to-face exams, physiotherapy or psychological services (Birmingham Cannabis Clinic, Integro)</li>
                  <li>• Require lower-priced flower (£5/g tiers at CB1 Medical)</li>
                  <li>• Value a long-established CQC rating today (Curaleaf, Lyphe)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-blue-800 mb-3">Next Steps</h4>
              <ol className="text-blue-700 space-y-1">
                <li>1. Complete Dispensed's online eligibility checker</li>
                <li>2. If prompted, upload your GP Summary Care Record or authorise clinic retrieval</li>
                <li>3. Pay the £19 booking fee, attend your video consult and—if approved—redeem the credit against your first prescription</li>
                <li>4. Compare Dispensed with at least two other clinics using our clinic-matching quiz before final decision</li>
              </ol>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book Your £19 Consultation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your medical cannabis journey with Dispensed's transparent, credit-back model.
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
                <span>£19 consultation fee credited back to your prescription</span>
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
                  This Dispensed Review is for informational purposes only. Always consult qualified healthcare professionals before making medical decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispensedReviewPage;