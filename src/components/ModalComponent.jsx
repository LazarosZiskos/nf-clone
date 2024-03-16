"use client";
import { AddCircle, CancelRounded, RemoveCircle } from "@mui/icons-material";
import { BASE_URL } from "../constants/movie";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { IoIosClose } from "react-icons/io";

//<IoIosClose />

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const ModalComponent = ({ movie, closeModal }) => {
  const [video, setVideo] = useState("");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const getMovieDetails = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/movie/${movie.id}?append_to_response=videos`,
        options
      );
      const data = await res.json();

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (video) => video.type === "Trailer"
        );
        setVideo(data.videos.results[index].key);
      }
    } catch (error) {
      console.log("Error fetching movie details", error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [movie]);

  return (
    <div className="fixed top-20 inset-0 z-60 bg-black bg-opacity-95 w-full max-w-2xl mx-auto overflow-hidden overflow-y-scroll scrollbar-hide rounded-xl">
      <button
        className="absolute top-5 right-5 z-100 cursor-pointer"
        onClick={closeModal}
      >
        <CancelRounded
          sx={{ color: "white", fontSize: "35px", ":hover": { color: "red" } }}
        />
      </button>

      <iframe
        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=0&loop=1`}
        className="top-0 left-0 w-full h-3/5"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

export default ModalComponent;
