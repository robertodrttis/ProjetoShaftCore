import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Links do Rodapé */}
        <div className="flex flex-wrap space-x-6 text-sm text-gray-700">
          <a href="#" className="hover:text-black transition">
            Condições de utilização
          </a>
          <a href="#" className="hover:text-black transition">
            Política de privacidade
          </a>
          <a href="#" className="hover:text-black transition">
            Contato
          </a>
          <a href="#" className="hover:text-black transition">
            FAQ
          </a>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition" aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-400 transition" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-700 hover:text-black transition" aria-label="TikTok">
            <FaTiktok size={20} />
          </a>
        </div>

        {/* Direitos Autorais */}
        <p className="text-sm text-gray-600 text-center md:text-right">
          &copy; {new Date().getFullYear()} Shaftscore. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;