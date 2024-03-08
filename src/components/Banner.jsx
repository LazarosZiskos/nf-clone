"use client";
import { BASE_URL, baseUrl } from "@/constants/movie";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function Banner() {
  const [movie, setMovie] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await res.json();
      const netflixOriginals = data.results;

      setMovie(
        netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end
    lg:pb-12"
    >
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="sd"
          priority
          quality={80}
          objectFit="cover"
          layout="fill"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70 ">
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
