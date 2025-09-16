import React from 'react';
import { ExternalLink, FileText, TrendingUp } from 'lucide-react';
import { positiveOutcomes } from '../data/positiveOutcomes';

const PositiveOutcomesSection: React.FC = () => {
  const handleStudyLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Patient Outcomes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clinical research demonstrates significant improvements in patient symptoms and quality of life 
            with medical cannabis treatment across various conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positiveOutcomes.map((study) => (
            <div
              key={study.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <button
                    onClick={() => handleStudyLink(study.link)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                    title="Read full study"
                  >
                    Read Study
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {study.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 italic">
                  {study.citation}
                </p>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Key Findings:</h4>
                  <ul className="space-y-2">
                    {study.keyFindings.map((finding, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-sm text-gray-700">{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={() => handleStudyLink(study.link)}
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View on PubMed
                  <ExternalLink className="h-3 w-3 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Evidence-Based Treatment
            </h3>
            <p className="text-green-700">
              These peer-reviewed studies demonstrate the therapeutic potential of medical cannabis 
              across multiple conditions. All research is published in reputable medical journals 
              and represents real patient outcomes from clinical settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositiveOutcomesSection;