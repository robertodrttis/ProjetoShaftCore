import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/*sobre a sessão*/}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Sobre</h3>
            <p className="text-sm leading-relaxed">
              Resultados ao vivo de futebol no Sofascore livecore tem cobertura
              ao vivo de mais de 500 ligas, copas e torneios de futebol em todo
              o mundo com resultados atualizados ao vivo, estatísticas, tabelas
              de classificação, destaques de vídeo, jogos e transmissão ao vivo.
              Os jogos ao vivo de todas as ligas de futebol têm atualizações
              rápidas e precisas de minutos, pontuações, resultados de futebol
              no intervalo e no final do jogo, artilheiros e assistentes,
              cartões, substituições, estatísticas de jogos e transmissão ao
              vivo.
            </p>
          </div>

          {/* Sessão futebol */}
          <div>
            <h3 className="font-bold text-lg mb-4">Futebol</h3>
            <ul className="space-y-2">
              {[
                "UEFA Champions League",
                "Premier League",
                "LaLiga",
                "Bundesliga",
                "Serie A",
                "FIFA Rankings",
                "UEFA Rankings",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Basketball Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Basquete</h3>
            <ul className="space-y-2">
              {[
                "NBA",
                "Euroleague",
                "Liga ACB",
                "Basketball Super League",
                "Stockmann Greek Basketball League",
                "Serie A",
                "ABA League",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tennis Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tênis</h3>
            <ul className="space-y-2">
              {[
                "Wimbledon",
                "Australian Open",
                "Roland Garros",
                "US Open",
                "WTA",
                "ATP Rankings",
                "WTA Rankings",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Trending Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tendências</h3>
            <ul className="space-y-2">
              {[
                "NHL",
                "NFL",
                "MLB",
                "Formula 1",
                "UFC",
                "Cage Warriors",
                "EHF Championship League",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Football Scores Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Pontos Futebol</h3>
            <ul className="space-y-2">
              {[
                "Valencia - Real Madrid",
                "Bournemouth - Man City",
                "Liverpool - Brighton",
                "Newcastle - Arsenal",
                "Tottenham - Man City",
                "Man Utd - Leicester",
                "Brighton - Liverpool",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Basketball Scores Section */}
          <div>
            <h3 className="font-bold text-lg mb-4"> Pontos Basquete </h3>
            <ul className="space-y-2">
              {[
                "Suns - Lakers",
                "Cavaliers - Lakers",
                "Warriors - Clippers",
                "Raptors - Lakers",
                "Warriors - Pelicans",
                "Celtics - Bucks",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row justify-between items-center">
          {/* Logo and Apps */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-4">
              <span className="font-bold text-xl">Sofascore</span>
            </div>
            <div className="flex space-x-4">
              <img
                src="/icons/google-play.png"
                alt="Google Play"
                className="w-32 transition-transform transform hover:scale-105"
              />
              <img
                src="/icons/app-store.png"
                alt="App Store"
                className="w-32 transition-transform transform hover:scale-105"
              />
            </div>
          </div>

          {/* Links and Social Media */}
          <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0">
            <div className="flex space-x-4 mb-4">
              {["Anuncie", "Contato", "Sofascore News"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm underline hover:text-gray-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex space-x-4">
              {[
                "/icons/facebook.png",
                "/icons/instagram.png",
                "/icons/twitter.png",
                "/icons/tiktok.png",
              ].map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt="Social Icon"
                  className="w-6 h-6 transition-transform transform hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center text-xs mt-12">
          <div className="mb-4 lg:mb-0 text-center">
            <span>&copy; 2024 Sofascore - Todos os direitos reservados.</span>
          </div>
          <div className="flex space-x-4">
            {[
              "Politica de privacidade",
              "Politica de cookies",
              "Termos e condições",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-gray-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
