import Button from "./Button";

const categories = [
  {
    image: "/images/image-headphone.png",
    name: "Earphones",
    link: "/products/headphones",
  },
  {
    image: "/images/image-speaker.png",
    name: "Speaker",
    link: "/products/speakers",
  },
  {
    image: "/images/image-earphone.png",
    name: "Earphone",
    link: "/products/earphones",
  },
];

export default function Menu() {
  return (
    <div className="w-[90%] mx-auto py-15">
      <ul className="grid grid-cols-1 gap-y-5">
        {categories.map((category) => (
          <li key={category.name} className="mb-10 pb-6">
            <div className="flex flex-col items-center text-center bg-primary-grey rounded-xl">
              <div className="w-24 relative -top-12">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="relative -top-5">
                <h3 className="mt-4 text-xl font-bold text-foreground text-[15px] uppercase tracking-[1.07px]">
                  {category.name}
                </h3>
                <Button className="flex items-center" href={category.link}>
                  <span className="inline-block mr-2">shop</span>
                  <img src="/icons/arrow-right.svg" alt="arrow-right icon" />
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
