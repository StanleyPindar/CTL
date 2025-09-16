/**
 * Utility functions for handling clinic availability display
 */

/**
 * Get the appropriate text to display for a clinic's availability
 */
export const getAvailabilityText = (waitTime: string): string => {
  if (!waitTime) return 'Contact clinic';
  
  const waitTimeLower = waitTime.toLowerCase();
  
  if (waitTimeLower.includes('today') || waitTimeLower.includes('24 hour')) {
    return 'Available today!';
  }
  
  if (waitTimeLower.includes('tomorrow')) {
    return 'Available tomorrow';
  }
  
  if (waitTimeLower.includes('day') && !waitTimeLower.includes('week')) {
    const days = parseInt(waitTimeLower.match(/\d+/)?.[0] || '7');
    if (days <= 3) {
      return `${days} day wait`;
    }
    if (days <= 7) {
      return `${days} day wait`;
    }
    return `${days} day wait`;
  }
  
  if (waitTimeLower.includes('week')) {
    const weeks = parseInt(waitTimeLower.match(/\d+/)?.[0] || '2');
    return `${weeks} week wait`;
  }
  
  return waitTime;
};

/**
 * Get the appropriate color class for a clinic's availability badge
 */
export const getAvailabilityColor = (waitTime: string): string => {
  if (!waitTime) return 'bg-gray-100 text-gray-800';
  
  const waitTimeLower = waitTime.toLowerCase();
  
  if (waitTimeLower.includes('today') || waitTimeLower.includes('24 hour') || waitTimeLower.includes('tomorrow')) {
    return 'bg-green-100 text-green-800';
  }
  
  if (waitTimeLower.includes('day') && !waitTimeLower.includes('week')) {
    const days = parseInt(waitTimeLower.match(/\d+/)?.[0] || '7');
    if (days <= 3) {
      return 'bg-green-100 text-green-800';
    }
    if (days <= 7) {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-orange-100 text-orange-800';
  }
  
  if (waitTimeLower.includes('week')) {
    return 'bg-red-100 text-red-800';
  }
  
  return 'bg-gray-100 text-gray-800';
};