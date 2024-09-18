import React from "react";

const Album = ({ data,albumId }) => {
    console.log(albumId);
  return (
    <div className="flex flex-wrap gap-4 text-wrap p-4">
      {data[albumId].map((photo) => (
        <li key={photo.id} className="flex flex-col">
          <img src={photo.thumbnailUrl} alt={photo.title} className="w-[150px] h-[150px]" />
          <p>
            <a href={photo.url} target="_blank" className="font-semibold" rel="noopener noreferrer">
              View full image
            </a>
          </p>
        </li>
      ))}
    </div>
  );
};

export default Album;
