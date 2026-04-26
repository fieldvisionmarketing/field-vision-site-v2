import { c as createComponent, m as maybeRenderHead, j as renderSlot, a as renderTemplate, d as createAstro, n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_jVpUwItr.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                                                  */
import './PhaseDivider_astro_astro_type_style_index_0_lang.feac4db6_l0sNRNKZ.mjs';
/* empty css                                                                      */
/* empty css                                                               */
/* empty css                                                                  */
/* empty css                                                                   */
/* empty css                                                                    */
/* empty css                                                                */
import './CardGrid_astro_astro_type_style_index_0_lang.bc1437eb_l0sNRNKZ.mjs';
import './Card_astro_astro_type_style_index_0_lang.bf8ef46b_l0sNRNKZ.mjs';
/* empty css                                                                    */
/* empty css                                                                    */
/* empty css                                                                   */

const $$Astro$9 = createAstro("https://fieldvisiongroup.com");
const $$PhaseBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$PhaseBlock;
  const { badge, title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="phase-block-wrapper" data-astro-cid-uyxyocyz> <div class="phase-header" data-astro-cid-uyxyocyz> <div class="phase-badge" data-astro-cid-uyxyocyz>${badge}</div> <div data-astro-cid-uyxyocyz> <h2 class="phase-title" data-astro-cid-uyxyocyz>${title}</h2> <div class="phase-subtitle" data-astro-cid-uyxyocyz>${subtitle}</div> </div> </div> <div class="phase-body" data-astro-cid-uyxyocyz> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/PhaseBlock.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<hr class="phase-divider" data-astro-cid-hur4zsyg> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/PhaseDivider.astro", void 0);

const $$Astro$8 = createAstro("https://fieldvisiongroup.com");
const $$StepsContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$StepsContainer;
  const { label } = Astro2.props;
  return renderTemplate`${label && renderTemplate`${maybeRenderHead()}<div class="steps-label" data-astro-cid-hg5oidfy>${label}</div>`}<div class="steps-container" data-astro-cid-hg5oidfy>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/StepsContainer.astro", void 0);

const $$Astro$7 = createAstro("https://fieldvisiongroup.com");
const $$SubStep = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SubStep;
  const { number, label, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="step-item" data-astro-cid-wsnspudj> <div class="step-connector" data-astro-cid-wsnspudj> <div class="step-number" data-astro-cid-wsnspudj>${number}</div> <div class="step-line" data-astro-cid-wsnspudj></div> </div> <div class="step-content" data-astro-cid-wsnspudj> ${label && renderTemplate`<div class="step-label" data-astro-cid-wsnspudj>${label}</div>`} <div class="step-title" data-astro-cid-wsnspudj>${title}</div> <div class="step-description" data-astro-cid-wsnspudj> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/SubStep.astro", void 0);

const $$Astro$6 = createAstro("https://fieldvisiongroup.com");
const $$OutputCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OutputCard;
  const { label = "OUTPUT" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="output-card" data-astro-cid-65ptzran> <span class="output-icon" data-astro-cid-65ptzran>✓</span> <div class="output-body" data-astro-cid-65ptzran> <strong data-astro-cid-65ptzran>${label}:</strong> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/OutputCard.astro", void 0);

const $$Astro$5 = createAstro("https://fieldvisiongroup.com");
const $$ExampleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExampleCard;
  const { label = "Real-World Example" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="example-card" data-astro-cid-os3wsc6q> <div class="card-label" data-astro-cid-os3wsc6q>${label}</div> <div class="example-body" data-astro-cid-os3wsc6q> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/ExampleCard.astro", void 0);

const $$KeyPrinciple = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="key-principle" data-astro-cid-263urbbe> <div class="principle-body" data-astro-cid-263urbbe> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/KeyPrinciple.astro", void 0);

const $$Astro$4 = createAstro("https://fieldvisiongroup.com");
const $$StatsBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$StatsBar;
  const { stats } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="stats-bar" data-astro-cid-fggfexrh> ${stats.map((stat) => renderTemplate`<div class="stat-item" data-astro-cid-fggfexrh> <span class="stat-number" data-astro-cid-fggfexrh>${stat.value}</span> <span class="stat-label" data-astro-cid-fggfexrh>${stat.label}</span> </div>`)} </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/StatsBar.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="card-grid" data-astro-cid-y26lfb7u> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/CardGrid.astro", void 0);

const $$Astro$3 = createAstro("https://fieldvisiongroup.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-km7luldj> <div class="card-label" data-astro-cid-km7luldj>${label}</div> <div class="card-body" data-astro-cid-km7luldj> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/Card.astro", void 0);

const $$OverviewGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="overview-grid" data-astro-cid-5ihahe44> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/OverviewGrid.astro", void 0);

const $$Astro$2 = createAstro("https://fieldvisiongroup.com");
const $$OverviewCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$OverviewCard;
  const { badge, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="overview-card" data-astro-cid-2kos2m3t> <div class="overview-card-badge" data-astro-cid-2kos2m3t>${badge}</div> <h4 class="overview-card-title" data-astro-cid-2kos2m3t>${title}</h4> <div class="overview-card-body" data-astro-cid-2kos2m3t> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/OverviewCard.astro", void 0);

const $$Astro$1 = createAstro("https://fieldvisiongroup.com");
const $$SummaryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SummaryCard;
  const { heading, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="summary-card" data-astro-cid-qipm3xwu> ${heading && renderTemplate`<h3 class="summary-heading" data-astro-cid-qipm3xwu>${heading}</h3>`} <div class="summary-grid" data-astro-cid-qipm3xwu> ${items.map((item) => renderTemplate`<div class="summary-item" data-astro-cid-qipm3xwu> <strong data-astro-cid-qipm3xwu>${item.title}</strong> <span data-astro-cid-qipm3xwu>${item.description}</span> </div>`)} </div> </div> `;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/SummaryCard.astro", void 0);

const $$FaqSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="faq-list" itemscope itemtype="https://schema.org/FAQPage"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/FaqSection.astro", void 0);

const $$Astro = createAstro("https://fieldvisiongroup.com");
const $$FaqItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqItem;
  const { question } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"> <summary class="faq-question"> <span itemprop="name">${question}</span> <span class="faq-toggle">+</span> </summary> <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> <div itemprop="text"> ${renderSlot($$result, $$slots["default"])} </div> </div> </details>`;
}, "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/components/guides/FaqItem.astro", void 0);

const frontmatter = {
  "title": "ABCT Framework: Complete Guide",
  "description": "Step-by-step implementation guide for the ABCT Framework — Field Vision's four-phase engagement model. Learn how the Audit, Blueprint, Construct, and Transfer process builds marketing independence, not dependency.",
  "framework": "ABCT",
  "gated": true,
  "mailerliteGroupId": "181508100922017560",
  "downloadUrl": "",
  "readTime": "8 min read",
  "phases": "4 Phases"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-abct",
    "text": "What Is ABCT?"
  }, {
    "depth": 2,
    "slug": "the-four-phases",
    "text": "The Four Phases"
  }, {
    "depth": 2,
    "slug": "frequently-asked-questions",
    "text": "Frequently Asked Questions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "what-is-abct",
      children: "What Is ABCT?"
    }), "\n", createVNode(_components.p, {
      children: ["The ABCT Framework is Field Vision’s four-phase engagement model: ", createVNode(_components.strong, {
        children: "Audit → Blueprint → Construct → Transfer"
      }), ". It governs how every client engagement works — designed with a radical premise: the engagement is designed to end. We’re built to be fired."]
    }), "\n", createVNode(_components.p, {
      children: "Every fractional CMO relationship follows these four sequential phases, moving from deep diagnostic through strategic design, production, and finally full knowledge transfer to your team. The result: you own the Growth System we build together, and you never need us again."
    }), "\n", createVNode($$StatsBar, {
      stats: [{
        value: "4",
        label: "PHASES"
      }, {
        value: "90d",
        label: "AVG. TIMELINE"
      }, {
        value: "100%",
        label: "OWNERSHIP TRANSFER"
      }, {
        value: "0",
        label: "LOCK-IN"
      }]
    }), "\n", createVNode("blockquote", {
      children: "”The best fractional CMO engagement is one where the client doesn’t need you anymore. ABCT is built around that principle — every phase is designed to transfer capability, not create dependency.” — David Hampian, Founder, Field Vision"
    }), "\n", createVNode($$SummaryCard, {
      heading: "WHEN YOU COMPLETE ABCT, YOU WALK AWAY WITH:",
      items: [{
        title: "Complete Business Understanding",
        description: "A fact sheet that captures your strategy, process, and tools — so we understand your business as well as your staff"
      }, {
        title: "A Growth System Blueprint",
        description: "A strategy document that maps current state to desired state, built on the SCORE and PACE frameworks"
      }, {
        title: "Production-Ready Assets",
        description: "Built resources, content, measurement tools, and validated experiments with signal before scaling"
      }, {
        title: "A Self-Sufficient Team",
        description: "Three days of hands-on training so your team can run the Growth System independently"
      }]
    }), "\n", createVNode(_components.h2, {
      id: "the-four-phases",
      children: "The Four Phases"
    }), "\n", createVNode($$OverviewGrid, {
      children: [createVNode($$OverviewCard, {
        badge: "A",
        title: "Audit",
        children: createVNode(_components.p, {
          children: "Deep-dive into data, brand, and operations to uncover growth gaps."
        })
      }), createVNode($$OverviewCard, {
        badge: "B",
        title: "Blueprint",
        children: createVNode(_components.p, {
          children: "Design the Growth System — strategy, process, and experiment plan."
        })
      }), createVNode($$OverviewCard, {
        badge: "C",
        title: "Construct",
        children: createVNode(_components.p, {
          children: "Build and implement the system — then run water to validate before scaling."
        })
      }), createVNode($$OverviewCard, {
        badge: "T",
        title: "Transfer",
        children: createVNode(_components.p, {
          children: "Train your team, hand them the keys, and get out of the way."
        })
      })]
    }), "\n", createVNode($$PhaseBlock, {
      badge: "A",
      title: "Audit",
      subtitle: "Deep-dive into data, brand, and operations to uncover growth gaps",
      children: [createVNode(_components.p, {
        children: "This is the input collecting phase. The goal is to collect as many relevant inputs as possible so that by the end, we understand your business as well as your staff. We look at three dimensions: your strategy, your process, and your tools."
      }), createVNode($$StepsContainer, {
        label: "Follow these 3 sub-steps",
        children: [createVNode($$SubStep, {
          number: "A1",
          label: "Sub-step 1",
          title: "Strategy Inputs",
          children: createVNode(_components.p, {
            children: "Collect data, product suite, category landscape, market and competitor intelligence, and audience insights. This is the foundation for everything that follows."
          })
        }), createVNode($$SubStep, {
          number: "A2",
          label: "Sub-step 2",
          title: "Process Assessment",
          children: createVNode(_components.p, {
            children: "Understand your end-to-end go-to-market process — shared rituals and mechanisms, project management toolset, gaps, what works and what doesn’t."
          })
        }), createVNode($$SubStep, {
          number: "A3",
          label: "Sub-step 3",
          title: "Tool Suite Review",
          children: createVNode(_components.p, {
            children: "Understand your current tools. Based on your goals, identify what’s missing, what’s needed, and whether you have the wrong tools in place."
          })
        })]
      }), createVNode($$OutputCard, {
        children: createVNode(_components.p, {
          children: "A Fact Sheet + Review. We organize all inputs into a structured fact sheet, then review it together to ensure our understanding is accurate and complete. This gives us the opportunity to double-click or dive deeper on anything."
        })
      }), createVNode($$ExampleCard, {
        children: createVNode(_components.p, {
          children: "A growth-stage SaaS company had a marketing team running campaigns but no documented go-to-market process. The Audit revealed three redundant tools, no shared measurement framework, and a gap between what leadership thought was happening and what was actually being executed. The Fact Sheet made these gaps visible for the first time."
        })
      }), createVNode($$KeyPrinciple, {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Key Principle:"
          }), " You can’t design a Growth System for a business you don’t understand. The Audit ensures we never build on assumptions."]
        })
      })]
    }), "\n", createVNode($$PhaseBlock, {
      badge: "B",
      title: "Blueprint",
      subtitle: "Design the Growth System — from current state to desired state",
      children: [createVNode(_components.p, {
        children: "This is where we start designing the Growth System. Based on the Audit inputs, your needs, and your business goals, we author a strawman strategy that outlines how we get from current state to desired state. What differentiates this phase is that we’re in design mode, not production mode."
      }), createVNode($$StepsContainer, {
        label: "Follow these 3 sub-steps",
        children: [createVNode($$SubStep, {
          number: "B1",
          label: "Sub-step 1",
          title: "Set the Strategic Foundation",
          children: createVNode(_components.p, {
            children: "Using our SCORE Framework, we define the strategic architecture — situation, challenge, objectives, roadmap, and experiment plan."
          })
        }), createVNode($$SubStep, {
          number: "B2",
          label: "Sub-step 2",
          title: "Connect Foundation to Outcomes",
          children: createVNode(_components.p, {
            children: "Map the strategy to your specific business outcomes and tactics. Using our PACE Framework, we connect the strategic foundation to the process that will execute it."
          })
        }), createVNode($$SubStep, {
          number: "B3",
          label: "Sub-step 3",
          title: "Design the Experiment Plan",
          children: createVNode(_components.p, {
            children: "Build the experiment plan so we’ll know if it’s working or not. We define the gates, signals, and success criteria before we start building anything."
          })
        })]
      }), createVNode($$OutputCard, {
        children: createVNode(_components.p, {
          children: "A strategy document + two tissue sessions. The tissue sessions ensure alignment before we move into production — we protect your resources by getting buy-in on the design before building."
        })
      }), createVNode($$ExampleCard, {
        children: createVNode(_components.p, {
          children: "A consumer tech company wanted to “do more content marketing.” The Blueprint revealed that content wasn’t the problem — they had no measurement infrastructure to know what was already working. The strategy document resequenced the entire plan: measurement first, content optimization second, new channels third."
        })
      }), createVNode($$KeyPrinciple, {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Key Principle:"
          }), " We separate design from production so you never waste resources building the wrong thing."]
        })
      })]
    }), "\n", createVNode($$PhaseBlock, {
      badge: "C",
      title: "Construct",
      subtitle: "Build the system, run water, and validate before scaling",
      children: [createVNode(_components.p, {
        children: "Once we’re aligned on the Blueprint, we move into production mode. This is where we actually start building and implementing your Growth System — mapping resources, developing assets, creating content, implementing measurement and tools. We chunk it up to make sure we’re getting a signal on the work before doing it all."
      }), createVNode($$StepsContainer, {
        label: "Follow these 2 sub-steps",
        children: [createVNode($$SubStep, {
          number: "C1",
          label: "Sub-step 1",
          title: "Produce",
          children: createVNode(_components.p, {
            children: "Build what we need from Phase 1 — the first set of deliverables outlined during the Blueprint phase. Resources, assets, content, measurement tools, and infrastructure all get built here."
          })
        }), createVNode($$SubStep, {
          number: "C2",
          label: "Sub-step 2",
          title: "Run Water",
          children: createVNode(_components.p, {
            children: "Launch initial experiments to generate a signal and understand if we’re approaching this the right way. We set a gate that we must hit before moving on. If we hit that gate, we proceed to the next phase."
          })
        })]
      }), createVNode($$OutputCard, {
        children: createVNode(_components.p, {
          children: "A production-ready Growth System with validated experiments showing signal. We don’t scale what we can’t prove works — the gate ensures we have evidence before moving forward."
        })
      }), createVNode($$ExampleCard, {
        children: createVNode(_components.p, {
          children: "For an online sportsbook launch, the Construct phase built the entire acquisition funnel — landing pages, paid media creative, measurement dashboards, and CRM workflows. Before scaling the budget, we ran water with a limited geo test. The signal came back positive within two weeks, clearing the gate for full-market launch."
        })
      }), createVNode($$KeyPrinciple, {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Key Principle:"
          }), " We separate Construct from Blueprint so we never produce the wrong thing. And we run water before we scale so we never waste budget on an unproven play."]
        })
      })]
    }), "\n", createVNode($$PhaseBlock, {
      badge: "T",
      title: "Transfer",
      subtitle: "Train your team, hand them the keys, and get out of the way",
      children: [createVNode(_components.p, {
        children: "This is where we train your team, hand you the keys, and then get out of the way. Training is usually three days, we partner with you on it, and it’s designed to make your team fully self-sufficient — no ongoing dependency on Field Vision."
      }), createVNode($$StepsContainer, {
        label: "Follow these 3 sub-steps",
        children: [createVNode($$SubStep, {
          number: "T1",
          label: "Day 1",
          title: "Project Background",
          children: createVNode(_components.p, {
            children: "We take a full day to walk the broader team through the work — including how and why we did it. We take them through every step so they really understand what’s behind it. If they don’t understand what’s behind it, they won’t execute it."
          })
        }), createVNode($$SubStep, {
          number: "T2",
          label: "Day 2",
          title: "Growth System Training",
          children: createVNode(_components.p, {
            children: "We train the team on the Growth System we’ve built, complete with all of the process and procedural components. This is hands-on-keyboard training, not a slide deck walkthrough."
          })
        }), createVNode($$SubStep, {
          number: "T3",
          label: "Day 3",
          title: "Hands-On Practice",
          children: createVNode(_components.p, {
            children: "We run a series of workshops that allow the team to get hands-on practice running the play. This helps them land the training in a practical way — and helps them understand what builds they can add from their own areas of expertise."
          })
        })]
      }), createVNode($$OutputCard, {
        children: createVNode(_components.p, {
          children: "A fully trained team that understands the strategy, can operate the Growth System independently, and knows how to extend it. You own the system — we don’t hold the keys."
        })
      }), createVNode($$ExampleCard, {
        children: createVNode(_components.p, {
          children: "After building a complete audience development system for a media company, the Transfer phase trained a team of six across three days. By Day 3, the team was running experiments independently and had already identified two new acquisition channels from their own category expertise that we hadn’t considered."
        })
      }), createVNode($$KeyPrinciple, {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Key Principle:"
          }), " We’re built to be fired. The engagement is designed to end — and that’s the most honest thing a consultant can say."]
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
    }), "\n", createVNode($$FaqSection, {
      children: [createVNode($$FaqItem, {
        question: "What is ABCT?",
        children: createVNode(_components.p, {
          children: "ABCT stands for Audit, Blueprint, Construct, and Transfer — Field Vision’s four-phase engagement model for fractional CMO relationships. It’s designed to build marketing independence by systematically transferring capability from the fractional CMO to the internal team."
        })
      }), createVNode($$FaqItem, {
        question: "How long does an ABCT engagement take?",
        children: createVNode(_components.p, {
          children: "A typical ABCT engagement runs approximately 90 days. The Audit phase collects inputs, the Blueprint phase designs the strategy, the Construct phase builds and validates the system, and the Transfer phase trains your team across three days of hands-on workshops."
        })
      }), createVNode($$FaqItem, {
        question: "What makes ABCT different from traditional consulting?",
        children: createVNode(_components.p, {
          children: "Most consulting models create dependency — ongoing retainers with no exit plan. ABCT is designed to end. Every phase transfers capability to your team, and the final Transfer phase includes three full days of training so your team can operate the Growth System independently. We’re built to be fired."
        })
      }), createVNode($$FaqItem, {
        question: "What do we get at the end of the Audit phase?",
        children: createVNode(_components.p, {
          children: "You get a Fact Sheet — a comprehensive document that captures everything we learned about your strategy, process, and tools. We then review it together to make sure our understanding is accurate before designing anything. This prevents us from building on assumptions."
        })
      }), createVNode($$FaqItem, {
        question: "What does \"run water\" mean in the Construct phase?",
        children: createVNode(_components.p, {
          children: "Running water means launching initial experiments to generate a signal before scaling. We set a gate — a specific success criteria — that we must hit before moving on. This protects your budget by ensuring we have evidence that the approach works before committing full resources."
        })
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Ready to see how ABCT works for your business? ", createVNode(_components.a, {
          href: "/contact",
          children: "Let’s talk about your growth challenges."
        })]
      })
    }), "\n", createVNode("script", {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Apply the ABCT Framework",
        "description": "A four-phase engagement model for building marketing independence through structured fractional CMO relationships. ABCT stands for Audit, Blueprint, Construct, and Transfer.",
        "step": [{
          "@type": "HowToStep",
          "name": "Audit",
          "text": "Deep-dive into data, brand, and operations to uncover growth gaps. Collect strategy inputs, assess end-to-end go-to-market process, and review the tool suite. Deliverable: a Fact Sheet reviewed together for accuracy."
        }, {
          "@type": "HowToStep",
          "name": "Blueprint",
          "text": "Design the Growth System using the SCORE and PACE frameworks. Set the strategic foundation, connect it to outcomes and tactics, and design the experiment plan. Deliverable: a strategy document plus two tissue sessions."
        }, {
          "@type": "HowToStep",
          "name": "Construct",
          "text": "Move into production mode. Build the deliverables from Phase 1, then run water — launch initial experiments to generate signal. A gate must be hit before scaling. Deliverable: a production-ready Growth System with validated experiments."
        }, {
          "@type": "HowToStep",
          "name": "Transfer",
          "text": "Train the team across three days: Day 1 covers project background and the why behind every decision. Day 2 trains on the Growth System. Day 3 runs hands-on workshops. Deliverable: a fully self-sufficient team that owns and operates the system independently."
        }]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/guides/abct-framework.mdx";
const file = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/content/guides/abct-framework.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/friendly-jolly-einstein/mnt/field-vision-site/src/content/guides/abct-framework.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
