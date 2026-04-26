import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_m9DePxNM.mjs';
import { g as getCollection } from '../chunks/_astro_content_DZJKZKsh.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_C8S9stpe.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPress = (await getCollection("press")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const title = "Press & Media \u2014 David Hampian | Field Vision";
  const description = "David Hampian has been featured as an expert source in the Australian Financial Review, Covers, Daily Express, Birch, and other leading publications. Read his expert commentary on marketing strategy, entertainment, sports, and performance marketing.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-fobcwded": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<section class="press-hero" data-astro-cid-fobcwded> <div class="container" data-astro-cid-fobcwded> <span class="press-hero__label" data-astro-cid-fobcwded>Press & Media</span> <h1 class="press-hero__title" data-astro-cid-fobcwded>Featured In</h1> <p class="press-hero__subtitle" data-astro-cid-fobcwded>Expert commentary on marketing strategy, entertainment, sports, and performance \u2014 featured in leading international publications.</p> </div> </section> <section class="press-grid" data-astro-cid-fobcwded> <div class="container" data-astro-cid-fobcwded> <div class="press-grid__cards" data-astro-cid-fobcwded> ', ' </div> </div> </section>  <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script>  "])), maybeRenderHead(), allPress.map((item) => renderTemplate`<a${addAttribute(`/press/${item.slug}`, "href")} class="press-card" data-astro-cid-fobcwded> <div class="press-card__pub" data-astro-cid-fobcwded> <span class="press-card__pub-name" data-astro-cid-fobcwded>${item.data.publication}</span> <time class="press-card__date"${addAttribute(item.data.date.toISOString(), "datetime")} data-astro-cid-fobcwded> ${item.data.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} </time> </div> <h2 class="press-card__title" data-astro-cid-fobcwded>${item.data.title}</h2> <p class="press-card__desc" data-astro-cid-fobcwded>${item.data.description}</p> <div class="press-card__meta" data-astro-cid-fobcwded> <span class="press-card__topic" data-astro-cid-fobcwded>${item.data.topic}</span> <span class="press-card__arrow" data-astro-cid-fobcwded>&rarr;</span> </div> </a>`), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Press & Media Features \u2014 David Hampian",
    "description": "Expert commentary and interviews featuring David Hampian in leading publications",
    "numberOfItems": allPress.length,
    "itemListElement": allPress.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://fieldvisiongroup.com/press/${item.slug}`,
      "name": item.data.title
    }))
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Press & Media \u2014 David Hampian",
    "description": description,
    "url": "https://fieldvisiongroup.com/press",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Field Vision",
      "url": "https://fieldvisiongroup.com"
    },
    "about": {
      "@type": "Person",
      "name": "David Hampian",
      "jobTitle": "Managing Director",
      "worksFor": {
        "@type": "Organization",
        "name": "Field Vision"
      }
    }
  }))), "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-fobcwded": true })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-fobcwded": true })}` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/press/index.astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/press/index.astro";
const $$url = "/press";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
