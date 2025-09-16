import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import ActionButton from './ActionButton';

interface ArticleCardProps {
  title: string;
  badges?: string[];
  bulletPoints?: string[];
  imageUrl?: string;
  readTime?: string;
  date?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  badges = [],
  bulletPoints = [],
  imageUrl,
  readTime,
  date,
  ctaLabel = 'Read More',
  ctaHref,
  ctaOnClick,
  className = '',
}) => {
  return (
    <article className={`bg-neutral-100 rounded-card shadow-sm hover:shadow-md transition-shadow overflow-hidden ${className}`} itemScope itemType="https://schema.org/Article">
      {imageUrl && (
        <div className="h-48 w-full bg-gray-200">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            width="400"
            height="192"
            itemProp="image"
          />
        </div>
      )}
      
      <div className="p-6">
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {badges.map((badge, index) => (
              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-pill text-xs font-medium bg-primary-600/10 text-primary-700">
                {badge}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3" itemProp="headline">{title}</h3>
        
        {bulletPoints.length > 0 && (
          <ul className="mb-4 space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-sm text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center text-xs text-gray-500 space-x-3">
            {readTime && (
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>{readTime}</span>
              </div>
            )}
            {date && (
              <div className="flex items-center" itemProp="datePublished" content={date}>
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span>{date}</span>
              </div>
            )}
          </div>
          
          <ActionButton 
            label={ctaLabel} 
            href={ctaHref} 
            onClick={ctaOnClick}
            variant="secondary"
            className="text-sm py-1.5"
          />
        </div>
      </div>
      <meta itemProp="author" content="CompareTheLeaf Medical Team" />
      <meta itemProp="publisher" content="CompareTheLeaf" />
    </article>
  );
};

export default ArticleCard;