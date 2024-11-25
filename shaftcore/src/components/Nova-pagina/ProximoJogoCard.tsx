import React from "react";
import { FaStar, FaTv } from "react-icons/fa";

const CardJogosDeHoje: React.FC = () => {
  const jogos = [
    {
      data: "18:30",
      time1: "CRB",
      time2: "Operário",
      placar1: 0,
      placar2: 0,
      live: true,
    },
    {
      data: "18:30",
      time1: "Paysandu",
      time2: "Vila Nova",
      placar1: 0,
      placar2: 1,
      live: true,
    },
    {
      data: "18:30",
      time1: "América-MG",
      time2: "Brusque",
      live: false,
    },
    {
      data: "18:30",
      time1: "Goiás",
      time2: "Novorizontino",
      live: false,
    },
    {
      data: "18:30",
      time1: "Guarani",
      time2: "Ceará",
      live: false,
    },
    {
      data: "18:30",
      time1: "Mirassol",
      time2: "Chapecoense",
      live: false,
    },
    {
      data: "18:30",
      time1: "Sport",
      time2: "Santos",
      live: false,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-full md:max-w-3xl mx-auto mt-4">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between bg-blue-100 p-2 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <FaStar className="text-gray-600" />
          <span className="text-gray-700 font-semibold">BRASIL: Série B</span>
        </div>
        <a href="#" className="text-blue-500 hover:underline text-sm">
          Classificação ao vivo
        </a>
      </div>

      {/* Lista de Jogos */}
      <ul className="divide-y divide-gray-200">
        {jogos.map((jogo, index) => (
          <li key={index} className="flex items-center py-2">
            {/* Coluna 1: Indicador e Placar */}
            <div className="flex items-center space-x-2 w-16">
              <span
                className={`text-sm font-bold ${
                  index === 0 ? "text-red-500" : "text-gray-500"
                }`}
              >
                {index === 0 ? "55" : "52"}
              </span>
            </div>

            {/* Coluna 2: Time 1 */}
            <span className="text-sm flex-1 text-gray-800 text-center">
              {jogo.time1}
            </span>

            {/* Coluna 3: Placar */}
            {jogo.placar1 !== undefined && jogo.placar2 !== undefined ? (
              <span className="text-sm font-bold text-gray-800">
                {jogo.placar1} - {jogo.placar2}
              </span>
            ) : (
              <span className="text-sm text-gray-500">Preview</span>
            )}

            {/* Coluna 4: Time 2 */}
            <span className="text-sm flex-1 text-gray-800 text-center">
              {jogo.time2}
            </span>

            {/* Coluna 5: Ícones */}
            {jogo.live ? (
              <span className="text-sm font-semibold text-red-500 ml-4">
                LIVE
              </span>
            ) : (
              <FaTv className="text-gray-500 ml-4" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardJogosDeHoje;
