import React, { useState } from 'react';
import Image from 'next/image';
import { FaUser, FaCog } from 'react-icons/fa';
import LoginCard from './LoginCard'; // Importe o LoginCard
import SettingsCard from './SettingsCard'; // Importe o SettingsCard

export default function Header() {
  // Estado para controlar a visibilidade do LoginCard e do SettingsCard
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [showSettingsCard, setShowSettingsCard] = useState(false);

  // Função para alternar o estado de exibição do LoginCard
  const toggleLoginCard = () => {
    setShowLoginCard(!showLoginCard);
  };

  // Função para alternar o estado de exibição do SettingsCard
  const toggleSettingsCard = () => {
    setShowSettingsCard(!showSettingsCard);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo-shaftscore.png" alt="Logo" width={260} height={140} />
      </div>

      {/* Search Field */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full p-2 rounded-md bg-gray-700 text-white outline-none"
        />
      </div>

      {/* User and Settings Buttons */}
      <div className="flex items-center space-x-4 relative">
        {/* Botão do usuário para exibir LoginCard */}
        <button onClick={toggleLoginCard} className="p-2 hover:bg-gray-700 rounded-full">
          <FaUser size={24} />
        </button>

        {/* Botão de configurações para exibir SettingsCard */}
        <button onClick={toggleSettingsCard} className="p-2 hover:text-yellow-400 rounded-full">
          <FaCog size={24} />
        </button>

        {/* SettingsCard estilo dropdown */}
        {showSettingsCard && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg w-64 p-4 z-50">
            <SettingsCard />
          </div>
        )}
      </div>

      {/* LoginCard */}
      {showLoginCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <LoginCard onClose={toggleLoginCard} />
        </div>
      )}
    </header>
  );
}