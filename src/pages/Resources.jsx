import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources - Bennet Creative Agency</title>
        <meta name="description" content="Resources and tools for creative professionals" />
      </Helmet>

      <motion.div 
        className="page-resources"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>Resources</h1>
          <p>Resources and tools coming soon...</p>
        </div>
      </motion.div>
    </>
  )
}

export default Resources