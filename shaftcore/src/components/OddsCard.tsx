import React, { useState } from "react";

interface Odd {
  bookmaker: string;
  odds: {
    x1: number;
    x2: number;
    x3: number;
  };
}

const OddsCard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("1X2");
  const [activeTime, setActiveTime] = useState("TEMPO REGULAMENTAR");

  const categories = [
    "1X2",
    "Acima/Abaixo",
    "Handicap Asiático",
    "Ambos marcam",
    "Double chance",
    "European handicap",
    "Draw no bet",
    "Placar exato",
    "Intervalo/Final do Jogo",
    "Ímpar/Par",
  ];

  const times = ["TEMPO REGULAMENTAR", "1º TEMPO", "2º TEMPO"];

  const odds: Odd[] = [
    {
      bookmaker: "bet365",
      odds: { x1: 3.50, x2: 2.90, x3: 2.30 },
    },
    {
      bookmaker: "Betano",
      odds: { x1: 3.45, x2: 2.95, x3: 2.25 },
    },
    {
      bookmaker: "1xBet",
      odds: { x1: 3.67, x2: 2.85, x3: 2.40 },
    },
    {
      bookmaker: "Bet Esporte",
      odds: { x1: 3.80, x2: 2.89, x3: 2.20 },
    },
    {
      bookmaker: "Aposta Agora",
      odds: { x1: 3.79, x2: 2.99, x3: 2.29 },
    },
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Aqui você pode adicionar lógica para atualizar os dados da tabela com base na categoria selecionada
    console.log(`Categoria selecionada: ${category}`);
  };

  const handleTimeChange = (time: string) => {
    setActiveTime(time);
    // Aqui você pode adicionar lógica para atualizar os dados da tabela com base no tempo selecionado
    console.log(`Tempo selecionado: ${time}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4 max-w-4xl mx-auto">
      {/* Botões de Categoria */}
      <nav className="flex overflow-x-auto whitespace-nowrap space-x-4 pb-2 border-b">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 text-sm font-medium rounded ${
              activeCategory === category
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Botões de Tempo */}
      <div className="flex space-x-4">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeChange(time)}
            className={`px-4 py-2 text-sm font-medium rounded ${
              activeTime === time
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Tabela de Odds */}
      <div className="overflow-x-auto">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Categoria Atual: {activeCategory} | Tempo: {activeTime}
        </h3>
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Casa de Apostas</th>
              <th className="p-2">1</th>
              <th className="p-2">X</th>
              <th className="p-2">2</th>
            </tr>
          </thead>
          <tbody>
            {odds.map((odd, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2 font-medium">{odd.bookmaker}</td>
                <td className="p-2">
                  <span className="px-2 py-1 rounded bg-green-100 text-green-600">
                    {odd.odds.x1.toFixed(2)}
                  </span>
                </td>
                <td className="p-2">
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-600">
                    {odd.odds.x2.toFixed(2)}
                  </span>
                </td>
                <td className="p-2">
                  <span className="px-2 py-1 rounded bg-red-100 text-red-600">
                    {odd.odds.x3.toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OddsCard;
