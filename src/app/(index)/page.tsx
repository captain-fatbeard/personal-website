'use client';

import { Contact } from '@/components/contact';
import { PageTransition } from '@/components/page-transition';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-7xl px-4 py-8 pb-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-16 py-8 sm:py-16 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          Jacob Juul Larsen
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-3 sm:mb-4"
        >
          Senior Fullstack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto mt-3 sm:mt-4 max-w-2xl text-lg sm:text-xl text-slate-300"
        >
          Building scalable web applications with modern technologies
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </main>
    </PageTransition>
  );
}
