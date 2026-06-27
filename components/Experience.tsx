import { experience, education } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <span className="label text-signal">Experience</span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Where I&apos;ve worked.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* timeline */}
          <ol className="relative border-l border-line-2 pl-7">
            {experience.map((e, i) => (
              <Reveal
                as="li"
                key={e.org}
                delay={i * 70}
                className="relative pb-10 last:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute -left-[1.84rem] top-1.5 size-2.5 rotate-45 border border-signal bg-paper"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-xl font-bold">{e.role}</h3>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-steel">
                    {e.period}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-sm text-signal">{e.org}</p>
                <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-ink/80">
                  {e.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {e.tech.map((t) => (
                    <li
                      key={t}
                      className="border border-line-2 px-2 py-0.5 font-mono text-[0.66rem] text-steel"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          {/* education */}
          <div>
            <Reveal>
              <span className="label text-steel-2">Education</span>
              <h3 className="mt-3 text-lg font-bold">{education.school}</h3>
              <p className="mt-1 text-sm text-ink/80">{education.degree}</p>
              <p className="mt-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-steel">
                {education.place} · {education.period}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
