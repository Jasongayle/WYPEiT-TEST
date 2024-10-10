import React from 'react'
import { Calendar, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Managing Your Digital Footprint",
    excerpt: "In today's interconnected world, your online presence can have a significant impact on your personal and professional life. Learn why it's crucial to manage your digital footprint and how to do it effectively.",
    author: "Jane Doe",
    date: "2023-04-15",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "5 Social Media Mistakes That Could Cost You a Job",
    excerpt: "Your social media profiles are often the first thing potential employers check. Discover the common mistakes people make on social media that could harm their job prospects and how to avoid them.",
    author: "John Smith",
    date: "2023-04-22",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 3,
    title: "How AI is Revolutionizing Online Reputation Management",
    excerpt: "Artificial Intelligence is changing the game in many industries, including online reputation management. Learn how AI-powered tools like WYPEit are making it easier than ever to maintain a positive online presence.",
    author: "Alex Johnson",
    date: "2023-04-29",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
  }
]

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">WYPEit Blog</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <User className="mr-2 h-4 w-4" />
                <span className="mr-4">{post.author}</span>
                <Calendar className="mr-2 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <a href="#" className="mt-4 inline-block text-purple-600 hover:text-purple-800 font-semibold">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Load More Posts
        </button>
      </div>
    </div>
  )
}

export default Blog