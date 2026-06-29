import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Folder } from 'lucide-react';
import { enterpriseProjects, personalProjects, tagColorMap } from '../constants';

interface ProjectCardProps {
  project: typeof enterpriseProjects[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="card p-6 group h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center">
          <Folder size={24} />
        </div>
        <motion.a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full bg-gray-100 dark:bg-dark-surface hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="View project"
        >
          <ExternalLink size={18} />
        </motion.a>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {project.name}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => {
          const colorScheme = tagColorMap[tag.color as keyof typeof tagColorMap] || tagColorMap.blue;
          return (
            <span
              key={`${tag.name}-${tag.color}`}
              className={`px-3 py-1 rounded-full text-xs font-medium ${colorScheme.bg} ${colorScheme.text} ${colorScheme.darkBg} ${colorScheme.darkText}`}
            >
              {tag.name}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'enterprise' | 'personal'>('enterprise');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const tabs = [
    { id: 'enterprise' as const, label: 'Enterprise Projects', count: enterpriseProjects.length },
    { id: 'personal' as const, label: 'Personal Projects', count: personalProjects.length },
  ];

  const currentProjects = activeTab === 'enterprise' ? enterpriseProjects : personalProjects;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of enterprise deployments and personal projects showcasing
            full-stack development, AI integrations, and modern UI engineering.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-6 py-3 rounded-full font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-surface'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">
                {tab.label}
                <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                  {tab.count}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
