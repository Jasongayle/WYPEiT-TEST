import React, { useState } from 'react'
import { Mail } from 'lucide-react'

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual email subscription logic here
    console.log(`Email subscription requested for: ${email}`)
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <div className="bg-primary-100 rounded-lg p-8 my-12">
      <h2 className="text-3xl font-bold mb-4 text-primary-800">Stay Informed and Secure</h2>
      <p className="mb-6 text-primary-700">
        Subscribe to our newsletter for the latest tips on managing your online presence, exclusive
        offers, and updates on our upcoming features!
      </p>
      <h3 className="text-xl font-semibold mb-4 text-primary-800">What you'll get:</h3>
      <ul className="list-disc list-inside mb-6 text-primary-700">
        <li>Weekly security tips and best practices</li>
        <li>Exclusive WYPEiT.com offers and updates</li>
        <li>Early access to new features</li>
      </ul>
      {isSubscribed ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Thank you for subscribing!</strong>
          <span className="block sm:inline"> We'll keep you updated on our launch and upcoming features.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-lg border-2 border-primary-300 focus:outline-none focus:border-primary-500"
            required
          />
          <button
            type="submit"
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition duration-300 flex items-center justify-center"
          >
            <Mail className="mr-2" />
            Subscribe
          </button>
        </form>
      )}
      <div className="bg-white rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-800">
          <span className="text-primary-600 mr-2">⚠</span> Quick Security Tips
        </h3>
        <ul className="list-disc list-inside mb-6 text-primary-700">
          <li>Use strong, unique passwords for each social media account</li>
          <li>Enable two-factor authentication whenever possible</li>
          <li>Be cautious about the information you share publicly</li>
          <li>Regularly review and update your privacy settings</li>
        </ul>
        <h4 className="font-semibold mb-2 text-primary-800">Learn More:</h4>
        <ul className="space-y-2">
          <li>
            <a href="https://www.youtube.com/watch?v=yrjT8m0hcKU" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
              Video: 5 Social Media Security Tips
            </a>
          </li>
          <li>
            <a href="https://consumer.ftc.gov/articles/how-secure-your-social-media-accounts" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
              FTC: Social Media and Online Privacy
            </a>
          </li>
          <li>
            <a href="https://www.cisa.gov/sites/default/files/publications/Social_Media_Cybersecurity_Tip_Sheet_508C.pdf" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
              CISA: Social Media Cybersecurity Tip Sheet
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NewsletterSubscription