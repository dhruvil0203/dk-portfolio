'use client';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { profile } from '@/lib/data';
import { BsEnvelope, BsGithub, BsLinkedin, BsTelephone, BsCheckCircleFill, BsGeoAlt } from 'react-icons/bs';

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const contactInfo = [
  { icon: BsEnvelope, label: 'Email', value: 'dkmistry0203@gmail.com', href: `mailto:${profile.email}` },
  { icon: BsTelephone, label: 'Phone', value: '+91 8511017102', href: `tel:${profile.phone}` },
  { icon: BsGeoAlt, label: 'Location', value: 'Nadiad, Gujarat', href: null },
];

const socialLinks = [
  { icon: BsGithub, label: 'GitHub', href: profile.github },
  { icon: BsLinkedin, label: 'LinkedIn', href: profile.linkedin },
  { icon: BsEnvelope, label: 'Email', href: `mailto:${profile.email}` },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setTimeout(() => { setSending(false); setSent(true); setForm({ name: '', email: '', subject: '', message: '' }); }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div variants={container} initial="hidden" animate="show">

        <motion.div variants={item} className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-text-primary">Let's Connect</h1>
          <p className="text-text-secondary mt-2 max-w-xl">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          <motion.div variants={item} className="lg:col-span-2 space-y-5">

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                href ? (
                  <a key={label} href={href} className="contact-card group">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted">{label}</div>
                        <div className="text-sm font-medium text-text-primary">{value}</div>
                      </div>
                    </div>
                    <span className="text-text-muted text-xs group-hover:text-accent transition-colors">↗</span>
                  </a>
                ) : (
                  <div key={label} className="contact-card">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted">{label}</div>
                        <div className="text-sm font-medium text-text-primary">{value}</div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>

            <div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">Find Me On</div>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 py-4 bg-bg-card border border-border rounded-xl text-text-secondary text-xs font-medium hover:text-accent hover:border-accent transition-all">
                    <Icon size={20} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <a href="/Dhruvil_Mistry_Resume.pdf" download
              className="flex items-center justify-center gap-2 py-4 w-full bg-accent/10 border border-accent/30 text-accent font-semibold rounded-2xl hover:bg-accent hover:text-white transition-all text-sm">
              📄 Download My Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-3">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20 bg-accent/5 border border-accent/20 rounded-3xl"
              >
                <BsCheckCircleFill size={48} className="text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-2">Message Sent!</h3>
                <p className="text-text-secondary text-sm">Opening your email client... I'll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-accent text-sm underline">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-base space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-2">Full Name</label>
                    <input type="text" className="form-input" placeholder="John Doe"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-2">Email Address</label>
                    <input type="email" className="form-input" placeholder="john@example.com"
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-2">Subject</label>
                  <input type="text" className="form-input" placeholder="Project Inquiry"
                    value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-2">Message</label>
                  <textarea className="form-input min-h-[150px] resize-none" placeholder="Tell me about your project..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button type="submit" disabled={sending}
                  className="btn-primary w-full rounded-xl py-4 text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                  {sending ? '⏳ Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}
