import React, { useState } from "react";
import { FaSearch, FaUser, FaBell, FaCog, FaMoon } from "react-icons/fa";

const Header: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Controle do modal de perfil
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Controle do modal de ajustes

  return (
    <header className="bg-[#0B2B3E] text-white py-4 shadow-md relative">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logotipo */}
        <div className="flex items-center space-x-3">
          <img src="logo-shaftscore.png" alt="ShaftScore Logo" className="h-8 w-auto" />
        </div>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/resultados"
            className="flex itemSs-center space-x-2 hover:text-[#ff1744] transition duration-300"
          >
            <img src="placar.png" alt="Resultados" className="h-6 w-auto" />
            <span className="font-semibold">RESULTADOS</span>
          </a>
          <a
            href="/noticias"
            className="flex items-center space-x-2 hover:text-[#ff1744] transition duration-300"
          >
            <img src="IconNoticias.png" alt="Notícias" className="h-6 w-auto" />
            <span className="font-semibold">NOTÍCIAS</span>
          </a>
        </nav>

        {/* Ícones do Header */}
        <div className="flex items-center space-x-4">
          {/* Pesquisa */}
          <button className="p-2 rounded-full hover:bg-[#193847] transition duration-300">
            <FaSearch size={18} />
          </button>


          {/* Botão de Perfil */}
          <button
            onClick={() => setIsProfileOpen(true)} // Abre o modal de perfil
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

      {/* Modal de Perfil */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl p-6 relative">
            {/* Botão para Fechar */}
            <button
              onClick={() => setIsProfileOpen(false)} // Fecha o modal de perfil
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* QR Code Section */}
              <div className="flex flex-col items-center bg-gray-900 text-white p-4 rounded-md">
                <h2 className="text-lg font-bold text-center mb-4">
                  Baixe o Flashscore para iOS ou Android
                </h2>
                <div className="flex flex-col items-center">
                  <img
                    src="/path-to/qr-code.png"
                    alt="QR Code"
                    className="w-32 h-32 mb-4"
                  />
                  <p>Escanear para baixar</p>
                </div>
              </div>

              {/* Login Options */}
              <div>
                <h2 className="text-lg font-bold mb-4 text-center">
                  Destrave a Experiência Completa
                </h2>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Rápido, Grátis e Cheio de Recompensas. Cadastre-se em segundos!
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <button className="flex items-center justify-center w-full py-2 border rounded-md text-gray-700 hover:bg-gray-100">
                    <img
                      src="/path-to/google-icon.png"
                      alt="Google"
                      className="w-6 h-6 mr-2"
                    />
                    Continuar com Google
                  </button>
                  <button className="flex items-center justify-center w-full py-2 border rounded-md text-gray-700 hover:bg-gray-100">
                    <img
                      src="/path-to/apple-icon.png"
                      alt="Apple"
                      className="w-6 h-6 mr-2"
                    />
                    Continuar com Apple
                  </button>
                  <button className="flex items-center justify-center w-full py-2 border rounded-md text-gray-700 hover:bg-gray-100">
                    <img
                      src="/path-to/facebook-icon.png"
                      alt="Facebook"
                      className="w-6 h-6 mr-2"
                    />
                    Continuar com Facebook
                  </button>
                  <button className="flex items-center justify-center w-full py-2 border rounded-md text-gray-700 hover:bg-gray-100">
                    <img
                      src="/path-to/email-icon.png"
                      alt="Email"
                      className="w-6 h-6 mr-2"
                    />
                    Continuar com email
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Ao clicar em qualquer botão "continuar com", você concorda com os{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    termos de uso
                  </a>{" "}
                  e a nossa{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    política de privacidade
                  </a>.
                </p>
              </div>
            </div>
          </div>
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
