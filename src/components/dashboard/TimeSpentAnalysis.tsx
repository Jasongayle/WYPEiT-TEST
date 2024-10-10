import React from 'react'
import { Clock } from 'lucide-react'

interface TimeSpentAnalysisProps {
  platform: string
}

const TimeSpentAnalysis: React.FC<TimeSpentAnalysisProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const timeSpent = {
    daily: '2 hours 15 minutes',
    weekly: '15 hours 45 minutes',
    monthly: '65 hours 30 minutes',
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Clock className="mr-2" /> Time Spent Analysis ({platform})
      </h3>
      <ul className="space-y-2">
        <li>Daily Average: {timeSpent.daily}</li>
        <li>Weekly Total: {timeSpent.weekly}</li>
        <li>Monthly Total: {timeSpent.monthly}</li>
      </ul>
    </div>
  )
}

export default TimeSpentAnalysis