import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_m9DePxNM.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Thank You", "description": "Thanks for reaching out to Field Vision.", "noindex": true, "data-astro-cid-reykoxrt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="thank-you-page" data-astro-cid-reykoxrt> <div class="thank-you-inner" data-astro-cid-reykoxrt> <h1 data-astro-cid-reykoxrt>Thank You</h1> <p data-astro-cid-reykoxrt>We got your message and will be in touch shortly.</p> <a href="/" class="pill-btn form-btn" data-astro-cid-reykoxrt>Back to Home &rarr;</a> </div> </section> ` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/thank-you.astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
