import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ReactConfetti from "react-confetti";
import { useNavigate } from "react-router-dom";

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

const Poem4 = () => {
  const navigate = useNavigate();
  const lines = [
    "In lafzon ko padhlena dil se",
    "",
    "lene do waqt khud ko samajhne",
    "",
    "Jab dil kahe haan, na koi ho andesha",
    "",
    "Mujhe message kar dena, intezaar rahega hamesha.",
  ];

  const totalAnimationTime =
    lines.reduce((acc, line) => acc + line.length * 0.05, 0) + lines.length * 2;

  useEffect(() => {
    // Set a timeout for the total animation time plus 5 seconds
    const timer = setTimeout(() => {
      navigate("/page2"); // Replace '/page2' with the actual path to your next page
    }, totalAnimationTime * 1000 + 5000);

    // Clear the timer on component unmount
  }, [navigate, totalAnimationTime]);

  return (
    <div>
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
              className={
                index === lines.length - 1
                  ? "mb-0 text-[#203368] font-sans font-semibold"
                  : "mb-4 text-[#203368] font-sans font-semibold"
              }
            >
              {line.split("").map((char, charIndex) => (
                <motion.span key={charIndex} variants={characterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.div>
        <div className="text-right font-bold italic text-gray-600 font-sans">
          Md Shadik
        </div>
      </div>
    </div>
  );
};

export default Poem4;
