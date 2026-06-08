import type { Metadata } from 'next';

const SITE_URL = 'https://dhruvilmistry.in';

export const metadata: Metadata = {
  title: 'Projects by Dhruvil Mistry | NPM Packages, AI Apps & Full Stack Work',
  description:
    'Explore projects by Dhruvil Mistry — published NPM packages, AI-powered apps, React Native apps, and full-stack MERN solutions built for real-world use.',
  openGraph: {
    title: 'Projects by Dhruvil Mistry | Full Stack Developer',
    description:
      'NPM packages, AI-powered applications, and full-stack projects by Dhruvil Mistry.',
    url: `${SITE_URL}/work`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Projects by Dhruvil Mistry',
    description:
      'NPM packages, AI-powered applications, and full-stack projects by Dhruvil Mistry.',
  },
};

export default function WorkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
