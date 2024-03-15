import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
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
        <Hero />
      </section>
    </main>
  );
}
