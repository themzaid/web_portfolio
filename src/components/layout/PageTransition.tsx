import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const { pathname } = useLocation();

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
      className="flex-1"
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
