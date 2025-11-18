"use client";

import { usePathname } from "next/navigation";

export default function PageTitle() {
  const title = usePathname()?.split("/").pop();
  return (
    <div className="flex justify-center py-5 bg-foreground">
      <h1 className="text-h4 uppercase text-secondary-white tracking-h1">
        {title}
      </h1>
    </div>
  );
}
