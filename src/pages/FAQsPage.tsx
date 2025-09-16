import React from 'react';
import { Link } from 'react-router-dom';
import { getArticlesBySection, Article } from '../utils/articleLoader';
import { Calendar, User, ArrowRight, HelpCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import MetaTags from '../components/MetaTags';

export default function FAQsPage() {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const fetchedArticles = await getArticlesBySection('FAQs');
        setArticles(fetchedArticles);
      } catch (err) {
        console.error('Error fetching FAQ articles:', err);
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
            { label: 'FAQs', path: '/faqs' }
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
          title="Medical Cannabis FAQs UK - Frequently Asked Questions"
          description="Frequently asked questions about medical cannabis treatment in the UK. Get answers to common questions about eligibility, costs, and treatment options."
          canonicalUrl="https://comparetheleaf.co.uk/faqs"
          keywords={['medical cannabis FAQ UK', 'cannabis questions', 'medical cannabis help', 'cannabis treatment FAQ']}
        />
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: 'FAQs', path: '/faqs' }
          ]}
        />
        
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <HelpCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed answers to common questions about medical cannabis treatment in the UK.
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {articles.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500 text-lg">No published FAQ articles available yet.</p>
              <p className="text-gray-400 text-sm mt-2">FAQ articles published in the admin panel will appear here.</p>
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