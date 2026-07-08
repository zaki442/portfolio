export type Domain = "build" | "secure" | "trade";

export const domainStyle: Record<
  Domain,
  { dot: string; text: string; hoverText: string; hoverBorderL: string }
> = {
  build: {
    dot: "bg-accent",
    text: "text-accent",
    hoverText: "group-hover:text-accent",
    hoverBorderL: "hover:border-l-accent",
  },
  secure: {
    dot: "bg-signal",
    text: "text-signal",
    hoverText: "group-hover:text-signal",
    hoverBorderL: "hover:border-l-signal",
  },
  trade: {
    dot: "bg-ticker",
    text: "text-ticker",
    hoverText: "group-hover:text-ticker",
    hoverBorderL: "hover:border-l-ticker",
  },
};
