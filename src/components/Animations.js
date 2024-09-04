import { easeInOut } from 'framer-motion';
import gsap from "gsap";

// Framer Motion Animations
export const slideInFromLeft = (initialX, delay) => {
  return {
    initial: { x: initialX, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };
}

export const slideInFromRight = (initialX, delay) => {
  return {
    initial: { x: initialX, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };
}

export const slideInFromTop = (initialY, delay) => {
  return {
    initial: { y: initialY, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };
}

export const slideInFromBottom = (initialY, delay) => ({
  initial: {
    opacity: 0,
    y: initialY,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      ease: easeInOut,
    }
  }
})

export const imgVariant = (initialX) => ({
  initial: {
    x: initialX,
    opacity: 0,
    scale: 0.8,
    color: 'transparent',
    textShadow: '0px 0px 8px rgba(0,0,0,0.5)',
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    color: '#333',
    textShadow: '0px 0px 0px rgba(0,0,0,0)',
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      ease: easeInOut,
    }
  }
});

export const listAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05*index,
      ease: easeInOut,
    },
  }),
}

// GSAP Animations
// OPEN MENU
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1
    }
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07
    }
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3, node4, node5) => {
  gsap.from([node1, node2, node3, node4, node5], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3
    }
  });
};

// Hover on the link
export const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power1.inOut"
  });
};

// Hover off the link
export const handleHoverExit = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut"
  });
};


