import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Bennet Logo" className="logo-dark" />
            <img src="/images/logo-white.png" alt="Bennet Logo" className="logo-light" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                <span data-hover="Index">Index</span>
              </Link>
            </li>
            <li className="has-dropdown">
              <span className={location.pathname.includes('/portfolio') || location.pathname.includes('/highlights') ? 'active' : ''}>
                <span data-hover="Projects">Projects</span>
              </span>
              <ul className="dropdown">
                <li>
                  <Link 
                    to="/highlights"
                    className={isActive('/highlights') ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Highlights
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio"
                    className={isActive('/portfolio') ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                <span data-hover="Agency">Agency</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/resources" 
                className={isActive('/resources') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                <span data-hover="Resources">Resources</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Header Button */}
        <Link to="/contact" className="header-button">
          <div className="button-icon-link">
            <div className="icon-wrap">
              <div className="button-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="button-text">
              <span data-hover="Let's Talk">Let's Talk</span>
            </div>
          </div>
        </Link>

        {/* Menu Burger */}
        <button 
          className={`menu-burger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.header>
  )
}

export default Header