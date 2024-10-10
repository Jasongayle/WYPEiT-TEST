import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { AlertCircle, CheckCircle } from 'lucide-react'

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await resetPassword(email)
      setMessage('Check your email for further instructions')
      setError('')
    } catch (err) {
      setError('Failed to reset password')
      setMessage('')
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Reset Password</h1>
      
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
            <AlertCircle className="mr-2" />
            <span>{error}</span>
          </div>
        )}
        {message && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
            <CheckCircle className="mr-2" />
            <span>{message}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword