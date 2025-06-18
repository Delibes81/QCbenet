import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Highlights = () => {
  return (
    <>
      <Helmet>
        <title>Highlights - Bennet Creative Agency</title>
        <meta name="description" content="Featured projects and creative highlights" />
      </Helmet>

      <motion.div 
        className="page-highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>Highlights</h1>
          <p>Featured projects and creative highlights coming soon...</p>
        </div>
      </motion.div>
    </>
  )
}

export default Highlights