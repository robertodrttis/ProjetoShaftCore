import React, { useEffect, useState } from "react";

interface OddsRow {
  teams: string;
  odds: { label: string; value: string }[];
}

// Função simulada para buscar dados de uma API
const fetchOddsData = async (): Promise<OddsRow[]> => {
  return [
    { teams: "ZAK vs ERB", odds: [{ label: "1", value: "2.10" }, { label: "X", value: "2.63" }, { label: "2", value: "4.00" }, { label: "1X", value: "1.30" }, { label: "12", value: "1.60" }] },
    { teams: "ALO vs ITJ", odds: [{ label: "1", value: "7.00" }, { label: "X", value: "4.33" }, { label: "2", value: "1.44" }, { label: "1X", value: "2.75" }, { label: "12", value: "1.08" }] },
    { teams: "GZI vs HAM", odds: [{ label: "1", value: "2.88" }, { label: "X", value: "3.00" }, { label: "2", value: "2.50" }, { label: "1X", value: "1.40" }, { label: "12", value: "1.25" }] },
    { teams: "MAR vs HIB", odds: [{ label: "1", value: "3.00" }, { label: "X", value: "3.40" }, { label: "2", value: "2.20" }, { label: "1X", value: "1.50" }, { label: "12", value: "1.15" }] },
    { teams: "MKH vs TEL", odds: [{ label: "1", value: "3.00" }, { label: "X", value: "3.70" }, { label: "2", value: "2.20" }, { label: "1X", value: "1.60" }, { label: "12", value: "1.30" }] },
  ];
};

const OddsCard: React.FC = () => {
  const [oddsData, setOddsData] = useState<OddsRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOddsData = async () => {
      try {
        const data = await fetchOddsData();
        setOddsData(data);
      } catch (error) {
        console.error("Erro ao buscar dados de odds:", error);
      } finally {
        setLoading(false);
      }
    };

    loadOddsData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="p-4 bg-white shadow-lg max-w-md ml-auto mr-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Odds em destaque</h2>
        <button className="px-4 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600">
          Aposte Agora →
        </button>
      </div>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="py-2">Times</th>
            {["1", "X", "2", "1X", "12"].map((label) => (
              <th key={label} className="py-2">{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {oddsData.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 font-semibold text-red-600">{row.teams}</td>
              {row.odds.map((odd, idx) => (
                <td key={idx} className="py-2 text-sm text-gray-800">
                  {odd.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-gray-500">Jogue com responsabilidade 18+</p>
      <div className="flex justify-end text-xs text-gray-400">
        <span>Fornecido por <span className="font-semibold text-green-600">bet365</span></span>
      </div>
    </div>
  );
};

export default OddsCard;
