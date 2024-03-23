import React, { useEffect } from 'react';
import AnimatedText from './components/AnimatedText';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('./page1');
    }, 5000);
  
    return () => clearTimeout(timer);
  }, [navigate]);

  // You can use the useEffect hook to trigger the confetti when the component mounts
  useEffect(() => {
    // Confetti will be triggered when the page loads
    // You can set a state to stop the confetti after a certain time if needed
  }, []);

  return (
    <main className="flex h-screen justify-center items-center bg-[#3a7bc5] p-24">
      <AnimatedText
        text="A many many happy returns of the day, Kabita"
        className="text-[50px] font-sans font-extrabold text-[#9fc4fa] text-center"
      />
      <Confetti />
    </main>
  );
}

export default App;