export const generateClinicMetaDescription = (clinic: any): string => {
  const name = clinic.overview?.name || clinic.name || 'Medical Cannabis Clinic';
  const initialPrice = clinic.pricing?.initialConsultation?.price ?? clinic.consultationFee ?? clinic.consultation_fee;
  const overallRating = clinic.patientExperience?.overallRating?.toFixed(1) ?? clinic.rating?.toFixed(1);
  const totalReviews = clinic.patientExperience?.totalReviews ?? clinic.reviewCount ?? clinic.google_reviews_count;
  const firstSpecialty = clinic.services?.specialties?.[0] ?? clinic.specialisations?.[0];
  const city = clinic.overview?.address?.city ?? clinic.location;
  const annualCost = clinic.pricing?.estimatedAnnualCost?.average ?? clinic.annual_cost ?? clinic.annual_cost_first_year;
  const monthlyFee = clinic.monthlyFee; // Specific to some hardcoded reviews

  const parts: string[] = [];

  parts.push(`${name} review`);

  if (initialPrice !== undefined && initialPrice !== null) {
    parts.push(`£${initialPrice} consultation`);
  }
  if (monthlyFee !== undefined && monthlyFee !== null) {
    parts.push(`£${monthlyFee}/month`);
  } else if (annualCost !== undefined && annualCost !== null) {
    parts.push(`£${annualCost}/year`);
  }
  if (firstSpecialty) {
    parts.push(`${firstSpecialty.toLowerCase()} specialist`);
  }
  if (city) {
    parts.push(`in ${city}`);
  }
  if (overallRating && totalReviews !== undefined && totalReviews !== null) {
    parts.push(`${overallRating}/5 stars from ${totalReviews}+ patients`);
  }

  parts.push(`Compare pricing & book online.`);

  return parts.join(', ') + '.';
};