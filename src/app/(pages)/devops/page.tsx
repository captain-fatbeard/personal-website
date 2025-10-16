import { UnderlinedTitle } from '@/components/UnderlinedTitle';
import { PageTransition } from '@/components/PageTransition';

export default function Devops() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-7xl px-4 py-8 pb-32 sm:px-6 lg:px-8">
      <UnderlinedTitle title="Devops" />

      <p>Write something about Devops here</p>
    </main>
    </PageTransition>
  );
}
