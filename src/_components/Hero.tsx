import Button from "./Button";

export default function Hero() {
  return (
    <section className="text-secondary-white h-[calc(100vh-91px)]">
      <div className="relative h-full flex items-center">
        <div className="absolute -top-3 left-0 right-0 bottom-0 -z-10">
          <img
            src="/images/headphone1.svg"
            alt="hero headphone"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-[95%] mx-auto px-10 text-center">
          <span className="block text-secondary-white text-[14px] tracking-[10px] mb-3">
            NEW PRODUCT
          </span>
          <h1 className="text-h1-mobile leading-h1-mobile tracking-h1-mobile text-secondary-white mb-5">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="leading-[25px] text-[15px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Button variant="primary">See Product</Button>
        </div>
      </div>
    </section>
  );
}
