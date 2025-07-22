# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the SoulGate temporary website focused on building the Socials page that matches the Figma design exactly. It's a Next.js 14 application with TypeScript and Tailwind CSS, designed to be the first page implementation for the broader SoulGate website project.

## Development Commands

```bash
# Development server (runs on port 3000, or 3001 if 3000 is in use)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting (currently not configured)
npm run lint
```

## Architecture

### Core Design System
The project uses a **dual-mode display system** with two distinct rendering approaches:

- **Letterbox Mode** (`page-letterbox.tsx`): Preserves complete image visibility with dark borders when aspect ratios don't match
- **Fullscreen Mode** (`page-fullscreen.tsx`): Fills entire viewport but may crop image content

Mode selection is controlled via `src/app/config.ts`:
```typescript
export const siteConfig = {
  displayMode: 'letterbox' | 'fullscreen'
}
```

### Data-Driven Layout
The layout is driven by structured data files rather than hardcoded values:

- **`socials.json`**: Contains exact positioning coordinates (x: 696, y: 367), dimensions, and component definitions from Figma
- **`design-tokens.json`**: Centralized design system with colors, spacing, dimensions, and typography
- **Figma Coordinates**: Uses 1920x1080 (16:9) base dimensions with precise pixel positioning

### Responsive Strategy
- **Desktop (768px+)**: Uses exact Figma coordinates and scaling
- **Mobile (<768px)**: Custom responsive layout with centered, stacked elements
- **Dynamic Scaling**: Letterbox mode calculates scale ratios to maintain aspect ratio while fitting viewport

### Component Structure
```
src/app/
├── page.tsx                 # Route controller (switches between modes)
├── page-letterbox.tsx       # Preserves full image with borders
├── page-fullscreen.tsx      # Fills viewport, may crop
├── config.ts               # Global display mode configuration
├── demo/page.tsx           # Live comparison tool for both modes
└── test/page.tsx           # Viewport testing framework
```

### Asset Management
All visual assets are in `public/` directory:
- `Background.gif` - Animated background (primary)
- `Background.png` - Static reference
- `Logo.png` - SoulGate Heroes logo
- `Twitter Button.png` / `Discord Button.png` - Social icons

## Key Implementation Details

### Exact Figma Matching
- Social buttons positioned at `top: 223px` with `gap: 32px`
- Logo positioned at `left: 696px, top: 367px`
- Uses `object-contain` for complete image visibility in letterbox mode
- Maintains 16:9 aspect ratio scaling calculations

### Scaling Logic (Letterbox Mode)
```typescript
// Calculate scale to fit viewport while preserving aspect ratio
const screenRatio = window.innerWidth / window.innerHeight
const imageRatio = 1920 / 1080

if (screenRatio > imageRatio) {
  setScale(window.innerHeight / 1080)  // Scale by height
} else {
  setScale(window.innerWidth / 1920)   // Scale by width
}
```

### Design Token Integration
- Colors: Dark purple theme (`#1A0B3C`, `#2D1B69`)
- Tailwind extended with design tokens in `tailwind.config.ts`
- Typography: Inter font family with 400 weight

## Figma Reference
- Design URL: `https://www.figma.com/design/VZoMNUDvRqQts6To4vGNJR/SoulGate-Litepaper-Copy?node-id=1-4&m=dev`
- Base dimensions: 1920x1080 (16:9 aspect ratio)
- Exact coordinate positioning required for desktop layouts

## Known Issues
- **Fullscreen mode**: Still has image scaling/cropping issues that need resolution
- **Mobile mode**: The logo and buttons are much bigger than the background and the boarder is on the top and bottom

## Testing & Development
- Use `/demo` route to compare letterbox vs fullscreen modes live
- Use `/test` route for viewport size testing with iframe simulation
- Default development runs on letterbox mode for stable experience