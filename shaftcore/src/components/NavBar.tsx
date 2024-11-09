// components/NavBar.js
import {
  FaFutbol,
  FaBasketballBall,
  FaVolleyballBall,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";
import {
  GiGloves,
  GiSoccerField,
  GiTennisRacket,
  GiCarWheel,
  GiWaterPolo,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  GiAmericanFootballBall,
  GiBaseballBat,
  GiHandBag,
  GiPassport,
  GiHockey,
  GiBrokenTablet,
} from "react-icons/gi";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-center text-white overflow-x-auto ">
      <div className="flex flex-grow space-x-12 justify-center">
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <FaFutbol size={24} />
          <span className="text-xs">Futebol</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <FaBasketballBall size={24} />
          <span className="text-xs">Basquete</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <FaVolleyballBall size={24} />
          <span className="text-xs">Voley</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiGloves size={24} />
          <span className="text-xs">MMA</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiSoccerField size={24} />
          <span className="text-xs">Futsal</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiTennisRacket size={24} />
          <span className="text-xs">Tênis</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiCarWheel size={24} />
          <span className="text-xs">Motorsport</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiBrokenTablet size={24} />
          <span className="text-xs">Tênis de Mesa</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiWaterPolo size={24} />
          <span className="text-xs">Polo</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiHockey size={24} />
          <span className="text-xs">Hockey</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiPassport size={24} />
          <span className="text-xs">Esportes Online</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiHandBag size={24} />
          <span className="text-xs">Handball</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiBaseballBat size={24} />
          <span className="text-xs">Baseball</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <FaEllipsisH size={24} />
          <span className="text-xs">Mais</span>
        </button>
      </div>
    </nav>
  );
}
