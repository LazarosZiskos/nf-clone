import Image from "next/image";
import React from "react";

function Thumbnail({ movie }) {
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="img"
        className="rounded-sm object-fill md:rounded w-full h-full"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

export default Thumbnail;
