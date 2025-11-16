import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-hero-background">
      <div className="w-[90%] mx-auto py-8 text-secondary-white">
        <div className="flex flex-col items-center text-center">
          <Logo className="my-5" size="25" />
          <ul className="flex flex-col gap-4 uppercase my-5">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Headphones</Link>
            </li>
            <li>
              <Link href="">speakers</Link>
            </li>
            <li>
              <Link href="">earphones</Link>
            </li>
          </ul>
          <p className="mt-4 mb-5 leading-text text-[15px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <div>
            <p className="text-[15px] leading-text">Copyright 2021. All Rights Reserved</p>
            <ul className="flex">
              <Link href=""></Link>
              <Link href=""></Link>
              <Link href=""></Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
