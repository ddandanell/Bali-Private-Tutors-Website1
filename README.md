# Bali Private Tutors Website

A modern, responsive website for Bali Private Tutors - providing premier villa-based tutoring and international curriculum support for expat families in Bali.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Helmet Async** - SEO and meta tags management
- **Lucide React** - Icon library

## Development

### Prerequisites

- Node.js 18+ and npm

### Installation

Due to React 19 compatibility, you need to install dependencies with the `--legacy-peer-deps` flag:

```bash
npm install --legacy-peer-deps
```

### Running Locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

This project is configured for seamless deployment to Vercel. The `vercel.json` configuration file ensures:

- Proper SPA routing with rewrites
- Optimized caching headers for static assets
- Correct build commands with `--legacy-peer-deps` flag

### Deploy Steps

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the configuration and deploy

Or use the Vercel CLI:

```bash
vercel
```

## Environment Variables

If you need to add environment variables:

1. Copy `.env.example` to `.env`
2. Fill in your values
3. Add the same variables in Vercel dashboard under Project Settings → Environment Variables

**Note:** All client-side environment variables in Vite must be prefixed with `VITE_`

## Code Quality

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Reusable React components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── Layout.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── SubjectTutoring.jsx
│   ├── CurriculaSupport.jsx
│   ├── Locations.jsx
│   ├── AboutUs.jsx
│   └── Blog.jsx
├── App.jsx          # Main app component with routes
├── main.jsx         # App entry point
└── index.css        # Global styles
```

## Features

- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and structured data
- **Fast Loading** - Optimized images and code splitting
- **Accessibility** - ARIA labels and semantic HTML
- **International Curriculum Support** - IB, IGCSE, A-Levels, Australian & US curricula

## License

Private - All rights reserved © Bali Private Tutors
