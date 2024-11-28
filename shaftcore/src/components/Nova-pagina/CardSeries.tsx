import React, { useState } from "react";
import { FaFutbol, FaThumbtack } from "react-icons/fa";

const CardSerieB: React.FC = () => {
  const [activeTab, setActiveTab] = useState("RESUMO");

  const tabs = [
    { id: "RESUMO", label: "Resumo" },
    { id: "NOTÍCIAS", label: "Notícias" },
    { id: "RESULTADOS", label: "Resultados" },
    { id: "CALENDÁRIO", label: "Calendário" },
    { id: "CLASSIFICAÇÃO", label: "Classificação" },
    { id: "ARQUIVO", label: "Arquivo" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "RESUMO":
        return <p>Conteúdo da aba Resumo.</p>;
      case "NOTÍCIAS":
        return (
          <div className="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
            <img
              src="/.png" // Caminho ajustado
              alt="Notícia"
              className="h-24 w-32 md:h-32 md:w-48 rounded object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">
                Rodada final da Série B é destaque das transmissões do ShaftScore
                no final de semana
              </h2>
              <div className="text-gray-500 text-sm flex items-center space-x-2 mt-2">
                <img
                  src="/Br.png" // Caminho ajustado
                  alt="ShaftScore"
                  className="h-4 w-4"
                />
                <span>ShaftScore Notícias</span>
                <span>•</span>
                <span>Há 8 h</span>
              </div>
              <div className="mt-3 text-gray-400 space-y-2">
                <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        );
      case "RESULTADOS":
        return <p>Conteúdo da aba Resultados.</p>;
      case "CALENDÁRIO":
        return (
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Próximos Jogos</h2>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/Br.png" // Caminho ajustado
                alt="Time 1"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-center">
                <p className="text-sm font-semibold">Time 1</p>
                <p className="text-xs text-gray-500">vs</p>
                <p className="text-sm font-semibold">Time 2</p>
              </div>
              <div className="text-gray-500 text-sm">10:00 AM</div>
            </div>
          </div>
        );
      case "CLASSIFICAÇÃO":
        return <p>Conteúdo da aba Classificação.</p>;
      case "ARQUIVO":
        return <p>Conteúdo da aba Arquivo.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md max-w-full md:max-w-3xl mx-auto mt-4">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 mb-4 space-x-2 flex-wrap justify-center md:justify-start">
        <FaFutbol className="text-base md:text-lg" />
        <span>Futebol</span>
        <span>&gt;</span>
        <img src="/images/logoBr.png" alt="Brasil" className="h-4 w-6 md:h-5 md:w-7" />
        <span>Brasil</span>
      </div>

      {/* Detalhes do Campeonato */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-6 space-y-4 md:space-y-0 md:space-x-4">
        <img
          src="Br.png" // Caminho ajustado
          alt="Série B"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-bold flex items-center justify-center md:justify-start">
            Série B
            <FaThumbtack className="ml-2 text-blue-500 text-sm md:text-base" />
          </h1>
          <p className="text-gray-600 text-sm md:text-base">2024</p>
        </div>
      </div>

      {/* Menu de Navegação */}
      <nav className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm md:text-base pb-2 ${
              activeTab === tab.id
                ? "text-red-500 font-semibold border-b-2 border-red-500"
                : "text-gray-600 hover:text-black transition"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Conteúdo Dinâmico */}
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default CardSerieB;
