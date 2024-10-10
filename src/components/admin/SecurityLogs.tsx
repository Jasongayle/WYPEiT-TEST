import React, { useState, useEffect } from 'react'
import { Shield, ChevronDown, ChevronUp } from 'lucide-react'

interface SecurityLog {
  id: string
  timestamp: string
  event: string
  user: string
  ipAddress: string
  details: string
}

const SecurityLogs: React.FC = () => {
  const [logs, setLogs] = useState<SecurityLog[]>([])
  const [expandedLog, setExpandedLog] = useState<string | null>(null)

  useEffect(() => {
    // Fetch security logs
    // This is a mock implementation. Replace with actual API call.
    const mockLogs: SecurityLog[] = [
      { id: '1', timestamp: '2023-06-01 10:15:00', event: 'Failed login attempt', user: 'john@example.com', ipAddress: '192.168.1.100', details: 'Multiple failed login attempts detected.' },
      { id: '2', timestamp: '2023-06-01 11:30:00', event: 'Password reset', user: 'jane@example.com', ipAddress: '10.0.0.50', details: 'User successfully reset their password.' },
      // Add more mock logs...
    ]
    setLogs(mockLogs)
  }, [])

  const toggleLogDetails = (logId: string) => {
    setExpandedLog(expandedLog === logId ? null : logId)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security Logs</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {logs.map((log) => (
          <div key={log.id} className="border-b border-gray-200 last:border-b-0">
            <div 
              className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
              onClick={() => toggleLogDetails(log.id)}
            >
              <div className="flex items-center">
                <Shield className="mr-2 text-blue-500" />
                <span className="font-medium">{log.event}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-4">{log.timestamp}</span>
                {expandedLog === log.id ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            {expandedLog === log.id && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-sm text-gray-700"><strong>User:</strong> {log.user}</p>
                <p className="text-sm text-gray-700"><strong>IP Address:</strong> {log.ipAddress}</p>
                <p className="text-sm text-gray-700"><strong>Details:</strong> {log.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecurityLogs