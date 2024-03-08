import Banner from "@/components/Banner";
import { BASE_URL } from "@/constants/movie";

const getTrending = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=86ee141fa43ddb52ba91ad281922ac0d&language=en-US&with_genres=99`
  );

  const data = await res.json();
  return data.results;
};

export default async function Home() {
  const trending = await getTrending();

  return (
    <main
      className="relative h-screen bg-gradient-to-b
       lg:h-[140vh]"
    >
      <section className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner movies={trending} />
      </section>
      <section className="md:space-y-24 pl-4 lg:pl-16">{/* Rows */}</section>
    </main>
  );
}
