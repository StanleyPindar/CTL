interface Study { 
  id: string; 
  title: string; 
  citation: string; 
  link: string; 
  keyFindings: string[]; 
}

export const positiveOutcomes: Study[] = [
  { 
    id: 'stith2023', 
    title: 'Feeling "high" & patient outcomes',
    citation: 'Stith SS et al., Front Pharmacol 2023', 
    link: 'https://pubmed.ncbi.nlm.nih.gov/37292156/',
    keyFindings: [
      '7.7% extra symptom relief',
      'Significant pain & anxiety reduction',
      'THC "high" predicts efficacy'
    ] 
  },
  { 
    id: 'canals2023', 
    title: 'C-M-T neuropathy pain relief',
    citation: 'Canals PC et al., Am J Hosp Palliat Care 2023', 
    link: 'https://pubmed.ncbi.nlm.nih.gov/36793224/',
    keyFindings: [
      '92% ≥50% pain relief',
      '80% cut opioids',
      '69% reduced sleep meds'
    ] 
  },
  {
    id: 'entoura2022',
    title: 'Medicinal cannabis improves sleep in adults with insomnia',
    citation: 'J Sleep Res 2023 (Entoura-10:15 trial)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36537000/',
    keyFindings: [
      '60% no longer classified as clinical insomniacs',
      'Midnight melatonin levels improved by 30%',
      'Improved time and quality of sleep (21 min more light sleep/night)'
    ]
  },
  {
    id: 'johnshopkins2025',
    title: 'Medical marijuana reduces anxiety & depression',
    citation: 'Journal of Affective Disorders 2025 (Johns Hopkins Study)',
    link: 'https://www.marijuanamoment.net/medical-marijuana-reduces-anxiety-and-depression-new-federally-funded-study-shows/',
    keyFindings: [
      'Significant decreases in self-reported anxiety and depression',
      'Improvements sustained over six-month period',
      '10-15 mg oral THC or 3+ puffs vaporized cannabis yielded robust reductions'
    ]
  },
  {
    id: 'chen2025',
    title: 'Cannabis oil for drug-resistant epilepsy',
    citation: 'Chen FY et al., Front Neurosci 2025',
    link: 'https://www.psypost.org/2025/07/cannabis-oil-might-help-with-drug-resistant-epilepsy-study-suggests-168999',
    keyFindings: [
      'Median seizure freedom of 245 days',
      '90% reported improvements in quality of life',
      '69% drop in monthly seizure frequency for non-seizure-free patients'
    ]
  }
];

// Source: Positive Patient Outcomes PDF