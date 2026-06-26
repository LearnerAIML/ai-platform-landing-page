"use client";

import { useState } from "react";
import {
  planCopy,
  pricingMatrix,
  type BillingCycle,
  type CurrencyCode,
  type PlanKey,
} from "@/app/data/landing";

const currencyOrder: CurrencyCode[] = ["INR", "USD", "EUR"];
const billingOptions: BillingCycle[] = ["monthly", "annual"];
const planOrder: PlanKey[] = ["starter", "pro", "enterprise"];

function formatPrice(value: number, currency: CurrencyCode) {
  const locale = pricingMatrix.currencies[currency].locale;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

function getPlanPrice(currency: CurrencyCode, plan: PlanKey, billing: BillingCycle) {
  const monthlyPrice = pricingMatrix.currencies[currency].plans[plan];
  const annualMultiplier = 12 * (1 - pricingMatrix.billingDiscount);

  return billing === "monthly" ? monthlyPrice : Math.round(monthlyPrice * annualMultiplier);
}

export function PricingPlans() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [billing, setBilling] = useState<BillingCycle>("annual");

  return (
    <div className="glass-panel-strong rounded-[2rem] p-5 sm:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/80">Pricing</p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Choose a plan that scales with your workflow.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Annual billing uses an exact 20% discount from the monthly matrix. Every price below is
            derived from the source object so the display never drifts.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1" role="tablist" aria-label="Choose currency">
            {currencyOrder.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCurrency(item)}
                aria-pressed={currency === item}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  currency === item ? "bg-cyan-200 text-slate-950" : "text-slate-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1" role="tablist" aria-label="Choose billing cycle">
            {billingOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setBilling(item)}
                aria-pressed={billing === item}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  billing === item ? "bg-white text-slate-950" : "text-slate-300 hover:text-white"
                }`}
              >
                {item === "monthly" ? "Monthly" : "Annual"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {planOrder.map((planKey, index) => {
          const price = getPlanPrice(currency, planKey, billing);
          const monthlyPrice = pricingMatrix.currencies[currency].plans[planKey];
          const plan = planCopy[planKey];
          const highlighted = planKey === "pro";

          return (
            <article
              key={plan.name}
              className={`rounded-[1.75rem] border p-6 ${
                highlighted
                  ? "border-cyan-200/40 bg-cyan-200/[0.08] shadow-[0_0_0_1px_rgba(125,214,255,0.15)]"
                  : "border-white/10 bg-white/[0.03]"
              } ${index === 1 ? "lg:-translate-y-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">{plan.name}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{plan.description}</p>
                </div>
                {highlighted ? (
                  <span className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                    Most popular
                  </span>
                ) : null}
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-end gap-3">
                  <p className="text-4xl font-semibold text-white">{formatPrice(price, currency)}</p>
                  <p className="pb-1 text-sm text-slate-400">/{billing === "monthly" ? "mo" : "yr"}</p>
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  Monthly reference {formatPrice(monthlyPrice, currency)} before the annual savings calculation.
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-200" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                  highlighted ? "bg-cyan-200 text-slate-950 hover:bg-white" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {planKey === "enterprise" ? "Talk to sales" : "Start free trial"}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}