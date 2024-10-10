import React from 'react'
import { Star } from 'lucide-react'

interface PopularPostsProps {
  platform: string
}

const PopularPosts: React.FC<PopularPostsProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const popularPosts = [
    { content: 'Check out this amazing sunset!', engagement: 500 },
    { content: 'Just launched our new product!', engagement: 450 },
    { content: 'Happy New Year to all our followers!', engagement: 400 },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Star className="mr-2" /> Most Popular Posts ({platform})
      </h3>
      <ul className="space-y-2">
        {popularPosts.map((post, index) => (
          <li key={index} className="text-sm">
            "{post.content}" - {post.engagement} engagements
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularPosts