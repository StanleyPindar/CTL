import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  faq?: FAQ;
}

const AccordionItem = React.memo<AccordionItemProps>(({ 
  title, 
  children, 
  defaultOpen = false,
  faq
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
      itemProp="mainEntity"
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
          
          {/* Add FAQ metadata if available */}
          {faq && (
            <>
              {faq.dateCreated && <meta itemProp="dateCreated" content={faq.dateCreated} />}
              {faq.dateModified && <meta itemProp="dateModified" content={faq.dateModified} />}
              {faq.upvoteCount && <meta itemProp="upvoteCount" content={faq.upvoteCount.toString()} />}
              {faq.author && (
                <div itemProp="author" itemScope itemType="https://schema.org/Person" style={{ display: 'none' }}>
                  <meta itemProp="name" content={faq.author} />
                </div>
              )}
            </>
          )}
        </div>
      )}
      
      {/* Question metadata */}
      {faq && (
        <>
          {faq.dateCreated && <meta itemProp="dateCreated" content={faq.dateCreated} />}
          {faq.dateModified && <meta itemProp="dateModified" content={faq.dateModified} />}
          {faq.upvoteCount && <meta itemProp="upvoteCount" content={faq.upvoteCount.toString()} />}
          <meta itemProp="answerCount" content="1" />
          {faq.author && (
            <div itemProp="author" itemScope itemType="https://schema.org/Person" style={{ display: 'none' }}>
              <meta itemProp="name" content={faq.author} />
            </div>
          )}
        </>
      )}
    </div>
  );
});

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
          className="max-w-3xl mx-auto animate-fade-in space-y-4" 
          role="group" 
          aria-labelledby="faq-heading"
        >
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              title={faq.question} 
              defaultOpen={faq.defaultOpen}
              faq={faq}
            >
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
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;