import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Pais {
  id: number;
  nome: string;
  link: string;
  bandeira: string;
}

const CardPaises: React.FC = () => {
  // Lista de países com links e bandeiras
  const paises: Pais[] = [
    { id: 1, nome: "África do Sul", link: "/africa-do-sul", bandeira: "br.png" },
    { id: 2, nome: "Albânia", link: "/albania", bandeira: "br.png" },
    { id: 3, nome: "Alemanha", link: "/alemanha", bandeira: "br.png" },
    { id: 4, nome: "Andorra", link: "/andorra", bandeira: "br.png" },
    { id: 5, nome: "Angola", link: "/angola", bandeira: "br.png" },
    { id: 6, nome: "Antígua & Barbuda", link: "/antigua-barbuda", bandeira: "br.png" },
    { id: 7, nome: "Arábia Saudita", link: "/arabia-saudita", bandeira: "br.png" },
    { id: 8, nome: "Argélia", link: "/argelia", bandeira: "br.png" },
    { id: 9, nome: "Argentina", link: "/argentina", bandeira: "br.png" },
    { id: 10, nome: "Armênia", link: "/armenia", bandeira: "br.png" },
    { id: 11, nome: "Aruba", link: "/aruba", bandeira: "br.png" },
    { id: 12, nome: "Austrália", link: "/australia", bandeira: "br.png" },
  ];

  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-md w-full sm:w-64">
      {/* Título do Card */}
      <div className="flex items-center mb-3">
        <h3 className="text-base font-bold">PAÍSES</h3>
      </div>

      <hr className="border-gray-300 mb-3" />

      {/* Lista de Países */}
      <ul className="space-y-1 text-sm">
        {paises.map((pais) => (
          <li key={pais.id}>
            <a
              href={pais.link}
              className="flex items-center text-gray-700 hover:bg-gray-200 hover:shadow-md p-1 rounded-md transition-all"
            >
              <img src={pais.bandeira} alt={pais.nome} className="h-5 w-5 mr-2" />
              {pais.nome}
            </a>
          </li>
        ))}
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
