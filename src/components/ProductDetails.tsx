import { productSchema } from "@/types/product";
import Button from "./Button";

export default function ProductDetails({
  product,
}: {
  product: productSchema | undefined | null;
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
      <p className="leading-text text-[15px] text-primary/50 my-4">
        {product?.description}
      </p>

      <p className="my-5 text-h6 tracking-h6 text-primary">
        ${product?.price.toLocaleString()}
      </p>

      <div className="flex items-center border">
        {/* <div className="flex items-center border">
          <Button onClick={() => console.log("button")}>+</Button>
          <span>1</span>
          <Button onClick={() => console.log("button two")}>-</Button>
        </div>
        <Button variant="primary" className="mt-0">
          Add to cart
        </Button> */}
      </div>
    </div>
  );
}
