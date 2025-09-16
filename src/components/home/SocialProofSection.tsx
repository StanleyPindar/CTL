import React from 'react';
import { Users, Award, TrendingUp, Quote } from 'lucide-react';
import StarRating from '../common/StarRating';

const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      age: "42",
      location: "Manchester",
      condition: "Chronic Pain",
      rating: 5,
      text: "After 8 years of chronic pain, medical cannabis has given me my life back. My pain levels have dropped from 8/10 to 3/10, and I can finally sleep through the night.",
      clinic: "Licensed UK Clinic",
      outcome: "80% pain reduction"
    },
    {
      name: "James T.",
      age: "35",
      location: "London",
      condition: "Epilepsy",
      rating: 5,
      text: "My seizures have reduced by 80% since starting medical cannabis treatment. I went from 15 seizures per month to just 3, and my quality of life has dramatically improved.",
      clinic: "Licensed UK Clinic",
      outcome: "80% seizure reduction"
    },
    {
      name: "Emma L.",
      age: "29",
      location: "Birmingham",
      condition: "Anxiety",
      rating: 4,
      text: "Finally found relief from anxiety without the side effects of traditional medications. My panic attacks have virtually disappeared, and I can function normally again.",
      clinic: "Licensed UK Clinic",
      outcome: "Anxiety-free 6 days/week"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "60,000+",
      label: "Patients Helped",
      description: "UK patients since 2018"
    },
    {
      icon: Award,
      number: "4.8/5",
      label: "Average Rating",
      description: "From verified patients"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Patient satisfaction"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50" role="region" aria-label="Patient testimonials and statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">
            Trusted by 60,000+ UK Medical Cannabis Patients
          </h2>
          <p className="subheading mb-12 max-w-2xl mx-auto">
            Join the growing community of UK patients who have found relief through legal medical cannabis treatment
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center stagger-item animate-fade-in opacity-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="heading-md text-gray-900 mb-4">
              What Our Patients Say
            </h3>
            <p className="text-gray-600">
              Real stories from patients who found the right treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative hover:shadow-md transition-shadow stagger-item animate-fade-in opacity-0"
                itemScope 
                itemType="https://schema.org/Review"
              >
                <div className="absolute top-4 right-4">
                  <Quote className="h-6 w-6 text-blue-200" />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="badge-blue" itemProp="about" itemScope itemType="https://schema.org/MedicalCondition">
                      <span itemProp="name">{testimonial.condition}</span>
                    </span>
                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <StarRating value={testimonial.rating} size={16} />
                      <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">
                  "{testimonial.text}"
                </p>
                
                {testimonial.outcome && (
                  <div className="bg-green-50 rounded-lg p-3 mb-4" itemProp="positiveNotes">
                    <div className="text-sm font-medium text-green-800">Treatment Outcome:</div>
                    <div className="text-sm text-green-700">{testimonial.outcome}</div>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div itemProp="author" itemScope itemType="https://schema.org/Person">
                      <div className="font-semibold text-gray-900">
                        <span itemProp="name">{testimonial.name}</span>, {testimonial.age}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                          <span itemProp="addressLocality">{testimonial.location}</span>
                        </span> • 
                        <span itemProp="itemReviewed" itemScope itemType="https://schema.org/MedicalBusiness">
                          <span itemProp="name">{testimonial.clinic}</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Verified Patient
                    </div>
                  </div>
                </div>
                <meta itemProp="datePublished" content="2024-01-15" />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Why Patients Trust CompareTheLeaf
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Verified Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">Free</div>
                <div className="text-sm text-gray-600">Platform Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">GDPR</div>
                <div className="text-sm text-gray-600">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;