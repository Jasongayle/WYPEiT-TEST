import React, { useState, useEffect } from 'react'
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react'

interface SupportTicket {
  id: string
  subject: string
  user: string
  status: 'open' | 'in-progress' | 'closed'
  timestamp: string
  message: string
}

const SupportTickets: React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [expandedTicket, setExpandedTicket] = useState<string | null>(null)

  useEffect(() => {
    // Fetch support tickets
    // This is a mock implementation. Replace with actual API call.
    const mockTickets: SupportTicket[] = [
      { id: '1', subject: 'Account Access Issue', user: 'john@example.com', status: 'open', timestamp: '2023-06-01 09:00:00', message: 'I cannot log into my account. Please help.' },
      { id: '2', subject: 'Billing Question', user: 'jane@example.com', status: 'in-progress', timestamp: '2023-06-01 10:30:00', message: 'I have a question about my recent invoice.' },
      // Add more mock tickets...
    ]
    setTickets(mockTickets)
  }, [])

  const toggleTicketDetails = (ticketId: string) => {
    setExpandedTicket(expandedTicket === ticketId ? null : ticketId)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-yellow-100 text-yellow-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'closed':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Support Tickets</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border-b border-gray-200 last:border-b-0">
            <div 
              className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
              onClick={() => toggleTicketDetails(ticket.id)}
            >
              <div className="flex items-center">
                <MessageSquare className="mr-2 text-gray-500" />
                <span className="font-medium">{ticket.subject}</span>
              </div>
              <div className="flex items-center">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(ticket.status)} mr-2`}>
                  {ticket.status}
                </span>
                <span className="text-sm text-gray-500 mr-4">{ticket.timestamp}</span>
                {expandedTicket === ticket.id ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            {expandedTicket === ticket.id && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-sm text-gray-700"><strong>User:</strong> {ticket.user}</p>
                <p className="text-sm text-gray-700 mt-2"><strong>Message:</strong> {ticket.message}</p>
                <div className="mt-4">
                  <button className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition duration-300">
                    Respond to Ticket
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SupportTickets