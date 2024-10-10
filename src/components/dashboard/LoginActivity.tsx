import React from 'react'
import { Shield } from 'lucide-react'

interface LoginActivityProps {
  platform: string
}

const LoginActivity: React.FC<LoginActivityProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const recentLogins = [
    { date: '2023-07-05', time: '14:30', location: 'New York, USA' },
    { date: '2023-07-03', time: '09:15', location: 'London, UK' },
    { date: '2023-07-01', time: '18:45', location: 'Tokyo, Japan' },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Shield className="mr-2" /> Login Activity ({platform})
      </h3>
      <ul className="space-y-2">
        {recentLogins.map((login, index) => (
          <li key={index} className="text-sm">
            {login.date} at {login.time} - {login.location}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LoginActivity