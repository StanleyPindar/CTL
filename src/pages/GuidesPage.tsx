import React from 'react';
import { Link } from 'react-router-dom';
import { getArticlesBySection, Article } from '../utils/articleLoader';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import MetaTags from '../components/MetaTags';

export default function GuidesPage() {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const fetchedArticles = await getArticlesBySection('Guides');
        setArticles(fetchedArticles);
      } catch (err) {
        console.error('Error fetching guides:', err);
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
            { label: 'Guides', path: '/guides' }
          ]}
        />
        <div className="flex items-center justify-center py-16">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <MetaTags 
          title="Medical Cannabis Guides UK - Step-by-Step Treatment Guides"
          description="Step-by-step guides for medical cannabis treatment in the UK. Learn how to get prescriptions, choose clinics, and navigate your treatment journey."
          canonicalUrl="https://comparetheleaf.co.uk/guides"
          keywords={['medical cannabis guides UK', 'cannabis treatment guides', 'how-to guides', 'medical cannabis help']}
        />
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Guides', path: '/guides' }
          ]}
        />
        
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Guides & How-Tos
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Step-by-step guides to help you navigate your medical cannabis journey.
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {articles.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500 text-lg">No published guides available yet.</p>
              <p className="text-gray-400 text-sm mt-2">Guides published in the admin panel will appear here.</p>
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