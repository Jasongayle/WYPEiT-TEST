import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { AlertCircle, Eye, EyeOff } from 'lucide-react'

const Login: React.FC = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(emailOrUsername, password)
      navigate('/dashboard')
    } catch (err) {
      setError('Failed to log in')
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Login to WYPEiT</h1>
      
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
            <AlertCircle className="mr-2" />
            <span>{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="emailOrUsername" className="block text-gray-700 font-semibold mb-2">Email or Username</label>
            <input
              type="text"
              id="emailOrUsername"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-primary-500 hover:text-primary-600">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login