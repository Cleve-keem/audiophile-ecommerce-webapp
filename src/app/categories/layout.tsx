"use client";

import AudioGear from "@/_components/AudioGear";
import Menu from "@/_components/Menu";
import PageHeadline from "@/_components/PageHeadline";
import ProductList from "@/_components/Products";
import { usePathname } from "next/navigation";
import React from "react";

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname().split("/");
  const title = path[path.length - 1];
  return (
    <div>
      <PageHeadline title={title} />
      <div>{children}</div>
      <>
        <Menu />
        <AudioGear />
      </>
    </div>
  );
}
