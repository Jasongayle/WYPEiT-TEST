import React from 'react'
import { Calendar } from 'lucide-react'

interface ScheduledPostsProps {
  platform: string
}

const ScheduledPosts: React.FC<ScheduledPostsProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const scheduledPosts = [
    { id: 1, content: 'Exciting news coming soon!', date: '2023-07-10 10:00 AM' },
    { id: 2, content: 'Check out our latest blog post', date: '2023-07-11 2:00 PM' },
    { id: 3, content: 'Flash sale starting tomorrow!', date: '2023-07-12 9:00 AM' },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Calendar className="mr-2" /> Scheduled Posts ({platform})
      </h3>
      <ul className="space-y-2">
        {scheduledPosts.map((post) => (
          <li key={post.id} className="text-sm">
            <span className="font-semibold">{post.date}</span>: {post.content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ScheduledPosts