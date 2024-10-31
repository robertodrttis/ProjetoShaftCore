// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <p className="text-sm">
              Football live scores on Sofascore livescore has live coverage from more than 500 worldwide soccer leagues, cups and tournaments with live updated results, statistics, league tables, video highlights, fixtures and live streaming. Live matches from all football leagues have fast and accurate updates for minutes, scores, halftime and full-time soccer results, goal scorers and assistants, cards, substitutions, match statistics, and live stream.
            </p>
          </div>
          {/* Football Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Football</h3>
            <ul className="space-y-2">
              {['UEFA Champions League', 'Premier League', 'LaLiga', 'Bundesliga', 'Serie A', 'FIFA Rankings', 'UEFA Rankings'].map((item) => (
                <li key={item} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          {/* Basketball Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Basketball</h3>
            <ul className="space-y-2">
              {['NBA', 'Euroleague', 'Liga ACB', 'Basketball Super League', 'Serie A', 'ABA League'].map((item) => (
                <li key={item} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center">
          {/* Logo and Apps */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-4">
              <span className="font-bold text-xl">Sofascore</span>
            </div>
            <div className="flex space-x-4">
              <img src="/icons/google-play.png" alt="Google Play" className="w-32" />
              <img src="/icons/app-store.png" alt="App Store" className="w-32" />
            </div>
          </div>
          {/* Links and Social Media */}
          <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0">
            <div className="flex space-x-4 mb-4">
              {['Advertise', 'Contact', 'Sofascore Editor', 'Sofascore News'].map((link) => (
                <a key={link} href="#" className="text-sm underline hover:text-gray-300">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex space-x-4">
              {['/icons/facebook.png', '/icons/instagram.png', '/icons/twitter.png', '/icons/tiktok.png'].map((icon, index) => (
                <img key={index} src={icon} alt="Social Icon" className="w-6 h-6" />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-8">
          <p>&copy; 2024 Sofascore - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
