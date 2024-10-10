import React, { useState } from 'react'
import AdminOverview from '../components/admin/AdminOverview'
import UserManagement from '../components/admin/UserManagement'
import ErrorLogs from '../components/admin/ErrorLogs'
import SecurityLogs from '../components/admin/SecurityLogs'
import SystemHealth from '../components/admin/SystemHealth'
import AuditLogs from '../components/admin/AuditLogs'
import AdminTools from '../components/admin/AdminTools'
import AccountManagement from '../components/admin/AccountManagement'

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="mb-6">
        <button
          className={`mr-4 ${activeTab === 'overview' ? 'text-primary-600 font-bold' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`mr-4 ${activeTab === 'users' ? 'text-primary-600 font-bold' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          User Management
        </button>
        <button
          className={`mr-4 ${activeTab === 'accounts' ? 'text-primary-600 font-bold' : ''}`}
          onClick={() => setActiveTab('accounts')}
        >
          Account Management
        </button>
        <button
          className={`mr-4 ${activeTab === 'errors' ? 'text-primary-600 font-bold' : ''}`}
          onClick={() => setActiveTab('errors')}
        >
          Error Logs
        </button>
        <button
          className={`mr-4 ${activeTab === 'security' ? 'text-primary-600 font-bold' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          Security Logs
        </button>
        <button
          className={`mr-4 ${activeTab === 'system' ? 'text-primary-600 font-bold' : ''}`}
          onClick={() => setActiveTab('system')}
        >
          System Health
        </button>
        <button
          className={`mr-4 ${activeTab === 'audit' ? 'text-primary-600 font-bold' : ''}`}
          onClick={() => setActiveTab('audit')}
        >
          Audit Logs
        </button>
        <button
          className={`mr-4 ${activeTab === 'tools' ? 'text-primary-600 font-bold' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          Admin Tools
        </button>
      </div>

      {activeTab === 'overview' && <AdminOverview />}
      {activeTab === 'users' && <UserManagement />}
      {activeTab === 'accounts' && <AccountManagement />}
      {activeTab === 'errors' && <ErrorLogs />}
      {activeTab === 'security' && <SecurityLogs />}
      {activeTab === 'system' && <SystemHealth />}
      {activeTab === 'audit' && <AuditLogs />}
      {activeTab === 'tools' && <AdminTools />}
    </div>
  )
}

export default AdminDashboard