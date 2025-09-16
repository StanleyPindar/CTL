import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTrackingOptions {
  trackPageViews?: boolean;
  track404s?: boolean;
  trackLoadTimes?: boolean;
}

export const usePageTracking = (options: PageTrackingOptions = {}) => {
  const location = useLocation();
  const {
    trackPageViews = true,
    track404s = true,
    trackLoadTimes = true
  } = options;

  useEffect(() => {
    const startTime = performance.now();

    // Track page view
    if (trackPageViews && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-HFBVPZQKMC', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });
    }

    // Track load time when component unmounts
    return () => {
      if (trackLoadTimes) {
        const loadTime = performance.now() - startTime;
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_load_time', {
            value: Math.round(loadTime),
            page_path: location.pathname
          });
        }
      }
    };
  }, [location.pathname, trackPageViews, trackLoadTimes]);

  // Track 404 errors
  useEffect(() => {
    if (track404s && location.pathname.includes('/404')) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', '404_error', {
          page_location: window.location.href,
          page_path: location.pathname
        });
      }
    }
  }, [location.pathname, track404s]);
};