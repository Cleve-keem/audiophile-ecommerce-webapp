"use client";

import React from "react";

export default function page({ params }: Readonly<any>) {
  const { category, productId }: any = React.use(params);

  console.log(productId, category);
  return (
    <section className="bg-background">
      <div className="w-[90%] mx-auto">
        <h1>
          Product ID: {productId} in Category: {category}
        </h1>
      </div>
    </section>
  );
}
