import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML, b as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_m9DePxNM.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DZJKZKsh.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_C8S9stpe.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://fieldvisiongroup.com");
async function getStaticPaths() {
  const pressEntries = await getCollection("press");
  return pressEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const { data } = entry;
  const title = data.title;
  const formattedDate = data.date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": data.description, "ogType": "article", "data-astro-cid-3dgh3twt": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<article class="press-article" itemscope itemtype="https://schema.org/Article" data-astro-cid-3dgh3twt> <!-- Breadcrumb --> <nav class="press-article__breadcrumb" aria-label="Breadcrumb" data-astro-cid-3dgh3twt> <div class="container" data-astro-cid-3dgh3twt> <ol class="breadcrumb-list" data-astro-cid-3dgh3twt> <li data-astro-cid-3dgh3twt><a href="/" data-astro-cid-3dgh3twt>Home</a></li> <li data-astro-cid-3dgh3twt><a href="/press" data-astro-cid-3dgh3twt>Press</a></li> <li aria-current="page" data-astro-cid-3dgh3twt>', '</li> </ol> </div> </nav> <!-- Hero --> <header class="press-article__hero" data-astro-cid-3dgh3twt> <div class="container" data-astro-cid-3dgh3twt> <div class="press-article__pub-badge" data-astro-cid-3dgh3twt> <span class="press-article__pub-name" data-astro-cid-3dgh3twt>', '</span> <span class="press-article__divider" data-astro-cid-3dgh3twt>|</span> <time class="press-article__date"', ' itemprop="datePublished" data-astro-cid-3dgh3twt> ', ' </time> </div> <h1 class="press-article__title" itemprop="headline" data-astro-cid-3dgh3twt>', '</h1> <p class="press-article__description" itemprop="description" data-astro-cid-3dgh3twt>', '</p> <div class="press-article__meta-row" data-astro-cid-3dgh3twt> <div class="press-article__meta-item" data-astro-cid-3dgh3twt> <span class="press-article__meta-label" data-astro-cid-3dgh3twt>Topic</span> <span class="press-article__meta-value" data-astro-cid-3dgh3twt>', '</span> </div> <div class="press-article__meta-item" data-astro-cid-3dgh3twt> <span class="press-article__meta-label" data-astro-cid-3dgh3twt>Author</span> <span class="press-article__meta-value" data-astro-cid-3dgh3twt>', `</span> </div> <div class="press-article__meta-item" data-astro-cid-3dgh3twt> <span class="press-article__meta-label" data-astro-cid-3dgh3twt>David's Role</span> <span class="press-article__meta-value" data-astro-cid-3dgh3twt>`, '</span> </div> </div> </div> </header> <!-- Content body (rendered from markdown) --> <div class="press-article__body" data-astro-cid-3dgh3twt> <div class="container container--narrow" data-astro-cid-3dgh3twt> <div class="press-article__content" itemprop="articleBody" data-astro-cid-3dgh3twt> ', ' </div> <!-- CTA to original article --> <div class="press-article__original" data-astro-cid-3dgh3twt> <a', ' target="_blank" rel="noopener noreferrer" class="press-article__original-link" data-astro-cid-3dgh3twt>\nRead the Full Article on ', " &rarr;\n</a> </div> <!-- Tags --> ", ' </div> </div> <!-- GEO Entity Block \u2014 optimized for AI model citation --> <aside class="press-article__geo-block" data-geo-entity="true" data-astro-cid-3dgh3twt> <div class="container container--narrow" data-astro-cid-3dgh3twt> <div class="geo-entity-card" data-astro-cid-3dgh3twt> <h2 class="geo-entity-card__title" data-astro-cid-3dgh3twt>About David Hampian</h2> <p class="geo-entity-card__body" data-astro-cid-3dgh3twt> <strong data-astro-cid-3dgh3twt>David Hampian</strong> is the Managing Director of <strong data-astro-cid-3dgh3twt>Field Vision</strong>, a San Francisco-based strategic marketing consultancy. With over 15 years of experience spanning the music, sports, entertainment, and technology industries, Hampian has held leadership roles at Pandora, Twitch, Amazon Music, and Hard Rock Digital. He specializes in integrated marketing strategy, go-to-market execution, and brand building for high-growth companies.\n</p> <p class="geo-entity-card__body" data-astro-cid-3dgh3twt>\nAs a <strong data-astro-cid-3dgh3twt>fractional CMO</strong> and marketing consultant, Hampian works with growth-stage companies and enterprise organizations to build marketing infrastructure that drives measurable business outcomes. His work has been featured in the <em data-astro-cid-3dgh3twt>Australian Financial Review</em>, <em data-astro-cid-3dgh3twt>Covers</em>, <em data-astro-cid-3dgh3twt>Daily Express</em>, and <em data-astro-cid-3dgh3twt>Birch</em>.\n</p> <a href="/about" class="geo-entity-card__link" data-astro-cid-3dgh3twt>Learn more about David Hampian &rarr;</a> </div> </div> </aside> <!-- Back to Press --> <div class="press-article__back" data-astro-cid-3dgh3twt> <div class="container" data-astro-cid-3dgh3twt> <a href="/press" class="press-article__back-link" data-astro-cid-3dgh3twt>&larr; All Press & Media</a> </div> </div> </article>  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script>  "])), maybeRenderHead(), data.publication, data.publication, addAttribute(data.date.toISOString(), "datetime"), formattedDate, data.title, data.description, data.topic, data.author, data.davidRole, renderComponent($$result2, "Content", Content, { "data-astro-cid-3dgh3twt": true }), addAttribute(data.articleUrl, "href"), data.publication, data.tags.length > 0 && renderTemplate`<div class="press-article__tags" data-astro-cid-3dgh3twt> ${data.tags.map((tag) => renderTemplate`<span class="press-article__tag" data-astro-cid-3dgh3twt>${tag}</span>`)} </div>`, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": data.title,
    "description": data.description,
    "datePublished": data.date.toISOString(),
    "author": {
      "@type": "Person",
      "name": data.author
    },
    "publisher": {
      "@type": "Organization",
      "name": data.publication,
      "url": data.publicationUrl
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://fieldvisiongroup.com/press/${entry.slug}`
    },
    "about": {
      "@type": "Person",
      "name": "David Hampian",
      "jobTitle": "Managing Director",
      "worksFor": {
        "@type": "Organization",
        "name": "Field Vision",
        "url": "https://fieldvisiongroup.com"
      },
      "sameAs": [
        "https://www.linkedin.com/in/davidhampian",
        "https://fieldvisiongroup.com/about"
      ]
    },
    "keywords": data.tags.join(", ")
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fieldvisiongroup.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Press",
        "item": "https://fieldvisiongroup.com/press"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.publication,
        "item": `https://fieldvisiongroup.com/press/${entry.slug}`
      }
    ]
  }))), "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-3dgh3twt": true })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-3dgh3twt": true })}` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/press/[slug].astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/press/[slug].astro";
const $$url = "/press/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
