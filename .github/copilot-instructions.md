# Copilot Instructions for AI Agents

## Project Overview
This is a Next.js + Tailwind CSS landing page template, designed for rapid development of modern, responsive landing pages. The codebase is organized for clarity and maintainability, with clear separation of concerns.

## Key Architecture & Patterns
- **App Router:** All pages are under `src/app/` using Next.js App Router. The main entry is `page.tsx`, with global styles in `globals.css` and layout in `layout.tsx`.
- **Reusable Components:** Shared UI elements are in `src/components/`, grouped by type (e.g., `Sections/` for page sections, `Cards/` for card components).
- **Centralized Data:** Static content (texts, info) is managed in `src/data/`. Update landing page texts in `data.ts` and info in `info.ts`.
- **Type Safety:** All custom types/interfaces are in `src/types/type.ts`.
- **Static Assets:** Images are stored in `public/images/` and referenced via `/images/filename.ext`.

## Developer Workflows
- **Development:** Use `npm run dev` to start the local server.
- **Build:** Use `npm run build` for production builds.
- **Linting:** Use `npm run lint` to check code quality (ESLint config in `eslint.config.mjs`).
- **Production:** Use `npm run start` to serve the built app.
- **Dependencies:** Managed via `package.json`. Tailwind config is in `postcss.config.mjs` and Next.js config in `next.config.ts`.

## Project-Specific Conventions

- **Centralized Data Files:** All project information and text should be organized into files in the `src/data/` folder:
- `info.ts`: Complete developer data (profile, contacts, social media, education, etc.)
- `work.ts`: Skills (with icons, colors, links) and projects for the portfolio
- `data.texts.ts`: Text from all sessions and components, exported for use in the respective components
- Other files can follow the same standard to centralize reusable data
Import the data from these files into the components to ensure standardization and facilitate maintenance.

## Integration Points
- **React Icons:** Installed via `react-icons` (see `package.json`).
- **No API/backend integration by default.** Add API routes in `src/app/api/` if needed.

## Example Patterns
- To add a new section:
  1. Create a component in `src/components/Sections/`.
  2. Import and use it in `src/app/page.tsx`.
- To update landing page text:
  - Edit `src/data/data.ts` and reference the data in your components.
- To add a new image:
  - Place it in `public/images/` and reference as `/images/your-image.png`.

## References
- See `README.md` for more details and up-to-date instructions.
- For major changes, update this file to help future AI agents and developers.
