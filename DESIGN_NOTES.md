# GetGood Redesign — Design Notes

**Live URL:** https://getgood-build.vercel.app

---

## 1. Initial Design Critique

### What Was Wrong (The "AI Slop" Aesthetic)

The original design suffered from every cliché of AI-generated websites:

- **Blue-on-blue gradient hero** — The most overused pattern in tech. Screams "I used a template."
- **Inter font** — The default safe choice. Zero personality.
- **Predictable structure** — Hero → features → grid → CTA. Same as 10,000 other landing pages.
- **Generic color palette** — Blue-600, gray-500, white. No brand identity.
- **Weak visual hierarchy** — Everything felt the same importance.
- **Forgettable cards** — White boxes with rounded corners and shadows. Could be any site.

### The Core Problem

The design didn't communicate what makes GetGood different: **10 focused steps that actually work fast.** The "10" concept was buried in body copy instead of being a visual anchor.

---

## 2. Design Decisions

### Typography: Space Grotesk

**Why not Inter?** Inter is the Helvetica of modern web — technically good but utterly soulless. It says "I didn't want to make a choice."

**Why Space Grotesk?** 
- Angular, technical letterforms give it an editorial quality
- Slightly geometric with high x-height for readability
- Has personality without being quirky
- Communicates precision and intentionality — which matches "10 steps, achievable in a day"

### Color Palette: Editorial Warmth + Electric Accent

**Background: Warm Cream (#FAF8F5)**
- Moves away from harsh white that screams "startup template"
- Creates a warmer, more editorial feel
- Subtle paper-like quality that feels considered

**Text: Near-Black (#0a0a0a)**
- High contrast without being stark
- More sophisticated than pure black

**Accent: Electric Lime (#CCFF00)**
- Deliberately unusual — no one expects lime green
- Creates visual tension and energy
- Works as a highlight without overwhelming
- Signals "this isn't your typical learning site"

**Muted Text: (#6B6B6B)**
- Soft enough to create hierarchy
- Still readable

### Hero Concept: The Giant "10"

The key insight: **GetGood's differentiator is the 10-step format.** The redesign makes "10" a massive background element — it's impossible to miss.

- Positioned at viewport right, partially off-screen
- Creates depth and visual interest without any imagery
- Typography does the heavy lifting (no cheesy illustrations)
- Reads as confident, editorial, magazine-like

**The Headline Treatment:**
- "Get Good at Anything" with "Anything" underlined by a lime accent bar
- Staggered animation reveals create engagement
- Large, bold, unapologetic sizing

### Card Design Philosophy

**Standard GuideCard:**
- White background on cream creates subtle depth
- Black border on hover (not gray — makes a statement)
- Lime accent bar that scales in on hover from the left
- Step count badge in inverse colors (black bg, lime text)
- Clear time indicators with dot-based hierarchy

**FeaturedGuideCard (Horizontal):**
- Bold numbered system (01, 02, 03) in black panels
- Horizontal layout breaks the grid monotony
- Large clickable surface with arrow CTA
- Creates visual rhythm in the featured section

### Navigation & Layout

**Sticky Header:**
- Fixed position with backdrop blur
- Minimal — logo + 4 category links
- No search in nav (it's the hero focus)

**Section Structure:**
- Generous padding (py-20 throughout)
- Clear section breaks with borders
- Section labels in small caps for editorial feel
- "Eyebrow" text creates hierarchy

### Micro-Interactions

- **Cards:** Lift on hover (translateY -4px) + shadow depth
- **Accent bar:** Scale animation from 0 to 100% on hover
- **Category cards:** Emoji scale on hover
- **CTAs:** Arrow that increases gap on hover
- **Page load:** Staggered fade-in-up animations

### The Dark CTA Section

- Near-black background creates contrast break
- Lime glow effects in corners (subtle, not cheesy gradient)
- Search bar variant with inverted colors
- Feels premium without being heavy

---

## 3. Files Changed

- `src/app/layout.tsx` — Space Grotesk font, new nav styling, footer
- `src/app/page.tsx` — Complete hero redesign, section structure
- `src/app/globals.css` — New color system, animations, effects
- `src/components/GuideCard.tsx` — Tactile card design
- `src/components/FeaturedGuideCard.tsx` — New horizontal featured card
- `src/components/CategoryGrid.tsx` — Improved category cards
- `src/components/SearchBar.tsx` — Light/dark variants, better dropdown
- `src/components/StepCard.tsx` — Redesigned step presentation
- `src/components/ShareButton.tsx` — Updated styling
- `src/app/guide/[slug]/page.tsx` — Consistent guide page design
- `src/app/category/[slug]/page.tsx` — Consistent category page design

---

## 4. What Makes This Award-Worthy

1. **Distinctive visual identity** — You'd recognize this site in a lineup
2. **Typography-first design** — No stock photos, no generic illustrations
3. **Bold color choices** — Lime green is memorable
4. **Considered micro-interactions** — Everything responds to intent
5. **Editorial feel** — Magazine-quality layout with digital precision
6. **The "10" concept is visualized** — The core value prop is unmissable
7. **Mobile-responsive without compromise** — Works on any device

---

## 5. What I Deliberately Avoided

- ❌ Blue/purple gradients
- ❌ Generic sans-serif fonts (Inter, Roboto, Arial)
- ❌ Hero → CTA → Features → Testimonials template
- ❌ Abstract blob shapes or geometric patterns
- ❌ Stock imagery
- ❌ Drop shadows on everything
- ❌ Boring white backgrounds
- ❌ "AI startup" aesthetic

---

## 6. Technical Notes

- **Framework:** Next.js 16 with Turbopack
- **Styling:** Tailwind CSS 4 (native CSS-in-CSS)
- **Font Loading:** `next/font/google` (Space Grotesk)
- **Animations:** CSS keyframes with staggered delays
- **No heavy dependencies** — No Framer Motion needed for this level of interaction
- **Static generation** — All pages pre-rendered for performance

---

**Designer:** Pixel (Frontend Engineer Agent)  
**Date:** March 30, 2025
