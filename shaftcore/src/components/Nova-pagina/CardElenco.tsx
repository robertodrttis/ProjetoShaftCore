import React, { useState } from "react";

interface Player {
  id: number;
  name: string;
  age: number;
  games: number;
  minutes: number;
  goals: number;
  yellowCards: number;
  redCards: number;
  position: string;
  countryFlag: string;
}

const CardElenco: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("PAULISTA");

  const players: Player[] = [
    { id: 1, name: "João Paulo", age: 29, games: 16, minutes: 1440, goals: 0, yellowCards: 0, redCards: 0, position: "Goleiros", countryFlag: "https://via.placeholder.com/16" },
    { id: 13, name: "Aderlan", age: 34, games: 12, minutes: 824, goals: 2, yellowCards: 4, redCards: 0, position: "Defensores", countryFlag: "https://via.placeholder.com/16" },
    { id: 4, name: "Gil", age: 37, games: 16, minutes: 1433, goals: 0, yellowCards: 1, redCards: 0, position: "Defensores", countryFlag: "https://via.placeholder.com/16" },
    { id: 3, name: "Hayner", age: 29, games: 12, minutes: 814, goals: 1, yellowCards: 3, redCards: 1, position: "Defensores", countryFlag: "https://via.placeholder.com/16" },
  ];

  const filteredPlayers = players.filter((player) => {
    if (activeTab === "PAULISTA") return true; // Exemplo simples, pode adicionar lógica para tabs
    return true;
  });

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md max-w-full md:max-w-3xl mx-auto mt-4">
      {/* Tabs de Navegação */}
      <nav className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 space-x-3 md:space-x-2">
        {["PAULISTA", "SÉRIE B", "TOTAL"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm md:text-base px-4 py-2 rounded-t-lg ${
              activeTab === tab
                ? "bg-red-500 text-white font-semibold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Goleiros */}
      <div className="mt-4">
        <h3 className="text-md font-semibold mb-2">Goleiros</h3>
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 font-semibold">
              <th className="p-2 md:p-4">#</th>
              <th className="p-2 md:p-4">Nome</th>
              <th className="p-2 md:p-4">Idade</th>
              <th className="p-2 md:p-4">🎽</th>
              <th className="p-2 md:p-4">Min</th>
              <th className="p-2 md:p-4">⚽</th>
              <th className="p-2 md:p-4">🟨</th>
              <th className="p-2 md:p-4">🟥</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers
              .filter((player) => player.position === "Goleiros")
              .map((player) => (
                <tr key={player.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-2 md:p-4">{player.id}</td>
                  <td className="p-2 md:p-4 flex items-center space-x-2">
                    <img src={player.countryFlag} alt="Flag" className="h-4 w-6 rounded" />
                    <span>{player.name}</span>
                  </td>
                  <td className="p-2 md:p-4">{player.age}</td>
                  <td className="p-2 md:p-4">{player.games}</td>
                  <td className="p-2 md:p-4">{player.minutes}</td>
                  <td className="p-2 md:p-4">{player.goals}</td>
                  <td className="p-2 md:p-4">{player.yellowCards}</td>
                  <td className="p-2 md:p-4">{player.redCards}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Defensores */}
      <div className="mt-4">
        <h3 className="text-md font-semibold mb-2">Defensores</h3>
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 font-semibold">
              <th className="p-2 md:p-4">#</th>
              <th className="p-2 md:p-4">Nome</th>
              <th className="p-2 md:p-4">Idade</th>
              <th className="p-2 md:p-4">🎽</th>
              <th className="p-2 md:p-4">Min</th>
              <th className="p-2 md:p-4">⚽</th>
              <th className="p-2 md:p-4">🟨</th>
              <th className="p-2 md:p-4">🟥</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers
              .filter((player) => player.position === "Defensores")
              .map((player) => (
                <tr key={player.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-2 md:p-4">{player.id}</td>
                  <td className="p-2 md:p-4 flex items-center space-x-2">
                    <img src={player.countryFlag} alt="Flag" className="h-4 w-6 rounded" />
                    <span>{player.name}</span>
                  </td>
                  <td className="p-2 md:p-4">{player.age}</td>
                  <td className="p-2 md:p-4">{player.games}</td>
                  <td className="p-2 md:p-4">{player.minutes}</td>
                  <td className="p-2 md:p-4">{player.goals}</td>
                  <td className="p-2 md:p-4">{player.yellowCards}</td>
                  <td className="p-2 md:p-4">{player.redCards}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardElenco;
