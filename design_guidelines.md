# Financial Modeler Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern fintech apps (Robinhood, Revolut) for clean financial UI, combined with educational platforms' engaging clarity. The design should create emotional impact through dramatic visual contrast and smooth, rewarding animations.

**Core Principle**: Transform dry financial data into visceral, memorable experiences. Every visual element should amplify the psychological "aha" moment.

## Typography

**Font Families** (Google Fonts):
- Primary: 'Inter' (400, 500, 600, 700) - Modern, highly legible for UI and data
- Display: 'Space Grotesk' (700) - Bold, attention-grabbing for large numbers and headers

**Type Scale**:
- Hero Numbers: text-6xl to text-8xl (financial values that shock)
- Section Headers: text-3xl to text-4xl, font-bold
- Body/Labels: text-base to text-lg
- Fine Print: text-sm

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, and 16 for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-12 to py-16
- Gap between elements: gap-4 to gap-6

**Container Strategy**:
- Max width: max-w-6xl for main content
- Calculator section: max-w-4xl centered
- Full-width charts with inner max-w-6xl containers

## Page Structure

**Hero Section** (70vh):
- Full-width gradient background (no image - pure design)
- Center-aligned headline: "What's Your $5 Coffee Really Costing You?"
- Subheading explaining compound opportunity cost
- Immediate visual teaser: animated counting number showing "$47,000" with small caption "over 30 years"

**Calculator Section**:
- Two-column layout on desktop (lg:grid-cols-2)
- Left: Input controls with clean, modern form design
- Right: Live preview card showing instant calculation
- Mobile: Stack to single column

**Visualization Section**:
- Full-width area chart showing expense vs. investment growth over time
- Interactive timeline slider below chart
- Year markers with callouts for milestone achievements

**Scenario Cards Section**:
- 3-column grid (lg:grid-cols-3, md:grid-cols-2)
- Pre-set scenarios: Daily Coffee, Lunch Out, Streaming Services, Daily Rideshare
- Each card shows quick-glance numbers with "Try This" action

**Comparison Section**:
- Dramatic side-by-side split (2 equal columns)
- Left: "Money Spent" with muted treatment
- Right: "What It Could Have Been" with vibrant, emphasized design
- Large contrasting numbers with supporting breakdown

## Component Library

**Input Controls**:
- Clean, borderless inputs with subtle bottom border
- Labels above inputs (text-sm, font-medium)
- Range sliders with custom thumb styling
- Suffix indicators ($, years, %)

**Cards**:
- Subtle shadow: shadow-lg
- Rounded corners: rounded-2xl
- Clean white backgrounds with subtle border
- Hover: slight lift with shadow-xl transition

**Chart Components**:
- Area chart with gradient fill (vibrant to transparent)
- Clean axis labels, minimal grid lines
- Tooltip on hover showing precise values
- Smooth animation on data changes

**Buttons**:
- Primary: Solid with blurred background when on images
- Text size: text-base font-semibold
- Padding: px-8 py-3
- Rounded: rounded-lg

**Milestone Badges**:
- Small pills showing achievements: "Emergency Fund ✓", "Vacation Fund ✓"
- Appear along timeline as thresholds are reached
- Icon + text, rounded-full, compact padding

## Interactions

**Minimal, Purposeful Animation**:
- Number counting animations when values change (odometer effect)
- Smooth chart transitions (300ms ease-in-out)
- Subtle scale on card hover (scale-105)
- NO distracting scroll animations
- NO parallax effects

**Real-time Updates**:
- All calculations update instantly as user adjusts inputs
- Chart redraws smoothly with new data
- Comparison numbers transition with counting animation

## Icons

**Library**: Heroicons (outline and solid variants via CDN)
- Dollar signs, trend lines, calculator
- Milestone icons: coffee cup, car, home, plane
- Use sparingly and purposefully

## Accessibility

- High contrast ratios for all text (4.5:1 minimum)
- Keyboard navigable inputs and controls
- ARIA labels on all interactive elements
- Clear focus indicators on form inputs
- Chart data available in table format for screen readers

## Critical Design Notes

- Numbers are the stars: Make financial figures large, bold, and impossible to miss
- Contrast creates impact: Use dramatic differences between "spent" vs "invested" visualizations
- Clean, uncluttered: Each section has breathing room, no visual noise
- Mobile-first responsive: All layouts stack gracefully, maintain impact on small screens
- Trust through simplicity: Professional fintech aesthetic without being corporate or boring