import ProductCard from "@/_components/ProductCard";

const speakerList = [
  {
    img: "/images/speakers/speaker1.png",
    label: "New Product",
    name: "ZX9 speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
  },
  {
    img: "/images/speakers/speaker2.png",
    name: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
  },
];

export default function page() {
  return (
    <section className="bg-background  py-15">
      <div className="w-[90%] mx-auto text-center">
        <div className="grid grid-cols-1 gap-15">
          {speakerList.map((headphone, id) => (
            <ProductCard product={headphone} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
