import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";

import { SectionHeading } from "../section-heading";
import { projects, site } from "../../data/site";
import { cn } from "../../lib/utils";

function ProjectTags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-ink/10 bg-white/35 px-2.5 py-1.5 text-[9.5px] font-semibold uppercase leading-none tracking-[0.1em] text-ink-soft"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const [lead, ...rest] = projects;
  const leadHref = lead.demo ?? lead.source;
  const leadExternal = !leadHref.startsWith("#");

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHeading
          title="Proyek yang saya kerjakan."
          deck="Tiga proyek. Yang terakhir adalah website ini."
        />

        <article className="mt-14" data-reveal>
          <div className="glass sheen rounded-[2rem] p-3 sm:p-4">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-6">
              <a
                href={leadHref}
                target={leadExternal ? "_blank" : undefined}
                rel={leadExternal ? "noreferrer noopener" : undefined}
                className="group block lg:col-span-7"
                aria-label={`Buka ${lead.demo ? "demo" : "kode sumber"} ${lead.title}`}
              >
                <div className="relative overflow-hidden rounded-[1.45rem]">
                  <img
                    src={lead.image}
                    alt={`Ilustrasi contoh antarmuka ${lead.title}`}
                    width={800}
                    height={500}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[8.5px] font-semibold uppercase leading-none tracking-[0.12em] text-blush-wash backdrop-blur-sm">
                    Ilustrasi contoh
                  </span>
                </div>
              </a>

              <div className="px-3 pb-5 lg:col-span-5 lg:py-4 lg:pl-2 lg:pr-6">
                <h3 className="font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-medium leading-[1.02] tracking-[-0.03em]">
                  {lead.title}
                </h3>
                <p className="mt-4 max-w-[46ch] text-[14.5px] leading-[1.7] text-ink-soft">
                  {lead.description}
                </p>
                <ProjectTags tags={lead.tags} />
                <a
                  href={leadHref}
                  target={leadExternal ? "_blank" : undefined}
                  rel={leadExternal ? "noreferrer noopener" : undefined}
                  className="group mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-blush-deep"
                >
                  {lead.demo ? "Buka demo" : "Lihat kode sumber"}
                  <ArrowUpRightIcon
                    size={13}
                    weight="bold"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-8 grid gap-8 md:grid-cols-12">
          {rest.map((project, index) => {
            const href = project.demo ?? project.source;
            const isExternal = !href.startsWith("#");

            return (
              <article
                key={project.title}
                className={cn("md:col-span-7", index === 1 && "md:col-span-5 md:mt-16")}
                data-reveal
              >
                <div className="glass rounded-[1.75rem] p-2.5">
                  <a
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer noopener" : undefined}
                    className="group block"
                    aria-label={`Buka ${project.demo ? "demo" : "kode sumber"} ${project.title}`}
                  >
                    <div className="relative overflow-hidden rounded-[1.35rem]">
                      <img
                        src={project.image}
                        alt={`Ilustrasi contoh antarmuka ${project.title}`}
                        width={800}
                        height={500}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[8.5px] font-semibold uppercase leading-none tracking-[0.12em] text-blush-wash backdrop-blur-sm">
                        Ilustrasi contoh
                      </span>
                    </div>
                  </a>

                  <div className="px-3 pb-4 pt-5">
                    <h3 className="font-display text-[clamp(1.5rem,2.4vw,1.95rem)] font-medium leading-[1.06] tracking-[-0.025em]">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-[14px] leading-[1.7] text-ink-soft">
                      {project.description}
                    </p>
                    <ProjectTags tags={project.tags} />
                    <a
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer noopener" : undefined}
                      className="group mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-blush-deep"
                    >
                      {project.demo ? "Buka demo" : "Lihat kode sumber"}
                      <ArrowUpRightIcon
                        size={13}
                        weight="bold"
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-end" data-reveal>
          <a
            href={site.socials[0].href}
            target="_blank"
            rel="noreferrer noopener"
            className="glass-soft group inline-flex h-11 items-center gap-2.5 rounded-full px-5 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:bg-white/55"
          >
            <GithubLogoIcon size={14} aria-hidden="true" />
            Proyek lain di GitHub
            <ArrowUpRightIcon
              size={12}
              weight="bold"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
