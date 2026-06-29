import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Network, Brain, Cloud } from 'lucide-react';
import { aboutCards } from '../constants';
import { getExperienceYears } from '../utiles/experience';

const iconMap: Record<string, React.ReactNode> = {
  "Full-Stack Development": <Code2 size={28} />,
  "UI/UX Engineering": <Palette size={28} />,
  "API Integration & Architecture": <Network size={28} />,
  "AI & Automation Workflows": <Brain size={28} />,
  "Cloud & Deployment": <Cloud size={28} />,
};

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A results-driven Full-Stack Developer with {getExperienceYears()} years of experience at TCS building scalable,
            high-performance applications using React, Angular, Node.js, Python, and modern cloud & AI technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="card p-6 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {iconMap[card.title]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 card p-8"
        >
          <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
            Professional Summary
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            A results-driven Full-Stack Developer with {getExperienceYears()} years of experience at TCS building scalable,
            high-performance applications using React, Angular, Node.js, Python, and modern cloud & AI technologies.
            My core expertise spans JavaScript, TypeScript, React, Angular, Express.js, MongoDB, and Azure — including
            MSAL authentication, RBAC, and API integrations. I have delivered impactful solutions across telecom,
            insurance, FMCG, and government sectors: AI-powered dashboards, agentic RAG workflows, document intelligence
            systems, SCADA-driven analytics for water utilities, and large-scale citizen-facing portals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
