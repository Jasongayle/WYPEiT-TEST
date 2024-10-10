import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, FileText, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import NewsletterSubscription from '../components/NewsletterSubscription'
import Chatbot from '../components/Chatbot'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <AnimatedSection>
        <section className="text-center mb-12 md:mb-16">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Wipe your Past, Secure your Future
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Protect your online presence with WYPEiT.com
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="/free"
              className="w-full sm:w-auto bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition duration-300 flex items-center justify-center"
            >
              Try Our Free Tools
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Shield className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Protect Your Reputation</h3>
            <p className="text-gray-600 dark:text-gray-300">Identify and assess potentially harmful content from your social media accounts.</p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FileText className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Account Management Guide</h3>
            <p className="text-gray-600 dark:text-gray-300">Get expert guidance on how to manage, clean up, or delete your social media accounts safely.</p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Multiple Platforms</h3>
            <p className="text-gray-600 dark:text-gray-300">Support for all major social media platforms to help you manage your online presence effectively.</p>
          </motion.div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <NewsletterSubscription />
      </AnimatedSection>

      <AnimatedSection>
        <section className="text-center mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">Ready to take control of your online presence?</h2>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/free"
              className="w-full sm:w-auto bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition duration-300 flex items-center justify-center"
            >
              Try Our Free Tools
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </section>
      </AnimatedSection>

      <Chatbot />
    </div>
  )
}

export default Home