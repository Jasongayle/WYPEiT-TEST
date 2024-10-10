import React, { useState, useEffect } from 'react'
import { Loader, Search, DollarSign } from 'lucide-react'

interface Payment {
  id: number
  userId: number
  amount: number
  date: string
  status: 'completed' | 'pending' | 'failed'
}

const AdminPayments: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Simulating API call to fetch payments
    setTimeout(() => {
      const mockPayments: Payment[] = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        userId: Math.floor(Math.random() * 100) + 1,
        amount: Math.floor(Math.random() * 100) + 10,
        date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
        status: ['completed', 'pending', 'failed'][Math.floor(Math.random() * 3)] as 'completed' | 'pending' | 'failed'
      }))
      setPayments(mockPayments)
      setIsLoading(false)
    }, 1000)
  }, [])

  const filteredPayments = payments.filter(payment => 
    payment.userId.toString().includes(searchTerm) ||
    payment.amount.toString().includes(searchTerm) ||
    payment.date.includes(searchTerm) ||
    payment.status.includes(searchTerm)
  )

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="w-8 h-8 text-purple-600 animate-spin" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">View Payments</h1>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search payments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPayments.map(payment => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{payment.userId}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1 text-green-500" />
                    {payment.amount.toFixed(2)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    payment.status === 'completed' ? 'bg-green-100 text-green-800' : 
                    payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPayments