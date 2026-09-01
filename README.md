# Goyal International City — Frontend Internship Assignment

A from-scratch Next.js/React recreation of the Goyal International City landing page, rebuilt from the supplied assignment brief with a more premium, editorial visual system and responsive UX.

## Requirements
- Node.js 18+
- npm 9+

## Installation
```bash
npm install
```

## Run locally
```bash
npm run dev
```
Then open `http://localhost:3000`.

## Production check
```bash
npm run build
npm start
```

## Environment variables
None are required. The enquiry form is intentionally frontend-only for the assignment. It performs client-side validation and shows a success state; a production version can connect it to a backend/API.

## Project structure
- `app/` — Next.js App Router entry, metadata and page composition
- `components/` — reusable sections and interactive UI
- `styles/` — global responsive CSS and design system
- `public/images/` — reserved for local assets if added later
- `report.pdf` — short assignment report

## Included interactions
- Sticky/scroll-aware header
- Responsive mobile navigation
- Smooth anchor navigation
- Plan tabs (Plots / 4 BHK / 5 BHK)
- Gallery lightbox
- Contact form validation + success state
- Google Maps CTA
- Reduced-motion support

## UI/UX improvements
1. **Premium visual hierarchy** — editorial serif/display typography, restrained gold accents, layered hero treatment, glass enquiry card and stronger spacing rhythm.
2. **Better conversion flow** — repeated but non-intrusive visit/enquiry CTAs, clearer hero proof points and a focused enquiry card.
3. **Responsive polish** — deliberate 375px, 768px and desktop behavior with stacked layouts, touch-friendly navigation and fluid typography.
4. **Interaction/accessibility polish** — semantic sections, form labels, validation feedback, ARIA state for the mobile menu, keyboard-focus styling and reduced-motion support.

## Notes
The assignment allows visually suitable alternative imagery and requires a from-scratch implementation rather than copied source code. The project therefore uses remote Unsplash imagery in CSS for the visual showcase and original React/TypeScript/CSS structure.
