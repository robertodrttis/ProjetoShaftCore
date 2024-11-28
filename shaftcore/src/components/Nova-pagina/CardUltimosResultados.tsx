import React from "react";

const CardUltimosResultados: React.FC = () => {
  const jogos = [
    {
      data: "17.11. 16:00",
      casa: "Santos",
      escudoCasa: "br.png",
      fora: "CRB",
      escudoFora: "br.png",
      golsCasa: 0,
      golsFora: 2,
      resultado: "D",
    },
    {
      data: "11.11. 21:00",
      casa: "Coritiba",
      escudoCasa: "br.png",
      fora: "Santos",
      escudoFora: "br.png",
      golsCasa: 0,
      golsFora: 2,
      resultado: "V",
    },
    {
      data: "02.11. 16:30",
      casa: "Santos",
      escudoCasa: "br.png",
      fora: "Vila Nova",
      escudoFora: "br.png",
      golsCasa: 3,
      golsFora: 0,
      resultado: "V",
    },
    {
      data: "28.10. 19:00",
      casa: "Ituano",
      escudoCasa: "br.png",
      fora: "Santos",
      escudoFora: "br.png",
      golsCasa: 0,
      golsFora: 2,
      resultado: "V",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Últimos Resultados</h2>
      {/* Tabela responsiva */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="px-4 py-2 text-left">Data</th>
              <th className="px-4 py-2 text-left">Casa</th>
              <th className="px-4 py-2 text-center">Placar</th>
              <th className="px-4 py-2 text-left">Fora</th>
              <th className="px-4 py-2 text-center">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {jogos.map((jogo, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-4 py-2 border-b">{jogo.data}</td>
                <td className="px-4 py-2 border-b flex items-center">
                  <img
                    src={jogo.escudoCasa}
                    alt={jogo.casa}
                    className="h-6 w-6 mr-2"
                  />
                  {jogo.casa}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {jogo.golsCasa} - {jogo.golsFora}
                </td>
                <td className="px-4 py-2 border-b flex items-center">
                  <img
                    src={jogo.escudoFora}
                    alt={jogo.fora}
                    className="h-6 w-6 mr-2"
                  />
                  {jogo.fora}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded ${
                      jogo.resultado === "V"
                        ? "bg-green-100 text-green-800"
                        : jogo.resultado === "D"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {jogo.resultado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-6">
        <button className="text-blue-500 hover:underline font-semibold">
          Mostrar mais jogos
        </button>
      </div>
    </div>
  );
};

export default CardUltimosResultados;
