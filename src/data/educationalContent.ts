interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  featured: boolean;
  tags: string[];
}

export const educationalArticles: Article[] = [
  {
    id: 1,
    slug: 'how-to-get-prescription',
    title: 'How to Get a Medical Cannabis Prescription in the UK',
    excerpt: 'A comprehensive step-by-step guide to obtaining a legal medical cannabis prescription, from initial consultation to receiving your medication.',
    category: 'Getting Started',
    readTime: '12 min read',
    author: 'Dr. Sarah Williams',
    date: '2024-01-20',
    featured: true,
    tags: ['prescription', 'legal', 'process', 'consultation']
  },
  {
    id: 2,
    slug: 'understanding-cannabinoids',
    title: 'Understanding Cannabinoids: THC vs CBD',
    excerpt: 'Learn about the different cannabinoids, their effects, and how they work together to provide therapeutic benefits.',
    category: 'Science',
    readTime: '8 min read',
    author: 'Dr. Michael Chen',
    date: '2024-01-18',
    featured: false,
    tags: ['cannabinoids', 'THC', 'CBD', 'science']
  },
  {
    id: 3,
    slug: 'dosing-guidelines',
    title: 'Medical Cannabis Dosing Guidelines',
    excerpt: 'Essential information about starting doses, titration, and finding your optimal therapeutic dose safely.',
    category: 'Treatment',
    readTime: '10 min read',
    author: 'Dr. Emma Roberts',
    date: '2024-01-15',
    featured: false,
    tags: ['dosing', 'safety', 'treatment', 'guidelines']
  },
  {
    id: 4,
    slug: 'legal-framework-uk',
    title: 'UK Legal Framework for Medical Cannabis',
    excerpt: 'Understanding the legal landscape, regulations, and your rights as a medical cannabis patient in the UK.',
    category: 'Legal',
    readTime: '15 min read',
    author: 'Legal Team',
    date: '2024-01-12',
    featured: true,
    tags: ['legal', 'regulations', 'rights', 'UK']
  },
  {
    id: 5,
    slug: 'side-effects-management',
    title: 'Managing Side Effects of Medical Cannabis',
    excerpt: 'Common side effects, how to minimize them, and when to contact your healthcare provider.',
    category: 'Safety',
    readTime: '7 min read',
    author: 'Dr. James Thompson',
    date: '2024-01-10',
    featured: false,
    tags: ['side-effects', 'safety', 'management', 'healthcare']
  },
  {
    id: 6,
    slug: 'drug-interactions',
    title: 'Medical Cannabis Drug Interactions',
    excerpt: 'Important information about how medical cannabis may interact with other medications.',
    category: 'Safety',
    readTime: '9 min read',
    author: 'Dr. Lisa Anderson',
    date: '2024-01-08',
    featured: false,
    tags: ['interactions', 'medications', 'safety', 'warnings']
  }
];

export const categories = [
  'All',
  'Getting Started',
  'Science',
  'Treatment',
  'Legal',
  'Safety'
];