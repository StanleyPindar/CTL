import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from 'lucide-react';
import { getArticleBySlug, incrementViewCount, Article } from '../utils/articleLoader';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import MetaTags from '../components/MetaTags';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

const BlogPostPage: React.FC = () => {
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
              onClick={() => navigate('/blog')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Blog
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
          canonicalUrl={`https://comparetheleaf.co.uk/blog/${article.slug}`}
        />
        
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </button>
          </div>
        </div>

        {/* Article */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Article Header */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {article.category || 'Article'}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
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
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{article.view_count} views</span>
                  </div>
                )}
              </div>

              {/* Tags and Share */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {(article.tags || []).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Medical Disclaimer */}
            <div className="px-8 pb-8">
              <MedicalDisclaimer />
            </div>

            {/* Article Footer */}
            <div className="p-8 border-t border-gray-200 bg-gray-50">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Need Personalized Guidance?
                </h3>
                <p className="text-gray-600 mb-4">
                  Take our assessment to find clinics that specialize in your condition.
                </p>
                <button 
                  onClick={() => navigate('/quiz')}
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-md hover:from-blue-700 hover:to-green-700 transition-all"
                >
                  Start Assessment
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default BlogPostPage;