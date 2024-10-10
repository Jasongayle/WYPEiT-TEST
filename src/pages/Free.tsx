import React from 'react'
import FreeTool from '../components/FreeTool'
import NewsletterForm from '../components/NewsletterForm'

const Free: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Free Account Management Tools</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <FreeTool />
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Get More Free Resources</h2>
        <NewsletterForm />
      </div>
    </div>
  )
}

export default Free