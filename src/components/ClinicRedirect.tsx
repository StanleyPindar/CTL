import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const ClinicRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Use React Router's Navigate component for proper 301 redirect
  const redirectPath = slug ? `/clinics/${slug}` : '/clinics';
  
  // Log the redirect for analytics
  useEffect(() => {
    console.log(`301 Redirect: /clinic/${slug || ''} → ${redirectPath}`);
    
    // Track redirect for analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'redirect', {
        event_category: 'navigation',
        event_label: `clinic_to_clinics_redirect`,
        old_path: `/clinic/${slug || ''}`,
        new_path: redirectPath
      });
    }
  }, [slug, redirectPath]);

  return <Navigate to={redirectPath} replace />;
};

export default ClinicRedirect;