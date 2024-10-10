import React, { useState, useEffect } from 'react'
import { User, UserPlus, Edit, Trash2, Shield, X, Copy, RefreshCw } from 'lucide-react'

interface Account {
  id: string
  username: string
  email: string
  role: 'admin' | 'user'
  createdAt: string
}

const AccountManagement: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [newAccount, setNewAccount] = useState({ username: '', email: '', password: '', role: 'user' })
  const [isCreating, setIsCreating] = useState(false)
  const [editingAccount, setEditingAccount] = useState<Account | null>(null)
  const [resetPassword, setResetPassword] = useState<{ accountId: string; password: string } | null>(null)

  useEffect(() => {
    fetchAccounts()
  }, [])

  const fetchAccounts = () => {
    // In a real application, this would be an API call
    // For now, we'll simulate it with mock data
    const mockAccounts: Account[] = [
      { id: '1', username: 'admin1', email: 'admin1@example.com', role: 'admin', createdAt: '2023-01-01' },
      { id: '2', username: 'user1', email: 'user1@example.com', role: 'user', createdAt: '2023-01-02' },
    ]
    setAccounts(mockAccounts)
  }

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault()
    const newAccountWithId: Account = {
      id: Date.now().toString(),
      username: newAccount.username,
      email: newAccount.email,
      role: newAccount.role as 'admin' | 'user',
      createdAt: new Date().toISOString().split('T')[0],
    }
    setAccounts(prevAccounts => [...prevAccounts, newAccountWithId])
    setNewAccount({ username: '', email: '', password: '', role: 'user' })
    setIsCreating(false)
  }

  const handleDeleteAccount = (id: string) => {
    setAccounts(prevAccounts => prevAccounts.filter(account => account.id !== id))
  }

  const handleEditAccount = (account: Account) => {
    setEditingAccount(account)
  }

  const handleUpdateAccount = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingAccount) {
      setAccounts(prevAccounts => 
        prevAccounts.map(account => 
          account.id === editingAccount.id ? editingAccount : account
        )
      )
      setEditingAccount(null)
    }
  }

  const generateComplexPassword = () => {
    const length = 16
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
    let password = ""
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return password
  }

  const handleResetPassword = (accountId: string) => {
    const newPassword = generateComplexPassword()
    setResetPassword({ accountId, password: newPassword })
    
    // Update the account's password in our simulated database
    setAccounts(prevAccounts => 
      prevAccounts.map(account => 
        account.id === accountId ? { ...account } : account
      )
    )
    
    // In a real application, you would make an API call to update the password on the server
    console.log(`Password for account ${accountId} has been reset to: ${newPassword}`)
  }

  const copyPasswordToClipboard = () => {
    if (resetPassword) {
      navigator.clipboard.writeText(resetPassword.password)
      alert('Password copied to clipboard!')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Management</h2>
      <button
        onClick={() => setIsCreating(true)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        <UserPlus className="inline-block mr-2" />
        Create New Account
      </button>

      {isCreating && (
        <div className="mb-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Create New Account</h3>
          <form onSubmit={handleCreateAccount}>
            <input
              type="text"
              placeholder="Username"
              value={newAccount.username}
              onChange={(e) => setNewAccount({ ...newAccount, username: e.target.value })}
              className="mb-2 w-full px-3 py-2 border rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newAccount.email}
              onChange={(e) => setNewAccount({ ...newAccount, email: e.target.value })}
              className="mb-2 w-full px-3 py-2 border rounded-md"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={newAccount.password}
              onChange={(e) => setNewAccount({ ...newAccount, password: e.target.value })}
              className="mb-2 w-full px-3 py-2 border rounded-md"
              required
            />
            <select
              value={newAccount.role}
              onChange={(e) => setNewAccount({ ...newAccount, role: e.target.value as 'admin' | 'user' })}
              className="mb-2 w-full px-3 py-2 border rounded-md"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
              Create Account
            </button>
          </form>
        </div>
      )}

      {editingAccount && (
        <div className="mb-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Edit Account</h3>
          <form onSubmit={handleUpdateAccount}>
            <input
              type="text"
              placeholder="Username"
              value={editingAccount.username}
              onChange={(e) => setEditingAccount({ ...editingAccount, username: e.target.value })}
              className="mb-2 w-full px-3 py-2 border rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={editingAccount.email}
              onChange={(e) => setEditingAccount({ ...editingAccount, email: e.target.value })}
              className="mb-2 w-full px-3 py-2 border rounded-md"
              required
            />
            <select
              value={editingAccount.role}
              onChange={(e) => setEditingAccount({ ...editingAccount, role: e.target.value as 'admin' | 'user' })}
              className="mb-2 w-full px-3 py-2 border rounded-md"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 mr-2">
              Update Account
            </button>
            <button type="button" onClick={() => setEditingAccount(null)} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300">
              Cancel
            </button>
          </form>
        </div>
      )}

      {resetPassword && (
        <div className="mb-4 p-4 bg-yellow-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Password Reset</h3>
          <p>New password for account {resetPassword.accountId}:</p>
          <div className="flex items-center mt-2">
            <input
              type="text"
              value={resetPassword.password}
              readOnly
              className="flex-grow px-3 py-2 border rounded-l-md bg-white"
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              <Copy size={18} />
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            The password has been automatically updated. Please securely communicate this password to the user. They should change it upon first login.
          </p>
          <button
            onClick={() => setResetPassword(null)}
            className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
          >
            Close
          </button>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {accounts.map((account) => (
              <tr key={account.id}>
                <td className="px-6 py-4 whitespace-nowrap">{account.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{account.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {account.role === 'admin' ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Admin
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      User
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{account.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditAccount(account)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleResetPassword(account.id)} className="text-yellow-600 hover:text-yellow-900 mr-2">
                    <RefreshCw size={18} />
                  </button>
                  <button onClick={() => handleDeleteAccount(account.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccountManagement