import React, { useState, useRef, useEffect } from "react";

const ProfileModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Fecha o modal ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl p-6 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center bg-gray-900 text-white p-4 rounded-md">
                <h2 className="text-lg font-bold text-center mb-4">
                  Baixe o ShaftScore para iOS ou Android
                </h2>
                <div className="flex flex-col items-center">
                  <img
                    src="logo-shaftscore.png"
                    alt="QR Code"
                    className="w-32 h-32 mb-4"
                  />
                  <p>Escanear para baixar</p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-4 text-center">
                  Destrave a Experiência Completa
                </h2>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Rápido, Grátis e Cheio de Recompensas. Cadastre-se em segundos!
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <button className="flex items-center justify-center w-full py-2 border rounded-md text-gray-700 hover:bg-gray-100">
                    <img
                      src="../../"
                      alt="Google"
                      className="w-6 h-6 mr-2"
                    />
                    Continuar com Google
                  </button>
                  <button className="flex items-center justify-center w-full py-2 border rounded-md text-gray-700 hover:bg-gray-100">
                    <img
                      src="/images/AppleLoginCard.png"
                      alt="Apple"
                      className="w-6 h-6 mr-2"
                    />
                    Continuar com Apple
                  </button>
                  <button className="flex items-center justify-center w-full py-2 border rounded-md text-gray-700 hover:bg-gray-100">
                    <img
                      src="/images/facebook-icon.png"
                      alt="Facebook"
                      className="w-6 h-6 mr-2"
                    />
                    Continuar com Facebook
                  </button>
                  <button className="flex items-center justify-center w-full py-2 border rounded-md text-gray-700 hover:bg-gray-100">
                    <img
                      src="/images/email-icon.png"
                      alt="Email"
                      className="w-6 h-6 mr-2"
                    />
                    Continuar com email
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Ao clicar em qualquer botão "continuar com", você concorda com os{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    termos de uso
                  </a>{" "}
                  e a nossa{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    política de privacidade
                  </a>.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
