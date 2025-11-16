import { navItems } from "../../data/navList";
import Link from "next/link";

enum Direction {
  "column",
  "row",
}

type NavbarProps = {
  className?: string;
  direction?: keyof typeof Direction;
};

export default function Navbar({ direction = "row", className }: NavbarProps) {
  let flexDirection = direction === "row" ? "flex-row" : "flex-col";

  return (
    <ul className={`flex justify-center ${flexDirection} ${className}`}>
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
