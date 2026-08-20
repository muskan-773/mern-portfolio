import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { personal, education } from '../data/portfolio';

const About = () => (
  <SectionWrapper id="about" className="bg-gray-50 dark:bg-gray-900/50">
    <h2 className="section-title">
      About <span className="gradient-text">Me</span>
    </h2>
    <p className="section-subtitle">A bit about who I am and where I come from</p>

    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Left — narrative */}
      <div className="space-y-5">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          I&apos;m a Computer Science undergraduate at{' '}
          <span className="font-semibold text-primary-600 dark:text-primary-400">
            Galgotias University
          </span>{' '}
          (B.Tech CSE, 2023–2027) with a CGPA of{' '}
          <span className="font-semibold text-primary-600 dark:text-primary-400">8.59</span>.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          My journey into full-stack development began with curiosity about how the web works. That curiosity
          grew into a passion for building end-to-end products — from clean, responsive UIs with React and Tailwind
          to secure backend APIs with Node.js, Express, and MongoDB.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I enjoy turning complex problems into simple, elegant solutions. Whether it&apos;s architecting a JWT
          authentication flow, integrating REST APIs, or polishing a UI for accessibility — I care deeply about
          the craft.
        </p>

        {/* Contact info */}
        <div className="space-y-2 pt-2">
          {[
            { icon: MapPin, text: personal.location },
            { icon: Mail,   text: personal.email,  href: `mailto:${personal.email}` },
            { icon: Phone,  text: personal.phone,  href: `tel:${personal.phone}` },
          ].map(({ icon: Icon, text, href }) => (
            <div key={text} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Icon size={16} className="text-primary-500 flex-shrink-0" />
              {href ? (
                <a href={href} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right — education timeline */}
      <div>
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap className="text-primary-500" size={22} />
          Education
        </h3>
        <div className="relative space-y-6">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="pl-12 relative"
            >
              {/* Dot */}
              <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary-500 border-2 border-white dark:border-gray-900 shadow" />

              <div className="card p-4">
                <div className="flex flex-wrap justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{edu.degree}</h4>
                  <span className="text-xs text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20 px-2 py-0.5 rounded-full">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{edu.institution}</p>
                {edu.cgpa && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">CGPA: {edu.cgpa}</p>
                )}
                {edu.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{edu.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default About;
