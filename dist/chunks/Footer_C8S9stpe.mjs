import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, e as renderScript } from './astro/server_jVpUwItr.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro = createAstro("https://fieldvisiongroup.com");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img src="https://static.wixstatic.com/media/d84514_1d808a120d1c4c21853df43e2a557528~mv2.png" alt="Field Vision"${addAttribute(["fv-logo", className], "class:list")} data-astro-cid-tvrurpns> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Logo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "About", href: "/about/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Blog", href: "/blog/" },
    { label: "Press", href: "/press/" },
    { label: "Guides", href: "/guides/" },
    { label: "Contact", href: "/contact/" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2>${renderComponent($$result, "Logo", $$Logo, { "class": "header-logo", "data-astro-cid-3ef6ksr2": true })}</a> <nav class="nav-center" data-astro-cid-3ef6ksr2> ${navLinks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-3ef6ksr2>${item.label}</a>`)} </nav> <div class="nav-right" data-astro-cid-3ef6ksr2> <a href="/contact/" class="nav-cta" data-astro-cid-3ef6ksr2>Contact Us</a> </div> <button class="hamburger" aria-label="Toggle menu" aria-expanded="false" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> </button> <div class="mobile-nav" data-astro-cid-3ef6ksr2> <nav class="mobile-nav-links" data-astro-cid-3ef6ksr2> ${navLinks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-3ef6ksr2>${item.label}</a>`)} </nav> <div class="mobile-nav-actions" data-astro-cid-3ef6ksr2> <a href="/contact/" class="nav-cta" data-astro-cid-3ef6ksr2>Contact Us</a> </div> </div> </header>  ${renderScript($$result, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const companyLinks = [
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact", href: "/contact/" },
    { label: "Press", href: "/press/" }
  ];
  const serviceLinks = [
    { label: "Fractional CMO", href: "/services/fractional-cmo/" },
    { label: "Go-to-Market", href: "/services/go-to-market/" },
    { label: "Growth & Lifecycle", href: "/services/growth-marketing/" },
    { label: "Content & Creators", href: "/services/content-creator-marketing/" },
    { label: "AI Growth Systems", href: "/services/ai-growth-systems/" },
    { label: "Integrated Marketing", href: "/services/integrated-marketing/" },
    { label: "Org & Process Design", href: "/services/org-process-design/" }
  ];
  const resourceLinks = [
    { label: "Guides", href: "/guides/" },
    { label: "Newsletter", href: "/#newsletter" },
    { label: "Book a Call", href: "/contact/" }
  ];
  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/davidhampian/" },
    { label: "Instagram", href: "https://www.instagram.com/fieldvisiongroup/" },
    { label: "YouTube", href: "https://www.youtube.com/@fieldvisiongroup" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer-inner"> <div class="footer-grid"> <div class="footer-brand"> <a href="/" class="logo">${renderComponent($$result, "Logo", $$Logo, { "class": "footer-logo" })}</a> <p>Growth marketing leadership for digital media, streaming, entertainment, and creator economy companies.</p> <p style="margin-top:16px">San Francisco, CA</p> </div> <div class="footer-col"> <h4>Company</h4> ${companyLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}>${link.label}</a>`)} </div> <div class="footer-col"> <h4>Services</h4> ${serviceLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}>${link.label}</a>`)} </div> <div class="footer-col"> <h4>Resources</h4> ${resourceLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}>${link.label}</a>`)} </div> </div> <div class="footer-bottom"> <span>&copy; ${currentYear} Field Vision Group. All rights reserved.</span> <div class="footer-legal"> <a href="/privacy/">Privacy Policy</a> <a href="/privacy/#ccpa">Do Not Sell My Info</a> </div> <div class="footer-social"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer">${link.label}</a>`)} </div> </div> </div> </footer>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
