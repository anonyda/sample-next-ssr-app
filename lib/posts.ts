export interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  slug: string
}

// Sample blog posts data
export const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with NextJS App Router',
    excerpt: 'Learn how to build modern web applications with NextJS 14 and the new App Router architecture.',
    content: `
# Getting Started with NextJS App Router

The NextJS App Router is a new paradigm for building React applications. It provides several advantages over the traditional Pages Router:

## Key Benefits

- **Server Components by default**: Better performance and SEO
- **Improved file-system routing**: More intuitive folder structure  
- **Built-in loading and error states**: Better user experience
- **Nested layouts**: More flexible page structures

## Creating Your First Route

To create a new route, simply create a folder with a \`page.tsx\` file inside the \`app\` directory:

\`\`\`
app/
  blog/
    page.tsx
\`\`\`

This will create a route accessible at \`/blog\`.

## Server Side Rendering

With App Router, pages are Server Components by default, which means they render on the server. This provides:

- Better SEO optimization
- Faster initial page loads
- Reduced client-side JavaScript bundle

Start exploring the App Router today and build faster, more maintainable web applications!
    `,
    date: '2024-01-15',
    author: 'John Doe',
    slug: 'getting-started-nextjs-app-router'
  },
  {
    id: '2',
    title: 'Understanding Server Components vs Client Components',
    excerpt: 'A deep dive into the differences between Server and Client Components in React and NextJS.',
    content: `
# Understanding Server Components vs Client Components

React Server Components represent a fundamental shift in how we think about React applications. Let's explore the key differences:

## Server Components

Server Components run on the server and offer several benefits:

- **Zero client-side JavaScript**: Components render on server only
- **Direct database access**: Can fetch data directly without API routes
- **Improved security**: Sensitive logic stays on server
- **Better SEO**: Content is server-rendered

## Client Components

Client Components run in the browser and are needed for:

- **Interactive features**: onClick handlers, form submissions
- **Browser APIs**: localStorage, geolocation, etc.
- **State management**: useState, useEffect hooks
- **Real-time updates**: WebSocket connections

## When to Use Each

Use Server Components for:
- Static content display
- Data fetching and display
- SEO-critical pages

Use Client Components for:
- Interactive UI elements
- Forms with validation
- Dynamic state management
- Browser-specific features

## The "use client" Directive

To make a component render on the client, add the "use client" directive at the top:

\`\`\`tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
\`\`\`

Understanding when to use each type of component is crucial for building performant NextJS applications.
    `,
    date: '2024-01-10',
    author: 'Jane Smith',
    slug: 'server-components-vs-client-components'
  },
  {
    id: '3',
    title: 'Building Dynamic Routes with App Router',
    excerpt: 'Learn how to create dynamic routes and handle URL parameters in NextJS App Router.',
    content: `
# Building Dynamic Routes with App Router

Dynamic routes allow you to create pages that can handle variable URL segments. Here's how to implement them in NextJS App Router:

## Creating Dynamic Routes

To create a dynamic route, wrap the folder name in square brackets:

\`\`\`
app/
  blog/
    [slug]/
      page.tsx
\`\`\`

This creates a route that matches \`/blog/any-slug-here\`.

## Accessing Route Parameters

In your page component, access the dynamic segment through the \`params\` prop:

\`\`\`tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>
}
\`\`\`

## Multiple Dynamic Segments

You can have multiple dynamic segments:

\`\`\`
app/
  blog/
    [category]/
      [slug]/
        page.tsx
\`\`\`

Access both parameters:

\`\`\`tsx
export default function Post({ 
  params 
}: { 
  params: { category: string; slug: string } 
}) {
  return (
    <div>
      <h1>Category: {params.category}</h1>
      <h2>Post: {params.slug}</h2>
    </div>
  )
}
\`\`\`

## Catch-All Routes

Use \`[...slug]\` for catch-all routes that match multiple segments:

\`\`\`
app/
  docs/
    [...slug]/
      page.tsx
\`\`\`

This matches \`/docs/getting-started\`, \`/docs/api/authentication\`, etc.

## generateStaticParams for SSG

For static generation, use \`generateStaticParams\`:

\`\`\`tsx
export async function generateStaticParams() {
  const posts = await getPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
\`\`\`

Dynamic routes are powerful for creating flexible, scalable applications with NextJS App Router.
    `,
    date: '2024-01-05',
    author: 'Mike Johnson',
    slug: 'building-dynamic-routes-app-router'
  }
]

// Helper functions
export async function getAllPosts(): Promise<Post[]> {
  // In a real app, this would fetch from a database or CMS
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find(post => post.slug === slug)
}

export async function getPostSlugs(): Promise<string[]> {
  return posts.map(post => post.slug)
} 