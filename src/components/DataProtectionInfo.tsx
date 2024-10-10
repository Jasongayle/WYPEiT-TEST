import React, { useState, useEffect } from 'react'
import { Globe, ChevronDown, ChevronUp } from 'lucide-react'

const DataProtectionInfo: React.FC = () => {
  const [country, setCountry] = useState('')
  const [info, setInfo] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const fetchDataProtectionInfo = async (country: string) => {
    setIsLoading(true)
    // TODO: Replace this with actual Gemini API call
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      const response = `Data Protection Rights in ${country}:

1. Right to Access: You have the right to request access to your personal data.
2. Right to Rectification: You can request corrections to your personal data if it's inaccurate or incomplete.
3. Right to Erasure: Also known as the 'right to be forgotten', you can request the deletion of your personal data in certain circumstances.
4. Right to Restrict Processing: You can request the restriction of processing of your personal data in certain circumstances.
5. Right to Data Portability: You have the right to receive your personal data in a structured, commonly used, and machine-readable format.
6. Right to Object: You can object to the processing of your personal data in certain circumstances.
7. Rights Related to Automated Decision Making: You have rights related to automated decision making, including profiling.

Note: The specific implementation of these rights may vary depending on local laws and regulations. For the most accurate and up-to-date information, please consult with a legal professional or your local data protection authority.`

      setInfo(response)
    } catch (error) {
      console.error('Error fetching data protection info:', error)
      setInfo('Failed to fetch data protection information. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (country) {
      fetchDataProtectionInfo(country)
    }
  }, [country])

  return (
    <div>
      <p className="mb-4">
        Understanding your data protection rights is crucial in today's digital age. Select your country to learn about your specific rights:
      </p>
      <div className="mb-4">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="">Select your country</option>
          <option value="United States">United States (CCPA)</option>
          <option value="European Union">European Union (GDPR)</option>
          <option value="United Kingdom">United Kingdom (UK GDPR)</option>
          <option value="Canada">Canada (PIPEDA)</option>
          <option value="Australia">Australia (Privacy Act)</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      {isLoading && <p>Loading data protection information...</p>}
      {info && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <h3 className="font-semibold flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Data Protection Rights Summary
            </h3>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </div>
          {isExpanded && (
            <pre className="mt-2 whitespace-pre-wrap text-sm">{info}</pre>
          )}
        </div>
      )}
      <p className="mt-4 text-sm text-gray-600">
        For the most accurate and up-to-date information, always consult with a legal professional or your local data protection authority.
      </p>
    </div>
  )
}

export default DataProtectionInfo