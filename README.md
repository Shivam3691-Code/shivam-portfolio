# Shivam — 3D Portfolio

An immersive portfolio built as one continuous real-time 3D world. Scrolling moves a
camera along a path through six zones: Hero → Journey → Work → Skills → Security → Contact.

**Stack:** Next.js 15 (App Router, no Vite) · React 19 · Three.js · React Three Fiber · Drei ·
@react-three/postprocessing · GSAP · Framer Motion · Lenis · custom CSS (no Tailwind)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Live site
https://shivam3691-code.github.io/shivam-portfolio/

To publish changes, run `npm run deploy`: it builds a static export and pushes it to the
`gh-pages` branch, which GitHub Pages serves.

## Edit your content
All copy lives in `lib/data.js`. **Contact links are placeholders**: fill in `CONTACT.email`
and `CONTACT.links` (`value` + `href`). While `href` is empty, a row shows a "placeholder" tag.

## Architecture
```
app/                 layout (fonts, global CSS) + page
components/App.jsx   shell: canvas layer, loader, cursor, nav, HUD, sections
components/three/
  Experience.jsx     <Canvas>, performance tiers, PerformanceMonitor
  CameraRig.jsx      scroll-driven camera on a Catmull-Rom path + mouse parallax
  Atmosphere.jsx     fog, lights, procedural Lightformer environment (no HDR download)
  ParticleField.jsx  custom GLSL particle field along the whole path
  Effects.jsx        bloom, depth of field, chromatic aberration, noise, vignette
  zones/             one file per world zone (Hero, Journey, Projects, Skills, Cyber, Contact)
components/sections/ HTML content for each zone (Framer Motion reveals)
components/ui/       ScrollManager (Lenis → "station"), Loader (GSAP), Cursor, Nav, HUD
lib/world.js         zone positions + camera keyframes
lib/store.js         tiny frame-friendly store shared by DOM and WebGL
styles/              tokens, base, chrome (loader/nav/cursor/HUD), sections
```

**How scroll drives the camera:** each DOM element with `data-station="n"` is an anchor.
`ScrollManager` turns the scroll position into a continuous station value (with a dwell
at each anchor); `CameraRig` maps that onto the camera path in `lib/world.js`.

**Performance and accessibility:** touch and low-core devices get a "low" tier (fewer
particles; no reflective floor, depth of field or volumetric lights). Zones outside the
camera's range are hidden. `prefers-reduced-motion` turns off smooth scrolling and slows
or stops the ambient motion.
