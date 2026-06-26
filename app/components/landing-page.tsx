import { FeatureShowcase } from "@/app/components/feature-showcase";
import { PricingPlans } from "@/app/components/pricing-plans";
import { SectionHeading } from "@/app/components/section-heading";
import { companyLogos, faqItems, testimonials, trustedStats } from "@/app/data/landing";

function SectionShell({
  children,
  className = "",
  ...sectionProps
}: Readonly<React.ComponentPropsWithoutRef<"section">>) {
  return (
    <section
      {...sectionProps}
      className={`relative mx-auto w-full max-w-7xl px-6 ${className}`}
    >
      {children}
    </section>
  );
}

export function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 noise-grid opacity-[0.07]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl animate-pulse-sheen" />

      <SectionShell className="pt-6 sm:pt-8 lg:pt-10">
        <header className="glass-panel sticky top-4 z-20 rounded-full px-5 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-200 text-sm font-bold text-slate-950">
                AI
              </div>
              <div>
                <p className="text-sm font-semibold text-white">AstraIQ</p>
                <p className="text-xs text-slate-400">Premium AI automation</p>
              </div>
            </div>

            <nav aria-label="Primary" className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#pricing" className="transition hover:text-white">
                Pricing
              </a>
              <a href="#testimonials" className="transition hover:text-white">
                Testimonials
              </a>
              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>
            </nav>
          </div>
        </header>
      </SectionShell>

      <SectionShell className="pb-12 pt-14 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div className="relative z-10">
            <div className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-medium text-cyan-100">
              AI SaaS that feels built for the next decade
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-7xl">
              Ship premium AI experiences for customers and teams.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              AstraIQ combines workflow automation, governed AI agents, and live context into one polished platform. Launch faster, operate cleaner, and scale without sacrificing control.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
              >
                Book a demo
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View pricing
              </a>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {trustedStats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-3xl p-4">
                  <dt className="text-xs uppercase tracking-[0.24em] text-slate-400">{stat.label}</dt>
                  <dd className="mt-3 text-2xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-200/10 blur-2xl animate-drift" />
            <article className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/80">
                    Control center
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    An interface designed to feel calm, fast, and precise.
                  </h2>
                </div>
                <div className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  Live
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Workflow</p>
                  <p className="mt-3 text-lg font-semibold text-white">Auto-route support intents</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Inbound requests are triaged, summarized, and routed before an agent sees them.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Confidence</p>
                  <p className="mt-3 text-lg font-semibold text-white">Guardrails enabled</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Policies, approval steps, and source citations remain visible throughout.
                  </p>
                </div>
                <div className="sm:col-span-2 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-200/14 to-indigo-400/10 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">
                        Response quality
                      </p>
                      <p className="mt-3 text-3xl font-semibold text-white">98.4%</p>
                    </div>
                    <div className="h-20 w-20 rounded-full border border-white/10 bg-[conic-gradient(from_180deg,rgba(141,225,255,0.96),rgba(124,140,255,0.25),rgba(255,255,255,0.06),rgba(141,225,255,0.96))] p-2">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                        Trust
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="py-8 sm:py-10">
        <div className="glass-panel rounded-[2rem] px-6 py-5">
          <p className="text-center text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
            Trusted by high-growth teams building with AI
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {companyLogos.map((company) => (
              <div
                key={company}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center text-sm font-medium text-slate-200"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="features" className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Features"
            title="Built to look premium and behave like production software."
            description="The same section adapts to desktop and mobile without losing the editorial feel. On large screens, the feature set becomes a bento grid; on mobile, it collapses into a clear accordion so the page stays fast and usable."
          />
          <FeatureShowcase />
        </div>
      </SectionShell>

      <SectionShell id="testimonials" className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="Teams choose AstraIQ when they want speed without sacrificing taste."
          description="The experience is designed to feel trustworthy at first glance, then hold up under the demands of real operations and real users."
          align="center"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="glass-panel rounded-[2rem] p-6">
              <blockquote className="text-base leading-7 text-slate-200">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="pricing" className="py-16 sm:py-20 lg:py-24">
        <PricingPlans />
      </SectionShell>

      <SectionShell id="faq" className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to the questions teams ask before they start."
            description="Everything is structured to help a buyer move from curiosity to confidence without hunting for details."
          />
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="glass-panel rounded-[1.5rem] border border-white/10 p-5"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="contact" className="py-16 sm:py-20 lg:py-24">
        <div className="glass-panel-strong overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/80">
                Contact CTA
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to see the platform live in your workflow?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Book a demo, review your rollout plan, and see how the pricing matrix maps to your
                team size and deployment goals.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
                Start the conversation
              </p>
              <a
                href="mailto:hello@astraiq.ai"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
              >
                hello@astraiq.ai
              </a>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                We usually respond within one business day with a plan tailored to your use case.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <footer className="border-t border-white/10 py-10">
        <SectionShell>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400">
              © 2026 AstraIQ. Premium AI infrastructure for ambitious teams.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#pricing" className="transition hover:text-white">
                Pricing
              </a>
              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>
            </div>
          </div>
        </SectionShell>
      </footer>
    </main>
  );
}