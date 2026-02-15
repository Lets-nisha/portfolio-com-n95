import React from 'react'
import Card from "../components/Card";

const Services = () => {

  const services = [
    {
      title: "Web Development",
      description: "We build fast, scalable and responsive websites using modern technologies like React.",
      image: "https://via.placeholder.com/600"
    },
    {
      title: "UI/UX Design",
      description: "Clean, modern and user-friendly designs that improve engagement and usability.",
      image: "https://via.placeholder.com/600"
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and grow your online presence.",
      image: "https://via.placeholder.com/600"
    },
    {
      title: "App Development",
      description: "Cross-platform mobile applications with smooth performance.",
      image: "https://via.placeholder.com/600"
    },
    {
      title: "Maintenance & Support",
      description: "Reliable maintenance services to keep your website secure and updated.",
      image: "https://via.placeholder.com/600"
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online store setup with payment integration and optimization.",
      image: "https://via.placeholder.com/600"
    }
  ];

  return (
    <div className="px-6 py-12">

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Our Services
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We offer a wide range of digital solutions to help businesses grow and succeed online.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <Card
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            buttonText="Learn More"
          />
        ))}
      </section>

      {/* Call To Action */}
      <section className="bg-blue-600 text-white text-center py-12 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6">
          Let’s build something amazing together.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
}


export default Services;
