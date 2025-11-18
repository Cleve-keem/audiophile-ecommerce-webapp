import { productSchema } from "@/types/product";

export default function ProductDetails({
  product,
}: {
  product: productSchema | undefined;
}) {
  console.log(product);
  return (
    <div>
      <div className="px-15 py-10 rounded-xl bg-primary-grey mb-10">
        <img src={product?.img} alt={product?.name} />
      </div>
      {product?.label && (
        <span className="block text-[14px] tracking-overline text-primary-orange mb-3 uppercase">
          {product.label}
        </span>
      )}
      <h2 className="text-h4 tracking-subtitle text-primary mb-3">
        {product?.name}
      </h2>
      <p className="leading-text text-[15px] text-primary/50">
        {product?.description}
      </p>

      <p>{product?.price}</p>
    </div>
  );
}
