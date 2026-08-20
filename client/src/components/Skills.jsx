import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data/portfolio';

const Skills = () => (
  <SectionWrapper id="skills">
    <h2 className="section-title">
      Technical <span className="gradient-text">Skills</span>
    </h2>
    <p className="section-subtitle">Technologies and tools I work with</p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((group, gi) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: gi * 0.1, duration: 0.5 }}
          className="card p-6"
        >
          {/* Category header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl" role="img" aria-label={group.category}>
              {group.icon}
            </span>
            <h3 className="font-semibold text-gray-900 dark:text-white">{group.category}</h3>
          </div>

          {/* Skill badges */}
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="skill-badge"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
