import { BASE_URL } from "./movie";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getTrending = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  );

  const data = await res.json();
  return data.results;
};

export const getTopRated = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
  );

  const top = await res.json();
  return top.results;
};

export const getAction = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
  );
  const action = await res.json();
  return action.results;
};

export const getComedies = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
  );
  const comedy = await res.json();
  return comedy.results;
};

export const getHorror = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
  );
  const horror = await res.json();
  return horror.results;
};

export const getRomance = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
  );
  const romance = await res.json();
  return romance.results;
};

export const getDocumentaries = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
  );
  const documentaries = await res.json();
  return documentaries.results;
};
