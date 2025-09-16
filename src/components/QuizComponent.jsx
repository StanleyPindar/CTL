// MVP Quiz Component for CompareTheLeaf
import React, { useState, useEffect } from 'react';
import { quizQuestions, advancedQuizQuestions } from '../data/quizQuestions.js';
import MVPMatchingAlgorithm from '../utils/matchingAlgorithm.js';

const QuizComponent = ({ clinics, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showAdvancedQuiz, setShowAdvancedQuiz] = useState(false);
  const [email, setEmail] = useState('');
  const [matches, setMatches] = useState([]);
  const [advancedResponses, setAdvancedResponses] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Progress calculation
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  // Handle answer selection
  const handleAnswer = (questionId, answer) => {
    const newResponses = { ...responses, [questionId]: answer };
    setResponses(newResponses);
  };

  // Handle next button click
  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete - show basic results
      calculateBasicMatches(responses);
    }
  };

  // Handle previous button click
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Calculate basic matches (before email capture)
  const calculateBasicMatches = (quizResponses) => {
    setIsLoading(true);
    
    const safeResponses = quizResponses ?? {};
    const safeClinics = clinics ?? [];
    
    const algorithm = new MVPMatchingAlgorithm(safeClinics);
    const basicMatches = algorithm.calculateMatches(safeResponses);
    
    setMatches(basicMatches);
    setShowResults(true);
    setIsLoading(false);
    
    // Redirect to results page with query parameters
    const queryParams = new URLSearchParams();
    Object.entries(safeResponses).forEach(([key, value]) => {
      queryParams.append(key, value);
    });
    
    window.location.href = `/results?${queryParams.toString()}`;
  };

  // Handle email submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    // Track email capture with UTM data
    const utmData = {
      source: new URLSearchParams(window.location.search).get('utm_source'),
      medium: new URLSearchParams(window.location.search).get('utm_medium'),
      campaign: new URLSearchParams(window.location.search).get('utm_campaign')
    };

    try {
      const userData = {
        email,
        quiz_responses: responses,
        quiz_completed: true,
        utm_data: utmData,
        created_at: new Date().toISOString()
      };
      
      setShowEmailCapture(false);
      setShowAdvancedQuiz(true);
      
    } catch (error) {
      console.error('Error storing user data:', error);
      setShowEmailCapture(false);
      setShowAdvancedQuiz(true);
    }
  };

  // Handle advanced quiz completion
  const handleAdvancedQuizComplete = (advancedData) => {
    const safeAdvancedData = advancedData ?? {};
    setAdvancedResponses(safeAdvancedData);
    
    const safeResponses = responses ?? {};
    const safeClinics = clinics ?? [];
    
    // Recalculate matches with advanced data
    const algorithm = new MVPMatchingAlgorithm(safeClinics);
    const enhancedMatches = algorithm.calculateMatches(safeResponses, safeAdvancedData);
    
    setMatches(enhancedMatches);
    setShowAdvancedQuiz(false);
  };

  // Skip advanced quiz
  const skipAdvancedQuiz = () => {
    setShowAdvancedQuiz(false);
  };

  // Render current question
  const renderQuestion = () => {
    const question = quizQuestions[currentQuestion];
    
    return (
      <div className="quiz-question">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="question-content">
          <h2>{question.question}</h2>
          
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={option.value}
                className={`option-button ${responses[question.id] === option.value ? 'selected' : ''}`}
                onClick={() => handleAnswer(question.id, option.value)}
              >
                <div className="option-label">{option.label}</div>
                {option.description && (
                  <div className="option-description">{option.description}</div>
                )}
              </button>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={!responses[question.id]}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Get Results' : 'Next'}
            </button>
          </div>
        </div>
        
        <div className="question-counter">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </div>
      </div>
    );
  };

  // Render basic results
  const renderResults = () => {
    return (
      <div className="quiz-results">
        <h2>Your Top Clinic Matches</h2>
        <p>Based on your responses, here are your best matches:</p>
        
        <div className="matches-preview">
          {matches.map((match, index) => (
            <div key={match.clinic.id} className="match-card preview">
              <div className="match-rank">#{index + 1}</div>
              <div className="clinic-info">
                <h3>{match.clinic.overview?.name || 'Unknown Clinic'}</h3>
                <div className="match-percentage">{match.matchPercentage}% match</div>
                <div className="clinic-price">
                  From £{match.clinic.pricing?.initialConsultation?.price || 'TBC'}
                </div>
              </div>
              <div className="match-reasons">
                <div className="reason">{match.matchReasons[0]}</div>
                <div className="more-reasons">+{match.matchReasons.length - 1} more reasons</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="email-capture-prompt">
          <h3>Get Your Detailed Results</h3>
          <p>Enter your email to see full clinic details, pricing, and booking links</p>
          <button 
            className="cta-button"
            onClick={() => setShowEmailCapture(true)}
          >
            Get Detailed Results
          </button>
        </div>
      </div>
    );
  };

  // Render email capture form
  const renderEmailCapture = () => {
    return (
      <div className="email-capture">
        <h2>Get Your Detailed Clinic Matches</h2>
        <p>Enter your email to unlock:</p>
        <ul>
          <li>Full clinic profiles and specializations</li>
          <li>Detailed pricing and appointment availability</li>
          <li>Direct booking links</li>
          <li>Personalized recommendations</li>
        </ul>
        
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="cta-button">
            Get My Results
          </button>
        </form>
        
        <p className="privacy-note">
          We'll only use your email to send your results. No spam, unsubscribe anytime.
        </p>
      </div>
    );
  };

  // Render advanced quiz offer
  const renderAdvancedQuizOffer = () => {
    return (
      <div className="advanced-quiz-offer">
        <h2>Improve Your Match Score to 95%+</h2>
        <p>Answer 3 more questions to get even more personalized recommendations with strain-specific matching.</p>
        
        <div className="benefits">
          <div className="benefit">🎯 Strain-specific recommendations</div>
          <div className="benefit">📊 Detailed condition matching</div>
          <div className="benefit">⚡ Priority clinic access</div>
        </div>
        
        <div className="actions">
          <button 
            className="cta-button"
            onClick={() => setShowAdvancedQuiz(true)}
          >
            Take Advanced Quiz (2 min)
          </button>
          <button 
            className="skip-button"
            onClick={skipAdvancedQuiz}
          >
            Skip for Now
          </button>
        </div>
      </div>
    );
  };

  // Render detailed results
  const renderDetailedResults = () => {
    return (
      <div className="detailed-results">
        <h2>Your Personalized Clinic Matches</h2>
        <p>Results sent to: {email}</p>
        
        <div className="matches-detailed">
          {matches.map((match, index) => (
            <div key={match.clinic.id} className="match-card detailed">
              <div className="match-header">
                <div className="clinic-name">
                  <h3>{match.clinic.overview?.name || 'Unknown Clinic'}</h3>
                  <div className="match-percentage">{match.matchPercentage}% match</div>
                </div>
                <div className="clinic-rating">
                  ⭐ {match.clinic.patientExperience?.overallRating || 'N/A'} ({match.clinic.patientExperience?.totalReviews || 0} reviews)
                </div>
              </div>
              
              <div className="clinic-details">
                <div className="pricing">
                  <div>Consultation: £{match.clinic.pricing?.initialConsultation?.price || 'TBC'}</div>
                  <div>Annual cost: £{match.clinic.pricing?.estimatedAnnualCost?.average || 'TBC'}</div>
                </div>
                
                <div className="availability">
                  <div>Wait time: {match.clinic.patientExperience?.nextAvailableAppointment || 'TBC'}</div>
                  <div>Location: {match.clinic.overview?.address?.city || 'Virtual'}</div>
                </div>
              </div>
              
              <div className="match-reasons">
                <h4>Why this clinic matches you:</h4>
                <ul>
                  {match.matchReasons.map((reason, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              </div>
              
              <div className="actions">
                <button className="book-button">
                  Book Consultation
                </button>
                <button className="learn-more-button">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Main render
  if (isLoading) {
    return (
      <div className="quiz-loading">
        <div className="spinner"></div>
        <p>Calculating your matches...</p>
      </div>
    );
  }

  if (showEmailCapture) {
    return renderEmailCapture();
  }

  if (showAdvancedQuiz) {
    return renderAdvancedQuizOffer();
  }

  if (showResults) {
    return email ? renderDetailedResults() : renderResults();
  }

  return renderQuestion();
};

export default QuizComponent;