import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { AlertCircle, CheckCircle, Mail } from 'lucide-react'

const TwoFactorAuth: React.FC = () => {
  const { user, enable2FA, disable2FA, verify2FA } = useAuth()
  const [isEnabled, setIsEnabled] = useState(user?.twoFactorEnabled || false)
  const [verificationCode, setVerificationCode] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleEnable2FA = async () => {
    try {
      await enable2FA()
      setIsEnabled(true)
      setSuccess('2FA has been enabled. Please check your email for the verification code.')
    } catch (err) {
      setError('Failed to enable 2FA. Please try again.')
    }
  }

  const handleDisable2FA = async () => {
    try {
      await disable2FA()
      setIsEnabled(false)
      setSuccess('2FA has been disabled.')
    } catch (err) {
      setError('Failed to disable 2FA. Please try again.')
    }
  }

  const handleVerify2FA = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await verify2FA(verificationCode)
      setSuccess('2FA has been successfully verified.')
      setVerificationCode('')
    } catch (err) {
      setError('Invalid verification code. Please try again.')
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Two-Factor Authentication</h2>
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
          <AlertCircle className="mr-2" />
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
          <CheckCircle className="mr-2" />
          <span>{success}</span>
        </div>
      )}
      <div className="mb-4">
        <p className="mb-2">
          {isEnabled
            ? '2FA is currently enabled for your account.'
            : '2FA is currently disabled for your account.'}
        </p>
        {isEnabled ? (
          <button
            onClick={handleDisable2FA}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Disable 2FA
          </button>
        ) : (
          <button
            onClick={handleEnable2FA}
            className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition duration-300"
          >
            Enable 2FA
          </button>
        )}
      </div>
      {isEnabled && (
        <form onSubmit={handleVerify2FA} className="mt-6">
          <div className="mb-4">
            <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
              Verification Code
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="verificationCode"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition duration-300"
          >
            Verify 2FA
          </button>
        </form>
      )}
    </div>
  )
}

export default TwoFactorAuth