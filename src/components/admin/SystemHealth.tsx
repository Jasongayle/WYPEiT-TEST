import React from 'react'
import { Server, Cpu, HardDrive, Activity } from 'lucide-react'

const SystemHealth: React.FC = () => {
  // Mock data - in a real application, this would come from your backend
  const systemStatus = {
    serverUptime: '99.9%',
    cpuUsage: '45%',
    memoryUsage: '60%',
    diskSpace: '70%',
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">System Health</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <Server className="mr-2 text-blue-500" />
            <h3 className="text-lg font-semibold">Server Uptime</h3>
          </div>
          <p className="text-2xl font-bold">{systemStatus.serverUptime}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <Cpu className="mr-2 text-green-500" />
            <h3 className="text-lg font-semibold">CPU Usage</h3>
          </div>
          <p className="text-2xl font-bold">{systemStatus.cpuUsage}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <Activity className="mr-2 text-yellow-500" />
            <h3 className="text-lg font-semibold">Memory Usage</h3>
          </div>
          <p className="text-2xl font-bold">{systemStatus.memoryUsage}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <HardDrive className="mr-2 text-purple-500" />
            <h3 className="text-lg font-semibold">Disk Space</h3>
          </div>
          <p className="text-2xl font-bold">{systemStatus.diskSpace}</p>
        </div>
      </div>
    </div>
  )
}

export default SystemHealth