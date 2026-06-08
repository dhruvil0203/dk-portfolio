'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { education, skillCards, skills, experience, profile } from '@/lib/data';
import { BsCalendar, BsBriefcase, BsAwardFill } from 'react-icons/bs';

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-0">

        <motion.div variants={item} className="mb-2">
          <h1 className="text-3xl sm:text-4xl font-black text-text-primary">About Me</h1>
          <p className="text-text-secondary mt-2">A little bit about who I am and what I do.</p>
        </motion.div>

        <motion.section variants={item} className="flex flex-col lg:flex-row gap-10 items-start mt-8">
          <div className="flex-1 space-y-4">
            <h2 className="section-heading">My Story</h2>
            <p className="text-text-secondary text-sm md:text-base leading-loose">{profile.bio}</p>
            <p className="text-text-secondary text-sm md:text-base leading-loose">{profile.bio2}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="badge-blue">📍 {profile.location}</span>
              <span className="badge-blue">🎓 MCA Student</span>
              <span className="badge-blue">💼 1+ Yr Experience</span>
            </div>
          </div>
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="relative avatar-glow-ring-square w-40 h-40 md:w-52 md:h-52">
              <Image
                src="/profile.png"
                alt="Dhruvil Mistry — Full Stack Developer from Gujarat, India"
                fill
                className="rounded-2xl object-cover border-2 border-accent/30"
              />
            </div>
          </div>
        </motion.section>

        <motion.section variants={item}>
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

        <motion.section variants={item}>
          <h2 className="section-heading">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div key={edu.degree} className="card-base card-hover flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {edu.icon}
                </div>
                <div>
                  <div className="font-bold text-text-primary text-sm md:text-base">{edu.degree}</div>
                  <div className="text-accent-light text-xs italic mt-1 mb-3">{edu.school}</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <BsCalendar size={10} /> {edu.period}
                    </span>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item}>
          <h2 className="section-heading">Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.role} className="card-base card-hover mb-4 last:mb-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-xl flex-shrink-0">
                    <BsBriefcase className="text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-text-primary text-base">{exp.role}</span>
                      {exp.current && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
                          ● Current
                        </span>
                      )}
                    </div>
                    <div className="text-accent-light text-sm mt-0.5">
                      {exp.company}
                      {'location' in exp && exp.location && (
                        <span className="text-text-muted"> · {exp.location}</span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="badge-blue self-start sm:self-auto">
                  <BsCalendar size={10} /> {exp.period}
                </span>
              </div>
              <ul className="space-y-2 pl-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-text-secondary leading-relaxed">
                    <span className="text-accent mt-1 flex-shrink-0">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.section>


        <motion.section variants={item}>
          <h2 className="section-heading">Technical Skills</h2>
          <div className="space-y-5">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category}>
                <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-3 h-px bg-accent" />
                  {category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="card-base !mt-10 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
          <h2 className="section-heading">Beyond the Screen</h2>
          <p className="text-text-secondary text-sm md:text-base leading-loose">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source,
            and staying updated with the latest in AI and web development. I believe continuous
            learning is key to being a great developer and building things that actually matter.
          </p>
        </motion.section>

      </motion.div>
    </div>
  );
}
