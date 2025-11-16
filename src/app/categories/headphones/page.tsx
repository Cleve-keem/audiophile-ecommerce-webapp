import Button from "@/_components/Button";

const headphoneList = [
  {
    img: "",
    label: "New Product",
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  },
  {
    img: "",
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  },
  {
    img: "",
    name: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  },
];

export default function HeadphonesPage() {
  return (
    <section className="bg-background  py-15">
      <div className="w-[90%] mx-auto text-center">
        <div className="grid grid-cols-1 gap-15">
          {headphoneList.map((headphone, id) => (
            <div className="" key={id}>
              <div className="bg-primary-grey p-8 rounded-xl mb-4">
                <div className="w-[220px] h-[243px] mx-auto p-4">
                  <img
                    src="/images/image-headphone.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="mt-8">
                {headphone?.label && (
                  <span className="block text-[14px] tracking-overline text-primary-orange mb-3 uppercase">
                    {headphone.label}
                  </span>
                )}
                <h2 className="text-h4 tracking-subtitle text-text-dark">
                  {headphone.name}
                </h2>
                <p className="leading-text text-[15px] text-text-dark/50">
                  {headphone.description}
                </p>

                <Button variant="primary">See product</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
