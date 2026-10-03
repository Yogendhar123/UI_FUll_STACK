import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutGrid,
  X,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Award,
  Mail,
} from 'lucide-react';
import { navLinks } from '../constants';

const HEADER_OFFSET = 72;
const RADIUS = 130; // distance from the button to each item (px)
const ITEM = 48; // item circle size (px)
const BUTTON = 56; // main button size (px)

const navMeta: Record<string, { icon: React.ElementType; label: string }> = {
  about: { icon: User, label: 'About' },
  experience: { icon: Briefcase, label: 'Work' },
  skills: { icon: Code2, label: 'Skills' },
  projects: { icon: FolderGit2, label: 'Projects' },
  certifications: { icon: Award, label: 'Certs' },
  contact: { icon: Mail, label: 'Contact' },
};

export const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  /* ---------- scroll spy ---------- */
  useEffect(() => {
    const onScroll = () => {
      let current = '';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= HEADER_OFFSET + 40) {
          current = link.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---------- lock page scroll while open ---------- */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  /* ---------- Escape / resize to desktop closes ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const goTo = useCallback((id: string) => {
    setOpen(false);
    // wait for the scroll lock to release, otherwise mobile browsers ignore it
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 250);
  }, []);

  const count = navLinks.length;
  const items = navLinks.map((link, i) => {
    // spread evenly across the top half: 180° (left) → 0° (right)
    const angle = Math.PI - (i * Math.PI) / (count - 1);
    return {
      ...link,
      x: Math.cos(angle) * RADIUS,
      y: -Math.sin(angle) * RADIUS,
    };
  });

  return (
    <div className="md:hidden">
      {/* Dim backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Bottom dock */}
      <div
        className="fixed bottom-0 inset-x-0 z-[60] h-12 bg-white/85 dark:bg-dark/85 backdrop-blur-xl border-t border-gray-200 dark:border-dark-border"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)', boxSizing: 'content-box' }}
        aria-hidden="true"
      />

      {/* Anchor point = centre of the main button, sitting on the dock's top edge */}
      <div
        className="fixed left-1/2 z-[70] w-0 h-0"
        style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 48px)' }}
      >
        {/* Half-circle track */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="arc"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.25 }}
              style={{
                width: (RADIUS + 34) * 2,
                height: RADIUS + 34,
                left: -(RADIUS + 34),
                bottom: 0,
                transformOrigin: 'bottom center',
              }}
              className="absolute rounded-t-full border border-b-0 border-primary-400/40 bg-gradient-to-t from-primary-500/20 via-primary-500/5 to-transparent"
            />
          )}
        </AnimatePresence>

        {/* Menu items */}
        <AnimatePresence>
          {open &&
            items.map((item, i) => {
              const meta = navMeta[item.id];
              const Icon = meta?.icon ?? User;
              const isActive = active === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  aria-label={item.title}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{ x: item.x, y: item.y, scale: 1, opacity: 1 }}
                  exit={{ x: 0, y: 0, scale: 0, opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22, delay: i * 0.04 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  style={{ left: -ITEM / 2, top: -ITEM / 2, width: ITEM, height: ITEM }}
                  className="absolute flex flex-col items-center"
                >
                  <span
                    className={`flex items-center justify-center w-full h-full rounded-full border transition-colors ${
                      isActive
                        ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white border-transparent shadow-lg shadow-primary-500/40'
                        : 'bg-white dark:bg-dark-card text-primary-600 dark:text-primary-400 border-gray-200 dark:border-dark-border shadow-md'
                    }`}
                  >
                    <Icon size={20} />
                  </span>
                  <span
                    className={`mt-1 text-[11px] font-medium leading-none whitespace-nowrap drop-shadow ${
                      isActive ? 'text-primary-300' : 'text-white'
                    }`}
                  >
                    {meta?.label ?? item.title}
                  </span>
                </motion.button>
              );
            })}
        </AnimatePresence>

        {/* Main toggle button */}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          whileTap={{ scale: 0.92 }}
          style={{ left: -BUTTON / 2, top: -BUTTON / 2, width: BUTTON, height: BUTTON }}
          className={`absolute flex items-center justify-center rounded-full border-2 ring-4 ring-white dark:ring-dark text-primary-600 dark:text-primary-400 bg-white dark:bg-dark-card transition-shadow ${
            open
              ? 'border-primary-400 shadow-[0_0_24px_rgba(108,99,255,0.55)]'
              : 'border-primary-500/60 shadow-lg shadow-primary-500/20'
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              {open ? <X size={24} /> : <LayoutGrid size={24} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};
