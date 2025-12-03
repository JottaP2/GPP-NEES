"use client";
import Image from "next/image";
import logoH from "../../public/logoHorizontal.svg";
import { useState } from "react";

function header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex flex-row items-center justify-between p-4 md:p-10 bg-transparent relative">
            <Image 
                src={logoH}
                alt="Logo"
                width={250}
                height={100}
                loading="lazy"
                className="w-32 md:w-60"
            />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
                <ul className="flex space-x-12">
                    <li className="hover:bg-white p-1 rounded-sm hover:text-black"><a href="#">Início</a></li>
                    <li className="hover:bg-white p-1 rounded-sm hover:text-black"><a href="#">Dados</a></li>
                    <li className="hover:bg-white p-1 rounded-sm hover:text-black"><a href="#">Trajetória</a></li>
                    <li className="hover:bg-white p-1 rounded-sm hover:text-black"><a href="#">Escolas</a></li>
                    <li className="hover:bg-white p-1 rounded-sm hover:text-black"><a href="#">Equipe</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden flex flex-col space-y-1 p-2"
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Navigation */}
            <nav className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className="flex flex-col space-y-4 p-6">
                    <li className="hover:bg-white p-2 rounded-sm hover:text-black transition-colors">
                        <a href="#" onClick={toggleMenu}>Início</a>
                    </li>
                    <li className="hover:bg-white p-2 rounded-sm hover:text-black transition-colors">
                        <a href="#" onClick={toggleMenu}>Dados</a>
                    </li>
                    <li className="hover:bg-white p-2 rounded-sm hover:text-black transition-colors">
                        <a href="#" onClick={toggleMenu}>Trajetória</a>
                    </li>
                    <li className="hover:bg-white p-2 rounded-sm hover:text-black transition-colors">
                        <a href="#" onClick={toggleMenu}>Escolas</a>
                    </li>
                    <li className="hover:bg-white p-2 rounded-sm hover:text-black transition-colors">
                        <a href="#" onClick={toggleMenu}>Equipe</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default header;