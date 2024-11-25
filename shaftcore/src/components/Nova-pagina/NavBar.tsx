import React from "react";
import { FaStar, FaFutbol, FaBasketballBall, FaTableTennis, FaFootballBall, FaRunning, FaVolleyballBall } from "react-icons/fa";
import { GiSoccerField } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const NavbarEsportes: React.FC = () => {
  return (
    <nav className="bg-gray-100 py-3 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between px-4 overflow-x-auto space-x-4 md:space-x-6 lg:space-x-10">
        {/* Favoritos */}
        <a href="/favoritos" className="flex items-center text-gray-600 hover:text-black transition whitespace-nowrap">
          <FaStar className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">FAVORITOS</span>
        </a>

        {/* Futebol - Item Selecionado */}
        <a href="/futebol" className="flex items-center text-[#ff1744] font-bold border-b-2 border-[#ff1744] pb-1 transition whitespace-nowrap">
          <FaFutbol className="h-5 w-5 mr-1" />
          <span className="text-sm">FUTEBOL</span>
        </a>

        {/* Outros Esportes */}
        <a href="/basquete" className="flex items-center text-gray-600 hover:text-black transition whitespace-nowrap">
          <FaBasketballBall className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">BASQUETE</span>
        </a>
        <a href="/tenis" className="flex items-center text-gray-600 hover:text-black transition whitespace-nowrap">
          <FaTableTennis className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">TÊNIS</span>
        </a>
        <a href="/futebol-americano" className="flex items-center text-gray-600 hover:text-black transition whitespace-nowrap">
          <FaFootballBall className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">FUTEBOL AM.</span>
        </a>
        <a href="/handebol" className="flex items-center text-gray-600 hover:text-black transition whitespace-nowrap">
          <FaRunning className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">HANDEBOL</span>
        </a>
        <a href="/volei" className="flex items-center text-gray-600 hover:text-black transition whitespace-nowrap">
          <FaVolleyballBall className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">VÔLEI</span>
        </a>
        <a href="/futsal" className="flex items-center text-gray-600 hover:text-black transition whitespace-nowrap">
          <GiSoccerField className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">FUTSAL</span>
        </a>

        {/* Mais Esportes */}
        <a href="/mais-esportes" className="flex items-center text-gray-600 hover:text-black transition whitespace-nowrap">
          <span className="text-sm font-medium">MAIS ESPORTES</span>
          <IoIosArrowDown className="h-5 w-5 ml-1" />
        </a>
      </div>
    </nav>
  );
};

export default NavbarEsportes;
