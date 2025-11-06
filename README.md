# My Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS v4. Features a beautiful dark/light mode theme system with a custom teal color palette.

![Portfolio Preview](public/assets/hero.jpg)

## Features

- **Modern Design** - Clean, professional UI with smooth animations
- **Dark/Light Mode** - Seamless theme switching with next-themes
- **Custom Color Palette** - Teal primary color with carefully crafted light and dark variants
- **Fully Responsive** - Optimized for all device sizes
- **Performance Optimized** - Built with Next.js 16 App Router for lightning-fast load times
- **Smooth Animations** - Custom keyframe animations for engaging user experience
- **Component-Based** - Built with reusable shadcn/ui components
- **SEO Ready** - Optimized meta tags and structure

## Tech Stack

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **OKLCH Color Space** - Modern perceptually uniform colors

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[class-variance-authority](https://cva.style/)** - Component variants

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/solonkonora/my-portfolio.git
cd my-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Color Palette

### Light Mode
- **Primary**: Teal `#009688` (oklch(65% 0.15 180))
- **Secondary**: Blush Pink `#FADADD`
- **Background**: Off-White `#FAFAFA`
- **Text**: Deep Navy `#1A1A40`

### Dark Mode
- **Primary**: Teal `#009688` (oklch(70% 0.15 180))
- **Secondary**: Muted Rose `#D4A5A5`
- **Background**: Charcoal Gray `#121212`
- **Text**: Soft Lavender Gray `#C7C9E2`

### Interactive Elements
- **Hover/Focus**: Aqua Glow `#20C997` | Soft Mint `#98FF98`

## Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout with ThemeProvider
│   └── page.tsx             # Home page
├── src/
│   └── components/
│       ├── ui/              # shadcn/ui components
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   └── badge.tsx
│       ├── About.tsx        # About section
│       ├── Contact.tsx      # Contact section
│       ├── Home.tsx         # Main hero section
│       ├── Projects.tsx     # Projects showcase
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx # Dark/light mode toggle
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── assets/             # Images and static files
└── package.json
```

## Sections

1. **Hero Section** - Eye-catching introduction with background image
2. **About** - Personal introduction and highlights
3. **Projects** - Featured work with live demos and GitHub links
4. **Skills** - Technical expertise organized by category
5. **Contact** - Get in touch via email and social media

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/solonkonora/my-portfolio)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in seconds!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `.next`

## Customization

### Update Personal Information

Edit the following files:
- `src/components/Home.tsx` - Name, title, hero content
- `src/components/About.tsx` - About section content
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact information

### Change Colors

Edit `app/globals.css` to customize the color palette:
```css
@theme {
  --color-primary: oklch(65% 0.15 180);
}

### Add New Components

Use shadcn/ui CLI to add components:
```bash
npx shadcn@latest add [component-name]
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Nora Solonko**

- GitHub: [@solonkonora](https://github.com/solonkonora)
- Portfolio: [Your Portfolio URL]

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

---

**If you found this project helpful, please consider giving it a star!**

Built using Next.js and Tailwind CSS
