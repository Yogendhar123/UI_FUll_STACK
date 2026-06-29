import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Download, Github, Linkedin } from 'lucide-react';
import { profileInfo, stats, techOrbitItems, floatingBadges } from '../constants';
import profileImg from '../assests/photo.jpeg'
import resume from "../assests/Full_Stack_Developer_Yogendhar_Resume.pdf";
const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 80);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {!isComplete && (
        <span className="inline-block w-[2px] h-[1em] bg-primary-500 animate-pulse ml-1" />
      )}
    </span>
  );
};

const AnimatedCounter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};
const handleDownloadCV = () => {
    console.log("enter");
    const link = document.createElement("a");
    link.href = resume; // imported path
    link.setAttribute("download", "Full_Stack_Developer_Yogendhar_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const ParticleField: React.FC = () => {
  const particles = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 8,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 4,
    })),
  []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 dark:from-primary-400/30 dark:to-accent-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const OrbitingIcons: React.FC = () => {
  const orbitRadius = 140;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Main orbit ring */}
      <motion.div
        className="absolute w-[280px] h-[280px] rounded-full border border-primary-500/20 dark:border-primary-400/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Secondary orbit ring */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full border border-accent-500/10 dark:border-accent-400/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbiting tech items */}
      {techOrbitItems.map((item, index) => {
        const angle = (index * (360 / techOrbitItems.length)) * (Math.PI / 180);
        const x = Math.cos(angle) * orbitRadius;
        const y = Math.sin(angle) * orbitRadius;

        return (
          <motion.div
            key={item.name}
            className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-200 dark:border-dark-border"
            style={{
              x,
              y,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
            }}
            title={item.name}
          >
            <span className="text-xl">{item.icon}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

const ProfileAvatar: React.FC = () => {
  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <OrbitingIcons />

      {/* Avatar with glowing ring */}
      <motion.div
        className="relative w-48 h-48 md:w-60 md:h-60 mx-auto rounded-full overflow-hidden"
        animate={{
          boxShadow: [
            "0 0 30px rgba(108, 99, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.2)",
            "0 0 50px rgba(108, 99, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.4)",
            "0 0 30px rgba(108, 99, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.2)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Gradient background as placeholder for photo */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600" />

        {/* Avatar placeholder with initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl md:text-7xl font-display font-bold text-white">
            <img src={profileImg}/>
          </span>
        </div>

        {/* Gradient overlay ring */}
        <div
          className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 opacity-50 blur-sm -z-10"
        />
      </motion.div>

      {/* Floating badges */}
      {floatingBadges.map((badge, index) => (
        <motion.div
          key={badge.text}
          className={`absolute flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-dark-border ${
            index === 0 ? 'top-0 left-0' : index === 1 ? 'bottom-4 right-0' : 'bottom-20 -left-4'
          }`}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          <span>{badge.icon}</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {badge.text}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark dark:via-dark-surface dark:to-dark" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(108, 99, 255, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(108, 99, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated particles */}
      <ParticleField />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-2"
            >
              <TypewriterText text="Hi, I'm " delay={500} />
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent bg-300% animate-gradient-shift">
                {profileInfo.name}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6"
            >
              {profileInfo.role}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-500 dark:text-gray-500 mb-8 max-w-lg mx-auto md:mx-0"
            >
              {profileInfo.bio}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                href={resume}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </motion.a>

              <div className="flex gap-3">
                <motion.a
                  href={profileInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-dark-card hover:bg-primary-100 dark:hover:bg-primary-900/30 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-primary-600 dark:text-primary-400" size={20} />
                </motion.a>

                <motion.a
                  href={profileInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-dark-card hover:bg-primary-100 dark:hover:bg-primary-900/30 flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="text-primary-600 dark:text-primary-400" size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary-600 dark:text-primary-400">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <ProfileAvatar />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors"
        >
          <span className="text-xs mb-2">Scroll</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};
