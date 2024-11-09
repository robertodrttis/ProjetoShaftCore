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
      <div className="mt-2 flex justify-center items-start space-x-12 mb-5">
        {/* Componente à esquerda */}
        <div className="w-full lg:w-1/4 p-4 lg:p-0">
          <Calendary />
          <TopLeaguesCard />
          <div className="mb-5">
            <RankingsCard />
          </div>
        </div>

        {/* Componente de Partidas ao Vivo no centro */}
        <div className="flex-1 max-w-lg space-y-5">
          <div className="mb-5">
            <LiveMatches />
          </div>
        </div>

        {/* Componente de Placar e TopPlayers à direita */}
        <div className="max-w-lg mr-16 mb-5" style={{ width: "400px" }}>
          <Scoreboard />
          <div className="mt-5">
            <TopPlayers />
            <OddsCard />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
