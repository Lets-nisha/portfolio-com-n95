import React from "react";

const Button = ({
  text = "Button",
  onClick,
  download = false,
}) => {
  if (download) {
    return (
      <a
        href="/resume.pdf"
        download="Nisha-Turkey-Resume.pdf"
        className="text-gray-400 hover:text-white p-3 transition"
      >
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="text-gray-400 hover:text-white p-3 transition"
    >
      {text}
    </button>
  );
};

export default Button;
