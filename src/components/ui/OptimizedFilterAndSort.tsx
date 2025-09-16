import React, { useState, useMemo, useCallback } from 'react';
import { 
  Filter, SlidersHorizontal, Star, DollarSign, 
  Search, MapPin, X
} from 'lucide-react';
import { FullClinicProfile } from '../../types/clinic';
import { useDebounce } from '../../hooks/useDebounce';
import { useClinicSearch } from '../../hooks/useOptimizedClinics';

interface OptimizedFilterAndSortProps {
  clinics: FullClinicProfile[];
  onChange: (filtered: FullClinicProfile[]) => void;
}

const OptimizedFilterAndSort: React.FC<OptimizedFilterAndSortProps> = ({ 
  clinics, 
  onChange 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    costTier: 'all',
    minRating: 0,
    location: '',
    specialization: '',
    availability: ''
  });

  const filteredClinics = useClinicSearch(clinics, searchTerm);

  const finalFilteredClinics = useMemo(() => {
    return filteredClinics.filter(clinic => {
      // Cost tier filter
      if (filters.costTier !== 'all') {
        const avgCost = clinic.pricing?.estimatedAnnualCost?.average || 0;
        if (filters.costTier === 'budget' && avgCost > 1500) return false;
        if (filters.costTier === 'mid-range' && (avgCost <= 1500 || avgCost > 2500)) return false;
        if (filters.costTier === 'premium' && avgCost <= 2500) return false;
      }

      // Rating filter
      const rating = clinic.patientExperience?.overallRating || 0;
      if (rating < filters.minRating) return false;
      
      // Location filter
      if (filters.location) {
        const clinicCity = clinic.overview?.address?.city?.toLowerCase() || '';
        const clinicRegion = clinic.overview?.address?.region?.toLowerCase() || '';
        
        if (filters.location === 'virtual') {
          const hasVirtual = clinic.services?.consultationTypes?.includes('video');
          if (!hasVirtual) return false;
        } else if (!clinicCity.includes(filters.location.toLowerCase()) && 
                  !clinicRegion.includes(filters.location.toLowerCase())) {
          return false;
        }
      }
      
      // Specialization filter
      if (filters.specialization) {
        const specialties = clinic.services?.specialties || [];
        const hasSpecialty = specialties.some(spec => 
          spec.toLowerCase().includes(filters.specialization.toLowerCase())
        );
        if (!hasSpecialty) return false;
      }
      
      // Availability filter
      if (filters.availability) {
        const waitTime = clinic.patientExperience?.nextAvailableAppointment || '';
        
        if (filters.availability === 'today' && !waitTime.includes('today')) return false;
        if (filters.availability === 'week' && !waitTime.includes('day')) return false;
        if (filters.availability === 'two-weeks' && 
           (waitTime.includes('month') || parseInt(waitTime) > 14)) return false;
      }

      return true;
    });
  }, [filteredClinics, filters]);

  // Update parent component when filters change
  React.useEffect(() => {
    onChange(finalFilteredClinics);
  }, [finalFilteredClinics, onChange]);

  const updateFilter = useCallback((key: string, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const clearAllFilters = useCallback(() => {
    setSearchTerm('');
    setFilters({
      costTier: 'all',
      minRating: 0,
      location: '',
      specialization: '',
      availability: ''
    });
  }, []);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.costTier !== 'all') count++;
    if (filters.minRating > 0) count++;
    if (filters.location) count++;
    if (filters.specialization) count++;
    if (filters.availability) count++;
    if (searchTerm) count++;
    return count;
  }, [filters, searchTerm]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search clinics, specialties, or conditions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600">
          Showing {finalFilteredClinics.length} of {clinics.length} clinics
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          {/* Cost Tier Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="h-4 w-4 inline mr-1" />
              Cost Tier
            </label>
            <div className="flex flex-wrap gap-2">
              {['all', 'budget', 'mid-range', 'premium'].map(tier => (
                <button
                  key={tier}
                  onClick={() => updateFilter('costTier', tier)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                    filters.costTier === tier
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {tier === 'all' ? 'All' :
                   tier === 'budget' ? 'Budget (Under £1,500/yr)' :
                   tier === 'mid-range' ? 'Mid-range (£1,500-£2,500/yr)' :
                   'Premium (£2,500+/yr)'}
                </button>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Star className="h-4 w-4 inline mr-1" />
              Minimum Rating
            </label>
            <div className="flex flex-wrap gap-2">
              {[0, 3, 4, 4.5].map(rating => (
                <button
                  key={rating}
                  onClick={() => updateFilter('minRating', rating)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                    filters.minRating === rating
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {rating === 0 ? 'Any' : `${rating}+ Stars`}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          
          {filters.costTier !== 'all' && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {filters.costTier === 'budget' ? 'Budget' : 
               filters.costTier === 'mid-range' ? 'Mid-range' : 'Premium'}
              <button 
                onClick={() => updateFilter('costTier', 'all')}
                className="ml-1 text-blue-600 hover:text-blue-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          
          {filters.minRating > 0 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              {filters.minRating}+ Stars
              <button 
                onClick={() => updateFilter('minRating', 0)}
                className="ml-1 text-yellow-600 hover:text-yellow-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          
          {searchTerm && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              "{searchTerm}"
              <button 
                onClick={() => setSearchTerm('')}
                className="ml-1 text-green-600 hover:text-green-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          
          <button
            onClick={clearAllFilters}
            className="text-xs text-blue-600 hover:text-blue-800 ml-2"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(OptimizedFilterAndSort);