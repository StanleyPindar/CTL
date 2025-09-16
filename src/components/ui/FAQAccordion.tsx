import React from 'react';
import Accordion from './Accordion';

interface FAQ {
  question: string;
  answer: React.ReactNode | string;
  defaultOpen?: boolean;
  category?: string;
  author?: string;
  dateCreated?: string;
  dateModified?: string;
  upvoteCount?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  description?: string;
  className?: string;
  showMetadata?: boolean;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title,
  description,
  className = '',
  showMetadata = false,
}) => {
  // Convert FAQs to the format expected by Accordion
  const accordionItems = faqs.map(faq => ({
    title: faq.question,
    content: (
      <div>
        <div className="prose prose-lg max-w-none">
          {typeof faq.answer === 'string' ? (
            <p>{faq.answer}</p>
          ) : (
            faq.answer
          )}
        </div>
        {showMetadata && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
              {faq.author && (
                <span>By {faq.author}</span>
              )}
              {faq.dateModified && (
                <span>Updated {new Date(faq.dateModified).toLocaleDateString('en-GB')}</span>
              )}
              {faq.category && (
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {faq.category}
                </span>
              )}
              {faq.difficulty && (
                <span className={`px-2 py-1 rounded-full ${
                  faq.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                  faq.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {faq.difficulty}
                </span>
              )}
              {faq.upvoteCount && faq.upvoteCount > 0 && (
                <span>👍 {faq.upvoteCount} helpful</span>
              )}
            </div>
          </div>
        )}
      </div>
    ),
    defaultOpen: faq.defaultOpen,
  }));

  return (
    <section 
      className={`py-16 lg:py-20 bg-white ${className}`} 
      role="region" 
      aria-label="Frequently asked questions"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div className="container mx-auto px-4 lg:px-0">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="heading-lg text-gray-900 mb-4" id="faq-heading" itemProp="name">
                {title}
              </h2>
            )}
            {description && (
              <p className="subheading max-w-3xl mx-auto" itemProp="description">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div 
          className="max-w-3xl mx-auto animate-fade-in" 
          role="group" 
          aria-labelledby="faq-heading"
          itemProp="mainEntity"
        >
          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;