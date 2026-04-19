import React from 'react'
import portfolio from '../assets/portfolio.png'
import spotify from '../assets/spotify.png'
import grocery from '../assets/grocery.png'
import netflix from '../assets/netflix.png'
import ems from '../assets/ems.png'
import Foodie from '../assets/Foodie.png'

const Project = () => {

  const projects = [
    {
      title: "EMS System",
      image: ems,
      description: "React-based employee management.",
      link: "https://employee-management-system-maju.vercel.app/"
    },
    {
      title: "Spotify Clone",
      image: spotify,
      description: "Responsive music streaming UI.",
      link: "#" 
    },
    {
      title: "Portfolio",
      image: portfolio,
      description: "Clean & professional branding.",
      link: "https://portfolio-website-n95.netlify.app/"
    },
    {
      title: "Grocery Store",
      image: grocery,
      description: "E-commerce platform with cart.",
      link: "https://grocery-website-n95.netlify.app"
    },
    {
      title: "Netflix Clone",
      image: netflix,
      description: "Cinematic movie listing UI.",
      link: "https://netflix-clone-green-xi-41.vercel.app/"
    },
    {
      title: "Foodie App",
      image: Foodie,
      description: "Modern food delivery interface.",
      link: "https://foodie-n95.netlify.app/"
    },
  ];

  return (
    <div className="px-6 py-16 bgColor text-white">

      {/* Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">
          My Projects
        </h1>
        
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#1a1a1a] border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
          >
            {/* Image Container - Height reduced to h-48 */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60"></div>
            </div>

            {/* Content Area - Minimal padding */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs mb-4 line-clamp-1">
                {project.description}
              </p>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full py-2 text-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                View Demo
              </a>
            </div>
          </div>
        ))}

      </section>
    </div>
  );
}

export default Project;
