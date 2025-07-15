import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getPostSlugs } from '../../../lib/posts'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <nav className="mb-8">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Blog
        </Link>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>By {post.author}</span>
            <span>•</span>
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      <div className="mt-12 pt-8 border-t">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  )
} 