import React, { ReactNode } from 'react';

interface MetricCardProps {
  icon: ReactNode;
  metric: string | number;
  label: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, metric, label, className = '' }) => {
  return (
    <div className={`bg-neutral-100 rounded-card shadow-sm hover:shadow-md transition-shadow w-[152px] h-[152px] flex flex-col items-center justify-center p-4 ${className}`}>
      <div className="text-primary-600 mb-3">{icon}</div>
      <div className="text-2xl font-bold text-primary-700 mb-1">{metric}</div>
      <div className="text-xs font-medium uppercase text-gray-600">{label}</div>
    </div>
  );
};

export default MetricCard;