# Taskivate

Taskivate is a simple to‑do list application created both for learning purposes and as a personal tool for planning the day.  
The project exists to practice:

- TypeScript
- React 18
- Vite
- ESLint
- Prettier

In the long run, Taskivate is meant to support:

- everyday task lists
- reminders and notifications (e.g. web push / system notifications)
- gamification elements: quests, levels, rewards, stats

---

## Tech stack

- **React** 18
- **TypeScript** 5
- **Vite** 6 (bundler and dev server)
- **ESLint** 9 + **\@typescript-eslint**
- **Prettier** 3

---

## Project structure

Key files and directories:

- `src/main.tsx` – React app entry point
- `src/App.tsx` – main application component
- `src/components/TodoList.tsx` – basic to‑do list component
- `src/types/task.ts` – `Task` type used in the app state
- `src/index.css` – global styles
- `eslint.config.js` – ESLint configuration (TS + React + Prettier)
- `prettier.config.cjs` – Prettier configuration
- `vite.config.js` – Vite configuration

---

## Requirements

- Node.js (recommended: current LTS)
- npm

On macOS you can check versions with:
```
node -v
npm -v
```
If you do not have Node.js installed, you can download it from:
https://nodejs.org/

---

## Installation
Clone the repository and install dependencies:
git clone <your-repo-url>.git
```
cd taskivate
npm install
```

---

## Running the app
Start the development server (with HMR):

```npm run dev```

By default, the app will be available at:

http://localhost:5173

You can change the port using Vite options if needed.

---

## Production build
Create an optimized production build:

```npm run build```

Preview the built app locally:

```npm run preview```

The build output is generated in the dist/ directory.

---

## Code quality
Linting
Run ESLint for the whole project:

```npm run lint```

The configuration includes:

@eslint/js base rules (JavaScript)
eslint-plugin-react + eslint-plugin-react-hooks
@typescript-eslint/eslint-plugin (TypeScript rules)
eslint-plugin-react-refresh
integration with Prettier:
eslint-config-prettier
eslint-plugin-prettier (Prettier errors shown as ESLint errors)
Formatting (Prettier)

Automatically format the entire repository:

```npm run format```

Recommended IDE setup (e.g. WebStorm):

set Prettier as the default formatter
enable format on save
enable ESLint for the project and show problems in the editor

---

## Code conventions
Use TypeScript for React components and logic (.ts / .tsx).
Prefer function components with hooks (useState, useEffect, etc.).
Keep domain types (e.g. Task) in src/types.
Extract complex logic from JSX into helper functions or custom hooks.
Keep components small and focused when possible.
You can adapt these rules to your personal preferences as the project evolves.

---

## Roadmap / plans
Planned or possible next steps for Taskivate:

[ ] Extended Task model:
dueDate (deadline)
priority / categories
tags

[ ] Local task persistence:
localStorage for simple persistence

[ ] Filtering and sorting:
view: all / active / completed
sort by date, priority

[ ] Motivation and gamification:
points for completed tasks
levels (XP)
daily / weekly quests
simple stats view

[ ] Notifications:
task reminders (Notification API / browser notifications)

[ ] UI/UX:
cleaner layout
basic theming (light / dark)

[ ] Tests:
unit tests for components (e.g. Jest + React Testing Library)
basic integration tests
This list is open and will evolve together with the project and learning goals.
