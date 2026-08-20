import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Download } from 'lucide-react';
import { personal } from '../data/portfolio';

// Simple animated background blobs
const Blob = ({ className }) => (
  <div
    className={`absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float ${className}`}
  />
);

const socialLinks = [
  { href: personal.linkedin,  icon: Linkedin,    label: 'LinkedIn'  },
  { href: personal.github,    icon: Github,      label: 'GitHub'    },
  { href: `mailto:${personal.email}`, icon: Mail, label: 'Email'   },
  {
    href: personal.leetcode,
    label: 'LeetCode',
    // Custom LeetCode SVG icon
    icon: ({ size = 20, ...props }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
  >
    {/* Background blobs */}
    <Blob className="w-96 h-96 bg-primary-400 top-10 -left-20" />
    <Blob className="w-80 h-80 bg-accent-400 bottom-20 -right-20" style={{ animationDelay: '2s' }} />
    <Blob className="w-64 h-64 bg-cyan-300 top-1/2 left-1/2 -translate-x-1/2" style={{ animationDelay: '4s' }} />

    {/* Grid overlay */}
    <div
      aria-hidden="true"
      className="absolute inset-0 dark:opacity-5 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px),
                          linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}
    />

    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="section-container relative z-10 text-center py-20"
    >
      {/* Availability badge */}
      <motion.div variants={item} className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium border border-green-200 dark:border-green-800">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Open to opportunities
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
        Hi, I&apos;m{' '}
        <span className="gradient-text">{personal.name}</span>
      </motion.h1>

      {/* Role */}
      <motion.p variants={item} className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
        {personal.role}
      </motion.p>

      {/* Tagline */}
      <motion.p variants={item} className="text-gray-500 dark:text-gray-400 font-mono text-base sm:text-lg mb-4">
        <span className="text-primary-500">&gt;</span> {personal.tagline}
      </motion.p>

      {/* Summary */}
      <motion.p variants={item} className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
        {personal.summary}
      </motion.p>

      {/* CTA buttons */}
      <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-12">
        <Link to="projects" smooth duration={500} offset={-70}>
          <button className="btn-primary">
            View Projects
            <ExternalLink size={16} />
          </button>
        </Link>
        <a href={personal.resumeUrl} download className="btn-secondary">
          <Download size={16} />
          Download Resume
        </a>
        <Link to="contact" smooth duration={500} offset={-70}>
          <button className="btn-secondary">Contact Me</button>
        </Link>
      </motion.div>

      {/* Social icons */}
      <motion.div variants={item} className="flex justify-center gap-4 mb-16">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={label}
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:-translate-y-1"
          >
            <Icon size={20} />
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={item}
        className="flex justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Link to="about" smooth duration={500} offset={-70} className="cursor-pointer">
          <ChevronDown size={28} className="text-gray-400 dark:text-gray-600" />
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
