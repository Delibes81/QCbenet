import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Hero = ({ 
  title, 
  subtitle, 
  infoTextBefore, 
  infoTextAfter, 
  footerLeft, 
  footerRight,
  backgroundImage 
}) => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const titleElement = titleRef.current

    if (!hero || !titleElement) return

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // GSAP animations
    const tl = gsap.timeline({ delay: 1 })
    
    tl.fromTo(titleElement, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )

    // Add scroll-triggered animations
    
    return () => {
      tl.kill()
    }
  }, [])

  const titleVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 1.2,
        ease: "easeOut"
      }
    }
  }

  const subtitleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 1.6,
        ease: "easeOut"
      }
    }
  }

  const footerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={heroRef} className="hero">
      {backgroundImage && (
        <div className="hero-background">
          <img src={backgroundImage} alt="" />
        </div>
      )}
      
      <div className="hero-content">
        <div className="hero-caption">
          <motion.h1 
            ref={titleRef}
            className="hero-title"
            variants={titleVariants}
            initial="initial"
            animate="animate"
            data-info-before={infoTextBefore}
            data-info-after={infoTextAfter}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.div 
              className="hero-subtitle"
              variants={subtitleVariants}
              initial="initial"
              animate="animate"
            >
              {Array.isArray(subtitle) ? (
                subtitle.map((line, index) => (
                  <div key={index}>
                    <span className={index === 1 ? 'secondary-font' : ''}>{line}</span>
                  </div>
                ))
              ) : (
                <div><span>{subtitle}</span></div>
              )}
            </motion.div>
          )}
        </div>

        {(footerLeft || footerRight) && (
          <motion.div 
            className="hero-footer"
            variants={footerVariants}
            initial="initial"
            animate="animate"
          >
            {footerLeft && (
              <div className="hero-footer-left">
                <button className="scroll-down-btn">
                  <div className="button-icon">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                  <div className="button-text">
                    <span>{footerLeft}</span>
                  </div>
                </button>
              </div>
            )}
            
            {footerRight && (
              <div className="hero-footer-right">
                <div className="info-text">
                  <span>{footerRight}</span>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero