import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className }) => {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const childVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        y: {
          type: "spring",
          stiffness: 500, // Increase stiffness for more pronounced bounce
          damping: 20,   // Adjust damping for less oscillation
        },
        opacity: {
          duration: 0.2,
        },
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {text.split(" ").map((word, index) => (
        <motion.span key={index} variants={childVariants} style={{ display: "inline-block" }}>
          {word + (index !== text.split(" ").length - 1 ? "\u00A0" : "")}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;