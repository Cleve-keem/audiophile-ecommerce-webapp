import AudioGear from "@/components/AudioGear";
import Menu from "@/components/Menu";

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Products Categories",
  description: "Browse our product categories",
};

export default function CategoriesLayout({ children }: Readonly<Props>) {
  return (
    <div>
      <div>{children}</div>
      <Menu />
      <AudioGear />
    </div>
  );
}
