# ADIT — THE SERIES

A cinematic, streaming-inspired portfolio for **Adit Shrivastava**, a JAGSoM PGDM candidate focused on Product & Growth Marketing, with a Marketing major and Business Analytics minor. The portfolio's existing layout, effects, animations, and section structure have been preserved.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires Node.js 18 or newer. In VS Code, open this folder, choose **Terminal → New Terminal**, and run:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL shown in the terminal. Since this repository is configured for GitHub Pages, the local Vite URL may include `/adit-the-series/`.

To test the production build:

```powershell
npm.cmd run build
npm.cmd run preview
```

## Publish to GitHub Pages

This project is configured for the repository `https://github.com/AditShrivastava/adit-the-series` and its eventual site URL:

**https://aditshrivastava.github.io/adit-the-series/**

1. Upload/push this whole project folder to the repository's `main` branch. Keep `.github/workflows/deploy.yml` in place.
2. On GitHub, open the repository and go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and monitor **Deploy portfolio to GitHub Pages**. Wait for the workflow to finish with a green check.
5. Open the website URL above. The first deployment can take a few minutes.

After setup, each push to `main` automatically builds and publishes the website. The workflow uses `npm ci` and `npm run build`, then deploys the `dist/` output.

The app's Vite base path is set to `/adit-the-series/`. Do not change it unless you change the repository name or host the site at a domain root.

## Updating the content

**All portfolio content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Components read from it, and the site's visual design is maintained in the existing components and CSS.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` in `src/data/portfolio.ts` |
| Projects | `projects` |
| Achievements / certifications | `achievements`, `certifications` |
| Skills and evidence | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top highlights | `topPicks` |
| Intro highlight reel | `introSlides` |
| Profile order (Adit / Recruiter / Marketer / Storyteller) | `viewerProfiles` |

**Resume:** replace `public/assets/Adit_Shrivastava_Resume.pdf` with your current resume using the same filename.

**Photo:** replace `pic1.jpeg` with the preferred portrait and run `npm.cmd run images` to rebuild responsive WebP images and the social preview.

## What's inside

```text
src/
  data/portfolio.ts        Single source of truth for portfolio content
  App.tsx                  Main application and screen transitions
  components/              Existing cinematic components and interactions
  hooks/                   Smooth scrolling, media queries and progress
public/assets/              Resume, portraits and social-preview image
.github/workflows/deploy.yml  Automated GitHub Pages deployment
vite.config.ts              Vite configuration, including Pages base path
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Accessibility and performance

- `prefers-reduced-motion` is respected for animation-heavy interactions.
- Touch devices get tap interactions and native swipe rails.
- The custom cursor appears only with a mouse or trackpad.
- Overlays close with Esc, and the highlight reel supports Space and arrow keys.

## Keyboard shortcuts

- **Opening:** Enter or Esc skips it.
- **Play Intro:** Space pauses, left/right arrows change slides, Esc closes.
- **Project and resume overlays:** Esc closes.
