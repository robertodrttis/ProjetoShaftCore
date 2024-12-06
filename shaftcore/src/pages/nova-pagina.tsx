import React from "react";
import Header from "../components/Nova-pagina/Header";
import NavBar from "../components/Nova-pagina/NavBar";
import CardCampeonatos from "@/components/Nova-pagina/CardCampeonatos";
import CardLigasFixadas from "@/components/Nova-pagina/CardLigasFixadas";
import CardMinhasEquipes from "@/components/Nova-pagina/CardMinhasEquipes";
import CardPaises from "@/components/Nova-pagina/CardPaises";
import CardSerieB from "@/components/Nova-pagina/CardSeries";
import CardProximosJogosSerieB from "@/components/Nova-pagina/ProximoJogoCard";
import Footer from "../components/Footer";
import CardTransferencias from "../components/Nova-pagina/CardClassificacao";
import CardUltimosResultados from "@/components/Nova-pagina/CardUltimosResultados";
import CardClassificacao from "../components/Nova-pagina/CardClassificacao";

const NovaPagina: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background e conteúdo principal */}
      <div
        className="flex-grow bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
      >
        <Header />
        <NavBar />

        {/* Conteúdo principal com grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Cards do lado esquerdo */}
          <div className="space-y-6 lg:col-span-1 flex flex-col items-center lg:items-start lg:mr-6">
            <CardCampeonatos />
            <CardLigasFixadas />
            <CardMinhasEquipes />
            <CardPaises />
          </div>

          {/* Cards centrais */}
          <div className="lg:col-span-3 space-y-6">
            <CardSerieB />
            <CardProximosJogosSerieB />
            <CardUltimosResultados />
            <CardClassificacao />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NovaPagina;
