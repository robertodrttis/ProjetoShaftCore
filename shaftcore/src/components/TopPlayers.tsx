// components/TopPlayers.js
import Image from "next/image";
import Ima from "../../public/image.png";

export default function TopPlayers() {
  const players = [
    {
      id: 1,
      name: "Renato Steffen",
      team: "Lugano vs. Yverdon-Sport",
      score: 9.9,
      imgSrc: "/player1.png", // Substitua pelo caminho correto da imagem do jogador
      heatmapSrc: "/heatmap1.png", // Substitua pelo caminho correto da imagem do mapa de calor
    },
    {
      id: 2,
      name: "Ryan Gauld",
      team: "Vancouver vs. Los Angeles",
      score: 9.6,
      imgSrc: "/player2.png", // Substitua pelo caminho correto da imagem do jogador
    },
    {
      id: 3,
      name: "Vladyslav Vanat",
      team: "Dynamo Kyiv vs. Inhulets",
      score: 9.3,
      imgSrc: "/player3.png", // Substitua pelo caminho correto da imagem do jogador
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white rounded-xl p-4">
      <h3 className="text-lg font-bold mb-2 text-blue-400">
        Melhores jogadores
      </h3>
      <p className="text-xs mb-4 text-gray-400">
        Jogadores com melhor classificação em partidas recentes
      </p>

      {players.map((player, index) => (
        <div key={player.id} className="mb-4 p-3 rounded-lg bg-gray-800">
          <div className="flex items-center mb-2">
            <span className="text-lg font-bold mr-3">{index + 1}</span>
            <Image
              src={Ima}
              alt="Team 1"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-3 flex-1">
              <p className="font-semibold">{player.name}</p>
              <p className="text-sm text-gray-400">{player.team}</p>
            </div>
            <span className="mr-5 text-blue-400 font-bold text-lg bg-gray-700 px-2 py-1 rounded-md">
              {player.score}
            </span>
          </div>
          {/* {player.heatmapSrc && (
            <div className="mt-2">
              <Image
                src={player.heatmapSrc}
                alt="Heatmap"
                width={280}
                height={140}
                className="rounded-lg"
              />
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
}
