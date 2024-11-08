import React from 'react';

type LoginCardProps = {
  onClose: () => void;
};

const LoginCard: React.FC<LoginCardProps> = ({ onClose }) => {
  return (
    <div className="flex max-w-3xl w-full mx-auto bg-black rounded-lg shadow-lg overflow-hidden">
      {/* Left Side - Login Options */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">Entre no Sofascore</h2>
        <p className="text-gray-600 mb-6">Centenas de estatísticas. Amor infinito pelo jogo.</p>
        
        {/* Google Sign-In Button */}
        <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg mb-4 hover:bg-gray-500 transition">
          <img src="/google.png" alt="Google" className="w-5 h-5 mr-3" />
          Sign in with Google
        </button>
        
        {/* Facebook Sign-In Button */}
        <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg mb-4 hover:bg-gray-500 transition">
          <img src="/facebook.png" alt="Facebook" className="w-5 h-5 mr-3" />
          Sign in with Facebook
        </button>
        
        {/* Apple Sign-In Button */}
        <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg mb-4 hover:bg-gray-500 transition">
          <img src="/apple-logo.png" alt="Apple" className="w-5 h-5 mr-3" />
          Sign in with Apple
        </button>

        <p className="text-xs text-gray-500 mt-4">
        Ao fazer login, você concorda com nossos <a href="#" className="underline text-blue-600">Termos e Condições</a> e <a href="#" className="underline text-blue-600">Política e Privacidade</a>.
        </p>
      </div>

      {/* Background Image */}
      <div className="w-1/2 relative h-full">
        <img src="/logo-shaftscore.png" alt="" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-8 left-8 text-black">
          <h3 className="text-xl font-bold"></h3>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose} 
          className="absolute top-80 right-4 bg-gray-100 text-black text-xs font-semibold px-3 py-1 rounded opacity-75 hover:opacity-100 transition"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
