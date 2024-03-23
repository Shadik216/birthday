import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { motion } from 'framer-motion';
import Poem3 from './Poem3';

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

const Poem1 = () => {
  const [isCompleted, setIsCompleted] = useState(false); // Define the isCompleted state
  const lines = [
    'Tumhare bina meri zindagi toh kat rahi hai',
    '',
    'Lekin Mujhe kaatnaa nahi jeena hai',
    '',
    'aur ye tumhare bina kaha mumkin',
    '',
    'Kya tum us zindagi ka hissa banna chahogi',
    '',
    'Kya tum pyaar bhare us safar me chalna chahogi',
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
        <Poem3 />
      )}
    </>
  );
};

export default Poem1;