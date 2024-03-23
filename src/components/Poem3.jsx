import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Poem4 from './Poem4'; // Import Poem4 component

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 2, // Delay between each line
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // Delay before starting the typewriter effect
      staggerChildren: 0.05, // Typewriter effect speed (faster)
    },
  },
};

const characterVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Poem3 = () => {
  const [isCompleted, setIsCompleted] = useState(false); // Define the isCompleted state
  const lines = [
    "Chandni raat mein ek taara ho tum",
    '',
    "Janamdin hai tumhara, khwaab hamara ho tum",
    '',
    "Dil ki gehraiyon se kar raha hoon izhaar",
    '',
    "Kya Saath chaloge ? dil ko hai tera intezaar",
  ];

  useEffect(() => {
    // Calculate total animation time
    const totalLines = lines.length;
    const delayBetweenLines = 2; // As defined in containerVariants
    const totalAnimationTime = totalLines * delayBetweenLines;

    // Set a timeout to change the state after the animation + 5 seconds
    const timer = setTimeout(() => {
      setIsCompleted(true);
    }, totalAnimationTime * 1000 + 5000); // Convert to milliseconds and add 5 seconds

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, [lines.length]);

  return (
    <>
      {!isCompleted ? (
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {lines.map((line, index) => (
              <motion.div
                key={index}
                variants={lineVariants}
                className={index === lines.length - 1 ? "mb-0 text-[#203368] font-sans font-semibold" : "mb-4 text-[#203368] font-sans font-semibold"}
              >
                {line.split("").map((char, charIndex) => (
                  <motion.span key={charIndex} variants={characterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </motion.div>
          <div className="text-right font-bold italic text-gray-600 font-sans">Md Shadik</div>
        </div>
      ) : (
        <Poem4 /> // Render Poem4 component after the animation and delay
      )}
    </>
  );
};

export default Poem3;