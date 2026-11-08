import { motion, AnimatePresence } from 'framer-motion';
import { skills, projects, social, solucionesReales, blogPosts } from '../data';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white dark:bg-dark-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-primary/5 text-primary dark:text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-bold mb-4 dark:text-white">{project.title}</h3>
          <p className="text-xl text-primary dark:text-secondary font-medium mb-6">{project.description}</p>

          <div className="flex flex-col md:flex-row gap-8 mb-8 border-t border-gray-100 dark:border-white/5 pt-8">
            {/* Left: Highlights */}
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-4 dark:text-white uppercase tracking-wider text-sm">Descripción Detallada</h4>
              <ul className="space-y-4">
                {project.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 w-2.5 h-2.5 bg-primary dark:bg-secondary rounded-full shrink-0"></span>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: moreImages */}
            {project.moreImages && (
              <div className="md:w-1/3 shrink-0">

                <div className="flex flex-col gap-4">
                  {project.moreImages.map((img, i) => (
                    <img key={i} src={img} alt={`${project.title} detail ${i}`} className="rounded-2xl w-full object-contain bg-gray-50 dark:bg-white/5" />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end pt-6 border-t border-gray-100 dark:border-white/5">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SolutionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white dark:bg-dark-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 relative border border-gray-100 dark:border-brand-secondary/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 dark:bg-black/20 dark:hover:bg-black/50 text-gray-600 dark:text-white rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-3xl font-bold mb-8 dark:text-white text-center">Soluciones Reales</h3>

        <div className="space-y-8">
          {solucionesReales.map((solucion, index) => (
            <div key={index} className="border-l-4 border-brand-secondary pl-6">
              <h4 className="text-xl font-bold mb-4 dark:text-white">{solucion.category}</h4>
              <ul className="space-y-3">
                {solucion.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 bg-brand-secondary rounded-full shrink-0"></span>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end pt-8 mt-4 border-t border-gray-100 dark:border-white/5">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Skills = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Servicios que ofrecemos</h2>
            <p className="text-gray-600 dark:text-gray-400"> ¿Listo para transformar su proyecto en realidad? !CONSULTA GRATUITA DISPONIBLE!</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-light-bg dark:bg-dark-card border border-gray-100 dark:border-brand-secondary/20 shadow-xl dark:shadow-black/30 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <skill.icon className="w-8 h-8" />
              </div>
              <h4 className="font-bold dark:text-white">{skill.name}</h4>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setIsSolutionsOpen(true)}
            className="flex items-center gap-3 px-8 py-4 bg-light-bg hover:bg-light-bg/80 text-gray-900 dark:bg-dark-card dark:hover:bg-dark-card/80 dark:text-white font-bold rounded-full transition-all shadow-lg dark:shadow-black/30 hover:scale-105 border border-gray-200 dark:border-brand-secondary/20"
          >
            Soluciones Reales <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        <SolutionsModal 
          isOpen={isSolutionsOpen} 
          onClose={() => setIsSolutionsOpen(false)} 
        />
      </AnimatePresence>
    </section>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Experiencia Laboral</h2>
          <p className="text-gray-600 dark:text-gray-400">Mi expericiancia laboral en el transcurso del tiempo.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-dark-card shadow-xl dark:shadow-black/30 border border-transparent dark:border-brand-secondary/20"
            >
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/5 text-primary dark:text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-primary dark:text-secondary font-bold hover:underline"
                  >
                    Ver Detalles <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

/*
export const Blog = () => (
  <section id="blog" className="py-24 bg-white dark:bg-dark-bg">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4 dark:text-white">Blog</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col gap-4"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="flex flex-col flex-grow">
              <span className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-brand-primary dark:hover:text-brand-primary transition-colors cursor-pointer">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mt-auto">
                {post.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
*/

export const Footer = () => (
  <footer className="py-12 bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-2xl font-bold dark:text-white">DO<span className="text-secondary">.</span></div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Deysy. Todos los derechos reservados.</p>
      <div className="flex gap-6">
        {social.map(item => (
          <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
            <item.icon className="w-5 h-5" />
            <span className="hidden md:inline">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  </footer>
);
