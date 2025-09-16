import React, { useEffect } from 'react';
import { analytics } from '../../utils/analytics';

const BrokenLinkDetector: React.FC = () => {
  useEffect(() => {
    // Only run in development or with a flag
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('detectBrokenLinks')) {
      return;
    }

    const checkLinks = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      const brokenLinks: string[] = [];

      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Check if it's a known route pattern that might be broken
        const dynamicPatterns = [
          /^\/clinics\/[^\/]+$/,
          /^\/articles\/[^\/]+$/,
          /^\/reviews\/[^\/]+$/,
          /^\/conditions\/[^\/]+$/,
          /^\/education\/[^\/]+$/
        ];

        const isDynamic = dynamicPatterns.some(pattern => pattern.test(href));
        
        if (isDynamic) {
          // We can't easily validate these without data, but we can log them
          console.log('Dynamic link detected:', href);
        }
      });

      return brokenLinks;
    };

    // Check links after page load
    const timer = setTimeout(checkLinks, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
};

export default BrokenLinkDetector;