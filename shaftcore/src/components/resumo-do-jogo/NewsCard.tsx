import React from "react";

interface NewsItem {
  id: number;
  image: string;
  title: string;
  source: string;
  date: string;
}

interface NewsCardProps {
  news: NewsItem[];
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  if (!news || news.length === 0) {
    return <p className="text-gray-500">Nenhuma notícia disponível.</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      {news.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-4 border-b last:border-b-0 pb-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-16 rounded object-cover"
          />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500">{item.source}</p>
            <p className="text-xs text-gray-400">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
