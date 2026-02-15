import React from 'react'

 const Portfolio = () =>{

  const projects = [
    {
      title: "E-Commerce Website",
      image: "https://imgs.search.brave.com/79lDSTMETnqAQMpHv72WBP_72TCxUMsdUB8GepvfDKs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbGVhbi1lbGVn/YW50LWVjb21tZXJj/ZS1ob21lcGFnZS1i/YWNrZ3JvdW5kXzEx/NzQ0OTctMTM5Mzkx/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA",
      description: "Modern online store built with React."
    },
    {
      title: "Business Landing Page",
      image: "https://imgs.search.brave.com/UjKJ7NAfNQieq6yBJIeo66b8q3hn8jvT4ED4HBAoeyc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92ZW5u/Z2FnZS13b3JkcHJl/c3MuczMuYW1hem9u/YXdzLmNvbS91cGxv/YWRzLzIwMjAvMDgv/QWdlbmN5LUxhbmRp/bmctUGFnZS5wbmc",
      description: "Responsive corporate website design."
    },
    {
      title: "Portfolio Website",
      image: "https://imgs.search.brave.com/IE5_Uyew63qsfnpKZi5p2KhtfFfNA17ufp7j7sDxDuI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGd2Nr/S05qREUvMi8wLzE2/MDB3L2NhbnZhLWJs/YWNrLXdoaXRlLWdy/YXlzY2FsZS1wb3J0/Zm9saW8tcHJlc2Vu/dGF0aW9uLXZ6U2NF/cUFJX19NLmpwZw",
      description: "Personal branding website with clean UI."
    },
     
  ];

  return (
    <div className="px-6 py-12">

      {/* Heading */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Our Portfolio
        </h1>
        <p className="text-gray-600 text-lg">
          Some of the projects we’ve worked on.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg"
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
                View Project
              </button>

            </div>
          </div>
        ))}

      </section>

    </div>
  );
}


export default Portfolio
