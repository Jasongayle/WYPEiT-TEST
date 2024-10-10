import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, CreditCard, DollarSign } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Pricing: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const navigate = useNavigate()
  const { user } = useAuth()

  const handlePayment = (method: 'paypal' | 'stripe') => {
    setIsProcessing(true)
    // Simulating payment processing
    setTimeout(() => {
      setIsProcessing(false)
      if (user) {
        // If user is already logged in, navigate to dashboard
        navigate('/dashboard')
      } else {
        // If user is not logged in, navigate to sign up page
        navigate('/signup')
      }
    }, 2000)
  }

  const basePrice = 49.99 // USD

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Pricing</h1>
      
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-semibold text-center mb-8">One-Time Payment</h2>
          <div className="text-center mb-8">
            <div className="text-5xl font-bold mb-4">
              <span className="flex items-center justify-center">
                <DollarSign className="w-8 h-8 mr-2" />
                {basePrice.toFixed(2)} USD
              </span>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 mb-8">
            Get full access to our premium features
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <Lock className="w-6 h-6 text-green-500 mr-2" />
              <span>Comprehensive social media account analysis</span>
            </li>
            <li className="flex items-center">
              <Lock className="w-6 h-6 text-green-500 mr-2" />
              <span>AI-powered content risk assessment</span>
            </li>
            <li className="flex items-center">
              <Lock className="w-6 h-6 text-green-500 mr-2" />
              <span>Secure data backup before deletion</span>
            </li>
            <li className="flex items-center">
              <Lock className="w-6 h-6 text-green-500 mr-2" />
              <span>Access to user dashboard with detailed insights</span>
            </li>
            <li className="flex items-center">
              <Lock className="w-6 h-6 text-green-500 mr-2" />
              <span>Support for all major social media platforms</span>
            </li>
          </ul>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handlePayment('paypal')}
              disabled={isProcessing}
              className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition duration-300 flex items-center justify-center"
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <CreditCard className="animate-spin mr-2" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  <Lock className="mr-2" />
                  Pay with PayPal
                </span>
              )}
            </button>
            <button
              onClick={() => handlePayment('stripe')}
              disabled={isProcessing}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition duration-300 flex items-center justify-center"
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <CreditCard className="animate-spin mr-2" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  <Lock className="mr-2" />
                  Pay with Stripe
                </span>
              )}
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            <Lock className="inline-block mr-1" size={16} />
            Secure payment processed by PayPal or Stripe
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Need more information?</h3>
        <p className="mb-4">Contact our team for custom solutions or enterprise pricing.</p>
        <a 
          href="mailto:info@wypeit.com?subject=Inquiry%20about%20WYPEiT%20Pricing&body=Hello%20WYPEiT%20Team,%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20pricing%20and%20services.%20Could%20you%20please%20provide%20me%20with%20additional%20information?%0A%0AThank%20you!"
          className="text-primary-600 hover:text-primary-800 underline"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Pricing