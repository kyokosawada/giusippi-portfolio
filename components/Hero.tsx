import { profile } from "@/lib/content";
import StackDiagram from "./StackDiagram";

export default function Hero() {
  return (
    <section
      id="top"
      className="blueprint relative overflow-hidden border-b border-white/10"
    >
      {/* soft signal glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-signal/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-28">
        {/* left: thesis */}
        <div className="flex flex-col justify-center">
          <p className="label flex items-center gap-2.5 text-steel-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            {profile.status}
          </p>

          <h1 className="mt-6 text-[clamp(3rem,9vw,6.75rem)] font-extrabold leading-[0.92] text-paper">
            You want <span className="text-signal">X</span>.
            <br />
            You get <span className="text-signal">X</span>.
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-steel-2">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="bg-signal px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-white transition-colors hover:bg-signal-2"
            >
              Start a build
            </a>
            <a
              href="#work"
              className="border border-white/20 px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-paper transition-colors hover:border-white/55"
            >
              See the work
            </a>
          </div>
        </div>

        {/* right: the signature diagram, framed like a drawing */}
        <div className="relative">
          <div className="relative border border-white/10 bg-ink-2/40 p-6 sm:p-7">
            <StackDiagram />
            {/* drawing title block */}
            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-steel-2 sm:grid-cols-4">
              {[
                ["Drawing", "Full-stack"],
                ["Scale", "End-to-end"],
                ["Rev", "2026"],
                ["By", "G. Apa"],
              ].map(([k, v]) => (
                <div key={k} className="bg-ink px-3 py-2">
                  <div className="text-steel-2/60">{k}</div>
                  <div className="mt-0.5 text-paper/80">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
