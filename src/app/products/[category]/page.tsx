"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/utils";
import PageTitle from "@/components/PageTitle";

export default function CategoryPage({ params }: Readonly<any>) {
  const { category }: any = React.use(params) || {};

  const products = getProductsByCategory(category);

  return (
    <section className="bg-background">
      <PageTitle />
      <div className="w-[90%] mx-auto text-center py-20">
        <div className="grid grid-cols-1 gap-24">
          {products.map((product, id) => (
            <ProductCard product={product} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
