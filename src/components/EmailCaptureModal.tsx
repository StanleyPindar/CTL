import React, { useState } from 'react';
import { X, Mail, User, Lock, CheckCircle } from 'lucide-react';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { email: string; name: string }) => void;
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    onSubmit({ email, name });
    // Reset form is handled by parent component
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-2" />
              Get Your Detailed Results
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <p className="text-gray-700 mb-6 text-lg">
              Enter your email to unlock:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Full clinic profiles and specializations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Detailed pricing and appointment availability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Direct booking links</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Personalized strain recommendations</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                  Email Address*
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                  Your Name (Optional)
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Mail className="h-5 w-5 mr-2" />
                    Get My Results
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 flex items-start">
              <Lock className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-500">
                We'll only use your email to send your results and occasional updates about medical cannabis. 
                You can unsubscribe at any time. See our Privacy Policy for more information.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailCaptureModal;