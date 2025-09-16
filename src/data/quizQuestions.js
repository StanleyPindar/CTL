// Simplified MVP Quiz Questions for CompareTheLeaf
export const quizQuestions = [
  {
    id: 'condition',
    question: "What's your primary condition you're seeking medical cannabis treatment for?",
    type: 'single-select',
    options: [
      { value: 'chronic-pain', label: 'Chronic Pain', description: 'Back, joints, fibromyalgia' },
      { value: 'anxiety', label: 'Anxiety & Mental Health', description: 'GAD, panic, depression' },
      { value: 'epilepsy', label: 'Epilepsy & Seizures', description: 'Treatment-resistant' },
      { value: 'ptsd', label: 'PTSD & Trauma', description: 'Combat, accident, abuse' },
      { value: 'cancer', label: 'Cancer & Chemotherapy', description: 'Side effects, appetite' },
      { value: 'sleep', label: 'Sleep Disorders', description: 'Insomnia, sleep apnea' },
      { value: 'arthritis', label: 'Arthritis & Inflammation', description: 'Rheumatoid, osteo' },
      { value: 'other', label: 'Other', description: 'Please specify' }
    ]
  },
  {
    id: 'treatment-history',
    question: "What treatments have you tried for your condition?",
    type: 'multiple-select',
    options: [
      { value: 'nhs-medications', label: 'NHS medications', description: 'Painkillers, antidepressants, etc.' },
      { value: 'private-specialist', label: 'Private specialist consultations' },
      { value: 'therapy', label: 'Physiotherapy or talking therapy' },
      { value: 'alternative', label: 'Alternative treatments', description: 'Acupuncture, CBD oil' },
      { value: 'surgery', label: 'Surgery or invasive procedures' },
      { value: 'nothing', label: 'Nothing yet - this is my first step' }
    ]
  },
  {
    id: 'priorities',
    question: "What's most important to you in a medical cannabis clinic?",
    type: 'rank-top-3',
    options: [
      { value: 'specialization', label: 'Doctors specializing in my specific condition' },
      { value: 'cost', label: 'Lowest cost consultations and prescriptions' },
      { value: 'speed', label: 'Fastest appointment availability' },
      { value: 'support', label: 'Comprehensive patient support and education' },
      { value: 'variety', label: 'Flexible dosing options and strain variety' },
      { value: 'discretion', label: 'Discrete service and professional discretion' },
      { value: 'location', label: 'Close to my location for easy access' }
    ]
  },
  {
    id: 'budget',
    question: "What's your monthly budget for medical cannabis treatment?",
    type: 'single-select',
    options: [
      { value: 'under-150', label: 'Under £150/month', description: 'Consultation + basic prescription' },
      { value: '150-250', label: '£150-£250/month', description: 'Standard treatment package' },
      { value: '250-400', label: '£250-£400/month', description: 'Premium options with choice' },
      { value: '400-plus', label: '£400+/month', description: 'No budget constraints' },
      { value: 'need-info', label: 'I need to understand costs first' }
    ]
  },
  {
    id: 'location',
    question: "Where are you located?",
    type: 'single-select',
    options: [
      { value: 'virtual', label: 'Prefer virtual consultations' },
      { value: 'london', label: 'London & South East' },
      { value: 'midlands', label: 'Midlands' },
      { value: 'north', label: 'North England' },
      { value: 'scotland', label: 'Scotland' },
      { value: 'wales', label: 'Wales' },
      { value: 'ni', label: 'Northern Ireland' }
    ]
  },
  {
    id: 'urgency',
    question: "When would you like to book your consultation?",
    type: 'single-select',
    options: [
      { value: 'this-week', label: 'This week', description: 'Urgent need' },
      { value: 'two-weeks', label: 'Within 2 weeks', description: 'Soon' },
      { value: 'month', label: 'Within a month', description: 'Planning ahead' },
      { value: 'researching', label: 'Just researching for now' }
    ]
  }
];

// Advanced quiz questions (optional, unlocked after email capture)
export const advancedQuizQuestions = [
  {
    id: 'condition-specifics',
    question: "Can you provide more details about your condition?",
    type: 'conditional',
    conditions: {
      'chronic-pain': {
        question: "Where is your pain located and how long have you experienced it?",
        options: [
          { value: 'back-1-3', label: 'Back/Spine - 1-3 years' },
          { value: 'back-3-5', label: 'Back/Spine - 3-5 years' },
          { value: 'back-5plus', label: 'Back/Spine - 5+ years' },
          { value: 'joints-1-3', label: 'Joints - 1-3 years' },
          { value: 'joints-3-5', label: 'Joints - 3-5 years' },
          { value: 'joints-5plus', label: 'Joints - 5+ years' },
          { value: 'widespread-1-3', label: 'Widespread - 1-3 years' },
          { value: 'widespread-3-5', label: 'Widespread - 3-5 years' },
          { value: 'widespread-5plus', label: 'Widespread - 5+ years' }
        ]
      },
      'anxiety': {
        question: "What type of anxiety do you experience most?",
        options: [
          { value: 'gad', label: 'Generalized Anxiety Disorder', description: 'Constant worry' },
          { value: 'panic', label: 'Panic Attacks', description: 'Sudden intense fear' },
          { value: 'social', label: 'Social Anxiety', description: 'Fear of social situations' },
          { value: 'ptsd-anxiety', label: 'PTSD-related anxiety', description: 'Trauma response' }
        ]
      },
      'epilepsy': {
        question: "What type of seizures do you experience?",
        options: [
          { value: 'focal', label: 'Focal seizures', description: 'Partial, localized' },
          { value: 'generalized', label: 'Generalized seizures', description: 'Tonic-clonic' },
          { value: 'absence', label: 'Absence seizures', description: 'Brief loss of consciousness' },
          { value: 'treatment-resistant', label: 'Treatment-resistant epilepsy', description: 'Multiple medications failed' }
        ]
      }
    }
  },
  {
    id: 'severity',
    question: "How would you rate the severity of your condition?",
    type: 'scale',
    scale: { min: 1, max: 10, labels: { 1: 'Mild', 5: 'Moderate', 10: 'Severe' } }
  },
  {
    id: 'previous-cannabis',
    question: "Have you used cannabis (medical or otherwise) before?",
    type: 'single-select',
    options: [
      { value: 'never', label: 'Never used cannabis' },
      { value: 'cbd-only', label: 'Only CBD products' },
      { value: 'recreational', label: 'Recreational use in the past' },
      { value: 'medical-abroad', label: 'Medical cannabis abroad' },
      { value: 'self-medicating', label: 'Currently self-medicating' }
    ]
  }
];