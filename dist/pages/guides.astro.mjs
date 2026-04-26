import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_DZJKZKsh.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_m9DePxNM.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_C8S9stpe.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const guides = await getCollection("guides");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Marketing Frameworks & Guides", "description": "Proprietary marketing frameworks and playbooks for startups \u2014 SCORE, PACEE, FRAME, ABCT, and more. Free downloads built from a decade of growth leadership at Amazon, Twitch, and Pandora.", "data-astro-cid-erw7ffnm": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="guides-listing" data-astro-cid-erw7ffnm> <div class="guides-listing-inner" data-astro-cid-erw7ffnm> <h1 class="reveal" data-astro-cid-erw7ffnm>Our <span class="highlight" data-astro-cid-erw7ffnm>Frameworks</span></h1> <p class="section-sub reveal rd1" data-astro-cid-erw7ffnm>Proprietary playbooks built from a decade of scaling marketing functions at Amazon, Twitch, Pandora, and Hard Rock. Download them. Use them. Win.</p> <div class="guides-grid" style="margin-top:48px" data-astro-cid-erw7ffnm> ${guides.map((guide, i) => renderTemplate`<a${addAttribute(`/guides/${guide.id.replace(/\.md$/, "")}/`, "href")}${addAttribute(`guide-card reveal rd${i % 3 + 1}`, "class")} data-astro-cid-erw7ffnm> <div class="guide-card-top" data-astro-cid-erw7ffnm> ${guide.data.framework && renderTemplate`<span class="guide-badge" data-astro-cid-erw7ffnm>${guide.data.framework}</span>`} ${guide.data.gated && renderTemplate`<span class="guide-gated-badge" data-astro-cid-erw7ffnm>Free Download</span>`} </div> <h3 data-astro-cid-erw7ffnm>${guide.data.title}</h3> <p data-astro-cid-erw7ffnm>${guide.data.description}</p> <span class="guide-card-link" data-astro-cid-erw7ffnm> ${guide.data.gated ? "Get the Guide \u2192" : "Read Now \u2192"} </span> </a>`)} </div> </div> </section>  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-erw7ffnm": true })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-erw7ffnm": true })}` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/guides/index.astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/guides/index.astro";
const $$url = "/guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
