import { IntentInput } from "@/components/planning/IntentInput";
import { Compass, MapPin, CalendarRange } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col cream-grain">
      {/* Top bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-teal text-cream">
            <Compass className="h-4 w-4" strokeWidth={2} />
          </span>
          <span className="font-display text-2xl font-medium tracking-tight text-ink">
            Journi
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-ink-soft sm:flex">
          <a href="#how" className="hover:text-ink transition">How it works</a>
          <a href="#examples" className="hover:text-ink transition">Examples</a>
          <a href="#pricing" className="hover:text-ink transition">Pricing</a>
          <a
            href="/login"
            className="rounded-full border border-ink/15 px-4 py-1.5 text-ink hover:border-ink/40 transition"
          >
            Sign in
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:py-24">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-terracotta/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-terracotta-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
          Intent-first travel planning
        </span>

        <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-7xl">
          may the{" "}
          <span className="italic text-terracotta-deep">Journi</span>{" "}
          be with you
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          Type the one thing you want to experience — a tulip field, a quiet
          café, a mountain hut. We build the rest of your trip outward from
          that, with seasonal smarts and verified context.
        </p>

        <div className="mt-10 w-full">
          <IntentInput />
        </div>

        {/* Trust strip */}
        <div className="mt-14 grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-3 sm:gap-8">
          <Feature
            icon={<MapPin className="h-4 w-4" />}
            title="Built outward from intent"
            body="Not a search box. Type what you want to do — Journi finds the place, the season, the timing."
          />
          <Feature
            icon={<CalendarRange className="h-4 w-4" />}
            title="Seasonal intelligence"
            body="Bloom windows, peak crowds, off-season closures. Surface what other tools forget."
          />
          <Feature
            icon={<Compass className="h-4 w-4" />}
            title="Honest about confidence"
            body="Every fact tagged AI-estimated, verified, or live. No hallucinated opening hours."
          />
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-6 py-8 text-xs text-ink-soft/60 sm:px-10">
        © {new Date().getFullYear()} Journi · Built for travellers who plan with intent
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-ink/5 bg-white/50 p-5 backdrop-blur-sm">
      <div className="mb-3 inline-grid h-7 w-7 place-items-center rounded-md bg-teal/10 text-teal">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
