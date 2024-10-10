import React from 'react'
import { Shield, Trash2, Users } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About WYPEit.com</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At WYPEit.com, we believe in empowering individuals to take control of their digital footprint. 
          Our mission is to provide a comprehensive solution for managing and protecting your online presence, 
          allowing you to secure your future by addressing potential risks from your past social media activity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="w-12 h-12 text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
          <p>We prioritize your privacy and data security in everything we do.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Trash2 className="w-12 h-12 text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Efficient Cleanup</h3>
          <p>Our advanced algorithms ensure thorough and efficient content analysis and removal.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="w-12 h-12 text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
          <p>We design our services with the user in mind, ensuring a smooth and intuitive experience.</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Connect your social media accounts securely to our platform.</li>
          <li>Our AI-powered system analyzes your content for potential risks.</li>
          <li>Review the identified content and choose what to keep or remove.</li>
          <li>Optionally, backup your data before making any changes.</li>
          <li>We securely delete the selected content from your accounts.</li>
        </ol>
      </div>
    </div>
  )
}

export default About