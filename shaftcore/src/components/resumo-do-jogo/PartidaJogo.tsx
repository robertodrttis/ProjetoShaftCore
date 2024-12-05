import React, { useEffect, useState } from "react";

interface PartidaJogoProps {
  homeTeam: {
    name: string;
  };
  awayTeam: {
    name: string;
  };
  score: string;
  status: string;
}

const PartidaJogo: React.FC<PartidaJogoProps> = ({
  homeTeam,
  awayTeam,
  score,
  status,
}) => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    // Atualiza a data e hora dinâmicas
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentDateTime(`${formattedDate} ${formattedTime}`);
    }, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between max-w-4xl mx-auto">
      {/* Time da casa */}
      <div className="flex flex-col items-center space-y-2">
        <img
          src="/br.png" // Caminho para o logo na pasta public
          alt={homeTeam.name}
          className="h-16 w-16 rounded-lg"
        />
        <span className="text-sm font-semibold text-gray-700">
          {homeTeam.name}
        </span>
      </div>

      {/* Informações do Jogo */}
      <div className="flex flex-col items-center text-center">
        <span className="text-sm text-gray-500">{currentDateTime}</span>
        <span className="text-3xl font-bold text-black">{score}</span>
        <span className="text-sm text-gray-500 uppercase">{status}</span>
      </div>

      {/* Time visitante */}
      <div className="flex flex-col items-center space-y-2">
        <img
          src="/br.png" // Caminho para o logo na pasta public
          alt={awayTeam.name}
          className="h-16 w-16 rounded-lg"
        />
        <span className="text-sm font-semibold text-gray-700">
          {awayTeam.name}
        </span>
      </div>
    </div>
  );
};

export default PartidaJogo;
