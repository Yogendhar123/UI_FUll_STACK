import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Download, Github, Linkedin } from 'lucide-react';
import {
  profileInfo,
  stats,
  techOrbitItems,
  floatingBadges,
} from '../constants';

import profileImg from '../assests/photo.jpeg';
import resume from '../assests/Full_Stack_Developer_Yogendhar_Resume.pdf';

/* =========================================================
   TYPEWRITER TEXT
========================================================= */

const TypewriterText: React.FC<{
  text: string;
  delay?: number;
}> = ({ text, delay = 0 }) => {
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

/* =========================================================
   ANIMATED COUNTER
========================================================= */

const AnimatedCounter: React.FC<{
  value: number;
  suffix: string;
}> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
      {count}
      {suffix}
    </span>
  );
};

/* =========================================================
   DOWNLOAD CV
========================================================= */

const handleDownloadCV = () => {
  console.log('enter');

  const link = document.createElement('a');

  link.href = resume;

  link.setAttribute(
    'download',
    'Full_Stack_Developer_Yogendhar_Resume.pdf'
  );

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

/* =========================================================
   PARTICLE FIELD
========================================================= */

const ParticleField: React.FC = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4 + Math.random() * 8,
        duration: 6 + Math.random() * 6,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="
            absolute
            rounded-full
            bg-gradient-to-br
            from-primary-500/20
            to-accent-500/20
            dark:from-primary-400/30
            dark:to-accent-400/30
          "
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
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

/* =========================================================
   ORBITING TECH ICONS
========================================================= */

const OrbitingIcons: React.FC = () => {
  const orbitRadius = 175;

  return (
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
        z-30
        overflow-visible
      "
    >
      {/* Outer orbit */}
      <motion.div
        className="
          absolute
          w-[350px]
          h-[350px]
          rounded-full
          border
          border-primary-500/20
          dark:border-primary-400/30
        "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner orbit */}
      <motion.div
        className="
          absolute
          w-[290px]
          h-[290px]
          rounded-full
          border
          border-accent-500/15
          dark:border-accent-400/20
        "
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Tech Icons */}
     {techOrbitItems.map((item, index) => {
  const iconAngles = {
    Python: 130,  // bottom
    React: 0,     // right
    Angular: 50,  // bottom
    Node: 180,    // left
  };

  const angle =
    (iconAngles[item.name as keyof typeof iconAngles] * Math.PI) / 180;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  const Icon = item.icon;

  return (
    <motion.div
      key={item.name}
      className="
        absolute
        z-[60]
        w-12
        h-12
        flex
        items-center
        justify-center
        rounded-full
        bg-[#10131d]/90
        backdrop-blur-md
        border
        border-white/10
        pointer-events-auto
      "
      style={{
        x,
        y,
        boxShadow: `
          0 8px 20px rgba(0,0,0,0.45),
          0 0 18px ${item.color}66,
          0 0 35px ${item.color}22,
          inset 0 1px 2px rgba(255,255,255,0.15)
        `,
      }}
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.5,
      }}
      whileHover={{
        scale: 1.25,
        boxShadow: `
          0 12px 30px rgba(0,0,0,0.5),
          0 0 30px ${item.color}99
        `,
      }}
      title={item.name}
    >
      <Icon
        className="text-[30px]"
        style={{
          color: item.color,
          filter: `
            drop-shadow(0 0 5px ${item.color})
            drop-shadow(0 0 10px ${item.color}66)
          `,
        }}
      />
    </motion.div>
  );
})}
    </div>
  );
};

/* =========================================================
   PROFILE AVATAR
========================================================= */

const ProfileAvatar: React.FC = () => {
  return (
    <motion.div
      className="
        relative
        w-64
        h-64
        md:w-80
        md:h-80
        overflow-visible
      "
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}
    >
      {/* =================================================
          ORBITING ICONS
          Always above avatar
      ================================================= */}

      <OrbitingIcons />

      {/* =================================================
          AVATAR
          Lower z-index than orbit icons
      ================================================= */}

      <motion.div
        className="
          relative
          z-10
          w-48
          h-48
          md:w-60
          md:h-60
          mx-auto
          rounded-full
          overflow-hidden
          bg-black
        "
        animate={{
          boxShadow: [
            '0 0 30px rgba(108, 99, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.2)',

            '0 0 50px rgba(108, 99, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.4)',

            '0 0 30px rgba(108, 99, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.2)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* =================================================
            PHOTO BACKGROUND
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-primary-500
            via-accent-500
            to-primary-600
          "
        />

        {/* =================================================
            PROFILE IMAGE
        ================================================= */}

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={profileImg}
            alt={profileInfo.name}
            className="
              w-full
              h-full
              object-cover
              object-center
            "
          />
        </div>

        {/* =================================================
            GRADIENT OVERLAY
        ================================================= */}

        <div
          className="
            absolute
            -inset-1
            rounded-full
            bg-gradient-to-br
            from-primary-500
            via-accent-500
            to-primary-600
            opacity-40
            blur-sm
            -z-10
          "
        />
      </motion.div>

      {/* =================================================
          FLOATING BADGES
      ================================================= */}

      {floatingBadges.map((badge, index) => (
        <motion.div
          key={badge.text}
          className={`
            absolute
            z-40
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-white/90
            dark:bg-dark-card/90
            backdrop-blur-sm
            shadow-lg
            border
            border-gray-200
            dark:border-dark-border

            ${
              index === 0
                ? 'top-0 left-0'
                : index === 1
                ? 'bottom-4 right-0'
                : 'bottom-20 -left-4'
            }
          `}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        >
          <span>{badge.icon}</span>

          <span
            className="
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-300
            "
          >
            {badge.text}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

/* =========================================================
   HERO COMPONENT
========================================================= */

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-gray-50
          via-white
          to-gray-100
          dark:from-dark
          dark:via-dark-surface
          dark:to-dark
        "
      />

      {/* =================================================
          GRID OVERLAY
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          dark:opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(108, 99, 255, 0.3)
              1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(108, 99, 255, 0.3)
              1px,
              transparent 1px
            )
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* =================================================
          PARTICLES
      ================================================= */}

      <ParticleField />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          py-20
          md:py-32
          z-10
        "
      >
        <div
          className="
            grid
            md:grid-cols-2
            gap-12
            items-center
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            {/* Greeting */}

            <motion.p
              variants={itemVariants}
              className="
                text-lg
                text-gray-600
                dark:text-gray-400
                mb-2
              "
            >
              <TypewriterText
                text="Hi, I'm "
                delay={500}
              />
            </motion.p>

            {/* Name */}

            <motion.h1
              variants={itemVariants}
              className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-display
                font-bold
                mb-4
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-primary-500
                  via-accent-500
                  to-primary-500
                  bg-clip-text
                  text-transparent
                  bg-300%
                  animate-gradient-shift
                "
              >
                {profileInfo.name}
              </span>
            </motion.h1>

            {/* Role */}

            <motion.p
              variants={itemVariants}
              className="
                text-lg
                md:text-xl
                text-gray-600
                dark:text-gray-400
                mb-6
              "
            >
              {profileInfo.role}
            </motion.p>

            {/* Bio */}

            <motion.p
              variants={itemVariants}
              className="
                text-base
                text-gray-500
                dark:text-gray-500
                mb-8
                max-w-lg
                mx-auto
                md:mx-0
              "
            >
              {profileInfo.bio}
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              variants={itemVariants}
              className="
                flex
                flex-wrap
                gap-4
                justify-center
                md:justify-start
              "
            >
              {/* Download CV */}

              <motion.a
                href={resume}
                onClick={handleDownloadCV}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  btn-primary
                  flex
                  items-center
                  gap-2
                "
              >
                <Download size={18} />

                Download CV
              </motion.a>

              {/* Social links */}

              <div className="flex gap-3">
                {/* LinkedIn */}

                <motion.a
                  href={profileInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-gray-100
                    dark:bg-dark-card
                    hover:bg-primary-100
                    dark:hover:bg-primary-900/30
                    flex
                    items-center
                    justify-center
                    transition-colors
                  "
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    className="
                      text-primary-600
                      dark:text-primary-400
                    "
                    size={20}
                  />
                </motion.a>

                {/* GitHub */}

                <motion.a
                  href={profileInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-gray-100
                    dark:bg-dark-card
                    hover:bg-primary-100
                    dark:hover:bg-primary-900/30
                    flex
                    items-center
                    justify-center
                    transition-colors
                  "
                  aria-label="GitHub"
                >
                  <Github
                    className="
                      text-primary-600
                      dark:text-primary-400
                    "
                    size={20}
                  />
                </motion.a>
              </div>
            </motion.div>

            {/* =================================================
                STATS
            ================================================= */}

            <motion.div
              variants={itemVariants}
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-6
                mt-12
              "
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    text-center
                    md:text-left
                  "
                >
                  <div
                    className="
                      text-2xl
                      md:text-3xl
                      font-display
                      font-bold
                      text-primary-600
                      dark:text-primary-400
                    "
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>

                  <div
                    className="
                      text-sm
                      text-gray-500
                      dark:text-gray-500
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT: PROFILE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              flex
              justify-center
              relative
              z-20
            "
          >
            <ProfileAvatar />
          </motion.div>
        </div>
      </div>

      {/* =================================================
          SCROLL INDICATOR
      ================================================= */}

      <motion.div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-20
        "
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <a
          href="#about"
          className="
            flex
            flex-col
            items-center
            text-gray-400
            hover:text-primary-500
            transition-colors
          "
        >
          <span className="text-xs mb-2">
            Scroll
          </span>

          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};