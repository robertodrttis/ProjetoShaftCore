// components/Scoreboard.js
import Image from "next/image";
import { useState, useEffect } from "react";
import Time from "../../public/it.png";
import TimeBr from "../../public/br.png";

export default function Scoreboard() {
  const [time, setTime] = useState("00:00:00");

  // Atualiza o tempo de partida em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      {/* Cabeçalho com o título */}
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold">Partida em destaque</h3>
      </div>

      {/* Informação do jogo */}
      <div className="flex items-center justify-between bg-gray-100 p-4">
        {/* Time da casa */}
        <div className="flex flex-col items-center">
          <Image src={Time} alt="Team 1" width={42} height={42} />
          <p className="text-sm mt-2 font-medium">Haras El Hedoud</p>
        </div>

        {/* Hora e Tempo em tempo real */}
        <div className="text-center mr-4">
          <p className="text-2xl font-bold">11:00</p>
          <p className="text-xs text-gray-500">Today</p>
          <p className="text-sm text-gray-600">{time}</p>
        </div>

        {/* Time visitante */}
        <div className="flex flex-col items-center">
          <Image src={TimeBr} alt="Team 2" width={42} height={42} />
          <p className="text-sm mt-2 font-medium">Smouha</p>
        </div>
      </div>

      {/* Card de apostas */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 p-4 flex flex-col rounded-b-xl">
        <div className="flex justify-between items-center text-sm font-semibold">
          <span>Tempo total</span>
          <span className="bg-white px-2 py-1 rounded-md text-gray-700 text-xs font-bold">
            novibet
          </span>
        </div>
        <div className="flex justify-around mt-2">
          <div className="bg-white rounded-md p-2 text-center shadow-md w-1/3">
            <p className="font-medium">1</p>
            <p className="text-sm text-gray-600">3.00</p>
          </div>
          <div className="bg-white rounded-md p-2 text-center shadow-md w-1/3">
            <p className="font-medium">X</p>
            <p className="text-sm text-gray-600">2.80</p>
          </div>
          <div className="bg-white rounded-md p-2 text-center shadow-md w-1/3">
            <p className="font-medium">2</p>
            <p className="text-sm text-gray-600">2.38</p>
          </div>
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          Jogue com responsabilidade maiores de 18 anos
        </p>
      </div>
    </div>
  );
}
