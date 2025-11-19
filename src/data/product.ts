import { productSchema } from "@/types/product";

export const products: productSchema[] = [
  {
   _id: "xx99-mark-two-headphones",
    img: "/images/headphones/headphone1.png",
    label: "New Product",
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    category: "headphones",
    price: 2999,
  },
  {
    _id: "xx99-mark-one-headphones",
    img: "/images/headphones/headphone2.png",
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    category: "headphones",
    price: 1750,
  },
  {
    _id: "xx59-headphones",
    img: "/images/headphones/headphone3.png",
    name: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    category: "headphones",
    price: 899,
  },
  {
    _id: "yx1-wireless-earphones",
    img: "/images/earphones/earphone.png",
    label: "New Product",
    name: "YX1 WIRELESS EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    category: "earphones",
    price: 599,
  },
  {
    _id: "zx9-speaker",
    img: "/images/speakers/speaker1.png",
    label: "New Product",
    name: "ZX9 speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    category: "speakers",
    price: 4500,
  },
  {
    _id: "zx7-speaker",
    img: "/images/speakers/speaker2.png",
    name: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    category: "speakers",
    price: 3500,
  },
];
