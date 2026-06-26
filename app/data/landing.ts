export type CurrencyCode = "INR" | "USD" | "EUR";
export type BillingCycle = "monthly" | "annual";
export type PlanKey = "starter" | "pro" | "enterprise";

export const pricingMatrix = {
  billingDiscount: 0.2,
  currencies: {
    INR: {
      code: "INR",
      locale: "en-IN",
      plans: {
        starter: 2500,
        pro: 6500,
        enterprise: 16500,
      },
    },
    USD: {
      code: "USD",
      locale: "en-US",
      plans: {
        starter: 25,
        pro: 75,
        enterprise: 195,
      },
    },
    EUR: {
      code: "EUR",
      locale: "en-IE",
      plans: {
        starter: 25,
        pro: 70,
        enterprise: 180,
      },
    },
  } as const,
} as const;

export const companyLogos = ["Northstar", "Vector Labs", "Axiom", "Momentum", "Helix", "Mosaic"] as const;

export const featureItems = [
  {
    title: "Autonomous workflows",
    description:
      "Turn repetitive operations into self-healing automations with governance, approvals, and rollback built in.",
    detail:
      "Design once, deploy across support, sales, and internal ops without rebuilding the stack for every team.",
    metric: "3.8x faster execution",
  },
  {
    title: "Context that stays current",
    description:
      "Connect documents, tickets, and product telemetry so every answer reflects the latest source of truth.",
    detail: "Fresh context is continuously indexed from your workspace, CRM, and analytics tools.",
    metric: "Live knowledge sync",
  },
  {
    title: "Security by default",
    description:
      "Fine-grained access controls, audit trails, and policy layers keep sensitive tasks inside guardrails.",
    detail: "Enterprise controls are available from day one instead of being bolted on later.",
    metric: "SOC-ready workflows",
  },
  {
    title: "Decision analytics",
    description:
      "See which prompts, agents, and automations create value so you can tune outcomes instead of guessing.",
    detail:
      "Every interaction ships with measurable impact across time saved, revenue, and retention.",
    metric: "Impact at a glance",
  },
  {
    title: "Multimodal intake",
    description:
      "Process text, images, PDFs, and structured data in one pipeline for richer task execution.",
    detail:
      "One interface for support, operations, and research teams handling mixed-format inputs.",
    metric: "One system, many formats",
  },
  {
    title: "Team memory",
    description:
      "Capture decisions and preferred workflows so new teammates inherit institutional knowledge instantly.",
    detail: "Standardize best practices without building a separate knowledge base.",
    metric: "Knowledge compounds",
  },
] as const;

export const testimonials = [
  {
    quote:
      "AstraIQ gave us the speed of a startup and the control of an enterprise platform in one deployable layer.",
    name: "Maya Chen",
    role: "VP of Operations, Northstar",
  },
  {
    quote:
      "Our support team now ships responses in minutes instead of hours, and the tone stays on-brand every time.",
    name: "Arjun Patel",
    role: "Head of CX, Vector Labs",
  },
  {
    quote:
      "The pricing model is clear, the experience feels premium, and the automation actually earns its keep.",
    name: "Sofia Almeida",
    role: "Founder, Mosaic",
  },
] as const;

export const faqItems = [
  {
    question: "How fast can we launch?",
    answer:
      "Most teams can launch a pilot in days because the platform ships with templates, guardrails, and ready-made integrations.",
  },
  {
    question: "Can we control access by team?",
    answer:
      "Yes. Permissions, approvals, and audit logs are built into the experience so every workflow can follow your internal policies.",
  },
  {
    question: "Does annual billing really save 20%?",
    answer:
      "Yes. The annual option is always computed from the monthly matrix with an exact 20% discount applied to twelve months.",
  },
  {
    question: "Can the pricing be customized for enterprise?",
    answer:
      "Absolutely. Enterprise plans include room for custom terms, advanced support, and deeper deployment guidance.",
  },
] as const;

export const trustedStats = [
  { label: "Average onboarding", value: "9 days" },
  { label: "Automation accuracy", value: "98.4%" },
  { label: "Time saved weekly", value: "31 hrs" },
] as const;

export const planCopy = {
  starter: {
    name: "Starter",
    description: "For fast-moving teams shipping their first AI workflows.",
    features: ["2 workflows", "Core integrations", "Email support"],
  },
  pro: {
    name: "Pro",
    description: "For growing teams that need scale, governance, and analytics.",
    features: ["Unlimited workflows", "Advanced analytics", "Priority support"],
  },
  enterprise: {
    name: "Enterprise",
    description: "For regulated organizations with complex deployment needs.",
    features: ["SAML SSO", "Dedicated rollout", "Custom SLAs"],
  },
} as const;