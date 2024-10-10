import React from 'react'

interface WYPEiTLogoProps {
  className?: string
}

const WYPEiTLogo: React.FC<WYPEiTLogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold text-primary-500 dark:text-primary-400">WYPEiT</span>
    </div>
  )
}

export default WYPEiTLogo