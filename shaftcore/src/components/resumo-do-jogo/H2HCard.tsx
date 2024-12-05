import React, { useState } from "react";

interface Match {
  date: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  result: "V" | "D" | "E"; // Vitória, Derrota, Empate
}

interface H2HCardProps {
  team1: string;
  team2: string;
  directMatches: Match[];
}

const H2HCard: React.FC<H2HCardProps> = ({ team1, team2, directMatches }) => {
  const [activeTab, setActiveTab] = useState("Todos");
  const tabs = ["Todos", "Casa", "Fora"];

  const getResultClass = (result: "V" | "D" | "E") => {
    switch (result) {
      case "V":
        return "bg-green-500 text-white";
      case "D":
        return "bg-red-500 text-white";
      case "E":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-300 text-gray-600";
    }
  };

  const filteredDirectMatches = directMatches.filter((match) => {
    if (activeTab === "Todos") {
      return true;
    } else if (activeTab === "Casa") {
      return match.homeTeam === team1;
    } else if (activeTab === "Fora") {
      return match.awayTeam === team1;
    }
    return true;
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4 w-full sm:max-w-4xl mx-auto">
      {/* Botões de filtro */}
      <div className="flex overflow-x-auto space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded ${
              activeTab === tab
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Confrontos Diretos */}
      <div>
        <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
          Confrontos Diretos
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left text-gray-600">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-2">Data</th>
                <th className="py-2 px-2">Liga</th>
                <th className="py-2 px-2">Casa</th>
                <th className="py-2 px-2">Fora</th>
                <th className="py-2 px-2">Placar</th>
                <th className="py-2 px-2">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {filteredDirectMatches.map((match, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 text-center sm:text-left"
                >
                  <td className="py-2 px-2 whitespace-nowrap">{match.date}</td>
                  <td className="py-2 px-2">{match.league}</td>
                  <td className="py-2 px-2 font-medium">{match.homeTeam}</td>
                  <td className="py-2 px-2 font-medium">{match.awayTeam}</td>
                  <td className="py-2 px-2">{match.score}</td>
                  <td className="py-2 px-2">
                    <span
                      className={`py-1 px-2 rounded-md text-xs font-semibold ${getResultClass(
                        match.result
                      )}`}
                    >
                      {match.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-2 text-blue-500 text-xs sm:text-sm">
          Mostrar mais jogos
        </button>
      </div>
    </div>
  );
};

export default H2HCard;
