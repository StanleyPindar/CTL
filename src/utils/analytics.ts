// Analytics utilities for tracking 404s and user behavior

interface AnalyticsEvent {
  event: string;
  page_location?: string;
  page_path?: string;
  error_message?: string;
  suggested_redirect?: string;
  user_action?: string;
}

class AnalyticsService {
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = typeof window !== 'undefined' && 
                    window.gtag !== undefined && 
                    process.env.NODE_ENV === 'production';
  }

  // Track 404 errors with context
  track404(pathname: string, referrer?: string, suggestedRedirect?: string) {
    this.trackEvent({
      event: 'page_not_found',
      page_location: window.location.href,
      page_path: pathname,
      error_message: '404 - Page Not Found',
      suggested_redirect: suggestedRedirect
    });

    // Also track the referrer to understand how users got to 404s
    if (referrer) {
      this.trackEvent({
        event: '404_referrer',
        page_location: window.location.href,
        page_path: pathname,
        error_message: `Referred from: ${referrer}`
      });
    }
  }

  // Track route errors (different from 404s)
  trackRouteError(error: Error, pathname: string) {
    this.trackEvent({
      event: 'route_error',
      page_location: window.location.href,
      page_path: pathname,
      error_message: error.message
    });
  }

  // Track successful redirects from 404s
  trackSuccessfulRedirect(fromPath: string, toPath: string) {
    this.trackEvent({
      event: '404_redirect_success',
      page_path: fromPath,
      suggested_redirect: toPath,
      user_action: 'redirect_accepted'
    });
  }

  // Track when users ignore suggestions and navigate elsewhere
  trackRedirectIgnored(fromPath: string, suggestedPath: string, actualPath: string) {
    this.trackEvent({
      event: '404_redirect_ignored',
      page_path: fromPath,
      suggested_redirect: suggestedPath,
      user_action: `navigated_to_${actualPath}`
    });
  }

  // Generic event tracking
  private trackEvent(eventData: AnalyticsEvent) {
    if (!this.isEnabled) {
      console.log('Analytics Event:', eventData);
      return;
    }

    try {
      window.gtag('config', 'G-HFBVPZQKMC', {
        ...eventData,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Analytics tracking failed:', error);
    }
  }

  // Get 404 patterns for analysis
  get404Patterns(): string[] {
    // This would typically come from your analytics API
    // For now, return common patterns we expect
    return [
      '/clinic/*',
      '/clinics/*',
      '/articles/*',
      '/reviews/*',
      '/conditions/*',
      '/education/*',
      '/blog/*'
    ];
  }

  // Generate 404 report
  generate404Report(): {
    totalCount: number;
    topPaths: string[];
    commonPatterns: string[];
    suggestedFixes: string[];
  } {
    // This would integrate with your analytics API
    // For now, return mock data based on common issues
    return {
      totalCount: 34,
      topPaths: [
        '/clinic/invalid-id',
        '/articles/old-slug',
        '/reviews/missing-review',
        '/conditions/invalid-condition'
      ],
      commonPatterns: [
        'Dynamic route with invalid ID/slug',
        'Old URLs from previous site structure',
        'Typos in manual URL entry',
        'Broken internal links'
      ],
      suggestedFixes: [
        'Add URL redirects for old paths',
        'Implement fuzzy matching for typos',
        'Add breadcrumb navigation',
        'Improve internal linking'
      ]
    };
  }
}

export const analytics = new AnalyticsService();

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}