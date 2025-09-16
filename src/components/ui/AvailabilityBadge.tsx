import React from 'react';
import { Clock } from 'lucide-react';
import { getAvailabilityText, getAvailabilityColor } from '../../utils/availabilityUtils';

interface AvailabilityBadgeProps {
  waitTime: string;
  className?: string;
}

const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({ waitTime, className = '' }) => {
  const displayText = getAvailabilityText(waitTime);
  const colorClass = getAvailabilityColor(waitTime);
  
  return (
    <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colorClass} ${className}`}>
      <Clock className="h-3 w-3 mr-1" />
      {displayText}
    </div>
  );
};

export default AvailabilityBadge;