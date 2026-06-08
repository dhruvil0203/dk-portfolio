import { profile } from '@/lib/data';

const SITE_URL = 'https://dhruvilmistry.in';

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    url: SITE_URL,
    image: `${SITE_URL}/profile-real.jpg`,
    description: profile.bio,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    sameAs: [profile.github, profile.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nadiad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Sardar Vallabhbhai Patel Institute of Technology',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Dharamsingh Desai University',
      },
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'TypeScript',
      'JavaScript',
      'Express.js',
      'REST API',
      'AI Integration',
      'Full Stack Development',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
