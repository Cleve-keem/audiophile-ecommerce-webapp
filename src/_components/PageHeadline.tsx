export default function PageHeadline({ title }: { title: string }) {
  return (
    <div className="flex justify-center py-5 bg-foreground">
      <h1 className="uppercase text-secondary-white">{title}</h1>
    </div>
  );
}
