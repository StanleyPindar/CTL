import React, { useState } from 'react';
import { Calculator, PoundSterling, TrendingUp, Pill, Droplets, Cookie, Percent } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const BudgetToolPage: React.FC = () => {
  const [consumptionType, setConsumptionType] = useState<'flower' | 'oil' | 'edibles'>('flower');
  const [amountPerMonth, setAmountPerMonth] = useState(10);
  const [pricePerGram, setPricePerGram] = useState(7.5);
  const [thcPercentage, setThcPercentage] = useState(20);
  const [deliveryFee, setDeliveryFee] = useState(10);
  const [prescriptionFee, setPrescriptionFee] = useState(30);

  const calculateMedicationCost = () => {
    return amountPerMonth * pricePerGram;
  };

  const calculateMonthlyTotal = () => {
    return calculateMedicationCost() + prescriptionFee + deliveryFee;
  };

  const yearlyTotal = calculateMonthlyTotal() * 12;

  const priceOptions = [
    { value: 5, label: '£5 per gram', description: 'Budget-friendly options' },
    { value: 7.5, label: '£7.50 per gram', description: 'Mid-range products' },
    { value: 10, label: '£10 per gram', description: 'Premium products' },
    { value: 15, label: '£15 per gram', description: 'Specialty strains' }
  ];

  const getUnitLabel = () => {
    switch (consumptionType) {
      case 'flower': return 'grams';
      case 'oil': return 'ml';
      case 'edibles': return 'units';
      default: return 'grams';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Medical Cannabis Cost UK - Free Budget Calculator & Price Comparison"
        description="Calculate medical cannabis costs UK. Compare clinic prices, consultation fees & annual expenses. Free budget calculator used by 10,000+ patients. Estimate monthly costs from £150-£400."
        keywords={[
          'medical cannabis cost UK',
          'medical cannabis budget calculator',
          'medical cannabis pricing UK',
          'medical cannabis treatment cost',
          'how much does medical cannabis cost UK',
          'medical cannabis consultation fees',
          'medical cannabis prescription cost',
          'medical cannabis annual cost',
          'budget medical cannabis UK',
          'medical cannabis cost comparison',
          'medical cannabis cost calculator UK',
          'medical cannabis budget planner',
          'medical cannabis expense calculator',
          'medical cannabis price comparison UK',
          'compare medical cannabis clinics UK',
          'medical cannabis clinic UK'
        ]}
        canonicalUrl="https://comparetheleaf.co.uk/budget-tool"
        breadcrumbData={[
          { name: 'Home', url: 'https://comparetheleaf.co.uk/' },
          { name: 'Tools', url: 'https://comparetheleaf.co.uk/tools' },
          { name: 'Budget Calculator', url: 'https://comparetheleaf.co.uk/budget-tool' }
        ]}
        medicalProcedureData={{
          name: 'Medical Cannabis Cost Calculation',
          description: 'Assessment and calculation of medical cannabis treatment costs including consultations, prescriptions, and medication',
          procedureType: 'Cost assessment and budgeting',
          preparation: [
            'Determine monthly usage requirements',
            'Identify preferred product types',
            'Consider consultation frequency',
            'Evaluate additional fees'
          ],
          howPerformed: 'Interactive calculator estimates costs based on usage patterns, product preferences, and clinic fees',
          category: [
            'Cost Assessment',
            'Treatment Planning',
            'Budget Planning'
          ],
          medicationUsed: [
            'Medical Cannabis Flower',
            'Cannabis Oil',
            'Cannabis Capsules',
            'Cannabis Edibles'
          ]
        }}
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Tools', path: '/tools' },
          { label: 'Budget Calculator', path: '/budget-tool' }
        ]}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Calculator className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Medical Cannabis Cost Calculator UK - Estimate Your Treatment Budget
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Calculate your medical cannabis treatment costs in the UK. Estimate monthly and yearly expenses for consultations, prescriptions, and medication based on your usage and product preferences. Free budget planning tool used by 10,000+ patients.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Controls */}
            <div className="space-y-6">
              {/* Consumption Type Selector */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  Product Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setConsumptionType('flower')}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                      consumptionType === 'flower' 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Pill className="h-6 w-6 mb-2" />
                    <span className="text-sm font-medium">Flower</span>
                  </button>
                  
                  <button
                    onClick={() => setConsumptionType('oil')}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                      consumptionType === 'oil' 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Droplets className="h-6 w-6 mb-2" />
                    <span className="text-sm font-medium">Oil</span>
                  </button>
                  
                  <button
                    onClick={() => setConsumptionType('edibles')}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                      consumptionType === 'edibles' 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Cookie className="h-6 w-6 mb-2" />
                    <span className="text-sm font-medium">Edibles</span>
                  </button>
                </div>
              </div>
              
              {/* Monthly Usage */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  Monthly Usage: {amountPerMonth} {getUnitLabel()}
                </label>
                <div className="mb-2">
                  <input
                    type="range"
                    min="1"
                    max="60"
                    value={amountPerMonth}
                    onChange={(e) => setAmountPerMonth(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((amountPerMonth - 1) / 59) * 100}%, #e5e7eb ${((amountPerMonth - 1) / 59) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1 {getUnitLabel()}</span>
                  <span>30 {getUnitLabel()}</span>
                  <span>60 {getUnitLabel()}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Typical usage ranges from 5-30 {getUnitLabel()} per month depending on condition and treatment plan.
                </p>
              </div>

              {/* THC Percentage */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  THC Percentage: {thcPercentage}%
                </label>
                <div className="mb-2">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={thcPercentage}
                    onChange={(e) => setThcPercentage(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((thcPercentage - 1) / 29) * 100}%, #e5e7eb ${((thcPercentage - 1) / 29) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1%</span>
                  <span>15%</span>
                  <span>30%</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Higher THC percentages typically cost more but may require less product.
                </p>
              </div>

              {/* Price per Unit */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  Price per {consumptionType === 'flower' ? 'Gram' : consumptionType === 'oil' ? 'ml' : 'Unit'}
                </label>
                <div className="space-y-3">
                  {priceOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="radio"
                        name="pricePerGram"
                        value={option.value}
                        checked={pricePerGram === option.value}
                        onChange={(e) => setPricePerGram(Number(e.target.value))}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-1 cursor-pointer"
                      />
                      <div className="ml-3">
                        <div className="text-gray-900 font-medium">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Results */}
            <div>
              {/* Cost Breakdown */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <PoundSterling className="h-5 w-5 mr-2 text-green-600" />
                  Cost Breakdown
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Monthly usage:</span>
                    <span className="font-semibold text-gray-900">{amountPerMonth} {getUnitLabel()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Price per {getUnitLabel()}:</span>
                    <span className="font-semibold text-gray-900">£{pricePerGram.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Medication cost:</span>
                    <span className="font-semibold text-gray-900">£{calculateMedicationCost().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Prescription fee:</span>
                    <span className="font-semibold text-gray-900">£{prescriptionFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Delivery fee:</span>
                    <span className="font-semibold text-gray-900">£{deliveryFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-900">Monthly total:</span>
                    <span className="text-2xl font-bold text-blue-600">£{calculateMonthlyTotal().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3">
                    <span className="text-lg font-medium text-gray-900">Yearly total:</span>
                    <span className="text-2xl font-bold text-green-600">£{yearlyTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Fees Adjustment */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Adjust Additional Fees</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prescription Fee: £{prescriptionFee}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={prescriptionFee}
                      onChange={(e) => setPrescriptionFee(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(prescriptionFee / 50) * 100}%, #e5e7eb ${(prescriptionFee / 50) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Fee: £{deliveryFee}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={deliveryFee}
                      onChange={(e) => setDeliveryFee(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(deliveryFee / 20) * 100}%, #e5e7eb ${(deliveryFee / 20) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Ready to Get Started?</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Take our three-minute quiz to find clinics that match your budget and needs.
                </p>
                <a
                  href="/quiz"
                  className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-md hover:from-blue-700 hover:to-green-700 transition-all font-medium"
                >
                  Take our three-minute quiz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Understanding Medical Cannabis Costs
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <PoundSterling className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Budget Options</h3>
              <p className="text-gray-600 text-sm">
                Lower-cost products are available for patients on tighter budgets, 
                often with similar therapeutic benefits.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Calculator className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Dosing</h3>
              <p className="text-gray-600 text-sm">
                Your doctor will help you find the minimum effective dose, 
                which can help reduce overall treatment costs.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Long-term Value</h3>
              <p className="text-gray-600 text-sm">
                Many patients find medical cannabis reduces their need for 
                other medications, providing overall healthcare savings.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Costs */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-yellow-800 mb-4">Additional Costs to Consider</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-yellow-800 mb-3">One-time Costs</h5>
                <ul className="text-yellow-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Initial consultation: £150-£300</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Medical records request: £0-£50</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-yellow-800 mb-3">Recurring Costs</h5>
                <ul className="text-yellow-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Follow-up consultations: £50-£150</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Prescription fees: £25-£40 per prescription</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Delivery charges: £5-£15 per order</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetToolPage;