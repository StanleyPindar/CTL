import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useClinicData } from '../context/ClinicDataProvider';
import { slugify } from '../utils/slugify';
import ClinicDetailCard from '../components/ClinicDetailCard';
import ClinicStrains from '../components/ClinicStrains';
import ClinicReviews from '../components/ClinicReviews';
import Breadcrumbs from '../components/Breadcrumbs';
import { generateClinicMetaDescription } from '../utils/metaDescriptionGenerator';
import { useClinicStrains, useClinicReviews } from '../hooks/useClinics';
import MetaTags from '../components/MetaTags';

// Simple Error Boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const ClinicProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { clinics, isLoading, error } = useClinicData();

  // Find clinic by matching slug with slugified name or ID
  const clinic = clinics.find(c => {
    if (!c?.overview) {
      console.warn('ClinicProfilePage: Clinic missing overview data:', c);
      return false;
    }
    
    // First try to match the canonical slug from database
    if (c.overview.slug && c.overview.slug === slug) {
      return true;
    }
    
    // Fallback to slugified name or ID matching
    const nameSlug = slugify(c.overview?.name || '');
    const idSlug = slugify(c.overview?.id || '');
    const matches = nameSlug === slug || idSlug === slug;
    
    if (matches) {
      console.log('ClinicProfilePage: Found matching clinic:', c.overview.name);
    }
    
    return matches;
  });
  
  React.useEffect(() => {
    console.log('ClinicProfilePage: Looking for slug:', slug);
    console.log('ClinicProfilePage: Available clinics:', clinics.length);
    console.log('ClinicProfilePage: Clinic slugs:', clinics.map(c => ({
      name: c.overview?.name,
      nameSlug: slugify(c.overview?.name || ''),
      id: c.overview?.id,
      idSlug: slugify(c.overview?.id || '')
    })));
    console.log('ClinicProfilePage: Found clinic:', clinic?.overview?.name || 'none');
  }, [slug, clinics, clinic]);

  // Get clinic strains and reviews data
  const { strains, loading: strainsLoading } = useClinicStrains(clinic?.overview?.id || '');
  const { reviews, loading: reviewsLoading } = useClinicReviews(clinic?.overview?.id || '');

  // Prepare clinic data for schema markup
  const clinicSchemaData = clinic ? {
    name: clinic.overview?.name || 'Medical Cannabis Clinic',
    address: {
      street: clinic.overview?.address?.street,
      city: clinic.overview?.address?.city || 'UK',
      postcode: clinic.overview?.address?.postcode,
      region: clinic.overview?.address?.region
    },
    phone: clinic.overview?.phone,
    email: clinic.overview?.email,
    website: clinic.overview?.website,
    rating: clinic.patientExperience?.overallRating,
    reviewCount: clinic.patientExperience?.totalReviews,
    priceRange: `£${clinic.pricing?.initialConsultation?.price || 150}-£${clinic.pricing?.estimatedAnnualCost?.high || 4000}`,
    specialties: clinic.services?.specialties || [],
    services: [
      'Medical Cannabis Consultation',
      'Medical Cannabis Prescription',
      'Follow-up Care',
      'Patient Support'
    ]
  } : undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-600 mb-4">Error loading clinic data.</p>
            <button
              onClick={() => navigate('/clinics')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Clinics
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!clinic) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-yellow-600 mb-4">Clinic not found.</p>
            <button
              onClick={() => navigate('/clinics')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Clinics
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {slug && clinic && ( // Only render MetaTags if slug and clinic are available
        <MetaTags
          title={`${clinic.overview?.name || 'Medical Cannabis Clinic'} Review UK - Pricing, Reviews & Booking`}
          description={generateClinicMetaDescription(clinic)}
          keywords={[
            `${clinic.overview?.name || 'medical cannabis clinic'} review`,
            `${clinic.overview?.name || 'medical cannabis clinic'} UK`,
            'medical cannabis clinic review',
            'UK medical cannabis clinic',
            'medical cannabis consultation',
            'book medical cannabis appointment',
            'compare medical cannabis clinics UK',
            'medical cannabis clinic UK',
            'get medical cannabis prescription UK',
            ...(clinic.services?.specialties || []).map(s => `medical cannabis for ${s.toLowerCase()}`),
            `medical cannabis clinic ${clinic.overview?.address?.city || 'UK'}`
          ]}
          canonicalUrl={`https://comparetheleaf.co.uk/clinics/${slug}`}
          medicalBusinessData={{
            ...clinicSchemaData,
            aggregateRating: clinic.patientExperience ? {
              ratingValue: clinic.patientExperience.overallRating,
              reviewCount: parseInt(clinic.patientExperience.totalReviews.toString()) || 0,
              bestRating: 5,
              worstRating: 1
            } : undefined
          }}
          reviewData={clinic.patientExperience ? {
            rating: clinic.patientExperience.overallRating,
            reviewCount: clinic.patientExperience.totalReviews,
            bestRating: 5,
            worstRating: 1
          } : undefined}
          breadcrumbData={[
            { name: 'Home', url: 'https://comparetheleaf.co.uk/' },
            { name: 'Clinics', url: 'https://comparetheleaf.co.uk/clinics' },
            { name: clinic.overview?.name || 'Clinic', url: `https://comparetheleaf.co.uk/clinics/${slug}` }
          ]}
        />
      )}
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Clinics', path: '/clinics' },
          { label: clinic.overview?.name || 'Clinic', path: `/clinics/${slug}` }
        ]}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/clinics')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Clinics
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorBoundary fallback={<div className="bg-red-50 border border-red-200 rounded-lg p-6"><p className="text-red-600">Something went wrong loading the clinic details.</p></div>}>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <ClinicDetailCard clinic={clinic} />
              
              {/* Patient Reviews Section */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Patient Reviews</h2>
                <ClinicReviews 
                  clinicId={clinic.overview?.id || ''} 
                  clinicName={clinic.overview?.name || ''} 
                />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Available Strains */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Available Strains</h2>
                <ClinicStrains 
                  strains={strains} 
                  loading={strainsLoading} 
                  clinicName={clinic.overview?.name || ''} 
                />
              </section>
              
              {/* Quick Actions */}
              <section className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {clinic.overview?.website && (
                    <a
                      href={clinic.overview.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-blue-600 to-green-600 text-white text-center py-3 px-4 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all font-medium"
                    >
                      Book Consultation
                    </a>
                  )}
                  
                  <Link
                    to="/quiz"
                    className="block w-full bg-gray-100 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Find Similar Clinics
                  </Link>
                  
                  <Link
                    to="/compare"
                    className="block w-full border border-gray-300 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Compare Clinics
                  </Link>
                  
                  <Link
                    to={(() => {
                      const clinicName = clinic.overview?.name?.toLowerCase() || '';
                      if (clinicName.includes('cb1')) return '/reviews/cb1-medical-review';
                      if (clinicName.includes('releaf')) return '/reviews/releaf-review';
                      if (clinicName.includes('mamedica')) return '/reviews/mamedica-review';
                      if (clinicName.includes('alternaleaf')) return '/reviews/alternaleaf-review';
                      if (clinicName.includes('cantourage')) return '/reviews/cantourage-review';
                      if (clinicName.includes('dispensed')) return '/reviews/dispensed-review';
                      if (clinicName.includes('birmingham')) return '/reviews/birmingham-cannabis-care-review';
                      return '/reviews';
                    })()}
                    className="block w-full border border-blue-600 text-blue-600 text-center py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    Read Review
                  </Link>
                </div>
              </section>
              
              {/* Clinic Stats */}
              <section className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">At a Glance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Overall Rating:</span>
                    <span className="font-medium">{clinic.patientExperience?.overallRating?.toFixed(1) || 'N/A'}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Reviews:</span>
                    <span className="font-medium">{clinic.patientExperience?.totalReviews || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Available:</span>
                    <span className="font-medium">{clinic.patientExperience?.nextAvailableAppointment || 'Contact clinic'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-medium">{clinic.patientExperience?.responseTime || 'N/A'}</span>
                  </div>
                </div>
              </section>
            </aside>
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ClinicProfilePage;