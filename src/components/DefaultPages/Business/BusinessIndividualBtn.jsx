import { motion } from 'framer-motion';

const BuinessIndividualBtn = ({ children, active, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`focus:outline-none px-4 py-2 mx-2 rounded-lg ${active ? 'bg-purple-700' : 'bg-purple-300'
        } text-white transition-colors duration-300`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};