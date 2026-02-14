# Dipidi Landing Page

A standalone vintage newspaper-themed landing page for Dipidi.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Railway

1. Connect your repository to Railway
2. Railway will automatically detect the project as a Node.js app
3. Set the following build command: `npm run build`
4. Set the start command: `npm run preview`
5. Railway will automatically deploy your app

### Environment Variables

No environment variables are required for this landing page.

## Project Structure

```
LandingPage/
├── public/              # Static assets
│   ├── newspaper-bg.png
│   ├── headline-bg.png
│   ├── revolution-hero.png
│   └── footer-bg.jpg
├── src/
│   ├── assets/          # Images imported in components
│   │   └── hero-friends.jpg
│   ├── components/      # React components
│   │   ├── Masthead.tsx
│   │   ├── HeroSection.tsx
│   │   ├── RevolutionHeroSection.tsx
│   │   ├── WayOutSection.tsx
│   │   ├── NewspaperFooter.tsx
│   │   └── FlippingHeadline.tsx
│   ├── pages/
│   │   └── NewspaperLandingPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Features

- Vintage newspaper aesthetic
- Animated flipping headlines
- Responsive design
- Email signup form
- Revolutionary messaging
