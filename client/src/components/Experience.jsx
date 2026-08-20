import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { experience } from '../data/portfolio';

const Experience = () => (
  <SectionWrapper id="experience" className="bg-gray-50 dark:bg-gray-900/50">
    <h2 className="section-title">
      Work <span className="gradient-text">Experience</span>
    </h2>
    <p className="section-subtitle">Where I've contributed and what I've built</p>

    <div className="relative max-w-3xl mx-auto">
      {/* Vertical timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-transparent hidden sm:block" />

      <div className="space-y-8">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="sm:pl-16 relative"
          >
            {/* Timeline icon */}
            <div className="absolute left-0 top-5 w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20 hidden sm:flex">
              <Briefcase size={20} className="text-white" />
            </div>

            <div className="card p-6 hover:border-primary-200 dark:hover:border-primary-800 hover:-translate-y-1">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{exp.duration}</span>
                  <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                    <MapPin size={12} />
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-2 text-gray-600 dark:text-gray-300 text-sm">
                    <CheckCircle2 size={15} className="text-primary-500 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Experience;
