# Alas Elite Detailing

A modern, professional marketing website for Alas Elite Detailing, a premium mobile auto detailing service based in Santa Clarita, CA. This website is designed to generate leads by showcasing premium mobile detailing services and providing clear contact methods.

## 🚗 Project Overview

Alas Elite Detailing is a mobile auto detailing business that brings professional car detailing services directly to customers' locations. The website emphasizes the convenience of mobile service while maintaining a premium, trustworthy brand aesthetic to attract luxury vehicle owners.

### Key Features

- **100% Mobile Service** - Emphasizes convenience of at-home/at-office detailing
- **Lead Generation Focus** - Clear contact methods and trust-building content
- **Premium Brand Identity** - Dark theme with electric blue accents
- **Content Management** - Fully editable content via Sanity.io headless CMS
- **Performance Optimized** - Built for top-tier Core Web Vitals scores
- **Mobile-First Design** - Responsive design prioritizing mobile experience

## 🛠 Technology Stack

### Frontend

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS (utility-first)
- **Component Library**: shadcn/ui
- **UI Generation**: v0.dev (AI-generated components)
- **Package Manager**: pnpm

### Backend & CMS

- **Content Management**: Sanity.io (headless CMS)
- **Image Optimization**: Sanity Image URL
- **API**: GROQ queries for content fetching

### Deployment & Analytics

- **Hosting**: Vercel
- **Analytics**: Vercel Analytics
- **CDN**: Vercel's global CDN

## 📁 Project Structure

```
alas-elite-detailing/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind config
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── posts/                   # Blog posts (if applicable)
│   └── studio/                  # Sanity Studio
│       └── [[...tool]]/
│           └── page.tsx
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── sections/                # Page sections (hero, services, etc.)
│   ├── forms/                   # Contact forms and lead generation
│   ├── layout/                  # Navigation, footer, etc.
│   └── cms/                     # Sanity.io integration components
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions and configurations
│   ├── utils.ts                 # Utility functions
│   └── sanity.ts                # Sanity.io client configuration
├── public/                      # Static assets
│   └── images/                  # Images and media files
├── sanity/                      # Sanity.io configuration
│   ├── schemaTypes/             # Content schemas
│   ├── lib/                     # Sanity utilities
│   └── structure.ts             # Studio structure
└── styles/                      # Additional stylesheets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Sanity.io account and project

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/alas-elite-detailing.git
   cd alas-elite-detailing
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-09-15
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Sanity Studio

Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## 📝 Content Management

The website uses Sanity.io as a headless CMS, allowing non-technical users to easily update content:

### Available Content Types

- **Hero Section**: Main banner with call-to-action
- **Services**: Detailed service offerings with pricing
- **Gallery**: Before/after images and portfolio
- **Service Area**: Coverage map and locations

### Content Editing

1. Navigate to `/studio` in your browser
2. Log in with your Sanity credentials
3. Edit content using the intuitive interface
4. Changes are automatically reflected on the live site

## 🎨 Design System

### Color Palette

- **Primary**: Electric blue (#3B82F6)
- **Background**: Dark theme (#0F0F0F)
- **Text**: High contrast white/light gray
- **Accent**: Primary blue for CTAs and highlights

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Mono Font**: JetBrains Mono (for code/technical content)

### Components

Built with shadcn/ui components, customized with Tailwind CSS for a consistent design system.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard:

   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`

3. **Deploy**
   - Automatic deployments on push to main branch
   - Preview deployments for pull requests

### Manual Deployment

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 📊 Performance

### Core Web Vitals Targets

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **FCP**: < 1.8s

### Optimization Features

- Server-side rendering with Next.js App Router
- Image optimization with Next.js Image component
- Static generation where possible
- Minimal client-side JavaScript
- Vercel's global CDN

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Building
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured for Next.js best practices
- **Prettier**: Code formatting
- **Conventional Commits**: Required commit message format

### Git Workflow

This project follows conventional commit standards:

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: code style changes
refactor: code refactoring
test: adding or updating tests
chore: maintenance tasks
```

## 📱 Responsive Design

The website is built with a mobile-first approach:

- Mobile-optimized navigation
- Touch-friendly interactions
- Optimized images for different screen sizes
- Responsive typography and spacing

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph data
- Structured data for business information
- Local SEO optimization for Santa Clarita, CA
- Sitemap generation
- Robots.txt configuration

## 📞 Contact & Support

- **Developer**: Kevin Reyes <kayreydev@gmail.com>
- **Business**: Alas Elite Detailing
- **Location**: Santa Clarita, CA

## 📄 License

This project is private and proprietary to Alas Elite Detailing.

## 🤝 Contributing

This is a private project. For any issues or suggestions, please contact the development team directly.

---

**Built with ❤️ for Alas Elite Detailing**
