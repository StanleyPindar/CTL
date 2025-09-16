import { supabase } from '../lib/supabase';

interface Review {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  clinicId: string;
  rating?: number;
  tags?: string[];
}

// Cache for reviews to avoid repeated database calls
let reviewsCache: Review[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getAllReviews = async (): Promise<Review[]> => {
  try {
    // Check cache first
    const now = Date.now();
    if (reviewsCache && (now - cacheTimestamp) < CACHE_DURATION) {
      return reviewsCache;
    }

    // Return reviews based on available dedicated review pages
    const reviews = getFallbackReviews();
    reviewsCache = reviews;
    cacheTimestamp = now;
    return reviews;
  } catch (error) {
    console.error('Error loading reviews:', error);
    return getFallbackReviews();
  }
};

// Get review by slug (expects clinic-name-review format)
export const getReviewBySlug = async (slug: string): Promise<Review | null> => {
  try {
    // Try to get from cache first
    const reviews = await getAllReviews();
    const cachedReview = reviews.find(review => review.slug === slug);
    if (cachedReview) {
      return cachedReview;
    }


    // If not in cache and not in fallback reviews, return null
    return null;
  } catch (error) {
    console.error('Error fetching review by slug:', error);
    return null;
  }
};

// Fallback reviews for when Supabase is unavailable
const getFallbackReviews = (): Review[] => {
  return [
    {
      id: 'cb1-medical',
      slug: 'cb1-medical-review',
      title: 'CB1 Medical Review',
      excerpt: 'Comprehensive review of CB1 Medical, the UK\'s most affordable medical cannabis clinic with £50 flat fee covering all consultations for 12 months.',
      content: `
        <h2>CB1 Medical Review</h2>
        <p>CB1 Medical has branded itself the "UK's most affordable medical-cannabis clinic," charging a single £50 flat fee that covers every consultation for an entire year.</p>
        <p>This revolutionary pricing model makes medical cannabis treatment accessible to patients who might otherwise be priced out of care.</p>
      `,
      author: 'CompareTheLeaf Medical Team',
      date: '2024-02-10',
      clinicId: 'cb1-medical',
      rating: 4.8,
      tags: ['affordable', 'flat-fee', 'leicester']
    },
    {
      id: 'releaf',
      slug: 'releaf-review',
      title: 'Releaf Review',
      excerpt: 'Comprehensive review of Releaf\'s digital-first medical cannabis platform with AI-powered dosing and comprehensive mobile app.',
      content: `
        <h2>Releaf Review</h2>
        <p>Releaf represents the cutting edge of medical cannabis clinics with its AI-powered platform and comprehensive digital approach.</p>
        <p>Their technology-first model offers precision dosing recommendations and 24/7 support through a sophisticated mobile app.</p>
      `,
      author: 'CompareTheLeaf Medical Team',
      date: '2024-02-15',
      clinicId: 'releaf',
      rating: 4.8,
      tags: ['digital', 'ai-powered', 'mobile-app']
    },
    {
      id: 'alternaleaf',
      slug: 'alternaleaf-review',
      title: 'Alternaleaf Review',
      excerpt: 'Comprehensive review of Alternaleaf, offering affordable medical cannabis treatment with membership benefits.',
      content: `
        <h2>Alternaleaf Review</h2>
        <p>Alternaleaf offers a membership-based approach to medical cannabis treatment, focusing on making treatment more affordable and accessible for patients across the UK.</p>
        <p>Their membership model provides significant cost savings for long-term patients.</p>
      `,
      author: 'CompareTheLeaf Medical Team',
      date: '2024-02-20',
      clinicId: 'alternaleaf',
      rating: 4.6,
      tags: ['membership', 'affordable', 'accessible']
    },
    {
      id: 'mamedica',
      slug: 'mamedica-review',
      title: 'Mamedica Review',
      excerpt: 'Comprehensive review of Mamedica, the value-for-life medical cannabis clinic with minimal appointment burden.',
      content: `
        <h2>Mamedica Review</h2>
        <p>Mamedica has built a reputation as the "value-for-life" player in the UK medical cannabis space by front-loading its professional fees and then stretching mandatory reviews to once every twelve months.</p>
        <p>After a £150 initial consultation, follow-ups drop to £75 a year, giving Mamedica the lowest long-term consultation cost in the market.</p>
      `,
      author: 'CompareTheLeaf Medical Team',
      date: '2024-02-25',
      clinicId: 'mamedica',
      rating: 4.5,
      tags: ['value', 'long-term', 'affordable']
    },
    {
      id: 'cantourage',
      slug: 'cantourage-review',
      title: 'Cantourage Review',
      excerpt: 'Comprehensive review of Cantourage Clinic, veterans-focused medical cannabis treatment with specialized care.',
      content: `
        <h2>Cantourage Review</h2>
        <p>Cantourage Clinic specializes in veterans care with German GMP-grade sourcing and Combat Stress partnership.</p>
        <p>They offer specialized PTSD treatment and trauma-informed care for military veterans and first responders.</p>
      `,
      author: 'CompareTheLeaf Medical Team',
      date: '2024-02-28',
      clinicId: 'cantourage',
      rating: 4.2,
      tags: ['veterans', 'specialized', 'ptsd']
    },
    {
      id: 'dispensed',
      slug: 'dispensed-review',
      title: 'Dispensed Review',
      excerpt: 'Comprehensive review of Dispensed, the credit-back medical cannabis clinic with innovative pricing model.',
      content: `
        <h2>Dispensed Review</h2>
        <p>Dispensed offers a unique credit-back model where consultation fees are credited against prescription costs.</p>
        <p>This innovative approach makes medical cannabis treatment more accessible and cost-effective for patients.</p>
      `,
      author: 'CompareTheLeaf Medical Team',
      date: '2024-03-01',
      clinicId: 'dispensed',
      rating: 4.4,
      tags: ['credit-back', 'innovative', 'affordable']
    },
    {
      id: 'birmingham-cannabis-care',
      slug: 'birmingham-cannabis-care-review',
      title: 'Birmingham Cannabis Clinic Review',
      excerpt: 'Comprehensive review of Birmingham Cannabis Clinic, West Midlands dedicated face-to-face medical cannabis clinic.',
      content: `
        <h2>Birmingham Cannabis Clinic Review</h2>
        <p>Birmingham Cannabis Clinic is the West Midlands' dedicated face-to-face medical cannabis clinic, specializing in chronic pain treatment.</p>
        <p>They offer in-person consultations for patients who prefer traditional medical appointments.</p>
      `,
      author: 'CompareTheLeaf Medical Team',
      date: '2024-03-05',
      clinicId: 'birmingham-cannabis-care',
      rating: 4.0,
      tags: ['face-to-face', 'birmingham', 'chronic-pain']
    }
  ];
};

// Clear cache function for admin use
export const clearReviewCache = (): void => {
  reviewsCache = null;
  cacheTimestamp = 0;
};