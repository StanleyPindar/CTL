import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

interface FuzzyRouteMatchProps {
  searchTerm: string;
  onSelect: (path: string) => void;
}

const FuzzyRouteMatch: React.FC<FuzzyRouteMatchProps> = ({ searchTerm, onSelect }) => {
  const navigate = useNavigate();

  // Fuzzy matching algorithm for route suggestions
  const fuzzyMatch = (term: string, target: string): number => {
    const termLower = term.toLowerCase();
    const targetLower = target.toLowerCase();
    
    // Exact match
    if (targetLower.includes(termLower)) return 100;
    
    // Character similarity
    let matches = 0;
    for (let i = 0; i < termLower.length; i++) {
      if (targetLower.includes(termLower[i])) matches++;
    }
    
    return (matches / termLower.length) * 80;
  };

  const routes = [
    { path: '/clinics', label: 'Browse Clinics', keywords: ['clinic', 'doctor', 'treatment'] },
    { path: '/quiz', label: 'Find My Clinic', keywords: ['quiz', 'match', 'find', 'recommend'] },
    { path: '/conditions/chronic-pain', label: 'Chronic Pain', keywords: ['pain', 'chronic', 'hurt', 'ache'] },
    { path: '/conditions/anxiety-ptsd', label: 'Anxiety & PTSD', keywords: ['anxiety', 'ptsd', 'stress', 'mental'] },
    { path: '/conditions/insomnia', label: 'Sleep Disorders', keywords: ['sleep', 'insomnia', 'tired'] },
    { path: '/conditions/epilepsy', label: 'Epilepsy', keywords: ['epilepsy', 'seizure', 'convulsion'] },
    { path: '/reviews', label: 'Clinic Reviews', keywords: ['review', 'rating', 'experience'] },
    { path: '/budget-tool', label: 'Budget Calculator', keywords: ['cost', 'price', 'budget', 'money'] },
    { path: '/qualify', label: 'Eligibility Checker', keywords: ['eligible', 'qualify', 'check'] },
    { path: '/education/hub', label: 'Education Hub', keywords: ['learn', 'education', 'guide'] },
    { path: '/legalities', label: 'Legal Information', keywords: ['legal', 'law', 'regulation'] },
    { path: '/faq', label: 'FAQ', keywords: ['faq', 'question', 'help'] }
  ];

  // Calculate matches and sort by relevance
  const matches = routes
    .map(route => {
      const pathScore = fuzzyMatch(searchTerm, route.path);
      const labelScore = fuzzyMatch(searchTerm, route.label);
      const keywordScore = Math.max(...route.keywords.map(k => fuzzyMatch(searchTerm, k)));
      
      return {
        ...route,
        score: Math.max(pathScore, labelScore, keywordScore)
      };
    })
    .filter(route => route.score > 30)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (matches.length === 0) {
    return null;
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
      <h4 className="text-sm font-medium text-blue-800 mb-3 flex items-center">
        <Search className="h-4 w-4 mr-2" />
        Did you mean one of these?
      </h4>
      <div className="space-y-2">
        {matches.map((match, index) => (
          <button
            key={index}
            onClick={() => onSelect(match.path)}
            className="w-full text-left px-3 py-2 text-sm text-blue-700 hover:bg-blue-100 rounded-md transition-colors flex items-center justify-between"
          >
            <span>{match.label}</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FuzzyRouteMatch;