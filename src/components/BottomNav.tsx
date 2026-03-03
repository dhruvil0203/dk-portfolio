'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsHouseFill, BsBriefcaseFill, BsPersonFill, BsEnvelopeFill } from 'react-icons/bs';

const navItems = [
  { href: '/', label: 'Home', icon: BsHouseFill },
  { href: '/work', label: 'Work', icon: BsBriefcaseFill },
  { href: '/about', label: 'About', icon: BsPersonFill },
  { href: '/contact', label: 'Contact', icon: BsEnvelopeFill },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={`nav-item ${pathname === href ? 'active' : ''}`}
        >
          <Icon />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
