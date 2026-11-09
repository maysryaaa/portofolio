import { ArrowUpIcon } from "@phosphor-icons/react/dist/csr/ArrowUp";

import { SocialLinks } from "../social-links";
import { footerSocials, site } from "../../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-8">
      <div className="wrap">
        <div className="flex flex-col gap-6 border-t border-line pt-6 lg:flex-row lg:items-center lg:justify-between">
          <a
            href="#home"
            className="font-display text-[1.35rem] font-medium leading-none tracking-[-0.03em]"
          >
            May Surya
          </a>

          <p className="max-w-[44ch] text-[11.5px] leading-[1.7] text-ink-soft">
            Built with Astro, React, and Tailwind CSS.
          </p>

          <SocialLinks items={footerSocials} />

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUpIcon
              size={12}
              weight="bold"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="mt-7 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          <span>Lampung, Indonesia</span>
          <span>© {year} {site.firstName}</span>
        </div>
      </div>
    </footer>
  );
}
