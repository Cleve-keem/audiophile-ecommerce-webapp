import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`${className}`}>
      <div className="w-24">
        <img src="/images/logo.png" alt="Logo image" />
      </div>
    </Link>
  );
}
