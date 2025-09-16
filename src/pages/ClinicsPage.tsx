import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOptimizedClinics } from '../hooks/useOptimizedClinics';
import OptimizedFilterAndSort from '../components/ui/OptimizedFilterAndSort';
import LazyClinicGrid from '../components/ui/LazyClinicGrid';
import { Search, Filter, MapPin, Star } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaTags from '../components/MetaTags';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import type { FullClinicProfile } from '../types/clinic';

const ClinicsPage: React.FC = () => {
  const navigate = useNavigate();
  const { clinics, isLoading, error } = useOptimizedClinics();
  const [filteredClinics, setFilteredClinics] = useState<FullClinicProfile[]>([]);

  React.useEffect(() => {
    setFilteredClinics(clinics);
  }, [clinics]);

  const handleClinicClick = (clinic: FullClinicProfile) => {
    if (!clinic?.overview?.name && !clinic?.overview?.id) {
      console.error('Cannot navigate to clinic: missing name and id', clinic);
      return;
    }
    
    const slug = clinic.overview?.name?.toLowerCase().replace(/\s+/g, '-') || clinic.overview?.id;
    navigate(`/clinics/${slug}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-600 mb-4">Error loading clinics: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Compare Medical Cannabis Clinics UK - Licensed Doctors & Verified Reviews"
        description="Compare 20+ verified UK medical cannabis clinics. Licensed GMC doctors, transparent pricing, patient reviews & instant booking. MHRA regulated clinics across London, Manchester, Birmingham & UK-wide."
        keywords={[
          'UK medical cannabis clinics',
          'compare medical cannabis clinics UK',
          'licensed medical cannabis doctors',
          'medical cannabis clinic reviews',
          'find medical cannabis clinic UK',
          'medical cannabis consultation UK',
          'best medical cannabis clinics UK',
          'medical cannabis pricing UK',
          'verified medical cannabis clinics',
          'medical cannabis specialists UK',
          'book medical cannabis appointment UK',
          'MHRA regulated cannabis clinics',
          'GMC registered cannabis doctors',
          'medical cannabis clinic London',
          'medical cannabis clinic Manchester',
          'medical cannabis clinic Birmingham',
          'urgent medical cannabis consultation',
          'medical cannabis doctors UK'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/clinics"
        breadcrumbData={[
          { name: 'Home', url: 'https://comparetheleaf.co.uk/' },
          { name: 'All Clinics', url: 'https://comparetheleaf.co.uk/clinics' }
        ]}
        medicalEntityData={{
          type: 'MedicalProcedure',
          name: 'Medical Cannabis Clinic Services',
          description: 'Comprehensive medical cannabis treatment services provided by licensed UK clinics',
          procedureType: 'Medical consultation and treatment',
          category: [
            'Medical Cannabis Consultation',
            'Prescription Services',
            'Follow-up Care',
            'Patient Education'
          ],
          preparation: [
            'Medical records collection',
            'Treatment history documentation',
            'Symptom assessment',
            'Eligibility verification'
          ],
          howPerformed: 'Specialist assessment followed by prescription and ongoing monitoring',
          followup: [
            'Regular monitoring appointments',
            'Treatment adjustments',
            'Side effect management',
            'Prescription renewals'
          ],
          contraindication: [
            'Severe cardiovascular disease',
            'Severe psychiatric disorders',
            'Pregnancy and breastfeeding'
          ],
          relevantSpecialty: [
            'Pain Medicine',
            'Neurology',
            'Psychiatry',
            'Oncology',
            'Palliative Care'
          ]
        }}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'All Clinics', path: '/clinics' }
        ]}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Compare UK Medical Cannabis Clinics - Licensed & Verified
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare verified medical cannabis clinics across the UK. Find licensed specialists, 
              transparent pricing, and quality care for your specific medical needs. All clinics are MHRA regulated.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <OptimizedFilterAndSort 
          clinics={clinics || []}
          onChange={setFilteredClinics}
        />

        {/* Results */}
        {filteredClinics.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No clinics found
            </h2>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters to find more clinics.
            </p>
            <button
              onClick={() => navigate('/quiz')}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-md hover:from-blue-700 hover:to-green-700 transition-all font-medium"
            >
              Take Our Clinic Quiz
            </button>
            <button
              onClick={() => navigate('/reviews')}
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium"
            >
              Read Clinic Reviews
            </button>
          </div>
        ) : (
          <>
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-gray-900 mr-4">
                  {filteredClinics.length} Clinic{filteredClinics.length !== 1 ? 's' : ''} Found
                </h2>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Across the UK</span>
                </div>
              </div>
            </div>

            {/* Clinics Grid */}
            <ErrorBoundary>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClinics.map((clinic, index) => (
                  <div 
                    key={clinic.overview?.id || index}
                    onClick={() => handleClinicClick(clinic)}
                    className="cursor-pointer"
                  >
                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {clinic.overview?.name || 'Medical Cannabis Clinic'}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            {clinic.overview?.tagline || clinic.overview?.description?.substring(0, 100) + '...' || 'Professional medical cannabis treatment'}
                          </p>
                          <div className="flex items-center mb-2">
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= Math.round(clinic.patientExperience?.overallRating || 4.5) 
                                      ? 'text-yellow-400 fill-current' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-medium ml-1">
                              {clinic.patientExperience?.overallRating?.toFixed(1) || '4.5'}
                            </span>
                            <span className="text-xs text-gray-500 ml-1">
                              ({clinic.patientExperience?.totalReviews || 0} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            £{clinic.pricing?.initialConsultation?.price || '150'}
                          </div>
                          <div className="text-xs text-gray-500">consultation</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {(clinic.services?.specialties || ['General Treatment']).slice(0, 3).map((specialty, i) => (
                            <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="text-xs text-gray-500">
                          Next: {clinic.patientExperience?.nextAvailableAppointment || 'Contact clinic'}
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-green-700 transition-all">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ErrorBoundary>
          </>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take our clinic matching quiz to get personalized recommendations based on your 
            condition, budget, and preferences.
          </p>
          <button
            onClick={() => navigate('/quiz')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Take Our Clinic Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicsPage;