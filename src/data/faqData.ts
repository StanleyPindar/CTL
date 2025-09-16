interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  dateCreated?: string;
  dateModified?: string;
  author?: string;
  upvoteCount?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  relatedConditions?: string[];
}

const faqData: FAQ[] = [
  {
    id: 1,
    question: "Is medical cannabis legal in the UK?",
    answer: "Yes, medical cannabis has been legal in the UK since November 2018. However, it can only be prescribed by specialist doctors on the General Medical Council's Specialist Register for specific medical conditions when conventional treatments have not provided adequate relief.",
    category: "Legal",
    tags: ["legal", "UK", "prescription", "specialist"],
    dateCreated: "2024-01-15",
    dateModified: "2024-02-20",
    author: "CompareTheLeaf Legal Team",
    upvoteCount: 127,
    difficulty: "beginner",
    relatedConditions: ["all"]
  },
  {
    id: 2,
    question: "How much does medical cannabis treatment cost?",
    answer: "Costs vary by clinic and treatment plan. Typically, initial consultations range from £10-£300, follow-ups £50-£150, and monthly medication costs £150-£400. Medical cannabis is not currently available on the NHS except in very limited circumstances.",
    category: "Cost",
    tags: ["cost", "price", "consultation", "NHS"],
    dateCreated: "2024-01-15",
    dateModified: "2024-02-25",
    author: "CompareTheLeaf Medical Team",
    upvoteCount: 89,
    difficulty: "beginner",
    relatedConditions: ["all"]
  },
  {
    id: 3,
    question: "What conditions can be treated with medical cannabis?",
    answer: "Medical cannabis is commonly prescribed for chronic pain, epilepsy, multiple sclerosis spasticity, nausea from chemotherapy, anxiety, PTSD, and other conditions where conventional treatments have been inadequate.",
    category: "Conditions",
    tags: ["conditions", "pain", "epilepsy", "anxiety", "PTSD"],
    dateCreated: "2024-01-15",
    dateModified: "2024-02-18",
    author: "Dr. Sarah Williams",
    upvoteCount: 156,
    difficulty: "beginner",
    relatedConditions: ["chronic-pain", "epilepsy", "anxiety", "PTSD", "multiple-sclerosis", "cancer"]
  },
  {
    id: 4,
    question: "How do I get a medical cannabis prescription?",
    answer: "You need to consult with a specialist doctor who can assess your condition and medical history. The process typically involves an initial consultation, medical assessment, and if appropriate, a prescription with ongoing monitoring.",
    category: "Process",
    tags: ["prescription", "process", "consultation", "specialist"],
    dateCreated: "2024-01-15",
    dateModified: "2024-02-22",
    author: "Dr. Michael Chen",
    upvoteCount: 203,
    difficulty: "beginner",
    relatedConditions: ["all"]
  },
  {
    id: 5,
    question: "Can I drive while using medical cannabis?",
    answer: "Driving under the influence of cannabis is illegal, even with a prescription. However, if you have a valid prescription and are not impaired, you may have a legal defense. Always consult with your doctor about driving safety.",
    category: "Legal",
    tags: ["driving", "legal", "safety", "prescription"],
    dateCreated: "2024-01-15",
    dateModified: "2024-02-20",
    author: "CompareTheLeaf Legal Team",
    upvoteCount: 78,
    difficulty: "intermediate",
    relatedConditions: ["all"]
  },
  {
    id: 6,
    question: "How long does it take to get an appointment?",
    answer: "Appointment availability varies by clinic. Some offer urgent appointments within 2-3 days, while others may have waiting times of 1-2 weeks. Our platform shows current availability for each clinic.",
    category: "Process",
    tags: ["appointment", "waiting", "clinic", "availability"],
    dateCreated: "2024-01-15",
    dateModified: "2024-02-25",
    author: "CompareTheLeaf Medical Team",
    upvoteCount: 45,
    difficulty: "beginner",
    relatedConditions: ["all"]
  },
  {
    id: 7,
    question: "What are the side effects of medical cannabis?",
    answer: "Common side effects include drowsiness, dry mouth, dizziness, and changes in appetite. Most side effects are mild and manageable. Your doctor will monitor you for side effects and adjust your treatment as needed.",
    category: "Safety",
    tags: ["side-effects", "safety", "drowsiness", "monitoring"],
    dateCreated: "2024-01-15",
    dateModified: "2024-02-18",
    author: "Dr. Emma Roberts",
    upvoteCount: 67,
    difficulty: "intermediate",
    relatedConditions: ["all"]
  },
  {
    id: 8,
    question: "Can I travel with my medical cannabis prescription?",
    answer: "Within the UK, you can travel with your prescribed medication. For international travel, laws vary significantly by country, and you should research destination laws and contact embassies before traveling.",
    category: "Legal",
    tags: ["travel", "prescription", "international", "legal"],
    dateCreated: "2024-01-15",
    dateModified: "2024-02-20",
    author: "CompareTheLeaf Legal Team",
    upvoteCount: 34,
    difficulty: "advanced",
    relatedConditions: ["all"]
  },
  {
    id: 9,
    question: "Will my insurance cover medical cannabis?",
    answer: "Some private health insurance policies may cover medical cannabis treatment, but coverage varies significantly between providers. It's best to check directly with your insurance company about their specific policy.",
    category: "Cost",
    tags: ["insurance", "coverage", "private", "cost"],
    dateCreated: "2024-01-15",
    dateModified: "2024-02-22",
    author: "CompareTheLeaf Medical Team",
    upvoteCount: 52,
    difficulty: "intermediate",
    relatedConditions: ["all"]
  },
  {
    id: 10,
    question: "How long does treatment take to work?",
    answer: "The time it takes for medical cannabis to work varies by individual, condition, and product type. Some patients notice improvements within days, while others may need several weeks to find the right product and dosage.",
    category: "Treatment",
    tags: ["effectiveness", "time", "dosage", "individual"],
    dateCreated: "2024-01-15",
    dateModified: "2024-02-18",
    author: "Dr. James Thompson",
    upvoteCount: 91,
    difficulty: "intermediate",
    relatedConditions: ["chronic-pain", "anxiety", "epilepsy", "insomnia"]
  }
];

const faqCategories = [
  "All",
  "Legal",
  "Cost",
  "Conditions",
  "Process",
  "Safety",
  "Treatment"
];

// Enhanced FAQ data with additional questions for better coverage
export const enhancedFaqData: FAQ[] = [
  ...faqData,
  {
    id: 11,
    question: "What is the difference between CBD and THC in medical cannabis?",
    answer: "CBD (cannabidiol) is non-psychoactive and often used for inflammation, anxiety, and seizures. THC (tetrahydrocannabinol) has psychoactive effects and is typically used for pain, nausea, and appetite stimulation. Most medical cannabis products contain both in varying ratios.",
    category: "Treatment",
    tags: ["CBD", "THC", "cannabinoids", "effects"],
    dateCreated: "2024-02-01",
    dateModified: "2024-02-25",
    author: "Dr. Sarah Williams",
    upvoteCount: 143,
    difficulty: "intermediate",
    relatedConditions: ["all"]
  },
  {
    id: 12,
    question: "How do I choose the right medical cannabis clinic?",
    answer: "Consider factors like specialist expertise in your condition, clinic reputation, patient reviews, range of available products, ongoing support, transparent pricing, and location or telemedicine options. Use our clinic comparison tool to evaluate these factors.",
    category: "Process",
    tags: ["clinic selection", "comparison", "specialist", "reviews"],
    dateCreated: "2024-02-05",
    dateModified: "2024-02-25",
    author: "CompareTheLeaf Medical Team",
    upvoteCount: 87,
    difficulty: "beginner",
    relatedConditions: ["all"]
  },
  {
    id: 13,
    question: "What should I expect during my first medical cannabis consultation?",
    answer: "Your first consultation will involve a comprehensive medical assessment, review of your condition and treatment history, discussion of symptoms and treatment goals, education about medical cannabis options, and if appropriate, a prescription with detailed dosing instructions.",
    category: "Process",
    tags: ["consultation", "first appointment", "assessment", "prescription"],
    dateCreated: "2024-02-08",
    dateModified: "2024-02-25",
    author: "Dr. Michael Chen",
    upvoteCount: 76,
    difficulty: "beginner",
    relatedConditions: ["all"]
  },
  {
    id: 14,
    question: "Can I get medical cannabis on the NHS?",
    answer: "Medical cannabis is rarely available on the NHS and only in very specific circumstances, such as severe epilepsy in children or chemotherapy-induced nausea. Most patients receive private prescriptions from licensed clinics.",
    category: "Cost",
    tags: ["NHS", "private prescription", "availability", "cost"],
    dateCreated: "2024-02-10",
    dateModified: "2024-02-25",
    author: "CompareTheLeaf Medical Team",
    upvoteCount: 112,
    difficulty: "beginner",
    relatedConditions: ["all"]
  },
  {
    id: 15,
    question: "What forms of medical cannabis are available in the UK?",
    answer: "Medical cannabis is available as dried flower for vaporization, oils and tinctures for oral use, capsules for precise dosing, and topical preparations for localized treatment. Your doctor will recommend the most appropriate form based on your condition and needs.",
    category: "Treatment",
    tags: ["forms", "flower", "oil", "capsules", "topical"],
    dateCreated: "2024-02-12",
    dateModified: "2024-02-25",
    author: "Dr. Emma Roberts",
    upvoteCount: 94,
    difficulty: "intermediate",
    relatedConditions: ["chronic-pain", "anxiety", "epilepsy", "cancer"]
  }
];

// FAQ categories with enhanced metadata
export const enhancedFaqCategories = [
  { name: "All", description: "All frequently asked questions", count: enhancedFaqData.length },
  { name: "Legal", description: "Legal questions about medical cannabis in the UK", count: enhancedFaqData.filter(f => f.category === "Legal").length },
  { name: "Cost", description: "Pricing and insurance questions", count: enhancedFaqData.filter(f => f.category === "Cost").length },
  { name: "Conditions", description: "Medical conditions and eligibility", count: enhancedFaqData.filter(f => f.category === "Conditions").length },
  { name: "Process", description: "Getting started and consultation process", count: enhancedFaqData.filter(f => f.category === "Process").length },
  { name: "Safety", description: "Safety, side effects, and precautions", count: enhancedFaqData.filter(f => f.category === "Safety").length },
  { name: "Treatment", description: "Treatment options and medical information", count: enhancedFaqData.filter(f => f.category === "Treatment").length }
];