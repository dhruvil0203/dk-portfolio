'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BsGithub, BsLinkedin, BsList, BsX,
  BsHouseFill, BsBriefcaseFill, BsPersonFill, BsEnvelopeFill
} from 'react-icons/bs';
import { profile } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home', icon: BsHouseFill },
  { href: '/work', label: 'Work', icon: BsBriefcaseFill },
  { href: '/about', label: 'About', icon: BsPersonFill },
  { href: '/contact', label: 'Contact', icon: BsEnvelopeFill },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20'
            : 'bg-bg-primary/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-shadow">
                DM
              </div>
              <span className="font-bold text-text-primary text-base hidden sm:block">
                Dhruvil<span className="text-accent">.</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === href
                      ? 'text-accent bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-accent/10 border border-accent/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-all">
                <BsGithub size={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-all">
                <BsLinkedin size={16} />
              </a>
              <a href="/DhruvilMistry_Resume.pdf" download
                className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/30">
                Resume
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <BsX size={18} /> : <BsList size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-bg-secondary overflow-hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      pathname === href
                        ? 'text-accent bg-accent/10 border border-accent/20'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </Link>
                ))}
                <div className="flex gap-2 mt-2 pt-3 border-t border-border">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-bg-card border border-border text-text-secondary text-sm hover:text-text-primary transition-all">
                    <BsGithub size={16} /> GitHub
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-bg-card border border-border text-text-secondary text-sm hover:text-text-primary transition-all">
                    <BsLinkedin size={16} /> LinkedIn
                  </a>
                </div>
                <a href="/DhruvilMistry_Resume.pdf" download
                  className="flex items-center justify-center py-3 mt-1 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-dark transition-all">
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary border-t border-border">
        <div className="flex items-center justify-around py-2 px-2">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`relative flex flex-col items-center gap-1 px-5 py-2 rounded-xl text-xs font-medium transition-all ${
                pathname === href ? 'text-accent' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              {pathname === href && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-b-full bg-accent" />
              )}
              <Icon size={20} />
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
