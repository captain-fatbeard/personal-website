import { UnderlinedTitle } from '@/components/UnderlinedTitle';
import styles from '@/styles/page.module.css';

export default function About() {
  const calculateAge = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <main className={styles.main}>
      <UnderlinedTitle title="Resume" />

      <p>
        I am a passionate tech enthusiast with a strong focus on web development best practices and
        efficient problem-solving. With years of experience in creating scalable web applications, I
        have worked extensively with various languages, libraries, and frameworks, with JavaScript,
        TypeScript, and PHP being my main areas of expertise.
      </p>

      <p>
        My academic background includes a Bachelor degree in E-Concept Development from Copenhagen
        School of Design and Technology. Though my education wasnt centered on coding, my love for
        programming has been a constant in my life. I started coding at the age of 12 and have been
        professionally working as a full-time web developer since 2013.
      </p>

      <p>
        Throughout my career, I have contributed to frontend and backend application development,
        utilizing modern web technologies to deliver high-quality products. My work involves
        implementing scalable solutions to enhance application performance and user experience. I
        enjoy collaborating with cross-functional teams to achieve successful project outcomes.
      </p>

      <p>
        In my personal life, I reside in Østerbro, Copenhagen, with my wife and our two sons, Otto (
        {calculateAge('2017-05-18')} years old) and Villy ({calculateAge('2021-10-27')} years old).
        During my free time, I enjoy playing football, cycling, and listening to metal music,
        especially when accompanied by a cold beer.
      </p>
    </main>
  );
}
