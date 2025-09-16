import React, { useState, useCallback } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ClinicCard from './ClinicCard';
import LoadingSpinner from '../common/LoadingSpinner';
import type { FullClinicProfile } from '../../types/clinic';

interface LazyClinicGridProps {
  clinics: FullClinicProfile[];
  onClinicClick: (clinic: FullClinicProfile) => void;
  pageSize?: number;
  className?: string;
}

const LazyClinicGrid: React.FC<LazyClinicGridProps> = ({
  clinics,
  onClinicClick,
  pageSize = 12,
  className = ''
}) => {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { ref: loadMoreRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false
  });

  const visibleClinics = clinics.slice(0, visibleCount);
  const hasMore = visibleCount < clinics.length;

  const loadMore = useCallback(async () => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);
    
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setVisibleCount(prev => Math.min(prev + pageSize, clinics.length));
    setIsLoadingMore(false);
  }, [isLoadingMore, hasMore, pageSize, clinics.length]);

  // Load more when intersection observer triggers
  React.useEffect(() => {
    if (isIntersecting && hasMore && !isLoadingMore) {
      loadMore();
    }
  }, [isIntersecting, hasMore, isLoadingMore, loadMore]);

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleClinics.map((clinic, index) => (
          <ClinicCard
            key={clinic.overview?.id || index}
            clinic={clinic}
            onClick={() => onClinicClick(clinic)}
          />
        ))}
      </div>

      {/* Load More Trigger */}
      {hasMore && (
        <div ref={loadMoreRef} className="flex justify-center py-8">
          {isLoadingMore ? (
            <div className="flex items-center space-x-2">
              <LoadingSpinner size="sm" />
              <span className="text-gray-600">Loading more clinics...</span>
            </div>
          ) : (
            <button
              onClick={loadMore}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Load More Clinics ({clinics.length - visibleCount} remaining)
            </button>
          )}
        </div>
      )}

      {/* Results Summary */}
      <div className="text-center text-sm text-gray-500 mt-4">
        Showing {visibleCount} of {clinics.length} clinics
      </div>
    </div>
  );
};

export default React.memo(LazyClinicGrid);