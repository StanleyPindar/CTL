import React from 'react';
import { AlertTriangle, Stethoscope, Phone, Scale } from 'lucide-react';

const MedicalDisclaimer: React.FC = () => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8" role="complementary" aria-label="Medical disclaimer">
      <div className="flex items-start">
        <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">
            Important Medical Disclaimer
          </h3>
          
          <div className="space-y-4 text-yellow-700">
            <div className="flex items-start">
              <Stethoscope className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <strong>Not Medical Advice:</strong> The information provided on CompareTheLeaf 
                is for educational purposes only and should not be considered medical advice, 
                diagnosis, or treatment recommendations.
              </p>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <strong>Consult Healthcare Professionals:</strong> Always consult with qualified 
                healthcare providers before making any medical decisions or starting new treatments.
                Medical cannabis should only be prescribed by GMC-registered specialists.
              </p>
            </div>
            
            <div className="flex items-start">
              <Scale className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">
                <strong>Legal Compliance:</strong> Medical cannabis is legal in the UK when prescribed 
                by specialist doctors. All clinics listed are MHRA regulated and comply with UK medical cannabis regulations.
              </p>
            </div>
            
            <div className="bg-yellow-100 rounded-md p-3 mt-4">
              <p className="text-xs text-yellow-800">
                <strong>Emergency Notice:</strong> If you are experiencing a medical emergency, 
                call 999 immediately. Do not rely on information from our website for emergency situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;