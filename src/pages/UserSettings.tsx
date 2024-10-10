import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'
import TwoFactorAuth from '../components/TwoFactorAuth'

const UserSettings: React.FC = () => {
  // ... (keep existing code)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">User Settings</h1>
      
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Change Password</h2>
        {/* ... (keep existing password change form) */}
      </div>

      <div className="max-w-md mx-auto">
        <TwoFactorAuth />
      </div>
    </div>
  )
}

export default UserSettings