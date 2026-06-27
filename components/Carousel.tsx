"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Carousel({
  name,
  images,
  phone = false,
}: {
  name: string;
  images: string[];
  phone?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const multi = images.length > 1;

  function nudge(dir: number) {
    const t = trackRef.current;
    if (!t) return;
    if (phone) {
      t.scrollBy({ left: dir * t.clientWidth * 0.85, behavior: "smooth" });
    } else {
      const i = Math.max(0, Math.min(index + dir, images.length - 1));
      t.scrollTo({ left: i * t.clientWidth, behavior: "smooth" });
    }
  }

  function jumpTo(i: number) {
    const t = trackRef.current;
    if (!t) return;
    t.scrollTo({ left: i * t.clientWidth, behavior: "smooth" });
  }

  function onScroll() {
    const t = trackRef.current;
    if (!t || phone) return;
    setIndex(Math.round(t.scrollLeft / t.clientWidth));
  }

  // Lightbox: lock scroll + keyboard nav.
  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((v) => (v === null ? v : Math.min(v + 1, images.length - 1)));
      if (e.key === "ArrowLeft")
        setLightbox((v) => (v === null ? v : Math.max(v - 1, 0)));
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, images.length]);

  const frame = phone ? "aspect-[137/296]" : "aspect-[16/10]";
  const slide = phone
    ? "w-[44%] shrink-0 snap-start sm:w-[31%]"
    : "min-w-full snap-center";
  const fit = phone ? "object-cover" : "object-contain p-2";

  return (
    <div>
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className={`flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            phone ? "gap-3" : ""
          }`}
        >
          {images.map((src, i) => (
            <div key={src} className={slide}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Open ${name} screenshot ${i + 1}`}
                className="group block w-full cursor-zoom-in border border-line bg-paper"
              >
                <div className={`${frame} w-full overflow-hidden`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${name} screenshot ${i + 1}`}
                    className={`h-full w-full ${fit} transition-opacity group-hover:opacity-90`}
                  />
                </div>
              </button>
            </div>
          ))}
        </div>

        {multi && (
          <>
            <button
              type="button"
              onClick={() => nudge(-1)}
              disabled={!phone && index === 0}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center border border-line bg-paper/90 text-lg text-ink backdrop-blur transition hover:bg-paper disabled:opacity-25"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              disabled={!phone && index === images.length - 1}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center border border-line bg-paper/90 text-lg text-ink backdrop-blur transition hover:bg-paper disabled:opacity-25"
            >
              ›
            </button>
          </>
        )}
      </div>

      {multi && !phone && (
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => jumpTo(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`size-2 rotate-45 border transition-colors ${
                  i === index
                    ? "border-signal bg-signal"
                    : "border-line-2 hover:border-steel"
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-steel-2">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
      )}

      {phone && multi && (
        <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-steel-2">
          {images.length} screens · scroll →
        </p>
      )}

      {lightbox !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 sm:p-10"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${name} screenshot ${lightbox + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[lightbox]}
              alt={`${name} screenshot ${lightbox + 1}`}
              className="max-h-full max-w-full border border-white/15 object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-10 place-items-center border border-white/20 text-paper transition hover:bg-white/10"
            >
              ✕
            </button>
            {multi && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(Math.max(lightbox - 1, 0));
                  }}
                  disabled={lightbox === 0}
                  aria-label="Previous screenshot"
                  className="absolute left-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center border border-white/20 text-paper transition hover:bg-white/10 disabled:opacity-25"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(Math.min(lightbox + 1, images.length - 1));
                  }}
                  disabled={lightbox === images.length - 1}
                  aria-label="Next screenshot"
                  className="absolute right-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center border border-white/20 text-paper transition hover:bg-white/10 disabled:opacity-25"
                >
                  ›
                </button>
              </>
            )}
          </div>,
          document.body,
        )}
    </div>
  );
}
