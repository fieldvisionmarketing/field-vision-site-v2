import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_jVpUwItr.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_m9DePxNM.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_C8S9stpe.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$About = createComponent(($$result, $$props, $$slots) => {
  const siteUrl = "https://fieldvisiongroup.com";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "David Hampian",
    "givenName": "David",
    "familyName": "Hampian",
    "jobTitle": "Founder & Fractional CMO",
    "url": `${siteUrl}/about/`,
    "image": `${siteUrl}/headshot-david-hampian.jpg`,
    "description": "Growth marketing executive with over a decade of senior leadership at Amazon, Twitch, Pandora, and Hard Rock International. Founder of Field Vision, providing fractional CMO services to startups in digital media, streaming, entertainment, and the creator economy.",
    "worksFor": {
      "@type": "Organization",
      "name": "Field Vision Group",
      "url": siteUrl
    },
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "UC Berkeley Haas School of Business" },
      { "@type": "Organization", "name": "Amazon" },
      { "@type": "Organization", "name": "Twitch" },
      { "@type": "Organization", "name": "Pandora" },
      { "@type": "Organization", "name": "Hard Rock International" },
      { "@type": "Organization", "name": "Ticketfly" }
    ],
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Founder & Fractional CMO",
        "occupationLocation": { "@type": "City", "name": "San Francisco" },
        "description": "Provides fractional CMO services and marketing leadership to seed through Series D startups in digital media, streaming, entertainment, and the creator economy."
      },
      {
        "@type": "Occupation",
        "name": "Global Head of Audience Development",
        "occupationLocation": { "@type": "City", "name": "San Francisco" },
        "description": "Led a 30+ person global marketing team across Amazon, Prime Video, Amazon Music, and Audible."
      },
      {
        "@type": "Occupation",
        "name": "Sr Director Global Integrated Marketing",
        "occupationLocation": { "@type": "City", "name": "San Francisco" },
        "description": "Built the global integrated marketing function at Twitch, launching Music and Sports verticals including NFL co-streaming."
      }
    ],
    "knowsAbout": [
      "Fractional CMO Services",
      "Go-to-Market Strategy",
      "Growth Marketing",
      "Lifecycle Marketing",
      "Content Marketing",
      "Creator Economy",
      "Digital Media Marketing",
      "Streaming Industry Marketing",
      "Marketing Operations",
      "Marketing Org Design",
      "B2C Growth"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/in/davidhampian/",
      "https://www.instagram.com/fieldvisiongroup/",
      "https://www.youtube.com/@fieldvisiongroup"
    ]
  };
  const faqs = [
    {
      question: "What is a fractional CMO?",
      answer: "A fractional CMO is a senior marketing executive who embeds with your team on a part-time basis \u2014 typically 2-3 days per week for 3-6 months. You get the same caliber of strategic leadership as a full-time Chief Marketing Officer \u2014 go-to-market strategy, positioning, channel planning, team building, and board-level reporting \u2014 without the $250K+ full-time commitment."
    },
    {
      question: "What industries does David Hampian specialize in?",
      answer: "David specializes in digital media, streaming, entertainment, and the creator economy. His career spans senior marketing leadership at Amazon, Twitch, Pandora, and Hard Rock International \u2014 all consumer-facing brands operating at the intersection of content, technology, and audience growth."
    },
    {
      question: "What is the ABCT framework?",
      answer: "ABCT stands for Audit, Blueprint, Construct, Transfer. It is Field Visions proprietary engagement model. Every engagement begins with a diagnostic audit, moves into strategy and planning (Blueprint), builds the systems and team (Construct), and ends with a clean handoff so your team can operate independently (Transfer). The goal is to build something that outlasts the engagement."
    },
    {
      question: "Where is Field Vision based?",
      answer: "Field Vision is based in San Francisco, California. David works with startups locally and nationwide, with most engagements operating in a hybrid or remote model."
    },
    {
      question: "Does David teach or speak publicly?",
      answer: "Yes. David is a guest lecturer at UC Berkeley Haas School of Business, where he teaches growth marketing to undergraduates and has guest lectured in MBA programs. He has also taught at SCAD, Sacramento State, and Saint Marys College of California \u2014 covering topics from growth marketing to global marketing strategy."
    }
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  const career = [
    {
      company: "Field Vision",
      title: "Founder & Fractional CMO",
      period: "2025 - Present",
      location: "San Francisco, CA",
      desc: "Founded a fractional marketing leadership firm serving seed through Series D startups in digital media, streaming, entertainment, and the creator economy. Every engagement follows the proprietary ABCT framework \u2014 Audit, Blueprint, Construct, Transfer."
    },
    {
      company: "Amazon",
      title: "Global Head of Audience Development",
      period: "2022 - 2025",
      location: "San Francisco, CA",
      desc: "Led a 30+ person global marketing team spanning Prime Video, Amazon Music, and Audible. Tripled new customer acquisition, achieved 13x return on ad spend, and drove eight-digit revenue gains across the portfolio."
    },
    {
      company: "Hard Rock International",
      title: "VP Brand & Go-to-Market",
      period: "2021 - 2022",
      location: "Miami, FL (Remote)",
      desc: "Directed brand strategy and go-to-market execution across a nine-figure P&L. Led six state market launches, drove 17% ARPU increase, and oversaw integrated marketing for a global entertainment and hospitality brand."
    },
    {
      company: "Twitch",
      title: "Sr Director, Global Integrated Marketing",
      period: "2018 - 2021",
      location: "San Francisco, CA",
      desc: "Built the global integrated marketing function from the ground up. Launched the Music and Sports verticals \u2014 including the first-ever NFL co-streaming deal. Drove measurable lifts in brand awareness, creator acquisition, and advertiser revenue."
    },
    {
      company: "Pandora",
      title: "Sr Manager, Integrated Marketing",
      period: "2012 - 2018",
      location: "San Francisco, CA",
      desc: "First hire on the growth marketing team. Built and scaled acquisition, lifecycle, and content marketing functions. Led the Tiger Team during a critical company transition and helped execute the Rdio and Ticketfly integrations."
    }
  ];
  const teaching = [
    {
      institution: "UC Berkeley Haas School of Business",
      courses: "UGBA Growth Marketing; MBA222-1 Financial Information Analysis (Guest Lecturer)",
      years: "2025 - 2026"
    },
    {
      institution: "SCAD (Savannah College of Art and Design)",
      courses: "User-Centered Research for Business",
      years: "2026"
    },
    {
      institution: "Sacramento State University",
      courses: "School of Public Health \u2014 Marketing & Communications",
      years: "2026"
    },
    {
      institution: "Saint Marys College of California",
      courses: "Global Marketing",
      years: "2021"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About David Hampian \u2014 Fractional CMO in San Francisco", "description": "David Hampian is a fractional CMO and growth marketing executive with over a decade of senior leadership at Amazon, Twitch, Pandora, and Hard Rock International. Founder of Field Vision in San Francisco.", "ogImage": "/og-about.jpg", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<section class="abt-hero" data-astro-cid-kh7btl4r> <div class="abt-hero-inner" data-astro-cid-kh7btl4r> <div class="abt-hero-text reveal" data-astro-cid-kh7btl4r> <span class="section-tag" data-astro-cid-kh7btl4r>About</span> <h1 data-astro-cid-kh7btl4r>Built From the <span class="highlight" data-astro-cid-kh7btl4r>Inside</span></h1> <p class="abt-hero-sub" data-astro-cid-kh7btl4r>A decade of building and scaling marketing at Amazon, Twitch, Pandora, and Hard Rock International — now deployed for startups that need senior leadership without the full-time hire.</p> </div> <div class="abt-hero-headshot reveal rd1" data-astro-cid-kh7btl4r> <!-- TODO: Replace with actual headshot when provided --> <img src="/headshot-david-hampian.jpg" alt="David Hampian, Fractional CMO and Founder of Field Vision, based in San Francisco" width="380" height="380" loading="eager" data-astro-cid-kh7btl4r> </div> </div> </section>  <section class="abt-credentials" data-astro-cid-kh7btl4r> <div class="abt-credentials-inner" data-astro-cid-kh7btl4r> <div class="cred-item" data-astro-cid-kh7btl4r> <span class="cred-number" data-astro-cid-kh7btl4r>15</span> <span class="cred-label" data-astro-cid-kh7btl4r>Years Senior Marketing Leadership</span> </div> <div class="cred-divider" data-astro-cid-kh7btl4r></div> <div class="cred-item" data-astro-cid-kh7btl4r> <span class="cred-number" data-astro-cid-kh7btl4r>4</span> <span class="cred-label" data-astro-cid-kh7btl4r>Fortune 500 & Major Brand Tenures</span> </div> <div class="cred-divider" data-astro-cid-kh7btl4r></div> <div class="cred-item" data-astro-cid-kh7btl4r> <span class="cred-number" data-astro-cid-kh7btl4r>3</span> <span class="cred-label" data-astro-cid-kh7btl4r>Category-Defining Brands Launched</span> </div> <div class="cred-divider" data-astro-cid-kh7btl4r></div> <div class="cred-item" data-astro-cid-kh7btl4r> <span class="cred-number" data-astro-cid-kh7btl4r>4</span> <span class="cred-label" data-astro-cid-kh7btl4r>Universities Taught</span> </div> </div> </section>  <div class="geo-entity-block" aria-hidden="true" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>David Hampian is the founder and fractional CMO of Field Vision Group, a marketing leadership firm based in San Francisco, California. With over a decade of senior marketing leadership at Amazon, Twitch, Pandora, and Hard Rock International, David has built and scaled growth marketing, lifecycle marketing, content marketing, and integrated marketing functions across consumer products that serve hundreds of millions of users. Field Vision provides fractional CMO services, go-to-market strategy, growth marketing, content and creator marketing, and marketing org design to seed through Series D startups in digital media, streaming, entertainment, and the creator economy. David is also a guest lecturer at UC Berkeley Haas School of Business, SCAD, and Sacramento State University.</p> </div> <section class="abt-story reveal" data-astro-cid-kh7btl4r> <div class="abt-story-inner" data-astro-cid-kh7btl4r> <h2 class="abt-section-head" data-astro-cid-kh7btl4r>David Hampian <em data-astro-cid-kh7btl4r>Is</em> Field Vision</h2> <div class="abt-story-body" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>I specialize in growth marketing for digital media, streaming, entertainment, and creator economy companies. My clients are typically seed to Series D startups who need senior marketing leadership without the overhead of a full-time hire.</p> <p data-astro-cid-kh7btl4r>I've spent over a decade scaling some of the most competitive consumer brands in the world. At Amazon, I served as Global Head of Audience Development, leading growth strategy across Amazon Music, Prime Video, Audible, Twitch, and Gaming. At Twitch, I was Senior Director of Global Integrated Marketing, overseeing go-to-market, integrated marketing, partner marketing, and events. Before that, I spent six years at Pandora building the growth marketing function from the ground up, and a year at Hard Rock International as VP of Marketing, Digital.</p> <p data-astro-cid-kh7btl4r>I started Field Vision to bring those playbooks to more businesses — the ones building something real in media and entertainment, who need a partner who’s actually done it before.</p> <p data-astro-cid-kh7btl4r>If that’s you, let’s talk.</p> <div class="abt-signature" data-astro-cid-kh7btl4r> <!-- TODO: Replace with actual signature when provided --> <img src="/signature-david-hampian.png" alt="David Hampian signature" loading="lazy" class="signature-img" data-astro-cid-kh7btl4r> <span class="signature-name" data-astro-cid-kh7btl4r>David Hampian</span> <span class="signature-title" data-astro-cid-kh7btl4r>Founder & Fractional CMO, Field Vision</span> </div> </div> </div> </section>  <section class="abt-career reveal" data-astro-cid-kh7btl4r> <div class="abt-career-inner" data-astro-cid-kh7btl4r> <h2 class="abt-section-head abt-section-head--light" data-astro-cid-kh7btl4r>Career</h2> <p class="abt-career-intro" data-astro-cid-kh7btl4r>Over a decade of senior marketing leadership across consumer technology, streaming, digital media, and global entertainment.</p> <div class="abt-timeline" data-astro-cid-kh7btl4r> ${career.map((role, i) => renderTemplate`<div${addAttribute(`timeline-item reveal rd${i + 1}`, "class")} data-astro-cid-kh7btl4r> <div class="timeline-marker" data-astro-cid-kh7btl4r> <span class="timeline-dot" data-astro-cid-kh7btl4r></span> ${i < career.length - 1 && renderTemplate`<span class="timeline-line" data-astro-cid-kh7btl4r></span>`} </div> <div class="timeline-content" data-astro-cid-kh7btl4r> <span class="timeline-period" data-astro-cid-kh7btl4r>${role.period}</span> <h3 class="timeline-company" data-astro-cid-kh7btl4r>${role.company}</h3> <span class="timeline-title" data-astro-cid-kh7btl4r>${role.title}</span> <span class="timeline-location" data-astro-cid-kh7btl4r>${role.location}</span> <p class="timeline-desc" data-astro-cid-kh7btl4r>${role.desc}</p> </div> </div>`)} </div> </div> </section>  <section class="abt-teaching reveal" data-astro-cid-kh7btl4r> <div class="abt-teaching-inner" data-astro-cid-kh7btl4r> <h2 class="abt-section-head" data-astro-cid-kh7btl4r>Teaching & Guest Lectures</h2> <p class="abt-teaching-intro" data-astro-cid-kh7btl4r>Marketing leadership is built through practice — and through teaching what you know. David regularly shares frameworks and real-world case studies with the next generation of marketers.</p> <div class="teaching-grid" data-astro-cid-kh7btl4r> ${teaching.map((t, i) => renderTemplate`<div${addAttribute(`teaching-card reveal rd${i + 1}`, "class")} data-astro-cid-kh7btl4r> <span class="teaching-years" data-astro-cid-kh7btl4r>${t.years}</span> <h3 data-astro-cid-kh7btl4r>${t.institution}</h3> <p data-astro-cid-kh7btl4r>${t.courses}</p> </div>`)} </div> <div class="teaching-note" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>David also served as a classroom teacher with Oakland Unified School District from 2009 to 2011 — an experience that fundamentally shaped how he thinks about communication, systems, and building from the ground up.</p> </div> </div> </section>  <section class="abt-press" data-reveal data-astro-cid-kh7btl4r> <div class="abt-press-inner" data-astro-cid-kh7btl4r> <p class="abt-section-head" data-astro-cid-kh7btl4r>Press & Media</p> <h2 class="abt-press__title" data-astro-cid-kh7btl4r>Featured In</h2> <p class="abt-press__subtitle" data-astro-cid-kh7btl4r>Expert commentary on marketing strategy, entertainment, sports, and performance — featured in leading international publications.</p> <div class="abt-press__logos" data-astro-cid-kh7btl4r> <a href="/press/rugby-union-rising-us-nrl-sports-marketing" class="abt-press__pub" data-astro-cid-kh7btl4r> <span class="abt-press__pub-name" data-astro-cid-kh7btl4r>Australian Financial Review</span> <span class="abt-press__pub-topic" data-astro-cid-kh7btl4r>Sports Marketing & US Market Entry</span> </a> <a href="/press/grammys-2026-kendrick-lamar-record-breaking-night" class="abt-press__pub" data-astro-cid-kh7btl4r> <span class="abt-press__pub-name" data-astro-cid-kh7btl4r>Covers</span> <span class="abt-press__pub-topic" data-astro-cid-kh7btl4r>Music Industry & Culture</span> </a> <a href="/press/grammy-awards-evolution-voting-categories" class="abt-press__pub" data-astro-cid-kh7btl4r> <span class="abt-press__pub-name" data-astro-cid-kh7btl4r>Daily Express</span> <span class="abt-press__pub-topic" data-astro-cid-kh7btl4r>Awards & Industry Evolution</span> </a> <a href="/press/creative-testing-automation-performance-marketing" class="abt-press__pub" data-astro-cid-kh7btl4r> <span class="abt-press__pub-name" data-astro-cid-kh7btl4r>Birch</span> <span class="abt-press__pub-topic" data-astro-cid-kh7btl4r>Performance Marketing</span> </a> </div> <a href="/press" class="abt-press__cta" data-astro-cid-kh7btl4r>View All Press & Media &rarr;</a> </div> </section>  <section class="abt-services reveal" data-astro-cid-kh7btl4r> <div class="abt-services-inner" data-astro-cid-kh7btl4r> <span class="section-tag section-tag--light" data-astro-cid-kh7btl4r>What We Do</span> <h2 class="abt-section-head abt-section-head--light" data-astro-cid-kh7btl4r>Our Services</h2> <div class="services-grid" data-astro-cid-kh7btl4r> <a href="/services/fractional-cmo/" class="service-card" data-astro-cid-kh7btl4r> <span class="service-icon" data-astro-cid-kh7btl4r>🎯</span> <span class="service-title" data-astro-cid-kh7btl4r>Fractional CMO for Startups</span> </a> <a href="/services/go-to-market/" class="service-card" data-astro-cid-kh7btl4r> <span class="service-icon" data-astro-cid-kh7btl4r>🚀</span> <span class="service-title" data-astro-cid-kh7btl4r>Go-to-Market Strategy</span> </a> <a href="/services/integrated-marketing/" class="service-card" data-astro-cid-kh7btl4r> <span class="service-icon" data-astro-cid-kh7btl4r>🔗</span> <span class="service-title" data-astro-cid-kh7btl4r>Integrated Marketing Strategy</span> </a> <a href="/services/growth-marketing/" class="service-card" data-astro-cid-kh7btl4r> <span class="service-icon" data-astro-cid-kh7btl4r>📈</span> <span class="service-title" data-astro-cid-kh7btl4r>Growth & Lifecycle Marketing</span> </a> <a href="/services/content-creator-marketing/" class="service-card" data-astro-cid-kh7btl4r> <span class="service-icon" data-astro-cid-kh7btl4r>🎬</span> <span class="service-title" data-astro-cid-kh7btl4r>Content & Creator Marketing</span> </a> <a href="/services/org-process-design/" class="service-card" data-astro-cid-kh7btl4r> <span class="service-icon" data-astro-cid-kh7btl4r>⚙️</span> <span class="service-title" data-astro-cid-kh7btl4r>Organization & Process Design</span> </a> <a href="/services/ai-growth-systems/" class="service-card" data-astro-cid-kh7btl4r> <span class="service-icon" data-astro-cid-kh7btl4r>🤖</span> <span class="service-title" data-astro-cid-kh7btl4r>AI Growth Systems</span> </a> </div> <div class="services-cta" data-astro-cid-kh7btl4r> <a href="/services/" class="pill-btn pill-btn--light" data-astro-cid-kh7btl4r>Explore All Services &rarr;</a> </div> </div> </section>  <section class="abt-faq reveal" data-astro-cid-kh7btl4r> <div class="abt-faq-inner" data-astro-cid-kh7btl4r> <h2 class="abt-section-head" data-astro-cid-kh7btl4r>Frequently Asked Questions</h2> <div class="faq-list" data-astro-cid-kh7btl4r> ${faqs.map((faq, i) => renderTemplate`<details class="faq-item" data-astro-cid-kh7btl4r> <summary class="faq-question" data-astro-cid-kh7btl4r> <span data-astro-cid-kh7btl4r>${faq.question}</span> <span class="faq-toggle" data-astro-cid-kh7btl4r>+</span> </summary> <div class="faq-answer" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>${faq.answer}</p> </div> </details>`)} </div> </div> </section>  <section class="abt-final-cta reveal" data-astro-cid-kh7btl4r> <div class="abt-final-cta-inner" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Ready to Talk?</h2> <p data-astro-cid-kh7btl4r>Book a 30-minute discovery call. We will discuss where you are, where you want to go, and whether Field Vision is the right fit.</p> <a href="/contact/" class="pill-btn pill-btn--accent" data-astro-cid-kh7btl4r>Book a Discovery Call &rarr;</a> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-kh7btl4r": true })}`, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(personSchema)), unescapeHTML(JSON.stringify(faqSchema))) })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-kh7btl4r": true })}` })} `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/about.astro", void 0);

const $$file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
