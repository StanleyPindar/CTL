import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { getAllArticles, Article } from '../utils/articleLoader';
import StarRating from '../components/common/StarRating';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import MetaTags from '../components/MetaTags';

const BlogIndexPage: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedArticles = await getAllArticles();
        setArticles(fetchedArticles);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const categories = React.useMemo(() => {
    const allCategories = ['All'];
    const uniqueCategories = [...new Set(articles.map(a => a.category || 'Uncategorized'))];
    return [...allCategories, ...uniqueCategories];
  }, [articles]);

  const featuredArticles = React.useMemo(() => {
    return articles.slice(0, 2); // Show first 2 articles as featured
  }, [articles]);

  const handleArticleClick = (slug: string) => {
    navigate(`/articles/${slug}`);
  };

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
        <div className="flex items-center justify-center py-16">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
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
          title="Medical Cannabis Blog & Articles UK - Latest News & Research"
          description="Stay informed with the latest medical cannabis news, research, and insights. Expert articles about UK treatment options, regulations, and patient experiences."
          keywords={['medical cannabis blog', 'cannabis news UK', 'medical cannabis research', 'cannabis articles']}
          canonicalUrl="https://comparetheleaf.co.uk/blog"
        />
        
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Blog & Articles
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest news, research, and insights about medical cannabis treatment in the UK.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticles.length > 0 && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {featuredArticles.slice(0, 1).map((article) => (
                <div
                  key={article.id || article.slug}
                  onClick={() => handleArticleClick(article.slug)}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden mb-8"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-r from-blue-500 to-green-500"></div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800 mr-3">
                          Featured
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                          {article.category || 'Article'}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {article.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 text-lg">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-2" />
                          <span className="mr-4">{article.author || 'CompareTheLeaf Team'}</span>
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="mr-4">{formatDate(article.date)}</span>
                          {article.view_count && (
                            <>
                              <Clock className="h-4 w-4 mr-2" />
                              <span>{article.view_count} views</span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center text-blue-600 font-medium">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center py-16">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {error && (
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
        )}

        {/* Articles Grid */}
        {!loading && !error && (
          <div className="pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {articles.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-500 text-lg">No published articles available yet.</p>
                  <p className="text-gray-400 text-sm mt-2">Articles published in the admin panel will appear here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.slice(1).map((article) => (
                    <div
                      key={article.id || article.slug}
                      onClick={() => handleArticleClick(article.slug)}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden"
                    >
                      <div className="h-48 bg-gradient-to-r from-blue-400 to-green-400"></div>
                      <div className="p-6">
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default BlogIndexPage;