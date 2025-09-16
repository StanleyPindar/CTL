import React from 'react';
import { Star, MapPin, Phone, Mail, Globe, ExternalLink, CheckCircle, Shield, Calendar } from 'lucide-react';
import StarRating from '../common/StarRating';

interface ReviewHeroProps {
  clinicName: string;
  tagline?: string;
  rating: number;
  reviewCount: number;
  initialConsultationFee?: number;
  monthlyFee?: number;
  cqcRegistered?: boolean;
  location?: string;
  phone?: string;
  email?: string;
  website?: string;
  logoUrl?: string;
  heroBackgroundColor?: string;
}

const ReviewHero: React.FC<ReviewHeroProps> = ({
  clinicName,
  tagline,
  rating,
  reviewCount,
  initialConsultationFee,
  monthlyFee,
  cqcRegistered = false,
  location = 'UK Wide',
  phone,
  email,
  website,
  logoUrl,
  heroBackgroundColor = '#4F46E5'
}) => {
  const handleBookConsultation = () => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  const formatCurrency = (value: number | null | undefined) => {
    if (!value) return 'TBC';
    return `£${value}`;
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Clinic Image/Logo */}
          <div className="lg:col-span-1">
            <div 
              className="h-64 rounded-lg relative overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: heroBackgroundColor }}
            >
              <div className="text-white text-center">
                <div className="text-6xl font-bold mb-2">{clinicName.charAt(0)}</div>
                <div className="text-lg opacity-90">Medical Cannabis Clinic</div>
              </div>
            </div>
          </div>

          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{clinicName}</h1>
                {tagline && <p className="text-lg text-gray-600 mb-4">{tagline}</p>}
                
                <div className="flex items-center mb-2">
                  <StarRating value={Math.round(rating)} size={20} />
                  <span className="text-lg font-semibold ml-2">{rating.toFixed(1)}</span>
                  <span className="text-gray-600 ml-2">({reviewCount}+ reviews)</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{location}</span>
                </div>

                {cqcRegistered && (
                  <div className="flex items-center mb-4">
                    <Shield className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-green-700 font-medium">CQC Registered</span>
                  </div>
                )}
              </div>
              
              <div className="text-right">
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  {formatCurrency(initialConsultationFee)}
                </div>
                <div className="text-sm text-gray-500">Initial consultation</div>
                {monthlyFee && (
                  <>
                    <div className="text-2xl font-bold text-green-600 mt-2">
                      {formatCurrency(monthlyFee)}/mo
                    </div>
                    <div className="text-sm text-gray-500">Monthly subscription</div>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              )}
            </div>

            {/* Primary CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ready to Book Your Consultation?
                  </h3>
                  <p className="text-gray-600">
                    Start your medical cannabis journey with {clinicName}
                  </p>
                </div>
                <button
                  onClick={handleBookConsultation}
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all shadow-md hover:shadow-lg inline-flex items-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHero;