import React, { useState } from "react";

const CardClassificacao: React.FC = () => {
  const [activeTab, setActiveTab] = useState("LIVE STANDINGS");

  const tabs = [
    { id: "LIVE STANDINGS", label: "Live Standings" },
    { id: "CLASSIFICAÇÃO", label: "Classificação" },
    { id: "FORMA", label: "Forma" },
    { id: "ACIMA/ABAIXO", label: "Acima/Abaixo" },
    { id: "HT/FT", label: "HT/FT" },
    { id: "ARTILHEIROS", label: "Artilheiros" },
  ];

  const data = [
    { pos: 1, equipe: "Santos", j: 37, v: 20, e: 9, d: 8, sg: 26, p: 68, forma: ["V", "D", "D", "V", "V"] },
    { pos: 2, equipe: "Mirassol", j: 37, v: 18, e: 10, d: 9, sg: 15, p: 64, forma: ["E", "D", "V", "V", "V"] },
    { pos: 3, equipe: "Novorizontino", j: 37, v: 18, e: 10, d: 9, sg: 13, p: 64, forma: ["V", "V", "E", "D", "V"] },
    { pos: 4, equipe: "Ceará", j: 37, v: 18, e: 12, d: 7, sg: 19, p: 63, forma: ["D", "E", "V", "V", "D"] },
    { pos: 5, equipe: "Sport", j: 37, v: 18, e: 10, d: 9, sg: 19, p: 63, forma: ["E", "D", "D", "V", "E"] },
  ];

  const artilheiros = [
    { pos: 1, jogador: "Pedro Santos", equipe: "Santos", gols: 21 },
    { pos: 2, jogador: "Lucas Silva", equipe: "Mirassol", gols: 19 },
    { pos: 3, jogador: "Carlos Júnior", equipe: "Novorizontino", gols: 18 },
    { pos: 4, jogador: "João Almeida", equipe: "Ceará", gols: 17 },
    { pos: 5, jogador: "Rafael Costa", equipe: "Sport", gols: 16 },
  ];

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md max-w-full md:max-w-3xl mx-auto mt-4">
      {/* Menu de Navegação */}
      <nav className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 space-x-3 md:space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base px-4 py-2 rounded-t-lg ${
              activeTab === tab.id
                ? "bg-red-500 text-white font-semibold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Conteúdo Dinâmico */}
      {activeTab === "LIVE STANDINGS" && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 font-semibold">
                <th className="p-2 md:p-4">#</th>
                <th className="p-2 md:p-4">Equipe</th>
                <th className="p-2 md:p-4">J</th>
                <th className="p-2 md:p-4">V</th>
                <th className="p-2 md:p-4">E</th>
                <th className="p-2 md:p-4">D</th>
                <th className="p-2 md:p-4">SG</th>
                <th className="p-2 md:p-4">P</th>
                <th className="p-2 md:p-4 text-center">Forma</th>
              </tr>
            </thead>
            <tbody>
              {data.map((team) => (
                <tr
                  key={team.pos}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-2 md:p-4">{team.pos}</td>
                  <td className="p-2 md:p-4">{team.equipe}</td>
                  <td className="p-2 md:p-4">{team.j}</td>
                  <td className="p-2 md:p-4">{team.v}</td>
                  <td className="p-2 md:p-4">{team.e}</td>
                  <td className="p-2 md:p-4">{team.d}</td>
                  <td className="p-2 md:p-4">{team.sg}</td>
                  <td className="p-2 md:p-4">{team.p}</td>
                  <td className="p-2 md:p-4 flex justify-center space-x-1">
                    {team.forma.map((f, i) => (
                      <span
                        key={i}
                        className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold ${
                          f === "V"
                            ? "bg-green-500 text-white"
                            : f === "E"
                            ? "bg-yellow-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "ARTILHEIROS" && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 font-semibold">
                <th className="p-2 md:p-4">#</th>
                <th className="p-2 md:p-4">Jogador</th>
                <th className="p-2 md:p-4">Equipe</th>
                <th className="p-2 md:p-4">Gols</th>
              </tr>
            </thead>
            <tbody>
              {artilheiros.map((player) => (
                <tr
                  key={player.pos}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-2 md:p-4">{player.pos}</td>
                  <td className="p-2 md:p-4">{player.jogador}</td>
                  <td className="p-2 md:p-4">{player.equipe}</td>
                  <td className="p-2 md:p-4">{player.gols}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab !== "LIVE STANDINGS" && activeTab !== "ARTILHEIROS" && (
        <div className="text-center text-gray-500 py-6">
          <p>Conteúdo da aba "{activeTab}" em desenvolvimento.</p>
        </div>
      )}
    </div>
  );
};

export default CardClassificacao;
