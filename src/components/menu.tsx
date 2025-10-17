'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  ContactIcon,
  UserIcon,
  BriefcaseIcon,
  CodeIcon,
  MailIcon,
  LinkedInIcon,
  GithubIcon,
} from '@/components/icons';

export function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const items: { name: string; ref: string; icon: React.ReactNode }[] = [
    { name: 'Contact', ref: '/', icon: <ContactIcon /> },
    { name: 'About', ref: '/resume', icon: <UserIcon /> },
    { name: 'Experience', ref: '/experince', icon: <BriefcaseIcon /> },
    // { name: 'Projects', ref: '/projects', icon: <CodeIcon /> },
  ];

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side Menu */}
      <motion.nav
        initial={false}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 z-50 h-screen w-[280px] border-r border-slate-800/80 bg-slate-900/98 backdrop-blur-xl shadow-2xl"
      >
        {/* Header */}
        <div className="border-b border-slate-800/80 px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 text-base font-semibold text-slate-100 ring-1 ring-slate-700/50">
              JL
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-100">Jacob Larsen</h2>
              <p className="text-sm text-slate-400">Fullstack Developer</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="px-3 py-4">
          {items.map((item, index) => {
            const isActive = pathname === item.ref;
            return (
              <motion.div
                key={item.ref}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <Link
                  href={item.ref}
                  onClick={() => setIsOpen(false)}
                  className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-800 text-slate-50'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                  }`}
                >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-slate-50"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}

                {/* Icon */}
                <span className="transition-transform duration-200 group-hover:scale-105">
                  {item.icon}
                </span>

                {/* Label */}
                <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-800/80 px-6 py-6">
          <div className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-500">
            Connect
          </div>
          <div className="flex items-center gap-2">
            <a
              href="mailto:jacoblarsen86@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 ring-1 ring-slate-700/50 transition-all duration-200 hover:bg-slate-700 hover:text-slate-200"
              aria-label="Email"
            >
              <MailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/larsenjacob/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 ring-1 ring-slate-700/50 transition-all duration-200 hover:bg-slate-700 hover:text-slate-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/captain-fatbeard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 ring-1 ring-slate-700/50 transition-all duration-200 hover:bg-slate-700 hover:text-slate-200"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ x: isOpen ? 280 + 16 : 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-3 top-3 sm:left-4 sm:top-4 z-50 flex h-12 w-12 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-slate-900 text-slate-100 shadow-lg ring-1 ring-slate-800/80 transition-colors duration-200 hover:bg-slate-800 active:bg-slate-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col items-center justify-center gap-1.5">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="h-0.5 w-5 rounded-full bg-slate-100"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="h-0.5 w-5 rounded-full bg-slate-100"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="h-0.5 w-5 rounded-full bg-slate-100"
          />
        </div>
      </motion.button>
    </>
  );
}
