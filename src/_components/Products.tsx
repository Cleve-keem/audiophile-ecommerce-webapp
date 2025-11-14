import Button from "./Button";

export default function ProductList() {
  return (
    <section className="bg-background py-12">
      <div className="bg-primary-orange rounded-xl mt-2">
        <div className="w-[70%] mx-auto py-10 flex flex-col items-center text-center">
          <div className="w-[172.25px] mb-3">
            <img src="/images/image-speaker.png" alt="speaker image" />
          </div>
          <h1 className="text-h1-mobile text-secondary-white leading-h1-mobile tracking-h1-mobile">
            ZX9 SPEAKER
          </h1>
          <p className="mt-3 text-secondary-white leading-[25px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            variant="secondary"
            className="mt-6 bg-secondary-black text-secondary-white hover:bg-secondary-white hover:text-secondary-black"
          >
            See Product
          </Button>
        </div>
      </div>
      <div className="rounded-xl my-5 relative overflow-hidden">
        <div className="flex items-center py-10 px-10 min-h-80">
          <div className=" absolute -inset-1">
            <img src="/images/image-speaker2.png" alt="speaker image" />
          </div>
          <div className="relative z-10">
            <h1 className="text-h4 text-foreground tracking-h1">ZX7 SPEAKER</h1>
            <Button variant="outline" className="mt-6">
              See Product
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          <div className="rounded-xl w-full h-50 overflow-hidden">
            <img src="/images/image-earphone2.png" alt="earphone image" />
          </div>
          <div className="py-10 px-10 bg-secondary-white rounded-xl">
            <h4 className="text-h4 tracking-h1 text-foreground mb-5">
              YX1 EARPHONES
            </h4>
            <Button variant="outline" className="mt-6">
              See Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
