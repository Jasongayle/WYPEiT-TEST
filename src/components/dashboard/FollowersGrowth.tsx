import React from 'react'
import { Users } from 'lucide-react'

interface FollowersGrowthProps {
  platform: string
}

const FollowersGrowth: React.FC<FollowersGrowthProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const growth = {
    total: 5000,
    lastWeek: 150,
    lastMonth: 500,
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Users className="mr-2" /> Followers Growth ({platform})
      </h3>
      <ul className="space-y-2">
        <li>Total Followers: {growth.total}</li>
        <li>New Followers (Last Week): +{growth.lastWeek}</li>
        <li>New Followers (Last Month): +{growth.lastMonth}</li>
      </ul>
    </div>
  )
}

export default FollowersGrowth