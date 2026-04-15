"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const EXAMPLES = [
  "I want to see the tulips in Netherlands",
  "I want to find the Miffy store in Utrecht",
  "I want to hike in the Faroe Islands",
  "I want to ski near Innsbruck",
  "I want to chase the northern lights in Tromsø",
  "I want to eat ramen in Tokyo in winter",
];

export function IntentInput() {
  const [value, setValue] = useState("");
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (value.length > 0) return;
    const id = setInterval(() => {
      setPlaceholderIdx((i) => (i + 1) % EXAMPLES.length);
    }, 3500);
    return () => clearInterval(id);
  }, [value]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setSubmitting(true);
    // TODO: wire to /api/ai/build-trip Claude streaming endpoint
    setTimeout(() => setSubmitting(false), 1200);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="group relative rounded-2xl bg-white/80 shadow-[0_1px_0_rgba(31,27,22,0.04),0_24px_60px_-20px_rgba(31,27,22,0.18)] ring-1 ring-ink/5 backdrop-blur transition focus-within:ring-2 focus-within:ring-teal/40">
        <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-terracotta">
          <Sparkles className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={EXAMPLES[placeholderIdx]}
          aria-label="What's the one thing you want to experience?"
          className="w-full bg-transparent py-5 pl-14 pr-32 text-lg text-ink placeholder:text-ink-soft/50 focus:outline-none sm:py-6 sm:text-xl"
        />
        <button
          type="submit"
          disabled={!value.trim() || submitting}
          className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-xl bg-teal px-4 py-2.5 text-sm font-medium text-cream transition hover:bg-teal-deep disabled:cursor-not-allowed disabled:opacity-40 sm:px-5"
        >
          <span className="hidden sm:inline">
            {submitting ? "Building…" : "Build my trip"}
          </span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <p className="mt-3 text-center text-sm text-ink-soft/70">
        Start with one thing. Journi builds the rest.
      </p>
    </form>
  );
}
