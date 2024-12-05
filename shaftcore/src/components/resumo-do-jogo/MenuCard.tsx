import React, { useState } from "react";
import EstatisticasCard from "@/components/resumo-do-jogo/EstatisticasCard";
import FormacoesCard from "@/components/resumo-do-jogo/FormacoesCard";
import SuplentesCard from "@/components/resumo-do-jogo/SupletesCard";
import CardClassificacao from "@/components/Nova-pagina/CardClassificacao";
import H2HCard from "@/components/resumo-do-jogo/H2HCard";
import NewsCard from "@/components/resumo-do-jogo/NewsCard";
import OddsCard from "@/components/resumo-do-jogo/OddsCard";
import VideoCard from "@/components/resumo-do-jogo/VideoCard";

const MenuCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("JOGO");
  const [activeSubTab, setActiveSubTab] = useState("");

  const tabs = ["JOGO", "ODDS", "H2H", "CLASSIFICAÇÕES", "VÍDEO", "NOTÍCIAS"];
  const buttons = ["SUMÁRIO", "ESTATÍSTICAS", "FORMAÇÕES"];

  const stats = [
    { name: "Posse de Bola", homeValue: "55%", awayValue: "45%" },
    { name: "Tentativas de Gol", homeValue: 27, awayValue: 8 },
    { name: "Chutes no Gol", homeValue: 12, awayValue: 4 },
  ];

  const players = [
    { name: "Arzamendia", position: "Defender", rating: 6.8, image: "/images/player1.png" },
    { name: "Manyoma", position: "Midfielder", rating: 7.0, image: "/images/player2.png" },
  ];

  const substitutes = [
    { name: "Dominguez M.", position: "Goleiro", number: 12, country: "ARG", card: "yellow" },
    { name: "Carrillo E.", position: "Zagueiro", number: 23, country: "BRA", card: undefined },
  ];

  const starters = [
    { name: "Arzamendia", position: "Defender", number: 4, country: "ARG", card: undefined },
    { name: "Manyoma", position: "Midfielder", number: 6, country: "BRA", card: "red" },
  ];

  const coaches = ["Treinador A", "Treinador B"];

  const directMatches = [
    { date: "29.11.24", league: "LPF", homeTeam: "Estudiantes", awayTeam: "River Plate", score: "1 - 2", result: "D" as "D" },
  ];

  const news = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Estudiantes x River Plate: onde assistir ao vivo e escalações do jogo hoje (29/11) pelo Argentino",
      source: "O Liberal",
      date: "29.11.2024 20:00",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col space-y-4 max-w-4xl mx-auto">
      <nav className="flex overflow-x-auto whitespace-nowrap space-x-6 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setActiveSubTab("");
            }}
            className={`py-2 text-sm font-medium ${
              activeTab === tab
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {activeTab === "JOGO" && (
        <div className="flex flex-nowrap justify-start space-x-4 overflow-x-auto">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setActiveSubTab(button)}
              className={`py-2 px-4 rounded-full text-sm font-medium ${
                activeSubTab === button
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
              }`}
            >
              {button}
            </button>
          ))}
        </div>
      )}

      {/* Renderizar SUMÁRIO com Estatísticas e Formações */}
      {activeSubTab === "SUMÁRIO" && (
        <>
          <EstatisticasCard stats={stats} />
          <FormacoesCard
            homeFormation="4-2-3-1"
            awayFormation="4-3-1-2"
            homePlayers={players}
            awayPlayers={players}
          />
        </>
      )}

      {/* Renderizar apenas Estatísticas */}
      {activeSubTab === "ESTATÍSTICAS" && <EstatisticasCard stats={stats} />}

      {/* Renderizar apenas Formações */}
      {activeSubTab === "FORMAÇÕES" && (
        <FormacoesCard
          homeFormation="4-2-3-1"
          awayFormation="4-3-1-2"
          homePlayers={players}
          awayPlayers={players}
        />
      )}

      {/* Conteúdo padrão da aba JOGO */}
      {!activeSubTab && activeTab === "JOGO" && (
        <div className="space-y-4">
          <OddsCard />
          <H2HCard team1="Estudiantes" team2="River Plate" directMatches={directMatches} />
          <CardClassificacao />
          <NewsCard news={news} />
        </div>
      )}

      {activeTab === "ODDS" && <OddsCard />}
      {activeTab === "H2H" && <H2HCard team1="Estudiantes" team2="River Plate" directMatches={directMatches} />}
      {activeTab === "CLASSIFICAÇÕES" && <CardClassificacao />}
      {activeTab === "NOTÍCIAS" && <NewsCard news={news} />}
      {activeTab === "VÍDEO" && <VideoCard videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" />}
    </div>
  );
};

export default MenuCard;
