export const projectThemes = [
  {
    accent: "text-blue-400",
    dotBorder: "border-blue-500",
    dotFill: "bg-blue-400",
    dotRing: "ring-blue-500/15",
    badge: "bg-blue-500/90",
    glow: "bg-blue-500/20",
    tag: "border-blue-500/20 bg-blue-500/10 text-blue-300",
    bullet: "bg-blue-500",
    card: "bg-linear-to-br from-blue-500/12 via-blue-950/30 to-zinc-950",
    cardBorder: "border-blue-500/25",
  },
  {
    accent: "text-violet-400",
    dotBorder: "border-violet-500",
    dotFill: "bg-violet-400",
    dotRing: "ring-violet-500/15",
    badge: "bg-violet-500/90",
    glow: "bg-violet-500/20",
    tag: "border-violet-500/20 bg-violet-500/10 text-violet-300",
    bullet: "bg-violet-500",
    card: "bg-linear-to-br from-violet-500/12 via-violet-950/30 to-zinc-950",
    cardBorder: "border-violet-500/25",
  },
  {
    accent: "text-emerald-400",
    dotBorder: "border-emerald-500",
    dotFill: "bg-emerald-400",
    dotRing: "ring-emerald-500/15",
    badge: "bg-emerald-500/90",
    glow: "bg-emerald-500/20",
    tag: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
    bullet: "bg-emerald-500",
    card: "bg-linear-to-br from-emerald-500/12 via-emerald-950/30 to-zinc-950",
    cardBorder: "border-emerald-500/25",
  },
  {
    accent: "text-amber-400",
    dotBorder: "border-amber-500",
    dotFill: "bg-amber-400",
    dotRing: "ring-amber-500/15",
    badge: "bg-amber-500/90",
    glow: "bg-amber-500/20",
    tag: "border-amber-500/20 bg-amber-500/10 text-amber-300",
    bullet: "bg-amber-500",
    card: "bg-linear-to-br from-amber-500/12 via-amber-950/30 to-zinc-950",
    cardBorder: "border-amber-500/25",
  },
  {
    accent: "text-rose-400",
    dotBorder: "border-rose-500",
    dotFill: "bg-rose-400",
    dotRing: "ring-rose-500/15",
    badge: "bg-rose-500/90",
    glow: "bg-rose-500/20",
    tag: "border-rose-500/20 bg-rose-500/10 text-rose-300",
    bullet: "bg-rose-500",
    card: "bg-linear-to-br from-rose-500/12 via-rose-950/30 to-zinc-950",
    cardBorder: "border-rose-500/25",
  },
] as const;

export function getShortName(title: string) {
  return title.split(/\s[—–-]\s/)[0].trim();
}

export function getTheme(index: number) {
  return projectThemes[index % projectThemes.length];
}
