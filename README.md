# NextJS SSR Blog

A simple server-side rendered blog built with NextJS 14 and the App Router.

## Features

- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG) for blog posts
- ✅ App Router architecture
- ✅ TypeScript support
- ✅ Responsive design
- ✅ Markdown content rendering
- ✅ SEO optimized

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                  # App Router pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── blog/            # Blog pages
│   │   └── [slug]/      # Dynamic blog post pages
│   ├── not-found.tsx    # 404 page
│   └── globals.css      # Global styles
├── components/          # Reusable components
├── lib/                 # Utilities and data
│   └── posts.ts         # Blog posts data and functions
└── public/              # Static assets
```

## Blog Posts

The blog posts are currently stored as static data in `lib/posts.ts`. In a real-world application, you would typically fetch this data from:

- A headless CMS (Contentful, Strapi, Sanity)
- A database (PostgreSQL, MongoDB)
- Markdown files in your repository
- An external API

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- [NextJS 14](https://nextjs.org/) - React framework with App Router
- [React 18](https://reactjs.org/) - UI library with Server Components
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering

## Deployment

The easiest way to deploy your NextJS app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of NextJS.

Check out the [NextJS deployment documentation](https://nextjs.org/docs/deployment) for more details. 