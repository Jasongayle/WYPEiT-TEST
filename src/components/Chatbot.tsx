import React, { useState, useRef, useEffect } from 'react'
import { Send, X } from 'lucide-react'

interface Message {
  text: string
  isUser: boolean
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const simulateGeminiResponse = async (question: string): Promise<string> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

    // Simple context handling
    const lowercaseQuestion = question.toLowerCase()
    if (lowercaseQuestion.includes('how are you')) {
      return "I'm doing well, thank you for asking! As an AI assistant for WYPEiT, I'm always ready to help with questions about online privacy and digital security. How can I assist you today?"
    } else if (lowercaseQuestion.includes('hello') || lowercaseQuestion.includes('hi')) {
      return "Hello! Welcome to WYPEiT's chat support. I'm here to help you with any questions about managing your online presence or our services. What would you like to know?"
    } else if (lowercaseQuestion.includes('privacy') || lowercaseQuestion.includes('security')) {
      return "Privacy and security are core focuses at WYPEiT. We offer tools to help you manage your digital footprint across various social media platforms. Would you like to know more about our specific features for enhancing your online privacy?"
    } else if (lowercaseQuestion.includes('social media')) {
      return "WYPEiT specializes in helping users manage their social media presence. We can assist with identifying potentially sensitive content, managing privacy settings, and even help with account deletion if needed. What specific aspect of social media management are you interested in?"
    } else {
      return `Thank you for your question about "${question}". At WYPEiT, we're committed to helping users protect their online presence. While I don't have specific information about that query, I'd be happy to explain how our services might help address your concerns about online privacy and security. Would you like to know more about our features?`
    }
  }

  const handleSend = async () => {
    if (input.trim() === '') return

    const userMessage: Message = { text: input, isUser: true }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      const response = await simulateGeminiResponse(input)
      const botMessage: Message = { text: response, isUser: false }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error fetching response:', error)
      const errorMessage: Message = { text: "I apologize, but I'm having trouble processing your request at the moment. Please try again or reach out to our support team at support@wypeit.com for further assistance.", isUser: false }
      setMessages(prev => [...prev, errorMessage])
    }

    setIsTyping(false)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col h-96">
          <div className="bg-primary-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">WYPEiT Chat</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-800'}`}>
                  {message.text}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="text-left">
                <span className="inline-block p-2 rounded-lg bg-gray-100 text-gray-800">
                  Typing...
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleSend}
                className="bg-primary-500 text-white px-4 py-2 rounded-r-md hover:bg-primary-600 transition duration-300"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-500 text-white p-4 rounded-full shadow-lg hover:bg-primary-600 transition duration-300"
        >
          Chat with us
        </button>
      )}
    </div>
  )
}

export default Chatbot