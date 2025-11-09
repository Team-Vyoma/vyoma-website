# Project Vyoma Official Website

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

Official website for **Project Vyoma** - the Aeromodelling Club of RV College of Engineering, Bangalore. Project Vyoma is one of India's leading student aerospace design teams, with a rich history of competing in international competitions like SAE Aero Design and AIAA Design/Build/Fly.

## 🏆 About Project Vyoma

Founded in 2007, Project Vyoma specializes in:
- Design and development of Unmanned Aerial Vehicles (UAVs)
- Participating in international aerospace competitions
- Research in autonomous flight systems and advanced aerodynamics
- Inspiring the next generation of aerospace engineers

**Notable Achievement:** NASA Systems Engineering Award at SAE Aero Design West (2013)

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI** - Built with Tailwind CSS and custom animations
- **Fast Performance** - Static site generation with Astro
- **SEO Optimized** - Automatic sitemap generation
- **Contact Integration** - EmailJS integration for contact forms

## 🚀 Project Structure

```text
/
├── public/
│   ├── css/              # Custom stylesheets and fonts
│   ├── document/         # Downloadable PDFs (brochures, proposals)
│   ├── gallery/          # Event and project images
│   ├── images/           # Website assets and team photos
│   └── lib/              # Third-party libraries (jQuery, easing)
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Achievement.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ProjectCard.astro
│   │   └── TeamMember.astro
│   ├── layouts/
│   │   └── Layout.astro  # Main layout wrapper
│   ├── lib/              # Data files and utilities
│   │   ├── achievements.ts
│   │   ├── gallery.ts
│   │   ├── main.ts
│   │   └── team.ts
│   ├── pages/            # Route pages
│   │   ├── about.astro
│   │   ├── achievements.astro
│   │   ├── gallery.astro
│   │   ├── index.astro
│   │   ├── sponsors.astro
│   │   ├── team.astro
│   │   └── projects/
│   └── styles/
│       └── style.css     # Global styles
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind CSS configuration
└── package.json
```

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) 4.16+
- **Styling:** [Tailwind CSS](https://tailwindcss.com) 3.4+
- **Type Safety:** TypeScript
- **Icons:** Font Awesome, Ionicons
- **Email Service:** EmailJS
- **CSS Framework:** Bootstrap 4 (for grid system)
- **Animations:** Custom CSS animations with jQuery

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview production build locally                 |
| `npm run astro ...`       | Run Astro CLI commands                           |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd vyoma-website-1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4321`

## 📝 Making Changes

### Updating Team Members
Edit `src/data/team.ts` to add/update team member information including:
- Name, role, department
- Profile photo path
- LinkedIn profile URL

### Adding Gallery Images
Add images to `public/gallery/` and update `src/data/gallery.ts`

### Updating Achievements
Modify `src/data/achievements.ts` to showcase new awards and competitions

## 🌐 Deployment

The site builds to static HTML and can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**
- Any static hosting service

```bash
npm run build
```

The production-ready site will be in the `dist/` directory.

## 📧 Contact Form Setup

The contact form uses EmailJS. To configure:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update the service and template IDs in `src/pages/index.astro`
3. Update the public key in the EmailJS initialization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Copyright © 2007 onwards Project Vyoma. MIT License.

## 🔗 Connect With Us

- **Website:** [teamvyoma.com](https://teamvyoma.com)
- **Email:** projectvyoma@rvce.edu.in
- **LinkedIn:** [Project Vyoma](https://www.linkedin.com/company/team-vyoma)
- **Instagram:** [@teamvyoma](https://www.instagram.com/teamvyoma)
- **Twitter:** [@projectvyoma](https://x.com/projectvyoma)

---

Built with ❤️ by Project Vyoma | RV College of Engineering
