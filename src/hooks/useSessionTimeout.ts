import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const TIMEOUT_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

export const useSessionTimeout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const timeoutRef = useRef<number | null>(null)

  // ... rest of the hook code ...
}