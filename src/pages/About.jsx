import React from 'react';
import Button from '../components/Button'; 

const About = () => {
  return (
    <section className="py-20 px-6 md:px-20 bgColor text-white">
      <div className="max-w-4xl  mx-auto border-l-4 mt-9 mb-10 border-blue-600 pl-8">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          About Me
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Hi, I'm a <strong>MERN Stack Developer . </strong>
          I love turning complex problems into simple, beautiful, and intuitive digital experiences. 
          <br /><br />
          With a strong command over <strong>React.js</strong> and <strong>Tailwind CSS</strong>, I build 
          fast, responsive front-end interfaces, while also ensuring robust back-end logic to deliver 
          a seamless end-to-end performance.
        </p>
        
        <div className=" border border-gray-400 w-40   flex items-center gap-4">
          <Button text="Download Resume" />
        </div>
      </div>
    </section>
  );
};

export default About;