# Educase (PopX Flow UI)

Educase is a frontend React application that implements a mobile-first authentication and account flow inspired by the PopX UI challenge.

The app includes:
- A welcome screen
- Account creation (sign up)
- Login
- Account settings (home)
- 404 fallback page

It is built with Vite, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, and Sonner for toast notifications.

## Demo Flow

1. Open the app on `/`
2. Click **Create Account** and submit signup form
3. User data is stored in browser `localStorage` under `userData`
4. Login with the same credentials on `/login`
5. On success, user is redirected to `/home`

## Tech Stack

- React 19 + TypeScript
- Vite 8
- React Router DOM 7
- Tailwind CSS 4 + `@tailwindcss/vite`
- shadcn/ui components
- Sonner toast notifications
- Lucide icons
- ESLint 9 + TypeScript ESLint

## Project Structure

```text
src/
	assets/
	components/
		form/
		layout/
		ui/
			button.tsx
			input.tsx
			label.tsx
			sonner.tsx
	lib/
		utils.ts
	pages/
		home.tsx
		login.tsx
		notfound.tsx
		signup.tsx
		welcome.tsx
	App.tsx
	index.css
	main.tsx
```

## Routes

Defined in `src/App.tsx`:

- `/` -> Welcome page
- `/signup` -> Signup page
- `/login` -> Login page
- `/home` -> Account settings page
- `*` -> Not Found page

## Local Development

### 1. Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm 9+

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Run Vite dev server
- `npm run build` - Type-check and create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Authentication Behavior (Current)

This project currently uses browser `localStorage` only (no backend/API):

- Signup stores full form data in `localStorage` key `userData`
- Login reads `userData` and compares email/password
- On successful login, user navigates to `/home`
- Logout on the home screen shows a toast and navigates back to `/`

Important notes:
- Data is not encrypted
- Only one user profile is stored
- Clearing browser storage removes account data

## Validation Rules

### Signup (`/signup`)
- Required: full name, phone number, email, password, agency selection
- Email must match email pattern
- Phone number must be exactly 10 digits
- Password must be at least 6 characters

### Login (`/login`)
- Email and password are required
- Email must contain `@`
- Password must be at least 6 characters
- Credentials must match stored `userData`

## Styling and UI Notes

- Tailwind CSS v4 is configured in `src/index.css`
- shadcn/ui setup is configured via `components.json`
- Theme tokens (colors, radius, etc.) are centralized with CSS variables
- App layout is mobile-first with a centered card on larger screens

## Path Alias

The project uses `@` alias for `src`.

Examples:
- `@/components/ui/button`
- `@/lib/utils`

Configured in:
- `tsconfig.app.json` (`compilerOptions.paths`)
- `vite.config.ts` (`resolve.alias`)

## Linting

ESLint is configured using flat config (`eslint.config.js`) with:
- JavaScript recommended rules
- TypeScript ESLint recommended rules
- React Hooks plugin rules
- React Refresh/Vite plugin rules

Run:

```bash
npm run lint
```

## Build for Production

```bash
npm run build
```

Output is generated in `dist/`.

To preview the production build:

```bash
npm run preview
```

## Suggested Next Improvements

- Replace `localStorage` auth with secure backend authentication
- Add protected route logic for `/home`
- Add persistent user session and logout invalidation
- Add unit/integration tests (Vitest + React Testing Library)
- Add form abstraction and reusable validation utilities
- Add loading, error, and empty states for better UX

## Disclaimer

This project is suitable for frontend practice and UI prototyping.
Do not use the current auth approach in production without a secure backend and proper credential handling.
