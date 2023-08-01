import styles from '@/styles/page.module.css';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headlines}>
        <h1>Jacob Juul Larsen</h1>
        <h2>Fullstack Web developer</h2>
      </div>

      <Contact />
    </main>
  );
}
