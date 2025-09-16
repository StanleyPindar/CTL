import React, { useState } from 'react';
import { Calendar, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import { FullClinicProfile } from '../types/clinic';

interface BookingWidgetProps {
  clinic: FullClinicProfile;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ clinic }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Generate available dates (next 14 days)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends for simplicity
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-GB', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
          })
        });
      }
    }
    
    return dates;
  };
  
  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9;
    const endHour = 17;
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push({
          value: time,
          label: `${time}`
        });
      }
    }
    
    return slots;
  };
  
  const availableDates = generateDates();
  const availableTimes = generateTimeSlots();
  
  const handleBooking = () => {
    if (clinic.overview?.website) {
      window.open(clinic.overview.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-lg shadow-sm p-6 sticky top-8">
      <h3 className="text-lg font-semibold text-white mb-4">Pricing Overview</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center py-2 border-b border-white/20">
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2 text-white/80" />
            <span className="text-white/80">Initial Consultation</span>
          </div>
          <span className="font-bold text-lg">£{clinic.pricing?.initialConsultation?.price || 'TBC'}</span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-white/20">
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2 text-white/80" />
            <span className="text-white/80">First Year Cost</span>
          </div>
          <span className="font-bold text-lg">£{clinic.pricing?.estimatedAnnualCost?.average || 'TBC'}</span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-white/20">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-white/80" />
            <span className="text-white/80">Long-term Annual</span>
          </div>
          <span className="font-bold text-lg">£{clinic.pricing?.estimatedAnnualCost?.low || 'TBC'}</span>
        </div>
        
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-white/80" />
            <span className="text-white/80">Monthly Fee</span>
          </div>
          <span className="font-bold text-lg">£{Math.round((clinic.pricing?.estimatedAnnualCost?.average || 0) / 12) || 'TBC'}</span>
        </div>
      </div>
      
      <div className="bg-white/10 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-white mb-3">Availability</h4>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/80 text-sm">Next available:</span>
          <span className="font-medium">{clinic.patientExperience?.nextAvailableAppointment || 'Contact clinic'}</span>
        </div>
        
        <div className="flex items-center justify-between text-xs text-white/70">
          <span>Last updated:</span>
          <span>{clinic.verdict?.lastUpdated || 'Recently'}</span>
        </div>
      </div>
      
      <button
        onClick={handleBooking}
        className="w-full bg-white text-blue-600 py-3 px-4 rounded-md hover:bg-gray-100 transition-all duration-200 font-medium flex items-center justify-center mb-3"
      >
        <Calendar className="h-4 w-4 mr-2" />
        Check Real Availability
      </button>
      
      <a
        href="/quiz"
        className="w-full bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition-all duration-200 font-medium flex items-center justify-center"
      >
        Get Personalised Match
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
      
      <a
        href="/reviews"
        className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-all duration-200 font-medium flex items-center justify-center mt-3"
      >
        Read Clinic Reviews
      </a>
      
      <div className="mt-4 text-xs text-white/70 text-center">
        Pricing information verified and updated regularly
      </div>
    </div>
  );
};

export default BookingWidget;