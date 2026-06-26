import { featureItems } from "@/app/data/landing";

export function FeatureShowcase() {
  return (
    <div>
      <div className="hidden gap-5 md:grid md:grid-cols-12">
        <article className="glass-panel-strong animate-drift col-span-7 rounded-[2rem] p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/80">
            Platform view
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {featureItems.slice(0, 4).map((feature, index) => (
              <section
                key={feature.title}
                className={`rounded-3xl border border-white/8 p-5 ${
                  index === 0 ? "bg-white/5 sm:col-span-2" : "bg-white/[0.03]"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/70">
                  {feature.metric}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
              </section>
            ))}
          </div>
        </article>

        <aside className="col-span-5 grid gap-5">
          <section className="glass-panel rounded-[2rem] p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/80">
              Real-time performance
            </p>
            <div className="mt-6 space-y-4">
              {featureItems.slice(4).map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{feature.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel animate-float-up rounded-[2rem] p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/80">
              Deployment signal
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Latency</p>
                <p className="mt-3 text-2xl font-semibold text-white">120ms</p>
              </div>
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Accuracy</p>
                <p className="mt-3 text-2xl font-semibold text-white">98.4%</p>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <div className="space-y-3 md:hidden">
        {featureItems.map((feature) => (
          <details key={feature.title} className="glass-panel rounded-3xl border border-white/10 p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white marker:hidden">
              <span>{feature.title}</span>
              <span aria-hidden="true" className="text-cyan-200/80">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/70">
              {feature.metric}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}