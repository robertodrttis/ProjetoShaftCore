import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <Header /> {/* Adiciona o Header */}
      <NavBar></NavBar>
      <div className="p-4">
        <p>Projeto Inicial</p>{" "}
        {/* Mantém o texto inicial ou personalize como desejar */}
      </div>
    </div>
  );
}
