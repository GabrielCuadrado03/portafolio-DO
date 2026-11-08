import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, HardHat } from 'lucide-react';
import { modalProjects } from '../data';

const ProjectsModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#EBE2D5] dark:bg-brand-primary w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden pointer-events-auto relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 dark:bg-black/20 dark:hover:bg-black/50 text-gray-600 dark:text-white rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">

                {/* Consultoria Section */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide">
                      CONSULTORIA
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {modalProjects.consultoria.map((project, index) => (
                      <div key={index}>
                        <h4 className="font-bold text-gray-900 dark:text-gray-100 uppercase mb-1">
                          {project.title}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          {project.entity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Construccion Section */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <HardHat className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide">
                      CONSTRUCCIÓN
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {modalProjects.construccion.map((project, index) => (
                      <div key={index}>
                        <h4 className="font-bold text-gray-900 dark:text-gray-100 uppercase mb-1">
                          {project.title}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          {project.entity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-8 mt-8 border-t border-gray-100 dark:border-white/5">
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-dark-card text-white font-bold rounded-full hover:bg-dark-card/90 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectsModal;
