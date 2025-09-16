import { supabase } from '../lib/supabase';

export interface Article {
  id?: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  section?: string;
  category?: string;
  content: string;
  author?: string;
  published?: boolean;
  meta_title?: string;
  meta_description?: string;
  tags?: string[];
  view_count?: number;
  created_at?: string;
  updated_at?: string;
}

// Cache for articles to avoid repeated database calls
let articlesCache: Article[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getAllArticles = async (): Promise<Article[]> => {
  try {
    // Check cache first
    const now = Date.now();
    if (articlesCache && (now - cacheTimestamp) < CACHE_DURATION) {
      return articlesCache;
    }

    // Fetch published articles from Supabase
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching articles from Supabase:', error);
      return getFallbackArticles();
    }

    if (!data || data.length === 0) {
      console.warn('No published articles found in Supabase');
      return getFallbackArticles();
    }

    // Transform Supabase data to Article format
    const articles: Article[] = data.map(article => ({
      id: article.id,
      slug: article.slug,
      title: article.title,
      date: article.created_at || article.updated_at || new Date().toISOString(),
      excerpt: article.excerpt || '',
      section: article.category || 'Articles',
      category: article.category || 'Education',
      content: article.content || '',
      author: article.author || 'CompareTheLeaf Team',
      published: article.published,
      meta_title: article.meta_title,
      meta_description: article.meta_description,
      tags: Array.isArray(article.tags) ? article.tags : [],
      view_count: article.view_count || 0,
      created_at: article.created_at,
      updated_at: article.updated_at
    }));

    // Update cache
    articlesCache = articles;
    cacheTimestamp = now;

    return articles;
  } catch (error) {
    console.error('Error loading articles:', error);
    return getFallbackArticles();
  }
};

// Synchronous version for components that can't handle async
const getAllArticlesSync = (): Article[] => {
  // Return cached articles if available, otherwise return fallback
  return articlesCache || getFallbackArticles();
};

// Get article by slug
export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  try {
    // Try to get from cache first
    const articles = await getAllArticles();
    const cachedArticle = articles.find(article => article.slug === slug);
    if (cachedArticle) {
      return cachedArticle;
    }

    // If not in cache, fetch directly from database
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (error) {
      console.error('Error fetching article by slug:', error);
      return null;
    }

    if (!data) {
      return null;
    }

    // Transform and return
    const article: Article = {
      id: data.id,
      slug: data.slug,
      title: data.title,
      date: data.created_at || data.updated_at || new Date().toISOString(),
      excerpt: data.excerpt || '',
      section: data.category || 'Articles',
      category: data.category || 'Education',
      content: data.content || '',
      author: data.author || 'CompareTheLeaf Team',
      published: data.published,
      meta_title: data.meta_title,
      meta_description: data.meta_description,
      tags: Array.isArray(data.tags) ? data.tags : [],
      view_count: data.view_count || 0,
      created_at: data.created_at,
      updated_at: data.updated_at
    };

    return article;
  } catch (error) {
    console.error('Error fetching article by slug:', error);
    return null;
  }
};

// Helper to filter by section/category
export const getArticlesBySection = async (section: string): Promise<Article[]> => {
  const articles = await getAllArticles();
  return articles.filter(article => 
    article.section === section || article.category === section
  );
};

// Increment view count for an article
export const incrementViewCount = async (articleId: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('articles')
      .update({ 
        view_count: supabase.sql`view_count + 1`,
        updated_at: new Date().toISOString()
      })
      .eq('id', articleId);

    if (error) {
      console.error('Error incrementing view count:', error);
    }
  } catch (error) {
    console.error('Error incrementing view count:', error);
  }
};

// Fallback articles for when Supabase is unavailable
const getFallbackArticles = (): Article[] => {
  return [
    {
      slug: 'how-to-choose-clinic',
      title: 'How to Choose the Right Medical Cannabis Clinic in the UK',
      date: '2024-01-15',
      excerpt: 'A comprehensive guide to selecting the perfect medical cannabis clinic for your specific needs, covering key factors like specialist expertise, pricing, and patient reviews.',
      section: 'Guides',
      category: 'Guides',
      content: `
        <h2>Introduction</h2>
        <p>Choosing the right medical cannabis clinic is a crucial decision that can significantly impact your treatment outcomes and overall experience. With over 20 licensed clinics operating across the UK, each offering different specialties, pricing structures, and approaches to care, making an informed choice requires careful consideration of multiple factors.</p>

        <h2>Key Factors to Consider</h2>
        
        <h3>1. Specialist Expertise</h3>
        <p>The most important factor when choosing a clinic is ensuring they have specialists who understand your specific condition. Look for:</p>
        <ul>
          <li>Doctors with relevant specialty training (e.g., pain medicine, neurology, psychiatry)</li>
          <li>Experience treating your specific condition with medical cannabis</li>
          <li>GMC registration and specialist register listing</li>
          <li>Published research or expertise in cannabis medicine</li>
        </ul>

        <h3>2. Treatment Approach</h3>
        <p>Different clinics have varying approaches to medical cannabis treatment:</p>
        <ul>
          <li><strong>Holistic approach:</strong> Considers lifestyle, diet, and complementary therapies</li>
          <li><strong>Medical model:</strong> Focuses primarily on symptom management and medication</li>
          <li><strong>Integrative care:</strong> Combines cannabis with other treatments and therapies</li>
        </ul>

        <h3>3. Product Range and Quality</h3>
        <p>Consider the range and quality of products available:</p>
        <ul>
          <li>Variety of strains and formulations</li>
          <li>Quality standards and testing protocols</li>
          <li>Availability of different delivery methods (oils, flowers, capsules)</li>
          <li>Consistent supply and stock availability</li>
        </ul>

        <h3>4. Pricing and Value</h3>
        <p>Medical cannabis treatment costs can vary significantly between clinics:</p>
        <ul>
          <li>Initial consultation fees (£50-£300)</li>
          <li>Follow-up appointment costs</li>
          <li>Prescription and dispensing fees</li>
          <li>Medication costs and delivery charges</li>
          <li>Annual membership or subscription fees</li>
        </ul>

        <h3>5. Accessibility and Convenience</h3>
        <p>Consider practical factors that affect your ongoing care:</p>
        <ul>
          <li>Location and travel requirements</li>
          <li>Telemedicine options for remote consultations</li>
          <li>Appointment availability and scheduling flexibility</li>
          <li>Prescription delivery options</li>
          <li>Patient support and communication channels</li>
        </ul>

        <h2>Red Flags to Avoid</h2>
        <p>Be cautious of clinics that:</p>
        <ul>
          <li>Make unrealistic promises about treatment outcomes</li>
          <li>Pressure you to commit to expensive long-term packages</li>
          <li>Lack proper licensing or regulatory compliance</li>
          <li>Have consistently poor patient reviews</li>
          <li>Don't provide clear pricing information upfront</li>
          <li>Rush through consultations without thorough assessment</li>
        </ul>

        <h2>Questions to Ask During Consultation</h2>
        <p>Prepare these questions for your initial consultation:</p>
        <ul>
          <li>What is your experience treating my specific condition?</li>
          <li>What products do you recommend and why?</li>
          <li>What are the potential side effects and how will you monitor them?</li>
          <li>How often will I need follow-up appointments?</li>
          <li>What support is available between appointments?</li>
          <li>What happens if the initial treatment doesn't work?</li>
          <li>Can you provide references or patient testimonials?</li>
        </ul>

        <h2>Making Your Decision</h2>
        <p>After researching and consulting with potential clinics:</p>
        <ul>
          <li>Compare all factors, not just price</li>
          <li>Trust your instincts about the doctor-patient relationship</li>
          <li>Consider starting with a clinic that offers good value and support</li>
          <li>Remember that you can change clinics if needed</li>
          <li>Ensure you feel comfortable and confident with your choice</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Choosing the right medical cannabis clinic requires balancing multiple factors including specialist expertise, treatment approach, cost, and convenience. Take time to research your options, ask the right questions, and select a clinic that aligns with your specific needs and circumstances. Remember that the cheapest option isn't always the best value, and the most expensive doesn't guarantee the best care.</p>
      `,
      author: 'CompareTheLeaf Medical Team',
      published: true
    },
    {
      slug: 'medical-cannabis-faq',
      title: 'Medical Cannabis FAQ - Common Questions Answered',
      date: '2024-01-10',
      excerpt: 'Answers to the most frequently asked questions about medical cannabis treatment in the UK, covering legality, costs, conditions, and the prescription process.',
      section: 'FAQs',
      category: 'FAQs',
      content: `
        <h2>Frequently Asked Questions</h2>
        
        <h3>Is medical cannabis legal in the UK?</h3>
        <p>Yes, medical cannabis has been legal in the UK since November 2018. However, it can only be prescribed by specialist doctors on the General Medical Council's Specialist Register for specific medical conditions when conventional treatments have not provided adequate relief.</p>

        <h3>How much does medical cannabis treatment cost?</h3>
        <p>Costs vary by clinic and treatment plan. Typically, initial consultations range from £50-£300, follow-ups £50-£150, and monthly medication costs £150-£400. Medical cannabis is not currently available on the NHS except in very limited circumstances.</p>

        <h3>What conditions can be treated with medical cannabis?</h3>
        <p>Medical cannabis is commonly prescribed for chronic pain, epilepsy, multiple sclerosis spasticity, nausea from chemotherapy, anxiety, PTSD, and other conditions where conventional treatments have been inadequate.</p>

        <h3>How do I get a medical cannabis prescription?</h3>
        <p>You need to consult with a specialist doctor who can assess your condition and medical history. The process typically involves an initial consultation, medical assessment, and if appropriate, a prescription with ongoing monitoring.</p>

        <h3>Can I drive while using medical cannabis?</h3>
        <p>Driving under the influence of cannabis is illegal, even with a prescription. However, if you have a valid prescription and are not impaired, you may have a legal defense. Always consult with your doctor about driving safety.</p>
      `,
      author: 'CompareTheLeaf Medical Team',
      published: true
    }
  ];
};

// Clear cache function for admin use
const clearArticleCache = (): void => {
  articlesCache = null;
  cacheTimestamp = 0;
};