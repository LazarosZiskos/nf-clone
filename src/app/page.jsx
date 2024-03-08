import Banner from "@/components/Banner";
import Row from "@/components/Row";
import { getTrending } from "@/constants/requests";

export default async function Home() {
  const trending = await getTrending();

  return (
    <main
      className="relative h-screen bg-gradient-to-b
       lg:h-[140vh]"
    >
      <section className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner />
      </section>
      <section className="md:space-y-24 pl-4 lg:pl-16">
        <Row movies={trending} title="Trending" />
      </section>
    </main>
  );
}
