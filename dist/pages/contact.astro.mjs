import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_m9DePxNM.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_C8S9stpe.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Book a Strategy Call", "description": "Book a free discovery call with David Hampian, fractional CMO for startups. Let's talk about where your marketing is today and where it needs to go.", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="contact-page" data-astro-cid-uw5kdbxl> <div class="contact-inner" data-astro-cid-uw5kdbxl> <div class="contact-text reveal" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Let's <span class="highlight" data-astro-cid-uw5kdbxl>Talk</span></h1> <p class="contact-sub" data-astro-cid-uw5kdbxl>Book a 30-minute discovery call to discuss your marketing challenges, growth goals, and whether Field Vision is the right fit.</p> </div> <div class="contact-grid reveal rd1" data-astro-cid-uw5kdbxl> <!-- Google Calendar Scheduling --> <div class="contact-booking" data-astro-cid-uw5kdbxl> <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ000qS7-Zde2OJuhy9OE-k5POEPYrBYIcs3nSIioTUUg3So_ia8Ao5axqJ7HF39xP_BSH84Cz4v?gv=true" style="border: 0" width="100%" height="600" frameborder="0" loading="lazy" data-astro-cid-uw5kdbxl></iframe> </div> <!-- Contact Form (Netlify Forms) --> <div class="contact-form-wrap" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>Or Send a Message</h3> <form action="https://formsubmit.co/hampian@fieldvisiongroup.com" method="POST" class="contact-form" data-astro-cid-uw5kdbxl> <input type="hidden" name="_subject" value="New Lead from fieldvisiongroup.com" data-astro-cid-uw5kdbxl> <input type="hidden" name="_captcha" value="false" data-astro-cid-uw5kdbxl> <input type="hidden" name="_next" value="https://fieldvisiongroup.com/thank-you/" data-astro-cid-uw5kdbxl> <input type="text" name="name" placeholder="Your name" required class="form-input" data-astro-cid-uw5kdbxl> <input type="email" name="email" placeholder="Work email" required class="form-input" data-astro-cid-uw5kdbxl> <input type="text" name="company" placeholder="Company" class="form-input" data-astro-cid-uw5kdbxl> <textarea name="message" placeholder="How can we help you with your marketing and growth?" rows="4" class="form-input form-textarea" data-astro-cid-uw5kdbxl></textarea> <button type="submit" class="pill-btn form-btn" data-astro-cid-uw5kdbxl>Send Message →</button> </form> </div> </div> <div class="contact-direct reveal rd2" data-astro-cid-uw5kdbxl> <p data-astro-cid-uw5kdbxl>Prefer email? Reach out directly at <a href="mailto:david@fieldvisiongroup.com" data-astro-cid-uw5kdbxl>david@fieldvisiongroup.com</a></p> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-uw5kdbxl": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-uw5kdbxl": true })}` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/contact.astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
