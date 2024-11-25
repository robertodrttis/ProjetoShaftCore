import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid Principal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Seções do Footer */}
          <div>
            <h3 className="font-bold text-lg mb-4">Futebol</h3>
            <ul className="space-y-2">
              <li>Brasileirão Betano 2024</li>
              <li>Série B</li>
              <li>Série C</li>
              <li>Copa Libertadores</li>
              <li>Copa Sul-Americana 2024</li>
              <li>Torneio Betano</li>
              <li>Flashscore Podcast</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Páginas em Alta</h3>
            <ul className="space-y-2">
              <li>NBB 2024</li>
              <li>Liga Futsal 2024</li>
              <li>NBA Resultados</li>
              <li>Fórmula 1</li>
              <li>Notícias de Tênis</li>
              <li>NFL 2024</li>
              <li>NHL 2024</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Jogos ao Vivo</h3>
            <ul className="space-y-2">
              <li>Sport x Santos</li>
              <li>Goiás x Novorizontino</li>
              <li>América-MG x Brusque</li>
              <li>Paysandu x Vila Nova</li>
              <li>Guarani x Ceará</li>
              <li>Celta de Vigo x Barcelona</li>
              <li>Leganés x Real Madrid</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Futebol Resultados</h3>
            <ul className="space-y-2">
              <li>Atlético-GO x Palmeiras</li>
              <li>Corinthians x Vasco</li>
              <li>Fortaleza x Flamengo</li>
              <li>Palmeiras x Botafogo</li>
              <li>Criciúma x Corinthians</li>
            </ul>
            <h3 className="font-bold text-lg mt-6 mb-4">NBB Resultados</h3>
            <ul className="space-y-2">
              <li>Bauru x Fortaleza B.C.</li>
              <li>São José x Caxias do Sul</li>
              <li>Mogi x União Corinthians</li>
              <li>Pato x Botafogo</li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Informações Inferiores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações adicionais */}
          <div>
            <h3 className="font-bold mb-4">SHAFTSCORE.COM.BR</h3>
            <ul className="space-y-2 text-sm">
              <li>Condições de Utilização</li>
              <li>Política de Privacidade</li>
              <li>Jornalismo e Proteção de Dados</li>
              <li>Publicidade</li>
              <li>Contato</li>
              <li>Mobile</li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">REDES SOCIAIS</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <TbBrandX size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Aplicativos Móveis */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">APLICATIVOS MÓVEIS</h3>
            <p className="text-center text-sm mb-4">
              Nosso aplicativo mobile está otimizado para o seu smartphone. Faça
              o download gratuito!
            </p>
            <div className="flex space-x-4">
              <a href="#">
                <img
                  src="appGoogle.png"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
              <a href="#">
                <img
                  src="AppStore.png"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Informações Legais e Copyright */}
        <div className="border-t border-gray-300 my-8"></div>
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">Aposte com responsabilidade 18+</p>
          <p>Copyright © 2024 Shaftscore.com.br</p>
          <a href="#" className="text-blue-500 hover:underline">
            Configurar privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
