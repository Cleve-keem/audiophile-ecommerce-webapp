import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`${className}`}>
      <img src="/images/logo.png" alt="Logo image" />
    </Link>
  );
}
