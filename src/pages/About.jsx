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
  Hi, I'm a <strong className="text-white">MERN Stack Developer</strong> who
  enjoys turning ideas into fast, scalable, and meaningful digital products.

  <br /><br />

  My expertise lies in building full-stack web applications using
  <strong className="text-white"> MongoDB, Express.js, React.js, and Node.js</strong>.
  From designing responsive interfaces and reusable React components to building
  secure REST APIs and managing databases, I enjoy working across the entire
  development lifecycle.

  <br /><br />

  I'm passionate about writing clean, maintainable code and continuously
  learning new technologies to build better solutions for real-world problems.
</p>
        
        <div className=" border border-gray-400 w-40   flex items-center gap-4">
          <Button text="Download Resume" />
        </div>
      </div>
    </section>
  );
};

export default About;
