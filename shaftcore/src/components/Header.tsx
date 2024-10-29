// components/Header.js
import Image from "next/image";
import { FaUser, FaHeart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Search Field */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-md bg-gray-700 text-white outline-none"
        />
      </div>

      {/* User and Favorites */}
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <FaUser size={24} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <FaHeart size={24} />
        </button>
      </div>
    </header>
  );
}
