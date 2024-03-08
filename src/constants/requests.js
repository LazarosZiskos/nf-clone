import { BASE_URL } from "@/constants/movie";

export const getTrending = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=86ee141fa43ddb52ba91ad281922ac0d&language=en-US&with_genres=99`
  );

  const data = await res.json();
  return data.results;
};
