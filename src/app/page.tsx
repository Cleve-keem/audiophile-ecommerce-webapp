import AudioGear from "@/components/AudioGear";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import ProductList from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <ProductList />
      <AudioGear />
    </>
  );
}
