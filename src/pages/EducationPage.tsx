import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, User, Search, Filter } from 'lucide-react';
import { educationalArticles, categories } from '../data/educationalContent';
import PositiveOutcomesSection from '../components/PositiveOutcomesSection';

const EducationPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<'articles' | 'faqs'>('articles');

  const filteredArticles = educationalArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = educationalArticles.filter(article => article.featured);

  const handleArticleClick = (slug: string) => {
    navigate(`/education/${slug}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Cannabis Education Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides, research insights, and expert advice to help you understand 
              medical cannabis treatment and make informed decisions about your healthcare.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('articles')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'articles'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Educational Articles
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'faqs'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Frequently Asked Questions
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'articles' ? (
          <div className="space-y-8">
            {/* Featured Articles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => handleArticleClick(article.slug)}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden"
                  >
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-green-500"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800 mr-3">
                          Featured
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                          {article.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-blue-600 font-medium">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Search and Filter */}
            <section>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[150px]"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </section>

            {/* All Articles */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
                <span className="text-sm text-gray-500">
                  {filteredArticles.length} articles found
                </span>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No articles found</p>
                  <p className="text-gray-400">Try adjusting your search criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => handleArticleClick(article.slug)}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden"
                    >
                      <div className="h-32 bg-gradient-to-r from-blue-400 to-green-400"></div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                            {article.category}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{formatDate(article.date)}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find answers to the most common questions about medical cannabis treatment, 
                legal requirements, and the prescription process in the UK.
              </p>
            </div>
            <FAQAccordion />
          </div>
        )}
      </div>

      {/* Clinical Evidence Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clinical Evidence: Real-world & RCT Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Peer-reviewed research demonstrating the effectiveness of medical cannabis 
              treatment across various conditions and patient populations.
            </p>
          </div>
        </div>
        <PositiveOutcomesSection />
      </div>
    </div>
  );
};

export default EducationPage;