# 🎨 Portfolio Color Palette

## Design System Overview

This design system uses a carefully curated color palette that adapts seamlessly between light and dark modes, with teal as the primary brand color and complementary warm tones.

---

## 🌞 Light Mode Palette

### Primary Colors
- **Primary (Teal)**: `#009688` - Main brand color for CTAs, links, and highlights
- **Background**: `#FAFAFA` - Soft off-white for main backgrounds
- **Foreground (Text)**: `#1A1A40` - Deep navy for high-contrast readable text

### Secondary Colors
- **Blush Pink**: `#FADADD` - Accent for cards and friendly touches
- **Warm Beige**: `#F5E6CC` - Soft background tones for sections and cards
- **Card Background**: `#FFFFFF` - Pure white for elevated content cards

### UI Elements
- **Border**: Subtle gray for dividers and outlines
- **Interactive (Hover)**: `#20C997` - Aqua glow for interactive elements
- **Muted Text**: Deep navy at 60% opacity for secondary text

---

## 🌙 Dark Mode Palette

### Primary Colors
- **Primary (Teal)**: `#009688` - Unchanged from light mode for brand consistency
- **Background**: `#121212` - Charcoal gray for main backgrounds
- **Foreground (Text)**: `#C7C9E2` - Soft lavender gray for readable light text

### Secondary Colors
- **Muted Rose**: `#D4A5A5` - Replaces blush pink with warm sophistication
- **Mocha Taupe**: `#3E3B32` - Neutral divider backgrounds
- **Card Background**: Slightly lighter charcoal for content elevation

### UI Elements
- **Border**: Subtle dark gray for dividers
- **Interactive (Hover)**: `#98FF98` - Soft mint for dark mode interactions
- **Muted Text**: Lavender gray at 70% opacity for secondary text

---

## 🎯 Tailwind CSS Color Tokens

Use these semantic tokens throughout your components:

### Background Colors
```jsx
bg-background      // Main page background
bg-card            // Card and elevated content
bg-primary         // Primary teal actions
bg-secondary       // Blush pink / Muted rose accents
bg-accent          // Warm beige / Mocha taupe
bg-muted           // Subtle backgrounds
```

### Text Colors
```jsx
text-foreground         // Main text
text-primary            // Teal links and highlights
text-secondary          // Secondary colored text
text-muted-foreground   // Subtle/secondary text
text-accent-foreground  // Text on accent backgrounds
```

### Border Colors
```jsx
border-border      // Standard borders
border-primary     // Teal borders
border-accent      // Accent borders
```

### Interactive States
```jsx
hover:text-primary        // Links and text on hover
hover:bg-primary/90       // Primary buttons on hover
hover:bg-accent           // Outline buttons on hover
focus-visible:ring-ring   // Focus states
```

---

## 💡 Usage Examples

### Primary Button
```jsx
<button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth">
  Click Me
</button>
```

### Card Component
```jsx
<div className="bg-card border border-border rounded-xl shadow-soft hover:shadow-medium transition-all">
  {/* Card content */}
</div>
```

### Navigation Link
```jsx
<a className="text-foreground hover:text-primary transition-smooth">
  About
</a>
```

### Section Background
```jsx
<section className="bg-background py-20">
  {/* Content */}
</section>

<section className="bg-accent/30 py-20">
  {/* Alternate section with subtle accent */}
</section>
```

---

## 🎨 Custom Shadow Utilities

Pre-defined shadow utilities that adapt to theme:

- `shadow-soft` - Subtle shadow for cards
- `shadow-medium` - Medium elevation
- `shadow-large` - High elevation for modals/popovers
- `shadow-elegant` - Teal-tinted shadow for primary elements

---

## ⚡ Animation Classes

Smooth entrance animations:

- `animate-fade-in` - Gentle fade with slight upward movement
- `animate-fade-in-up` - Fade in with more upward translation
- `animate-slide-up` - Slide up entrance
- `animate-scale-in` - Scale entrance effect

---

## ♿ Accessibility Notes

- All color combinations meet WCAG AA contrast standards
- Interactive elements use clear hover states
- Focus indicators use the teal ring color
- Dark mode maintains readable contrast ratios

---

## 🔄 Theme Transitions

All theme-related properties transition smoothly (0.4s ease) when switching between light and dark modes:
- background-color
- border-color
- color (text)
- fill & stroke (SVGs)

---

## 📱 Responsive Design

Colors work seamlessly across all screen sizes. Use consistent spacing and shadows for visual cohesion.
