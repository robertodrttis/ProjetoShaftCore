import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div style={{ background: "#edf1f6" }}>
      <Header /> {/* Adiciona o Header */}
      <NavBar></NavBar>
      <div className="p-4" style={{ background: "#edf1f6" }}>
        {/* Mantém o texto inicial ou personalize como desejar */}
      </div>
    </div>
  );
}
