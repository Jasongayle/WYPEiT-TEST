import React from 'react'
import { Helmet } from 'react-helmet-async'

const TestHelmet: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Test Helmet</title>
      </Helmet>
      <h1>Test Helmet Component</h1>
    </div>
  )
}

export default TestHelmet