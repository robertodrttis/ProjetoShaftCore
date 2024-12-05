import React from "react";

const HeaderCard: React.FC = () => {
  return (
    <header className="bg-[#0D1B2A] py-2 px-4 flex items-center">
      {/* Logo */}
      <img
        src="/logo-shaftscore.png"
        alt="Flashscore Logo"
        className="h-6 w-auto"
      />
      
    </header>
  );
};

export default HeaderCard;
