import { SectionHeading } from "../section-heading";
import { education } from "../../data/site";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <SectionHeading
          title="Learning Path."
          deck="From secondary school to an informatics degree."
        />

        <ol className="relative mt-14 border-l border-line pl-0">
          {education.map((item) => {
            const [start, end] = item.period.split("-").map((part) => part.trim());
            const top = end ?? start;
            const bottom = end ? start : null;

            return (
              <li
                key={item.institution}
                className="relative pb-12 pl-8 last:pb-0 sm:pl-12"
                data-reveal
              >
                <span
                  className="absolute -left-[5px] top-2.5 size-[9px] rounded-full bg-ink"
                  aria-hidden="true"
                />

                <div className="grid gap-3 sm:grid-cols-12 sm:gap-8">
                  <p className="font-display text-[clamp(1.35rem,2.4vw,1.8rem)] leading-none tracking-[-0.03em] sm:col-span-3">
                    <span className="block">{top}</span>
                    {bottom ? <span className="mt-1.5 block text-ink-soft">{bottom}</span> : null}
                  </p>

                  <div className="sm:col-span-9">
                    <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.15rem)] font-medium leading-[1.04] tracking-[-0.028em]">
                      {item.institution}
                    </h3>
                    <p className="mt-2 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                      {item.degree}
                    </p>
                    {"description" in item ? (
                      <p className="mt-4 max-w-[62ch] text-[14.5px] leading-[1.7] text-ink-soft">
                        {item.description}
                      </p>
                    ) : null}
                    {item.current ? (
                      <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/40 px-2.5 py-1.5 text-[9px] font-semibold uppercase leading-none tracking-[0.13em] text-ink">
                        <span className="pulse-dot" aria-hidden="true" />
                        In Progress
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
