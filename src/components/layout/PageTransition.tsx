import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: 8 },
  enter: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.5 } 
  },
  exit: { 
    opacity: 0, 
    y: -8, 
    transition: { type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.3 } 
  },
};

const PageTransition = ({ children }: PageTransitionProps) => {

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="flex-1 w-full"
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
