import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const textLogoRef = useRef<HTMLDivElement>(null);

  return (
    <footer className="bg-gradient-to-r from-midBlue to-darkBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/images/CTL_Logo_192 (1).webp"
                alt="CompareTheLeaf - UK Medical Cannabis Clinic Comparison Platform Logo" 
                className="h-12 w-12"
                loading="lazy"
                width="192"
                height="192"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (textLogoRef.current) {
                    textLogoRef.current.classList.remove('hidden');
                  }
                }}
              />
              <div ref={textLogoRef} className="hidden flex items-center">
                <Leaf className="h-12 w-12 text-green-500" />
                <span className="ml-2 text-2xl font-bold">CompareTheLeaf</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The UK's most comprehensive medical cannabis clinic comparison platform. 
              Helping patients find the right treatment and care for their needs.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
            <div className="mt-6">
              <a href="https://wa.me/1234567890" className="text-white hover:text-green-300 transition-colors">
                Got questions? WhatsApp The Team &gt;
              </a>
              <p className="text-sm text-gray-600 mt-1">We typically reply within 24 hours.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/clinics" className="text-gray-300 hover:text-white transition-colors">Compare Clinics</Link></li>
              <li><Link to="/quiz" className="text-gray-300 hover:text-white transition-colors">Find My Clinic</Link></li>
              <li><Link to="/conditions" className="text-gray-300 hover:text-white transition-colors">Conditions</Link></li>
              <li><Link to="/education" className="text-gray-300 hover:text-white transition-colors">Education Hub</Link></li>
              <li><Link to="/tools" className="text-gray-300 hover:text-white transition-colors">Tools</Link></li>
              <li><Link to="/landing/find-relief" className="text-gray-300 hover:text-white transition-colors">Find Relief Guide</Link></li>
              <li><Link to="/check-eligibility" className="text-gray-300 hover:text-white transition-colors">Check Eligibility</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/budget-tool" className="text-gray-300 hover:text-white transition-colors">Budget Calculator</Link></li>
              <li><Link to="/qualify" className="text-gray-300 hover:text-white transition-colors">Qualification Checker</Link></li>
              <li><Link to="/check-eligibility" className="text-gray-300 hover:text-white transition-colors">Eligibility Checker</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Clinic Reviews</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog & Articles</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:tim@comparetheleaf.co.uk">tim@comparetheleaf.co.uk</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 CompareTheLeaf. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Medical Disclaimer</Link>
              <Link to="/legalities" className="text-gray-400 hover:text-white transition-colors">Legalities</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;