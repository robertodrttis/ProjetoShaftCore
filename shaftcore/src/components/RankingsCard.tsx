import React from 'react';

const RankingsCard: React.FC = () => {
  const rankings = [
    { name: 'FIFA Rankings', icon: '/icons/fifa.png' },
    { name: 'UEFA Rankings', icon: '/icons/uefa.png' },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-4">Rankings</h2>
      <ul className="space-y-3">
        {rankings.map((ranking) => (
          <li key={ranking.name} className="flex items-center">
            <img src={ranking.icon} alt={`${ranking.name} Icon`} className="w-6 h-6 mr-3" />
            <span className="font-medium">{ranking.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingsCard;
