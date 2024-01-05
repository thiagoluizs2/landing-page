import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1100px] w-full">
      <Header />
      <Hero />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
