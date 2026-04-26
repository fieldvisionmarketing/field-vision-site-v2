import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_DZJKZKsh.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_m9DePxNM.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_C8S9stpe.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const services = (await getCollection("services")).sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Marketing Services for Startups", "description": "Fractional CMO, go-to-market strategy, growth marketing, content strategy, and marketing org design for seed through Series D startups in digital media and entertainment.", "data-astro-cid-52q5xhqt": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="services-listing" data-astro-cid-52q5xhqt> <div class="services-listing-inner" data-astro-cid-52q5xhqt> <h1 class="reveal" data-astro-cid-52q5xhqt>Our <span class="highlight" data-astro-cid-52q5xhqt>Services</span></h1> <p class="section-sub reveal rd1" data-astro-cid-52q5xhqt>Full-stack marketing leadership — from strategy through execution — built for startups at inflection points.</p> <div class="services-grid" style="margin-top:48px" data-astro-cid-52q5xhqt> ${services.map((service, i) => renderTemplate`<a${addAttribute(`/services/${service.id.replace(/\.md$/, "")}/`, "href")}${addAttribute(`service-list-card reveal rd${i % 3 + 1}`, "class")} data-astro-cid-52q5xhqt> ${service.data.icon && renderTemplate`<span class="service-list-icon" data-astro-cid-52q5xhqt>${service.data.icon}</span>`} <h3 data-astro-cid-52q5xhqt>${service.data.title}</h3> <p data-astro-cid-52q5xhqt>${service.data.description}</p> <span class="service-list-link" data-astro-cid-52q5xhqt>Learn More →</span> </a>`)} </div> </div> </section>  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-52q5xhqt": true })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-52q5xhqt": true })}` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/services/index.astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
