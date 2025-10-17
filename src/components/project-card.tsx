'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      {/* Image Section */}
      {project.image && (
        <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-900/50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
        </div>
      )}

      {/* Content Section */}
      <div className="p-5 sm:p-6">
        <h3 className="mb-3 text-xl sm:text-2xl font-bold text-blue-400">
          {project.title}
        </h3>

        <p className="mb-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 text-sm font-semibold text-slate-400">Key Features:</h4>
            <ul className="space-y-1">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start text-xs sm:text-sm text-slate-400">
                  <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-blue-500/10 px-4 py-2 text-center text-sm font-medium text-blue-400 ring-1 ring-blue-500/20 transition-all hover:bg-blue-500/20 hover:ring-blue-500/40"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-slate-700/50 px-4 py-2 text-center text-sm font-medium text-slate-300 ring-1 ring-slate-600/50 transition-all hover:bg-slate-700 hover:ring-slate-600"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
