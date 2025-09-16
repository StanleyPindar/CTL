import React, { Component, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AlertTriangle, RefreshCw, Home, Search } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class RouteErrorBoundaryClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Log route-specific errors
    console.error('Route Error:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      url: window.location.href
    });

    // Track 404s and route errors for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'route_error', {
        error_message: error.message,
        page_location: window.location.href
      });
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return <RouteErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

const RouteErrorFallback: React.FC<{ error?: Error }> = ({ error }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isNotFound = error?.message?.includes('not found') || 
                   error?.message?.includes('404') ||
                   location.pathname.includes('/404');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          {isNotFound ? (
            <Search className="h-8 w-8 text-red-600" />
          ) : (
            <AlertTriangle className="h-8 w-8 text-red-600" />
          )}
        </div>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {isNotFound ? 'Page Not Found' : 'Something went wrong'}
        </h2>
        
        <p className="text-gray-600 mb-6">
          {isNotFound 
            ? 'The page you\'re looking for doesn\'t exist or has been moved.'
            : 'We\'re sorry, but something unexpected happened. Please try again.'
          }
        </p>
        
        <div className="space-y-3">
          <button
            onClick={() => navigate('/')}
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Go to Homepage
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </button>
        </div>
        
        {error && process.env.NODE_ENV === 'development' && (
          <details className="mt-4 text-left">
            <summary className="text-sm text-gray-500 cursor-pointer">Error Details</summary>
            <pre className="text-xs text-red-600 mt-2 overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

const RouteErrorBoundary: React.FC<Props> = (props) => {
  return <RouteErrorBoundaryClass {...props} />;
};

export default RouteErrorBoundary;