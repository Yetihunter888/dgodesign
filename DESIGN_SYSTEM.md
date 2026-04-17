# Darren Ottley Portfolio - Design System

This document outlines the visual language, typography, color palette, and component standards established for the Darren Ottley UX Portfolio project.

---

## 🎨 Color Palette

### Primary Branding
- **Primary (Coral)**: `#FF7F50`
  - *Usage*: High-action buttons (Hero), accent highlights, progress indicators.
- **Tertiary (Sage Green)**: `#45655a`
  - *Usage*: Portfolio entry titles, checklist icons, secondary semantic differentiation.

### Neutral Scale
- **On Surface (Dark Slate)**: `#191c1d`
  - *Usage*: Primary body text, headings.
- **Surface (Light Gray)**: `#f8f9fa`
  - *Usage*: Main background, sections.
- **Outline/Border**: `#e1e3e4`
  - *Usage*: Card borders, separators.

---

## typography Typography

### Typefaces
- **Display Font**: `Outfit`
  - *Usage*: Main headings (h1, h2), large hero text.
- **Sans/Body Font**: `Inter`
  - *Usage*: Body copy, labels, buttons, navigation.

### Hierarchy
- **H1 (Hero)**: `text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]`
- **H2 (Section Header)**: `text-3xl md:text-5xl font-display font-bold`
- **H4 (Card Title)**: `text-2xl font-bold`
- **Body Large**: `text-lg md:text-xl font-light leading-relaxed`
- **Body Base**: `text-base text-slate-600`
- **Label (Small)**: `text-xs uppercase tracking-widest font-bold`

---

## 🔘 Components

### Global Primary Button
- **Style**: `px-6 py-2.5 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-wider`
- **Transition**: `hover:shadow-primary/30 hover:scale-105 transition-all`

### Glassmorphism "Ghost" Button
- **Style**: `bg-white/10 text-white border border-white/20 backdrop-blur-sm`
- **Usage**: "Recent Work" in Hero, "View Study" / "View Project" on hoverable cards.

### Checklist Icons
- **Standard**: Material Symbols `check_circle`
- **Specs**: `color: #45655a`, `size: 1.25rem`

---

## 📐 Layout & Grids

### Containers
- **Max Width**: `max-w-7xl` (1280px) centered via `mx-auto`.
- **Spacing**: Consistent `px-6` horizontal padding on mobile/tablet.

### Responsive Breakpoints
- **Mobile**: Default
- **Tablet (md)**: 768px
- **Desktop (lg)**: 1024px
- **Wide (xl)**: 1280px

---

## ✨ Animations & Interaction

- **Library**: `motion/react` (Framer Motion)
- **Entrance**: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- **Hover**: 
  - Cards: `scale: 1.05`, `shadow-xl`
  - Buttons: `scale: 1.05`, `shadow-lg`
- **Transitions**: Global standard of `300ms` for opacity and transform.

---

## 📁 Implementation Reference
- **Theme Variables**: Located in `src/index.css` under `@theme`.
- **Button Standards**: Defined as utility-class patterns in `src/pages/Home.tsx`.
