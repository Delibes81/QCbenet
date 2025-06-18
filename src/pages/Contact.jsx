import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    verify: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Helmet>
        <title>Contact - Bennet Creative Agency</title>
        <meta name="description" content="Don't let your vision wait. Let's bring it to life" />
      </Helmet>

      <motion.div 
        className="page-contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <Hero 
          title="contact"
          subtitle={["Don't let your vision wait", "Let's bring it to life"]}
          infoTextBefore="Reach Out"
          infoTextAfter="Say Hello"
          footerLeft="Scroll to Explore"
          footerRight="office@bennet.com"
        />

        {/* Map Section */}
        <motion.section 
          className="map-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="map-container">
            <div className="map-placeholder">
              {/* You can integrate Google Maps or another map service here */}
              <div className="map-overlay">
                <p>Interactive Map</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section 
          className="contact-form-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <h2 className="section-title">Let's Talk</h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="What's Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell Us About Your Project"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <div className="form-group verify-group">
                <div className="verify-sum">
                  <span>1</span>
                  <span>+</span>
                  <span>3</span>
                  <span>=</span>
                </div>
                <input
                  type="text"
                  name="verify"
                  placeholder="?"
                  value={formData.verify}
                  onChange={handleInputChange}
                  required
                />
                <p className="verify-note">* Captcha Validation</p>
              </div>
              
              <motion.button 
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Mail
              </motion.button>
            </form>
          </div>
        </motion.section>

        {/* Contact Info Section */}
        <motion.section 
          className="contact-info-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <div className="contact-info-grid">
              <motion.div 
                className="contact-info-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="contact-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact-content">
                  <h6>35 M Str, New York, USA</h6>
                  <p>Address</p>
                </div>
              </motion.div>
              
              <div className="contact-divider">
                <p>. . .</p>
              </div>
              
              <motion.div 
                className="contact-info-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="contact-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact-content">
                  <h6>0040 (7763) 574-8901</h6>
                  <p>Phone</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="contact-cta"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p>Ready to work together?</p>
              <a href="mailto:office@bennet.com" className="email-link">
                office@bennet.com
              </a>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  )
}

export default Contact