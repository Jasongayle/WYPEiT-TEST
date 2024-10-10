import React, { useState } from 'react'
import { Settings, Save } from 'lucide-react'

const AdminTools: React.FC = () => {
  const [scrapingInterval, setScrapingInterval] = useState(60)
  const [apiRateLimit, setApiRateLimit] = useState(1000)
  const [sessionTimeout, setSessionTimeout] = useState(30)

  const handleSaveSettings = () => {
    // Implement logic to save settings
    console.log('Saving settings:', { scrapingInterval, apiRateLimit, sessionTimeout })
    // You would typically make an API call here to update the settings
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admin Tools</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Platform Settings</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="scrapingInterval" className="block text-sm font-medium text-gray-700">
              Scraping Interval (minutes)
            </label>
            <input
              type="number"
              id="scrapingInterval"
              value={scrapingInterval}
              onChange={(e) => setScrapingInterval(parseInt(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="apiRateLimit" className="block text-sm font-medium text-gray-700">
              API Rate Limit (requests per hour)
            </label>
            <input
              type="number"
              id="apiRateLimit"
              value={apiRateLimit}
              onChange={(e) => setApiRateLimit(parseInt(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">
              Session Timeout (minutes)
            </label>
            <input
              type="number"
              id="sessionTimeout"
              value={sessionTimeout}
              onChange={(e) => setSessionTimeout(parseInt(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
        <button
          onClick={handleSaveSettings}
          className="mt-6 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Save className="mr-2 h-4 w-4" />
          Save Settings
        </button>
      </div>
    </div>
  )
}

export default AdminTools