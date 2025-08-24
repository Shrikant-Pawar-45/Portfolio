# Portfolio
Modern personal portfolio built with React and Vite. Deployed to GitHub Pages.

## Live Demo
- https://shrikant-pawar-45.github.io/Portfolio/

## Tech Stack
- React 19 + Vite 7
- React Router
- Bootstrap 5 + Bootstrap Icons
- Framer Motion
- Firebase (for services/config as needed)

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```
4. Preview the production build
   ```bash
   npm run preview
   ```

## Available Scripts
- `npm run dev` — Start Vite dev server
- `npm run build` — Build the app
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint
- `npm run deploy` — Deploy to GitHub Pages (runs `predeploy` -> build first)

## Deployment (GitHub Pages)
This project is configured for GitHub Pages:
- `vite.config.js` sets `base: '/Portfolio/'`
- `package.json` sets `homepage` and provides `predeploy`/`deploy` scripts using `gh-pages`

Deploy steps:
```bash
npm run deploy
```
This publishes the `dist/` folder to the `gh-pages` branch.

## Project Structure
```
Portfolio/
├─ src/
│  ├─ Componants/           # UI components, styles, designs
│  │  ├─ css/
│  │  ├─ jsx/
│  │  └─ Design/
│  ├─ assets/               # images and static assets
│  ├─ components/           # (additional components if any)
│  ├─ firebase/             # firebaseConfig.js
│  └─ services/             # service modules (if any)
├─ public/
├─ index.html
├─ vite.config.js
└─ package.json
```

## Environment Variables
- See `.env.example` for required keys.
- Firebase settings typically live in `src/firebase/firebaseConfig.js`. Do not commit secrets.

## Notes
- Ensure the repository name matches the Vite `base` path (`/Portfolio/`) for correct asset resolution on GitHub Pages.
