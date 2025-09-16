import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, User, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import StarRating from '../components/common/StarRating';

const ReviewDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [story, setStory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Default story data as fallback
  const defaultStory = {
    title: "Sarah's Chronic Pain Journey",
    author: 'Sarah M.',
    age: '34',
    location: 'London',
    condition: 'Chronic Pain',
    clinic: 'London Cannabis Clinic',
    rating: 5,
    date: '2024-01-15',
    readTime: '5 min read',
    content: `
      <p>After living with chronic pain for over 8 years following a car accident, I had tried everything - physiotherapy, prescription painkillers, steroid injections, and even surgery. Nothing provided lasting relief, and the side effects from long-term opioid use were becoming unbearable.</p>

      <h3>The Decision to Try Medical Cannabis</h3>
      <p>My GP mentioned medical cannabis as an option, but I was initially skeptical. The stigma around cannabis made me hesitant, but after researching the science and speaking with other patients online, I decided to explore this treatment option.</p>

      <h3>Finding the Right Clinic</h3>
      <p>I used CompareTheLeaf to research different clinics in London. The reviews and detailed information helped me choose London Cannabis Clinic based on their specialization in chronic pain and excellent patient reviews.</p>

      <h3>The Consultation Process</h3>
      <p>Dr. Williams was incredibly thorough during my initial consultation. She reviewed my medical history, discussed my current pain levels, and explained how medical cannabis could help. The consultation lasted over an hour, and I never felt rushed.</p>

      <h3>Treatment and Results</h3>
      <p>I started with a low-dose CBD oil during the day and a THC/CBD combination for evening use. Within two weeks, I noticed a significant reduction in my pain levels. For the first time in years, I was sleeping through the night.</p>

      <h3>Life-Changing Impact</h3>
      <p>Six months later, I've reduced my opioid medication by 80% and my quality of life has dramatically improved. I can now play with my children, return to work part-time, and enjoy activities I thought were lost forever.</p>

      <h3>Advice for Others</h3>
      <p>If you're considering medical cannabis, do your research and find a reputable clinic. The treatment isn't a miracle cure, but for me, it's been life-changing. Don't let stigma prevent you from exploring all your treatment options.</p>
    `,
    pros: [
      'Significant pain reduction',
      'Improved sleep quality',
      'Reduced dependency on opioids',
      'Better quality of life',
      'Excellent clinic support'
    ],
    cons: [
      'Initial adjustment period',
      'Cost not covered by NHS',
      'Some trial and error with dosing'
    ],
    timeline: [
      { week: 'Week 1', event: 'Initial consultation and prescription' },
      { week: 'Week 2', event: 'Started noticing pain reduction' },
      { week: 'Week 4', event: 'Sleeping through the night consistently' },
      { week: 'Week 8', event: 'Reduced opioid medication by 50%' },
      { week: 'Week 16', event: 'Returned to part-time work' },
      { week: 'Week 24', event: 'Reduced opioids by 80%, stable routine' }
    ]
  };

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        setLoading(true);
        
        // Try to fetch review data from Supabase
        const { data, error } = await supabase
          .from('clinic_reviews')
          .select('*')
          .eq('id', slug)
          .maybeSingle();

        if (error) throw error;

        if (data) {
          // Transform Supabase data to story format
          setStory({
            title: data.review_text || defaultStory.title,
            author: 'Anonymous User',
            age: 'N/A',
            location: 'UK',
            condition: data.treatment_type || 'Medical Cannabis Patient',
            clinic: 'Licensed UK Clinic',
            rating: data.rating || 5,
            date: data.created_at || defaultStory.date,
            readTime: '5 min read',
            content: data.review_text || defaultStory.content,
            pros: data.pros || defaultStory.pros,
            cons: data.cons || defaultStory.cons,
            timeline: defaultStory.timeline
          });
        } else {
          // Use default story if no data found
          setStory(defaultStory);
        }
      } catch (err) {
        console.error('Error fetching review data:', err);
        // Fallback to default story
        setStory(defaultStory);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-yellow-600 mb-4">Review not found.</p>
            <button
              onClick={() => navigate('/reviews')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Reviews
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/reviews')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Reviews
          </button>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Story Header */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                {story.condition}
              </span>
              <div className="flex items-center">
                <StarRating value={story.rating} size={20} />
                <span className="text-lg font-medium ml-1">{story.rating}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {story.title}
            </h1>

            {/* Author Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{story.author}, {story.age}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{story.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(story.date).toLocaleDateString('en-GB')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{story.readTime}</span>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Treated at:</span> {story.clinic}
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />
          </div>

          {/* Treatment Timeline */}
          <div className="p-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Treatment Timeline</h3>
            <div className="space-y-4">
              {story.timeline.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-20 text-sm font-medium text-gray-600">
                    {item.week}
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1 mr-4"></div>
                  <div className="text-gray-700">{item.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="p-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Pros & Cons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-green-700 mb-4">Pros</h4>
                <ul className="space-y-2">
                  {story.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-red-700 mb-4">Cons</h4>
                <ul className="space-y-2">
                  {story.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5 flex-shrink-0">×</span>
                      <span className="text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 border-t border-gray-200 bg-gray-50">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Interested in {story.clinic}?
              </h3>
              <p className="text-gray-600 mb-4">
                Learn more about this clinic and read additional reviews.
              </p>
              <button
                onClick={() => navigate('/clinics/clinic-1')}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-md hover:from-blue-700 hover:to-green-700 transition-all"
              >
                View Clinic Profile
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ReviewDetailPage;