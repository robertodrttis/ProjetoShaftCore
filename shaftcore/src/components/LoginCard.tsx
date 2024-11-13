/* eslint-disable @next/next/no-img-element */
import React from "react";

type LoginCardProps = {
  onClose: () => void;
};

const LoginCard: React.FC<LoginCardProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Fecha o modal ao clicar no overlay
    >
      <div
        className="flex flex-col md:flex-row max-w-sm md:max-w-3xl w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Evita que o clique no card feche o modal
      >
        {/* Left Side - Login Options */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-xl text-black font-bold mb-2">
            Faça login no Shaftscore
          </h2>
          <p className="text-gray-600 mb-6">
            Centenas de estatísticas. Amor infinito pelo jogo.
          </p>

          {/* Google Button */}
          <button className="flex items-center justify-center w-full p-3 border text-black border-gray-300 rounded-lg mb-4 hover:bg-gray-100 transition">
            <img src="../../google.png" alt="Google" className="w-5 h-5 mr-3" />
            Faça login com o Google
          </button>

          {/* Facebook Button */}
          <button className="flex items-center justify-center w-full p-3 border text-black border-gray-300 rounded-lg mb-4 hover:bg-gray-100 transition">
            <img
              src="../../facebook.png"
              alt="Facebook"
              className="w-5 h-5 mr-3"
            />
            Faça login com o Facebook
          </button>

          {/* Apple Button */}
          <button className="flex items-center justify-center w-full p-3 border text-black border-gray-300 rounded-lg mb-4 hover:bg-gray-100 transition">
            <img
              src="../../AppleLoginCard.png"
              alt="Apple"
              className="w-5 h-5 mr-3"
            />
            Faça login com a Apple
          </button>

          <p className="text-xs text-gray-500 mt-4">
            Ao fazer login, você concorda com nossos{" "}
            <a href="#" className="underline text-blue-600">
              Termos e Condições
            </a>{" "}
            e{" "}
            <a href="#" className="underline text-blue-600">
              Política de Privacidade.
            </a>
            .
          </p>
        </div>

        {/* Right Side - Background Video (aparece apenas em telas médias e maiores) */}
        <div className="hidden md:block w-1/2 relative">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/videoLoginCard.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <button
            onClick={onClose}
            className="absolute bottom-4 right-4 bg-transparent rounded-full border border-black text-black opacity-75 text-xs font-semibold px-4 py-2 hover:opacity-100 transition"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
