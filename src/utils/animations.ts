/**
 * Animation variants for Framer Motion
 * These animations can be applied to components throughout the website
 * for consistent and professional animations
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const popIn = {
  hidden: { 
    opacity: 0,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

/**
 * Scroll reveal animation variants
 * Use these with useInView from framer-motion for scroll animations
 */
export const scrollReveal = {
  hidden: { 
    opacity: 0,
    y: 75
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

/**
 * Button hover animation for Framer Motion
 */
export const buttonHover = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
};
