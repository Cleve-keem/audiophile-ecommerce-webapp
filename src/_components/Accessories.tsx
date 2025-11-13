const accessories = [
  {
    image: "/images/image-headphone.png",
    name: "Earphones",
    link: "/products/headphone",
  },
  {
    image: "/images/image-speaker.png",
    name: "Speaker",
    link: "/products/speaker",
  },
  {
    image: "/images/image-earphone.png",
    name: "Earphone",
    link: "/products/earphone",
  },
];

export default function Accessories() {
  return (
    <section className="bg-background">
      <div className="w-[95%] mx-auto py-20">
        <ul>
          {accessories.map((accessory) => (
            <li key={accessory.name} className="mb-10">
              <div className="block">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {accessory.name}
                </h3>
                <button></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
