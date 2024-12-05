import React from "react";

interface Player {
  name: string;
  position: string;
  number: number;
  country: string;
  card?: "red" | "yellow"; // Corrigido para ser compatível
}

interface SuplentesCardProps {
  starters: Player[];
  substitutes: Player[];
  coaches: string[];
}

const SuplentesCard: React.FC<SuplentesCardProps> = ({
  starters,
  substitutes,
  coaches,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-6 max-w-4xl mx-auto">
      {/* Titulares */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">TITULARES</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {starters.map((player, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-gray-600 font-semibold">{player.number}</span>
              <span className="text-gray-800">{player.name}</span>
              <span className="text-gray-500 text-sm">({player.position})</span>
              {player.card && (
                <span
                  className={`h-4 w-4 rounded-full ${
                    player.card === "yellow" ? "bg-yellow-500" : "bg-red-500"
                  }`}
                ></span>
              )}
              <span className="ml-auto text-gray-500">{player.country}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suplentes */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">SUPLENTES</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {substitutes.map((player, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-gray-600 font-semibold">{player.number}</span>
              <span className="text-gray-800">{player.name}</span>
              <span className="text-gray-500 text-sm">({player.position})</span>
              {player.card && (
                <span
                  className={`h-4 w-4 rounded-full ${
                    player.card === "yellow" ? "bg-yellow-500" : "bg-red-500"
                  }`}
                ></span>
              )}
              <span className="ml-auto text-gray-500">{player.country}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Treinadores */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">TREINADORES</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {coaches.map((coach, index) => (
            <div key={index} className="text-gray-800">{coach}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuplentesCard;
