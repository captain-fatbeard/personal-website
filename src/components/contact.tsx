'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Contact() {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 sm:p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
      <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl text-blue-400">Get In Touch</h3>
      <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-center text-base sm:text-lg">
        I&apos;m always interested in hearing about new opportunities and collaborations. Feel free
        to reach out via email or connect with me on LinkedIn and GitHub.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <motion.a
          whileHover={{ scale: 1.1 }}
          target="_blank"
          href="mailto:jacoblarsen86@gmail.com"
          rel="noopener noreferrer"
          aria-label="Email me"
          className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-500/20 bg-blue-500/10 transition-all hover:border-blue-500/50 hover:bg-blue-500/20"
        >
          <Image alt="email" src="/icon-envelope.svg" width="30" height="30" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          target="_blank"
          href="https://www.linkedin.com/in/larsenjacob/"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-500/20 bg-blue-500/10 transition-all hover:border-blue-500/50 hover:bg-blue-500/20"
        >
          <Image alt="linkedin" src="/icon-linkedin.svg" width="30" height="30" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          target="_blank"
          href="https://github.com/captain-fatbeard"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-500/20 bg-blue-500/10 transition-all hover:border-blue-500/50 hover:bg-blue-500/20"
        >
          <Image alt="github" src="/icon-github.svg" width="30" height="30" />
        </motion.a>
      </div>
    </div>
  );
}
