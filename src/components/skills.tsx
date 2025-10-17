'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Database';
  proficiency: number; // 1-5
}

const skills: Skill[] = [
  // Frontend
  { name: 'TypeScript', category: 'Frontend', proficiency: 5 },
  { name: 'React', category: 'Frontend', proficiency: 5 },
  { name: 'Next.js', category: 'Frontend', proficiency: 4 },
  { name: 'Vue.js', category: 'Frontend', proficiency: 3 },
  { name: 'JavaScript', category: 'Frontend', proficiency: 5 },
  { name: 'HTML/CSS', category: 'Frontend', proficiency: 5 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 3 },

  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 5 },
  { name: 'Nest.js', category: 'Backend', proficiency: 4 },
  { name: 'Express', category: 'Backend', proficiency: 5 },
  { name: 'PHP', category: 'Backend', proficiency: 5 },
  { name: 'Laravel', category: 'Backend', proficiency: 5 },

  // DevOps
  { name: 'Docker', category: 'DevOps', proficiency: 5 },
  { name: 'Kubernetes', category: 'DevOps', proficiency: 4 },
  { name: 'GCP', category: 'DevOps', proficiency: 3 },
  { name: 'CI/CD', category: 'DevOps', proficiency: 4 },

  // Database
  { name: 'PostgreSQL', category: 'Database', proficiency: 5 },
  { name: 'MySQL', category: 'Database', proficiency: 5 },
  { name: 'MongoDB', category: 'Database', proficiency: 4 },
  { name: 'Redis', category: 'Database', proficiency: 4 },
];

const categoryColors = {
  Frontend: 'from-blue-500 to-cyan-500',
  Backend: 'from-purple-500 to-pink-500',
  DevOps: 'from-orange-500 to-red-500',
  Database: 'from-green-500 to-emerald-500',
};

export function Skills() {
  const categories = ['Frontend', 'Backend', 'DevOps', 'Database'] as const;

  return (
    <div className="space-y-8 sm:space-y-12">
      {categories.map((category, categoryIndex) => {
        const categorySkills = skills.filter((skill) => skill.category === category);

        return (
          <div key={category}>
            <h3 className={`mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {categorySkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 sm:p-5 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex flex-col">
                    <span className="mb-2 sm:mb-3 text-sm sm:text-base font-semibold text-slate-200">
                      {skill.name}
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-all ${
                            i < skill.proficiency
                              ? `bg-gradient-to-r ${categoryColors[category]}`
                              : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 bg-gradient-to-br ${categoryColors[category]}`} />
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
