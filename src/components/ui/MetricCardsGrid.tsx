import React from 'react';
import MetricCard from './MetricCard';

interface MetricData {
  icon: React.ReactNode;
  metric: string | number;
  label: string;
}

interface MetricCardsGridProps {
  metrics: MetricData[];
  title?: string;
  description?: string;
  className?: string;
}

const MetricCardsGrid: React.FC<MetricCardsGridProps> = ({
  metrics,
  title,
  description,
  className = '',
}) => {
  return (
    <section className={`py-16 lg:py-20 ${className}`} role="region" aria-label="Key metrics and statistics">
      <div className="container mx-auto px-4 lg:px-0">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="heading-lg text-gray-900 mb-4">{title}</h2>}
            {description && <p className="subheading max-w-3xl mx-auto">{description}</p>}
          </div>
        )}
        
        <div className="flex flex-wrap justify-center gap-6" role="list">
          {metrics.map((metric, index) => (
            <div key={index} role="listitem">
              <MetricCard
              icon={metric.icon}
              metric={metric.metric}
              label={metric.label}
              className={`stagger-item animate-fade-in opacity-0`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricCardsGrid;