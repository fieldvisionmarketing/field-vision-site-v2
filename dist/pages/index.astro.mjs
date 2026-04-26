import { c as createComponent, m as maybeRenderHead, e as renderScript, a as renderTemplate, b as addAttribute, u as unescapeHTML, r as renderComponent } from '../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_m9DePxNM.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_C8S9stpe.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DZJKZKsh.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero grid-bg"> <!-- Left play diagram --> <svg class="play-diagram play-diagram-left" viewBox="0 0 500 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"> <g id="bg-L"></g> <g id="play-L" opacity="0"></g> </svg> <!-- Right play diagram --> <svg class="play-diagram play-diagram-right" viewBox="0 0 500 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"> <g id="bg-R"></g> <g id="play-R" opacity="0"></g> </svg> <h1>Marketing Leadership for <span class="highlight">Startups</span></h1> <p class="hero-sub">We come in at inflection points — product launches, new market entries, growth plateaus — to align your strategy, test what works, and install systems that scale.</p> </section> ${renderScript($$result, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Hero.astro", void 0);

const $$SocialProof = createComponent(($$result, $$props, $$slots) => {
  const brands = [
    "Amazon",
    "Twitch",
    "Pandora",
    "Hard Rock International",
    "Deepr",
    "MONTREALITY",
    "Prime Video",
    "Audible",
    "University of California, Berkeley",
    "Savannah College of Art and Design"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="social-proof"> <p class="sp-label">Trusted by teams at</p> <div class="marquee-track"> <div class="marquee-inner" aria-hidden="true"> ${[...brands, ...brands].map((name) => renderTemplate`<span>${name}</span>`)} </div> </div> </section>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/SocialProof.astro", void 0);

const $$StartingPoint = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      icon: "\u{1F3AF}",
      title: "Not ready for a full-time marketing hire",
      body: "You need senior marketing leadership but not the $250K commitment. A fractional CMO gives you the strategy and oversight without the overhead.",
      link: { label: "Explore Fractional CMO \u2192", href: "/services/fractional-cmo/" }
    },
    {
      icon: "\u{1F680}",
      title: "Launching something and need a growth strategy",
      body: "You have a specific initiative \u2014 a product launch, new market entry, or rebrand \u2014 and need an expert to build the plan and lead the execution.",
      link: { label: "Explore Go-to-Market \u2192", href: "/services/go-to-market/" }
    },
    {
      icon: "\u{1F9ED}",
      title: "Have a team but need an expert to steer",
      body: "You're doing marketing but aren't sure it's working. You need someone to audit what exists, set a direction, and coach your team to execute.",
      link: { label: "Take the Assessment \u2192", href: "/assessment/" }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="starting-point grid-bg"> <div class="sp-inner"> <div class="reveal"> <h2>Find Your <span class="highlight">Starting Point</span></h2> <p class="section-sub">Every startup's marketing challenge looks different.<br>Which sounds like yours?</p> </div> <div class="starting-cards"> ${cards.map((card, i) => renderTemplate`<div${addAttribute(`starting-card reveal rd${i + 1}`, "class")}> <span class="starting-card-icon">${card.icon}</span> <h3>${card.title}</h3> <p>${card.body}</p> </div>`)} </div> </div> </section>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/StartingPoint.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Fractional CMO",
      body: "Senior marketing leadership embedded in your team \u2014 without the full-time price tag. Strategy, execution, and accountability on a flexible engagement.",
      href: "/services/fractional-cmo/",
      style: "bento-dark span-2"
    },
    {
      title: "Go-to-Market Strategy",
      body: "Launch plans built on market intelligence, competitive positioning, and channel strategy that actually converts.",
      href: "/services/go-to-market/",
      style: "bento-light"
    },
    {
      title: "Growth & Lifecycle Marketing",
      body: "Acquisition, activation, retention \u2014 full-funnel systems designed to compound over time.",
      href: "/services/growth-marketing/",
      style: "bento-cream"
    },
    {
      title: "Integrated<br/>Marketing",
      body: "Brand, product, and growth marketing aligned under one strategy. No more silos, no more mixed messages.",
      href: "/services/integrated-marketing/",
      style: "bento-light"
    },
    {
      title: "Content & Creator Marketing",
      body: "Content strategy, creator partnerships, and community building that drive organic growth and brand equity.",
      href: "/services/content-creator-marketing/",
      style: "bento-cream"
    },
    {
      title: "AI Growth Systems",
      body: "Custom AI-powered workflows that automate research, content, reporting, and competitive intelligence \u2014 built for your team, not off-the-shelf.",
      href: "/services/ai-growth-systems/",
      style: "bento-dark span-2",
      badge: "New"
    },
    {
      title: "Org & Process Design",
      body: "Marketing team structures, hiring plans, vendor selection, and operating models built to scale.",
      href: "/services/org-process-design/",
      style: "bento-light"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="services"> <div class="services-inner"> <div class="services-head reveal"> <h2>Our <span class="highlight">Services</span></h2> <p>We don't just advise — we build the systems, strategies, and teams that drive growth.</p> </div> <div class="bento"> ${services.map((s, i) => renderTemplate`<a${addAttribute(s.href, "href")}${addAttribute(`bento-card ${s.style} reveal rd${i % 5 + 1}`, "class")}> ${s.badge && renderTemplate`<span class="bento-badge">${s.badge}</span>`} <h3>${unescapeHTML(s.title)}</h3> <p>${s.body}</p> <span class="card-link">Learn More →</span> </a>`)} </div> </div> </section>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Services.astro", void 0);

const $$Verticals = createComponent(($$result, $$props, $$slots) => {
  const verticals = [
    { icon: "\u{1F4F1}", label: "Digital Media" },
    { icon: "\u{1F3AC}", label: "Entertainment" },
    { icon: "\u{1F3A8}", label: "Creator Economy" },
    { icon: "\u{1F4FA}", label: "Streaming" },
    { icon: "\u{1F3B5}", label: "Music" },
    { icon: "\u26BD", label: "Sports" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="verticals"> <div class="verticals-inner"> <h2 class="reveal">Where We <span class="highlight">Play</span></h2> <div class="vert-grid"> ${verticals.map((v, i) => renderTemplate`<div${addAttribute(`vert-card reveal rd${i + 1}`, "class")}> <span class="vert-icon">${v.icon}</span> <h3>${v.label}</h3> </div>`)} </div> </div> </section>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Verticals.astro", void 0);

const $$HowWeWork = createComponent(($$result, $$props, $$slots) => {
  const oldWay = [
    "Hire a full-time CMO at $250K+ before you have product-market fit",
    "Pay expensive agencies that don't understand your business or industry",
    "Engage ivory-tower consultants who deliver strategy decks that collect dust",
    "Chase disconnected tactics \u2014 paid ads, PR, influencers \u2014 hoping something sticks"
  ];
  const newWay = [
    "Engage a fractional CMO consultant who's scaled growth at Amazon, Twitch, and Pandora",
    "Get a project-based engagement with proprietary growth systems \u2014 not a retainer that drains budget",
    "Align brand, growth, and product marketing with a unified, systems-driven strategy",
    "Own everything we build \u2014 every engagement transfers full IP, no dependency created"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="how-it-works"> <div class="hiw-layout"> <div class="hiw-left reveal"> <h2>How We <span class="highlight">Work</span></h2> <p>We replace the broken playbook with a systems-driven approach built on a decade of scaling brands at Amazon, Twitch, and Pandora.</p> </div> <div class="hiw-right"> <div class="ps-split reveal rd1"> <div class="ps-half ps-problem"> <div class="ps-label">The Old Way</div> <ul class="ps-list"> ${oldWay.map((item) => renderTemplate`<li><span class="ps-icon">&#x2717;</span>${item}</li>`)} </ul> </div> <div class="ps-half ps-solution"> <div class="ps-label">The New Way</div> <ul class="ps-list"> ${newWay.map((item) => renderTemplate`<li><span class="ps-icon">&#x2713;</span>${item}</li>`)} </ul> </div> </div> </div> </div> </section>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/HowWeWork.astro", void 0);

const $$Frameworks = createComponent(($$result, $$props, $$slots) => {
  const frameworks = [
    {
      name: "ABCT",
      body: "Our key engagement model. We audit what exists, blueprint the strategy, construct the systems, then transfer ownership \u2014 built to be fired.",
      href: "/guides/abct-framework/"
    },
    {
      name: "SCORE",
      body: "The strategic foundation of a growth system. Strategy, Channels, Operations, Reporting, and Experimentation \u2014 the five pillars of sustainable growth.",
      href: "/guides/score-framework/"
    },
    {
      name: "PLOT",
      body: "A marketer's guide to securing more budget and organizational buy-in. Position, Leverage, Outcomes, and Timing \u2014 the framework for internal advocacy.",
      href: "/guides/plot-framework/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="frameworks"> <div class="frameworks-inner"> <div class="reveal"> <h2>Our <span class="highlight">Products</span></h2> <p class="section-sub">Every engagement runs on proprietary growth systems — not guesswork. Repeatable results, every time.</p> </div> <div class="fw-grid"> ${frameworks.map((fw, i) => renderTemplate`<a${addAttribute(fw.href, "href")}${addAttribute(`fw-card reveal rd${i + 1}`, "class")}> <div class="fw-name">${fw.name}</div> <p>${fw.body}</p> <span class="fw-link">Read the Guide →</span> </a>`)} </div> </div> </section>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Frameworks.astro", void 0);

const $$BlogPreview = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section class="insights"> <div class="insights-inner"> <div class="insights-head reveal"> <h2>Latest <span class="highlight">Insights</span></h2> <a href="/blog/" class="view-all">View All →</a> </div> <div class="blog-grid"> ${posts.map((post, i) => renderTemplate`<a${addAttribute(`/blog/${post.id.replace(/\.md$/, "")}/`, "href")}${addAttribute(`blog-card reveal rd${i + 1}`, "class")}> <div class="blog-body"> <span class="blog-cat">${post.data.category}</span> <h3>${post.data.title}</h3> <p>${post.data.description}</p> </div> </a>`)} </div> </div> </section>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/BlogPreview.astro", void 0);

const $$WhyUs = createComponent(($$result, $$props, $$slots) => {
  const reasons = [
    {
      num: "01",
      title: "Systems-Driven",
      body: "We don't wing it. Every engagement runs on proprietary frameworks \u2014 ABCT, SCORE, PLOT \u2014 so you get repeatable results, not random tactics."
    },
    {
      num: "02",
      title: "Built to Be Fired",
      body: "Our success is measured by how quickly your team can run without us. We transfer knowledge, not create dependency."
    },
    {
      num: "03",
      title: "Game-Tested",
      body: "A decade of senior leadership at Amazon, Twitch, Pandora, and Hard Rock. We've scaled the marketing functions you're building now."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="why-us"> <div class="why-inner"> <h2 class="reveal">Why <span class="highlight">Field Vision</span></h2> <div class="why-grid"> ${reasons.map((r, i) => renderTemplate`<div${addAttribute(`why-card reveal rd${i + 1}`, "class")}> <div class="why-num">${r.num}</div> <h3>${r.title}</h3> <p>${r.body}</p> </div>`)} </div> </div> </section>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/WhyUs.astro", void 0);

const $$FinalCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="final-cta"> <h2 class="reveal">Ready to Build Your <span class="highlight">Growth Engine</span>?</h2> <p class="reveal rd1">Let's talk about where you are, where you want to go, and how we can help you get there.</p> <a href="/contact/" class="hero-btn reveal rd2">Book a Call</a> </section>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/FinalCTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Field Vision", "description": "Fractional CMO and marketing leadership for startups in digital media, streaming, entertainment, and the creator economy. Based in San Francisco." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "SocialProof", $$SocialProof, {})}  ${maybeRenderHead()}<section class="geo-entity-block" aria-hidden="true"> <div class="geo-entity-inner"> <p>Field Vision is a fractional marketing leadership firm founded by David Hampian and based in San Francisco, California. The firm provides fractional CMO services, go-to-market strategy, growth marketing, content and creator marketing, and marketing org design to seed through Series D startups in digital media, streaming, entertainment, and the creator economy. David Hampian is a growth marketing executive with over a decade of senior leadership experience at Amazon, Twitch, Pandora, and Hard Rock International, where he built and scaled marketing functions across consumer products, streaming platforms, and global entertainment brands.</p> <p>Field Vision's engagement model follows the proprietary ABCT framework: Audit the current marketing function, Blueprint the strategy and systems, Construct the infrastructure and team, and Transfer ownership so the team can operate independently. This systems-driven approach is designed to deliver senior marketing leadership — strategy, hiring, vendor management, reporting, and board-level communication — without the $250K+ commitment of a full-time CMO.</p> </div> </section> ${renderComponent($$result2, "StartingPoint", $$StartingPoint, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Verticals", $$Verticals, {})}  ${renderComponent($$result2, "WhyUs", $$WhyUs, {})} ${renderComponent($$result2, "HowWeWork", $$HowWeWork, {})} ${renderComponent($$result2, "Frameworks", $$Frameworks, {})} ${renderComponent($$result2, "BlogPreview", $$BlogPreview, {})} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/index.astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
