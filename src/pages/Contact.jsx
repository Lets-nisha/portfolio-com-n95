import React from 'react'

 const Contact = () =>{
  return (
    <div className="px-6 py-12">

      {/* Heading */}
      <section className="text-center  mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">
          Have a project in mind? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Side - Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-6">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📧 info@company.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 India</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </section>

    </div>
  );
}


export default Contact
