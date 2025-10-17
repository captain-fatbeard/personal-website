import { Timeline } from '@/components/timeline';
import { UnderlinedTitle } from '@/components/underlined-title';
import { PageTransition } from '@/components/page-transition';

type Event = {
  present?: boolean;
  year: string;
  title: string;
  text: string;
};

export default function Experience() {
  const events: Event[] = [
    {
      present: true,
      year: '2023 - Present',
      title: 'Signifly',
      text: 'Senior Fullstack Developer - Building scalable web applications using TypeScript, Next.js, Nest.js, PHP, and Laravel. Leading architectural decisions and mentoring junior developers.',
    },
    {
      year: '2022 - 2023',
      title: 'NoA Ignite',
      text: 'Senior Developer - Developed enterprise-level solutions with TypeScript, Node.js, and Express. Focused on API design and microservices architecture.',
    },
    {
      year: '2020 - 2022',
      title: 'Ambition',
      text: 'Tech Lead - Led a team building modern web applications using Laravel, React, and JavaScript. Managed cloud infrastructure on GCP with Kubernetes orchestration.',
    },
    {
      year: '2015 - 2020',
      title: 'Netbooster / Artefact',
      text: 'Team Lead - Managed development teams and delivered client projects using PHP, JavaScript, and Vue.js. Implemented agile methodologies and CI/CD pipelines.',
    },
    {
      year: '2013 - 2015',
      title: 'Designheroes',
      text: 'Web Developer - Built custom e-commerce solutions and web applications using PHP frameworks. Specialized in WordPress and WooCommerce development.',
    },
    {
      year: '2012',
      title: 'Reto-Moto / Heroes & Generals',
      text: 'Web Developer - Maintained community forums and web infrastructure. Started as a 2-month internship and continued as a part-time developer.',
    },
    {
      year: '2011',
      title: 'AmPd',
      text: 'Freelance Web Developer - Provided web development, design, and programming services specializing in HTML5/CSS3 and responsive design.',
    },
  ];

  return (
    <PageTransition>
      <main className="mx-auto max-w-7xl px-4 py-8 pb-24 sm:pb-32 sm:px-6 lg:px-8">
      <UnderlinedTitle title="Professional Experience" />

      <Timeline events={events} />
    </main>
    </PageTransition>
  );
}
