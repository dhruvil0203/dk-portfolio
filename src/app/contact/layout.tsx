import type { Metadata } from 'next';

const SITE_URL = 'https://dhruvilmistry.in';

export const metadata: Metadata = {
  title: 'Contact Dhruvil Mistry | Hire a Full Stack Developer in Gujarat, India',
  description:
    'Get in touch with Dhruvil Mistry for freelance projects, full-time roles, or collaboration. Based in Gujarat, India — available for remote and on-site work.',
  openGraph: {
    title: 'Contact Dhruvil Mistry | Full Stack Developer',
    description:
      'Reach out to Dhruvil Mistry for project inquiries, collaborations, or job opportunities.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Dhruvil Mistry | Full Stack Developer',
    description:
      'Reach out to Dhruvil Mistry for project inquiries, collaborations, or job opportunities.',
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
