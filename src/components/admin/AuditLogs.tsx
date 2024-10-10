import React, { useState, useEffect } from 'react'
import { FileText, ChevronDown, ChevronUp } from 'lucide-react'

interface AuditLog {
  id: string
  timestamp: string
  action: string
  user: string
  details: string
}

const AuditLogs: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([])
  const [expandedLog, setExpandedLog] = useState<string | null>(null)

  useEffect(() => {
    // Fetch audit logs
    // This is a mock implementation. Replace with actual API call.
    const mockLogs: AuditLog[] = [
      { id: '1', timestamp: '2023-06-01 09:00:00', action: 'User account created', user: 'admin@example.com', details: 'New user account created for john@example.com' },
      { id: '2', timestamp: '2023-06-01 10:30:00', action: 'Subscription changed', user: 'jane@example.com', details: 'User upgraded from Basic to Premium plan' },
      // Add more mock logs...
    ]
    setLogs(mockLogs)
  }, [])

  const toggleLogDetails = (logId: string) => {
    setExpandedLog(expandedLog === logId ? null : logId)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Audit Logs</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {logs.map((log) => (
          <div key={log.id} className="border-b border-gray-200 last:border-b-0">
            <div 
              className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
              onClick={() => toggleLogDetails(log.id)}
            >
              <div className="flex items-center">
                <FileText className="mr-2 text-gray-500" />
                <span className="font-medium">{log.action}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-4">{log.timestamp}</span>
                {expandedLog === log.id ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            {expandedLog === log.id && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-sm text-gray-700"><strong>User:</strong> {log.user}</p>
                <p className="text-sm text-gray-700"><strong>Details:</strong> {log.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AuditLogs