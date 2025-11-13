import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { title: "Home", to: "/" },
  { title: "Headphones", to: "/headphones" },
  { title: "Speakers", to: "/speakers" },
  { title: "Earphones", to: "/earphones" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-foreground text-primary font-family-manrope">
      <div className="w-full min-h-16 py-8 xlg:max-w-[1440px] mx-auto flex items-center">
        <div className="w-[95%] mx-auto">
          {/* MOBILE VIEW */}
          <div className="flex items-center xl:hidden px-1">
            <div className="mr-5 flex justify-center">
              <img src="/icons/hamburger-open.svg" alt="hamburger-open icon" />
            </div>
            <Logo className="flex flex-6 justify-center sm:justify-start" />
            <div className="flex justify-center ml-5">
              <img src="/icons/cart-icon.png" alt="cart icon" />
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden xl:flex items-center">
            <Logo />
            <nav className="flex-6 mx-5">
              <ul className="flex justify-center">
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
            </nav>
            <div className="flex justify-center ml-5">
              <img src="/icons/cart-icon.png" alt="cart icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-border/40" />
    </header>
  );
}
