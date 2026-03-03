'use client';
import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { BsShareFill, BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
}

export function PageHeader({ title, showBack = false }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="header-icon-btn" style={{ cursor: showBack ? 'pointer' : 'default', opacity: showBack ? 1 : 0 }}>
        {showBack && <BsArrowLeft size={16} />}
      </div>
      <h1 className="page-header-title">{title}</h1>
      <button className="header-icon-btn" aria-label="Share">
        <BsShareFill size={14} />
      </button>
    </header>
  );
}

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

interface AnimatedPageProps {
  children: ReactNode;
}

export function AnimatedPage({ children }: AnimatedPageProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
