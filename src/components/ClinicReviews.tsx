import React, { useState, useEffect } from 'react';
import { User, Calendar, CheckCircle, ThumbsUp, Star } from 'lucide-react';
import StarRating from './common/StarRating';
import { supabase } from '../lib/supabase';

interface Review {
  id: number;
  user_id: string;
  clinic_id: string;
  rating: number;
  review_text: string;
  pros: string[];
  cons: string[];
  treatment_type: string;
  would_recommend: boolean;
  verified: boolean;
  created_at: string;
}

interface ClinicReviewsProps {
  clinicId: string;
  clinicName: string;
}

const ClinicReviews: React.FC<ClinicReviewsProps> = ({ clinicId, clinicName }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (!clinicId) {
          setLoading(false);
          return;
        }
        
        setLoading(true);
        
        const { data, error } = await supabase
          .from('clinic_reviews')
          .select('*')
          .eq('clinic_id', clinicId)
          .order('created_at', { ascending: false });

        if (error) throw error;

        setReviews(data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, [clinicId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient Reviews</h2>
        <div className="animate-pulse">
          <div className="h-24 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-24 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-24 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient Reviews</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient Reviews</h2>
        <div className="text-center py-8">
          <Star className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No reviews yet for {clinicName}</p>
          <p className="text-sm text-gray-400 mt-2">Be the first to share your experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient Reviews ({reviews.length})</h2>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center mb-2">
                  <StarRating value={review.rating} size={16} />
                  <span className="ml-2 font-semibold">{review.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-1" />
                  <span>Anonymous User</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(review.created_at)}</span>
                </div>
              </div>
              
              {review.verified && (
                <div className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified Patient
                </div>
              )}
            </div>
            
            <p className="text-gray-700 mb-4">{review.review_text}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {review.pros && review.pros.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {review.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {review.cons && review.cons.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {review.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">×</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Treatment: <span className="font-medium">{review.treatment_type || 'Not specified'}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                {review.would_recommend ? (
                  <div className="flex items-center text-green-600">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Would recommend
                  </div>
                ) : (
                  <div className="flex items-center text-red-600">
                    <ThumbsUp className="h-4 w-4 mr-1 transform rotate-180" />
                    Would not recommend
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicReviews;