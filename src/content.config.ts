import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Field Vision'),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
    hidden: z.boolean().default(false),
    ogImage: z.string().optional(),
    sidebar: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    problemHeadline: z.string().optional(),
    problemIntro: z.string().optional(),
    oldWay: z.array(z.string()).optional(),
    newWay: z.array(z.string()).optional(),
    deliverables: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      desc: z.string(),
    })).optional(),
    whoIntro: z.string().optional(),
    whoTriggers: z.array(z.string()).optional(),
    whoCta: z.object({
      headline: z.string(),
      body: z.string(),
    }).optional(),
    abctSteps: z.array(z.object({
      step: z.string(),
      title: z.string(),
      desc: z.string(),
    })).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    ctaHeadline: z.string().optional(),
    ctaBody: z.string().optional(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    framework: z.string().optional(),
    ogImage: z.string().optional(),
    gated: z.boolean().default(true),
    mailerliteGroupId: z.string().optional(),
    downloadUrl: z.string().optional(),
    downloadLabel: z.string().optional(),
    readTime: z.string().default('8 min read'),
    phases: z.string().default('4 Phases'),
    schemaJson: z.string().optional(),
  }),
});

const press = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    publicationUrl: z.string(),
    articleUrl: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    topic: z.string(),
    description: z.string(),
    davidRole: z.string(),
    tags: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const industries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    subtitle: z.string(),
    targetKeyword: z.string(),
    ogImage: z.string().optional(),
    order: z.number().default(0),
    hidden: z.boolean().default(false),
    entityBlock: z.string(),
    proofIntro: z.string().optional(),
    clients: z.array(z.object({
      name: z.string(),
      domain: z.string().optional(),
      logo: z.string().optional(),
      caseStudy: z.string().optional(),
      note: z.string().optional(),
    })).optional(),
    angleEyebrow: z.string().optional(),
    angleHeadline: z.string().optional(),
    angleBody: z.string().optional(),
    anglePoints: z.array(z.string()).optional(),
    relatedLinks: z.array(z.object({
      label: z.string(),
      href: z.string(),
      desc: z.string().optional(),
    })).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    ctaHeadline: z.string().optional(),
    ctaBody: z.string().optional(),
  }),
});

export const collections = { blog, services, guides, press, industries };
