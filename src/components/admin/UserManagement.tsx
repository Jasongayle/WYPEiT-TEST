import React, { useState, useEffect } from 'react'
import { User, Edit, Trash2, Lock, Unlock } from 'lucide-react'

interface UserData {
  id: string
  name: string
  email: string
  status: 'active' | 'suspended'
  subscriptionTier: string
  lastLogin: string
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Fetch users data
    // This is a mock implementation. Replace with actual API call.
    const mockUsers: UserData[] = [
      { id: '1', name: 'John Doe', email: 'john@example.com', status: 'active', subscriptionTier: 'Premium', lastLogin: '2023-06-01' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'suspended', subscriptionTier: 'Basic', lastLogin: '2023-05-28' },
      // Add more mock users...
    ]
    setUsers(mockUsers)
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEditUser = (userId: string) => {
    // Implement edit user logic
    console.log(`Editing user ${userId}`)
  }

  const handleDeleteUser = (userId: string) => {
    // Implement delete user logic
    console.log(`Deleting user ${userId}`)
  }

  const handleToggleUserStatus = (userId: string, currentStatus: 'active' | 'suspended') => {
    // Implement toggle user status logic
    console.log(`Toggling user ${userId} status from ${currentStatus}`)
  }

  const handleResetPassword = (userId: string) => {
    // Implement reset password logic
    console.log(`Resetting password for user ${userId}`)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscription</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.subscriptionTier}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditUser(user.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900 mr-2">
                    <Trash2 size={18} />
                  </button>
                  <button onClick={() => handleToggleUserStatus(user.id, user.status)} className="text-yellow-600 hover:text-yellow-900 mr-2">
                    {user.status === 'active' ? <Lock size={18} /> : <Unlock size={18} />}
                  </button>
                  <button onClick={() => handleResetPassword(user.id)} className="text-green-600 hover:text-green-900">
                    <User size={18} />
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

export default UserManagement