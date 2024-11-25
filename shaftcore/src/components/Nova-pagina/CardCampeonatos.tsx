import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const CardCampeonatos: React.FC = () => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-md w-72">
      {/* Título do Card */}
      <div className="flex items-center mb-3">
        <img src="br.png" alt="Bandeira do Brasil" className="h-5 w-5 mr-2" />
        <h3 className="text-base font-bold">BRASIL</h3>
      </div>

      <hr className="border-gray-300 mb-3" />

      {/* Lista de Campeonatos */}
      <ul className="space-y-1 text-sm">
        <li className="text-gray-700">Brasileirão Betano</li>
        <li className="bg-white text-black font-bold rounded-md p-1">Série B</li>
        <li className="text-gray-700">Série C</li>
        <li className="text-gray-700">Série D</li>
        <li className="text-gray-700">Acreano</li>
        <li className="text-gray-700">Alagoano</li>
        <li className="text-gray-700">Alagoano 2</li>
        <li className="text-gray-700">Amapaense</li>
        <li className="text-gray-700">Amazonense</li>
        <li className="text-gray-700">Amazonense 2</li>
      </ul>

      {/* Botão Mostrar Mais */}
      <div className="mt-3">
        <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm">
          Mostrar mais
          <IoIosArrowDown className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default CardCampeonatos;
