export default function PageHeadline({ title }: { title: string }) {
  return (
    <div className="flex justify-center py-5 bg-foreground">
      <h1 className="text-h4 uppercase text-secondary-white tracking-h1">{title}</h1>
    </div>
  );
}
