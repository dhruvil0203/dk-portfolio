'use client';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsEnvelope, BsHeart } from 'react-icons/bs';
import { profile } from '@/lib/data';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border mt-20 mb-16 md:mb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent/30">
                DM
              </div>
              <span className="font-bold text-xl text-text-primary">
                Dhruvil<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Full Stack Developer building responsive, functional applications with the MERN stack and AI integrations.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-bg-card border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all">
                <BsGithub size={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-bg-card border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all">
                <BsLinkedin size={16} />
              </a>
              <a href={`mailto:${profile.email}`}
                className="w-9 h-9 rounded-xl bg-bg-card border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all">
                <BsEnvelope size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-text-secondary text-sm hover:text-accent transition-colors inline-flex items-center gap-2 group">
                    <span className="w-4 h-px bg-border group-hover:bg-accent group-hover:w-6 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-widest">Get In Touch</h3>
            <div className="space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-text-secondary text-sm hover:text-accent transition-colors">
                <BsEnvelope size={14} className="text-accent" />
                {profile.email}
              </a>
              <p className="flex items-center gap-3 text-text-secondary text-sm">
                <span className="text-accent">📍</span>
                {profile.location}
              </p>
              <a href="/Dhruvil_Mistry_Resume.pdf" download
                className="inline-flex items-center gap-2 mt-3 px-4 py-2.5 bg-accent/10 border border-accent/30 text-accent text-sm font-medium rounded-xl hover:bg-accent hover:text-white transition-all">
                Download Resume ↓
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-md flex items-center gap-1.5">
            Built with <BsHeart size={11} className="text-red-400" /> by Dhruvil Mistry
          </p>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            title="AI context file — llms.txt"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border text-text-muted text-xs hover:border-accent hover:text-accent transition-all font-mono"
          >
            🤖 llms.txt
          </a>
        </div>
      </div>
    </footer>
  );
}
