import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Highlights from './pages/Highlights'
import Project from './pages/Project'
import Resources from './pages/Resources'
import './styles/App.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    // Initialize GSAP and other animations
    document.body.classList.add('smooth-scroll', 'rounded-borders', 'hero-below-caption')
    document.body.setAttribute('data-primary-color', '#fa821d')
  }, [])

  return (
    <div className="App">
      <Preloader />
      <Cursor />
      <Header />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App