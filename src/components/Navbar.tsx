import { navItems } from "../data/navList";
import Link from "next/link";

type NavbarProps = {
  className?: string;
  direction?: "row" | "column";
};

export default function Navbar({
  direction = "row",
  className = "",
}: NavbarProps) {
  return (
    <ul
      className={`flex justify-center ${
        direction === "row" ? "flex-row" : "flex-col"
      } ${className}`}
    >
      {navItems.map((item, id) => (
        <Link
          href={item.to}
          key={id}
          className="px-4 mx-2 uppercase text-secondary-white"
        >
          {item.title}
        </Link>
      ))}
    </ul>
  );
}
