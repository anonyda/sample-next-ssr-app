import Link from 'next/link'
import { Post } from '../lib/posts'

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-semibold text-gray-900">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </Link>
        </h2>
        <time className="text-sm text-gray-500 ml-4">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
      
      <p className="text-gray-600 mb-4">
        {post.excerpt}
      </p>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          By {post.author}
        </span>
        <Link 
          href={`/blog/${post.slug}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
} 