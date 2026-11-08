import { SectionHeading } from "../section-heading";
import { education } from "../../data/site";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <SectionHeading
          title="Jalur belajar."
          deck="Pendidikan menengah sampai kuliah Teknik Informatika."
        />

        <ol className="mt-14 grid gap-5">
          {education.map((item, index) => {
            const [start, end] = item.period.split("-").map((part) => part.trim());

            return (
              <li
                key={item.institution}
                className={
                  index === 0
                    ? "glass sheen grid gap-6 rounded-[1.75rem] p-6 sm:p-8 lg:grid-cols-12 lg:items-start lg:gap-8"
                    : "glass-soft grid gap-6 rounded-[1.75rem] p-6 sm:p-8 lg:grid-cols-12 lg:items-start lg:gap-8"
                }
                data-reveal
              >
                <p className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] leading-none tracking-[-0.03em] text-ink lg:col-span-3">
                  <span className="block">{start}</span>
                  {end ? <span className="mt-1.5 block text-ink-soft">{end}</span> : null}
                </p>

                <div className="lg:col-span-9">
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
                      Sedang berjalan
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
