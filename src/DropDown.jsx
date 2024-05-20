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
        className="mr-10 border rounded-lg border-gray-400"
      >
        <i className="fa-solid fa-bars p-2" style={{ color: "#9ca3ae" }}></i>
      </button>
      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 w-screen bg-slate-700 rounded-b-lg mt-2 px-5">
          {/* Opciones del menú */}
          <a
            href="#"
            className="block py-2 text-white"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 text-white"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 text-white"
            onClick={closeMenu}
          >
            Services
          </a>
          <a
            href="#"
            className="block py-2 text-white"
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
