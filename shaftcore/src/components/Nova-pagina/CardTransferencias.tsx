import React, { useState } from "react";

interface Transfer {
  id: number;
  date: string;
  player: string;
  fromTo: string;
  direction: "in" | "out";
  value: string;
  type: string;
}

const CardTransferencias: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("TODAS");

  const transfers: Transfer[] = [
    { id: 1, date: "30.10.2024", player: "Luiz Henrique", fromTo: "Ipatinga", direction: "in", value: "Retorno de Empréstimo", type: "" },
    { id: 2, date: "18.10.2024", player: "Derick", fromTo: "SC Lusitânia", direction: "out", value: "-", type: "" },
    { id: 3, date: "07.10.2024", player: "Dodô", fromTo: "", direction: "out", value: "Livre", type: "" },
    { id: 4, date: "19.09.2024", player: "Ed Carlos", fromTo: "Niki Volos", direction: "out", value: "Empréstimo", type: "" },
    { id: 5, date: "02.09.2024", player: "Weslley Patati", fromTo: "M. Tel Aviv", direction: "out", value: "€1.5m", type: "Transferência" },
  ];

  const filteredTransfers = transfers.filter((transfer) => {
    if (activeTab === "TODAS") return true;
    if (activeTab === "CHEGADAS" && transfer.direction === "in") return true;
    if (activeTab === "SAÍDAS" && transfer.direction === "out") return true;
    return false;
  });

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md max-w-full md:max-w-3xl mx-auto mt-4">
      {/* Tabs de Navegação */}
      <nav className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 space-x-3 md:space-x-2">
        {["TODAS", "CHEGADAS", "SAÍDAS"].map((tab) => (
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

      {/* Tabela de Transferências */}
      <table className="w-full border-collapse text-sm md:text-base mt-4">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 font-semibold">
            <th className="p-2 md:p-4">DATA</th>
            <th className="p-2 md:p-4">JOGADOR</th>
            <th className="p-2 md:p-4">DE / PARA</th>
            <th className="p-2 md:p-4">VALOR</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransfers.map((transfer) => (
            <tr
              key={transfer.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="p-2 md:p-4">{transfer.date}</td>
              <td className="p-2 md:p-4 flex items-center space-x-2">
                <img
                  src={`https://via.placeholder.com/16`} // Placeholder para bandeira
                  alt={transfer.player}
                  className="h-4 w-6 rounded"
                />
                <span>{transfer.player}</span>
              </td>
              <td className="p-2 md:p-4 flex items-center space-x-2">
                {transfer.direction === "in" ? (
                  <span className="text-green-500">←</span>
                ) : (
                  <span className="text-red-500">→</span>
                )}
                <span>{transfer.fromTo || "-"}</span>
              </td>
              <td className="p-2 md:p-4">{transfer.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardTransferencias;
