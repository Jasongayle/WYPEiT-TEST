import React from 'react'
import { Smartphone } from 'lucide-react'

interface ConnectedDevicesProps {
  platform: string
}

const ConnectedDevices: React.FC<ConnectedDevicesProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const devices = [
    { name: 'iPhone 12', lastUsed: '2023-07-05' },
    { name: 'MacBook Pro', lastUsed: '2023-07-04' },
    { name: 'iPad Air', lastUsed: '2023-07-01' },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Smartphone className="mr-2" /> Connected Devices ({platform})
      </h3>
      <ul className="space-y-2">
        {devices.map((device, index) => (
          <li key={index} className="text-sm">
            {device.name} - Last used on {device.lastUsed}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ConnectedDevices