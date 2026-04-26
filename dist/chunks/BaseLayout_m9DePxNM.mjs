import { c as createComponent, a as renderTemplate, e as renderScript, b as addAttribute, m as maybeRenderHead, i as defineScriptVars, d as createAstro, r as renderComponent, j as renderSlot, k as renderHead, u as unescapeHTML, F as Fragment } from './astro/server_jVpUwItr.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  const GTM_ID = "GTM-XXXXXXX";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Google Tag Manager --><script>(function(){", "\n  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n  })(window,document,'script','dataLayer', GTM_ID);\n})();<\/script> <!-- GTM noscript fallback -->", "<noscript><iframe", ' height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- UTM parameter capture -->', ""])), defineScriptVars({ GTM_ID }), maybeRenderHead(), addAttribute(`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`, "src"), renderScript($$result, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Analytics.astro?astro&type=script&index=0&lang.ts"));
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/Analytics.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://fieldvisiongroup.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Fractional marketing leadership for startups in digital media, streaming, entertainment, and the creator economy. Based in San Francisco.",
    ogImage = "/og-default.jpg",
    canonicalURL = Astro2.url.href,
    noindex = false,
    ogType = "website",
    publishDate
  } = Astro2.props;
  const siteName = "Field Vision";
  const siteUrl = "https://fieldvisiongroup.com";
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><link rel="canonical"', ">", '<!-- Open Graph --><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:site_name"', ">", '<!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"><link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Global CSS --><!-- Schema.org: Organization + LocalBusiness --><script type="application/ld+json">', '<\/script><!-- Schema.org: Person (David Hampian) --><script type="application/ld+json">', '<\/script><!-- Schema.org: BreadcrumbList --><script type="application/ld+json">', "<\/script><!-- Slot for page-specific head content -->", "", "</head> <body> ", " <main> ", " </main> ", " <!-- Reveal animation script --> ", " <!-- Analytics: GTM container + pixel stack --> ", " </body></html>"])), fullTitle, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(ogType, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(canonicalURL, "content"), addAttribute(siteName, "content"), ogType === "article" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:author" content="David Hampian">${publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishDate, "content")}>`}` })}`, addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "name": "Field Vision Group",
    "alternateName": "Field Vision",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Fractional CMO and marketing leadership firm for startups in digital media, streaming, entertainment, and the creator economy. Based in San Francisco, serving seed through Series D companies nationwide.",
    "foundingDate": "2025",
    "foundingLocation": {
      "@type": "Place",
      "name": "San Francisco, California"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "City",
        "name": "San Francisco"
      }
    ],
    "priceRange": "$$$$",
    "founder": {
      "@type": "Person",
      "name": "David Hampian",
      "jobTitle": "Founder & Fractional CMO",
      "url": "https://www.linkedin.com/in/davidhampian/"
    },
    "knowsAbout": [
      "Fractional CMO",
      "Go-to-Market Strategy",
      "Growth Marketing",
      "Content Marketing",
      "Lifecycle Marketing",
      "Marketing Operations",
      "Startup Marketing",
      "Digital Media Marketing",
      "Streaming Industry Marketing",
      "Creator Economy",
      "B2C Growth",
      "Marketing Org Design"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing Leadership Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fractional CMO",
            "description": "Senior marketing leadership embedded in your team \u2014 strategy, systems, and oversight without the full-time commitment."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Go-to-Market Strategy",
            "description": "Launch strategy, positioning, and channel plans for new products and markets."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth & Lifecycle Marketing",
            "description": "Acquisition, activation, retention, and revenue systems built for scale."
          }
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/in/davidhampian/",
      "https://www.instagram.com/fieldvisiongroup/",
      "https://www.youtube.com/@fieldvisiongroup"
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "David Hampian",
    "givenName": "David",
    "familyName": "Hampian",
    "jobTitle": "Founder & Fractional CMO",
    "url": "https://www.linkedin.com/in/davidhampian/",
    "worksFor": {
      "@type": "Organization",
      "name": "Field Vision Group",
      "url": siteUrl
    },
    "alumniOf": [
      { "@type": "Organization", "name": "Amazon" },
      { "@type": "Organization", "name": "Twitch" },
      { "@type": "Organization", "name": "Pandora" },
      { "@type": "Organization", "name": "Hard Rock International" },
      { "@type": "Organization", "name": "Prime Video" },
      { "@type": "Organization", "name": "Amazon Music" },
      { "@type": "Organization", "name": "Audible" },
      { "@type": "Organization", "name": "Ticketfly" }
    ],
    "knowsAbout": [
      "Fractional CMO Services",
      "Startup Marketing Strategy",
      "Growth Marketing",
      "Go-to-Market Strategy",
      "Marketing Operations",
      "Digital Media",
      "Streaming",
      "Creator Economy",
      "Content Marketing",
      "Lifecycle Marketing",
      "Marketing Org Design"
    ],
    "description": "Growth marketing executive with over a decade of senior leadership at Amazon, Twitch, Pandora, and Hard Rock International. Founder of Field Vision, providing fractional CMO services to startups in San Francisco and nationwide.",
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
  })), unescapeHTML(JSON.stringify((() => {
    const path = Astro2.url.pathname.replace(/\/$/, "") || "";
    const segments = path.split("/").filter(Boolean);
    const breadcrumbItems = [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl + "/" }
    ];
    const nameMap = {
      "services": "Services",
      "blog": "Blog",
      "guides": "Frameworks & Guides",
      "about": "About",
      "contact": "Contact",
      "landing": "Landing Pages",
      "privacy": "Privacy Policy"
    };
    let currentPath = "";
    segments.forEach((seg, i) => {
      currentPath += `/${seg}`;
      const isLast = i === segments.length - 1;
      const name = isLast && segments.length > 1 ? title : nameMap[seg] || seg.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": i + 2,
        "name": name,
        "item": `${siteUrl}${currentPath}/`
      });
    });
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  })())), renderSlot($$result, $$slots["head"]), renderHead(), renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]), renderScript($$result, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), renderComponent($$result, "Analytics", $$Analytics, {}));
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
