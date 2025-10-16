'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const items: { name: string; ref: string; icon: string }[] = [
    { name: 'Home', ref: '/', icon: '⌂' },
    { name: 'About', ref: '/resume', icon: '◉' },
    { name: 'Experience', ref: '/experince', icon: '⚡' },
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
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side Menu */}
      <motion.nav
        initial={false}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed left-0 top-0 z-50 h-screen w-[280px] border-r border-slate-700/50 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
      >
        {/* Header */}
        <div className="border-b border-slate-700/50 p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-2xl font-bold text-white shadow-lg shadow-blue-500/50">
              JL
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">Jacob Larsen</h2>
              <p className="text-xs text-slate-400">Fullstack Developer</p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col gap-2 p-4">
          {items.map((item, index) => {
            const isActive = pathname === item.ref;
            return (
              <motion.div
                key={item.ref}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.ref}
                  onClick={() => setIsOpen(false)}
                  className={`group relative flex items-center gap-4 overflow-hidden rounded-xl px-4 py-3.5 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 shadow-lg shadow-blue-500/20'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-blue-400'
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-gradient-to-b from-blue-400 to-purple-400"
                      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    />
                  )}

                  {/* Icon */}
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span className="font-semibold">{item.name}</span>

                  {/* Hover effect */}
                  <div
                    className={`absolute right-0 top-1/2 h-8 w-8 -translate-y-1/2 translate-x-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-30`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-700/50 p-4">
          <div className="flex items-center justify-center gap-3">
            <a
              href="mailto:jacoblarsen86@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
            >
              ✉
            </a>
            <a
              href="https://www.linkedin.com/in/larsenjacob/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
            >
              in
            </a>
            <a
              href="https://github.com/captain-fatbeard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
            >
              gh
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/60"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center gap-1.5"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
            className="h-0.5 w-6 rounded-full bg-white"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="h-0.5 w-6 rounded-full bg-white"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
            className="h-0.5 w-6 rounded-full bg-white"
          />
        </motion.div>
      </motion.button>
    </>
  );
}
