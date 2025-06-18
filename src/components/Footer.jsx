import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <button className="back-to-top" onClick={scrollToTop}>
          <div className="icon-wrap">
            <div className="button-icon">
              <i className="fa-solid fa-angle-up"></i>
            </div>
          </div>
          <div className="button-text">
            <span data-hover="Back Top">Back Top</span>
          </div>
        </button>

        <div className="footer-middle">
          <div className="copyright">
            2025 © <a href="https://www.clapat.com/" target="_blank" rel="noopener noreferrer">ClaPat</a>. All rights reserved.
          </div>
        </div>

        <div className="socials-wrap">
          <div className="socials-icon">
            <i className="fa-solid fa-share-nodes"></i>
          </div>
          <div className="socials-text">Follow Us</div>
          <ul className="socials">
            <li>
              <a href="https://www.dribbble.com/clapat" target="_blank" rel="noopener noreferrer">
                Db
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/clapatdesign" target="_blank" rel="noopener noreferrer">
                Tx
              </a>
            </li>
            <li>
              <a href="https://www.behance.com/clapat" target="_blank" rel="noopener noreferrer">
                Be
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/clapat.ro" target="_blank" rel="noopener noreferrer">
                Fb
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/clapat.themes/" target="_blank" rel="noopener noreferrer">
                In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer