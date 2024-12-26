export const headVariants = (duration?: number) => {
  return {
    variants: {
      hidden: { y: "50%", opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: duration || 1.3,
          ease: "easeInOut",
        },
      },
    },
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    initial: "hidden",
  };
};
export const paraVariants = (duration?: number) => {
  return {
    variants: {
      hidden: { y: "90%", opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: duration || 0.5,
          ease: "easeInOut",
        },
      },
    },
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    initial: "hidden",
  };
};

export const opacityVariants = (duration?: number) => {
  return {
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: duration || 1.3,
          ease: "easeInOut",
        },
      },
    },
    whileInView: "visible",
    initial: "hidden",
    viewport: { once: true, amount: 0.5 },
  };
};

export const horizontalXVariants = (duration?: number) => {
  return {
    variants: {
      hidden: { x: "-50%", opacity: 0 }, // Start from left outside viewport
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: duration || 0.5,
          ease: "easeInOut",
        },
      }, // whileInView to the starting position
    },
    whileInView: "visible",
    initial: "hidden",
    viewport: { once: true, amount: 0.5 },
  };
};
export const horizontalYVariants = (duration?: number) => {
  return {
    variants: {
      hidden: { x: "50%" }, // Start from left outside viewport
      visible: {
        x: 0,

        transition: {
          duration: duration || 0.5,
          ease: "easeInOut",
        },
      }, // whileInView to the starting position
    },
    whileInView: "visible",
    initial: "hidden",
    viewport: { once: true, amount: 0.5 },
  };
};
export const verticalVariants = (duration?: number) => {
  return {
    variants: {
      hidden: { y: "50%", opacity: 0 }, // Start from left outside viewport
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: duration || 0.5,
          ease: "easeOut",
        },
      }, // whileInView to the starting position
    },
    whileInView: "visible",
    initial: "hidden",
    viewport: { once: true, amount: 0.5 },
  };
};

export const rotateVariants = (duration?: number) => {
  return {
    variants: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: {
          duration: duration || 1.3,
          ease: "easeInOut",
        },
      },
    },
    whileInView: "visible",
    initial: "hidden",
    viewport: { once: true, amount: 0.5 },
  };
};

export const polygonVariant = (duration?: number) => {
  return {
    variants: {
      hidden: {
        clipPath: "polygon(0 0, 0 0, 100% 0, 100% 0%)",
        transition: {
          duration: duration || 1.3,
          ease: "easeInOut",
        },
      },
      visible: { clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0%)" },
    },
    whileInView: "visible",
    initial: "hidden",
    viewport: { once: true, amount: 0.5 },
  };
};
