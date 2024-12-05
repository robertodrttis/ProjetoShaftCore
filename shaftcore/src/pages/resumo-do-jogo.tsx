import React from "react";
import HeaderCard from "@/components/resumo-do-jogo/header";
import NavigationCard from "@/components/resumo-do-jogo/nav";
import PartidaJogo from "@/components/resumo-do-jogo/PartidaJogo";
import MenuCard from "@/components/resumo-do-jogo/MenuCard";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderCard />
      <NavigationCard
        icon="br.png"
        sectionTitle="Futebol"
        flag="br.png"
        description="Brasil: Torneio · Rodada 25"
      />
      <main className="flex-grow p-4 space-y-4">
        <PartidaJogo
          homeTeam={{
            name: "Estudiantes",
            logo: "/path/to/estudiantes-logo.png",
          }}
          awayTeam={{
            name: "River Plate",
            logo: "/path/to/river-plate-logo.png",
          }}
          date="29.11.2024"
          time="21:00"
          score="1 - 2"
          status="Encerrado"
        />
        <MenuCard />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 ShaftScore. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
