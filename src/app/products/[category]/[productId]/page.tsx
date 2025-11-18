"use client";

import Button from "@/components/Button";
import ProductDetails from "@/components/ProductDetails";
import { productSchema } from "@/types/product";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../../../convex/_generated/api";

export default function page({ params }: Readonly<any>) {
  const { productId }: any = React.use(params);

  const product: productSchema | undefined | null = useQuery(
    api.products.getProductById,
    { productId }
  );

  return (
    <section className="bg-background">
      <div className="w-[90%] mx-auto pt-5 pb-10">
        <Button className="mb-10">Go Back</Button>
        <div className="mt-5">
          <ProductDetails product={product} />
        </div>
      </div>
    </section>
  );
}
