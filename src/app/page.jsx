import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import {
  getTrending,
  getTopRated,
  getAction,
  getComedies,
  getHorror,
  getRomance,
  getDocumentaries,
} from "../constants/requests";

export default async function Home() {
  const trending = await getTrending();
  const topRated = await getTopRated();
  const action = await getAction();
  const comedies = await getComedies();
  const scary = await getHorror();
  const romance = await getRomance();
  const documentaries = await getDocumentaries();

  return (
    <main
      className="relative h-screen bg-gradient-to-b
       lg:h-[140vh]"
    >
      <header>
        <Navbar />
      </header>
      <section className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner />
      </section>
      <section className="md:space-y-24 pl-4 lg:pl-16">
        <Row movies={trending} title="Trending Now" />
        <Row movies={topRated} title="Top Rated" />
        <Row movies={action} title="Action Thrillers" />
        <Row movies={comedies} title="Comedies" />
        <Row movies={scary} title="Scary Movies" />
        <Row movies={romance} title="Romance Movies" />
        <Row movies={documentaries} title="Documentaries" />
      </section>
    </main>
  );
}
