import React from 'react'

const Button = ({ text = "Download PDF" }) => {
  return (
    /* re.pdf ka path aur download attribute */
    <a href="/resume.pdf" download="resume.pdf">
      <button className=" text-gray-400  hover:text-white p-3 transition">
        {text}
      </button>
    </a>
  )
}

export default Button