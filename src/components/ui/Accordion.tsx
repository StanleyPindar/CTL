import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem = React.memo<AccordionItemProps>(({ 
  title, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const ids = React.useMemo(() => ({
    contentId: `accordion-content-${Math.random().toString(36).substr(2, 9)}`,
    buttonId: `accordion-button-${Math.random().toString(36).substr(2, 9)}`
  }), []);

  return (
    <div 
      className="border border-neutral-300 rounded-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      itemScope 
      itemType="https://schema.org/Question"
    >
      <button
        id={ids.buttonId}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={ids.contentId}
        type="button"
      >
        <h3 className="text-lg font-medium text-gray-900 pr-4" itemProp="name">
          {title}
        </h3>
        <ChevronDown 
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} flex-shrink-0`} 
          aria-hidden="true"
        />
      </button>
      
      {isOpen && (
        <div 
          id={ids.contentId}
          className="p-5 border-t border-neutral-300 bg-white animate-fade-in"
          role="region"
          aria-labelledby={ids.buttonId}
          itemProp="acceptedAnswer"
          itemScope
          itemType="https://schema.org/Answer"
        >
          <div itemProp="text">
            {children}
          </div>
        </div>
      )}
    </div>
  );
});

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
  }[];
  className?: string;
}

const Accordion = React.memo<AccordionProps>(({ items, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          title={item.title} 
          defaultOpen={item.defaultOpen}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
});

export default Accordion;