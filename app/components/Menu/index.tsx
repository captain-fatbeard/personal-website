'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.css';

export function Menu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const items: { name: string; ref: string }[] = [
    { name: 'Contact', ref: '/' },
    { name: 'Code', ref: '/code' },
    { name: 'Experince', ref: '/experince' },
    { name: 'Devops', ref: '/devops' },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <motion.div
        className={styles.container}
        animate={showMenu ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: '20rem' },
          closed: { opacity: 0, height: '0rem' },
        }}
      >
        {items.map((item) => (
          <Link
            href={item.ref}
            key={item.name}
            passHref
            className={styles.link}
            onClick={toggleMenu}
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
      <button className={styles.toggle} onClick={toggleMenu}>
        <svg width="30" height="30" viewBox="0 0 20 20">
          <motion.path
            animate={showMenu ? 'open' : 'closed'}
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0%, 18%)"
            strokeLinecap="round"
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5', stroke: '#FFF' },
            }}
          ></motion.path>

          <motion.path
            animate={showMenu ? 'open' : 'closed'}
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0%, 18%)"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          ></motion.path>

          <motion.path
            animate={showMenu ? 'open' : 'closed'}
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0%, 18%)"
            strokeLinecap="round"
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346', stroke: '#FFF' },
            }}
          ></motion.path>
        </svg>
      </button>
    </>
  );
}
