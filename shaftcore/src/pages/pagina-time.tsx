import React, { useState } from "react";
import Header from "../components/Nova-pagina/Header";
import NavBar from "../components/Nova-pagina/NavBar";
import Footer from "../components/Footer";
import CardCampeonatos from "@/components/Nova-pagina/CardCampeonatos";
import CardLigasFixadas from "@/components/Nova-pagina/CardLigasFixadas";
import CardMinhasEquipes from "@/components/Nova-pagina/CardMinhasEquipes";
import CardPaises from "@/components/Nova-pagina/CardPaises";
import TeamCard from "@/components/Nova-pagina/TeamCard";
import CardUltimosResultados from "@/components/Nova-pagina/CardUltimosResultados";
import CalendarioJogos from "@/components/Nova-pagina/CalendarioJogos";
import NewsCard from "@/components/Nova-pagina/NewsCard";
import CardClassificacao from "@/components/Nova-pagina/CardClassificacao";
import CardTransferencias from "@/components/Nova-pagina/CardTransferencias";
import CardElenco from "@/components/Nova-pagina/CardElenco";

const NovaPagina: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("RESUMO");

  const news = [
    {
      id: 1,
      image: "https://via.placeholder.com/64",
      title:
        "Guilherme cita bastidores da demissão de Carille no Santos e elogia resiliência do técnico: 'Era pesado'",
      source: "UOL Esporte",
      time: "Há 24 min",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/64",
      title: "Santos contrata gerente de futebol vindo do Coritiba",
      source: "Terra",
      time: "Há 58 min",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div
        className="flex-grow bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
      >
        <Header />
        <NavBar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Cards do lado esquerdo */}
          <div className="space-y-4 lg:col-span-1">
            <CardCampeonatos />
            <CardLigasFixadas />
            <CardMinhasEquipes />
            <CardPaises />
          </div>

          {/* Cards centrais */}
          <div className="lg:col-span-3 space-y-6">
            <TeamCard
              logo="SantosLogo.png"
              teamName="Santos Futebol Clube"
              stadium="Vila Belmiro"
              city="Santos"
              capacity={16068}
              tabs={[
                "RESUMO",
                "NOTÍCIAS",
                "RESULTADOS",
                "CALENDÁRIO",
                "CLASSIFICAÇÃO",
                "TRANSFERÊNCIAS",
                "ELENCO",
              ]}
              onTabClick={(tab) => setActiveTab(tab)}
            />

            {/* Renderizar conteúdo com base na aba ativa */}
            {activeTab === "RESUMO" && (
              <div className="space-y-6">
                <NewsCard news={news} />
                <CardUltimosResultados />
                <CalendarioJogos games={[]} />
                <CardClassificacao />
                <CardTransferencias />
                <CardElenco />
              </div>
            )}
            {activeTab === "NOTÍCIAS" && <NewsCard news={news} />}
            {activeTab === "RESULTADOS" && <CardUltimosResultados />}
            {activeTab === "CALENDÁRIO" && <CalendarioJogos games={[]} />}
            {activeTab === "CLASSIFICAÇÃO" && <CardClassificacao />}
            {activeTab === "TRANSFERÊNCIAS" && <CardTransferencias />}
            {activeTab === "ELENCO" && <CardElenco />}
          </div>
        </div>
      </div>

      {/* Espaçamento antes do Footer */}
      <div className="mt-16"></div>

      <Footer />
    </div>
  );
};

export default NovaPagina;
