import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Shield, Stethoscope } from 'lucide-react';

interface DisclaimerPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ isOpen, onClose, onAccept }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const isScrolledToBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 10;
    if (isScrolledToBottom && !hasScrolled) {
      setHasScrolled(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mr-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Important Medical Disclaimer
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div 
          className="p-6 overflow-y-auto max-h-96"
          onScroll={handleScroll}
        >
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <Stethoscope className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Not Medical Advice</h3>
                  <p className="text-red-700 text-sm">
                    CompareTheLeaf is an information platform only. We do not provide medical advice, 
                    diagnosis, or treatment. Always consult with qualified healthcare professionals 
                    before making any medical decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Legal Requirements</h3>
                  <p className="text-blue-700 text-sm">
                    Medical cannabis is legal in the UK only when prescribed by specialist doctors. 
                    Self-medication with cannabis remains illegal. Always ensure you have a valid 
                    prescription before using medical cannabis.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Before Using Our Service</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Consult your GP or specialist about medical cannabis treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Verify that any clinic you choose is properly licensed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Understand the legal requirements in your area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Consider all treatment options with your healthcare provider</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Emergency Situations</h3>
              <p className="text-sm text-gray-700">
                If you are experiencing a medical emergency, call 999 immediately. 
                Do not rely on information from our website for emergency medical situations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-600">
                By continuing to use CompareTheLeaf, you acknowledge that you have read and 
                understood this disclaimer. You agree that any use of our platform is at your 
                own risk and that we are not liable for any medical decisions made based on 
                information provided.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onAccept}
              disabled={!hasScrolled}
              className={`flex-1 px-6 py-3 rounded-md font-medium transition-all ${
                hasScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              I Understand and Accept
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
          {!hasScrolled && (
            <p className="text-xs text-gray-500 mt-2 text-center">
              Please scroll to the bottom to continue
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;