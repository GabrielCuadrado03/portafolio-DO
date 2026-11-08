import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import { Skills, Projects, Footer } from './components/Sections';
import Contact from './components/Contact';
import { SiWhatsapp } from 'react-icons/si';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiff: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 selection:bg-primary/30">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-secondary z-[60] origin-left" style={{ scaleX }} />
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* <Blog /> */}
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/593992989953"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      >
        <SiWhatsapp className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-sm group-hover:pl-2">
          ¿Conversamos?
        </span>
      </a>

      <Footer />
    </div>
  );
}

export default App;
