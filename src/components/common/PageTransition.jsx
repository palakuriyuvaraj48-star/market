import { motion } from "framer-motion";

export const PageTransition = ({ children }) => (
  <motion.main
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -14 }}
    transition={{ duration: 0.22 }}
  >
    {children}
  </motion.main>
);
