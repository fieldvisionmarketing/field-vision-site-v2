import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_m9DePxNM.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://fieldvisiongroup.com");
function getStaticPaths() {
  const pages = {
    "fractional-cmo-sf": {
      title: "Fractional CMO for SF Startups",
      headline: "Your Startup Needs a Marketing Leader \u2014 Not Another Agency",
      subheadline: "Get executive-level marketing strategy, systems, and team oversight at a fraction of the cost of a full-time CMO.",
      cta: "Book a Free Strategy Call",
      bookingUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ000qS7-Zde2OJuhy9OE-k5POEPYrBYIcs3nSIioTUUg3So_ia8Ao5axqJ7HF39xP_BSH84Cz4v?gv=true",
      bullets: [
        "Strategic direction tied to your growth model",
        "Execution systems that run without heroics",
        "Team and vendor management from day one",
        "Built to transfer \u2014 we leave you better than we found you"
      ],
      socialProof: "Trusted by teams from Amazon, Twitch, Pandora & Hard Rock",
      testimonial: {
        quote: "David brought the structure we were missing. Within 90 days we had a real marketing engine.",
        name: "Sarah Chen",
        title: "CEO, StreamScale"
      }
    }
  };
  return Object.keys(pages).map((slug) => ({
    params: { slug },
    props: { page: pages[slug] }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { page } = Astro2.props;
  if (!page) return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": page.title, "description": page.subheadline, "data-astro-cid-re434nn4": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="lp" data-astro-cid-re434nn4> <div class="lp-inner" data-astro-cid-re434nn4> <!-- Logo only --> <div class="lp-logo reveal" data-astro-cid-re434nn4> <a href="/" data-astro-cid-re434nn4>FIELD<br data-astro-cid-re434nn4>VISION</a> </div> <!-- Hero --> <div class="lp-hero reveal" data-astro-cid-re434nn4> <h1 data-astro-cid-re434nn4>${page.headline}</h1> <p class="lp-sub" data-astro-cid-re434nn4>${page.subheadline}</p> </div> <!-- Bullets --> <div class="lp-bullets reveal rd1" data-astro-cid-re434nn4> ${page.bullets.map((b) => renderTemplate`<div class="lp-bullet" data-astro-cid-re434nn4> <span class="lp-check" data-astro-cid-re434nn4>✓</span> <span data-astro-cid-re434nn4>${b}</span> </div>`)} </div> <!-- CTA --> <div class="lp-cta reveal rd2" data-astro-cid-re434nn4> <a${addAttribute(page.bookingUrl, "href")} class="pill-btn lp-btn" target="_blank" rel="noopener" data-astro-cid-re434nn4> ${page.cta} →
</a> <p class="lp-trust" data-astro-cid-re434nn4>${page.socialProof}</p> </div> <!-- Testimonial --> ${page.testimonial && renderTemplate`<div class="lp-testimonial reveal rd3" data-astro-cid-re434nn4> <blockquote data-astro-cid-re434nn4>"${page.testimonial.quote}"</blockquote> <div class="lp-tester" data-astro-cid-re434nn4> <strong data-astro-cid-re434nn4>${page.testimonial.name}</strong> <span data-astro-cid-re434nn4>${page.testimonial.title}</span> </div> </div>`} <!-- Google Calendar Booking --> <div class="lp-embed reveal rd3" data-astro-cid-re434nn4> <iframe${addAttribute(page.bookingUrl, "src")} style="border: 0" width="100%" height="600" frameborder="0" loading="lazy" data-astro-cid-re434nn4></iframe> </div> </div> </div> ` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/landing/[slug].astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/landing/[slug].astro";
const $$url = "/landing/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
