import React from 'react'  


const Footer = () =>{
  return (
    <footer className="bg-gray-900 text-gray-300  ">
      

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Nisha. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;  