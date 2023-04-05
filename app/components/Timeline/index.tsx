'use client';

import { motion } from 'framer-motion';

import styles from './styles.module.css';

interface Event {
  title: string;
  text: string;
  present?: boolean;
  year: string;
}

interface Props {
  events: Array<Event>;
}

export function Timeline({ events }: Props) {
  return (
    <div className={styles.timeline}>
      {events.map((event) => (
        <div key={event.title} className={styles.item}>
          <div className={styles.heading}>
            {/* present classname if present true */}
            <span className={`${styles.circle} ${event.present && styles.present}`}>&bull;</span>
            {event.year}
          </div>

          <motion.div whileHover={{ scale: 1.1 }} className={styles.body}>
            <h2>{event.title}</h2>
            <p>{event.text}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
