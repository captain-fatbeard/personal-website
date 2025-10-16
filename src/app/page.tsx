import { Contact } from '@/components/Contact';
import { PageTransition } from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-7xl px-4 py-8 pb-32 sm:px-6 lg:px-8">
      <div className="mb-16 py-16 text-center">
        <h1 className="mb-6">Jacob Juul Larsen</h1>
        <h2 className="mb-4">Senior Fullstack Developer</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-300">
          Building scalable web applications with modern technologies
        </p>
      </div>

      <div className="group mb-8 rounded-xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
        <h3 className="mb-6 border-b border-blue-500/30 pb-2 text-2xl text-blue-400">About Me</h3>
        <p>
          I&apos;m a passionate tech enthusiast with over a decade of experience in web development.
          I specialize in creating scalable, high-performance web applications using TypeScript,
          Next.js, React, Node.js, PHP, and Laravel.
        </p>
        <p>
          Currently working as a Senior Fullstack Developer at Signifly, I focus on delivering
          exceptional user experiences while maintaining best practices and clean architecture.
        </p>
      </div>

      <Contact />
    </main>
    </PageTransition>
  );
}
