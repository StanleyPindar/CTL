import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, ArrowLeft, TrendingUp, Clock } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import { getSuggestedAlternatives } from '../utils/routeUtils';
import { usePageTracking } from '../hooks/usePageTracking';
import FuzzyRouteMatch from '../components/common/FuzzyRouteMatch';
import { analytics } from '../utils/analytics';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pathname, setPathname] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // Track 404 pages for analytics
  usePageTracking({ track404s: true });
  
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    setPathname(currentPath);
    
    // Extract potential search term from URL
    const urlParts = currentPath.split('/').filter(Boolean);
    const lastPart = urlParts[urlParts.length - 1];
    if (lastPart) {
      setSearchTerm(lastPart.replace(/-/g, ' '));
    }
    
    // Track 404 with context
    analytics.track404(currentPath, document.referrer);
  }, []);
  
  const suggestedPages = React.useMemo(() => 
    getSuggestedAlternatives(pathname), 
    [pathname]
  );
  
  const popularPages = [
    { path: '/quiz', label: 'Find My Clinic', icon: Search },
    { path: '/clinics', label: 'Browse Clinics', icon: Home },
    { path: '/conditions', label: 'Medical Conditions', icon: TrendingUp },
    { path: '/tools', label: 'Helpful Tools', icon: Clock }
  ];

  const handleSuggestionClick = (path: string) => {
    analytics.trackSuccessfulRedirect(pathname, path);
    navigate(path);
  };
  
  // Debug information for live environment
  React.useEffect(() => {
    console.log('404 Page loaded for path:', pathname);
    console.log('Suggested alternatives:', suggestedPages);
  }, [pathname, suggestedPages]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <MetaTags 
        title="Page Not Found - CompareTheLeaf"
        description="The page you're looking for doesn't exist. Find medical cannabis clinics and resources on CompareTheLeaf."
        canonicalUrl="https://comparetheleaf.co.uk/404"
      />
      
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Search className="h-8 w-8 text-red-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for at <code className="bg-gray-100 px-2 py-1 rounded text-sm">{pathname}</code>. 
            It may have been moved, deleted, or you may have entered an incorrect URL.
          </p>
          
          {/* Debug info for live environment */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left">
              <h4 className="font-medium text-gray-900 mb-2">Debug Info:</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <div>Current path: {pathname}</div>
                <div>Referrer: {document.referrer || 'Direct'}</div>
                <div>Search term: {searchTerm || 'None'}</div>
                <div>Suggestions: {suggestedPages.join(', ')}</div>
              </div>
            </div>
          )}
          
          {/* Fuzzy Route Matching */}
          {searchTerm && (
            <FuzzyRouteMatch 
              searchTerm={searchTerm} 
              onSelect={handleSuggestionClick}
            />
          )}
          
          {/* Suggested Alternatives */}
          {suggestedPages.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Were you looking for one of these?
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {suggestedPages.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(page)}
                    className="text-left px-4 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all font-medium"
            >
              <Home className="h-4 w-4 mr-2" />
              Go to Homepage
            </button>
            
            <button
              onClick={() => handleSuggestionClick('/quiz')}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Find My Clinic
            </button>
          </div>
          
          {/* Popular Pages */}
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Popular pages:</h4>
            <div className="grid grid-cols-2 gap-2">
              {popularPages.map((page, index) => {
                const IconComponent = page.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(page.path)}
                    className="flex items-center justify-center px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {page.label}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="mt-6 text-xs text-gray-500">
            <p>Error Code: 404 • Page: {pathname} • Referrer: {document.referrer || 'Direct'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;