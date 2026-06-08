'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { BsDownload, BsGithub, BsLinkedin, BsArrowRight, BsStarFill, BsBoxArrowUpRight, BsChevronDown } from 'react-icons/bs';
import { profile, skillCards, featuredProjects, moreProjects, faqs } from '@/lib/data';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="card-base overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left p-5 cursor-pointer"
              aria-expanded={openIndex === i}
              id={`faq-question-${i}`}
            >
              <span className="font-semibold text-text-primary text-sm md:text-base">
                {faq.question}
              </span>
              <BsChevronDown
                size={16}
                className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
            >
              <p className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQPage JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div variants={container} initial="hidden" animate="show">

        <motion.section id="hero" variants={item} className="flex flex-col md:flex-row items-center gap-10 md:gap-16 py-10 md:py-16">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open to Opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary mb-4 leading-tight">
              <span className="text-gradient">Dhruvil Mistry</span><br />
              <span className="text-text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold">Full Stack Developer in Gujarat, India</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              I build responsive, functional web applications — from published NPM packages to AI-powered RAG systems and full-stack web solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link href="/work"
                className="btn-primary rounded-xl px-6 py-3.5 text-sm">
                View My Work <BsArrowRight size={14} />
              </Link>
              <a href="/Dhruvil_Mistry_Resume.pdf" download
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-bg-card border border-border text-text-primary text-sm font-semibold rounded-xl hover:border-accent hover:text-accent transition-all">
                <BsDownload size={14} /> Download CV
              </a>
            </div>

            
          </div>  

          <div className="order-1 md:order-2 flex-shrink-0">
            <div className="relative avatar-glow-ring w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <Image
                src="/profile-real.jpg"
                alt="Dhruvil Mistry — Full Stack Developer from Gujarat, India"
                fill
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
                className="rounded-full object-cover object-top border-4 border-accent/30 shadow-2xl shadow-accent/20"
                priority
              />
            </div>
            <div className="flex justify-center gap-3 mt-5">
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-bg-card border border-border rounded-xl text-text-secondary text-xs hover:text-accent hover:border-accent transition-all">
                <BsGithub size={14} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-bg-card border border-border rounded-xl text-text-secondary text-xs hover:text-accent hover:border-accent transition-all">
                <BsLinkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section id="skills" variants={item}>
          <h2 className="section-heading">Core Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skillCards.map((s) => (
              <div key={s.title} className="card-base card-hover p-5 flex flex-col gap-3">
                <div className="text-3xl">{s.icon}</div>
                <div className="font-semibold text-text-primary text-sm">{s.title}</div>
                <div className="text-xs text-text-secondary leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects — Filogram, SMS-Dispatch & Nudge */}
        <motion.section id="projects" variants={item}>
          <div className="flex items-center justify-between">
            <h2 className="section-heading">Featured Projects</h2>
            <Link href="/work" className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
              All projects <BsArrowRight size={12} />
            </Link>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...featuredProjects, ...moreProjects].map((project) => (
                <div key={project.id} className="card-base card-hover flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl">
                      {project.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.stars > 0 && (
                        <span className="flex items-center gap-1 text-xs text-text-muted">
                          <BsStarFill size={10} className="text-yellow-400" /> {project.stars}
                        </span>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-bg-input border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all">
                        <BsGithub size={13} />
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-bg-input border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all">
                          <BsBoxArrowUpRight size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="font-bold text-text-primary text-base">{project.name}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed flex-1">{project.desc}</p>
                  <ul className="space-y-1.5">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                        <span className="text-accent flex-shrink-0 mt-0.5">→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-tag">+{project.tech.length - 4}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section id="faq" variants={item} className="mt-16">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="text-text-secondary text-sm md:text-base mb-6 max-w-2xl">
            Common questions about my work, availability, and tech stack.
          </p>
          <FaqAccordion />
        </motion.section>

        <motion.section id="cta" variants={item} className="mt-16 text-center py-16 px-8 rounded-3xl bg-gradient-to-br from-accent/10 to-bg-card border border-accent/20">
          <h2 className="text-3xl font-black text-text-primary mb-3">Let's Build Something Together</h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">Have a project in mind? I'd love to hear about it and see if I can help.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5">
            Get In Touch <BsArrowRight />
          </Link>
        </motion.section>

      </motion.div>
    </div>
  );
}
