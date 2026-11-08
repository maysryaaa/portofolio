import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/csr/ArrowUpRight";

import { CopyEmail } from "../copy-email";
import { SocialLinks } from "../social-links";
import { site } from "../../data/site";

export function Contact() {
  return (
    <section id="contact" className="py-[clamp(3rem,6vw,5rem)]">
      <div className="wrap">
        <div className="glass-dark sheen rounded-[2.25rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <span
            className="pointer-events-none absolute -right-32 -top-40 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(252,142,172,0.55),transparent_66%)]"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute -bottom-44 -left-24 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,221,228,0.22),transparent_70%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[clamp(2.9rem,7.4vw,5.4rem)] font-medium leading-[0.9] tracking-[-0.04em] text-blush-wash">
                Mari bicara.
              </h2>
              <p className="mt-6 max-w-[40ch] text-[15.5px] leading-[1.7] text-blush-muted">
                Saya terbuka untuk magang, kolaborasi, atau pekerjaan freelance di bidang web.
              </p>
            </div>

            <div className="lg:col-span-5 lg:self-end">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-blush-muted">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2.5 block break-all font-display text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.15] tracking-[-0.02em] text-blush-wash underline decoration-blush-wash/40 underline-offset-[0.18em] transition-colors hover:decoration-blush-wash"
              >
                {site.email}
              </a>

              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex h-11 items-center gap-2.5 rounded-full bg-blush-wash px-5 text-[10px] font-semibold uppercase leading-none tracking-[0.14em] text-ink transition-colors hover:bg-white"
                >
                  Kirim email
                  <ArrowUpRightIcon size={13} weight="bold" aria-hidden="true" />
                </a>
                <CopyEmail
                  email={site.email}
                  className="border-blush-wash/35 text-blush-wash hover:border-blush-wash hover:bg-blush-wash/15 hover:text-blush-wash"
                />
              </div>

              <dl className="mt-9 flex flex-wrap items-start justify-between gap-x-6 gap-y-4 border-t border-blush-wash/15 pt-5">
                <div>
                  <dt className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-blush-muted">
                    Lokasi
                  </dt>
                  <dd className="mt-1.5 text-[13px] font-medium">{site.location}</dd>
                </div>
                <div>
                  <dt className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-blush-muted">
                    Media sosial
                  </dt>
                  <dd className="mt-2">
                    <SocialLinks
                      items={site.socials}
                      className="[&_a]:text-blush-muted [&_a:hover]:text-blush-wash"
                    />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
