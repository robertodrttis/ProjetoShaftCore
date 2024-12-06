import React, { useEffect, useState } from "react";

interface Team {
  name: string;
  logo: string;
}

interface PartidaJogoProps {
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
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
        <img src="br.png" alt={`${homeTeam.name} logo`} className="h-16 w-16" />
        <span className="font-bold">{homeTeam.name}</span>
      </div>

      {/* Informações do jogo */}
      <div className="text-center">
        <div className="text-lg font-semibold">{score}</div>
        <div className="text-gray-500">{status}</div>
        <div className="text-sm text-gray-400 mt-1">{currentDateTime}</div>
      </div>

      {/* Time visitante */}
      <div className="flex flex-col items-center space-y-2">
        <img src="br.png" alt={`${awayTeam.name} logo`} className="h-16 w-16" />
        <span className="font-bold">{awayTeam.name}</span>
      </div>
    </div>
  );
};

export default PartidaJogo;
