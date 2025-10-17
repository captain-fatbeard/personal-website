import { UnderlinedTitle } from '@/components/underlined-title';
import { PageTransition } from '@/components/page-transition';
import { ProjectCard } from '@/components/project-card';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built for scalability and performance.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      highlights: [
        'Real-time inventory synchronization across multiple warehouses',
        'Advanced filtering and search with Elasticsearch',
        'Integrated payment gateway with multiple currency support',
        'Admin dashboard with analytics and reporting',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'SaaS Project Management Tool',
      description:
        'Collaborative project management platform with team workspaces, task tracking, and real-time updates. Designed for distributed teams.',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Docker'],
      highlights: [
        'Real-time collaboration with WebSocket integration',
        'Kanban boards with drag-and-drop functionality',
        'Team analytics and productivity insights',
        'Integration with Slack and GitHub',
      ],
      liveUrl: '#',
    },
    {
      title: 'Enterprise CMS',
      description:
        'Headless content management system with multi-tenancy support, role-based access control, and RESTful API. Powers multiple client websites.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Redis'],
      highlights: [
        'Multi-tenant architecture with data isolation',
        'RESTful API with comprehensive documentation',
        'Advanced role-based permission system',
        'Content versioning and approval workflows',
      ],
      githubUrl: '#',
    },
    {
      title: 'Mobile-First Social Platform',
      description:
        'A social networking platform optimized for mobile devices with real-time messaging, media sharing, and user engagement features.',
      technologies: ['Next.js', 'Nest.js', 'PostgreSQL', 'AWS S3', 'WebRTC'],
      highlights: [
        'Real-time messaging with read receipts and typing indicators',
        'Image and video processing pipeline',
        'Progressive Web App with offline support',
        'Advanced search with full-text indexing',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <PageTransition>
      <main className="mx-auto max-w-7xl px-4 py-8 pb-24 sm:pb-32 sm:px-6 lg:px-8">
        <UnderlinedTitle title="Projects & Portfolio" />

        <p className="mb-8 sm:mb-12 text-center text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
          A selection of projects I&apos;ve built and contributed to, showcasing my expertise in
          full-stack development, system architecture, and modern web technologies.
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-blue-400">
              Want to see more?
            </h3>
            <p className="mb-6 text-sm sm:text-base text-slate-300">
              Check out my GitHub profile for more open-source contributions and personal projects.
            </p>
            <a
              href="https://github.com/captain-fatbeard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-6 py-3 text-sm sm:text-base font-medium text-blue-400 ring-1 ring-blue-500/20 transition-all hover:bg-blue-500/20 hover:ring-blue-500/40"
            >
              Visit GitHub Profile
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
