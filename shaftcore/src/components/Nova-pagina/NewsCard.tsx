// NewsCard.tsx
import React from "react";

interface NewsItem {
  id: number;
  image: string;
  title: string;
  source: string;
  time: string;
}

interface NewsCardProps {
  news: NewsItem[];
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      {news.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-4 py-4 border-b last:border-b-0"
        >
          {/* Imagem da notícia */}
          <img
            src={item.image}
            alt={item.title}
            className="h-16 w-16 rounded-md object-cover"
          />

          {/* Conteúdo da notícia */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500">
              {item.source}, {item.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
