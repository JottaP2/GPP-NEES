"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#FF9359] relative z-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src="/LOGOPH.svg"
            alt="GPPUFAL Logo"
            width={50}
            height={32}
          />
        </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-[#272727] transition-colors">
            Início
          </Link>
          <Link href="/Equipe" className="text-white hover:text-[#272727] transition-colors">
            Equipe
          </Link>
          <Link href="/#trajetoria" className="text-white hover:text-[#272727] transition-colors">
            Trajetória
          </Link>
          <Link href="/#desafios" className="text-white hover:text-[#272727] transition-colors">
            Desafios
          </Link>
          <Link href="/#dados" className="text-white hover:text-[#272727] transition-colors">
            Dados
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#FF9359] shadow-lg transition-all duration-300 z-40 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="px-4 py-4 space-y-4">
          <Link
            href="/"
            className="block text-white hover:text-[#272727] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            href="/Equipe"
            className="block text-white hover:text-[#272727] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Equipe
          </Link>
          <Link
            href="/#trajetoria"
            className="block text-white hover:text-[#272727] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Trajetória
          </Link>
          <Link
            href="/#desafios"
            className="block text-white hover:text-[#272727] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Desafios
          </Link>
          <Link
            href="/#dados"
            className="block text-white hover:text-[#272727] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Dados
          </Link>
        </nav>
      </div>
    </header>
  );
}