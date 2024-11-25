import React from "react";

const CardLigasFixadas: React.FC = () => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-md w-72">
      {/* Título do Card */}
      <div className="flex items-center mb-3">
        <span className="mr-2 text-lg font-bold">📌</span>
        <h3 className="text-base font-bold">LIGAS FIXADAS</h3>
      </div>

      <hr className="border-gray-300 mb-3" />

      {/* Lista de Ligas Fixadas */}
      <ul className="space-y-1 text-sm">
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="Brasil" className="h-5 w-5 mr-2" />
          Brasileirão Betano
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="Brasil" className="h-5 w-5 mr-2" />
          Série B
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="Brasil" className="h-5 w-5 mr-2" />
          Copa Betano do Brasil
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="Espanha" className="h-5 w-5 mr-2" />
          LaLiga
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="França" className="h-5 w-5 mr-2" />
          Ligue 1
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="Inglaterra" className="h-5 w-5 mr-2" />
          Premier League
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="Itália" className="h-5 w-5 mr-2" />
          Serie A
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="América" className="h-5 w-5 mr-2" />
          Copa América
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="América" className="h-5 w-5 mr-2" />
          Copa Libertadores
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="América" className="h-5 w-5 mr-2" />
          Copa Sul-Americana
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="Europa" className="h-5 w-5 mr-2" />
          Liga dos Campeões
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="Europa" className="h-5 w-5 mr-2" />
          Liga Europa
        </li>
        <li className="flex items-center text-gray-700">
          <img src="br.png" alt="Europa" className="h-5 w-5 mr-2" />
          Copa do Mundo
        </li>
      </ul>
    </div>
  );
};

export default CardLigasFixadas;
