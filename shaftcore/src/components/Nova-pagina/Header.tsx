import React, { useState } from "react";
import { FaSearch, FaUser, FaCog, FaMoon } from "react-icons/fa";
import LoginCard from "@/components/LoginCard"; // Importe o LoginCard

const Header: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Controle do Login Card
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Controle do modal de ajustes

  return (
    <header className="bg-[#0B2B3E] text-white py-4 shadow-md relative">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logotipo */}
        <div className="flex items-center space-x-3">
          <img src="/logo-shaftscore.png" alt="ShaftScore Logo" className="h-8 w-auto" />
        </div>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/resultados"
            className="flex items-center space-x-2 hover:text-[#ff1744] transition duration-300"
          >
            <img src="/placar.png" alt="Resultados" className="h-6 w-auto" />
            <span className="font-semibold">RESULTADOS</span>
          </a>
          <a
            href="/noticias"
            className="flex items-center space-x-2 hover:text-[#ff1744] transition duration-300"
          >
            <img src="/IconNoticias.png" alt="Notícias" className="h-6 w-auto" />
            <span className="font-semibold">NOTÍCIAS</span>
          </a>
        </nav>

        {/* Ícones do Header */}
        <div className="flex items-center space-x-4">
          {/* Pesquisa */}
          <button className="p-2 rounded-full hover:bg-[#193847] transition duration-300">
            <FaSearch size={18} />
          </button>

          {/* Botão de Login */}
          <button
            onClick={() => setIsLoginOpen(true)} // Abre o Login Card
            className="flex items-center space-x-2 p-2 rounded-full hover:bg-[#193847] transition duration-300"
          >
            <FaUser size={18} />
            <span className="hidden lg:inline-block font-bold">ACESSAR</span>
          </button>

          {/* Botão de Configurações */}
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)} // Alterna o modal de configurações
            className="p-2 rounded-full hover:bg-[#193847] transition duration-300"
          >
            {isSettingsOpen ? (
              <span className="text-lg font-bold">✕</span> // Botão de fechar (X)
            ) : (
              <FaCog size={18} /> // Ícone de configurações
            )}
          </button>
        </div>
      </div>

      {/* Login Card */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center">
          <LoginCard onClose={() => setIsLoginOpen(false)} /> {/* Usa o LoginCard */}
        </div>
      )}

      {/* Modal de Configurações */}
      {isSettingsOpen && (
        <div className="absolute top-[70px] right-4 bg-white rounded-lg shadow-lg w-64 z-50">
          <div className="p-4">
            {/* Configurações */}
            <button className="flex items-center justify-between w-full px-2 py-3 hover:bg-gray-100 rounded-md">
              <div className="flex items-center space-x-2">
                <FaCog size={18} className="text-gray-700" />
                <span className="font-semibold text-gray-700">Configurações</span>
              </div>
              <FaCog size={16} className="text-gray-500" />
            </button>

            {/* Modo Noturno */}
            <div className="flex items-center justify-between w-full px-2 py-3 hover:bg-gray-100 rounded-md">
              <div className="flex items-center space-x-2">
                <FaMoon size={18} className="text-gray-700" />
                <span className="font-semibold text-gray-700">Modo Noturno</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-10 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-blue-300"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:left-5 transition-all"></div>
              </label>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
