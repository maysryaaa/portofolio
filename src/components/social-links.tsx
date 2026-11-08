import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/csr/InstagramLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/csr/LinkedinLogo";

import { cn } from "../lib/utils";

type SocialIcon = "github" | "instagram" | "linkedin";

interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

const socialIcons: Record<SocialIcon, typeof GithubLogoIcon> = {
  github: GithubLogoIcon,
  instagram: InstagramLogoIcon,
  linkedin: LinkedinLogoIcon,
};

interface SocialLinksProps {
  items: readonly SocialLink[];
  className?: string;
}

export function SocialLinks({ items, className }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-5 gap-y-2", className)}>
      {items.map((item) => {
        const Icon = socialIcons[item.icon] ?? GithubLogoIcon;
        return (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={item.label}
              title={item.label}
              className="group inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase leading-none tracking-[0.14em] text-ink-soft transition-colors hover:text-ink"
            >
              <Icon
                size={14}
                weight="regular"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
