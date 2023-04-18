'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './styles.module.css';

export function Contact() {
  return (
    <div className={styles.contact}>
      <motion.a
        whileHover={{ scale: 1.3 }}
        target="_blank"
        href="mailto:jacoblarsen86@live.com"
        rel="noopener noreferrer"
      >
        <Image alt="email me" src="/icon-envelope.svg" width="56" height="40" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.3 }}
        target="_blank"
        href="https://www.linkedin.com/in/larsenjacob/"
        rel="noopener noreferrer"
      >
        <Image alt="linkedin" src="/icon-linkedin.svg" width="43" height="40" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.3 }}
        target="_blank"
        href="https://github.com/captain-fatbeard"
        rel="noopener noreferrer"
      >
        <Image alt="github" src="/icon-github.svg" width="40" height="40" />
      </motion.a>
    </div>
  );
}
