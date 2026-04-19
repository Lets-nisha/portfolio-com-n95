import React from 'react'
import portfolio from '../assets/portfolio.png'
import spotify from '../assets/spotify.png'
import grocery from '../assets/grocery.png'
import netflix from '../assets/netflix.png'
import ems from '../assets/ems.png'
import Foodie from '../assets/Foodie.png'

 const Project = () =>{

  const projects = [
    {
      title: "Employee management system",
      image: ems ,
      description: "  EMS web built with React.",
      link: "https://employee-management-system-maju.vercel.app/"
    },
    {
      title: "Spotify Clone Website",
      image:  spotify,
      description: "Responsive music website design.",
      link: spotify

    },
    {
      title: "Portfolio",
      image: portfolio,
      description: "Personal branding website with clean UI.",
      link: "https://portfolio-website-n95.netlify.app/"
    },
      {
      title: "Grocery Store",
      image: grocery,
      description: "Grocery Store website with clean UI.",
      link: "https://grocery-website-n95.netlify.app"
    },
      {
      title: "Netflix Clone",
      image: netflix,
      description: "Netflix Clone website with clean UI.",
      link: "https://netflix-clone-green-xi-41.vercel.app/"
    },
    {
      title: "Foodie Delivery Website",
      image: Foodie,
      description: "Foodie Delivery website with clean UI.",
      link: "https://foodie-n95.netlify.app/"
    },
     
  ];

  return (
    <div className="px-6 py-12 bgColor text-white">

      {/* Heading */}
      <section className="text-center  mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Our Project's
        </h1>
        <p className="  text-lg">
          Some of the projects we’ve worked on.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg mb-17"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 
                            flex flex-col justify-center items-center 
                            opacity-0 group-hover:opacity-70 
                            transition duration-500 text-center px-4">

              <h3 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-200 text-sm mb-4">
                {project.description}
              </p>

              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </button>

            </div>
          </div>
        ))}

      </section>

    </div>
  );
}


export default Project 
