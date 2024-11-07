import React, { useState } from 'react';
import Image from 'next/image';
import { FaUser, FaHeart } from 'react-icons/fa';
import LoginCard from './LoginCard'; // Importe o LoginCard

export default function Header() {
  // Estado para controlar a visibilidade do LoginCard
  const [showLoginCard, setShowLoginCard] = useState(false);

  // Função para alternar o estado de exibição do LoginCard
  const toggleLoginCard = () => {
    setShowLoginCard(!showLoginCard);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
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

      {/* User and Favorites */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleLoginCard} className="p-2 hover:bg-gray-700 rounded-full">
          <FaUser size={24} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <FaHeart size={24} />
        </button>
      </div>
      
      {/* Renderiza o LoginCard Condicionalmente */}
      {showLoginCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <LoginCard onClose={toggleLoginCard} />
        </div>
      )}
    </header>
  );
}
