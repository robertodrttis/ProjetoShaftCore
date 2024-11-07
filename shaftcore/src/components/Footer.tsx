
import Image from 'next/image';
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
          
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre</h3>
            <p className="text-sm leading-relaxed">
            Resultados ao vivo de futebol no ShaftScore livecore tem cobertura ao vivo de mais de 500 ligas, copas e torneios de futebol em todo o mundo com resultados atualizados ao vivo, estatísticas, tabelas de classificação, destaques em vídeo, jogos e transmissão ao vivo. Os jogos ao vivo de todas as ligas de futebol têm atualizações rápidas e precisas de minutos, pontuações, resultados de futebol no intervalo e no final do jogo, artilheiros e assistentes, cartões, substituições, estatísticas de jogos e transmissão ao vivo. Os destaques em vídeo estão disponíveis para as ligas de futebol mais populares: Espanha La Liga BBVA e Copa del Rey, Itália Serie e Coppa Italia, Bundesliga alemã e DFB pokal, França Ligue 1 e UEFA Champions League, Liga Europa e torneios internacionais como Campeonato Mundial, Europeu Campeonato. O placar ao vivo do Sofascore tem detalhes de cada time, onde você pode ver as últimas 10 partidas de futebol, tabelas, jogos, resultados, estatísticas e muito mais. Nos detalhes da partida você pode encontrar probabilidades de queda/aumento. Além disso, todas as pontuações no placar ao vivo do Sofascore.com são atualizadas automaticamente e você não precisa atualizá-las manualmente. Ao adicionar partidas de futebol ou times que você deseja acompanhar nos favoritos, acompanhar os placares ao vivo, resultados e estatísticas de suas partidas ou times será ainda mais simples. Existe a opção de selecionar Todos ou Jogos de futebol ao vivo.</p>
          </div>

          {/* Sections for Sports and Scores */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm ">
            {/* Football Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Futebol</h3>
              <ul className="space-y-2">
                <li>UEFA Champions League</li>
                <li>Premier League</li>
                <li>LaLiga</li>
                <li>Bundesliga</li>
                <li>Serie A</li>
                <li>FIFA Rankings</li>
                <li>UEFA Rankings</li>
              </ul>
            </div>

            {/* Basketball Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Basquete</h3>
              <ul className="space-y-2">
                <li>NBA</li>
                <li>Euroleague</li>
                <li>Liga ACB</li>
                <li>Basquete Super League</li>
                <li>Serie A</li>
                <li>ABA League</li>
              </ul>
            </div>

            {/* Tennis Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Tênis</h3>
              <ul className="space-y-2">
                <li>Wimbledon</li>
                <li>Australian Open</li>
                <li>Roland Garros</li>
                <li>US Open</li>
                <li>WTA</li>
                <li>ATP Rankings</li>
                <li>WTA Rankings</li>
              </ul>
            </div>

            {/* Trending Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Tendências</h3>
              <ul className="space-y-2">
                <li>NHL</li>
                <li>NFL</li>
                <li>MLB</li>
                <li>Formula 1</li>
                <li>UFC</li>
                <li>Cage Warriors</li>
                <li>EHF Championship League</li>
              </ul>
            </div>

            {/* Football Scores Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Resultados de Futebol</h3>
              <ul className="space-y-2">
                <li>Real Madrid - Milan</li>
                <li>Real Madrid - Osasuna</li>
                <li>Crvena zvezda - Barcelona</li>
                <li>Sporting - Man City</li>
                <li>Brighton - Man City</li>
                <li>Liverpool - Leverkusen</li>
                <li>Inter - Arsenal</li>
              </ul>
            </div>

            {/* Basketball Scores Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Resultados de Basquete</h3>
              <ul className="space-y-2">
                <li>Celtics - Warriors</li>
                <li>Pistons - Lakers</li>
                <li>Lakers - 76ers</li>
                <li>Grizzlies - Lakers</li>
                <li>Wizards - Warriors</li>
                <li>Cavaliers - Warriors</li>
                <li>Hawks - Celtics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-4">
              <Image src="/logo-shaftscore.png" alt="ShaftScoreLogo" width={160} height={40} />
            </div>
            <div className="flex space-x-4">
              <Image src="/GoogleplayFooter.png" alt="Google Play" width={128} height={40} className="transition-transform transform hover:scale-105" />
              <Image src="/ApplestoreFooter.png" alt="App Store" width={128} height={40} className="transition-transform transform hover:scale-105" />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="flex space-x-4 mb-4">
              {['ANÚNCIO', 'CONTATO', 'NOTÍCIAS SHAFTSCORE'].map(link => (
                <a key={link} href="#" className="hover:underline">{link}</a>
              ))}
            </div>
            <div className="flex space-x-4">
              {['/facebook.png', '/instagram.png', '/twitter.png', '/tiktokFooter.png'].map((icon, index) => (
                <Image key={index} src={icon} alt="Social Icon" width={24} height={24} className="transition-transform transform hover:scale-110" />
              ))}
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center text-xs">
          <div className="mb-4 lg:mb-0 text-center lg:text-left">
            <span>&copy; 2024 ShaftScore - Todos os direitos reservados.</span>
          </div>
          <div className="flex space-x-4">
            {['Política de Privacidade', 'Política de Cookies', 'Termos e Condições',].map(link => (
              <a key={link} href="#" className="hover:underline">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;