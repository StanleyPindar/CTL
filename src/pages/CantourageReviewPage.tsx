import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Phone, Mail, Globe, ExternalLink, CheckCircle, AlertTriangle, Award, Shield, Calendar, Clock, CreditCard, Users, Target } from 'lucide-react';
import StarRating from '../components/common/StarRating';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { generateClinicMetaDescription } from '../utils/metaDescriptionGenerator';
import MetaTags from '../components/MetaTags';

const CantourageReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const clinicData = {
    name: 'Cantourage Clinic',
    rating: 4.2,
    reviewCount: 320,
    consultationFee: 99,
    followUpFee: 29,
    website: 'https://cantourage.com',
    phone: '0203 488 4200',
    email: 'info@cantourage.com',
    location: 'London, UK (Online)',
    established: 2023,
    cqcRegistered: true
  };

  // Prepare clinicData for generateClinicMetaDescription
  const cantourageClinicDataForMeta = {
    name: clinicData.name,
    rating: clinicData.rating,
    reviewCount: clinicData.reviewCount,
    consultationFee: clinicData.consultationFee,
    followUpFee: clinicData.followUpFee, // Use followUpFee as a proxy for ongoing cost if annual not available
    location: clinicData.location,
  };

  const pricingData = [
    { type: 'Initial consultation', amount: '£99', notes: 'One-off fee payable on booking' },
    { type: 'General / follow-up consultation', amount: '£29', notes: 'Every 3 months (minimum)' },
    { type: 'Repeat prescription', amount: 'Free', notes: 'Signed within 24 hours' },
    { type: 'Delivery (courier)', amount: '£7-£11', notes: 'Tracked, 24-48 hours' }
  ];

  const processSteps = [
    { step: 1, title: 'Eligibility screening', description: 'Five-minute online questionnaire checks diagnosis, previous therapies, and contraindications (psychosis, uncontrolled cardiovascular disease). Outcome displayed instantly.' },
    { step: 2, title: 'Records upload', description: 'Patients drag-and-drop GP summaries or give consent for Cantourage to request them; typical turnaround five working days.' },
    { step: 3, title: 'Initial consultation (30 min video)', description: 'Clinician reviews records, discusses goals, outlines cannabinoid pharmacology and legal considerations (driving, workplace testing). Informed-consent forms are e-signed; a starter prescription is sent electronically to Cedarwood Pharmacy.' },
    { step: 4, title: 'Dispensing & delivery', description: 'Prescriptions approved before 3 pm ship same day. Most mainland UK addresses receive parcels in 24-48 h; temperature-stable packaging protects oils. A digital "batch passport" with certificate of analysis is stored in the portal.' },
    { step: 5, title: 'Ongoing monitoring', description: 'Patients complete symptom surveys biweekly. Free nurse clinics are bookable for titration. Veterans may access Combat Stress counsellors via direct referral link.' }
  ];

  const prosAndCons = {
    strengths: [
      'Low follow-up fee £29—among the cheapest nationally',
      'Integrated EU-GMP supply chain delivers premium German cultivars',
      'Veterans\' programme: priority booking + free first follow-up',
      'Free repeat prescriptions + 24 h signing',
      'Real-time strain selector shows live stock & terpene data',
      'Partnership with Cedarwood Pharmacy ensures stock visibility'
    ],
    limitations: [
      'No physical clinic; unsuitable for patients needing hands-on exams',
      'Appointment slots fewer than multi-site incumbents; potential waits',
      'Delivery cost (£7–£11) not bundled, unlike CB1 in-house rates',
      'Limited allied therapies (physio, psychology) in-house',
      'Lower brand recognition; CQC rating pending (inspection scheduled 2025)',
      'Annual cost slightly higher than CB1 due to courier fees'
    ]
  };

  const uniqueFeatures = [
    {
      title: 'Veterans\' Access Programme',
      description: 'Priority booking within 7 days and free first follow-up for veterans and emergency services personnel'
    },
    {
      title: 'German GMP-Grade Sourcing',
      description: 'Direct import of premium continental cultivars through EU-GMP import licences'
    },
    {
      title: 'Cantourage Strain Selector',
      description: 'Proprietary portal tool showing live inventory with THC %, terpenes, and pricing'
    },
    {
      title: 'Combat Stress Partnership',
      description: 'Direct referral pathway to Combat Stress counsellors for eligible veterans'
    }
  ];

  const handleBookConsultation = () => {
    window.open(clinicData.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {slug && ( // Only render MetaTags if slug is available
        <MetaTags
          title="Cantourage Clinic Review - Veterans-Focused Medical Cannabis Clinic"
          description={generateClinicMetaDescription(cantourageClinicDataForMeta)}
          keywords={['Cantourage', 'medical cannabis clinic', 'UK cannabis clinic review', 'veterans medical cannabis', 'PTSD treatment']}
          type="Article"
          reviewData={{
            rating: 4.2,
            reviewCount: 320,
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
          { label: 'Cantourage Review', path: '/reviews/cantourage-review' }
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
              <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">C</div>
                    <div className="text-lg opacity-90">Veterans-Focused Cannabis Clinic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{clinicData.name}</h1>
                  <p className="text-lg text-gray-600 mb-4">Veterans-Focused Medical Cannabis Clinic with German GMP-Grade Sourcing</p>
                  
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
                Cantourage Clinic has carved out a distinctive niche in the UK medical-cannabis sector by coupling German GMP-grade sourcing with a strong social-impact mission aimed at veterans and emergency-services personnel. Founded in 2023 as the UK patient-facing arm of Berlin-based Cantourage AG, the London-headquartered clinic offers a streamlined virtual pathway—£99 entry fee, £29 follow-ups—and an in-house veterans' access programme delivered in partnership with mental-health charity Combat Stress.
              </p>
              <p className="mb-4">
                Its primary value proposition is "high-quality medicine at community-clinic prices": Cantourage leverages its own EU-GMP import licences to supply flower and oil directly to partner Cedarwood Pharmacy, trimming wholesale mark-ups and shortening the supply chain. Target patients are adults with chronic pain, post-traumatic stress disorder (PTSD) or anxiety who appreciate a low-fee, data-secure digital service but still want access to premium continental cultivars rarely stocked elsewhere.
              </p>
              <p className="mb-4">
                Early market traction is modest—website-traffic share below the national top five—but patient forums praise the clinic's transparent pricing and rapid stock updates. This Cantourage Clinic Review assesses eight key dimensions—services, costs, patient journey, pharmacy integration, compliance, and overall value—to help you decide if this UK medical cannabis clinic aligns with your treatment goals. Initial findings indicate a competitive fee structure, veteran-centred perks and robust pharmaceutical oversight; nonetheless, narrower appointment windows and a purely online model may deter those seeking face-to-face care.
              </p>
            </div>
          </div>

          {/* Services and Specialisations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services and Specialisations</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Cantourage Clinic operates an entirely virtual service model led by GMC-registered pain, psychiatry and neurology specialists. Consultations are delivered via an NHS-approved tele-health platform with ISO 27001 data security. Core therapeutic areas include:
              </p>
              <ol className="mb-4">
                <li>Chronic pain syndromes (neuropathic pain, fibromyalgia, musculoskeletal pain)</li>
                <li>PTSD and service-related anxiety disorders—a nod to its military partnership</li>
                <li>Sleep disturbances secondary to pain or mental-health conditions</li>
                <li>Neuro-inflammatory conditions such as multiple-sclerosis spasticity</li>
              </ol>
              <p className="mb-4">
                The clinic's veterans' pathway waives the first follow-up fee and offers priority scheduling within seven days of referral—useful for patients transitioning from MoD or NHS care. Each new patient undergoes a 30-minute video assessment covering medical history, previous treatments and harm-reduction counselling. Treatment algorithms start with balanced or CBD-dominant oils for anxiety and sleep, escalating to THC-rich vapourised flower for breakthrough pain.
              </p>
              <p className="mb-4">
                A proprietary "Cantourage Strain Selector" embedded in the patient portal lists live inventory (THC %, dominant terpenes, price/gram). Clinicians co-select products with patients, enhancing shared decision-making. Outcome tracking uses the Brief Pain Inventory and PCL-5 PTSD scale at baseline and every three months; anonymised data feed into Cantourage's pan-European real-world database, supporting post-marketing pharmacovigilance.
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
                <h3 className="text-lg font-semibold text-green-800 mb-3">Ancillary Support</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Nurse-led titration clinics—15-minute video slots for dose optimisation (free)</li>
                  <li>• Driving & workplace guidance—auto-generated letters referencing DVLA rules</li>
                  <li>• Mental-health referrals—streamlined sign-posting to Combat Stress counsellors for eligible veterans</li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 mt-6">
              <p className="mb-4">
                <strong>Limitations:</strong> no allied therapies (physiotherapy, CBT) in-house and no physical premises for hands-on exams. Complex co-morbidity cases may be better served by hybrid clinics with multidisciplinary teams.
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
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
              <h3>First-year cost</h3>
              <p className="mb-4">
                One initial + three quarterly follow-ups = £99 + (3 × £29) = £186; add average courier fees (~£40) gives ≈£226 clinic & logistics spend. Medication outlay varies: a 30 g/month flower regimen at £5.50/g totals ~£1,980. Total first year ≈£2,206—competitive with CB1 Medical (£2,020) and markedly under premium models like Releaf + (£2,480) when equalising medication volumes.
              </p>
              
              <h3>Long-term annual cost</h3>
              <p className="mb-4">
                Year two onwards: four follow-ups (4 × £29) = £116 plus courier ~£40 ⇒ ≈£156 clinic/logistics. With unchanged medication this equals ≈£2,136 per year—slightly higher than CB1 due to delivery fees but lower than Lyphe (≈£2,267 including £19 prescription renewals).
              </p>
              
              <h3>Value assessment</h3>
              <p className="mb-4">
                Cantourage offers mid-market pricing with premium-grade products; its sub-£30 follow-ups undercut most competitors and free repeats reduce hidden costs. The veterans' waiver and priority slots further enhance affordability for its target demographic.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">Mid-Market Value Proposition</h3>
              </div>
              <p className="text-green-700">
                At £226 for first-year clinic costs, Cantourage offers competitive pricing with premium German cultivars and veteran-focused benefits.
              </p>
            </div>
          </div>

          {/* Patient Experience and Process */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Experience and Process</h2>
            
            <div className="space-y-6 mb-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
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
                <strong>Communication & support</strong> – Live chat (Mon-Fri 9 am-7 pm), phone line, and ticketed email (SLA 24 h). An out-of-hours on-call doctor handles acute adverse events. Portal notifications remind patients of DVLA driving guidance when THC-dominant products are dispensed.
              </p>
              <p className="mb-4">
                <strong>Accessibility</strong> – The platform meets WCAG 2.2 AA, offers closed captioning, and allows screen-reader compatibility. Because all services are virtual, rural or mobility-restricted patients avoid travel, though some may miss in-person examination.
              </p>
              <p className="mb-4">
                Patient-review aggregators (MedBud, June 2025 snapshot) rate clinician empathy highly but note occasional two-week wait for evening appointments—likely reflecting a still-growing specialist roster. Overall, the journey is efficient, transparent and veteran-friendly, albeit digital-only.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-blue-800">7-day priority booking</div>
                <div className="text-sm text-blue-600">For veterans and emergency services</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">24-hour response</div>
                <div className="text-sm text-green-600">Email and portal support</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-purple-800">Combat Stress partnership</div>
                <div className="text-sm text-purple-600">Mental health support for veterans</div>
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

              {/* Limitations */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Ideal for:</h5>
                  <p className="text-blue-700 text-sm">
                    Veterans, emergency-services personnel, and cost-conscious patients who value high-grade continental flower.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Potential drawbacks:</h5>
                  <p className="text-blue-700 text-sm">
                    Those requiring multidisciplinary care or face-to-face reassurance may gravitate toward hybrid clinics like Birmingham Cannabis Clinic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pharmacy and Prescription Management */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pharmacy and Prescription Management</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Cantourage scripts are dispensed by Cedarwood Pharmacy, a GPhC-registered facility deeply integrated into Cantourage's Germany–UK import pipeline. The pharmacy stocks &gt;200 flower cultivars and 50 oil formulations, including Cantourage's own indoor-grown strains (e.g., C4 Skywalker OG, C5 Purple Mango), plus third-party EU-GMP products.
              </p>
              
              <ul className="mb-4">
                <li><strong>Dispatch timeline:</strong> prescriptions received before 15:00 ship same day.</li>
                <li><strong>Delivery options:</strong> standard 24-48 h (£7.49), Saturday (£10.99), guaranteed next-day by 13:00 (£11.49).</li>
                <li><strong>Returns & recalls:</strong> unopened packs can be returned within 14 days; MHRA recall alerts trigger portal notifications.</li>
              </ul>
              
              <p className="mb-4">
                Repeat prescriptions: patients confirm stable dosing via one-click portal request; clinicians sign within 24 h at no cost. Strain changes or dose escalations require a £29 review, ensuring pharmacovigilance compliance. Certificates of Analysis accompany every batch, supporting DVLA disclosures and workplace testing documentation.
              </p>
              <p className="mb-4">
                Cedarwood's in-pharmacy cannabinoid analytics lab allows rapid potency verification, adding an extra quality layer compared with drop-ship dispensaries.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-purple-800">Premium Supply Chain Benefits</h3>
              </div>
              <ul className="space-y-2 text-purple-700">
                  <li>• &gt;200 flower cultivars including exclusive Cantourage strains</li>
                <li>• Same-day dispatch for orders before 3pm</li>
                <li>• In-pharmacy cannabinoid analytics lab</li>
                <li>• Certificate of Analysis with every batch</li>
                <li>• 24-hour prescription signing</li>
              </ul>
            </div>
          </div>

          {/* Regulatory Compliance and Credentials */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Compliance and Credentials</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Cantourage operates under full UK regulatory compliance with all necessary licenses and certifications for medical cannabis prescribing. All doctors are GMC-registered specialists with expertise in medical cannabis treatment.
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
                <div className="font-semibold text-purple-800">ISO 27001</div>
                <div className="text-xs text-purple-600">Data Security Compliant</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-orange-800">MHRA Licensed</div>
                <div className="text-xs text-orange-600">Import & Wholesale</div>
              </div>
            </div>
          </div>

          {/* Final Verdict and Recommendations */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Verdict and Recommendations</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">8.4/10</div>
                <div className="text-lg text-gray-600 mb-4">Overall Score</div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 border border-green-200">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Highly Recommended</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Cantourage Clinic blends affordable tele-health, premium continental supply, and a genuine veterans' focus into a compelling mid-market offering. Sub-£30 follow-up fees and free repeats keep clinical costs down, while the Cedarwood partnership delivers a broad, consistently stocked formulary. The result is an efficient route to a medical marijuana prescription UK without sacrificing product quality.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Choose Cantourage Clinic if you:</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Are a veteran or first-responder seeking fast-track, empathy-centred care</li>
                  <li>• Want access to German indoor flower not widely stocked elsewhere</li>
                  <li>• Prefer low consultation fees and transparent, free repeat prescriptions</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Consider alternatives if you:</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Need hands-on examinations or integrated physiotherapy/psychology (look at Integro's hybrid model)</li>
                  <li>• Prioritise rock-bottom annual costs (CB1 edges ahead by bundling courier savings)</li>
                  <li>• Desire a large array of allied-health add-ons (Curaleaf's wider network may suit)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-blue-800 mb-3">Next Steps</h4>
              <ol className="text-blue-700 space-y-1">
                <li>1. Complete Cantourage's free online eligibility checker</li>
                <li>2. Gather your GP summary or grant consent for the clinic to request records</li>
                <li>3. Book the £99 video consultation—veterans add service number for programme benefits</li>
                <li>4. Compare Cantourage against at least two other clinics using the CompareTheLeaf matching quiz before final commitment</li>
              </ol>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book Your £99 Consultation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your medical cannabis journey with Cantourage's veteran-focused care model and premium German cultivars.
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
                <span>Special benefits for veterans and emergency services personnel</span>
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
                  Cantourage scripts are dispensed by Cedarwood Pharmacy, a GPhC-registered facility deeply integrated into Cantourage's Germany–UK import pipeline. The pharmacy stocks &gt;200 flower cultivars and 50 oil formulations, including Cantourage's own indoor-grown strains (e.g., C4 Skywalker OG, C5 Purple Mango), plus third-party EU-GMP products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CantourageReviewPage;