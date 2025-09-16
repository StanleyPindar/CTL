import React from 'react';
import { Link } from 'react-router-dom';
import { getArticlesBySection, Article } from '../utils/articleLoader';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';

export default function EducationArticlesPage() {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedArticles = await getArticlesBySection('Education');
        setArticles(fetchedArticles);
      } catch (err) {
        console.error('Error fetching education articles:', err);
        setError('Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Education', path: '/education' }
          ]}
        />
        <div className="flex items-center justify-center py-16">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Education', path: '/education' }
          ]}
        />
        <div className="flex items-center justify-center py-16">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-600 mb-4">{error}</p>
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
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <MetaTags 
          title="Medical Cannabis Education Articles UK - Expert Guides & Resources"
          description="In-depth educational articles about medical cannabis treatment, regulations, and best practices in the UK. Expert insights and patient guidance."
          canonicalUrl="https://comparetheleaf.co.uk/education"
          keywords={['medical cannabis education', 'cannabis articles UK', 'medical cannabis guides', 'cannabis education resources']}
        />
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Education', path: '/education' }
          ]}
        />
        
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Education Articles
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth educational resources about medical cannabis treatment, regulations, and best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {articles.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500 text-lg">No published education articles available yet.</p>
              <p className="text-gray-400 text-sm mt-2">Articles published in the admin panel will appear here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link 
                  key={article.slug} 
                  to={`/articles/${article.slug}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-medium">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                    
                    {article.view_count && article.view_count > 0 && (
                      <div className="mt-2 text-xs text-gray-400">
                        {article.view_count} views
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}