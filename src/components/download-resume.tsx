'use client';

import { motion } from 'framer-motion';
import { DownloadIcon } from '@/components/icons/download-icon';

export function DownloadResume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 sm:mt-12 text-center"
    >
      <motion.a
        href="/resume.pdf"
        download="Jacob_Juul_Larsen_Resume.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40"
      >
        <DownloadIcon />
        Download Resume (PDF)
      </motion.a>
      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-400">
        Get a printable version of my resume
      </p>
    </motion.div>
  );
}
