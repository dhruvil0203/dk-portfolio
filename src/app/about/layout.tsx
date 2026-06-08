import type { Metadata } from 'next';

const SITE_URL = 'https://dhruvilmistry.in';

export const metadata: Metadata = {
  title: 'About Dhruvil Mistry | Full Stack Developer — Education, Skills & Experience',
  description:
    'Learn about Dhruvil Mistry — a Full Stack Developer from Gujarat, India. Explore his education, MERN stack expertise, work experience, and technical skills.',
  openGraph: {
    title: 'About Dhruvil Mistry | Full Stack Developer',
    description:
      'Education, skills, and work experience of Dhruvil Mistry — MERN Stack Developer & AI enthusiast from Gujarat, India.',
    url: `${SITE_URL}/about`,
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'About Dhruvil Mistry | Full Stack Developer',
    description:
      'Education, skills, and work experience of Dhruvil Mistry — MERN Stack Developer from Gujarat, India.',
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
