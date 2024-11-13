import React, { useState, useEffect } from "react";

// Função auxiliar para obter os dias do mês
const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

// Função para obter o dia da semana do primeiro dia do mês
const getStartDayOfMonth = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

const Calendary: React.FC = () => {
  const today = new Date();

  // Estados para o mês e ano atuais
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(month, year));
  const [startDay, setStartDay] = useState(getStartDayOfMonth(month, year));

  // Atualiza os dias e o início do mês quando o mês ou ano mudam
  useEffect(() => {
    setDaysInMonth(getDaysInMonth(month, year));
    setStartDay(getStartDayOfMonth(month, year));
  }, [month, year]);

  // Navegação entre meses
  const handlePreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  // Formatação do nome do mês
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-full">
      <h2 className="text-md md:text-lg font-bold mb-4 text-center">
        Resultados ao vivo de futebol e programação de hoje
      </h2>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousMonth}
          className="text-gray-600 hover:text-gray-800 text-xl md:text-2xl"
        >
          {"<"}
        </button>
        <span className="font-semibold text-sm md:text-lg">
          {monthNames[month]} {year}
        </span>
        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-gray-800 text-xl md:text-2xl"
        >
          {">"}
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 md:gap-4 text-center text-xs md:text-sm lg:text-base">
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => (
          <div key={day} className="font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {/* Preenchendo com dias vazios até o início correto do mês */}
        {[...Array(startDay)].map((_, index) => (
          <div key={`empty-${index}`} className="p-2"></div>
        ))}
        {/* Renderizando os dias do mês */}
        {[...Array(daysInMonth)].map((_, index) => (
          <div
            key={index}
            className={`p-2 md:p-2 rounded-full hover:bg-blue-100 cursor-pointer transition-colors ${
              index + 1 === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear()
                ? "bg-blue-500 text-white"
                : "text-gray-800"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setMonth(today.getMonth());
          setYear(today.getFullYear());
        }}
        className="mt-4 p-2 md:p-3 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Hoje
      </button>
    </div>
  );
};

export default Calendary;
