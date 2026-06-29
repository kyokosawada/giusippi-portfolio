"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

type State = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const params = new URLSearchParams();
    new FormData(form).forEach((value, key) => {
      params.append(key, typeof value === "string" ? value : "");
    });
    params.set("form-name", "contact");
    setState("sending");
    try {
      // Netlify Forms: POST to the static form file so Netlify processes it.
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (!res.ok) throw new Error("send failed");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <span className="label text-signal">Contact</span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            You want X.
            <br />
            Tell me your X.
          </h2>
          <p className="mt-5 max-w-md text-steel">
            What do you need built, fixed, or owned? I&apos;ll reply within a
            day.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="link-grow inline-block font-mono text-sm text-ink"
            >
              {profile.email}
            </a>
            <a
              href="/Apa_Giusippi_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="link-grow inline-block font-mono text-sm text-ink"
            >
              Download résumé (PDF) →
            </a>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-steel-2">
              {profile.status}
            </p>
          </div>

        </div>

        <div>
          {state === "sent" ? (
            <div className="flex h-full flex-col justify-center border border-signal/40 bg-signal/[0.05] p-8">
              <span className="label text-signal">Received</span>
              <p className="mt-3 text-xl font-semibold">
                Got it. I&apos;ll reply within a day.
              </p>
              <p className="mt-2 text-sm text-steel">
                It just hit my inbox.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              {/* honeypot — real people leave this empty */}
              <input
                type="text"
                name="bot-field"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />

              <Field label="Your name" name="name" autoComplete="name" />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
              />

              <label className="block">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-steel">
                  What do you need?
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none border border-line bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-signal"
                  placeholder="I want a client portal that…"
                />
              </label>

              <button
                type="submit"
                disabled={state === "sending"}
                className="bg-ink px-7 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-signal disabled:opacity-60"
              >
                {state === "sending" ? "Sending…" : "Send it"}
              </button>

              {state === "error" && (
                <p className="font-mono text-[0.72rem] text-signal">
                  Something broke on send. Email me directly at {profile.email}.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-steel">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required
        autoComplete={autoComplete}
        className="mt-2 w-full border border-line bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-signal"
      />
    </label>
  );
}
