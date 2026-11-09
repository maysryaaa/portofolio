import { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";

import { navItems, site } from "../../data/site";
import { cn } from "../../lib/utils";

const sectionIds = ["home", "about", "projects", "experience", "education", "contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!("IntersectionObserver" in window) || sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 sm:top-5">
      <nav aria-label="Main navigation" className="wrap">
        <div className="glass flex h-14 items-center justify-between gap-3 rounded-full px-2.5">
          <a
            href="#home"
            className="group flex items-center gap-2.5 rounded-full py-1 pl-1 pr-2"
            aria-label={`${site.name}, home`}
          >
            <span className="flex size-8 flex-none items-center justify-center rounded-full bg-ink font-display text-[12px] font-semibold leading-none tracking-[-0.02em] text-blush-wash">
              MS
            </span>
            <span className="hidden font-display text-[15px] leading-none tracking-[-0.015em] sm:block">
              May Surya
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "flex h-9 items-center rounded-full px-3.5 text-[10.5px] font-semibold uppercase tracking-[0.13em] transition-colors duration-200",
                      isActive
                        ? "bg-ink text-blush-wash"
                        : "text-ink-soft hover:bg-white/45 hover:text-ink",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            <a
              href="#contact"
              className="hidden h-9 items-center gap-2 rounded-full bg-ink px-4 text-[10.5px] font-semibold uppercase leading-none tracking-[0.13em] text-blush-wash transition-colors hover:bg-ink-soft sm:inline-flex"
            >
              Contact
              <ArrowUpRightIcon size={13} weight="bold" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="glass-soft inline-flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-white/55 md:hidden"
            >
              {open ? <XIcon size={17} /> : <ListIcon size={17} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "glass mt-2 overflow-hidden rounded-3xl transition-[max-height,opacity] duration-300 ease-out md:hidden",
            open ? "visible max-h-96 opacity-100" : "invisible max-h-0 border-transparent opacity-0",
          )}
        >
          <ul className="p-2">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-colors",
                      isActive ? "bg-white/50" : "hover:bg-white/40",
                    )}
                  >
                    <span className="font-display text-[1.35rem] leading-none tracking-[-0.02em]">
                      {item.label}
                    </span>
                    <ArrowUpRightIcon
                      size={15}
                      weight="bold"
                      className={cn(isActive ? "text-ink" : "text-ink-soft")}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="px-2 pb-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-ink text-[10.5px] font-semibold uppercase tracking-[0.13em] text-blush-wash"
            >
              Contact me
              <ArrowUpRightIcon size={13} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
