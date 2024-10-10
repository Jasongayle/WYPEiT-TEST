import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Free from './pages/Free'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import UserSettings from './pages/UserSettings'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'

const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 dark:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/free" element={<Free />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/settings" element={<PrivateRoute><UserSettings /></PrivateRoute>} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App