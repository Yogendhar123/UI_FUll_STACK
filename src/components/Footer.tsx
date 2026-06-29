import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin } from 'lucide-react';
import { profileInfo, navLinks } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-border">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              className="inline-block font-display text-2xl font-bold gradient-text mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Y.
            </motion.a>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {profileInfo.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              href={profileInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-dark-surface hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href={profileInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-dark-surface hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-200 dark:bg-dark-border" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-500">
          <p>
            {currentYear} {profileInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
