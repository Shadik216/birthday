import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Poem1 from '../components/Poem1';
import Poem2 from '../components/Poem2';
import ReactConfetti from 'react-confetti';

const boxVariants = {
  hidden: {
    scale: 0.5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20
    }
  }
};

const Page1 = () => {
  const [content, setContent] = useState('initial'); // State to track the content

  const handleYesClick = () => {
    setContent('yes'); // Update the content state to 'poem'
  };

  const handleOrcourseClick = () => {
    setContent('ofCourse')
  }

  return (
    <div className="flex h-screen justify-center bg-[#3a7bc5] items-center">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-96"
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      >
        {content === 'initial' && (
          <>
            <div className="mb-4">
              <p className="text-lg text-green-950 font-bold">Wanna read a poem?</p>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className="bg-[#3a597c] text-white px-8 py-2 rounded hover:bg-[#5c7088] transition-colors"
                onClick={handleYesClick}
              >
                Yes
              </button>
              <button
                className="bg-[#1c416b] text-white px-4 py-2 rounded hover:bg-[#2c537f] transition-colors"
                onClick={handleOrcourseClick}
              >
                Of course Yes
              </button>
            </div>
          </>
        )}
        {content === 'ofCourse' && (
          <Poem1 />
        )}
        {content === 'yes' && (
          <Poem2 />
        )}
      </motion.div>
      <ReactConfetti  numberOfPieces={20}/>
    </div>
  );
};

export default Page1;