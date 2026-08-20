import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="card p-6 flex flex-col group hover:border-primary-200 dark:hover:border-primary-800 hover:-translate-y-1"
  >
    {/* Top row */}
    <div className="flex items-start justify-between gap-2 mb-4">
      <div>
        <span className="text-xs text-primary-500 font-mono font-medium">{project.year}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-0.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
      </div>
      <div className="flex gap-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="p-2 rounded-lg text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <Github size={18} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo`}
            className="p-2 rounded-lg text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>

    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-5 flex-1">
      {project.description}
    </p>

    {/* Tech stack */}
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <span
          key={t}
          className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.article>
);

const Projects = () => (
  <SectionWrapper id="projects">
    <h2 className="section-title">
      Featured <span className="gradient-text">Projects</span>
    </h2>
    <p className="section-subtitle">Things I've built that I'm proud of</p>

    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
