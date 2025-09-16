import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Phone, Mail, Globe, ExternalLink, CheckCircle, AlertTriangle, Award, Shield, Calendar, Clock, CreditCard, Users, Target } from 'lucide-react';
import StarRating from '../components/common/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { generateClinicMetaDescription } from '../utils/metaDescriptionGenerator';
import MetaTags from '../components/MetaTags';

const ReleafReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const clinicData = {
    name: 'Releaf',
    rating: 4.9,
    reviewCount: 2100,
    consultationFee: 99.99,
    monthlyFee: 39.99,
    website: 'https://releaf.co.uk',
    phone: '0203 488 4200',
    email: 'hello@releaf.co.uk',
    location: 'UK Wide (Online)',
    established: 2019,
    cqcRegistered: true
  };

  // Prepare clinicData for generateClinicMetaDescription
  const releafClinicDataForMeta = {
    name: clinicData.name,
    rating: clinicData.rating,
    reviewCount: clinicData.reviewCount,
    consultationFee: clinicData.consultationFee,
    monthlyFee: clinicData.monthlyFee,
    location: clinicData.location,
  };

  const pricingData = [
    { type: 'Initial video consultation', amount: '£99.99', notes: 'One-time fee', included: 'N/A' },
    { type: 'Releaf+ monthly subscription', amount: '£39.99', notes: 'Follow-ups, prescriptions, delivery', included: '✓' },
    { type: 'Follow-up consultation (pay-as-you-go)', amount: '£69.99', notes: 'If not on subscription', included: 'N/A' },
    { type: 'Repeat prescription (outside Releaf+)', amount: '£19.99', notes: 'Per prescription', included: 'N/A' },
    { type: 'Delivery fee (outside Releaf+)', amount: '£4.99', notes: 'Per delivery', included: 'N/A' }
  ];

  const processSteps = [
    { step: 1, title: 'Eligibility & records upload', description: 'Complete a five-minute questionnaire and upload GP summary or specialist letters via the encrypted portal' },
    { step: 2, title: 'Clinical triage', description: 'Releaf nurses screen records within 72 hours. If red flags emerge, your booking is declined and the £99.99 is refunded automatically' },
    { step: 3, title: 'Consultation booking', description: 'Choose a same-week video slot through the Patient Portal; evening and Saturday times available' },
    { step: 4, title: 'Video assessment (30 min)', description: 'GMC specialist reviews history, sets goals and, if appropriate, issues a controlled-drug e-script' },
    { step: 5, title: 'Dispensing & payment', description: 'Scripts route to Releaf\'s in-house dispensary. Subscription members pay only for medication; non-members also pay the £19.99 dispensing fee' },
    { step: 6, title: 'Delivery', description: 'Royal Mail Special Delivery or DPD courier arrives in 2-4 working days; signature required. Tracking links sent via SMS/email' },
    { step: 7, title: 'Follow-up & titration', description: 'Unlimited 15-minute reviews (or secure messaging) through Releaf+; PROMs every 90 days inform dose tweaks' },
    { step: 8, title: 'Ongoing support', description: 'Live-chat nurses (9 a.m.–5 p.m.), monthly webinars and a stock-alert system for strain substitutions' }
  ];

  const prosAndCons = {
    strengths: [
      'All-inclusive Releaf+ bundle (follow-ups, prescriptions, delivery)',
      '100% money-back guarantee for ineligible patients',
      'UK-grown, pharmaceutical-grade cannabis supply reduces import delays',
      'Physical Medical Cannabis Card aids travel and policing encounters',
      'Concierge support with rapid chat response and educational hub'
    ],
    limitations: [
      'Highest annual professional-fee cost in the market',
      'Subscription model means savings evaporate if cancelled',
      'No physical clinic locations for hands-on exams',
      'Smaller medication formulary than "open" clinics: limited vapes, no flavoured oils',
      'Complex conditions may still need external multidisciplinary care'
    ]
  };

  const uniqueFeatures = [
    {
      title: 'Medical Cannabis Card',
      description: 'A photo ID card validating prescription status to employers, border agents and police'
    },
    {
      title: 'Starter Kit',
      description: 'Discounted Omura dry-herb vaporiser bundle for first-time flower patients'
    },
    {
      title: 'Educational Hub',
      description: 'Clinically edited articles and webinars spanning dosage guidance, travel rules and condition-specific FAQs'
    },
    {
      title: 'Money-back guarantee',
      description: 'Full refund if deemed unsuitable for cannabis therapy'
    }
  ];

  const handleBookConsultation = () => {
    window.open(clinicData.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {slug && ( // Only render MetaTags if slug is available
        <MetaTags
          title="Releaf Review - UK's Premium Medical Cannabis Clinic"
          description={generateClinicMetaDescription(releafClinicDataForMeta)}
          keywords={['Releaf', 'medical cannabis clinic', 'UK cannabis clinic review', 'premium medical cannabis', 'subscription model']}
          type="Article"
          reviewData={{
            rating: 4.9,
            reviewCount: 2100,
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
          { label: 'Releaf Review', path: '/reviews/releaf-review' }
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
              <div className="h-64 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">R</div>
                    <div className="text-lg opacity-90">Premium Cannabis Clinic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{clinicData.name}</h1>
                  <p className="text-lg text-gray-600 mb-4">UK's Premium Medical Cannabis Clinic</p>
                  
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
                  <div className="text-sm text-gray-500">Initial consultation</div>
                  <div className="text-2xl font-bold text-green-600 mt-2">
                    £{clinicData.monthlyFee}/mo
                  </div>
                  <div className="text-sm text-gray-500">Releaf+ subscription</div>
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
                Releaf has carved out a premium, all-inclusive niche in the UK medical-cannabis arena by bundling every clinical touch-point—follow-ups, prescriptions, dispensing and tracked delivery—into a single Releaf+ subscription at £39.99 per month, after a £99.99 initial video consultation. Patients judged ineligible receive an automatic refund under the clinic's headline 100 per cent money-back guarantee.
              </p>
              <p className="mb-4">
                Market positioning is distinctly upscale: Releaf markets itself as the "UK's highest-rated cannabis clinic" and reports serving more than 85,000 patients via a slick digital portal that issues physical Medical Cannabis Cards for proof-of-prescription when travelling or interacting with law-enforcement. A strategic partnership with Wiltshire-based Glass Pharms allows Releaf to dispense UK-grown, pharmaceutical-grade flower—a first for domestic supply and a differentiator for patients worried about import delays.
              </p>
              <p className="mb-4">
                This Releaf Review evaluates the clinic's service offering, pricing, patient journey, regulatory credentials and overall value proposition. Our analysis finds a subscription model that prioritises predictability and concierge-level support, albeit at almost four times the annual consultation cost of value players such as Alternaleaf. The review will help you decide whether Releaf's premium, guarantee-backed service justifies its price tag for your particular treatment goals.
              </p>
            </div>
          </div>

          {/* Services and Specialisations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services and Specialisations</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Releaf delivers its care entirely online through GMC-registered specialists drawn from pain medicine, neurology, psychiatry and general medicine. Consultations cover chronic and neuropathic pain, multiple sclerosis–related spasticity, refractory epilepsy syndromes, chemotherapy-induced nausea, anxiety disorders, PTSD, insomnia and neuro-developmental conditions.
              </p>
              <p className="mb-4">
                The 30-minute initial consultation explores medical history, treatment failures and contraindications. Should you meet UK prescribing criteria, the doctor may recommend full-spectrum flower, balanced or high-CBD oils, or Releaf-branded soft-gel capsules. A "start-low, go-slow" titration plan is monitored through quarterly PROMs and unlimited follow-up calls—both included in the Releaf+ fee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Unique Programme Elements</h3>
                <ul className="space-y-3">
                  {uniqueFeatures.map((feature, index) => (
                    <li key={index}>
                      <div className="font-medium text-blue-800">{feature.title}</div>
                      <div className="text-sm text-blue-700">{feature.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Core Specialisations</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Chronic and neuropathic pain</li>
                  <li>• Multiple sclerosis spasticity</li>
                  <li>• Refractory epilepsy syndromes</li>
                  <li>• Chemotherapy-induced nausea</li>
                  <li>• Anxiety disorders and PTSD</li>
                  <li>• Insomnia and sleep disorders</li>
                  <li>• Neuro-developmental conditions</li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 mt-6">
              <p className="mb-4">
                While Releaf does not offer in-house psychotherapy or physiotherapy, doctors routinely liaise with NHS GPs (with consent) to integrate imaging, blood tests and co-medication reviews. The clinic's dedicated compliance team also helps patients secure home-office export licences for travel, a service rarely seen elsewhere. Overall, Releaf's service menu is comprehensive yet streamlined, targeting patients who value concierge-style attention over bare-bones affordability.
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Included in Releaf+?</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pricingData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{item.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.included}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                First-year outlay for a typical Releaf+ member: £99.99 + (12 × £39.99) = £579.87. However, Releaf advertises an "average £87 monthly saving" because subscription members benefit from discounted medication prices—flower from £7.99/g and 30ml oils from £134.99.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-blue-800 mb-3">Comparative consultation costs (first-year):</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Alternaleaf – £120 (flat)</li>
                  <li>• Mamedica – £150</li>
                  <li>• CB1 Medical – £120</li>
                  <li>• Releaf – £579.87 (with Releaf+)</li>
                </ul>
              </div>
              
              <p className="mb-4">
                While Releaf is the most expensive clinic for professional fees, patients who require frequent dose adjustments, value free tracked delivery and plan to consume higher-than-average quantities may offset part of the premium through medication discounts and inclusive services. The 14-day money-back guarantee further de-risks the upfront £99.99 spend for uncertain first-timers.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">Premium Value Proposition</h3>
              </div>
              <p className="text-green-700">
                At £579.87 for the first year, Releaf offers premium all-inclusive service with concierge-level support, though this comes at a significant cost premium compared to other UK clinics.
              </p>
            </div>
          </div>

          {/* Patient Experience and Process */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Experience and Process</h2>
            
            <div className="space-y-6 mb-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
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
                Our mystery-shopper tests found portal chat replies within four working hours and first available appointments within five days, on par with sector leaders. The money-back guarantee and physical cannabis card add peace of mind, though some users may find the higher upfront cost a psychological barrier. Importantly, patients who cancel the subscription revert to pay-as-you-go pricing, so continued savings require ongoing membership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">Same-week availability</div>
                <div className="text-sm text-blue-600">Appointments typically available within 5 days</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">4-hour chat response</div>
                <div className="text-sm text-green-600">Portal chat replies within 4 working hours</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">85,000+ patients</div>
                <div className="text-sm text-purple-600">Served via digital portal</div>
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
                  Concierge-level inclusions plus a unique domestic supply chain and refund guarantee position Releaf as the "premium-peace-of-mind" option in a crowded field.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-800 mb-2">Potential Drawbacks</h4>
                <p className="text-orange-700 text-sm">
                  Cost-sensitive patients—or those needing only sporadic follow-ups—may find Mamedica or Integro significantly cheaper. Similarly, veterans seeking PTSD group programmes could lean toward Cantourage.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">Suitability Considerations</h4>
                <p className="text-green-700 text-sm">
                  <strong>Ideal for:</strong> patients who prioritise hassle-free logistics, frequent dose adjustments, and guaranteed refunds if unsuitable.<br/>
                  <strong>Less ideal for:</strong> budget-conscious users, or individuals wanting in-person assessments, vape cartridges, or broad formulary access.
                </p>
              </div>
            </div>
          </div>

          {/* Pharmacy and Prescription Management */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pharmacy and Prescription Management</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Releaf owns and operates a CQC-registered dispensary, allowing direct receipt of electronic prescriptions and same-day dispatch on in-stock items. Integration means patients never forward paper scripts, avoiding a common pain-point.
              </p>
              <p className="mb-4">
                Delivery partners include Royal Mail Special Delivery, DPD and UPS fallback services, all temperature-controlled and trackable. Standard delivery is free for Releaf+ members and typically reaches patients within 2–4 working days; exceptional delays (5–7 days) trigger proactive customer-service updates.
              </p>
              <p className="mb-4">
                Stock comprises EU-GMP-certified flower (balanced to high-THC), MCT-based oils and CBD-dominant formulations. The Glass Pharms partnership ensures a reliable stream of domestically cultivated strains, which Releaf claims shortens lead times and supports environmental sustainability.
              </p>
              <p className="mb-4">
                Repeat prescriptions inside Releaf+ cost nothing; outside the plan, a £19.99 fee applies. All medications ship in unbranded, tamper-evident packaging, and patients receive SMS tracking and signature-on-delivery for controlled-drug compliance. The seamless pharmacy loop underpins Releaf's reputation for predictable, premium logistics.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-purple-800">UK-Grown Cannabis Partnership</h3>
              </div>
              <p className="text-purple-700">
                Strategic partnership with Glass Pharms provides UK-grown, pharmaceutical-grade flower - a first for domestic supply and reduces import delays.
              </p>
            </div>
          </div>

          {/* Regulatory Compliance and Credentials */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Compliance and Credentials</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Releaf operates under full UK regulatory compliance with all necessary licenses and certifications for medical cannabis prescribing. All doctors are GMC-registered specialists with expertise in medical cannabis treatment.
              </p>
              <p className="mb-4">
                The clinic maintains high standards of patient care and safety, following all MHRA guidelines for medical cannabis treatment. Professional indemnity insurance and regulatory oversight ensure patient protection and treatment quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">CQC Regulated</div>
                <div className="text-xs text-green-600">Care Quality Commission</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">GMC Licensed</div>
                <div className="text-xs text-blue-600">General Medical Council</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">ISO 27001</div>
                <div className="text-xs text-purple-600">Data Security Compliant</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-orange-800">MHRA Reporting</div>
                <div className="text-xs text-orange-600">Yellow Card Participation</div>
              </div>
            </div>
          </div>

          {/* Final Verdict and Recommendations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Verdict and Recommendations</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">9.2/10</div>
                <div className="text-lg text-gray-600 mb-4">Overall Score</div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 border border-green-200">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Highly Recommended</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                This Releaf Review concludes that the clinic delivers concierge-grade service, robust regulatory safeguards and the UK's first domestic cannabis supply line, but at a premium price. The Releaf+ subscription shines for patients who anticipate frequent follow-ups, appreciate bundled delivery and value the peace of mind of a refund guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Key Reasons to Choose Releaf</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• All-inclusive £39.99 monthly plan covering every clinic touch-point</li>
                  <li>• UK-grown cannabis flower and reliable 2–4-day delivery</li>
                  <li>• Money-back guarantee if deemed clinically unsuitable</li>
                </ul>
                
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Best suited for:</strong> adults managing chronic pain, MS or complex neurological disorders who need iterative titration and prefer a "white-glove" digital experience.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Consider Other Clinics If</h3>
                <p className="text-orange-700 mb-4">
                  Consider other clinics if you are highly price-sensitive, require face-to-face assessment, or want maximum formulary flexibility (Alternaleaf and CB1 Medical offer broader product menus at lower fees).
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book Your Premium Consultation?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Start your medical cannabis journey with Releaf's premium, all-inclusive care model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookConsultation}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book £99.99 Consultation
                <ExternalLink className="h-4 w-4 ml-2" />
              </button>
              <button
                onClick={() => navigate('/quiz')}
                className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
              >
                Take Our Clinic Quiz
              </button>
            </div>
            
            <div className="mt-6 text-sm text-green-100">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-4 w-4 mr-2" />
                <span>100% money-back guarantee if you're not eligible</span>
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
                  This review is for informational purposes only. Always consult with qualified healthcare professionals before making medical decisions. Pricing and service details are accurate as of June 2025 and may change without notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleafReviewPage;