import React from 'react'
import { Users, FileText, AlertTriangle, Server } from 'lucide-react'

const AdminOverview: React.FC = () => {
  // These would typically be fetched from an API
  const totalUsers = 1234
  const totalScrapes = 5678
  const activeAlerts = 3
  const systemHealth = 98.5

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admin Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <OverviewCard
          title="Total Users"
          value={totalUsers}
          icon={<Users className="h-8 w-8 text-blue-500" />}
        />
        <OverviewCard
          title="Total Scrapes"
          value={totalScrapes}
          icon={<FileText className="h-8 w-8 text-green-500" />}
        />
        <OverviewCard
          title="Active Alerts"
          value={activeAlerts}
          icon={<AlertTriangle className="h-8 w-8 text-yellow-500" />}
        />
        <OverviewCard
          title="System Health"
          value={`${systemHealth}%`}
          icon={<Server className="h-8 w-8 text-purple-500" />}
        />
      </div>
    </div>
  )
}

interface OverviewCardProps {
  title: string
  value: number | string
  icon: React.ReactNode
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium uppercase">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
        <div className="bg-gray-100 rounded-full p-3">
          {icon}
        </div>
      </div>
    </div>
  )
}

export default AdminOverview