import { nav, profile } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-2.5">
          <span className="font-display text-lg font-bold tracking-tight">
            {profile.name}
          </span>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.18em] text-steel sm:inline">
            {profile.tagline}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="/Apa_Giusippi_Resume.pdf"
            target="_blank"
            rel="noopener"
            className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel transition-colors hover:text-ink"
          >
            Résumé
          </a>
          <a
            href="#contact"
            className="bg-ink px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-signal"
          >
            Start a build
          </a>
        </div>
      </nav>
    </header>
  );
}
