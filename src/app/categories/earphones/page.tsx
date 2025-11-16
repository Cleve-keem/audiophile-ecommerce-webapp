import ProductCard from "@/_components/ProductCard";

const earphoneList = [
  {
    img: "/images/earphones/earphone.png",
    label: "New Product",
    name: "YX1 WIRELESS EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  },
];

export default function page() {
  return (
    <section className="bg-background py-15">
      <div className="w-[90%] mx-auto text-center">
        <div className="grid grid-cols-1 gap-15">
          {earphoneList.map((headphone, id) => (
            <ProductCard product={headphone} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
