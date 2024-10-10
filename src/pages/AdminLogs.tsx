import React, { useState, useEffect } from 'react'
import { Download, Trash2, RefreshCw } from 'lucide-react'

interface Log {
  id: string
  timestamp: string
  level: 'info' | 'warning' | 'error'
  message: string
}

const AdminLogs: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([])
  const [logType, setLogType] = useState<'system' | 'error'>('system')
  const [isLoading, setIsLoading] = useState(false)
  const [autoPurgeEnabled, setAutoPurgeEnabled] = useState(false)

  useEffect(() => {
    fetchLogs()
  }, [logType])

  const fetchLogs = async () => {
    setIsLoading(true)
    // TODO: Replace with actual API call
    setTimeout(() => {
      const mockLogs: Log[] = Array.from({ length: 20 }, (_, i) => ({
        id: `log-${i}`,
        timestamp: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
        level: ['info', 'warning', 'error'][Math.floor(Math.random() * 3)] as 'info' | 'warning' | 'error',
        message: `${logType === 'system' ? 'System' : 'Error'} log message ${i + 1}`
      }))
      setLogs(mockLogs)
      setIsLoading(false)
    }, 1000)
  }

  const handleDownload = () => {
    const logText = logs.map(log => `${log.timestamp} [${log.level.toUpperCase()}] ${log.message}`).join('\n')
    const blob = new Blob([logText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${logType}_logs_${new Date().toISOString()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handlePurge = async () => {
    // TODO: Replace with actual API call
    setIsLoading(true)
    setTimeout(() => {
      setLogs([])
      setIsLoading(false)
      alert('Log cache purged successfully')
    }, 1000)
  }

  const toggleAutoPurge = () => {
    setAutoPurgeEnabled(!autoPurgeEnabled)
    // TODO: Implement API call to enable/disable auto-purge
    alert(`Auto-purge ${!autoPurgeEnabled ? 'enabled' : 'disabled'}`)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">System and Error Logs</h1>
      
      <div className="mb-6 flex justify-between items-center">
        <div>
          <select
            value={logType}
            onChange={(e) => setLogType(e.target.value as 'system' | 'error')}
            className="mr-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="system">System Logs</option>
            <option value="error">Error Logs</option>
          </select>
          <button
            onClick={fetchLogs}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            <RefreshCw className="inline-block mr-2" />
            Refresh
          </button>
        </div>
        <div>
          <button
            onClick={handleDownload}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 mr-4"
          >
            <Download className="inline-block mr-2" />
            Download Logs
          </button>
          <button
            onClick={handlePurge}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            <Trash2 className="inline-block mr-2" />
            Purge Log Cache
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={autoPurgeEnabled}
            onChange={toggleAutoPurge}
            className="mr-2"
          />
          Enable automatic monthly log purge
        </label>
      </div>

      {isLoading ? (
        <div className="text-center">
          <RefreshCw className="animate-spin inline-block mr-2" />
          Loading logs...
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {logs.map((log) => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(log.timestamp).toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      log.level === 'info' ? 'bg-green-100 text-green-800' : 
                      log.level === 'warning' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {log.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{log.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default AdminLogs