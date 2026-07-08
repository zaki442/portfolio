export default function SectionHeading({
  path,
  title,
  highlight,
}: {
  path: string;
  title: string;
  highlight: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-muted tracking-wider mb-3">~/{path}</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
        {title} <span className="text-accent">{highlight}</span>
      </h2>
      <div className="h-px bg-border mt-6" />
    </div>
  );
}
