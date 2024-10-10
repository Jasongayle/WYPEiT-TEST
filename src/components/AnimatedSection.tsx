import React, { useEffect, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  )
}

export default AnimatedSection