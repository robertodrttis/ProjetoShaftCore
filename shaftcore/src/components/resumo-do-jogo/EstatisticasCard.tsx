import React from "react";

interface EstatisticasCardProps {
  stats: {
    name: string;
    homeValue: string | number;
    awayValue: string | number;
  }[];
}

const EstatisticasCard: React.FC<EstatisticasCardProps> = ({ stats }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-4xl mx-auto">
      <div className="flex space-x-4 border-b pb-2">
        <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded">
          JOGO
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded">
          1º TEMPO
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded">
          2º TEMPO
        </button>
      </div>
      <div className="space-y-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              {stat.homeValue}
            </span>
            <div className="flex-1 mx-2">
              <div className="flex items-center">
                <div
                  className="h-2 bg-red-500"
                  style={{
                    width: `${Math.min(
                      (Number(stat.homeValue) /
                        (Number(stat.homeValue) + Number(stat.awayValue))) *
                        100,
                      100
                    )}%`,
                  }}
                ></div>
                <div
                  className="h-2 bg-gray-500"
                  style={{
                    width: `${Math.min(
                      (Number(stat.awayValue) /
                        (Number(stat.homeValue) + Number(stat.awayValue))) *
                        100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700">
              {stat.awayValue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstatisticasCard;
