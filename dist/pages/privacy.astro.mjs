import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_m9DePxNM.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_C8S9stpe.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy", "description": "Field Vision Group privacy policy \u2014 how we collect, use, and protect your data.", "noindex": true, "data-astro-cid-fb3qbcs3": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="privacy-page" data-astro-cid-fb3qbcs3> <div class="privacy-inner" data-astro-cid-fb3qbcs3> <span class="blog-cat" data-astro-cid-fb3qbcs3>Legal</span> <h1 data-astro-cid-fb3qbcs3>Privacy <span class="highlight" data-astro-cid-fb3qbcs3>Policy</span></h1> <p class="privacy-updated" data-astro-cid-fb3qbcs3>Last updated: March 2026</p> <div class="privacy-content" data-astro-cid-fb3qbcs3> <h2 data-astro-cid-fb3qbcs3>Overview</h2> <p data-astro-cid-fb3qbcs3>Field Vision Group ("we," "us," or "our") respects your privacy. This policy explains how we collect, use, and protect your personal information when you visit fieldvisiongroup.com.</p> <h2 data-astro-cid-fb3qbcs3>Information We Collect</h2> <p data-astro-cid-fb3qbcs3>We may collect information you provide directly (name, email, company through our contact form or guide downloads) and information collected automatically (analytics data, cookies, IP address, browser type) when you use our site.</p> <h2 data-astro-cid-fb3qbcs3>How We Use Your Information</h2> <p data-astro-cid-fb3qbcs3>We use collected information to respond to inquiries, send requested resources, improve our site experience, measure marketing effectiveness, and communicate updates if you've opted in.</p> <h2 data-astro-cid-fb3qbcs3>Third-Party Services</h2> <p data-astro-cid-fb3qbcs3>We use Google Analytics, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag, and MailerLite to measure site traffic and marketing performance. These services may use cookies to collect anonymous usage data.</p> <h2 data-astro-cid-fb3qbcs3>Cookies</h2> <p data-astro-cid-fb3qbcs3>Our site uses cookies for analytics and marketing purposes. You can control cookies through your browser settings. Essential cookies that are necessary for the site to function may be used regardless of browser settings.</p> <h2 id="ccpa" data-astro-cid-fb3qbcs3>Your California Privacy Rights (CCPA)</h2> <p data-astro-cid-fb3qbcs3>If you are a California resident, you have the right to know what personal information we collect about you, request deletion of your personal information, and opt out of the sale of your personal information. We do not sell personal information. To exercise your rights, contact us at david@fieldvisiongroup.com.</p> <h2 data-astro-cid-fb3qbcs3>Data Retention</h2> <p data-astro-cid-fb3qbcs3>We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p> <h2 data-astro-cid-fb3qbcs3>Contact</h2> <p data-astro-cid-fb3qbcs3>If you have questions about this privacy policy, contact us at david@fieldvisiongroup.com.</p> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-fb3qbcs3": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-fb3qbcs3": true })}` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/privacy.astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
