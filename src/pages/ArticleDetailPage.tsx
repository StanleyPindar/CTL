import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getArticleBySlug, incrementViewCount, Article } from '../utils/articleLoader';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import MetaTags from '../components/MetaTags';

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [article, setArticle] = React.useState<Article | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setError('No article slug provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const fetchedArticle = await getArticleBySlug(slug);
        
        if (!fetchedArticle) {
          setError('Article not found');
        } else {
          setArticle(fetchedArticle);
          
          // Increment view count
          if (fetchedArticle.id) {
            incrementViewCount(fetchedArticle.id);
          }
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center py-16">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">
              {error || 'The article you\'re looking for doesn\'t exist or has been moved.'}
            </p>
            <button
              onClick={() => navigate('/articles')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Articles
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
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <MetaTags 
          title={article.meta_title || article.title}
          description={article.meta_description || article.excerpt}
          datePublished={article.created_at || article.date}
          dateModified={article.updated_at}
          author={article.author}
          type="Article"
          keywords={article.tags || []}
          canonicalUrl={`https://comparetheleaf.co.uk/articles/${article.slug}`}
        />
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Articles', path: '/articles' },
            { label: article.title, path: `/articles/${article.slug}` }
          ]}
        />
        
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => navigate('/articles')}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Articles
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {article.category || article.section || 'Article'}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{article.author || 'CompareTheLeaf Team'}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(article.date)}</span>
                </div>
                {article.view_count && article.view_count > 0 && (
                  <div className="flex items-center">
                    <span>{article.view_count} views</span>
                  </div>
                )}
              </div>

              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="px-8 pb-8">
              <MedicalDisclaimer />
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Find Your Perfect Clinic?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Use our clinic matching quiz to find the best medical cannabis clinic for your specific needs.
            </p>
            <button
              onClick={() => navigate('/quiz')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Take our three-minute quiz
            </button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}