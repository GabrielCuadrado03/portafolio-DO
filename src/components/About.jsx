import { motion } from 'framer-motion';
import { roles, stats } from '../data';
import image2 from '../assets/image2.jpeg';
const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-bg transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Roles List */}
          <div className="space-y-12">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-8 group"
              >
                <span className="text-5xl md:text-6xl font-bold text-gray-400 dark:text-white/5 transition-colors group-hover:text-primary/20">
                  {role.id}
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{role.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                    {role.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Component */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <img
                src={image2}
                alt="Deysy Ortiz"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </motion.div>
            {/* Shapes */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 -z-0" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary rounded-full blur-3xl opacity-20 -z-0" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white">Un poco más acerca de mí</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Soy una mujer amazónica, madre y profesional proactiva, organizada y responsable con buenas relaciones interpersonales. Convencida que el trabajo en equipo, la eficiencia, disciplina,
            responsabilidad y honestidad son
            valores fundamentales para lograr
            nuestras metas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-gray-100 dark:border-white/5 pt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-brand-primary-olive mb-2">{stat.value}</div>
              <div className="text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
