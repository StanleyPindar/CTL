import React from 'react';
import { Cookie, Settings, Shield } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags 
        title="Cookie Policy - CompareTheLeaf"
        description="Learn about how CompareTheLeaf uses cookies to improve your browsing experience and provide personalized content."
        canonicalUrl="https://comparetheleaf.co.uk/cookies"
        keywords={['cookie policy', 'privacy', 'data protection', 'website cookies']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Cookie className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. 
              They help websites remember information about your visit, such as your preferred language 
              and other settings, which can make your next visit easier and the site more useful to you.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              CompareTheLeaf uses cookies to enhance your browsing experience, analyze website performance, 
              and provide personalized content. We use both first-party cookies (set by our website) and 
              third-party cookies (set by external services).
            </p>

            <h2>3. Types of Cookies We Use</h2>

            <h3>3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions 
              like page navigation, access to secure areas, and form submissions. The website cannot function 
              properly without these cookies.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="text-blue-800 mb-0">
                <strong>Examples:</strong> Session management, security tokens, load balancing
              </p>
            </div>

            <h3>3.2 Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and 
              reporting information anonymously. This helps us improve our website's performance and user experience.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
              <p className="text-green-800 mb-0">
                <strong>Examples:</strong> Google Analytics, page views, bounce rate, traffic sources
              </p>
            </div>

            <h3>3.3 Functional Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization. They may be set by us or by 
              third-party providers whose services we have added to our pages.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">
              <p className="text-purple-800 mb-0">
                <strong>Examples:</strong> Language preferences, region selection, accessibility settings
              </p>
            </div>

            <h3>3.4 Marketing Cookies</h3>
            <p>
              These cookies track your online activity to help advertisers deliver more relevant advertising 
              or to limit how many times you see an ad. We may share this information with other organizations 
              or advertisers.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 my-4">
              <p className="text-orange-800 mb-0">
                <strong>Examples:</strong> Advertising networks, social media plugins, remarketing
              </p>
            </div>

            <h2>4. Third-Party Cookies</h2>
            <p>We may use third-party services that set cookies on our website, including:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
              <li><strong>Customer Support Tools:</strong> For live chat and support services</li>
              <li><strong>Content Delivery Networks:</strong> For improved website performance</li>
            </ul>

            <h2>5. Cookie Duration</h2>
            <p>Cookies can be either:</p>
            <ul>
              <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
            </ul>

            <h2>6. Managing Your Cookie Preferences</h2>
            
            <h3>6.1 Browser Settings</h3>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. 
              You can set your browser to:
            </p>
            <ul>
              <li>Accept all cookies</li>
              <li>Reject all cookies</li>
              <li>Notify you when a cookie is set</li>
              <li>Delete cookies after each session</li>
            </ul>

            <h3>6.2 Cookie Consent Tool</h3>
            <p>
              We provide a cookie consent tool that allows you to manage your preferences for 
              non-essential cookies. You can access this tool at any time to update your preferences.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Manage Cookie Preferences</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Click the button below to open your cookie preferences and manage your settings.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Cookie Settings
              </button>
            </div>

            <h2>7. Impact of Disabling Cookies</h2>
            <p>
              If you choose to disable cookies, some features of our website may not function properly. 
              Specifically, you may experience:
            </p>
            <ul>
              <li>Difficulty navigating the website</li>
              <li>Loss of personalized settings</li>
              <li>Inability to use certain interactive features</li>
              <li>Repeated requests for information you've already provided</li>
            </ul>

            <h2>8. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any material 
              changes by posting the updated policy on our website.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-medium">Data Protection Officer</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Email: privacy@comparetheleaf.co.uk</p>
                  <p>Phone: 0800 123 4567</p>
                  <p>Address: 123 Medical Centre, London, UK SW1A 1AA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;