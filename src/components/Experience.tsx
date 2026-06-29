import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { experiences } from '../constants';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building impactful solutions across multiple industries with cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8"
        >
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -4 }}
              className="card p-8 group"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Company Badge */}
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl shadow-lg"
                    style={{ backgroundColor: exp.iconBg }}
                  >
                    TCS
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company_name}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  {/* Points */}
                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="space-y-3"
                  >
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        variants={itemVariants}
                        className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                      >
                        <CheckCircle
                          size={18}
                          className="text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5"
                        />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
