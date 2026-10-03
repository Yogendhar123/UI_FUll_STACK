import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../constants';

const HEADER_OFFSET = 72;

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  /* ---------- scroll spy + progress bar ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);

      let current = '';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= HEADER_OFFSET + 40) {
          current = link.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET + 1;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const handleNavClick = (id: string) => scrollToSection(id);

  const goTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-xl shadow-lg'
            : 'bg-white/70 dark:bg-dark/70 backdrop-blur-md md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 md:py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={goTop}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-2xl font-bold gradient-text"
              aria-label="Back to top"
            >
              Y.
            </motion.a>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hidden md:flex items-center gap-8"
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400'
                  }`}
                >
                  {link.title}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Theme toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-surface transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-primary-600" />
                )}
              </button>

            </div>
          </nav>
        </div>

        {/* Scroll progress */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary-500 to-accent-500"
          style={{ width: `${progress}%` }}
        />
      </header>

    </>
  );
};
