import React from "react";

interface PlayerSubstitution {
  playerOut: string;
  playerIn: string;
  time: string;
  team: "home" | "away";
}

interface SubstitutionCardProps {
  substitutions: PlayerSubstitution[];
}

const SubstitutionCard: React.FC<SubstitutionCardProps> = ({ substitutions }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full sm:max-w-4xl mx-auto space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 text-center border-b pb-2">
        JOGADORES SUBSTITUÍDOS
      </h3>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {substitutions.map((sub, index) => (
          <div
            key={index}
            className={`flex items-center space-x-4 ${
              sub.team === "home" ? "justify-start" : "justify-end"
            }`}
          >
            {sub.team === "home" && (
              <>
                <img
                  src="/image.png"
                  alt={sub.playerOut}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-800">
                    {sub.playerOut}
                  </p>
                  <p className="text-xs text-gray-600">{sub.time}</p>
                </div>
                <p className="text-sm font-semibold text-green-500">↔</p>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-800">
                    {sub.playerIn}
                  </p>
                </div>
              </>
            )}
            {sub.team === "away" && (
              <>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    {sub.playerIn}
                  </p>
                </div>
                <p className="text-sm font-semibold text-green-500">↔</p>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    {sub.playerOut}
                  </p>
                  <p className="text-xs text-gray-600">{sub.time}</p>
                </div>
                <img
                  src="/image.png"
                  alt={sub.playerOut}
                  className="w-10 h-10 rounded-full"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubstitutionCard;
