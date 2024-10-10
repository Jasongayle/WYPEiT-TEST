import React from 'react'
import { Link } from 'react-router-dom'
import WYPEiTLogo from './WYPEiTLogo'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <WYPEiTLogo className="mb-4" />
            <p className="text-sm">Protecting your online presence and securing your digital future.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-primary-400">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary-400">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-primary-400">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} WYPEiT.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer