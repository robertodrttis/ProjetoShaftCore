import React from "react";

interface VideoCardProps {
  videoUrl: string; // URL do vídeo do YouTube
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Melhores Momentos</h3>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;
