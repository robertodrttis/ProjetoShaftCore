import React from "react";
import { FaStar, FaPlus } from "react-icons/fa";

const CardMinhasEquipes: React.FC = () => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-md w-full sm:w-64">
      {/* Título do Card */}
      <div className="flex items-center mb-3">
        <FaStar className="text-black mr-2" />
        <h3 className="text-base font-bold">MINHAS EQUIPES</h3>
      </div>

      <hr className="border-gray-300 mb-3" />

      {/* Botão Adicionar Equipe */}
      <div className="flex items-center text-[#ff1744] font-bold text-sm cursor-pointer hover:underline">
        <FaPlus className="mr-2" />
        <span>ADICIONAR EQUIPE</span>
      </div>
    </div>
  );
};

export default CardMinhasEquipes;
