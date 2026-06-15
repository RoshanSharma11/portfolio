export default function SiteBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[var(--surface)]" />
      <div className="absolute inset-0 site-paper-tone" />
      <div className="absolute inset-0 site-grain-coarse" />
      <div className="absolute inset-0 site-grain-fine" />
      <div className="absolute inset-0 site-grain-film" />
      <div className="absolute inset-0 site-vignette" />
    </div>
  );
}
