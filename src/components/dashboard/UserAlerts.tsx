import React from 'react'
import { Bell } from 'lucide-react'

interface UserAlertsProps {
  platform: string
}

const UserAlerts: React.FC<UserAlertsProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const alerts = [
    { id: 1, message: 'Privacy policy update for your account', date: '2023-07-05' },
    { id: 2, message: 'Unusual login activity detected', date: '2023-07-04' },
    { id: 3, message: 'New feature available: Story Highlights', date: '2023-07-03' },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Bell className="mr-2" /> User Alerts ({platform})
      </h3>
      <ul className="space-y-2">
        {alerts.map((alert) => (
          <li key={alert.id} className="text-sm">
            <span className="font-semibold">{alert.date}</span>: {alert.message}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserAlerts