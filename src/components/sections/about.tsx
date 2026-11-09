import { SectionHeading } from "../section-heading";
import { site, stats } from "../../data/site";

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHeading
          title="Get To Know Me."
          deck="Studying at ITERA, living in Lampung, and learning web through small projects."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7" data-reveal>
            <p className="max-w-[62ch] text-[clamp(1.05rem,1.5vw,1.22rem)] leading-[1.7] text-ink">
              {site.about[0]}
            </p>
            <p className="mt-5 max-w-[62ch] text-[15.5px] leading-[1.75] text-ink-soft">
              {site.about[1]}
            </p>

            <div className="glass sheen mt-10 rounded-3xl p-7 sm:p-9">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                Now
              </p>
              <ul className="mt-6 grid gap-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <li key={stat.label}>
                    <p className="font-display text-[clamp(1.9rem,3.2vw,2.5rem)] leading-none tracking-[-0.03em]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[9.5px] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-ink-soft">
                      {stat.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9" data-reveal>
            <div className="glass rounded-3xl p-6 sm:p-7">
              <h3 className="font-display text-[1.5rem] font-medium leading-none tracking-[-0.025em]">
                Focus
              </h3>
              <ul className="mt-5 space-y-4">
                {site.interests.map((interest) => (
                  <li key={interest.title}>
                    <p className="flex items-start gap-2.5 text-[14.5px] font-semibold leading-snug">
                      <span className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-blush-deep" aria-hidden="true" />
                      {interest.title}
                    </p>
                    <p className="mt-1.5 pl-4 text-[13px] leading-[1.65] text-ink-soft">
                      {interest.description}
                    </p>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-display text-[1.5rem] font-medium leading-none tracking-[-0.025em]">
                Skills
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {site.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-ink/10 bg-white/40 px-2.5 py-1.5 text-[9.5px] font-semibold uppercase leading-none tracking-[0.1em] text-ink-soft"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
}
