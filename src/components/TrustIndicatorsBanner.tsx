import React, { useState } from 'react';
import { X, Shield, Users } from 'lucide-react';

const TrustIndicatorsBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => {
    // Check localStorage for dismissal state
    return localStorage.getItem('dismissedTrustBanner') !== 'true';
  });

  const handleClose = () => {
    setIsVisible(false);
    // Store dismissal state in localStorage
    localStorage.setItem('dismissedTrustBanner', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-midBlue to-darkBlue text-white py-2 transition-transform duration-300 ease-in-out translate-y-0" role="banner" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Trusted by 60,000+ UK patients since 2018</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">MHRA Regulated • GDPR Compliant</span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close banner"
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicatorsBanner;