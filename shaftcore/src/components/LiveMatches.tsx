// components/LiveMatches.js
import Image from "next/image";
import { useState } from "react";
import { FaStar, FaDotCircle } from "react-icons/fa";
import Time from "../../public/it.png";
import TimeBr from "../../public/br.png";

export default function LiveMatches() {
  const [showOdds, setShowOdds] = useState(false);

  const handleToggleOdds = () => {
    setShowOdds(!showOdds);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-200">
      {/* Filtros para "Todas" e "Em tempo real" */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex space-x-4">
          <button className="flex items-center text-green-600 font-semibold">
            <span className="bg-green-200 rounded-full px-3 py-1 text-green-600">
              Todas
            </span>
          </button>
          <button className="flex items-center text-red-600 font-semibold">
            <FaDotCircle className="mr-1" />
            Agora (153)
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Mostrar probabilidades</span>
          {/* <label
            className="relative inline-flex items-center cursor-pointer"
            style={{ zIndex: "1;" }}
          >
            <input
              type="checkbox"
              className="sr-only peer"
              checked={showOdds}
              onChange={handleToggleOdds}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600">
              <div
                className={`dot absolute top-0.5 left-1 bg-white w-5 h-5 rounded-full transition-transform ${
                  showOdds ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label> */}
        </div>
      </div>

      {/* Partidas Recomendadas */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Recomendado para você</h3>

        {/* Partida 1 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image src={TimeBr} alt="Team 1" width={42} height={42} />
            <div className="ml-3">
              <p className="text-sm font-medium">Brazil</p>
              <p className="text-xs text-gray-500">Brasileirão Série A</p>
            </div>
          </div>
          <p className="text-xs text-green-600 font-semibold">
            Classificações do ShaftScore
          </p>
          <FaStar className="text-gray-400" />
        </div>

        <div className="pl-10">
          <div className="flex items-center justify-between">
            <span className="text-sm">19:00</span>
            <span className="font-semibold">Internacional</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Flamengo</span>
          </div>
        </div>

        <hr className="my-4" />

        {/* Partida 2 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image src={Time} alt="Team 1" width={42} height={42} />
            <div className="ml-3">
              <p className="text-sm font-medium">Italy</p>
              <p className="text-xs text-gray-500">Serie A</p>
            </div>
          </div>
          <p className="text-xs text-green-600 font-semibold">
            Avaliações do ShaftScore
          </p>
          <FaStar className="text-gray-400" />
        </div>

        <div className="pl-10">
          <div className="flex items-center justify-between">
            <span className="text-sm">14:30</span>
            <span className="font-semibold">Empoli</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Inter</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm">14:30</span>
            <span className="font-semibold">Venezia</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Udinese</span>
          </div>
        </div>
        <hr className="my-4" />

        {/* Partida 1 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image src={TimeBr} alt="Team 1" width={42} height={42} />
            <div className="ml-3">
              <p className="text-sm font-medium">Brazil</p>
              <p className="text-xs text-gray-500">Brasileirão Série A</p>
            </div>
          </div>
          <p className="text-xs text-green-600 font-semibold">
            Classificações do ShaftScore
          </p>
          <FaStar className="text-gray-400" />
        </div>

        <div className="pl-10">
          <div className="flex items-center justify-between">
            <span className="text-sm">19:00</span>
            <span className="font-semibold">Internacional</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Flamengo</span>
          </div>
        </div>

        <hr className="my-4" />

        {/* Partida 2 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image src={Time} alt="Team 1" width={42} height={42} />
            <div className="ml-3">
              <p className="text-sm font-medium">Italy</p>
              <p className="text-xs text-gray-500">Serie A</p>
            </div>
          </div>
          <p className="text-xs text-green-600 font-semibold">
            Avaliações do ShaftScore
          </p>
          <FaStar className="text-gray-400" />
        </div>

        <div className="pl-10">
          <div className="flex items-center justify-between">
            <span className="text-sm">14:30</span>
            <span className="font-semibold">Empoli</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Inter</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm">14:30</span>
            <span className="font-semibold">Venezia</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Udinese</span>
          </div>
        </div>
        <hr className="my-4" />

        {/* Partida 1 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image src={TimeBr} alt="Team 1" width={42} height={42} />
            <div className="ml-3">
              <p className="text-sm font-medium">Brazil</p>
              <p className="text-xs text-gray-500">Brasileirão Série A</p>
            </div>
          </div>
          <p className="text-xs text-green-600 font-semibold">
            Classificações do ShaftScore
          </p>
          <FaStar className="text-gray-400" />
        </div>

        <div className="pl-10">
          <div className="flex items-center justify-between">
            <span className="text-sm">19:00</span>
            <span className="font-semibold">Internacional</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Flamengo</span>
          </div>
        </div>

        <hr className="my-4" />

        {/* Partida 2 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image src={Time} alt="Team 1" width={42} height={42} />
            <div className="ml-3">
              <p className="text-sm font-medium">Italy</p>
              <p className="text-xs text-gray-500">Serie A</p>
            </div>
          </div>
          <p className="text-xs text-green-600 font-semibold">
            Avaliações do ShaftScore
          </p>
          <FaStar className="text-gray-400" />
        </div>

        <div className="pl-10">
          <div className="flex items-center justify-between">
            <span className="text-sm">14:30</span>
            <span className="font-semibold">Empoli</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Inter</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm">14:30</span>
            <span className="font-semibold">Venezia</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Udinese</span>
          </div>
        </div>
        <hr className="my-4" />

        {/* Partida 1 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image src={TimeBr} alt="Team 1" width={42} height={42} />
            <div className="ml-3">
              <p className="text-sm font-medium">Brazil</p>
              <p className="text-xs text-gray-500">Brasileirão Série A</p>
            </div>
          </div>
          <p className="text-xs text-green-600 font-semibold">
            Classificações do ShaftScore
          </p>
          <FaStar className="text-gray-400" />
        </div>

        <div className="pl-10">
          <div className="flex items-center justify-between">
            <span className="text-sm">19:00</span>
            <span className="font-semibold">Internacional</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Flamengo</span>
          </div>
        </div>

        <hr className="my-4" />

        {/* Partida 2 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image src={Time} alt="Team 1" width={42} height={42} />
            <div className="ml-3">
              <p className="text-sm font-medium">Italy</p>
              <p className="text-xs text-gray-500">Serie A</p>
            </div>
          </div>
          <p className="text-xs text-green-600 font-semibold">
            Avaliações do ShaftScore
          </p>
          <FaStar className="text-gray-400" />
        </div>

        <div className="pl-10">
          <div className="flex items-center justify-between">
            <span className="text-sm">14:30</span>
            <span className="font-semibold">Empoli</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Inter</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm">14:30</span>
            <span className="font-semibold">Venezia</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">-</span>
            <span className="font-semibold">Udinese</span>
          </div>
        </div>
      </div>
    </div>
  );
}
