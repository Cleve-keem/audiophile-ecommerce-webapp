import Button from "./Button";

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
      <div className="w-[90%] mx-auto py-20">
        <ul className="grid grid-cols-1 gap-y-3">
          {accessories.map((accessory) => (
            <li key={accessory.name} className="mb-10 pb-6 rounded-lg">
              <div className="flex flex-col items-center text-center bg-primary-grey">
                <div className="w-24 relative -top-12">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="relative -top-5">
                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    {accessory.name}
                  </h3>
                  <Button className="flex items-center">
                    <span className="block mr-2">shop</span>
                    <img src="/icons/arrow-right.svg" alt="arrow-right icon" />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
