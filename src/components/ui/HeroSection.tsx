import React, { ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import ActionButton from './ActionButton';

interface HeroSectionProps {
  title: ReactNode;
  subtitle?: string;
  disclaimer?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaOnClick?: () => void;
  backgroundClass?: string;
  children?: ReactNode;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  disclaimer,
  ctaLabel,
  ctaHref,
  ctaOnClick,
  secondaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaOnClick,
  backgroundClass = 'bg-gradient-to-r from-midBlue to-darkBlue',
  children,
  className = '',
}) => {
  return (
    <section className={`py-20 lg:py-28 ${backgroundClass || 'bg-gradient-to-r from-midBlue to-darkBlue'} ${className}`} role="banner">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">{title}</h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-blue-100 mb-10">{subtitle}</p>
          )}
          
          {disclaimer && (
            <div className="bg-warning-50 text-[#975F0E] p-4 rounded-card mb-8 flex items-start" role="alert" aria-label="Important disclaimer">
              <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{disclaimer}</p>
            </div>
          )}
          
          {(ctaLabel || secondaryCtaLabel) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10" role="group" aria-label="Call to action buttons">
              {ctaLabel && (
                <ActionButton
                  label={ctaLabel}
                  href={ctaHref}
                  onClick={ctaOnClick}
                  variant="primary"
                  className="text-base px-8 py-4"
                />
              )}
              
              {secondaryCtaLabel && (
                <ActionButton
                  label={secondaryCtaLabel}
                  href={secondaryCtaHref}
                  onClick={secondaryCtaOnClick}
                  variant="secondary"
                  className="text-base px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
                />
              )}
            </div>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;