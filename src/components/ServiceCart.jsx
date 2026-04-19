import React from 'react'

const ServiceCart = ({ image, title, description }) => {
  return (
       <div className="shadow-lg p-6 rounded-lg bgColor  transition-transform duration-300" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
        <img src={image} alt={title} className="w-20 mb-4 right-20px transition-transform duration-300"  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}  />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  )
}

export default ServiceCart
