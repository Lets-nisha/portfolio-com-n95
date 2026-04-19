import React from 'react'
import ServiceCart from "../components/ServiceCart";
import Web from "../assets/webdev.png";
import Ui from "../assets/ui.png";
import Seo from "../assets/seo.png";
import Back from "../assets/backend.png";
import Maint from "../assets/maintan.png";
import Ecom from "../assets/e-com.png";

const Services = () => {

  const services = [
    {
      image: Web,
      title: "Web Development",
      description: "We build fast, scalable and responsive websites using modern technologies like React.",
    },
    {
      title: "UI/UX Design",
      description: "Clean, modern and user-friendly designs that improve engagement and usability.",
      image: Ui
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and grow your online presence.",
      image: Seo
    },
    {
      title: "Back-End Development",
      description: "Robust and scalable server-side solutions for modern web applications.",
      image: Back
    },
    {
      title: "Maintenance & Support",
      description: "Reliable maintenance services to keep your website secure and updated.",
      image: Maint
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online store setup with payment integration and optimization.",
      image: Ecom
    }
  ];

  return (
    <div className="px-6 py-12 bgColor text-white">

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Our Services
        </h1>
        <p className=" text-lg ">
          We offer a wide range of digital solutions to help businesses grow and succeed online.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl h-full mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <ServiceCart 
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            buttonText="Learn More"
          />
        ))}
      </section>

      

    </div>
  );
}


export default Services;
