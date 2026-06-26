type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">{eyebrow}</p>
      ) : null}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
      </div>
    </div>
  );
}