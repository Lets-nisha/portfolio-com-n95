import React from 'react'
 
import Button from "../components/Button";

const Home = () =>{

  

  return (
    <div className="p-8 bgColor text-white">
      <section className="text-center py-26 w-full  justify-center items-center">
 
          <h1 className="text-5xl  font-bold mb-6 text-blue-500">
            <span className="text-white">Hi, </span>
             I'm Nisha
          </h1>
          <h1 className="text-5xl  font-bold mb-6 text-blue-500">
          Full Stack <span className="text-white">Developer</span>
            
          </h1>
      
  
      
        {/* <img src="" alt="" /> */}
        <p className=' text-sm text-white mt-15  mb-25'>
          With a strong focus on clean code and best practices, 
          I strive to deliver high-quality web solutions that meet client needs and exceed expectations. <br />
          Whether it's building a new website from scratch or enhancing an existing one,  
          I'm dedicated to creating seamless and visually appealing digital experiences.

        </p>
     
        
      </section>
      
    </div>

  );
}

export default Home;