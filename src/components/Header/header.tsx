"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#FF9359] relative">
      <div className="max-w-[1240px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="">
          <Image
            src="/logoHorizontalBlack.svg"
            alt="GPPUFAL Logo"
            width={200}
            height={29}
            style={{ width: "auto", height: "auto" }}
            className="md:w-[259px] md:h-[38px]"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-[#272727] transition-colors">
            Início
          </a>
          <a href="#" className="text-white hover:text-[#272727] transition-colors">
            Equipe
          </a>
          <a href="#trajetoria" className="text-white hover:text-[#272727] transition-colors">
        Trajetória
          </a>
          <a href="#dados" className="text-white hover:text-[#272727] transition-colors">
           Dados
          </a>
            <a href="#" className="text-white hover:text-[#272727] transition-colors">
           Escolas
          </a>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#FF9359] shadow-lg transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="px-4 py-4 space-y-4">
          <a
            href="#"
            className="block text-white hover:text-[#272727] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </a>
          <a
            href="#"
            className="block text-white hover:text-[#272727] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Equipe
          </a>
          <a
            href="#trajetoria"
            className="block text-white hover:text-[#272727] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
             Trajetória
          </a>
          <a
            href="#dados"
            className="block text-white hover:text-[#272727] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Dados
          </a>
          <a
            href="#"
            className="block text-white hover:text-[#272727] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Escolas
          </a>
        </nav>
      </div>
    </header>
  );
}