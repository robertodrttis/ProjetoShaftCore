import React from "react";

interface Game {
  id: number;
  date: string;
  time: string;
  teams: string;
}

interface CalendarioJogosProps {
  games: Game[];
}

const CalendarioJogos: React.FC<CalendarioJogosProps> = ({ games }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mx-auto text-center">
      {games.length > 0 ? (
        // Renderizar jogos encontrados
        <div>
          <h2 className="text-lg font-semibold mb-4">Calendário de Jogos</h2>
          <ul className="space-y-4">
            {games.map((game) => (
              <li
                key={game.id}
                className="flex justify-between items-center border-b pb-2 last:border-b-0"
              >
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-800">{game.teams}</p>
                  <p className="text-xs text-gray-500">{game.date}</p>
                </div>
                <p className="text-sm font-semibold text-gray-800">{game.time}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Mensagem de "Jogo não encontrado"
        <div className="flex flex-col items-center">
          <div className="text-gray-400 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l6 6m0-6l-6 6"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-sm font-medium">Jogo não encontrado.</p>
        </div>
      )}
    </div>
  );
};

export default CalendarioJogos;
