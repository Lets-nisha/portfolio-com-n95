import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="p-8 bgColor text-white">
      <section className="min-h-[80vh] w-full flex flex-col justify-center items-center text-center">

        {/* Greeting */}
        <h1 className="text-5xl md:text-6xl font-bold mb-5 text-blue-500">
          <span className="text-white">Hi, I'm </span>
          Nisha
        </h1>

        {/* Role */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-blue-500">MERN Stack</span>{' '}
          <span className="text-white">Developer</span>
        </h2>

        {/* Introduction */}
        <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-8 mb-10">
          I build modern, responsive and scalable web applications with a
          strong focus on clean code, performance and user experience.
          <br />
          I turn ideas into functional digital experiences using modern
          full-stack technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button text="View My Work"
              onClick={() => navigate('/project')}
            />
          <Button text="Download Resume" 
              download={true}
            />
        </div>

      </section>
    </div>
  );
};

export default Home;
