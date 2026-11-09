import { SectionHeading } from "../section-heading";
import { experiences } from "../../data/site";
import { cn } from "../../lib/utils";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHeading
          title="Experiences."
          deck="Campus events I helped organize, from operations to registration."
        />

        <ol className="mt-14 grid gap-14">
          {experiences.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10"
              data-reveal
            >
              <figure
                className={cn(
                  "lg:col-span-6",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <div className="glass sheen rounded-[1.75rem] p-2.5">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="aspect-[16/10] w-full rounded-[1.35rem] object-cover"
                  />
                </div>
              </figure>

              <div
                className={cn(
                  "lg:col-span-6",
                  index % 2 === 1 && "lg:order-1",
                )}
              >
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9.5px] font-semibold uppercase leading-none tracking-[0.16em] text-ink-soft">
                  <span>{item.period}</span>
                  <span className="size-1 rounded-full bg-ink/40" aria-hidden="true" />
                  <span>{item.role}</span>
                </p>
                <h3 className="mt-4 font-display text-[clamp(1.7rem,3vw,2.5rem)] font-medium leading-[1.04] tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[56ch] text-[14.5px] leading-[1.7] text-ink-soft">
                  {item.description}
                </p>
                <p className="mt-3 max-w-[56ch] border-l border-ink/20 pl-4 text-[14.5px] leading-[1.7] text-ink">
                  {item.contribution}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
