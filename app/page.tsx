import styles from '@/styles/page.module.css';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headlines}>
        <h1>Jacob Juul Larsen</h1>
        <h2>Web developer</h2>
      </div>

      <p>
        As a Web developer I am very passionate tech and always tries to I am for best practice
        methodologies.
      </p>
      <p>
        I always try to work efficient and with problem-solving in mind and I have years of
        experience creating frontend and backend scalable web application.
      </p>
      <p>
        I have been writing code since I was 12 years old and, and have used varioues languages,
        liberies and frameworks. Today my main focus is JavaScript, typscript and NodeJS.
      </p>
      <p>
        I have a BA degree in E-concept development from Copenhagen school of design and technology.
        But though my education wasn’t focused on writing code, it has always followed me, at part
        time jobs, and since 2013 professionally as a fulltime web developer.
      </p>
      <p>
        I live in Østerbro Copenhagen with my wife and our 2 boys (Otto 4 years and Villy 3 month.)
        I like football, cycling and metal music., preferably enjoyed with a cold beer on the side.
      </p>

      <Contact />
    </main>
  );
}
