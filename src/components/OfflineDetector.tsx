'use client';
import { useEffect } from 'react';

export default function OfflineDetector() {
  useEffect(() => {
    if (!navigator.onLine) {
      window.location.href = '/offline.html';
      return;
    }

    const handleOffline = () => {
      sessionStorage.setItem('preOfflinePath', window.location.pathname);
      window.location.href = '/offline.html';
    };

    window.addEventListener('offline', handleOffline);
    return () => window.removeEventListener('offline', handleOffline);
  }, []);

  return null;
}
