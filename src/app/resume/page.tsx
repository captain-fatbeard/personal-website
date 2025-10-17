import { UnderlinedTitle } from '@/components/UnderlinedTitle';
import { PageTransition } from '@/components/PageTransition';

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
    <PageTransition>
      <main className="mx-auto max-w-7xl px-4 py-8 pb-32 sm:px-6 lg:px-8">
      <UnderlinedTitle title="About Me" />

      <div className="mb-8 rounded-xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
        <h3 className="mb-6 border-b border-blue-500/30 pb-2 text-2xl text-blue-400">
          Professional Background
        </h3>
        <p>
          I am a passionate tech enthusiast with a strong focus on web development best practices
          and efficient problem-solving. With years of experience in creating scalable web
          applications, I have worked extensively with various languages, libraries, and frameworks,
          with JavaScript, TypeScript, and PHP being my main areas of expertise.
        </p>

        <p>
          Throughout my career, I have contributed to both frontend and backend application
          development, utilizing modern web technologies to deliver high-quality products. My work
          involves implementing scalable solutions to enhance application performance and user
          experience. I enjoy collaborating with cross-functional teams to achieve successful
          project outcomes.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
        <h3 className="mb-6 border-b border-blue-500/30 pb-2 text-2xl text-blue-400">
          Education & Journey
        </h3>
        <p>
          My academic background includes a Bachelor&apos;s degree in E-Concept Development from
          Copenhagen School of Design and Technology. Though my education wasn&apos;t centered on
          coding, my love for programming has been a constant in my life. I started coding at the
          age of 12 and have been professionally working as a full-time web developer since 2013.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
        <h3 className="mb-6 border-b border-blue-500/30 pb-2 text-2xl text-blue-400">
          Personal Life
        </h3>
        <p>
          I reside in Østerbro, Copenhagen, with my wife and our two sons, Otto (
          {calculateAge('2017-05-18')} years old) and Villy ({calculateAge('2021-10-27')} years
          old). During my free time, I enjoy playing football, cycling, and listening to metal
          music, especially when accompanied by a cold beer.
        </p>
      </div>
    </main>
    </PageTransition>
  );
}
