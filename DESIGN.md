---
name: Orbital Logistics Platform
colors:
  surface: '#0f131f'
  surface-dim: '#0f131f'
  surface-bright: '#353946'
  surface-container-lowest: '#0a0e1a'
  surface-container-low: '#171b28'
  surface-container: '#1b1f2c'
  surface-container-high: '#262a37'
  surface-container-highest: '#313442'
  on-surface: '#dfe2f3'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#dfe2f3'
  inverse-on-surface: '#2c303d'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#d2bbff'
  on-tertiary: '#3f008e'
  tertiary-container: '#a476ff'
  on-tertiary-container: '#36007d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#d2bbff'
  on-tertiary-fixed: '#25005a'
  on-tertiary-fixed-variant: '#5a00c6'
  background: '#0f131f'
  on-background: '#dfe2f3'
  surface-variant: '#313442'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  title-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

# Design System: Orbital Logistics Platform

Extracted directly from Stitch project **LaunchPad-project** (`projects/9983364957694324920`).

---

## 1. Brand & Style Identity

The design system embodies the precision, scale, and high-velocity clarity required for orbital logistics and deep-space mission infrastructure. The UI projects absolute operational control, forward-looking engineering rigor, and cinematic technological depth.

The aesthetic blends **Glassmorphism** with **Technical Minimalism**:
- **Translucent, light-refracting dark panels** evoke mission control displays and spacecraft avionics.
- **High-contrast neon accents** (electric violet, radiant purple, and cryogenic cyan) provide unambiguous visual hierarchy against deep space values.
- **Clean vector grids, hairline dividers, and precision metrics** establish credibility for mission planners, satellite operators, and payload engineers.

---

## 2. Color Palette

### Core Palette

| Role | Color Name | Hex Code | Visual Sample / Role Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Radiant Neon Purple | `#A855F7` / `#DDB7FF` | Principal CTAs, key telemetry milestones, active system highlights, interactive hover glows |
| **Primary Container** | Deep Radiant Purple | `#B76DFF` | High-impact interactive surfaces and accents |
| **Secondary** | Cryogenic Cyan | `#38BDF8` / `#7BD0FF` | Telemetry data spikes, orbital vectors, active satellite nodes, live status badges |
| **Secondary Container** | Vivid Cyan | `#00A6E0` | Active secondary highlights, data visualizations |
| **Tertiary** | Electric Violet | `#7C3AED` / `#D2BBFF` | Supporting structural fill, gradient transitions, focused outline accents, hero glow overlays |
| **Tertiary Container** | Mid Electric Violet | `#A476FF` | Elevated tertiary badges and highlights |
| **Error** | Critical Coral | `#FFB4AB` / `#93000A` | Abort states, failure telemetry, threshold breaches |

### Neutral & Surface Foundation (Space Canvas)

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| `background` / `surface` | `#0F131F` | Deep space background canvas |
| `surface-container-lowest` | `#0A0E1A` | Base space canvas (darkest void level) |
| `surface-container-low` | `#171B28` | Deep subsurface navigation / sidebars |
| `surface-container` | `#1B1F2C` | Base cards and modular containers |
| `surface-container-high` | `#262A37` | Elevated cards, flyouts, and interactive pods |
| `surface-container-highest`| `#313442` | Highest layer modals and top toolbars |
| `surface-bright` | `#353946` | Subtle highlighted surfaces |
| `surface-tint` | `#DDB7FF` | Violet surface luminescence |
| `outline` | `#988D9F` | Structural lines and border outlines |
| `outline-variant` | `#4D4354` | Hairline separators and grid lines |
| `on-surface` / `on-background` | `#DFE2F3` | Primary text and bright icons |
| `on-surface-variant` | `#CFC2D6` | Secondary labels, descriptions, and metadata |

---

## 3. Typography Architecture

The typographic system uses three Google Fonts to convey technical precision and aerodynamic elegance:

- **Display & Headings:** `Space Grotesk` (Geometric confidence, planetary curves, aerodynamic angles)
- **Body & Structural Copy:** `Geist` (Crisp readability for technical specifications and mission copy)
- **Labels, Telemetry, & Metadata:** `JetBrains Mono` (Monospaced calibration for coordinates, epoch timestamps, and live counters)

### Type Scale Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display` | Space Grotesk | 64px | 700 (Bold) | 72px | -0.03em |
| `display-mobile` | Space Grotesk | 40px | 700 (Bold) | 48px | -0.02em |
| `headline-lg` | Space Grotesk | 48px | 600 (Semi-Bold) | 56px | -0.02em |
| `headline-lg-mobile` | Space Grotesk | 32px | 600 (Semi-Bold) | 40px | -0.02em |
| `headline-md` | Space Grotesk | 32px | 600 (Semi-Bold) | 40px | -0.015em |
| `headline-sm` | Space Grotesk | 24px | 600 (Semi-Bold) | 32px | -0.01em |
| `title-lg` | Space Grotesk | 20px | 500 (Medium) | 28px | Normal |
| `title-md` | Geist | 16px | 600 (Semi-Bold) | 24px | Normal |
| `body-lg` | Geist | 18px | 400 (Regular) | 28px | Normal |
| `body-md` | Geist | 15px | 400 (Regular) | 24px | Normal |
| `body-sm` | Geist | 13px | 400 (Regular) | 20px | Normal |
| `label-lg` | JetBrains Mono | 14px | 500 (Medium) | 20px | +0.02em |
| `label-md` | JetBrains Mono | 12px | 500 (Medium) | 16px | +0.05em |
| `label-sm` | JetBrains Mono | 10px | 500 (Medium) | 14px | +0.08em |

---

## 4. Spacing & Layout Tokens

- **Grid:** 12-column fluid grid on desktop (`1440px` max-width, centered), 8-column on tablet (`768px` - `1024px`), 4-column stack on mobile (`< 768px`).
- **Modular Rhythm:** 4px / 8px base units.

| Token | Value | Purpose |
| :--- | :--- | :--- |
| `space-xs` | `0.25rem` (4px) | Micro gaps, chip padding, inline indicators |
| `space-sm` | `0.5rem` (8px) | Tight grouping, button icon gap |
| `space-md` | `1rem` (16px) | Standard content padding |
| `space-lg` | `1.5rem` (24px) | Card internal padding |
| `space-xl` | `2.5rem` (40px) | Component spacing, card stack gaps |
| `space-2xl` | `4rem` (64px) | Section separation and hero breathing space |
| `gutter` | `1.5rem` (24px) | Desktop container gutters |
| `gutter-mobile` | `1rem` (16px) | Mobile container gutters |
| `margin` | `3rem` (48px) | Desktop viewport outer margin |
| `margin-mobile` | `1.25rem` (20px) | Mobile viewport outer margin |

---

## 5. Corner Radii (Shapes)

| Token | Value | Applied To |
| :--- | :--- | :--- |
| `sm` | `0.125rem` (2px) | Micro-badges, code tags, status points |
| `DEFAULT` | `0.25rem` (4px) | Micro controls, fine badges |
| `md` | `0.375rem` (6px) | Form controls, secondary action buttons |
| `lg` | `0.5rem` (8px) | Standard buttons, input fields, metric pods |
| `xl` | `0.75rem` (12px) | Telemetry glass cards, modular panels, modals |
| `full` | `9999px` | Dynamic status pills, live flight beacons |

---

## 6. Elevation & Depth (Atmospheric Glass)

Elevation is achieved via refractive glassmorphism and photon glow rather than plain drop shadows:

- **Surface 0 (Deep Canvas):** `#0A0E1A` base background paired with radial gradients (`#7C3AED` @ 10% opacity, 600px blur radius) and subtle starfield/orbital vector grid.
- **Surface 1 (Base Glass Cards):** `rgba(15, 23, 42, 0.65)` with `backdrop-filter: blur(16px)` and 1px perimeter border `rgba(168, 85, 247, 0.15)`.
- **Surface 2 (Elevated & Active Floating Cards):** `rgba(30, 27, 75, 0.5)` with `backdrop-filter: blur(24px)`, top inner hairline `rgba(255, 255, 255, 0.12)`, and outer glow `0 0 24px -4px rgba(124, 58, 237, 0.25)`.
- **Surface 3 (Command Modals & Flight Diagnostics):** `rgba(10, 14, 26, 0.85)` with `backdrop-filter: blur(32px)` and fringe halo `0 0 40px -2px rgba(56, 189, 248, 0.20)`.

---

## 7. Component Guidelines

### Buttons
- **Primary (Orbital Launch):**
  - Background: `linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)`
  - Text: White, Space Grotesk / Geist semi-bold
  - Inner highlight: `inset 0 1px 0 rgba(255, 255, 255, 0.2)`
  - Shadow: `0 0 20px rgba(168, 85, 247, 0.35)`
  - Active: Scale `0.98`
- **Secondary (Telemetry Ghost):**
  - Background: `rgba(15, 23, 42, 0.6)` with 1px border `rgba(56, 189, 248, 0.3)`
  - Text: `#38BDF8`
  - Hover: Border `#38BDF8`, glow `0 0 16px rgba(56, 189, 248, 0.25)`

### High-Tech Status Badges & Chips
- Monospace uppercase formatting with `JetBrains Mono` (`label-sm`).
- Enclosed in pill containers with dark indigo fill (`rgba(30, 27, 75, 0.6)`), 1px stroke of `#38BDF8` or `#A855F7`.
- Features a pulsating 4px beacon dot on the leading edge (green for nominal, cyan for orbital lock, neon purple for trajectory confirmed).

### Form Controls & Inputs
- Fill: `rgba(10, 14, 26, 0.8)`, border: `1px solid rgba(148, 163, 184, 0.2)`, text: `#F8FAFC`.
- Focus: `#38BDF8` ring with `0 0 12px rgba(56, 189, 248, 0.30)`.

### Bespoke Domain Modules
- **Orbital Vector HUD:** Trajectory coordinate overlays, interactive apogee/perigee markers in cryogenic cyan.
- **Payload Capacity Bar:** Segmented bar indicators displaying orbital payload allocation with gradient thresholds from neon purple to cyan.
