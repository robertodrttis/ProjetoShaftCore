import React from 'react';

const TopLeaguesCard: React.FC = () => {
  const leagues = [
    { name: 'Brasileirão Série A', icon: '/icons/brasileirao.png' },
    { name: 'UEFA Champions League', icon: '/icons/champions_league.png' },
    { name: 'UEFA Europa League', icon: '/icons/europa_league.png' },
    { name: 'Premier League', icon: '/icons/premier_league.png' },
    { name: 'LaLiga', icon: '/icons/laliga.png' },
    { name: 'Bundesliga', icon: '/icons/bundesliga.png' },
    { name: 'Serie A', icon: '/icons/serie_a.png' },
    { name: 'UEFA Conference League', icon: '/icons/conference_league.png' },
    { name: 'Ligue 1', icon: '/icons/ligue_1.png' },
    { name: 'CONMEBOL Libertadores', icon: '/icons/libertadores.png' },
    { name: 'World Championship', icon: '/icons/world_championship.png' },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-4">Top leagues</h2>
      <ul className="space-y-3">
        {leagues.map((league) => (
          <li key={league.name} className="flex items-center">
            <img src={league.icon} alt={`${league.name} Icon`} className="w-6 h-6 mr-3" />
            <span className="font-medium">{league.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopLeaguesCard;
