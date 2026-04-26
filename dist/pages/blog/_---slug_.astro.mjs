import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_DZJKZKsh.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_m9DePxNM.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_C8S9stpe.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://fieldvisiongroup.com");
const $$AuthorByline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthorByline;
  const { date, readingTime } = Astro2.props;
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<div class="author-byline" data-astro-cid-2yvawtqt> <img src="/headshot-david-hampian.jpg" alt="David Hampian" class="author-avatar" loading="lazy" data-astro-cid-2yvawtqt> <div data-astro-cid-2yvawtqt> <span class="author-name" data-astro-cid-2yvawtqt>David Hampian</span> <span class="author-meta" data-astro-cid-2yvawtqt>
Published ${formattedDate}${readingTime ? ` \xB7 ${readingTime} min read` : ""} </span> </div> </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/AuthorByline.astro", void 0);

const $$AuthorBio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="author-bio" data-astro-cid-ynhdph36> <img src="/headshot-david-hampian.jpg" alt="David Hampian" class="bio-avatar" loading="lazy" data-astro-cid-ynhdph36> <div data-astro-cid-ynhdph36> <strong data-astro-cid-ynhdph36>David Hampian</strong> <p data-astro-cid-ynhdph36>Founder & Fractional CMO at Field Vision. Former marketing leader at Amazon Music, Twitch, Pandora, and Hard Rock. Based in San Francisco.</p> <a href="/about/" class="bio-link" data-astro-cid-ynhdph36>Full bio →</a> </div> </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/AuthorBio.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://fieldvisiongroup.com");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.id.replace(/\.md$/, "") },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  const rawBody = post.body || "";
  const readingTime = rawBody ? Math.ceil(rawBody.split(/\s+/).length / 200) : 5;
  const siteUrl = "https://fieldvisiongroup.com";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.data.title,
    "description": post.data.description,
    "author": {
      "@type": "Person",
      "name": post.data.author,
      "url": "https://www.linkedin.com/in/davidhampian/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Field Vision Group",
      "url": siteUrl
    },
    "datePublished": post.data.date.toISOString(),
    ...post.data.updated && { "dateModified": post.data.updated.toISOString() },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.id.replace(/\.md$/, "")}/`
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title, "description": post.data.description, "ogImage": post.data.ogImage, "ogType": "article", "publishDate": post.data.date.toISOString(), "data-astro-cid-7jjqptxk": true }, { "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<article class="blog-article" data-astro-cid-7jjqptxk> <div class="article-header reveal" data-astro-cid-7jjqptxk> <span class="blog-cat" data-astro-cid-7jjqptxk>${post.data.category}</span> <h1 data-astro-cid-7jjqptxk>${post.data.title}</h1> </div> ${renderComponent($$result2, "AuthorByline", $$AuthorByline, { "date": post.data.date, "readingTime": readingTime, "data-astro-cid-7jjqptxk": true })} <div class="article-content" data-astro-cid-7jjqptxk> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-7jjqptxk": true })} </div> ${renderComponent($$result2, "AuthorBio", $$AuthorBio, { "data-astro-cid-7jjqptxk": true })} </article>  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-7jjqptxk": true })}`, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(articleSchema))) })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-7jjqptxk": true })}` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/blog/[...slug].astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
