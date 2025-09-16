import React from 'react';
import { DollarSign, Target, Award } from 'lucide-react';

const ValuePropositionSection: React.FC = () => {
  const values = [
    {
      icon: DollarSign,
      title: 'Cost Transparency',
      description: 'Compare consultation fees, prescription costs, and annual expenses across all UK clinics to find the most cost-effective option for your treatment.',
      color: 'bg-blue-100 text-blue-600',
      highlightBadge: 'Save up to £2,000/year'
    },
    {
      icon: Target,
      title: 'Intelligent Matching',
      description: 'Our proprietary algorithm matches you with clinics that specialize in your condition, considering your budget, location preferences, and treatment priorities.',
      color: 'bg-green-100 text-green-600',
      highlightBadge: '95% match accuracy'
    },
    {
      icon: Award,
      title: 'Qualified Focus',
      description: 'We only list clinics with verified medical cannabis licenses and qualified specialists, ensuring you receive legal, high-quality care from experienced professionals.',
      color: 'bg-purple-100 text-purple-600',
      highlightBadge: '100% MHRA regulated'
    }
  ];

  return (
    <section className="py-16 bg-white" role="region" aria-label="Why choose CompareTheLeaf">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Compare Medical Cannabis Clinics UK with CompareTheLeaf?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate 20+ UK medical cannabis clinics where prices, specialist expertise, and patient satisfaction differ significantly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${value.color} rounded-full mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mb-3">
                  {value.highlightBadge}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/quiz"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-md"
          >
            Find My Perfect Clinic
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;