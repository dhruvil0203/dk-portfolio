'use client';
import { motion, Variants } from 'framer-motion';
import { projects } from '@/lib/data';
import { BsGithub, BsBoxArrowUpRight, BsStarFill } from 'react-icons/bs';

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' as const } },
};

export default function WorkPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div variants={container} initial="hidden" animate="show">

        <motion.div variants={item} className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-text-primary">My Work</h1>
          <p className="text-text-secondary mt-2 max-w-xl">
            A collection of projects — from published NPM packages to full-stack AI applications.
            All built with real users and real problems in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="card-base card-hover flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-13 h-13 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {project.icon}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs text-text-muted bg-bg-input px-2 py-1 rounded-lg border border-border">
                      <BsStarFill size={10} className="text-yellow-400" />
                      {project.stars}
                    </span>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-bg-input border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all"
                    title="View on GitHub">
                    <BsGithub size={14} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-bg-input border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all"
                      title="Live Demo">
                      <BsBoxArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-2">{project.name}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.desc}</p>

              <ul className="space-y-2 mb-5 flex-1">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                    <span className="text-accent flex-shrink-0 mt-0.5">→</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item}
          className="mt-14 text-center py-14 px-6 rounded-3xl bg-bg-card border border-border">
          <div className="text-4xl mb-4">👨‍💻</div>
          <h3 className="text-xl font-bold text-text-primary mb-2">See More on GitHub</h3>
          <p className="text-text-secondary text-sm mb-6 max-w-sm mx-auto">
            These are my pinned highlights. Visit my GitHub for all repos and contributions.
          </p>
          <a href="https://github.com/dhruvil0203" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5">
            <BsGithub size={16} /> Visit GitHub Profile
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
}
