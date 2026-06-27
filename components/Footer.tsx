import { nav, profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="blueprint mt-auto">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold text-paper">
              {profile.name}
            </p>
            <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-signal-2">
              {profile.status}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-grow mt-3 inline-block font-mono text-sm text-steel-2 hover:text-paper"
            >
              {profile.email}
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-steel-2 transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel-2/70 sm:flex-row sm:justify-between">
          <span>Built with Next.js · Supabase · Netlify · Claude Code</span>
          <span>© 2026 {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}
