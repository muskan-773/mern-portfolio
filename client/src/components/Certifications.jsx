import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { certifications, extracurriculars } from '../data/portfolio';

const Certifications = () => (
  <SectionWrapper id="certifications" className="bg-gray-50 dark:bg-gray-900/50">
    <h2 className="section-title">
      Certifications &amp; <span className="gradient-text">Achievements</span>
    </h2>
    <p className="section-subtitle">Courses, virtual internships, and competitions</p>

    {/* Certifications grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {certifications.map((cert, i) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="card p-5 flex gap-4 items-start hover:border-primary-200 dark:hover:border-primary-800 hover:-translate-y-0.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-colors">
            <span className="text-xl" role="img" aria-label="certification icon">
              {cert.icon}
            </span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
              {cert.title}
            </h3>
            <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mt-1">
              {cert.issuer}
            </p>
            {cert.date && (
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{cert.date}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Extracurriculars */}
    <div>
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 justify-center">
        <Award className="text-accent-500" size={22} />
        Extracurricular Activities
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {extracurriculars.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-5 flex items-center gap-4 max-w-xs w-full"
          >
            <span className="text-3xl" role="img" aria-label="activity icon">
              {item.icon}
            </span>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.event}</p>
              <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 font-medium">
                {item.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Certifications;
