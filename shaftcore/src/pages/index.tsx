import Header from "@/components/Header";
import LiveMatches from "@/components/LiveMatches";
import NavBar from "@/components/NavBar";
import Scoreboard from "@/components/Scoreboard";
import Calendary from "@/components/Calendary";
import TopLeaguesCard from "@/components/TopLeaguesCard";
import RankingsCard from "@/components/RankingsCard";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div style={{ background: "#edf1f6" }}>
      <Header /> {/* Adiciona o Header */}
      <NavBar />
      <div className="mt-2 flex justify-center items-start space-x-12 mb-5">

        {/*Componente a esquerda*/}
      <div className="w-full lg:w-1/4 p-4 lg:p-0">
            <Calendary />
            <TopLeaguesCard/>
            <RankingsCard/>
        </div>
    
      {/* Componente de Partidas ao Vivo no centro */}
        <div className="flex-1 max-w-lg mb-5">
          <LiveMatches />
        </div>

        {/* Componente de Placar à direita com margem adicional à esquerda */}
        <div className="max-w-lg mr-16 mb-5" style={{ width: "400px" }}>
          <Scoreboard />
        </div>
      </div>
        {/* Footer*/}
        <div className="">
        <Footer />
    </div>
    </div>
  );
}
