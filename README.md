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
│   ├── Layout.jsx
│   └── SEO.jsx      # 🆕 SEO metadata component
├── config/          # 🆕 Configuration files
│   └── seo.config.js  # SEO constants and helpers
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

public/
├── robots.txt       # 🆕 Search engine crawling rules
├── sitemap.xml      # 🆕 Complete site map for SEO
└── FAVICON_SETUP.md # Instructions for adding favicons
```

## Features

- **Responsive Design** - Mobile-first approach
- **100% SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Search Engine Ready** - Includes robots.txt and sitemap.xml
- **Social Media Optimized** - Rich previews for Facebook, Twitter, LinkedIn
- **Structured Data** - EducationalOrganization schema for rich search results
- **Fast Loading** - Optimized images and code splitting
- **Accessibility** - ARIA labels and semantic HTML
- **International Curriculum Support** - IB, IGCSE, A-Levels, Australian & US curricula

## SEO Features

This website includes comprehensive SEO optimization:

### ✅ Meta Tags & Social Sharing
- Unique title and description for each page
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs
- Proper keyword optimization

### ✅ Structured Data (JSON-LD)
- EducationalOrganization schema
- Complete service catalog
- Location and area served data
- Optimized for Google Knowledge Graph

### ✅ Technical SEO
- `/robots.txt` - Search engine crawling rules
- `/sitemap.xml` - Complete site structure
- Semantic HTML with proper heading hierarchy
- Descriptive alt tags on all images
- Mobile-optimized with theme-color

### 📚 Documentation
- See [SEO_IMPLEMENTATION.md](./SEO_IMPLEMENTATION.md) for detailed SEO documentation
- Test SEO config with: `node scripts/test-seo-config.mjs`

### 🎯 Next Steps for Full SEO
1. Add favicon images to `/public` (see `/public/FAVICON_SETUP.md`)
2. Create Open Graph image (1200x630px)
3. Create Twitter Card image (1200x600px)
4. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
5. Submit sitemap to [Google Search Console](https://search.google.com/search-console)

## License

Private - All rights reserved © Bali Private Tutors
