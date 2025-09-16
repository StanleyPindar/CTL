import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, Globe, Search, MapPin, ExternalLink } from 'lucide-react';
import { mergedClinicData } from '../utils/mergeDirectoryWithProfiles';
import { FullClinicProfile } from '../types/clinic';
import MetaTags from '../components/MetaTags';

const ClinicDirectoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClinics = mergedClinicData.filter(clinic =>
    (clinic.overview?.name ?? '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="UK Medical Cannabis Clinic Directory - Complete Contact List"
        description="Complete directory of UK medical cannabis clinics with contact information, websites, and booking links. Find phone numbers, emails, and direct booking for all licensed clinics."
        canonicalUrl="https://comparetheleaf.co.uk/clinic-directory"
        keywords={['UK medical cannabis clinic directory', 'clinic contact information', 'medical cannabis clinic list', 'clinic phone numbers']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              UK Medical Cannabis Clinic Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete directory of medical cannabis clinics across the UK. Find contact information, 
              websites, and direct links to book consultations.
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clinics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Clinic Directory Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Medical Cannabis Clinics ({filteredClinics.length})
              </h2>
              <span className="text-sm text-gray-500">
                Click clinic names to visit their websites
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clinic Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Information
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredClinics.map((clinic, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleExternalLink(clinic.overview?.website || '')}
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center group"
                        >
                          {clinic.overview?.name || 'Unknown Clinic'}
                          <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        {clinic.overview?.phone && (
                          <a
                            href={`tel:${clinic.overview?.phone}`}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                            title={`Call ${clinic.overview?.phone}`}
                            aria-label={`Call ${clinic.overview?.name || 'clinic'} at ${clinic.overview?.phone}`}
                          >
                            <Phone className="h-4 w-4" />
                          </a>
                        )}
                        {clinic.overview?.email && (
                          <a
                            href={`mailto:${clinic.overview?.email}`}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                            title={`Email ${clinic.overview?.email}`}
                            aria-label={`Email ${clinic.overview?.name || 'clinic'} at ${clinic.overview?.email}`}
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                        )}
                        <a
                          href={clinic.overview?.website || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleExternalLink(clinic.overview?.website || '')}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          title={`Visit ${clinic.overview?.name || 'clinic'} website`}
                          aria-label={`Visit ${clinic.overview?.name || 'clinic'} website`}
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      </div>
                      {(clinic.overview?.phone || clinic.overview?.email) && (
                        <div className="mt-1 text-xs text-gray-500">
                          {clinic.overview?.phone && <div>{clinic.overview?.phone}</div>}
                          {clinic.overview?.email && <div>{clinic.overview?.email}</div>}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {/* Note field not available in FullClinicProfile */}
                      {false && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Note
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredClinics.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-2">No clinics found</p>
                <p className="text-sm">Try adjusting your search terms</p>
              </div>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Important Information
          </h3>
          <div className="text-blue-800 space-y-2 text-sm">
            <p>
              • All clinics listed are licensed to prescribe medical cannabis in the UK
            </p>
            <p>
              • Contact information is provided for initial inquiries - always verify current details
            </p>
            <p>
              • Consultation fees, waiting times, and services may vary between clinics
            </p>
            <p>
              • Use our <NavLink to="/quiz" className="underline font-medium">clinic matching quiz</NavLink> for personalized recommendations
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Help Choosing the Right Clinic?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Take our comprehensive quiz to get personalized clinic recommendations based on your 
            condition, location, and preferences.
          </p>
          <NavLink
            to="/quiz"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Take our three-minute quiz
            <ExternalLink className="ml-2 h-5 w-5" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ClinicDirectoryPage;