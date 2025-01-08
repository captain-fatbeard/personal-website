'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './styles.module.css';

export function Contact() {
  return (
    <div className={styles.container}>
      <p>
        If you would like to get in touch with me, you can reach me via email at. You can also find
        more about my professional background and projects on my LinkedIn and GitHub.
      </p>
      <div className={styles.icons}>
        <motion.a
          whileHover={{ scale: 1.3 }}
          target="_blank"
          href="mailto:jacoblarsen86@gmail.com"
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
    </div>
  );
}
