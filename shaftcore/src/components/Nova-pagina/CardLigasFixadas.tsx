import React from "react";

interface Liga {
  id: number;
  nome: string;
  link: string;
  bandeira: string;
}

const CardLigasFixadas: React.FC = () => {
  // Lista de ligas fixadas com links e bandeiras
  const ligas: Liga[] = [
    { id: 1, nome: "Brasileirão Betano", link: "/brasileirao", bandeira: "br.png" },
    { id: 2, nome: "Série B", link: "/serie-b", bandeira: "br.png" },
    { id: 3, nome: "Copa Betano do Brasil", link: "/copa-betano", bandeira: "br.png" },
    { id: 4, nome: "LaLiga", link: "/laliga", bandeira: "br.png" },
    { id: 5, nome: "Ligue 1", link: "/ligue-1", bandeira: "br.png" },
    { id: 6, nome: "Premier League", link: "/premier-league", bandeira: "br.png" },
    { id: 7, nome: "Serie A", link: "/serie-a", bandeira: "br.png" },
    { id: 8, nome: "Copa América", link: "/copa-america", bandeira: "br.png" },
    { id: 9, nome: "Copa Libertadores", link: "/copa-libertadores", bandeira: "br.png" },
    { id: 10, nome: "Copa Sul-Americana", link: "/copa-sulamericana", bandeira: "br.png" },
    { id: 11, nome: "Liga dos Campeões", link: "/liga-dos-campeoes", bandeira: "br.png" },
    { id: 12, nome: "Liga Europa", link: "/liga-europa", bandeira: "br.png" },
    { id: 13, nome: "Copa do Mundo", link: "/copa-do-mundo", bandeira: "br.png" },
  ];

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
        {ligas.map((liga) => (
          <li key={liga.id}>
            <a
              href={liga.link}
              className="flex items-center text-gray-700 hover:bg-gray-200 hover:shadow-md p-1 rounded-md transition-all"
            >
              <img src={liga.bandeira} alt={liga.nome} className="h-5 w-5 mr-2" />
              {liga.nome}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardLigasFixadas;
