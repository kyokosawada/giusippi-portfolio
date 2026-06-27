import { projects } from "@/lib/content";
import Reveal from "./Reveal";
import Carousel from "./Carousel";

function Gallery({
  name,
  images,
  phone,
}: {
  name: string;
  images?: string[];
  phone?: boolean;
}) {
  // Placeholder until screenshots are dropped in.
  if (!images || images.length === 0) {
    return (
      <div className="blueprint-light grid aspect-[16/10] w-full place-items-center border border-line bg-paper">
        <div className="text-center">
          <span className="label text-steel-2/80">{name}</span>
          <p className="mt-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-steel-2/50">
            screenshot
          </p>
        </div>
      </div>
    );
  }

  return <Carousel name={name} images={images} phone={phone} />;
}

export default function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <span className="label text-signal">Selected work</span>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
            Systems I&apos;ve built and run.
          </h2>
          <p className="mt-5 max-w-xl text-steel">
            Owned end to end. Client code is confidential — I can walk you
            through it and share screenshots; Mystica is live on Google Play.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((p) => (
            <Reveal
              as="article"
              key={p.id}
              className="grid gap-8 border border-line bg-card p-6 transition-colors hover:border-signal/50 sm:p-8 lg:grid-cols-5 lg:gap-10"
            >
              {/* text */}
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold sm:text-3xl">{p.name}</h3>
                  {p.badge && (
                    <span className="mt-1 shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-steel-2">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-steel">
                  {p.role}
                </p>

                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/85">
                  {p.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2.5 text-[0.88rem] leading-snug text-ink/80"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-signal/70"
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="border border-line-2 px-2 py-0.5 font-mono text-[0.66rem] text-steel"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* screenshots */}
              <div className="lg:col-span-3 lg:self-center">
                <Gallery name={p.name} images={p.images} phone={p.phone} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
