import React from 'react'
import { Smile } from 'lucide-react'

interface SentimentAnalysisProps {
  platform: string
}

const SentimentAnalysis: React.FC<SentimentAnalysisProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const sentimentData = {
    positive: 65,
    neutral: 25,
    negative: 10,
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Smile className="mr-2" /> Sentiment Analysis ({platform})
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>Positive</span>
          <span className="font-semibold text-green-600">{sentimentData.positive}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${sentimentData.positive}%` }}></div>
        </div>
        <div className="flex justify-between items-center">
          <span>Neutral</span>
          <span className="font-semibold text-gray-600">{sentimentData.neutral}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-gray-600 h-2.5 rounded-full" style={{ width: `${sentimentData.neutral}%` }}></div>
        </div>
        <div className="flex justify-between items-center">
          <span>Negative</span>
          <span className="font-semibold text-red-600">{sentimentData.negative}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${sentimentData.negative}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default SentimentAnalysis