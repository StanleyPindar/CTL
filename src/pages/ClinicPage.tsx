import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useClinic } from '../hooks/useClinics';
import ClinicDetailCard from '../components/ClinicDetailCard';
import Breadcrumbs from '../components/Breadcrumbs';
import BookingWidget from '../components/BookingWidget';
import { generateClinicMetaDescription } from '../utils/metaDescriptionGenerator';
import MetaTags from '../components/MetaTags';

const ClinicPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { clinic, loading: isLoading, error } = useClinic(id || '');

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
            <p className="text-red-600 mb-4">Error loading clinic data: {error}</p>
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
      {id && ( // Only render MetaTags if id is available
        <MetaTags
          title={`${clinic.overview?.name || 'Medical Cannabis Clinic'} - Detailed Profile & Reviews`}
          description={generateClinicMetaDescription(clinic)}
          canonicalUrl={`https://comparetheleaf.co.uk/clinics/${id}`}
          keywords={[`${clinic.overview?.name || 'medical cannabis clinic'}`, 'clinic profile', 'medical cannabis treatment', 'UK cannabis clinic']}
        />
      )}

      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Clinics', path: '/clinics' },
          { label: clinic.overview?.name || 'Clinic', path: `/clinic/${id}` }
        ]}
      />
      
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ClinicDetailCard clinic={clinic} />
          </div>
          <aside className="lg:col-span-1">
            <BookingWidget clinic={clinic} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ClinicPage;