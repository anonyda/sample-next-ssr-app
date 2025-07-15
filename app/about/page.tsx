export const metadata = {
  title: 'About - My Blog',
  description: 'Learn more about this blog and its author',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        About This Blog
      </h1>
      
      <div className="prose prose-lg">
        <p className="text-lg text-gray-600 mb-6">
          Welcome to my blog! This is a simple NextJS application built with the new App Router 
          to demonstrate server-side rendering and modern React patterns.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What You'll Find Here
        </h2>
        
        <ul className="space-y-2 text-gray-600 mb-6">
          <li>• In-depth tutorials on NextJS and React</li>
          <li>• Best practices for modern web development</li>
          <li>• Tips and tricks for building performant applications</li>
          <li>• Insights into server-side rendering and static generation</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Technology Stack
        </h2>
        
        <p className="text-gray-600 mb-4">
          This blog is built with:
        </p>
        
        <ul className="space-y-2 text-gray-600 mb-6">
          <li>• <strong>NextJS 14</strong> with App Router</li>
          <li>• <strong>React 18</strong> with Server Components</li>
          <li>• <strong>TypeScript</strong> for type safety</li>
          <li>• <strong>CSS</strong> for styling</li>
          <li>• <strong>React Markdown</strong> for content rendering</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Get In Touch
        </h2>
        
        <p className="text-gray-600">
          Feel free to reach out if you have any questions or suggestions. 
          I'm always happy to discuss web development and share knowledge with fellow developers.
        </p>
      </div>
    </div>
  )
} 