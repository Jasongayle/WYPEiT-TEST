import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: string
  email: string
  username?: string
  isAdmin: boolean
  twoFactorEnabled?: boolean
}

interface AuthContextType {
  user: User | null
  login: (emailOrUsername: string, password: string) => Promise<void>
  signup: (email: string, username: string, password: string) => Promise<void>
  adminLogin: (username: string, password: string) => Promise<void>
  logout: () => void
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>
  resetPassword: (emailOrUsername: string) => Promise<void>
  enable2FA: () => Promise<void>
  disable2FA: () => Promise<void>
  verify2FA: (code: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (emailOrUsername: string, password: string) => {
    // TODO: Implement actual login logic
    console.log(`Logging in with ${emailOrUsername} and password`)
    setUser({ id: '1', email: emailOrUsername, username: emailOrUsername.split('@')[0], isAdmin: false })
  }

  const signup = async (email: string, username: string, password: string) => {
    // TODO: Implement actual signup logic
    console.log(`Signing up with email: ${email}, username: ${username}, and password`)
    setUser({ id: '1', email, username, isAdmin: false })
  }

  const adminLogin = async (username: string, password: string) => {
    // TODO: Implement actual admin login logic
    console.log(`Admin logging in with username: ${username} and password`)
    setUser({ id: '1', email: `${username}@admin.com`, username, isAdmin: true })
  }

  const logout = () => {
    // TODO: Implement actual logout logic
    console.log('Logging out')
    setUser(null)
  }

  const changePassword = async (currentPassword: string, newPassword: string) => {
    // TODO: Implement actual password change logic
    console.log(`Changing password from ${currentPassword} to ${newPassword}`)
  }

  const resetPassword = async (emailOrUsername: string) => {
    // TODO: Implement actual password reset logic
    console.log(`Resetting password for ${emailOrUsername}`)
  }

  const enable2FA = async () => {
    if (user) {
      setUser({ ...user, twoFactorEnabled: true })
      console.log(`2FA enabled for user ${user.email}`)
    } else {
      throw new Error('No user logged in')
    }
  }

  const disable2FA = async () => {
    if (user) {
      setUser({ ...user, twoFactorEnabled: false })
      console.log(`2FA disabled for user ${user.email}`)
    } else {
      throw new Error('No user logged in')
    }
  }

  const verify2FA = async (code: string) => {
    if (user) {
      console.log(`Verifying 2FA code for user ${user.email}: ${code}`)
      if (code.trim() === '') {
        throw new Error('Invalid verification code')
      }
    } else {
      throw new Error('No user logged in')
    }
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      adminLogin, 
      logout, 
      changePassword, 
      resetPassword,
      enable2FA,
      disable2FA,
      verify2FA
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}