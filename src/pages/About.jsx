import React from "react";
import Button from "../components/Button";

const About = () => {
  return (
    <section className="min-h-screen bgColor text-white px-6 md:px-16 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-blue-500 font-semibold tracking-widest uppercase mb-3">
            About Me
          </p>

          <h2 className="text-2xl md:text-4xl font-bold">
            Building ideas into{" "}
            <span className="text-blue-500">
              digital experiences.
            </span>
          </h2>
        </div>


        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <p className="text-gray-300 text-lg leading-8 mb-6">
              Hi, I'm{" "}
              <span className="text-white font-semibold">
                Nisha
              </span>
              , a passionate{" "}
              <span className="text-blue-400 font-semibold">
                MERN Stack Developer
              </span>
              {" "}who enjoys building modern and scalable web applications.
            </p>

            <p className="text-gray-400 leading-7 mb-6">
              I love transforming ideas into clean, responsive and
              user-friendly digital products. My development approach focuses
              on writing maintainable code, creating intuitive interfaces and
              building reliable backend systems.
            </p>

            <p className="text-gray-400 leading-7 mb-8">
              From designing React interfaces to developing REST APIs,
              authentication systems and database-driven applications, I enjoy
              working across the entire development stack.
            </p>

            {/* Button */}
            <Button text="Download Resume" download={true} />

          </div>


          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="group border border-gray-800 rounded-2xl p-6 bg-white/[0.03] hover:border-blue-500 hover:-translate-y-1 transition duration-300">

              <div className="text-3xl mb-4">
                💻
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Full Stack
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Building complete web applications from frontend to backend.
              </p>

            </div>


            {/* Card 2 */}
            <div className="group border border-gray-800 rounded-2xl p-6 bg-white/[0.03] hover:border-blue-500 hover:-translate-y-1 transition duration-300">

              <div className="text-3xl mb-4">
                ⚡
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Performance
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Creating fast, responsive and optimized applications.
              </p>

            </div>


            {/* Card 3 */}
            <div className="group border border-gray-800 rounded-2xl p-6 bg-white/[0.03] hover:border-blue-500 hover:-translate-y-1 transition duration-300">

              <div className="text-3xl mb-4">
                🧩
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Clean Code
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Writing reusable, scalable and maintainable code.
              </p>

            </div>


            {/* Card 4 */}
            <div className="group border border-gray-800 rounded-2xl p-6 bg-white/[0.03] hover:border-blue-500 hover:-translate-y-1 transition duration-300">

              <div className="text-3xl mb-4">
                🚀
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Problem Solver
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Turning complex problems into simple digital solutions.
              </p>

            </div>

          </div>

        </div>


        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-gray-800">

          <div>
            <h3 className="text-3xl font-bold text-blue-500">
              MERN
            </h3>
            <p className="text-gray-400 mt-2">
              Stack
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-500">
              React
            </h3>
            <p className="text-gray-400 mt-2">
              Frontend
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-500">
              Node
            </h3>
            <p className="text-gray-400 mt-2">
              Backend
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-500">
              MongoDB
            </h3>
            <p className="text-gray-400 mt-2">
              Database
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
