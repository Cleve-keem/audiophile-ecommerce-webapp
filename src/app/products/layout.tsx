import AudioGear from "@/components/AudioGear";
import Menu from "@/components/Menu";
import PageTitle from "@/components/PageTitle";

type Props = {
  children: React.ReactNode;
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
