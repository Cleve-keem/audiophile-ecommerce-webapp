import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: string;
};

export default function Logo({ className, size = "24" }: LogoProps) {
  return (
    <Link href="/" className={`${className}`}>
      <div className={`w-[${size}]`}>
        <img src="/images/logo.png" alt="Logo image" />
      </div>
    </Link>
  );
}
