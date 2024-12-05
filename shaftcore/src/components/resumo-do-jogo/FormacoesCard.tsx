import React from "react";

interface Player {
  name: string;
  position: string;
  rating: number;
  image: string;
}

interface FormationProps {
  homeFormation: string;
  awayFormation: string;
  homePlayers: Player[];
  awayPlayers: Player[];
}

const FormacoesCard: React.FC<FormationProps> = ({
  homeFormation,
  awayFormation,
  homePlayers,
  awayPlayers,
}) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full sm:max-w-4xl mx-auto space-y-6">
      {/* Títulos das formações */}
      <div className="flex flex-row items-center justify-between text-center sm:text-left">
        <span className="text-sm sm:text-base font-medium text-gray-600">
          {homeFormation}
        </span>
        <span className="text-base sm:text-lg font-semibold text-gray-800">
          FORMAÇÕES
        </span>
        <span className="text-sm sm:text-base font-medium text-gray-600">
          {awayFormation}
        </span>
      </div>

      {/* Campo e jogadores */}
      <div className="relative bg-gray-100 rounded-lg p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-5 gap-y-4 gap-x-4">
        {/* Time da casa */}
        <div className="col-span-2 flex flex-col items-center space-y-4">
          {homePlayers.map((player, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 text-center"
            >
              <img
                src="/image.png" // Substituído pelo nome da imagem padrão
                alt={player.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <span className="text-sm sm:text-base font-medium text-gray-700">
                {player.name}
              </span>
              <span className="text-sm sm:text-base bg-yellow-300 text-black font-bold px-2 py-1 rounded">
                {player.rating}
              </span>
            </div>
          ))}
        </div>

        {/* Centro do campo */}
        <div className="col-span-1 flex items-center justify-center">
          <span className="text-gray-500 font-medium text-sm sm:text-base">
            
          </span>
        </div>

        {/* Time visitante */}
        <div className="col-span-2 flex flex-col items-center space-y-4">
          {awayPlayers.map((player, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 text-center"
            >
              <img
                src="/image.png" // Substituído pelo nome da imagem padrão
                alt={player.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <span className="text-sm sm:text-base font-medium text-gray-700">
                {player.name}
              </span>
              <span className="text-sm sm:text-base bg-yellow-300 text-black font-bold px-2 py-1 rounded">
                {player.rating}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormacoesCard;
