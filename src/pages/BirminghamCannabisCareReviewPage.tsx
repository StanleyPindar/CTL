import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Phone, Mail, Globe, ExternalLink, CheckCircle, AlertTriangle, Award, Shield, Calendar, Clock, CreditCard, Users, Target } from 'lucide-react';
import StarRating from '../components/common/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { generateClinicMetaDescription } from '../utils/metaDescriptionGenerator';
import MetaTags from '../components/MetaTags';

const BirminghamCannabisCareReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const clinicData = {
    name: 'Birmingham Cannabis Clinic',
    rating: 4.0,
    reviewCount: 180,
    consultationFee: 50,
    followUpFee: 75,
    website: 'https://birminghamcannabisclinic.com',
    phone: '0121 123 4567',
    email: 'info@birminghamcannabisclinic.com',
    location: 'Sutton Coldfield, Birmingham',
    established: 2024,
    cqcRegistered: true
  };

  // Prepare clinicData for generateClinicMetaDescription
  const bccClinicDataForMeta = {
    name: clinicData.name,
    rating: clinicData.rating,
    reviewCount: clinicData.reviewCount,
    consultationFee: clinicData.consultationFee,
    followUpFee: clinicData.followUpFee, // Use followUpFee as a proxy for ongoing cost if annual not available
    location: clinicData.location,
  };

  const pricingData = [
    { type: 'Sign-up (initial) consultation', amount: '£50', notes: 'Payable on booking' },
    { type: 'General/follow-up consultation', amount: '£75', notes: 'Every 3 months (minimum)' },
    { type: 'Repeat prescription', amount: 'Free', notes: 'Online request, clinician sign-off within 2 working days' },
    { type: 'Prescription fulfilment', amount: '£7–£12 courier charge', notes: 'Per dispatch - Pharmacy-dependent (Curaleaf® Pharmacy typical)' }
  ];

  const processSteps = [
    { step: 1, title: 'Eligibility check', description: 'Free online questionnaire or phone triage confirms diagnosis, previous treatments and absence of exclusion criteria (history of psychosis, uncontrolled cardiovascular disease).' },
    { step: 2, title: 'Record collection', description: 'Patients supply GP summary care records; the clinic can request these with consent, usually within two weeks.' },
    { step: 3, title: 'Sign-up consultation', description: 'Conducted in Sutton Coldfield in a private outpatient suite. Expect a full pain history, discussion of goals, informed-consent briefing and, if appropriate, first prescription submission to Curaleaf® Pharmacy. Average appointment length: 30–40 minutes.' },
    { step: 4, title: 'Start of treatment', description: 'Medication arrives via tracked courier (24–48 h). Patients receive a starter-pack email with dosage titration chart, vaporiser-use guide and MHRA Yellow Card reporting link.' },
    { step: 5, title: 'First follow-up (3 months)', description: 'Efficacy questionnaire (Brief Pain Inventory, EQ-5D) plus side-effect review. Data uploaded to Sapphire registry, enabling personalised benchmarking.' }
  ];

  const therapeuticPathways = [
    {
      pathway: 'Chronic & neuropathic pain',
      indications: 'Fibromyalgia, EDS, osteoarthritis',
      format: 'Balanced or THC-rich flower (7-9% CBD / 18-25% THC)'
    },
    {
      pathway: 'Cancer-related pain',
      indications: 'Chemotherapy side effects, tumor pain',
      format: 'THC-dominant preparations for severe pain'
    },
    {
      pathway: 'Endometriosis pain',
      indications: 'Pelvic pain, dysmenorrhea',
      format: 'Balanced oils with anti-inflammatory properties'
    }
  ];

  const prosAndCons = {
    strengths: [
      'Affordable entry point (£50 sign-up) compared with £99–£150 elsewhere',
      'Face-to-face consultations—rare outside London',
      'Partnership with Sapphire ensures robust governance and registry participation',
      'Free repeat prescriptions reduce hidden fees',
      'Integration with Curaleaf® Pharmacy for broad product range',
      'Data contribution to research enhances evidence base'
    ],
    limitations: [
      'Narrow eligibility (chronic-pain patients only) limits access for psychiatric / neurological indications',
      'Quarterly in-person reviews add travel/time costs',
      'No dedicated financial-assistance scheme beyond generic benefits-based discounts',
      'Smaller team means fewer weekly clinic sessions; wait times can reach 3–4 weeks',
      'Medication pricing identical to national average—no in-house dispensary discounts',
      'CQC overall rating pending; some patients may prefer fully rated clinics'
    ]
  };

  const supportFeatures = [
    'Nurse-led helpline (weekdays 9 am–5 pm) for dosing questions',
    'DVLA fitness-to-drive letters',
    'Links to local pain-management support groups',
    'Psychological therapies and physiotherapy referrals via The Vesey Hospital'
  ];

  const handleBookConsultation = () => {
    window.open(clinicData.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {slug && ( // Only render MetaTags if slug is available
        <MetaTags
          title="Birmingham Cannabis Clinic Review - West Midlands Face-to-Face Medical Cannabis Clinic"
          description={generateClinicMetaDescription(bccClinicDataForMeta)}
          keywords={['Birmingham Cannabis Clinic', 'medical cannabis clinic', 'UK cannabis clinic review', 'face-to-face medical cannabis', 'chronic pain clinic']}
          type="Article"
          reviewData={{
            rating: 4.0,
            reviewCount: 180,
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
          { label: 'Birmingham Cannabis Clinic Review', path: '/reviews/birmingham-cannabis-clinic-review' }
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
                    <div className="text-6xl font-bold mb-2">BCC</div>
                    <div className="text-lg opacity-90">Face-to-Face Cannabis Clinic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{clinicData.name}</h1>
                  <p className="text-lg text-gray-600 mb-4">West Midlands' Dedicated Face-to-Face Medical Cannabis Clinic</p>
                  
                  <div className="flex items-center mb-2">
                    <StarRating value={Math.round(clinicData.rating)} size={20} />
                    <span className="text-lg font-semibold ml-2">{clinicData.rating}</span>
                    <span className="text-gray-600 ml-2">({clinicData.reviewCount}+ reviews)</span>
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
                  <div className="text-sm text-gray-500">Sign-up consultation</div>
                  <div className="text-2xl font-bold text-green-600 mt-2">
                    £{clinicData.followUpFee}
                  </div>
                  <div className="text-sm text-gray-500">Follow-up consultations</div>
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
                Birmingham Cannabis Clinic has emerged as the West Midlands' dedicated face-to-face UK medical cannabis clinic for people living with persistent pain. Operating from The Vesey Private Hospital in Sutton Coldfield, the clinic partners with Sapphire Medical Clinics—the UK's longest-running medical-cannabis provider—to combine regional accessibility with the clinical governance of an established national network.
              </p>
              <p className="mb-4">
                Its primary value proposition is simple: affordable in-person specialist assessments (£50 sign-up) that feed data into the UK's largest medical-cannabis registry, giving patients evidence-based care while advancing national research.
              </p>
              <p className="mb-4">
                The clinic's model targets adults with chronic pain who have tried at least two first-line therapies without sufficient relief; indeed, current acceptance criteria state "patients with chronic pain only". By limiting scope, Birmingham Cannabis Clinic positions itself as a depth-over-breadth provider, offering consultants experienced in complex pain management rather than a broad "all conditions" roster.
              </p>
              <p className="mb-4">
                This Birmingham Cannabis Clinic Review examines the centre's services, pricing, patient journey, pharmacy integration, compliance credentials and overall value. Readers will come away with a balanced perspective on the clinic's strengths—affordability, in-person care, Sapphire affiliation—and its limitations, such as narrower eligibility and relatively frequent follow-ups. Ultimately, the goal is to help you determine whether Birmingham Cannabis Clinic is the right route to a medical marijuana prescription UK for your specific circumstances.
              </p>
            </div>
          </div>

          {/* Services and Specialisations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services and Specialisations</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Unlike larger multi-site operators that offer everything from neurology to psychiatry, Birmingham Cannabis Clinic focuses almost exclusively on chronic pain disorders—fibromyalgia, neuropathic pain, osteoarthritis, endometriosis and cancer-related pain are typical referral reasons. This tight clinical scope allows its consultants (all GMC-registered specialists) to maintain deep familiarity with analgesic cannabinoid therapies, dosing titration strategies and multimodal pain-management protocols.
              </p>
              <p className="mb-4">
                Initial eligibility screening—conducted by phone or secure online form—is free and checks that you have:
              </p>
              <ol className="mb-4">
                <li>A confirmed pain diagnosis, and</li>
                <li>Documented failure or intolerance of at least two conventional treatments (e.g., opioids, gabapentinoids).</li>
              </ol>
              <p className="mb-4">
                If eligible, the £50 new-patient consultation is conducted face-to-face at The Vesey Hospital. During this 30-minute session the clinician reviews medical records, explains potential cannabinoid options (THC-dominant, balanced or CBD-rich preparations), and sets measurable goals such as percentage pain-score reduction or sleep-quality improvement. Treatment plans follow National Institute for Health and Care Excellence (NICE) guidance on cannabis-based medicines and incorporate vapourised flower, oil or capsules depending on patient preference, co-morbidities and driving status.
              </p>
              <p className="mb-4">
                Follow-up consultations (£75) are generally required every three months to assess efficacy, side-effects and the need for dose adjustments; additional reviews may be necessary when changing products. All data are fed into Sapphire's real-world registry, contributing anonymised outcomes to peer-reviewed publications and enabling the clinic to benchmark its results against national averages.
              </p>
              <p className="mb-4">
                Support services include a nurse-led helpline (weekdays 9 am–5 pm) for dosing questions, DVLA fitness-to-drive letters, and links to local pain-management support groups. Psychological therapies and physiotherapy referrals can be arranged via The Vesey Hospital, offering a holistic pathway that aligns with best-practice multidisciplinary pain care.
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
          </div>

          {/* Pricing and Cost Analysis */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing and Cost Analysis</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
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
              <h3>First-year cost</h3>
              <p className="mb-4">
                Assuming four consultations (sign-up + three quarterly follow-ups) the first-year clinical spend totals £275; adding average courier fees (~£40) yields ≈£315. Medication costs vary widely (£5–£7 per gram flower; £90–£250 per 30 ml oil), so a conservative flower-based regimen of 30 g/month at £5/g equates to £1,800. The total first-year outlay is therefore around £2,115.
              </p>
              
              <h3>Long-term annual cost</h3>
              <p className="mb-4">
                In subsequent years, with four £75 consultations and identical medication needs, the clinic-related spend falls to £300, bringing the annual total to ≈£2,140—competitive against market leader Curaleaf's £10/month model (clinical £120) once medication is included, and markedly cheaper than premium packages such as Releaf + (£479 clinical fees).
              </p>
              
              <h3>Value assessment</h3>
              <p className="mb-4">
                Birmingham Cannabis Clinic sits in the "affordable face-to-face" tier—slightly above ultra-low-cost virtual-only providers like CB1 Medical (£50/year all-inclusive) but below subscription services charging £195–£495/month for bundled meds. For patients who prioritise in-person assessment and registry participation, the pricing represents solid value.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">Affordable Face-to-Face Care</h3>
              </div>
              <p className="text-green-700">
                At £315 for first-year clinic costs, Birmingham Cannabis Clinic offers the most affordable face-to-face medical cannabis consultations in the UK.
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
              <h3>Communication & support</h3>
              <p className="mb-4">
                Telephone lines are staffed weekdays; clinicians aim to return calls within one business day. An emergency on-call doctor is available for acute adverse reactions. The clinic also issues fit-to-work and travel letters for countries permitting CBPM import.
              </p>
              
              <p className="mb-4">
                Appointments can be booked online, by phone or via a GP referral letter. Rescheduling with ≥48 hours' notice is free; late cancellations incur a £25 fee. In-clinic accessibility features include step-free entry, hearing-loop systems and free on-site parking.
              </p>
              
              <p className="mb-4">
                Patient feedback gathered by MedBud rates the clinic "Good" for safety, caring and responsiveness, with overall CQC rating pending. Common compliments include the clarity of in-person consultations and the convenience of free repeat prescriptions; criticisms centre on limited appointment slots and the need to travel for reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">In-person consultations</div>
                <div className="text-sm text-blue-600">Face-to-face at The Vesey Hospital</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">Registry participation</div>
                <div className="text-sm text-green-600">Contributing to UK research</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">Sapphire partnership</div>
                <div className="text-sm text-purple-600">Established clinical governance</div>
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
                For patients prioritising hands-on assessments, transparent fees and evidence generation, Birmingham Cannabis Clinic offers a compelling proposition. Those seeking wider condition coverage, ultra-low virtual costs, or 24/7 telehealth may prefer Lyphe or CB1 Medical.
              </p>
            </div>
          </div>

          {/* Pharmacy and Prescription Management */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pharmacy and Prescription Management</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Prescriptions are electronically transmitted to Curaleaf® Pharmacy, a Rokshaw-owned MHRA-and GPhC-regulated facility with nationwide controlled-drug logistics. Product availability spans {'>'}200 flower cultivars and 50 oil formulations, ensuring clinicians can tailor THC:CBD ratios and terpene profiles.
              </p>
              
              <h4>Dispensing timeline:</h4>
              <ul className="mb-4">
                <li><strong>Prescription approval</strong> – same day (before 3 pm).</li>
                <li><strong>Dispatch</strong> – tracked courier, 24–48 h to West Midlands addresses.</li>
                <li><strong>Delivery charge</strong> – £7–£12 depending on weight and Saturday service.</li>
              </ul>
              
              <p className="mb-4">
                Repeat prescriptions are free; patients submit an online request form confirming unchanged dose. The clinician reviews registry data and issues repeats within two business days. Medication switches (strain change, new format) trigger a £75 consultation, aligning with MHRA best practice for safety monitoring.
              </p>
              
              <p className="mb-4">
                Cold-chain protocols are unnecessary for dried flower, but oil products are shipped in protective insulation to maintain cannabinoid integrity. Patients receive batch-specific certificates of analysis on request, and the pharmacy provides a drug-interaction helpline for concomitant medicines.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-purple-800">Curaleaf® Pharmacy Integration</h3>
              </div>
              <ul className="space-y-2 text-purple-700">
                <li>• {'>'}200 flower cultivars and 50 oil formulations</li>
                <li>• Same-day prescription approval</li>
                <li>• 24-48 hour delivery to West Midlands</li>
                <li>• Free repeat prescription processing</li>
                <li>• Drug-interaction helpline available</li>
              </ul>
            </div>
          </div>

          {/* Regulatory Compliance and Credentials */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Compliance and Credentials</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                All prescribers are GMC-registered specialists with extended Responsible Clinician (RC) status for Schedule 2 controlled drugs. The clinic operates under The Misuse of Drugs Regulations 2001 (as amended 2018), which allow specialist doctors to prescribe cannabis-based products for medicinal use (CBPMs).
              </p>
              <p className="mb-4">
                Public-facing content avoids direct-to-consumer promotion of specific medicines, adhering to MHRA Blue Guide rules that prohibit advertising prescription-only medicines.
              </p>
              <p className="mb-4">
                Facilities are CQC-registered; an initial inspection is scheduled for late 2025. The Vesey Private Hospital holds ISO 9001 accreditation for quality-management systems, and clinic SOPs include mandatory Yellow Card adverse-event reporting, DVLA fitness-to-drive protocols and secure data handling compliant with UK GDPR.
              </p>
              <p className="mb-4">
                Partnership with Sapphire adds another compliance layer: prescriptions contribute to the UK Medical Cannabis Registry overseen by Drug Science, enhancing post-marketing surveillance and aligning with NICE recommendations for real-world evidence collection.
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
                <div className="text-xs text-blue-600">Specialist Doctors</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">Sapphire Partnership</div>
                <div className="text-xs text-purple-600">Registry Participation</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-orange-800">ISO 9001</div>
                <div className="text-xs text-orange-600">Quality Management</div>
              </div>
            </div>
          </div>

          {/* Final Verdict and Recommendations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Verdict and Recommendations</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">8.0/10</div>
                <div className="text-lg text-gray-600 mb-4">Overall Score</div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 border border-green-200">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Recommended</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Birmingham Cannabis Clinic excels at delivering affordable, research-driven, in-person care for chronic-pain patients in the Midlands. Its £50 entry cost, free repeats and Sapphire affiliation set it apart from both high-fee concierge models and purely virtual low-cost clinics.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Best suited for:</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Adults with chronic pain who value face-to-face assessment</li>
                  <li>• Patients keen to contribute to national real-world evidence</li>
                  <li>• Individuals who live within reasonable travel distance of Sutton Coldfield</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">May not be ideal for:</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Patients with psychiatric, neurological or paediatric indications—consider Lyphe or Zerenia for broader scope</li>
                  <li>• Those requiring 24/7 virtual access or minimal travel—CB1 Medical's £50/year virtual model is cheaper</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-blue-800 mb-3">Why choose Birmingham Cannabis Clinic?</h4>
              <ol className="text-blue-700 space-y-1">
                <li>1. Lowest in-person sign-up fee in the UK</li>
                <li>2. Robust governance via Sapphire partnership and registry contribution</li>
                <li>3. Transparent, no-surprise pricing with free repeats</li>
              </ol>
              
              <h4 className="font-semibold text-blue-800 mb-3 mt-4">Next steps:</h4>
              <ol className="text-blue-700 space-y-1">
                <li>1. Complete the free eligibility checker (link via clinic website)</li>
                <li>2. Gather GP summary records</li>
                <li>3. Book the £50 sign-up consultation (use CompareTheLeaf tracking link to support our independent service)</li>
                <li>4. Compare other Midlands clinics with our clinic-matching quiz before making your final decision</li>
              </ol>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book Your £50 Face-to-Face Consultation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your medical cannabis journey with Birmingham Cannabis Clinic's affordable, in-person care model.
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
                <span>Lowest in-person consultation fees in the UK</span>
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
                  This Birmingham Cannabis Clinic Review is provided for informational purposes only. Always consult qualified healthcare professionals before initiating or changing any medication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirminghamCannabisCareReviewPage;