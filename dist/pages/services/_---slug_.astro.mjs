import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DZJKZKsh.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_m9DePxNM.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_C8S9stpe.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://fieldvisiongroup.com");
async function getStaticPaths() {
  const services = await getCollection("services");
  return services.map((service) => ({
    params: { slug: service.id.replace(/\.md$/, "") },
    props: { service }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { service } = Astro2.props;
  const d = service.data;
  const siteUrl = "https://fieldvisiongroup.com";
  const slug = service.id.replace(/\.md$/, "");
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": d.title,
    "description": d.description,
    "provider": {
      "@type": "Organization",
      "name": "Field Vision Group",
      "url": siteUrl
    },
    "areaServed": { "@type": "Country", "name": "United States" },
    "url": `${siteUrl}/services/${slug}/`
  };
  const faqSchema = d.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": d.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": d.title, "description": d.description, "ogImage": d.ogImage }, { "default": async ($$result2) => renderTemplate`    ${maybeRenderHead()}<section class="svc-hero"> <div class="svc-hero-inner"> <div class="svc-hero-text"> ${d.icon && renderTemplate`<span class="svc-icon">${d.icon}</span>`} <h1 class="svc-h1">${d.title}</h1> <p class="svc-subtitle">${d.description}</p> <a href="/contact/" class="pill-btn">Let's Talk →</a> </div> <aside class="hero-sidebar reveal"> <h3 class="sidebar-label">Engagement Snapshot</h3> ${d.sidebar?.map((item) => renderTemplate`<div class="sidebar-row"> <span class="sidebar-key">${item.label}</span> <span class="sidebar-val">${item.value}</span> </div>`)} </aside> </div> </section>  <section class="svc-ps reveal"> <div class="svc-ps-inner"> <h2 class="svc-section-head svc-section-head--light">${d.problemHeadline || "The Challenge"}</h2> <p class="svc-ps-intro">${d.problemIntro}</p> <div class="ps-grid"> <div class="ps-card old-way"> <span class="ps-label">❌ Without Strategic Leadership</span> <ul> ${d.oldWay?.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </div> <div class="ps-card new-way"> <span class="ps-label">✅ With Field Vision</span> <ul> ${d.newWay?.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </div> </div> </div> </section>  <section class="svc-deliverables reveal"> <div class="svc-del-inner"> <h2 class="svc-section-head">What You Get</h2> <div class="del-grid"> ${d.deliverables?.map((del) => renderTemplate`<div class="del-card"> <span class="del-icon">${del.icon}</span> <h3>${del.title}</h3> <p>${del.desc}</p> </div>`)} </div> </div> </section>  <section class="svc-who reveal"> <div class="svc-who-inner"> <div class="who-main"> <h2 class="svc-section-head">Who This Is For</h2> <p class="who-intro">${d.whoIntro}</p> <ul class="who-triggers"> ${d.whoTriggers?.map((t) => renderTemplate`<li><span class="check-icon">✓</span> ${t}</li>`)} </ul> </div> <aside class="who-sidebar-card"> <h3>${d.whoCta?.headline || "Ready to get started?"}</h3> <p>${d.whoCta?.body || "Book a 30-minute discovery call. We'll discuss where you are, where you want to go, and whether Field Vision is the right fit."}</p> <a href="/contact/" class="pill-btn pill-btn--accent">Let's Talk →</a> </aside> </div> </section>  <section class="svc-abct reveal"> <div class="svc-abct-inner"> <h2 class="svc-section-head">How We Work: The ABCT Model</h2> <p class="abct-intro">Every engagement follows our proven four-phase framework — designed to deliver results and build independence.</p> <div class="abct-grid"> ${(d.abctSteps || [
    { step: "A", title: "Audit", desc: "Deep-dive diagnostic into what's working, what's not, and where the biggest opportunities are." },
    { step: "B", title: "Blueprint", desc: "Strategy, positioning, and channel plan \u2014 tied directly to your growth model and business goals." },
    { step: "C", title: "Construct", desc: "Stand up the systems, processes, and team structure to execute the strategy at scale." },
    { step: "T", title: "Transfer", desc: "Document everything and hand it off so your team can run independently \u2014 built to be fired." }
  ]).map((s, i) => renderTemplate`<div class="abct-card"> <span class="abct-step">${i + 1}</span> <h3>${s.step} — ${s.title}</h3> <p>${s.desc}</p> </div>`)} </div> </div> </section>  ${d.faqs?.length > 0 && renderTemplate`<section class="svc-faq reveal"> <div class="svc-faq-inner"> <h2 class="svc-section-head">Frequently Asked Questions</h2> <div class="faq-list"> ${d.faqs.map((faq, i) => renderTemplate`<details class="faq-item"> <summary class="faq-question"> <span>${faq.question}</span> <span class="faq-toggle">+</span> </summary> <div class="faq-answer"> <p>${faq.answer}</p> </div> </details>`)} </div> </div> </section>`} <section class="svc-final-cta reveal"> <div class="svc-final-cta-inner"> <h2>${d.ctaHeadline || "Ready to Build Your Growth Engine?"}</h2> <p>${d.ctaBody || "Book a 30-minute discovery call. We'll talk about where you are, where you want to go, and whether Field Vision is the right fit."}</p> <a href="/contact/" class="pill-btn pill-btn--accent">Let's Talk →</a> </div> </section>  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_b || (_b = __template([' <script type="application/ld+json">', "<\/script> ", ""])), unescapeHTML(JSON.stringify(serviceSchema)), faqSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(faqSchema)))) })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/services/[...slug].astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/services/[...slug].astro";
const $$url = "/services/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
