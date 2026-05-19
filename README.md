# Zimbabwe Consulate Cape Town — Website Redesign

A modern, professional website for the **Consulate of the Republic of Zimbabwe in Cape Town, South Africa**. Built as a pitch project to replace the current outdated site.

---

## Overview

This site provides Zimbabwean nationals in the Western Cape with clear, accessible information about consular services, public notices, diaspora opportunities, and appointment booking — all in a clean, mobile-responsive design.

**Live dev server:** `http://localhost:5175`

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [Vite](https://vite.dev) | Build tool & dev server |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [Calendly](https://calendly.com) | Appointment booking embed |

---

## Features

- **Responsive navbar** — transparent on hero, solid white on scroll, mobile hamburger menu
- **Hero section** — full-screen gradient with Zimbabwe Coat of Arms, flag, animated headline and CTAs
- **About section** — mission, operating hours, Zimbabwe flag display
- **Services accordion** — all 5 consular services with expandable requirements, fees, and notes
  - Passport Application
  - Temporary Travel Document (ETD/TTD)
  - Birth Certificate
  - Repatriation of Deceased
  - Driver's Licence Confirmation
- **Diaspora Opportunities** — placeholder listings for employment, scholarships, investment, housing, and community initiatives
- **Public Notices** — PDF documents readable inline via modal viewer or downloadable; mobile-collapsed with "Show more"
- **Appointments** — Calendly embed with booking rules and office hours sidebar
- **Contact** — 4-card info row (address, phone, email, hours) with full-width Google Maps embed
- **Footer** — Zimbabwe flag stripe, links, social icons, office hours

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed nav with scroll effect & mobile menu
│   ├── Hero.jsx            # Full-screen hero with COA and flag
│   ├── About.jsx           # Mission, hours, Zimbabwe flag
│   ├── Services.jsx        # Accordion service cards
│   ├── Diaspora.jsx        # Diaspora opportunity listings
│   ├── Notices.jsx         # Public notices with PDF viewer
│   ├── Appointments.jsx    # Calendly embed + booking rules
│   ├── Contact.jsx         # Contact info + full-width map
│   └── Footer.jsx          # Footer with links and flag stripe
├── App.jsx                 # Root component — page assembly
├── main.jsx                # React DOM entry point
└── index.css               # Tailwind directives + global styles
public/
├── ZimCOA.png              # Zimbabwe Coat of Arms (logo & favicon)
├── ZimFlag.png             # Zimbabwe flag image
└── notices/                # Upload PDF notices here
```

---

## Adding Real PDF Notices

Place PDF files in `public/notices/` and update the `pdfUrl` and `filename` fields in `src/components/Notices.jsx`:

```js
{
  title: 'Your Notice Title',
  pdfUrl: '/notices/your-file.pdf',
  filename: 'your-file.pdf',
  ...
}
```

The PDF will render inline in the modal viewer and be available for download.

---

## Calendly Setup

The appointment section uses the existing Consulate Calendly account. To update the booking URL, edit `src/components/Appointments.jsx`:

```jsx
data-url="https://calendly.com/zimconsulatecapetown/30min"
```

---

## Colour Palette

| Name | Hex | Usage |
|---|---|---|
| `zim-green` | `#006B3F` | Primary brand colour |
| `zim-green-dark` | `#00522F` | Hover states |
| `zim-gold` | `#FCE100` | Accent / CTAs |
| `zim-red` | `#DE2010` | Badge accents |
| `zim-black` | `#1A1A1A` | Headings & dark text |

---

## Deployment

The site builds to a static `dist/` folder and can be deployed to any static host:

- **Netlify** — drag and drop the `dist/` folder, or connect the GitHub repo for auto-deploys
- **Vercel** — import the repo, set framework to Vite
- **GitHub Pages** — use the `gh-pages` package or GitHub Actions

---

## Credits

Developed by [Luke Manyamazi](https://github.com/Luke-Manyamazi) as a pitch redesign for the Zimbabwe Consulate Cape Town.

Coat of Arms and Flag © Republic of Zimbabwe.
