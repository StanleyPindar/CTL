import React from 'react';
import ArticleCard from './ArticleCard';

interface Article {
  title: string;
  badges?: string[];
  bulletPoints?: string[];
  imageUrl?: string;
  readTime?: string;
  date?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
}

interface ArticleCardsGridProps {
  articles: Article[];
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

const ArticleCardsGrid: React.FC<ArticleCardsGridProps> = ({
  articles,
  title,
  description,
  columns = 3,
  className = '',
}) => {
  const getColumnsClass = () => {
    switch (columns) {
      case 2: return 'md:grid-cols-2';
      case 3: return 'md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'md:grid-cols-2 lg:grid-cols-4';
      default: return 'md:grid-cols-3';
    }
  };

  return (
    <div className={`py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto px-4 lg:px-0">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="heading-lg text-gray-900 mb-4">{title}</h2>}
            {description && <p className="subheading max-w-3xl mx-auto">{description}</p>}
          </div>
        )}
        
        <div className={`grid grid-cols-1 ${getColumnsClass()} gap-6`}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              badges={article.badges}
              bulletPoints={article.bulletPoints}
              imageUrl={article.imageUrl}
              readTime={article.readTime}
              date={article.date}
              ctaLabel={article.ctaLabel}
              ctaHref={article.ctaHref}
              ctaOnClick={article.ctaOnClick}
              className="stagger-item animate-fade-in opacity-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCardsGrid;