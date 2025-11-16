import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-footer-background">
      <div className="w-[90%] mx-auto py-8 text-secondary-white">
        <div className="flex flex-col items-center text-center">
          <Logo className="my-5" size="25" />
          <Navbar direction="column" className="gap-4 uppercase my-5" />
          <p className="mt-4 mb-5 leading-text text-[15px] px-3 text-white/50">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="mt-4 mb-8">
            <p className="text-[15px] leading-text text-white/50">
              Copyright 2021. All Rights Reserved
            </p>
            <ul className="flex gap-5 mt-7 justify-center">
              <li>
                <img src="/icons/facebook-icon.svg" alt="facebook icon" />
              </li>
              <li>
                <img src="/icons/twitter-icon.svg" alt="Twitter icon" />
              </li>
              <li>
                <img src="/icons/instagram-icon.svg" alt="Instagram icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
