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

      <Contact />
    </main>
    </PageTransition>
  );
}
