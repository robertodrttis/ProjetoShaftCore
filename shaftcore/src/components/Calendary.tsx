import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="p-4 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4 text-center text-gray-800">
        Resultados ao vivo de futebol e programação de hoje
      </h2>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousMonth}
          className="text-[#003f8a] hover:text-[#001f4d] text-2xl"
        >
          <FaChevronLeft />
        </button>
        <span className="font-semibold text-lg text-gray-800">
          {monthNames[month]} {year}
        </span>
        <button
          onClick={handleNextMonth}
          className="text-[#003f8a] hover:text-[#001f4d] text-2xl"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => (
          <div key={day} className="text-gray-600">
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
            className={`p-2 rounded-lg cursor-pointer transition-colors ${
              index + 1 === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear()
                ? "bg-[#003f8a] text-white font-bold shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-[#001f4d] hover:text-white"
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
        className="mt-4 p-3 w-full bg-[#003f8a] text-white rounded-lg hover:bg-[#001f4d] transition-colors font-semibold"
      >
        Hoje
      </button>
    </div>
  );
};

export default Calendary;
