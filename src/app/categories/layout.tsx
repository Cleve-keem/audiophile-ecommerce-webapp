"use client";

import PageHeadline from "@/_components/PageHeadline";
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
    </div>
  );
}
