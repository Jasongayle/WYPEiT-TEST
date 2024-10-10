import React, { useState, useEffect } from 'react'
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react'

interface ErrorLog {
  id: string
  timestamp: string
  severity: 'critical' | 'warning' | 'info'
  message: string
  details: string
}

const ErrorLogs: React.FC = () => {
  const [logs, setLogs] = useState<ErrorLog[]>([])
  const [expandedLog, setExpandedLog] = useState<string | null>(null)

  useEffect(() => {
    // Fetch error logs
    // This is a mock implementation. Replace with actual API call.
    const mockLogs: ErrorLog[] = [
      { id: '1', timestamp: '2023-06-01 14:30:00', severity: 'critical', message: 'Database connection failed', details: 'Unable to establish connection to primary database server.' },
      { id: '2', timestamp: '2023-06-01 15:45:00', severity: 'warning', message: 'High CPU usage detected', details: 'Server CPU usage exceeded 90% for more than 5 minutes.' },
      // Add more mock logs...
    ]
    setLogs(mockLogs)
  }, [])

  const toggleLogDetails = (logId: string) => {
    setExpandedLog(expandedLog === logId ? null : logId)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Error Logs</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {logs.map((log) => (
          <div key={log.id} className="border-b border-gray-200 last:border-b-0">
            <div 
              className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
              onClick={() => toggleLogDetails(log.id)}
            >
              <div className="flex items-center">
                <AlertTriangle className={`mr-2 ${
                  log.severity === 'critical' ? 'text-red-500' :
                  log.severity === 'warning' ? 'text-yellow-500' :
                  'text-blue-500'
                }`} />
                <span className="font-medium">{log.message}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-4">{log.timestamp}</span>
                {expandedLog === log.id ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            {expandedLog === log.id && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-sm text-gray-700">{log.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ErrorLogs