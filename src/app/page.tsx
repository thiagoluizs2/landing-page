import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="max-w-[1100px] w-full">
      <Header />
      <Hero />
      <Pricing />
      <Footer />
    </main>
  );
}
