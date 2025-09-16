import React, { useState } from 'react';
import { Search, Filter, Leaf } from 'lucide-react';

interface Strain {
  strain_id: string;
  strains: {
    name: string;
    thc_percentage?: number;
    cbd_percentage?: number;
    conditions_treated?: string[];
  };
}

interface ClinicStrainsProps {
  strains: Strain[];
  loading: boolean;
  clinicName: string;
}

const ClinicStrains: React.FC<ClinicStrainsProps> = ({ strains, loading, clinicName }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [conditionFilter, setConditionFilter] = useState('');

  // Extract all unique conditions from strains
  const allConditions = Array.from(
    new Set(
      strains
        .flatMap(strain => strain.strains?.conditions_treated || [])
        .filter(Boolean)
    )
  );

  // Filter strains based on search and condition
  const filteredStrains = strains.filter(strain => {
    const matchesSearch = !searchTerm || 
      strain.strains?.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCondition = !conditionFilter || 
      strain.strains?.conditions_treated?.some(condition => 
        condition.toLowerCase().includes(conditionFilter.toLowerCase())
      );
    
    return matchesSearch && matchesCondition;
  });

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Strains</h2>
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (strains.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Strains</h2>
        <div className="text-center py-8">
          <Leaf className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No strain information available for {clinicName}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Strains</h2>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search strains..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <select
            value={conditionFilter}
            onChange={(e) => setConditionFilter(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
          >
            <option value="">All Conditions</option>
            {allConditions.map(condition => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Strains Grid */}
      {filteredStrains.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No strains match your search criteria</p>
          <button
            onClick={() => { setSearchTerm(''); setConditionFilter(''); }}
            className="mt-4 text-blue-600 hover:text-blue-800"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStrains.map((strain) => (
            <div 
              key={strain.strain_id} 
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{strain.strains?.name}</h3>
                <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  THC: {strain.strains?.thc_percentage || 'N/A'}% | CBD: {strain.strains?.cbd_percentage || 'N/A'}%
                </div>
              </div>
              
              {strain.strains?.conditions_treated && strain.strains.conditions_treated.length > 0 && (
                <div className="mt-2">
                  <div className="text-xs text-gray-500 mb-1">Conditions:</div>
                  <div className="flex flex-wrap gap-1">
                    {strain.strains.conditions_treated.slice(0, 3).map((condition, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                      >
                        {condition}
                      </span>
                    ))}
                    {strain.strains.conditions_treated.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded">
                        +{strain.strains.conditions_treated.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Strain Count */}
      <div className="mt-4 text-sm text-gray-500 text-right">
        Showing {filteredStrains.length} of {strains.length} strains
      </div>
    </div>
  );
};

export default ClinicStrains;