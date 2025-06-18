import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import ProjectSlider from '../components/ProjectSlider'

const Home = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Bennet - Creative Digital Agency</title>
        <meta name="description" content="Bringing brands to life through creative web solutions" />
      </Helmet>

      <motion.div 
        className="page-home"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Hero Section */}
        <Hero 
          title="bennet"
          subtitle={["Bringing brands to life through", "creative web solutions"]}
          infoTextBefore="Welcome"
          infoTextAfter="Est. 2025"
          footerLeft="Scroll to Explore"
          footerRight="Featured Projects"
        />

        {/* Hero Interaction Images */}
        <div className="hero-interaction">
          <div className="hero-column col-left">
            <motion.div 
              className="col-img-wrapper small-img"
              variants={fadeInUp}
            >
              <img src="/images/01hero1.jpg" alt="Project thumbnail" />
            </motion.div>
            <motion.div 
              className="col-img-wrapper large-img"
              variants={fadeInUp}
            >
              <img src="/images/01hero.jpg" alt="Featured project" />
            </motion.div>
          </div>
          <div className="hero-column col-right">
            <motion.div 
              className="col-img-wrapper large-img"
              variants={fadeInUp}
            >
              <img src="/images/02hero.jpg" alt="Featured project" />
            </motion.div>
            <motion.div 
              className="col-img-wrapper small-img"
              variants={fadeInUp}
            >
              <img src="/images/02hero1.jpg" alt="Project thumbnail" />
            </motion.div>
          </div>
        </div>

        {/* Introduction Section */}
        <motion.section 
          className="intro-section"
          variants={fadeInUp}
        >
          <div className="container">
            <div className="intro-content">
              <h2 className="intro-title">
                We're{' '}
                <span className="text-rotator">
                  <span>creative</span>
                  <span>visionary</span>
                  <span>digital</span>
                </span>{' '}
                agency
              </h2>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          className="about-section"
          variants={fadeInUp}
        >
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <div className="video-wrapper">
                  <video 
                    ref={videoRef}
                    loop 
                    muted 
                    playsInline
                    className="intro-video"
                  >
                    <source src="/images/intro.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <p className="about-text">
                  Crafting exceptional websites tailored to your vision, we blend creativity 
                  with functionality to deliver stunning digital experiences.
                </p>

                <Link to="/about" className="button-link">
                  <div className="button-icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <span>Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Featured Projects Slider */}
        <motion.section 
          className="projects-section"
          variants={fadeInUp}
        >
          <ProjectSlider />
        </motion.section>

        {/* Services Section */}
        <motion.section 
          className="services-section"
          variants={fadeInUp}
        >
          <div className="container">
            <div className="services-content">
              <p className="services-intro">You need it? We do it</p>
              <ul className="services-list">
                <li>branding</li>
                <li>web design</li>
                <li>motion</li>
                <li>development</li>
                <li>marketing</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="cta-section"
          variants={fadeInUp}
        >
          <div className="container">
            <Link to="/portfolio" className="cta-button">
              <span>All Projects</span>
            </Link>
          </div>
        </motion.section>

        {/* Contact Info */}
        <motion.section 
          className="contact-info-section"
          variants={fadeInUp}
        >
          <div className="container">
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact-content">
                  <h6>35 M Str, New York, USA</h6>
                  <p>Address</p>
                </div>
              </div>
              
              <div className="contact-divider">
                <p>. . .</p>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact-content">
                  <h6>0040 (7763) 574-8901</h6>
                  <p>Phone</p>
                </div>
              </div>
            </div>
            
            <div className="contact-cta">
              <p>Ready to work together?</p>
              <a href="mailto:office@bennet.com" className="email-link">
                office@bennet.com
              </a>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  )
}

export default Home