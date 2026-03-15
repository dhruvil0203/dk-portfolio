'use client';
import { useEffect } from 'react';

export default function OfflineDetector() {
  useEffect(() => {
    // If we're already offline when the page loads, redirect immediately
    if (!navigator.onLine) {
      window.location.href = '/offline.html';
      return;
    }

    const handleOffline = () => {
      // Store where the user currently was so we can send them back
      sessionStorage.setItem('preOfflinePath', window.location.pathname);
      window.location.href = '/offline.html';
    };

    window.addEventListener('offline', handleOffline);
    return () => window.removeEventListener('offline', handleOffline);
  }, []);

  return null;
}
