import Row from "./Row";
import {
  getTrending,
  getTopRated,
  getAction,
  getComedies,
  getHorror,
  getRomance,
  getDocumentaries,
} from "../constants/requests";

const Hero = async () => {
  const trending = await getTrending();
  const topRated = await getTopRated();
  const action = await getAction();
  const comedies = await getComedies();
  const scary = await getHorror();
  const romance = await getRomance();
  const documentaries = await getDocumentaries();
  return (
    <>
      <Row movies={trending} title="Trending Now" />
      <Row movies={topRated} title="Top Rated" />
      <Row movies={action} title="Action Thrillers" />
      <Row movies={comedies} title="Comedies" />
      <Row movies={scary} title="Scary Movies" />
      <Row movies={romance} title="Romance Movies" />
      <Row movies={documentaries} title="Documentaries" />
    </>
  );
};

export default Hero;
