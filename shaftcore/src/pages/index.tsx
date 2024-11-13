// pages/index.tsx

import Header from "@/components/Header";
import LiveMatches from "@/components/LiveMatches";
import NavBar from "@/components/NavBar";
import Scoreboard from "@/components/Scoreboard";
import Calendary from "@/components/Calendary";
import TopLeaguesCard from "@/components/TopLeaguesCard";
import RankingsCard from "@/components/RankingsCard";
import Footer from "@/components/Footer";
import TopPlayers from "@/components/TopPlayers";
import OddsCard from "../components/OddsCard";

export default function Home() {
  return (
    <div style={{ background: "#edf1f6" }}>
      <Header /> {/* Adiciona o Header */}
      <NavBar />
      <div className="mt-2 flex flex-wrap justify-center items-start space-y-6 lg:space-y-0 lg:space-x-12 mb-5">
        {/* Componente à esquerda */}
        <div className="w-full lg:w-1/4 p-4 lg:p-0 space-y-6">
          <Calendary />
          <TopLeaguesCard />
          <RankingsCard />
        </div>

        {/* Componente de Partidas ao Vivo no centro */}
        <div className="w-full lg:flex-1 max-w-lg space-y-5">
          <LiveMatches />
        </div>

        {/* Componente de Placar, TopPlayers e Odds à direita */}
        <div className="w-full lg:w-1/4 p-4 lg:p-0 space-y-6">
          <Scoreboard />
          <TopPlayers />
          <OddsCard />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
