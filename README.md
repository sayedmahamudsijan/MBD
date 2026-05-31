# MBD — We Build. We Design. We Innovate.

The official website for **MBD**, a full-spectrum digital agency. A single-page,
zero-build experience crafted in vanilla HTML, CSS, and JavaScript — no framework,
no bundler, no dependencies. Just open it and it runs.

> **Live:** [mbdagency.com](https://mbdagency.com) · **Based in:** Dhaka, Bangladesh

---

## What MBD does

| Service | Description |
| --- | --- |
| **Brand & Visual Design** | Logos, mockups, full UI/UX systems. |
| **Software Development** | Web, native, and hybrid applications. |
| **Website Development** | Marketing sites, web apps, e-commerce. |
| **AI / ML Models** | Custom model design, training, deployment. |
| **Software Quality Assurance** | Functional, performance & efficiency testing across native, web & hybrid apps. |
| **Academic Research** | Publication, thesis & research support from PhD researchers with indexed-journal citations. |

---

## Signature features

This isn't a brochure page — it's a showcase of capability.

### Mood engine
Four hand-tuned themes that retint the entire site, swap the particle field, and
shift the ambience. Switch them from the floating mood-switcher (top-right) or the
command palette. Your choice is remembered across visits via `localStorage`.

- **Dark** — the calm, default cosmos.
- **Spooky** — desaturated greens, drifting bats, eerie fog.
- **Magic** — violet sparkle trails and a shimmering aura.
- **Euphoric** — warm, high-energy palette with confetti bursts.

### Command palette  `Ctrl / ⌘ + K`
A searchable launcher for the whole site — jump to any section, open any service's
deep-dive, switch moods, toggle sound, request a quote, or copy the contact email.
Full keyboard navigation (↑ ↓ to move, ⏎ to run, Esc to close).

### Motion & interaction
- Two layered `<canvas>` engines: a connected-node network in the background and a
  click/burst/sparkle/confetti/star effects layer on top.
- Custom cursor with a lerp-follow ring and magnetic buttons.
- Scroll-reveal via `IntersectionObserver`, count-up statistics, scramble & typewriter text.
- 3D flip cards that turn on click, plus a service modal with full details, deliverables, and tooling.
- Testimonial carousel, FAQ accordion, monthly/annual pricing toggle, and an animated SQA efficiency dashboard.
- Optional Web Audio ambience (ambient drone + UI click sounds) — off by default, toggle anytime.
- A few surprises: a live social-proof toast and a Konami-code easter egg.

### Built right
- **Accessible** — honours `prefers-reduced-motion` (particles and animations stand
  down, content still reveals), `:focus-visible` styling, a skip-to-content link, and ARIA on the palette.
- **Discoverable** — SEO meta, Open Graph + Twitter cards, theme-color, and an inline SVG favicon (no extra file).
- **Self-contained** — all content is injected from data arrays in JS, so updating
  services, portfolio, testimonials, tech, team, or FAQs means editing one array.

---

## Running locally

No build step. Two options:

**Just open it** — double-click `index.html`. It uses classic `<script>` tags (not
ES modules), so it works straight off the filesystem.

**Serve it** (recommended — closer to production):

```bash
npx http-server . -p 4321 -c-1
```

Then visit <http://localhost:4321>. Any static server works (`python -m http.server`, VS Code Live Server, etc.).

---

## Project structure

```
MBD/
├── index.html        # All markup & section structure
├── css/
│   └── styles.css    # Theme tokens, layout, components, mood variants, a11y
├── js/
│   └── script.js     # Content data + all interaction logic
└── README.md
```

### Where to edit content
Open `js/script.js` and edit the data arrays near the top:

| Array | Drives |
| --- | --- |
| `SERVICES` | Services grid + detail modals |
| `PORTFOLIO` | 3D flip-card showcase |
| `TESTIMONIALS` | Testimonial carousel |
| `TECH` | Tech-stack grid |
| `TEAM` | Team grid |
| `FAQS` | FAQ accordion |

Theme colours live in `css/styles.css` under `:root` and the `[data-theme="…"]` blocks.

---

## Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| `Ctrl / ⌘ + K` | Open the command palette |
| `↑` `↓` | Move between palette results |
| `⏎` | Run the selected result |
| `Esc` | Close the palette |
| `↑ ↑ ↓ ↓ ← → ← → B A` | Easter egg |

---

*Built with vanilla web tech and a lot of intent.*
