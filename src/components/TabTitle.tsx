'use client';
import { useEffect } from 'react';

const AWAY_TITLE = '👋 Come back! I miss you 😢';
const HOME_TITLE = 'Dhruvil Mistry | Full Stack Developer';

export default function TabTitle() {
  useEffect(() => {
    const handleVisibility = () => {
      document.title = document.hidden ? AWAY_TITLE : HOME_TITLE;
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return null;
}
