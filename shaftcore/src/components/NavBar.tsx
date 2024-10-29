// components/NavBar.js
import {
  FaFutbol,
  FaBasketballBall,
  FaVolleyballBall,
  FaUser,
  FaEllipsisH,
  FaCog,
} from "react-icons/fa";
import {
  GiGloves,
  GiSoccerField,
  GiTennisRacket,
  GiCarWheel,
  GiWaterPolo,
  GiAmericanFootballBall,
  GiBaseballBat,
  GiHandBag,
  GiPassport,
  GiHockey,
  GiBrokenTablet,
} from "react-icons/gi";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white overflow-x-auto">
      <div className="flex flex-grow space-x-12 justify-start">
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <FaFutbol size={24} />
          <span className="text-xs">Football</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <FaBasketballBall size={24} />
          <span className="text-xs">Basketball</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <FaVolleyballBall size={24} />
          <span className="text-xs">Volleyball</span>
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
          <span className="text-xs">Tennis</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiCarWheel size={24} />
          <span className="text-xs">Motorsport</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiBrokenTablet size={24} />
          <span className="text-xs">Table Tennis</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiWaterPolo size={24} />
          <span className="text-xs">Water Polo</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiHockey size={24} />
          <span className="text-xs">Ice Hockey</span>
        </button>
        <button className="flex flex-col items-center space-y-1 hover:text-yellow-400">
          <GiPassport size={24} />
          <span className="text-xs">Esports</span>
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
          <span className="text-xs">More</span>
        </button>
      </div>
      <button className="mb-2 p-2 hover:text-yellow-400">
        <FaCog size={24} />
      </button>
    </nav>
  );
}
