import { slugify } from './slugify';

// Common route patterns and their validation logic
const routePatterns = {
  clinic: {
    pattern: /^\/clinics?\/([^\/]+)$/,
    validate: (slug: string, clinics: any[]) => {
      return clinics.some(clinic => 
        slugify(clinic.overview?.name || '') === slug ||
        clinic.overview?.id === slug
      );
    },
    fallback: '/clinics'
  },
  
  article: {
    pattern: /^\/articles\/([^\/]+)$/,
    validate: async (slug: string) => {
      try {
        const { getAllArticles } = await import('./articleLoader');
        const articles = await getAllArticles();
        return articles.some(article => article.slug === slug);
      } catch {
        return false;
      }
    },
    fallback: '/articles'
  },
  
  review: {
    pattern: /^\/reviews\/([^\/]+)$/,
    validate: async (slug: string) => {
      try {
        const { getAllReviews } = await import('./reviewLoader');
        const reviews = await getAllReviews();
        return reviews.some(review => review.slug === slug);
      } catch {
        return false;
      }
    },
    fallback: '/reviews'
  },
  
  condition: {
    pattern: /^\/conditions\/([^\/]+)$/,
    validate: (slug: string) => {
      const validConditions = [
        'chronic-pain', 'anxiety-ptsd', 'insomnia', 'multiple-sclerosis', 
        'epilepsy', 'cancer', 'chronic-pain-matching', 'chronic-pain-article',
        'anxiety-article', 'insomnia-article', 'multiple-sclerosis-article',
        'epilepsy-article', 'cancer-article'
      ];
      return validConditions.includes(slug);
    },
    fallback: '/conditions'
  },
  
  education: {
    pattern: /^\/education\/([^\/]+)$/,
    validate: (slug: string) => {
      const validPages = [
        'hub', 'how-to-get-prescription', 'how-to-get-a-clinic',
        'uk-complete-guide', 'clinic-comparison-guide', 'patient-stories',
        'market-insights'
      ];
      return validPages.includes(slug);
    },
    fallback: '/education/hub'
  }
};

const validateRoute = async (pathname: string, clinics: any[] = []): Promise<{
  isValid: boolean;
  suggestedRedirect?: string;
  error?: string;
}> => {
  // Check each route pattern
  for (const [routeType, config] of Object.entries(routePatterns)) {
    const match = pathname.match(config.pattern);
    if (match) {
      const slug = match[1];
      
      try {
        const isValid = await config.validate(slug, clinics);
        
        if (!isValid) {
          return {
            isValid: false,
            suggestedRedirect: config.fallback,
            error: `${routeType.charAt(0).toUpperCase() + routeType.slice(1)} not found`
          };
        }
        
        return { isValid: true };
      } catch (error) {
        return {
          isValid: false,
          suggestedRedirect: config.fallback,
          error: `Error validating ${routeType}`
        };
      }
    }
  }
  
  // If no pattern matches, it's likely a valid static route or should 404
  return { isValid: true };
};

// Generate suggested alternatives for 404 pages
export const getSuggestedAlternatives = (pathname: string): string[] => {
  const suggestions: string[] = [];
  
  // Extract potential keywords from the path
  const pathParts = pathname.split('/').filter(Boolean);
  const lastPart = pathParts[pathParts.length - 1];
  
  // Common misspellings and alternatives
  const alternatives: Record<string, string[]> = {
    'clinic': ['/clinics', '/quiz'],
    'review': ['/reviews', '/clinics'],
    'condition': ['/conditions', '/quiz'],
    'pain': ['/conditions/chronic-pain', '/quiz'],
    'anxiety': ['/conditions/anxiety-ptsd', '/quiz'],
    'sleep': ['/conditions/insomnia', '/quiz'],
    'epilepsy': ['/conditions/epilepsy', '/quiz'],
    'ms': ['/conditions/multiple-sclerosis', '/quiz'],
    'cancer': ['/conditions/cancer', '/quiz'],
    'cost': ['/budget-tool', '/tools'],
    'price': ['/budget-tool', '/clinics'],
    'eligible': ['/qualify', '/check-eligibility'],
    'legal': ['/legalities', '/education/hub'],
    'help': ['/faq', '/contact'],
    'about': ['/about', '/contact']
  };
  
  // Check for keyword matches
  for (const [keyword, urls] of Object.entries(alternatives)) {
    if (lastPart?.toLowerCase().includes(keyword)) {
      suggestions.push(...urls);
    }
  }
  
  // Default suggestions if no matches
  if (suggestions.length === 0) {
    suggestions.push('/quiz', '/clinics', '/conditions', '/education/hub');
  }
  
  return [...new Set(suggestions)].slice(0, 4); // Remove duplicates and limit to 4
};