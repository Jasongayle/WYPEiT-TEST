import React from 'react'
import { AtSign } from 'lucide-react'

interface RecentMentionsProps {
  platform: string
}

const RecentMentions: React.FC<RecentMentionsProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const mentions = [
    { user: '@friend1', content: 'Great post by @user!' },
    { user: '@company', content: 'Thanks for the feedback, @user' },
    { user: '@influencer', content: 'Loved collaborating with @user' },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <AtSign className="mr-2" /> Recent Mentions ({platform})
      </h3>
      <ul className="space-y-2">
        {mentions.map((mention, index) => (
          <li key={index} className="text-sm">
            {mention.user}: "{mention.content}"
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentMentions