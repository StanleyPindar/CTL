// src/pages/ClinicReviewArticlePage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { getReviewBySlug } from '../utils/reviewLoader';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import MetaTags from '../components/MetaTags';

const ClinicReviewArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const review = getReviewBySlug(slug || '');

  if (!review) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-yellow-600 mb-4">Clinic review not found.</p>
            <button
              onClick={() => navigate('/reviews')} // Navigate to the reviews index page
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Reviews
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title={review.title}
        description={review.excerpt}
        datePublished={review.date}
        author={review.author}
        type="Article"
        keywords={['clinic review', review.clinicId, review.title.toLowerCase()]}
        canonicalUrl={`https://comparetheleaf.co.uk/reviews/article/${review.slug}`}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Clinic Reviews', path: '/reviews' },
          { label: review.title, path: `/reviews/article/${review.slug}` }
        ]}
      />

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/reviews')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Clinic Reviews
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {review.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{review.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(review.date)}</span>
              </div>
              {/* Assuming read time might be calculated or added to frontmatter later */}
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>5 min read</span> {/* Placeholder */}
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: review.content }}
            />
          </div>

          {/* Medical Disclaimer */}
          <div className="px-8 pb-8">
            <MedicalDisclaimer />
          </div>
        </article>
      </div>
    </div>
  );
};

export default ClinicReviewArticlePage;