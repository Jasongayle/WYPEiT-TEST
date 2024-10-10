import React from 'react'
import { Shield } from 'lucide-react'

interface SecuritySettingsProps {
  platform: string
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({ platform }) => {
  // Mock data - in a real application, this would come from your backend
  const securitySettings = {
    twoFactorAuth: 'Enabled',
    lastPasswordChange: '30 days ago',
    loginAlerts: 'Enabled',
    securityQuestions: 'Set',
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Shield className="mr-2" /> Security Settings ({platform})
      </h3>
      <ul className="space-y-2">
        <li>Two-Factor Authentication: {securitySettings.twoFactorAuth}</li>
        <li>Last Password Change: {securitySettings.lastPasswordChange}</li>
        <li>Login Alerts: {securitySettings.loginAlerts}</li>
        <li>Security Questions: {securitySettings.securityQuestions}</li>
      </ul>
    </div>
  )
}

export default SecuritySettings