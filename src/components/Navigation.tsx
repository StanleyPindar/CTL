import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Leaf } from 'lucide-react';

type MenuItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

const MENU: MenuItem[] = [
  {
    label: 'Reviews',
    children: [
      { label: 'CB1 Medical Review', to: '/reviews/cb1-medical-review' },
      { label: 'Releaf Review', to: '/reviews/releaf-review' },
      { label: 'Alternaleaf Review', to: '/reviews/alternaleaf-review' },
      { label: 'Mamedica Review', to: '/reviews/mamedica-review' },
      { label: 'Cantourage Review', to: '/reviews/cantourage-review' },
      { label: 'Dispensed Review', to: '/reviews/dispensed-review' },
      { label: 'Birmingham Cannabis Clinic Review', to: '/reviews/birmingham-cannabis-care-review' },
    ]
  },
  { label: 'Clinics', to: '/clinics' },
  {
    label: 'Conditions',
    children: [
      { label: 'Chronic Pain', to: '/conditions/chronic-pain' },
      { label: 'Anxiety & PTSD', to: '/conditions/anxiety-ptsd' },
      { label: 'Sleep Disorders', to: '/conditions/insomnia' },
      { label: 'Multiple Sclerosis', to: '/conditions/multiple-sclerosis' }
    ]
  },
  {
    label: 'Education',
    children: [
      { label: 'Education Hub', to: '/education/hub' },
      { label: 'How to Get Prescription', to: '/education/how-to-get-prescription' },
      { label: 'How to Choose Clinic', to: '/education/how-to-choose-clinic' },
      { label: 'UK Complete Guide', to: '/education/uk-complete-guide' },
    ]
  },
  {
    label: 'Tools',
    children: [
      { label: 'All Tools', to: '/tools' },
      { label: 'Budget Calculator', to: '/budget-tool' },
      { label: 'Qualification Checker', to: '/qualify' },
      { label: 'Clinic Reviews', to: '/reviews' },
      { label: 'Compare Clinics', to: '/compare' }
    ]
  },
  { label: 'About', to: '/about' }
];

export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const navRef = useRef<HTMLElement>(null);

  // Custom hook for outside click detection
  const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ref, callback]);
  };

  const useRouteChangeClose = () => {
    useEffect(() => {
      setOpenDropdown(null);
      setIsMobileMenuOpen(false);
      setMobileDropdowns({});
    }, [location.pathname]);
  };

  useOutsideClick(navRef, () => setOpenDropdown(null));
  useRouteChangeClose();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMobileDropdownToggle = (label: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <nav ref={navRef} className="bg-white shadow-sm border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/images/CTL_Logo_Header.webp"
                alt="CompareTheLeaf - UK Medical Cannabis Clinic Comparison Platform" 
                className="h-40 w-auto"
                width="auto"
                height="160"
                decoding="async"
                loading="eager"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden flex items-center ml-2">
                <Leaf className="h-40 w-40 text-green-500" />
                <span className="ml-2 text-xl font-bold text-gray-900">CompareTheLeaf</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {MENU.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onFocus={() => setOpenDropdown(item.label)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setOpenDropdown(null);
                      }
                    }}
                  >
                    <button
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                        <div role="menu" aria-orientation="vertical">
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                              role="menuitem"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to!}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Prominent Find My Clinic CTA */}
            <Link
              to="/quiz"
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
            >
              Find My Clinic
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {MENU.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.children[0].to}
                          className="flex-1 block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => handleMobileDropdownToggle(item.label)}
                          className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                          aria-expanded={mobileDropdowns[item.label]}
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform ${
                              mobileDropdowns[item.label] ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      </div>
                      
                      {mobileDropdowns[item.label] && (
                        <div className="pl-6 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.to!}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Find My Clinic CTA */}
              <div className="mt-4 px-2">
                <Link
                  to="/quiz"
                  className="block w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-md text-center"
                >
                  Find My Clinic
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}