import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { technologies, additionalSkills } from '../constants';

const SkillBar: React.FC<{ name: string; color: string; proficiency: number; index: number }> = ({
  name,
  color,
  proficiency,
  index,
}) => {
  const [width, setWidth] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(proficiency), 150 * index);
      return () => clearTimeout(timer);
    }
  }, [inView, proficiency, index]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            backgroundColor: color,
            width: `${width}%`,
            boxShadow: `0 0 10px ${color}40`,
          }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${proficiency}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const categoryColors: Record<string, string> = {
    Frontend: "#3B82F6",
    Backend: "#10B981",
    Database: "#22C55E",
    "Cloud & DevOps": "#0EA5E9",
    Tools: "#F59E0B",
  };

  const groupedTechnologies = technologies.reduce((acc, tech) => {
    const category = tech.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(tech);
    return acc;
  }, {} as Record<string, typeof technologies>);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proficient in modern web technologies with hands-on experience building
            enterprise-scale applications.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedTechnologies).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: categoryIndex * 0.15 }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: categoryColors[category] || "#6C63FF" }}
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>

              {skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  color={skill.color}
                  proficiency={skill.proficiency}
                  index={skillIndex}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
