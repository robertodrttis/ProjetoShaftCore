/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const SettingsCard: React.FC = () => {
  // Estados para armazenar a seleção atual de cada configuração
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [language, setLanguage] = useState("English (UK)");
  const [odds, setOdds] = useState("Decimal");
  const [measurement, setMeasurement] = useState("Metric");
  const [theme, setTheme] = useState("Auto");

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-4">
      {/* Language Section */}
      <div className="mb-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://flagcdn.com/w320/gb.png" // URL para a bandeira (substitua pela imagem correta)
            alt="UK Flag"
            className="w-5 h-5 rounded-full"
          />
          <span className="font-semibold text-gray-800">{language}</span>
        </label>
      </div>

      <hr className="my-4" />

      {/* Odds Section */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Odds</h3>
        <div className="space-y-2">
          {["Decimal", "Fracionário", "Americano"].map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="odds"
                value={option}
                checked={odds === option}
                onChange={() => setOdds(option)}
                className="text-blue-600"
              />
              <span className="text-gray-800">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="my-4" />

      {/* Measurement System Section */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Sistema de medição</h3>
        <div className="space-y-2">
          {["Métrico", "Imperial"].map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="measurement"
                value={option}
                checked={measurement === option}
                onChange={() => setMeasurement(option)}
                className="text-blue-600"
              />
              <span className="text-gray-800">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="my-4" />

      {/* Theme Section */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Temas</h3>
        <div className="space-y-2">
          {["Auto", "Claro", "Escuro"].map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value={option}
                checked={theme === option}
                onChange={() => setTheme(option)}
                className="text-blue-600"
              />
              <span className="text-gray-800">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
