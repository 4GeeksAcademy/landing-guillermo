import React, { useState } from "react";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón de activación del menú */}
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center mr-10 rounded focus:outline-none focus:ring-blue-400"
      >
        <i className="fa-solid fa-bars" style={{ color: "#9ca3ae" }}></i>
      </button>
      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-10 right-0 w-40 bg-white border border-gray-200 shadow-lg rounded mt-2">
          {/* Opciones del menú */}
          <a
            href="#"
            className="block px-4 py-2 text-gray-800"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800"
            onClick={closeMenu}
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default DropDown;
