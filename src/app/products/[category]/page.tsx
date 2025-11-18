"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";
import PageTitle from "@/components/PageTitle";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { productSchema } from "@/types/product";

export default function CategoryPage({ params }: Readonly<any>) {
  const { category }: any = React.use(params) || {};

  const products = useQuery(
    api.products.getProductByCategory,
    { category }
  );

  if(products === undefined){
    return <p>Loading.</p>
  }

  console.log(products);

  return (
    <section className="bg-background">
      <PageTitle />
      <div className="w-[90%] mx-auto text-center py-20">
        <div className="grid grid-cols-1 gap-24">
          {products?.map((product, id) => (
            <ProductCard product={product} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
