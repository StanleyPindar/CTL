import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { transformClinicData } from '../utils/schemaAdapter';
import ReviewHero from '../components/review/ReviewHero';
import ReviewContent from '../components/review/ReviewContent';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import { generateClinicMetaDescription } from '../utils/metaDescriptionGenerator';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const ClinicReviewPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [clinic, setClinic] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchClinicReview(slug);
    }
  }, [slug]);

  const fetchClinicReview = async (reviewSlug: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('clinics')
        .select('*')
        .eq('slug', reviewSlug)
        .eq('review_published', true)
        .maybeSingle();

      if (error) throw error;
      
      if (!data) {
        setError('Review not found');
        return;
      }
      
      // Transform raw Supabase data to FullClinicProfile format
      try {
        const transformedClinic = transformClinicData(data);
        setClinic(transformedClinic);
      } catch (transformError) {
        console.error('Error transforming clinic data:', transformError);
        setError('Failed to process clinic data');
      }
    } catch (err) {
      console.error('Error fetching clinic review:', err);
      setError('Failed to load review');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4 mx-auto"></div>
          <p className="text-lg text-gray-600">Loading clinic review...</p>
        </div>
      </div>
    );
  }

  if (error || !clinic) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-600 mb-4">{error || 'Review not found'}</p>
            <button
              onClick={() => navigate('/reviews')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Reviews
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {slug && ( // Only render MetaTags if slug is available
        <MetaTags
          title={`${clinic.name} Review - Comprehensive Medical Cannabis Clinic Analysis`}
          description={generateClinicMetaDescription(clinic)}
          keywords={[
            `${clinic.name} review`,
            'medical cannabis clinic review',
            'UK cannabis clinic review',
            ...(clinic.specialisations || []).map((s: string) => `medical cannabis for ${s.toLowerCase()}`),
            `medical cannabis clinic ${clinic.location || 'UK'}`
          ]}
          canonicalUrl={`https://comparetheleaf.co.uk/reviews/${slug}`}
          type="Article"
          reviewData={{
            rating: clinic.rating || 0,
            reviewCount: clinic.review_count || 0,
            bestRating: 5,
            worstRating: 1
          }}
          medicalBusinessData={{
            name: clinic.name || '',
            address: { 
              city: clinic.location || 'UK',
              street: '',
              postcode: '',
              region: clinic.location || 'UK'
            },
            phone: clinic.phone || '',
            email: clinic.email || '',
            website: clinic.website || '',
            rating: clinic.rating || 0,
            reviewCount: clinic.review_count || 0,
            priceRange: `£${clinic.consultation_fee || 150}-£${clinic.annual_cost || 2000}`,
            specialties: clinic.specialisations || ['Medical Cannabis Treatment'],
            services: [
              'Medical Cannabis Consultation',
              'Medical Cannabis Prescription',
              'Follow-up Care',
              'Patient Support'
            ]
          }}
          breadcrumbData={[
            { name: 'Home', url: 'https://comparetheleaf.co.uk/' },
            { name: 'Reviews', url: 'https://comparetheleaf.co.uk/reviews' },
            { name: `${clinic.name} Review`, url: `https://comparetheleaf.co.uk/reviews/${slug}` }
          ]}
        />
      )}
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Reviews', path: '/reviews' },
          { label: `${clinic.name} Review`, path: `/reviews/${slug}` }
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

      {/* Hero Section */}
      <ReviewHero
        clinicName={clinic.name || 'Medical Cannabis Clinic'}
        tagline={clinic.tagline || 'Professional Medical Cannabis Treatment'}
        rating={clinic.rating || 4.5}
        reviewCount={clinic.review_count || 0}
        initialConsultationFee={clinic.consultation_fee || 150}
        monthlyFee={clinic.monthly_fee}
        cqcRegistered={clinic.cqc_registered || false}
        location={clinic.location || 'UK Wide'}
        phone={clinic.phone || ''}
        email={clinic.email || ''}
        website={clinic.website || ''}
        logoUrl={clinic.clinic_logo_url}
        heroBackgroundColor={clinic.hero_background_color || '#4F46E5'}
      />

      {/* Review Content Sections */}
      <ReviewContent clinic={clinic} />
    </div>
  );
};

export default ClinicReviewPage;