import { pillars } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="blueprint border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <span className="label text-signal-2">How I work</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold text-paper sm:text-5xl">
            An AI agentic workflow.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel-2">
            I run AI agents — orchestrated with Claude Code — to design, build,
            and check work in parallel. The tooling isn&apos;t the point. The
            result is: features ship fast, and ship right.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.k} className="bg-ink p-7">
              <div className="flex items-center gap-2.5">
                <span aria-hidden className="size-2 rotate-45 bg-signal" />
                <h3 className="text-xl font-bold text-paper">{p.k}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-steel-2">
                {p.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
