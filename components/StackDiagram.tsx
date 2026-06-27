import { layers } from "@/lib/content";

// The signature element: an architectural cross-section of the stack you'd own.
// Each layer is a real capability; nodes connect into a single spine.
export default function StackDiagram() {
  return (
    <div className="w-full">
      <div className="mb-5 flex items-center justify-between">
        <span className="label text-signal-2">The stack you&apos;d own</span>
        <span className="label text-steel-2">06 layers</span>
      </div>

      <div className="relative">
        {layers.map((layer, i) => (
          <div
            key={layer.id}
            className="plate group relative flex gap-4"
            style={{ animationDelay: `${150 + i * 90}ms` }}
          >
            {/* spine + node */}
            <div className="relative flex w-3 flex-col items-center">
              <span
                aria-hidden
                className="mt-1 size-2.5 rotate-45 border border-steel-2/70 bg-ink transition-colors duration-300 group-hover:border-signal group-hover:bg-signal"
              />
              {i < layers.length - 1 && (
                <span
                  aria-hidden
                  className="spine w-px flex-1 bg-white/10"
                  style={{ animationDelay: `${200 + i * 90}ms` }}
                />
              )}
            </div>

            {/* content */}
            <div className="-mt-0.5 flex-1 border-b border-white/[0.06] pb-5 transition-colors duration-300 group-hover:border-signal/40">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold text-paper transition-colors duration-300 group-hover:text-white">
                  {layer.name}
                </h3>
                <span className="label text-steel-2 group-hover:text-signal-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-steel-2">
                {layer.capability}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {layer.tech.map((t) => (
                  <li
                    key={t}
                    className="border border-white/10 px-2 py-0.5 font-mono text-[0.68rem] text-paper/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
