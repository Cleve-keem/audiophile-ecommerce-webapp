import ProductCard from "@/_components/ProductCard";

const headphoneList = [
  {
    img: "/images/headphones/headphone1.png",
    label: "New Product",
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  },
  {
    img: "/images/headphones/headphone2.png",
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  },
  {
    img: "/images/headphones/headphone3.png",
    name: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  },
];

export default function page() {
  return (
    <section className="bg-background  py-15">
      <div className="w-[90%] mx-auto text-center">
        <div className="grid grid-cols-1 gap-15">
          {headphoneList.map((headphone, id) => (
            <ProductCard product={headphone} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
