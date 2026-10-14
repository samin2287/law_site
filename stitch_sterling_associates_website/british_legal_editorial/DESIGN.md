---
name: British Legal Editorial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#75777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4e5f7b'
  primary: '#001128'
  on-primary: '#ffffff'
  primary-container: '#14263f'
  on-primary-container: '#7c8dab'
  inverse-primary: '#b6c7e8'
  secondary: '#775a1b'
  on-secondary: '#ffffff'
  secondary-container: '#fdd589'
  on-secondary-container: '#775a1b'
  tertiary: '#10110f'
  on-tertiary: '#ffffff'
  tertiary-container: '#252623'
  on-tertiary-container: '#8d8d89'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b6c7e8'
  on-primary-fixed: '#081c34'
  on-primary-fixed-variant: '#364762'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#e8c178'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5c4202'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Cormorant Garamond
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.01em
  display-md:
    fontFamily: Cormorant Garamond
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.01em
  display-sm:
    fontFamily: Cormorant Garamond
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
  headline-lg:
    fontFamily: Cormorant Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Cormorant Garamond
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  headline-sm:
    fontFamily: Cormorant Garamond
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
spacing:
  gutter: 2rem
  margin: 3rem
  space-xs: 0.5rem
  space-sm: 1rem
  space-md: 1.5rem
  space-lg: 3rem
  space-xl: 5rem
---

## Brand & Style

This design system establishes an authoritative, sophisticated visual identity tailored for an elite British law firm. The aesthetic draws heavily from traditional publishing, luxury editorial design, and timeless legal heritage. 

The emotional response should be one of absolute trust, intellectual rigor, uncompromised prestige, and calm reassurance. The interface avoids cold corporate minimalism in favor of literary gravitas and understated opulence. 

The design style merges **Minimalism** with **High-Contrast Editorial**, relying on generous whitespace, immaculate typographic hierarchy, razor-thin framing rules, and restrained application of precious metallic accents against deep, resolute foundations.

## Colors

The color palette is anchored by deep navy (`#14263F`), representing steadfast authority, security, and institutional weight. 

Muted gold (`#C5A15B`) serves as the secondary accent, utilized sparingly for focal points, active states, and refined rules to evoke timeless prestige without ostentation. 

Warm ivory (`#F7F5F0`) provides a soft, papery background surface that reduces eye strain and introduces a tactile, editorial warmth. Pure white (`#FFFFFF`) is reserved for content cards and elevated surface containers, creating subtle separation against the ivory canvas.

## Typography

Typography bridges historical pedigree with modern utility. Cormorant Garamond commands all headline and display roles with sweeping serifs, high contrast, and literary grace. Inter provides neutral, highly legible sans-serif support for long-form body copy, dense data tables, and functional UI controls. 

For mobile viewports, scale down display-lg and display-md by 25% to preserve layout integrity without sacrificing editorial impact. All labels employ subtle tracking to mimic classic typography typesetting.

## Layout & Spacing

The layout philosophy relies on a structured, fixed-width editorial grid with generous outer margins and expansive vertical breathing room. The content max-width is constrained to ensure optimal reading line lengths for long-form legal briefs and case studies.

Breakpoints shift gracefully: mobile devices utilize a single-column fluid layout with 1.5rem margins; tablets adopt a structured 8-column layout; desktops deploy a sophisticated 12-column grid with 2rem gutters. 

Spacing is intentionally generous (`space-lg` and `space-xl`), allowing components to exist in isolation rather than crowding the viewport.

## Elevation & Depth

Depth is achieved through **low-contrast outlines** and subtle tonal layering rather than heavy drop shadows. The design system rejects skeuomorphic tactility in favor of crisp, editorial flat planes separated by hairline borders (1px) in muted gold or soft navy. 

Elevated surfaces utilize pure white against the warm ivory background, bound by restrained, razor-thin borders. Hover states introduce an imperceptible shift in surface tonality rather than physical elevation.

## Shapes

The design system employs strictly **sharp (0px roundedness)** geometry across all UI elements, including buttons, input fields, cards, and containers. 

This uncompromising rectangular precision reinforces the architectural formality, structural rigor, and traditional craftsmanship associated with heritage legal institutions.

## Components

### Buttons
Primary actions feature deep navy backgrounds with crisp typography and zero border radius. Secondary actions utilize a transparent fill with a 1px solid navy or muted gold border. Hover states invert the fill and text colors smoothly.

### Input Fields
Form controls are defined by a 1px solid border in muted gold or neutral gray over a pure white background. Focus states shift the border to deep navy with a subtle internal hair-line. Labels sit above the input in uppercase tracked Inter.

### Cards
Content cards use pure white backgrounds set against the warm ivory canvas, bordered by a 1px soft dividing line. Internal padding is generous, and titles are set in Cormorant Garamond.

### Checkboxes & Radio Buttons
Rendered as sharp 0px squares and precise circles. Unchecked states show a fine border; checked states fill completely with deep navy, displaying a crisp white checkmark or inner dot.

### Chips & Tags
Compact metadata indicators rendered with zero border radius, uppercase tracking, a thin border, and subtle ivory or white fills.

### Specialized Components
- **Case Citation Callouts:** Left-bordered heavy rules in muted gold with italicized Cormorant Garamond quote text.
- **Document Viewers:** Split-pane layouts optimized for PDF contract review and side-by-side legal clause comparison.
- **Practitioner Directory:** Grid-based cards featuring restrained portraiture framing, professional credentials, and direct secure contact triggers.