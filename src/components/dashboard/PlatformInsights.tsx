import React from 'react'
import { Clock } from 'lucide-react'

interface PlatformInsightsProps {
  platform: string
}

const PlatformInsights: React.FC<PlatformInsightsProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const insights = {
    postsPerDay: 3.5,
    averagePostLength: 280,
    mostActiveTime: '2PM - 4PM',
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Clock className="mr-2" /> Platform Insights ({platform})
      </h3>
      <ul className="space-y-2">
        <li>Average Posts per Day: {insights.postsPerDay}</li>
        <li>Average Post Length: {insights.averagePostLength} characters</li>
        <li>Most Active Time: {insights.mostActiveTime}</li>
      </ul>
    </div>
  )
}

export default PlatformInsights