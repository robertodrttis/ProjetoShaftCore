import React from "react";

interface NavigationCardProps {
  icon: string; // Caminho para o ícone inicial (ex.: futebol)
  sectionTitle: string; // Título inicial (ex.: FUTEBOL)
  flag: string; // Caminho para a bandeira
  description: string; // Texto dinâmico (ex.: ARGENTINA: TORNEO BETANO · RODADA 25)
}

const NavigationCard: React.FC<NavigationCardProps> = ({
  icon,
  sectionTitle,
  flag,
  description,
}) => {
  return (
    <nav className="bg-white border-b border-gray-300 py-2 px-4 flex items-center space-x-2 text-xs sm:text-xs md:text-sm text-gray-600">
      {/* Ícone inicial e título da seção */}
      <span className="flex items-center space-x-1">
        <img src={icon} alt="Section Icon" className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="font-semibold">{sectionTitle}</span>
      </span>

      {/* Separador */}
      <span>{`>`}</span>

      {/* Bandeira e texto dinâmico */}
      <div className="flex items-center space-x-1">
        <img src={flag} alt="Flag" className="h-4 w-6 sm:h-5 sm:w-8" />
        <span className="font-semibold text-gray-800 truncate">
          {description}
        </span>
      </div>
    </nav>
  );
};

export default NavigationCard;
