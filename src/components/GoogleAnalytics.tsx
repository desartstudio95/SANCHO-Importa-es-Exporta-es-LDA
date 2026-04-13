import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics: React.FC = () => {
  const location = useLocation();
  const gaId = import.meta.env.VITE_GA_ID;

  useEffect(() => {
    if (!gaId) return;

    // Load script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', gaId);

    return () => {
      // Cleanup if needed, though usually not necessary for GA
    };
  }, [gaId]);

  useEffect(() => {
    if (!gaId || !window.gtag) return;
    
    window.gtag('config', gaId, {
      page_path: location.pathname + location.search,
    });
  }, [location, gaId]);

  return null;
};

// Add gtag to window type
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default GoogleAnalytics;
