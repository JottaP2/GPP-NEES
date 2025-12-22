"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">EPP-UFAL</h3>
            <p className="text-gray-400 text-sm">
              Equipe de Pesquisadores Penedense
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Início
                </Link>
              </li>
              <li>
                <Link href="https://www.nees.ufal.br/projetos_nees/inteligencia-aumentada-para-predicao-do-alunado-no-contexto-do-programa-nacional-do-livro-e-do-material-didatico-pnld/zhttps://www.nees.ufal.br/projetos_nees/inteligencia-aumentada-para-predicao-do-alunado-no-contexto-do-programa-nacional-do-livro-e-do-material-didatico-pnld/" className="text-gray-400 hover:text-white transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-400 hover:text-white transition">
                  Pesquisas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato do Gestor</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@gppufal.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(82) 3214-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Unidade Educacional Ufal<br />Penedo - AL</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EPPUFAL. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;