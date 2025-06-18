import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Preloader = () => {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="preloader-content">
        <div className="percentage-wrapper">
          <div className="percentage">
            <span className="number">{Math.floor(progress)}</span>
          </div>
          <div className="percentage-text">
            <span>Loading...</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Preloader