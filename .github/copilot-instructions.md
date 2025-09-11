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
- **Text & Image Updates:** Always update texts in `src/data/data.ts` and images in `public/images/`.
- **Component Organization:** Place new UI sections in `src/components/Sections/`. For cards, use `src/components/Cards/`.
- **Styling:** Use Tailwind CSS utility classes. Avoid custom CSS unless necessary; global styles go in `globals.css`.
- **TypeScript:** All new code should use TypeScript. Define new types in `src/types/type.ts`.

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
