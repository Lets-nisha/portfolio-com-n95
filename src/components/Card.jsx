import React from 'react'

const Card = ({ title, description }) => {
  return (
       <div className="shadow-lg p-6 rounded-lg bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Card
