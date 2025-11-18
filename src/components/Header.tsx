import Logo from "./Logo";
import Navbar from "./Navbar";

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
              <Navbar />
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
