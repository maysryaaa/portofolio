import { ArrowDownIcon } from "@phosphor-icons/react/dist/csr/ArrowDown";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/csr/ArrowUpRight";

import { SocialLinks } from "../social-links";
import { site } from "../../data/site";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh flex-col overflow-x-clip pb-8 pt-28 sm:pt-32">
      <div className="wrap flex flex-1 items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-4">
          <div className="relative z-10 lg:col-span-8">
            <h1 className="font-display text-[clamp(2.7rem,8.4vw,7.4rem)] font-medium leading-[0.9] tracking-[-0.04em]">
              <span className="rise-mask">
                <span className="hero-rise">May Surya</span>
              </span>
              <span className="rise-mask">
                <span className="hero-rise text-ink-soft" style={{ animationDelay: "0.16s" }}>
                  Beni Juliasari
                </span>
              </span>
            </h1>

            <p
              className="hero-fade mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10.5px] font-semibold uppercase leading-none tracking-[0.16em]"
              style={{ animationDelay: "0.4s" }}
            >
              <span>{site.role}</span>
              <span className="size-1 rounded-full bg-ink/40" aria-hidden="true" />
              <span className="text-ink-soft">{site.focus}</span>
            </p>

            <p
              className="hero-fade mt-6 max-w-[46ch] text-[16px] leading-[1.7] text-ink-soft"
              style={{ animationDelay: "0.5s" }}
            >
              {site.description}
            </p>

            <div
              className="hero-fade mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#contact"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-6 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-blush-wash shadow-[0_18px_36px_-16px_rgba(42,16,32,0.7)] transition-colors duration-200 hover:bg-ink-soft"
              >
                Contact me
                <ArrowUpRightIcon
                  size={14}
                  weight="bold"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#projects"
                className="glass-soft group inline-flex h-12 items-center gap-2.5 rounded-full px-6 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:bg-white/55"
              >
                View projects
                <ArrowDownIcon
                  size={14}
                  weight="bold"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </div>

          <figure className="relative isolate mx-auto w-full max-w-[19rem] lg:col-span-4 lg:-ml-16 lg:max-w-none xl:-ml-24">
            <span className="caustic" aria-hidden="true" />

            <span
              className="glass-soft absolute -inset-2 rotate-[2.5deg] rounded-[2rem]"
              aria-hidden="true"
            />

            <div className="glass sheen develop relative z-10 aspect-[4/5] -rotate-[1.5deg] overflow-hidden p-2.5">
              <img
                src="/images/profile.png"
                alt={`Photo of ${site.name}`}
                width={433}
                height={577}
                fetchPriority="high"
                className="h-full w-full rounded-[1.2rem] object-cover"
              />
              <span
                className="pointer-events-none absolute inset-2.5 rounded-[1.2rem] ring-1 ring-white/45"
                aria-hidden="true"
              />
            </div>

            <figcaption className="glass absolute -bottom-7 left-3 right-3 z-20 flex items-end justify-between gap-3 rounded-2xl px-4 py-3">
              <span className="text-[9.5px] font-semibold uppercase leading-[1.5] tracking-[0.13em] text-ink">
                {site.name}
                <span className="mt-1 block text-[10px] font-medium normal-case tracking-normal text-ink-soft">
                  {site.location}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="wrap">
        <div
          className="hero-fade mt-16 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between"
          style={{ animationDelay: "0.72s" }}
        >
          <span className="glass-soft inline-flex items-center gap-2.5 self-start rounded-full py-1.5 pl-2.5 pr-3.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-ink">
            <span className="pulse-dot" aria-hidden="true" />
            Open to internships and freelance work
          </span>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={`mailto:${site.email}`}
              className="text-[12px] font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
            >
              {site.email}
            </a>
            <SocialLinks items={site.socials} />
          </div>
        </div>
      </div>
    </section>
  );
}
