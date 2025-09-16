import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Phone, Mail, Globe, ExternalLink, CheckCircle, AlertTriangle, Award, Shield, Calendar, Clock, CreditCard, Users, Target } from 'lucide-react';
import StarRating from '../components/common/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { generateClinicMetaDescription } from '../utils/metaDescriptionGenerator';
import MetaTags from '../components/MetaTags';

const MamedicaReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const clinicData = {
    name: 'Mamedica',
    rating: 4.5,
    reviewCount: 1200,
    consultationFee: 150,
    annualFee: 75,
    website: 'https://mamedica.co.uk',
    phone: '0203 488 4200',
    email: 'info@mamedica.co.uk',
    location: 'UK Wide (Online)',
    established: 2020,
    cqcRegistered: true
  };

  // Prepare clinicData for generateClinicMetaDescription
  const mamedicaClinicDataForMeta = {
    name: clinicData.name,
    rating: clinicData.rating,
    reviewCount: clinicData.reviewCount,
    consultationFee: clinicData.consultationFee,
    annual_cost_first_year: clinicData.annualFee, // Map to annual_cost_first_year
    location: clinicData.location,
  };

  const pricingData = [
    { type: 'Initial video consultation', amount: '£150', notes: 'One-off fee' },
    { type: 'Annual follow-up (after year one)', amount: '£75', notes: 'Every 12 months' },
    { type: 'Repeat prescription', amount: 'Free', notes: 'Unlimited' },
    { type: 'Emergency/early review', amount: '£75', notes: 'As needed' }
  ];

  const processSteps = [
    { step: 1, title: 'Eligibility questionnaire', description: 'A three-minute web form captures diagnosis, previous treatments and red-flag contraindications' },
    { step: 2, title: 'Record upload & ID verification', description: 'Patients drag-and-drop GP summaries or hospital letters; Mamedica\'s admin team retrieves missing documents within 72 hours' },
    { step: 3, title: '£150 booking', description: 'Same-week video slots are usually available on evenings and Saturdays' },
    { step: 4, title: 'Initial consultation (30 min)', description: 'Specialist reviews history, sets treatment goals, issues prescription if appropriate' },
    { step: 5, title: 'Dispensing & payment', description: 'Script is routed to Mamedica Pharmacy; patients pay for medicine and choose next-day courier (£4.95) or Royal Mail Special Delivery (included on orders over £150)' },
    { step: 6, title: 'Titration check-ins', description: 'Secure portal messaging allows dose tweaks; if a synchronous review is needed, a £75 appointment can be booked within three days' },
    { step: 7, title: 'Annual review', description: 'Once stable, a mandatory 20-minute follow-up occurs every twelve months to satisfy MHRA oversight' },
    { step: 8, title: 'Ongoing support', description: 'Telephone line (Mon–Fri, 9 a.m.–5 p.m.), 24-hour email ticketing and pharmacist-led webinars' }
  ];

  const prosAndCons = {
    strengths: [
      'Lowest long-term consultation cost (£75/year)',
      'Twelve-month review cycle minimises appointment fatigue',
      'Free repeat prescriptions and integrated pharmacy',
      'Veterans Access Scheme reduces costs for ex-service personnel',
      'Transparent, pay-as-you-go structure with no hidden fees'
    ],
    limitations: [
      '£150 entry fee is higher than most competitors',
      'Extra reviews cost £75—expensive if frequent titration required',
      'No in-house allied-health or mental-health therapies',
      'Fully remote model may deter patients preferring physical exams',
      'Appointment-response times slower than subscription rivals'
    ]
  };

  const uniqueFeatures = [
    {
      title: 'Lowest Long-term Cost',
      description: 'Just £75 annually from year two onwards - cheapest in the UK market'
    },
    {
      title: 'Twelve-month Review Cycle',
      description: 'Minimal appointment burden once treatment is stabilised'
    },
    {
      title: 'Veterans Access Scheme',
      description: 'Waives first follow-up fee for ex-service personnel'
    },
    {
      title: 'Integrated Pharmacy',
      description: 'Mamedica Pharmacy provides same-day prescription processing'
    }
  ];

  const handleBookConsultation = () => {
    window.open(clinicData.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {slug && ( // Only render MetaTags if slug is available
        <MetaTags
          title="Mamedica Review - UK's Lowest Long-term Cost Medical Cannabis Clinic"
          description={generateClinicMetaDescription(mamedicaClinicDataForMeta)}
          keywords={['Mamedica', 'medical cannabis clinic', 'UK cannabis clinic review', 'affordable medical cannabis', 'long-term treatment']}
          type="Article"
          reviewData={{
            rating: 4.5,
            reviewCount: 1200,
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
          { label: 'Mamedica Review', path: '/reviews/mamedica-review' }
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
                    <div className="text-6xl font-bold mb-2">M</div>
                    <div className="text-lg opacity-90">Value-for-Life Cannabis Clinic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{clinicData.name}</h1>
                  <p className="text-lg text-gray-600 mb-4">UK's Lowest Long-term Cost Medical Cannabis Clinic</p>
                  
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
                    £{clinicData.annualFee}/year
                  </div>
                  <div className="text-sm text-gray-500">From year 2 onwards</div>
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
                Mamedica has built a reputation as the "value-for-life" player in the UK medical-cannabis space by front-loading its professional fees and then stretching mandatory reviews to once every twelve months. After a £150 initial video consultation, follow-ups drop to £75 a year, and repeat prescriptions are free, giving Mamedica the lowest long-term consultation cost in the market—just £75 annually from year two onward.
              </p>
              <p className="mb-4">
                With 16.6 per cent of national clinic web-traffic, second only to Alternaleaf, the service attracts budget-conscious adults managing chronic pain, anxiety and insomnia who still want access to a vertically integrated pharmacy for next-day dispensing.
              </p>
              <p className="mb-4">
                Unlike subscription models that bundle extras into a rolling monthly bill, Mamedica's pay-as-you-go structure keeps fixed outgoings minimal once treatment is stabilised. The clinic also runs a Veterans Access Scheme that waives the first follow-up fee, reinforcing its inclusive, affordability-first ethos.
              </p>
              <p className="mb-4">
                This Mamedica Review examines services, pricing, patient journey and regulatory credentials to help you work out whether the clinic's stripped-back, low-frequency model lines up with your treatment needs—or whether a subscription clinic such as Releaf might offer better value if you anticipate frequent dose adjustments.
              </p>
            </div>
          </div>

          {/* Services and Specialisations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services and Specialisations</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Mamedica operates exclusively online, employing GMC-registered pain, psychiatry and general-practice specialists who have completed accredited cannabis-medicine CPD. Consultations typically cover chronic musculoskeletal and neuropathic pain, fibromyalgia, migraine, anxiety disorders (including PTSD), insomnia, multiple-sclerosis spasticity and selected neuro-developmental conditions such as adult ADHD.
              </p>
              <p className="mb-4">
                During the 30-minute first appointment, clinicians review medical history, confirm that at least two conventional therapies have failed or caused intolerable side-effects, and screen for contraindications such as psychosis or uncontrolled cardiovascular disease. If eligibility is confirmed, the doctor draws up a "start-low, go-slow" titration plan using full-spectrum flower, balanced or CBD-dominant oils, and—in complex pain cases—soft-gel capsules to improve dose accuracy overnight.
              </p>
              <p className="mb-4">
                Mamedica's veterans programme provides expedited record-collection and priority scheduling, while all patients receive downloadable dosage diaries and access to monthly educational webinars led by in-house pharmacists. Although the clinic does not currently offer allied-health services (physiotherapy, psychotherapy), prescribers will liaise with NHS GPs and community practitioners at the patient's request to co-ordinate blood tests or imaging studies. This keeps multidisciplinary care possible without adding layers of private-sector cost.
              </p>
              <p className="mb-4">
                A key differentiator is the twelve-month review cycle. Once a stable dose is reached, patients need only book an annual clinical review—dramatically reducing appointment fatigue for those on long-term maintenance therapy. Should adverse events arise, ad-hoc reviews are available within three working days at the standard £75 rate. For digitally savvy patients who rarely need clinician input beyond prescription renewals, the model strikes a pragmatic balance between regulatory compliance and wallet-friendliness.
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
                  <li>• Chronic musculoskeletal and neuropathic pain</li>
                  <li>• Fibromyalgia and migraine</li>
                  <li>• Anxiety disorders (including PTSD)</li>
                  <li>• Insomnia and sleep disorders</li>
                  <li>• Multiple sclerosis spasticity</li>
                  <li>• Adult ADHD and neuro-developmental conditions</li>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
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
                <strong>Year 1 total: £150</strong><br/>
                <strong>Ongoing annual cost: £75</strong>
              </p>
              <p className="mb-4">
                Medication charges are separate. Mamedica's vertically integrated pharmacy sources EU-GMP flower from Canada, Australia and Portugal, typically priced £5.50–£7.50 per gram, while 30 ml balanced oils retail at £75–£90. Average monthly spend therefore sits near the sector benchmark of £150 for mixed flower-and-oil regimens.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-blue-800 mb-3">How it compares on professional fees (first year):</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Alternaleaf – £120</li>
                  <li>• CB1 Medical – £120</li>
                  <li>• Cantourage – £186</li>
                  <li>• Mamedica – £150</li>
                  <li>• Releaf (Releaf+) – £579.87</li>
                </ul>
              </div>
              
              <p className="mb-4">
                From year two onwards, Mamedica's £75 fee undercuts every major competitor, making it the cheapest long-term UK medical-cannabis clinic for patients who remain clinically stable. The absence of monthly platform charges or hidden prescription fees further enhances transparency and predictability.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">Long-term Value Champion</h3>
              </div>
              <p className="text-green-700">
                At £75 annually from year two, Mamedica offers the lowest long-term consultation costs in the UK medical cannabis market.
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
                Mystery-shopper tests found chat replies within eight business hours and first appointment availability within five days, respectable but slightly slower than Alternaleaf's near-instant bookings. The lean review cadence is both the clinic's strength and its Achilles heel: patients needing rapid, frequent dosage changes must either pay £75 per extra review or wait for asynchronous messaging, which can feel sluggish compared with subscription services offering unlimited consultations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">Same-week availability</div>
                <div className="text-sm text-blue-600">Video slots on evenings and Saturdays</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">8-hour response</div>
                <div className="text-sm text-green-600">Chat replies within 8 business hours</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">16.6% market share</div>
                <div className="text-sm text-purple-600">Second largest UK clinic by traffic</div>
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
                  Mamedica's ultra-low annual fee and infrequent mandatory reviews deliver maximum cost-efficiency for patients with stable, chronic conditions who rarely need clinician input. Veterans also benefit from bespoke concessions.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-800 mb-2">Potential Drawbacks</h4>
                <p className="text-orange-700 text-sm">
                  Patients with fluctuating symptom profiles—or those trialling cannabis medicine for the first time—might spend more overall if multiple paid reviews are needed during the first year. Similarly, individuals requiring psychotherapy, physiotherapy or broader product formulary (e.g., vape cartridges) may lean toward clinics with multidisciplinary teams and open formularies.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">Suitability Considerations</h4>
                <p className="text-green-700 text-sm">
                  <strong>Ideal for:</strong> budget-focused adults managing long-standing pain or insomnia, veterans, and confident self-managers comfortable with annual reviews.<br/>
                  <strong>Less ideal for:</strong> complex mental-health cases, paediatric patients, or anyone anticipating frequent dosage adjustments.
                </p>
              </div>
            </div>
          </div>

          {/* Pharmacy and Prescription Management */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pharmacy and Prescription Management</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Mamedica owns a GPhC-registered dispensing facility, allowing prescriptions to move electronically from clinician to pharmacist without manual forwarding. Stock includes balanced and high-THC flower, high-CBD oils, and soft-gel capsules; all products are EU-GMP certified and batch-tested.
              </p>
              <p className="mb-4">
                Orders confirmed before 3 p.m. ship the same day via Royal Mail Special Delivery (before 1 p.m.) or a temperature-controlled courier network, with SMS tracking and signature on delivery. Standard shipping is £4.95, waived for medicine orders over £150. Repeat prescriptions are issued at no cost and usually approved within 24 hours, reflecting the clinic's lean administrative structure.
              </p>
              <p className="mb-4">
                Out-of-stock items trigger proactive pharmacist contact with alternative product suggestions, and patients can set email stock alerts for preferred strains. While the formulary is narrower than at open-access clinics, tight vertical integration means fewer import delays and clearer lines of responsibility in the event of dispensing errors.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-purple-800">Integrated Pharmacy Benefits</h3>
              </div>
              <ul className="space-y-2 text-purple-700">
                <li>• Same-day prescription processing</li>
                <li>• Free delivery on orders over £150</li>
                <li>• 24-hour prescription approval</li>
                <li>• Proactive stock alerts</li>
                <li>• Free repeat prescriptions</li>
              </ul>
            </div>
          </div>

          {/* Regulatory Compliance and Credentials */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Compliance and Credentials</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Mamedica operates under full UK regulatory compliance with all necessary licenses and certifications for medical cannabis prescribing. All doctors are GMC-registered specialists with expertise in medical cannabis treatment.
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
                <div className="font-semibold text-orange-800">MHRA Licensed</div>
                <div className="text-xs text-orange-600">Wholesale Dealer Licence</div>
              </div>
            </div>
          </div>

          {/* Final Verdict and Recommendations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Verdict and Recommendations</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">9.0/10</div>
                <div className="text-lg text-gray-600 mb-4">Overall Score</div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 border border-green-200">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Highly Recommended</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                This Mamedica Review finds a clinic that wins on long-term affordability and minimal appointment burden. Patients comfortable with a once-yearly review can keep professional-fee expenditure to just £75 a year after the initial set-up—cheaper than any subscription or pay-per-consultation model currently on the market. Integrated dispensing, free prescriptions and a veterans concession round out an attractive value proposition.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Key Reasons to Choose Mamedica</h3>
                <ol className="space-y-2 text-green-700">
                  <li>1. Lowest ongoing consultation cost in the UK medical-cannabis sector</li>
                  <li>2. Simple pay-as-you-go billing with no monthly subscriptions</li>
                  <li>3. Vertically integrated pharmacy for faster fulfilment and fewer hidden fees</li>
                </ol>
                
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Best suited for:</strong> budget-minded adults with stable chronic pain, anxiety or insomnia who anticipate minimal dosage changes, and veterans seeking reduced fees.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Consider Other Clinics If</h3>
                <p className="text-orange-700 mb-4">
                  Consider other clinics if you expect multiple titration reviews in your first year (Alternaleaf's £10 monthly plan offers unlimited follow-ups) or require multidisciplinary mental-health or physiotherapy services (Sapphire or Zerenia may be a better fit).
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book Your £150 Consultation?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Start your medical cannabis journey with Mamedica's value-for-life care model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookConsultation}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Consultation
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
                <span>Lowest long-term costs in the UK market</span>
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

export default MamedicaReviewPage;