import React, { useState } from "react";
import {
  FaFutbol,
  FaBasketballBall,
  FaVolleyballBall,
  FaEllipsisH,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  GiGloves,
  GiSoccerField,
  GiTennisRacket,
  GiCarWheel,
  GiWaterPolo,
  GiBaseballBat,
  GiHandBag,
  GiPassport,
  GiHockey,
  GiBrokenTablet,
} from "react-icons/gi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        {/* Botão do menu hamburguer para telas menores */}
        <div className="lg:hidden absolute left-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Menus */}
        <div
          className={`lg:flex lg:items-center lg:space-x-8 ${
            isOpen ? "block" : "hidden"
          } w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <div className="flex flex-wrap lg:flex-nowrap space-x-4 lg:space-x-8 justify-center lg:justify-center">
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <FaFutbol size={24} />
              <span className="text-xs">Futebol</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <FaBasketballBall size={24} />
              <span className="text-xs">Basquete</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <FaVolleyballBall size={24} />
              <span className="text-xs">Voley</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <GiGloves size={24} />
              <span className="text-xs">MMA</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <GiSoccerField size={24} />
              <span className="text-xs">Futsal</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <GiTennisRacket size={24} />
              <span className="text-xs">Tênis</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <GiCarWheel size={24} />
              <span className="text-xs">Motorsport</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <GiBrokenTablet size={24} />
              <span className="text-xs">Tênis de Mesa</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <GiWaterPolo size={24} />
              <span className="text-xs">Polo</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <GiHockey size={24} />
              <span className="text-xs">Hockey</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <GiPassport size={24} />
              <span className="text-xs">Esportes Online</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <GiHandBag size={24} />
              <span className="text-xs">Handball</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <GiBaseballBat size={24} />
              <span className="text-xs">Baseball</span>
            </button>
            <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
              <FaEllipsisH size={24} />
              <span className="text-xs">Mais</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
