import React, { useState, useEffect } from 'react'
import { Trash2 } from 'lucide-react'

interface UnansweredQuestion {
  id: string
  question: string
  timestamp: Date
}

const UnansweredQuestions: React.FC = () => {
  const [questions, setQuestions] = useState<UnansweredQuestion[]>([])

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('unansweredQuestions') || '[]')
    setQuestions(storedQuestions)
  }, [])

  const handleDelete = (id: string) => {
    const updatedQuestions = questions.filter(q => q.id !== id)
    setQuestions(updatedQuestions)
    localStorage.setItem('unansweredQuestions', JSON.stringify(updatedQuestions))
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Unanswered Questions</h2>
      {questions.length === 0 ? (
        <p>No unanswered questions at the moment.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((q) => (
            <li key={q.id} className="border-b pb-4">
              <p className="font-semibold">{q.question}</p>
              <p className="text-sm text-gray-500">
                {new Date(q.timestamp).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(q.id)}
                className="mt-2 text-red-600 hover:text-red-800"
              >
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UnansweredQuestions