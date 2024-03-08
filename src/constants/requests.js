import { BASE_URL } from "@/constants/movie";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getTrending = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  );

  const data = await res.json();
  return data.results;
};
