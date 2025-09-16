import React, { ReactNode } from 'react';
import ActionButton from './ActionButton';

interface HighlightBannerProps {
  title: string;
  description?: string;
  tags?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  className?: string;
}

const HighlightBanner: React.FC<HighlightBannerProps> = ({
  title,
  description,
  tags = [],
  ctaLabel = 'Learn More',
  ctaHref,
  ctaOnClick,
  className = '',
}) => {
  return (
    <section className={`w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 ${className}`} role="banner" aria-label="Special offer">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
            {description && <p className="text-white/90 mb-4">{description}</p>}
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4" role="list" aria-label="Offer features">
                {tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-pill bg-white/20 text-sm" role="listitem">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {(ctaHref || ctaOnClick) && (
            <ActionButton 
              label={ctaLabel} 
              href={ctaHref} 
              onClick={ctaOnClick}
              variant="secondary"
              className="bg-white text-blue-600 border-white hover:bg-white/90 shadow-md"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HighlightBanner;