// TeamCard.tsx
import React, { useState } from "react";

interface TeamCardProps {
  logo: string;
  teamName: string;
  stadium: string;
  city: string;
  capacity?: number;
  tabs: string[];
  onTabClick: (tab: string) => void; // Adicionamos esta prop
}

const TeamCard: React.FC<TeamCardProps> = ({
  logo,
  teamName,
  stadium,
  city,
  capacity = 0,
  tabs,
  onTabClick,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      {/* Header do Card */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="text-gray-600 text-sm mr-2">TIME DO BRASIL</span>
        </div>
      </div>

      {/* Corpo Principal */}
      <div className="flex items-center mb-4">
        <img src={logo} alt={teamName} className="h-16 w-16 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-bold">{teamName}</h2>
          <p className="text-sm text-gray-600">
            Estádio: <span className="text-blue-600">{stadium}</span> ({city})
          </p>
          <p className="text-sm text-gray-600">
            Capacidade: <span className="font-bold">{capacity.toLocaleString()}</span>
          </p>
        </div>
      </div>

      {/* Abas */}
      <div className="flex items-center overflow-x-auto border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-sm px-3 py-2 transition-all ${
              index === activeTabIndex
                ? "text-red-500 font-semibold"
                : "text-gray-600 hover:text-red-500"
            }`}
            onClick={() => {
              setActiveTabIndex(index);
              onTabClick(tab); // Notifica o componente pai
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
