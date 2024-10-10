import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import WYPEiTLogo from './WYPEiTLogo'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  const publicLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/free", label: "Free Tools" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <WYPEiTLogo className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            {user ? (
              // Private header for logged-in users
              <>
                <Link to="/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">Dashboard</Link>
                <div className="relative group">
                  <button className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none">
                    My Account
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile Settings</Link>
                    <Link to="/help" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Help/Support</Link>
                  </div>
                </div>
                <button onClick={handleLogout} className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">Logout</button>
              </>
            ) : (
              // Public header for non-logged-in users
              <>
                {publicLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
                    {link.label}
                  </Link>
                ))}
              </>
            )}
            <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>
      <div 
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none">
            <X className="h-6 w-6" />
          </button>
          <div className="mt-8 space-y-4">
            {user ? (
              // Private mobile menu for logged-in users
              <>
                <Link to="/dashboard" className="block py-2 text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400" onClick={toggleMenu}>Dashboard</Link>
                <Link to="/profile" className="block py-2 text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400" onClick={toggleMenu}>Profile Settings</Link>
                <Link to="/help" className="block py-2 text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400" onClick={toggleMenu}>Help/Support</Link>
                <button onClick={handleLogout} className="block w-full text-left py-2 text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">Logout</button>
              </>
            ) : (
              // Public mobile menu for non-logged-in users
              <>
                {publicLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="block py-2 text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400" onClick={toggleMenu}>
                    {link.label}
                  </Link>
                ))}
              </>
            )}
            <button onClick={() => { toggleTheme(); toggleMenu(); }} className="flex items-center py-2 text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
              {theme === 'dark' ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header