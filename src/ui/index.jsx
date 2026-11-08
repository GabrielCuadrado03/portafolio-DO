import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-brand-primary text-white hover:opacity-90 shadow-lg shadow-brand-primary/20',
    secondary: 'bg-brand-secondary text-white hover:opacity-90 shadow-lg shadow-brand-secondary/20',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/5 dark:text-white dark:border-white/20 dark:hover:bg-white/5',
    ghost: 'text-brand-primary hover:bg-brand-primary/5 dark:text-white dark:hover:bg-white/5',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const Input = ({ label, className = '', ...props }) => (
  <div className="flex flex-col gap-2 w-full">
    {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
    <input
      className={`px-4 py-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-brand-secondary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white ${className}`}
      {...props}
    />
  </div>
);

export const Textarea = ({ label, className = '', ...props }) => (
  <div className="flex flex-col gap-2 w-full">
    {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
    <textarea
      className={`px-4 py-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-brand-secondary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white min-h-[120px] ${className}`}
      {...props}
    />
  </div>
);
