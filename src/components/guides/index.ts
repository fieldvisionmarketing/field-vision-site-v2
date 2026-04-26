/**
 * Field Vision Guide Components
 *
 * Reusable Astro components for framework guide pages.
 * Import in .mdx guide files:
 *
 *   import { PhaseBlock, SubStep, OutputCard } from '../../components/guides';
 *
 * Component inventory:
 *   PhaseBlock      — Section header for a framework phase (badge, title, subtitle)
 *   PhaseDivider    — Visual separator between phases
 *   StepsContainer  — Wrapper for SubStep components (optional label)
 *   SubStep         — Numbered step with connector line
 *   OutputCard      — Green checkmark deliverable callout
 *   ExampleCard     — Real-world example with label
 *   KeyPrinciple    — Principle callout with left border
 *   StatsBar        — Row of key statistics
 *   CardGrid        — Two-column responsive grid
 *   Card            — Labeled content card
 *   OverviewGrid    — Grid for OverviewCard components
 *   OverviewCard    — Compact card with circle badge
 *   SummaryCard     — Dark-themed deliverables summary
 *   FaqSection      — FAQ wrapper with Schema.org markup
 *   FaqItem         — Single FAQ question + answer
 */

export { default as PhaseBlock } from './PhaseBlock.astro';
export { default as PhaseDivider } from './PhaseDivider.astro';
export { default as StepsContainer } from './StepsContainer.astro';
export { default as SubStep } from './SubStep.astro';
export { default as OutputCard } from './OutputCard.astro';
export { default as ExampleCard } from './ExampleCard.astro';
export { default as KeyPrinciple } from './KeyPrinciple.astro';
export { default as StatsBar } from './StatsBar.astro';
export { default as CardGrid } from './CardGrid.astro';
export { default as Card } from './Card.astro';
export { default as OverviewGrid } from './OverviewGrid.astro';
export { default as OverviewCard } from './OverviewCard.astro';
export { default as SummaryCard } from './SummaryCard.astro';
export { default as FaqSection } from './FaqSection.astro';
export { default as FaqItem } from './FaqItem.astro';
