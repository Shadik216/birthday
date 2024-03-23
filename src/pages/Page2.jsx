import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactConfetti from "react-confetti";
import { NavLink, useNavigate } from "react-router-dom";

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

const Page2 = () => {
  const [additionalLines, setAdditionalLines] = useState([]);
  const navigate = useNavigate();
  const initialLines = [
    "Hey Hey Hey Don't Close the site yet..",
    "",
    "You Know You are amazing, right?",
    "",
    "Well I do feel so..",
    "",
    "Now please smile 😁😁😁",
    "",
    "Euta haseko photo pathau na..  🙏🙏🙏",
  ];

  const newLines = [
    "",
  ];

  const newL2ines = [
    "",
    "Waiting for your beautiful smile...",
    "",
    "Once again Happy Birthday...",
  ];

  // Calculate total animation time for initial lines
  const totalAnimationTime =
    initialLines.reduce((acc, line) => acc + line.length * 0.05, 0) +
    initialLines.length * 2;

  useEffect(() => {
    // Set a timeout for the total animation time of initial lines
    const timer = setTimeout(() => {
      setAdditionalLines(newLines); // Add the new lines after animations are completed
    }, totalAnimationTime * 1000);

    return () => clearTimeout(timer);
  }, [totalAnimationTime]);

  const linesToShow = additionalLines.length > 0 ? [...additionalLines, ...newL2ines] : initialLines;

  return (
    <div className="text-center flex h-screen justify-center items-center bg-[#3a7bc5] p-24">
        <div className="absolute top-5 left-5 text-slate-300 font-bold"><NavLink className='hover:underline cursor-pointer duration-300' to={'/'}>Back to home</NavLink></div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {linesToShow.map((line, index) => (
          <motion.div
            key={index}
            variants={lineVariants}
            className={
              "mb-4 text-[30px] font-sans font-extrabold text-[#9fc4fa] text-center"
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
      <ReactConfetti numberOfPieces={50} />
    </div>
  );
};

export default Page2;