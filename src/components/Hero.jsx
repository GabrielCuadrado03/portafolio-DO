import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '../ui';
import { social } from '../data';
import ProjectsModal from './ProjectsModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('/src/assets/image1.jpeg')] bg-cover bg-[position:80%_center] md:bg-[position:center_15%] bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-transparent dark:from-dark-bg/95 dark:via-dark-bg/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-brand-secondary font-medium tracking-wider mb-4 block">Hola soy Deysy Ortiz</span>
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tighter">
            Deysy Ortiz
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 font-light">
            Ingeniera, consultora y constructora amazónica.
            <br />
            Puyo-Pastaza-Macas-Morona Santiago
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Button
              variant="outline"
              className="group border-white/30 text-white hover:bg-white/10"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:bg-secondary transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </span>
              MIS PROYECTOS
            </Button>
          </div>
        </motion.div>

        {/* Floating Socials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-12 right-6 hidden md:flex items-center gap-6"
        >
          <span className="text-white/50 text-sm font-medium tracking-widest uppercase rotate-180 [writing-mode:vertical-lr]">Sígueme</span>
          <div className="flex flex-col gap-4">
            {social.map((item) => (
              <a key={item.name} href={item.href} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-secondary transition-all">
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-white" />
      </div>

      <ProjectsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
