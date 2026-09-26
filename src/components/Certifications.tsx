import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import { certifications, credlyProfileUrl } from '../constants';

export const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Certifi<span className="gradient-text">cations</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Credentials that validate my expertise in building with and applying
            modern AI tools.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="card p-6 flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 mb-5">
                <img
                  src={cert.badgeImage}
                  alt={`${cert.title} badge`}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Award size={16} className="text-primary-500" />
                <span className="text-xs font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  {cert.issuer}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {cert.title}
              </h3>

              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <p>
                  Issued {cert.issueDate} &middot; Expires {cert.expiryDate}
                </p>
                <p className="font-mono text-xs text-gray-500 dark:text-gray-500">
                  Credential ID: {cert.credentialId}
                </p>
                <p className="flex items-center justify-center gap-1 text-green-600 dark:text-green-400 font-medium">
                  <CheckCircle2 size={14} />
                  {cert.score}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
                >
                  <ExternalLink size={14} />
                  Verify
                </motion.a>
                <motion.a
                  href={cert.certificateFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
                >
                  <Download size={14} />
                  Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-10"
        >
          <motion.a
            href={credlyProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md hover:shadow-lg transition-shadow"
          >
            <Award size={16} />
            View Full Profile on Credly
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
