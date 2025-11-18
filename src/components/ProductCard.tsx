import Button from "./Button";

type ProductCardProps = {
  product: {
    _id: string;
    img: string;
    name: string;
    label?: string;
    description: string;
    category: string;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="">
      <div className="bg-primary-grey p-8 rounded-xl mb-4">
        <div className="w-[220px] h-[243px] mx-auto p-4">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="mt-8">
        {product?.label && (
          <span className="block text-[14px] tracking-overline text-primary-orange mb-3 uppercase">
            {product.label}
          </span>
        )}
        <h2 className="text-h4 tracking-subtitle text-primary mb-3">
          {product.name}
        </h2>
        <p className="leading-text text-[15px] text-primary/50">
          {product.description}
        </p>

        <Button variant="primary" href={`${product.category}/${product._id}`}>
          See product
        </Button>
      </div>
    </div>
  );
}
