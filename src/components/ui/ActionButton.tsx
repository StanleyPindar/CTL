import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  href,
  variant = 'primary',
  className = '',
  icon = <ArrowRight className="ml-2 h-5 w-5" />,
}) => {
  const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const combinedClass = `inline-flex items-center justify-center ${buttonClass} ${className} font-medium`;

  if (href) {
    return (
      <a href={href} className={combinedClass} role="button">
        {label}
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass} type="button">
      {label}
      {icon}
    </button>
  );
};

export default ActionButton;