import React from 'react'
import { TrendingUp } from 'lucide-react'

interface SocialTrendsProps {
  platform: string
}

const SocialTrends: React.FC<SocialTrendsProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const trends = [
    { topic: '#TechNews', count: 5000 },
    { topic: 'AI Revolution', count: 3500 },
    { topic: 'ClimateAction', count: 2800 },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <TrendingUp className="mr-2" /> Social Trends ({platform})
      </h3>
      <ul className="space-y-2">
        {trends.map((trend, index) => (
          <li key={index} className="text-sm">
            {trend.topic}: {trend.count} mentions
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialTrends