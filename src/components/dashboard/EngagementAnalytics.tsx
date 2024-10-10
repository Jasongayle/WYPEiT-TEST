import React from 'react'
import { MessageCircle } from 'lucide-react'

interface EngagementAnalyticsProps {
  platform: string
}

const EngagementAnalytics: React.FC<EngagementAnalyticsProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const engagement = {
    likes: 1500,
    comments: 300,
    shares: 200,
    averageEngagementRate: '3.5%',
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <MessageCircle className="mr-2" /> Engagement Analytics ({platform})
      </h3>
      <ul className="space-y-2">
        <li>Total Likes: {engagement.likes}</li>
        <li>Total Comments: {engagement.comments}</li>
        <li>Total Shares: {engagement.shares}</li>
        <li>Average Engagement Rate: {engagement.averageEngagementRate}</li>
      </ul>
    </div>
  )
}

export default EngagementAnalytics