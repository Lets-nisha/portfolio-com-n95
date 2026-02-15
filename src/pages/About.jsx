import Card from "../components/Card";
import React from 'react'

 const About = () =>{
  return (
    <div className="px-6 py-12">

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          About Our Company
        </h1>
        <p className="text-gray-600 text-lg">
          We are a passionate team of developers and designers dedicated 
          to building modern, scalable, and user-friendly digital solutions.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-blue-50 p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Our Mission
          </h2>
          <p className="text-gray-700">
            To empower businesses with innovative web solutions that drive 
            growth and create meaningful digital experiences.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To become a globally recognized digital agency known for 
            creativity, technology excellence, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
        <div>
          <h3 className="text-3xl font-bold text-blue-600">50+</h3>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">30+</h3>
          <p className="text-gray-600">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">10+</h3>
          <p className="text-gray-600">Team Members</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">5+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            image="https://via.placeholder.com/400"
            title="John Doe"
            description="Frontend Developer with expertise in React and UI design."
          />

          <Card
            image="https://via.placeholder.com/400"
            title="Jane Smith"
            description="Backend Engineer specializing in scalable APIs."
          />

          <Card
            image="https://via.placeholder.com/400"
            title="David Lee"
            description="UI/UX Designer focused on clean and modern interfaces."
          />
        </div>
      </section>

    </div>
  );
}


export default About
