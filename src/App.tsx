import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClinicDataProvider } from './context/ClinicDataProvider';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import ScrollToTop from './components/common/ScrollToTop';
import { Navigation } from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';
import RouteErrorBoundary from './components/common/RouteErrorBoundary';
import HomePage from './pages/HomePage';
import ClinicRedirect from './components/ClinicRedirect';
import QuizPage from './pages/QuizPage';
import ClinicsPage from './pages/ClinicsPage';
import ConditionsPage from './pages/ConditionsPage';
import ChronicPainPage from './pages/ChronicPainPage';
import AnxietyPTSDPage from './pages/AnxietyPTSDPage';
import InsomniaPage from './pages/InsomniaPage';
import MultipleSclerosisPage from './pages/MultipleSclerosisPage';
import NotFoundPage from './pages/NotFoundPage';
import { Toaster } from 'react-hot-toast';

// Aggressive lazy loading - split into logical feature chunks
const BudgetToolPage = lazy(() => import('./pages/BudgetToolPage'));
const QualificationCheckerPage = lazy(() => import('./pages/QualificationCheckerPage'));
const ClinicProfilePage = lazy(() => import('./pages/ClinicProfilePage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const ReviewDetailPage = lazy(() => import('./pages/ReviewDetailPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const ConditionDetailPage = lazy(() => import('./pages/ConditionDetailPage'));
const ChronicPainMatchingPage = lazy(() => import('./pages/ChronicPainMatchingPage'));

// Blog and content pages
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage'));
const EducationArticlesPage = lazy(() => import('./pages/EducationArticlesPage'));
const GuidesPage = lazy(() => import('./pages/GuidesPage'));
const FAQsPage = lazy(() => import('./pages/FAQsPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));

// Static pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LegalitiesPage = lazy(() => import('./pages/LegalitiesPage'));
const HowToGetAClinicPage = lazy(() => import('./pages/HowToGetAClinicPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const TermsOfUsePage = lazy(() => import('./pages/TermsOfUsePage'));
const MedicalDisclaimerPage = lazy(() => import('./pages/MedicalDisclaimerPage'));
const ClinicDirectoryPage = lazy(() => import('./pages/ClinicDirectoryPage'));

const HowToGetPrescriptionPage = lazy(() => import('./pages/HowToGetPrescriptionPage'));
const EducationHubPage = lazy(() => import('./pages/EducationHubPage'));
const UKCompleteGuidePage = lazy(() => import('./pages/UKCompleteGuidePage'));
const ClinicComparisonGuidePage = lazy(() => import('./pages/ClinicComparisonGuidePage'));
const MarketInsightsPage = lazy(() => import('./pages/MarketInsightsPage'));

// Condition articles
const ChronicPainArticle = lazy(() => import('./pages/conditions/ChronicPainArticle'));
const AnxietyArticle = lazy(() => import('./pages/conditions/AnxietyArticle'));
const InsomniaArticle = lazy(() => import('./pages/conditions/InsomniaArticle'));
const MultipleSclerosisArticle = lazy(() => import('./pages/conditions/MultipleSclerosisArticle'));
const EpilepsyArticle = lazy(() => import('./pages/conditions/EpilepsyArticle'));
const CancerArticle = lazy(() => import('./pages/conditions/CancerArticle'));

// Tools and utilities
const ToolsPage = lazy(() => import('./pages/ToolsPage'));
const ClinicReviewPage = lazy(() => import('./pages/ClinicReviewPage'));
const CompareClinicsPage = lazy(() => import('./pages/CompareClinicsPage'));
const ClinicReviewArticlePage = lazy(() => import('./pages/ClinicReviewArticlePage'));

// Individual clinic review pages - restored original SEO-rich content
const AlternaleafReviewPage = lazy(() => import('./pages/AlternaleafReviewPage'));
const CantourageReviewPage = lazy(() => import('./pages/CantourageReviewPage'));
const CB1MedicalReviewPage = lazy(() => import('./pages/CB1MedicalReviewPage'));
const DispensedReviewPage = lazy(() => import('./pages/DispensedReviewPage'));
const MamedicaReviewPage = lazy(() => import('./pages/MamedicaReviewPage'));
const ReleafReviewPage = lazy(() => import('./pages/ReleafReviewPage'));
const BirminghamCannabisCareReviewPage = lazy(() => import('./pages/BirminghamCannabisCareReviewPage'));

// Landing pages
const LandingFindReliefPage = lazy(() => import('./pages/LandingFindReliefPage'));
const FindMyClinicPage = lazy(() => import('./pages/FindMyClinicPage'));
const CheckEligibilityPage = lazy(() => import('./pages/CheckEligibilityPage'));

// Admin pages - heavily lazy loaded since rarely used

// Development-only components
const BrokenLinkDetector = process.env.NODE_ENV === 'development' 
  ? lazy(() => import('./components/common/BrokenLinkDetector'))
  : null;
const PerformanceMonitor = process.env.NODE_ENV === 'development' 
  ? lazy(() => import('./components/ui/PerformanceMonitor'))
  : null;

const LoadingFallback = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center" role="status" aria-label="Loading page">
    <LoadingSpinner size="lg" />
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <ClinicDataProvider>
          <div className="min-h-screen bg-gray-50" role="main">
            <Toaster position="top-right" />
            
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <HomePage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/quiz" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <QuizPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                
                <Route path="/clinics" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ClinicsPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                
                <Route path="/conditions" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ConditionsPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                
                <Route path="/faq" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                
                <Route path="/about" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <AboutPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                
                <Route path="/contact" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ContactPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                
                <Route path="/tools" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ToolsPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                
                <Route path="/reviews" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ReviewsPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                
                {/* Individual clinic review pages - must come before generic /reviews/:slug */}
                <Route path="/reviews/alternaleaf-review" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <AlternaleafReviewPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/reviews/cantourage-review" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <CantourageReviewPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/reviews/cb1-medical-review" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <CB1MedicalReviewPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/reviews/dispensed-review" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <DispensedReviewPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/reviews/mamedica-review" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <MamedicaReviewPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/reviews/releaf-review" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ReleafReviewPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/reviews/birmingham-cannabis-care-review" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <BirminghamCannabisCareReviewPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                
                <Route path="/budget-tool" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <BudgetToolPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/qualify" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <QualificationCheckerPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/results" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ResultsPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/clinics/:slug" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ClinicProfilePage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/reviews/:slug" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ClinicReviewPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/reviews/article/:slug" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ClinicReviewArticlePage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/:slug" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ConditionDetailPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/chronic-pain-matching" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ChronicPainMatchingPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/blog" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <BlogIndexPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/blog/:slug" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <BlogPostPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/articles" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ArticlesPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/articles/:slug" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ArticleDetailPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/education" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <EducationArticlesPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/guides" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <GuidesPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/faqs" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <FAQsPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/resources" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ResourcesPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/about" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <AboutPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/legalities" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <LegalitiesPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/how-to-get-a-clinic" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <HowToGetAClinicPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/privacy" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <PrivacyPolicyPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/cookies" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <CookiePolicyPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/terms" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <TermsOfUsePage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/clinic-directory" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ClinicDirectoryPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/education/hub" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <EducationHubPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/education/how-to-get-prescription" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <HowToGetPrescriptionPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/education/how-to-get-a-clinic" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <HowToGetAClinicPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/education/uk-complete-guide" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <UKCompleteGuidePage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/education/clinic-comparison-guide" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ClinicComparisonGuidePage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/chronic-pain-article" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ChronicPainArticle />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/anxiety-article" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <AnxietyArticle />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/insomnia-article" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <InsomniaArticle />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/multiple-sclerosis-article" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <MultipleSclerosisArticle />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/epilepsy-article" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <EpilepsyArticle />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/cancer-article" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <CancerArticle />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/chronic-pain" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <ChronicPainPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/anxiety-ptsd" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <AnxietyPTSDPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/insomnia" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <InsomniaPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/conditions/multiple-sclerosis" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <MultipleSclerosisPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/compare" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <CompareClinicsPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/landing/find-relief" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <LandingFindReliefPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/find-my-clinic" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <FindMyClinicPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                <Route path="/check-eligibility" element={
                  <RouteErrorBoundary>
                    <Navigation />
                    <main role="main">
                      <CheckEligibilityPage />
                    </main>
                    <Footer />
                  </RouteErrorBoundary>
                } />
                
                {/* Legacy /clinic/ redirects - redirect to /clinics/ */}
                <Route path="/clinic/:slug" element={<ClinicRedirect />} /> 
                <Route path="/clinic/" element={<ClinicRedirect />} />
                <Route path="/clinic" element={<ClinicRedirect />} />
                
                {/* 404 Catch-all Route */}
                <Route path="*" element={
                  <>
                    <Navigation />
                    <main role="main">
                      <NotFoundPage />
                    </main>
                    <Footer />
                  </>
                } />
                </Routes>
            </Suspense>
              
              {/* Broken Link Detection (Development) */}
              {process.env.NODE_ENV === 'development' && (
                <Suspense fallback={null}>
                  <BrokenLinkDetector />
                </Suspense>
              )}
          </div>
            
            {/* Development Performance Monitor */}
            {process.env.NODE_ENV === 'development' && (
              <Suspense fallback={null}>
                <PerformanceMonitor />
              </Suspense>
            )}
        </ClinicDataProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;