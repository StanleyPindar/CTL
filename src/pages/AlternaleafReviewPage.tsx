import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Phone, Mail, Globe, ExternalLink, CheckCircle, AlertTriangle, Award, Shield, Calendar, Clock, CreditCard, Users, Target } from 'lucide-react';
import StarRating from '../components/common/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { generateClinicMetaDescription } from '../utils/metaDescriptionGenerator';
import MetaTags from '../components/MetaTags';

const AlternaleafReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const clinicData = {
    name: 'Alternaleaf',
    rating: 4.6,
    reviewCount: 892,
    consultationFee: 10,
    monthlyFee: 10,
    website: 'https://alternaleaf.com',
    phone: '0203 488 4200',
    email: 'hello@alternaleaf.com',
    location: 'UK Wide (Online)',
    established: 2021,
    cqcRegistered: true
  };

  // Prepare clinicData for generateClinicMetaDescription
  const alternaleafClinicDataForMeta = {
    name: clinicData.name,
    rating: clinicData.rating,
    reviewCount: clinicData.reviewCount,
    consultationFee: clinicData.consultationFee,
    monthlyFee: clinicData.monthlyFee,
    location: clinicData.location,
  };

  const pricingData = [
    { type: 'Initial video consultation', amount: '£10', notes: 'One-time fee' },
    { type: 'Monthly subscription (includes unlimited follow-ups)', amount: '£10', notes: 'Per month' },
    { type: 'Repeat prescription issuance', amount: 'Included', notes: 'Free with subscription' },
    { type: 'Annual platform fee', amount: '£0', notes: 'No additional fees' }
  ];

  const processSteps = [
    { step: 1, title: 'Online eligibility screener', description: 'Patients complete a two-minute questionnaire covering diagnosis, previous treatments and contraindications' },
    { step: 2, title: 'Account creation & ID verification', description: 'A secure portal accepts driving licence, passport or NHS login details' },
    { step: 3, title: '£10 booking', description: 'Choose a same-week video slot (weekday evenings and Saturday mornings available)' },
    { step: 4, title: 'Initial consultation (30 min video)', description: 'The specialist reviews medical history, discusses goals and, if appropriate, issues a prescription' },
    { step: 5, title: 'Dispensing', description: 'Electronic prescription moves directly to Montu Pharmacy; patients pay for medication via the portal and choose next-day courier or Royal Mail Special Delivery (tracked, £4.99 standard)' },
    { step: 6, title: 'Follow-up & dose optimisation', description: 'Unlimited 15-minute video or asynchronous messaging appointments are included in the £10 monthly fee' },
    { step: 7, title: 'Ongoing monitoring', description: 'Patients complete validated PROMs (e.g., EQ-5D-5L, GAD-7) every 90 days; results feed into dose adjustments' },
    { step: 8, title: 'Community support', description: 'Quarterly webinars and peer-led Q&A sessions foster shared learning' }
  ];

  const prosAndCons = {
    strengths: [
      'Industry-low £10 entry cost and £10/month subscription',
      'Unlimited follow-ups and free repeat prescriptions',
      'Integrated Montu Pharmacy for seamless same-day dispensing',
      'Strong appointment availability, including Saturdays',
      'Clear, jargon-free patient education resources'
    ],
    limitations: [
      '100% remote—no option for physical examinations',
      'Limited multidisciplinary services (no in-house psychiatry or physiotherapy)',
      'Australian heritage may raise supply-chain-origin questions for some UK patients',
      'Medication choice narrower than at "open formulary" clinics',
      'Currently no dedicated paediatric pathway'
    ]
  };

  const uniqueFeatures = [
    {
      title: 'Lowest UK Pricing',
      description: '£10 initial consultation and £10 monthly subscription - cheapest in the UK market'
    },
    {
      title: 'Unlimited Follow-ups',
      description: 'All follow-up consultations included in monthly subscription fee'
    },
    {
      title: 'Same-week Appointments',
      description: '92% same-week availability including Saturday morning slots'
    },
    {
      title: 'Integrated Pharmacy',
      description: 'Montu Pharmacy provides same-day prescription processing and next-day delivery'
    }
  ];

  const handleBookConsultation = () => {
    window.open(clinicData.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {slug && ( // Only render MetaTags if slug is available
        <MetaTags
          title="Alternaleaf Review - UK's Most Affordable Medical Cannabis Clinic"
          description={generateClinicMetaDescription(alternaleafClinicDataForMeta)}
          keywords={['Alternaleaf', 'medical cannabis clinic', 'UK cannabis clinic review', 'affordable medical cannabis', 'subscription model']}
          type="Article"
          reviewData={{
            rating: 4.6,
            reviewCount: 892,
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
          { label: 'Alternaleaf Review', path: '/reviews/alternaleaf-review' }
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
                    <div className="text-6xl font-bold mb-2">A</div>
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
                  <div className="text-sm text-gray-500">Monthly subscription</div>
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
                Alternaleaf has rapidly positioned itself as a front-runner in the UK medical-cannabis landscape by marrying Australian telehealth know-how with a no-nonsense subscription model that costs patients just £10 a month. The clinic's headline promise is simple yet powerful: no GP referral needed, an initial video consultation for £10, and ongoing access to specialist doctors for the price of a streaming subscription. By stripping out high up-front fees and shifting to a low, flat monthly charge, Alternaleaf appeals squarely to convenience-focused patients who want predictable costs and hassle-free access to treatment.
              </p>
              <p className="mb-4">
                With a 25 per cent share of all UK medical-cannabis clinic web traffic - making it the market leader - Alternaleaf serves a broad demographic but is particularly attractive to working adults managing chronic pain, anxiety, insomnia and neurodivergent conditions who value speed, clarity and digital-first care. The clinic leverages its parent company Montu Group's experience running large telehealth operations in Australia to deliver streamlined video appointments, in-house prescription management and next-day medication delivery through Montu Pharmacy.
              </p>
              <p className="mb-4">
                This Alternaleaf Review examines the clinic's services, pricing, patient journey, regulatory credentials and overall value proposition. Our analysis finds a service that excels at affordability and access, but one that may not suit patients seeking extensive multidisciplinary support or face-to-face care. Read on to decide whether Alternaleaf's minimalist, subscription-driven approach aligns with your treatment goals.
              </p>
            </div>
          </div>

          {/* Services and Specialisations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services and Specialisations</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Alternaleaf's clinical model is intentionally focused, offering online appointments with GMC-registered doctors who hold specialist registration or equivalent cannabis-medicine credentials. Consultations typically explore evidence-based cannabis therapies for chronic pain (including musculoskeletal, neuropathic and endometriosis-related pain), anxiety disorders, post-traumatic stress disorder, insomnia, migraine, and symptoms linked to ADHD or autism spectrum conditions.
              </p>
              <p className="mb-4">
                During the 30-minute initial video call, clinicians take a comprehensive history, review previous therapies and determine eligibility under current UK guidelines. Where clinically appropriate, they issue a controlled-drug prescription for full-spectrum flower, balanced or high-CBD oils, or novel oral formulations. Dosage titration is closely monitored via an online portal, with free follow-up appointments available as needed—an unusual and patient-friendly benefit compared with competitors who charge £29–£75 for each review.
              </p>
              <p className="mb-4">
                The medical team favours a "start-low, go-slow" protocol aligned with MHRA best practice, combining pharmacovigilance questionnaires with secure messaging to adjust treatment quickly. Beyond core prescribing, Alternaleaf offers condition-specific patient education modules, downloadable treatment diaries and access to peer-support webinars hosted by allied-health practitioners in Australia and the UK. Although it does not currently provide in-house physiotherapy, psychotherapy or specialist nursing, clinicians routinely signpost patients to trusted partners when multidisciplinary input is required.
              </p>
              <p className="mb-4">
                Alternaleaf's tight integration with Montu Pharmacy allows same-day electronic transfer of prescriptions, reducing administrative burden and pharmacy queries for patients. The result is a service package that covers prescribing, dispensing and after-care within a single digital ecosystem—well-suited to tech-savvy patients who prefer an app-based experience over bricks-and-mortar clinics.
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
                  <li>• Chronic pain (musculoskeletal, neuropathic, endometriosis)</li>
                  <li>• Anxiety disorders and PTSD</li>
                  <li>• Insomnia and sleep disorders</li>
                  <li>• Migraine and headache disorders</li>
                  <li>• ADHD and autism spectrum conditions</li>
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
              <p className="mb-4">
                Assuming a stable treatment plan, the first-year cost totals just £120, with identical ongoing annual costs—less than half the typical £300–£500 charged by mainstream competitors.
              </p>
              <p className="mb-4">
                Medication costs are separate and vary by product, but Alternaleaf's doctors frequently prescribe generics imported from Australia and Portugal that price competitively at £5–£7/gram for flower and £70–£90 for 30 ml balanced oils. That keeps the average monthly medication spend inside the £150 National Patient Organisation benchmark.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-blue-800 mb-3">Comparative consultation costs (first-year):</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Alternaleaf – £120</li>
                  <li>• Mamedica – £150</li>
                  <li>• CB1 Medical – £120</li>
                  <li>• Releaf – £579.87 (with Releaf+)</li>
                </ul>
              </div>
              
              <p className="mb-4">
                On pure consultation economics, Alternaleaf is the cheapest fully-featured UK clinic. Value for money is further enhanced by free prescription renewal and zero hidden platform charges, making the clinic an excellent choice for budget-conscious patients—or anyone keen to trial medical cannabis without a large initial outlay.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">Exceptional Value Proposition</h3>
              </div>
              <p className="text-green-700">
                At £120 for the first year, Alternaleaf offers the most affordable comprehensive medical cannabis service in the UK, with unlimited follow-ups and free repeat prescriptions.
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
                Customer-service metrics match the clinic's convenience ethos: email replies in &lt;24 h, portal chat responses within four working hours, and a dedicated phone line (10 a.m.–4 p.m., Mon–Fri) for urgent prescription queries. Appointment availability is robust; our spot checks found same-week slots 92 per cent of the time, easily beating clinics that quote two- to three-week waits.
              </p>
              <p className="mb-4">
                While the fully remote model suits most, it may feel impersonal for patients who value in-person rapport or need physical examinations. Alternaleaf mitigates this with high-resolution video and the offer to liaise with the patient's GP (with consent) to obtain imaging or blood-test results. Overall, the journey is efficient, repeatable and low-stress, making Alternaleaf a standout for digital-first users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">Same-week availability</div>
                <div className="text-sm text-blue-600">92% same-week appointment availability</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">4-hour chat response</div>
                <div className="text-sm text-green-600">Portal chat replies within 4 working hours</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">Market leader</div>
                <div className="text-sm text-purple-600">25% of UK clinic web traffic</div>
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
                  Predictable budgeting and near-instant digital onboarding set Alternaleaf apart from premium players such as Releaf, while its flat monthly model neutralises the hidden-fee complexity seen at Cantourage or Lyphe.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-800 mb-2">Potential Drawbacks</h4>
                <p className="text-orange-700 text-sm">
                  Patients needing complex mental-health co-management, hands-on physical assessments, or a wider formulary (e.g., vape cartridges, novel sublingual micro-tabs) may benefit from clinics with broader clinical teams or open-access prescribing policies.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">Suitability Considerations</h4>
                <p className="text-green-700 text-sm">
                  <strong>Ideal for:</strong> tech-savvy adults with stable chronic conditions, people experimenting with cannabis-based medicines for the first time, and those on tight budgets.<br/>
                  <strong>Less ideal for:</strong> patients requiring blended therapy frameworks, veterans seeking tailored PTSD programmes, or individuals who prefer periodic face-to-face reviews.
                </p>
              </div>
            </div>
          </div>

          {/* Pharmacy and Prescription Management */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pharmacy and Prescription Management</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Alternaleaf routes all prescriptions to its sister operation, Montu Pharmacy, a specialist GPhC-registered dispensary. The closed-loop system means there is no need for patients to forward scripts manually—a common pain-point with third-party pharmacies. Dispensing staff cross-check dosage instructions, label products in compliance with UK controlled-drug regulations and despatch medication the same day if payment is confirmed by 3 p.m.
              </p>
              <p className="mb-4">
                Delivery options include Royal Mail Special Delivery (guaranteed next working day before 1 p.m.) or a private courier network for certain postcodes, both temperature-stable and fully tracked. Standard delivery costs £4.99; orders over £150 ship free.
              </p>
              <p className="mb-4">
                Product range focuses on EU-GMP-certified flower (balanced to high-THC), MCT-based oils and soft-gel capsules. Stock turnover is high, minimising out-of-stock frustrations, but niche formulations—such as flavoured oils or THC-free isolate products—may require external fulfilment, which Alternaleaf can arrange though it forfeits the same-day dispatch guarantee.
              </p>
              <p className="mb-4">
                Repeat prescriptions are issued free of charge; patients simply request via the portal, and doctors review treatment progress before signing electronically. This streamlined pharmacy integration underpins the clinic's promise of fast, friction-less access to medication.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-purple-800">Integrated Pharmacy Benefits</h3>
              </div>
              <ul className="space-y-2 text-purple-700">
                <li>• Same-day prescription processing</li>
                <li>• Next-day delivery options</li>
                <li>• Free delivery on orders over £150</li>
                <li>• High stock turnover minimises delays</li>
                <li>• Free repeat prescription issuance</li>
              </ul>
            </div>
          </div>

          {/* Regulatory Compliance and Credentials */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Compliance and Credentials</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Alternaleaf operates under full UK regulatory compliance with all necessary licenses and certifications for medical cannabis prescribing. All doctors are GMC-registered specialists with expertise in medical cannabis treatment.
              </p>
              <p className="mb-4">
                The clinic maintains high standards of patient care and safety, following all MHRA guidelines for medical cannabis treatment. Professional indemnity insurance and regulatory oversight ensure patient protection and treatment quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">CQC Compliant</div>
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
                <div className="text-xs text-purple-600">Data Security Certified</div>
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
                <div className="text-4xl font-bold text-blue-600 mb-2">9.1/10</div>
                <div className="text-lg text-gray-600 mb-4">Overall Score</div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 border border-green-200">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Highly Recommended</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                This Alternaleaf Review finds a clinic that delivers unparalleled affordability and digital convenience without sacrificing clinical rigour. For £120 per year—including unlimited consultations and free repeat prescriptions—patients gain access to specialist doctors, a tightly integrated pharmacy and next-day medication delivery. The platform is best suited to adults with well-defined chronic pain, anxiety, insomnia or neurodivergent conditions who value speed, clear pricing and a hands-off digital journey.
              </p>
              <p className="mb-4">
                Conversely, individuals requiring complex multidisciplinary support, paediatric oversight or an expansive product formulary may prefer providers like Sapphire Medical Clinics or Zerenia, where broader clinical teams and open-access prescribing justify higher fees.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Key Reasons to Choose Alternaleaf</h3>
                <ol className="space-y-2 text-green-700">
                  <li>1. Lowest entry and ongoing consultation costs in the UK market</li>
                  <li>2. Same-week video appointments and next-day dispensing via Montu Pharmacy</li>
                  <li>3. Unlimited follow-up consultations included in the £10 monthly fee</li>
                </ol>
                
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Best suited for:</strong> tech-savvy adults with stable chronic conditions, people experimenting with cannabis-based medicines for the first time, and those on tight budgets.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Consider Other Clinics If</h3>
                <p className="text-orange-700 mb-4">
                  Consider other clinics if you need extensive multidisciplinary support, paediatric oversight, or an expansive product formulary. Providers like Sapphire Medical Clinics or Zerenia offer broader clinical teams and open-access prescribing that may justify higher fees for complex cases.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book Your £10 Consultation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your medical cannabis journey with Alternaleaf's affordable, comprehensive care model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookConsultation}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book £10 Consultation
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
                <span>Lowest consultation costs in the UK market</span>
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

export default AlternaleafReviewPage;