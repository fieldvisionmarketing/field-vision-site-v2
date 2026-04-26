import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_DZJKZKsh.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_m9DePxNM.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_C8S9stpe.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Startup Marketing Blog", "description": "Insights on growth strategy, fractional CMO leadership, go-to-market playbooks, and building marketing systems for startups in digital media and entertainment.", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="blog-listing" data-astro-cid-5tznm7mj> <div class="blog-listing-inner" data-astro-cid-5tznm7mj> <h1 class="reveal" data-astro-cid-5tznm7mj>Latest <span class="highlight" data-astro-cid-5tznm7mj>Insights</span></h1> <p class="section-sub reveal rd1" data-astro-cid-5tznm7mj>Growth strategy, frameworks, and lessons from a decade of scaling brands at Amazon, Twitch, and Pandora.</p> <div class="blog-grid" style="margin-top:48px" data-astro-cid-5tznm7mj> ${posts.map((post, i) => renderTemplate`<a${addAttribute(`/blog/${post.id.replace(/\.md$/, "")}/`, "href")}${addAttribute(`blog-card reveal rd${i % 3 + 1}`, "class")} data-astro-cid-5tznm7mj> <div class="blog-body" data-astro-cid-5tznm7mj> <span class="blog-cat" data-astro-cid-5tznm7mj>${post.data.category}</span> <h3 data-astro-cid-5tznm7mj>${post.data.title}</h3> <p data-astro-cid-5tznm7mj>${post.data.description}</p> </div> </a>`)} </div> </div> </section>  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-5tznm7mj": true })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-5tznm7mj": true })}` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/blog/index.astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
