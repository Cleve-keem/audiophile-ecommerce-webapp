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
    <>
      <section className="bg-background">
        <div className="w-[90%] mx-auto py-20">
          <ul className="grid grid-cols-1 gap-y-5">
            {accessories.map((accessory) => (
              <li key={accessory.name} className="mb-10 pb-6">
                <div className="flex flex-col items-center text-center bg-primary-grey rounded-xl">
                  <div className="w-24 relative -top-12">
                    <img
                      src={accessory.image}
                      alt={accessory.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="relative -top-5">
                    <h3 className="mt-4 text-xl font-bold text-foreground text-[15px] uppercase tracking-[1.07px]">
                      {accessory.name}
                    </h3>
                    <Button className="flex items-center">
                      <span className="block mr-2">shop</span>
                      <img
                        src="/icons/arrow-right.svg"
                        alt="arrow-right icon"
                      />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-background py-12">
            <div className="bg-primary-orange rounded-xl mt-2">
              <div className="w-[70%] mx-auto py-10 flex flex-col items-center text-center">
                <div className="w-[172.25px] mb-3">
                  <img src="/images/image-speaker.png" alt="speaker image" />
                </div>
                <h1 className="text-h1-mobile text-secondary-white leading-h1-mobile tracking-h1-mobile">
                  ZX9 SPEAKER
                </h1>
                <p className="mt-3 text-secondary-white leading-[25px]">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6 bg-secondary-black text-secondary-white hover:bg-secondary-white hover:text-secondary-black"
                >
                  See Product
                </Button>
              </div>
            </div>
            <div className="rounded-xl mt-8 relative overflow-hidden">
              <div className="flex items-center py-10 px-10 min-h-80">
                <div className=" absolute -inset-1 mb-3">
                  <img src="/images/image-speaker2.png" alt="speaker image" />
                </div>
                <div className="relative z-10">
                  <h1 className="text-h4 text-foreground tracking-h1">
                    ZX7 SPEAKER
                  </h1>
                  <Button
                    variant="outline"
                    className="mt-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-secondary-white"
                  >
                    See Product
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-list"></section>
    </>
  );
}
