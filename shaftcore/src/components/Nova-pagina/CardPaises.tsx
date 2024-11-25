import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const CardPaises: React.FC = () => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-md w-64">
      {/* Título do Card */}
      <div className="flex items-center mb-3">
        <h3 className="text-base font-bold">PAÍSES</h3>
      </div>

      <hr className="border-gray-300 mb-3" />

      {/* Lista de Países */}
      <ul className="space-y-1 text-sm">
        <li className="text-gray-700">África do Sul</li>
        <li className="text-gray-700">Albânia</li>
        <li className="text-gray-700">Alemanha</li>
        <li className="text-gray-700">Andorra</li>
        <li className="text-gray-700">Angola</li>
        <li className="text-gray-700">Antígua & Barbuda</li>
        <li className="text-gray-700">Arábia Saudita</li>
        <li className="text-gray-700">Argélia</li>
        <li className="text-gray-700">Argentina</li>
        <li className="text-gray-700">Armênia</li>
        <li className="text-gray-700">Aruba</li>
        <li className="text-gray-700">Austrália</li>
        <li className="text-gray-700">Áustria</li>
        <li className="text-gray-700">Azerbaijão</li>
        <li className="text-gray-700">Bahrein</li>
        <li className="text-gray-700">Bangladesh</li>
        <li className="text-gray-700">Barbados</li>
        <li className="text-gray-700">Belarus</li>
        <li className="text-gray-700">Bélgica</li>
        <li className="text-gray-700">Benin</li>
        <li className="text-gray-700">Bermuda</li>
        <li className="text-gray-700">Bolívia</li>
        {/* Botão Mostrar Mais */}
        <li className="flex items-center text-blue-600 font-semibold cursor-pointer hover:underline">
          <span>Mostrar mais</span>
          <IoIosArrowDown className="ml-1" />
        </li>
      </ul>
    </div>
  );
};

export default CardPaises;
