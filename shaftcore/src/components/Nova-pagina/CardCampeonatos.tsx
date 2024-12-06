import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Campeonato {
  id: number;
  nome: string;
  link: string; // URL da página para onde o link levará
}

const CardCampeonatos: React.FC = () => {
  // Lista de campeonatos com links
  const campeonatos: Campeonato[] = [
    { id: 1, nome: "Brasileirão Betano", link: "/brasileirao" },
    { id: 2, nome: "Série B", link: "/serie-b" },
    { id: 3, nome: "Série C", link: "/serie-c" },
    { id: 4, nome: "Série D", link: "/serie-d" },
    { id: 5, nome: "Acreano", link: "/acreano" },
    { id: 6, nome: "Alagoano", link: "/alagoano" },
    { id: 7, nome: "Alagoano 2", link: "/alagoano-2" },
    { id: 8, nome: "Amapaense", link: "/amapaense" },
    { id: 9, nome: "Amazonense", link: "/amazonense" },
    { id: 10, nome: "Amazonense 2", link: "/amazonense-2" },
  ];

  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-md w-full sm:w-80">
      {/* Título do Card */}
      <div className="flex items-center mb-3">
        <img src="br.png" alt="Bandeira do Brasil" className="h-5 w-5 mr-2" />
        <h3 className="text-base font-bold">BRASIL</h3>
      </div>

      <hr className="border-gray-300 mb-3" />

      {/* Lista de Campeonatos */}
      <ul className="space-y-1 text-sm">
        {campeonatos.map((campeonato) => (
          <li key={campeonato.id}>
            <a
              href={campeonato.link}
              className="block text-gray-700 hover:bg-gray-200 hover:shadow-md p-1 rounded-md transition-all"
            >
              {campeonato.nome}
            </a>
          </li>
        ))}
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
