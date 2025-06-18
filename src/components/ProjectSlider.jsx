import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const ProjectSlider = () => {
  const sliderRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Son of a Tailor",
      category: "Brand Identity",
      image: "/images/01hero.jpg",
      thumb: "/images/01hero1.jpg"
    },
    {
      id: 2,
      title: "Stena Air",
      category: "Graphic Design",
      image: "/images/02hero.jpg",
      thumb: "/images/02hero1.jpg"
    },
    {
      id: 3,
      title: "Lounge Chair",
      category: "Photography",
      image: "/images/03hero.jpg",
      thumb: "/images/03hero1.jpg"
    },
    {
      id: 4,
      title: "Invincibles",
      category: "Video",
      image: "/images/04hero.jpg",
      thumb: "/images/04hero.jpg",
      hasVideo: true
    }
  ]

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    // Initialize slider animations
    const slides = slider.querySelectorAll('.project-slide')
    
    gsap.set(slides, { opacity: 0, scale: 0.8 })
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          })
        }
      })
    })

    slides.forEach(slide => observer.observe(slide))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sliderRef} className="project-slider">
      <div className="slider-container">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-slide"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link to={`/project/${project.id}`} className="project-link">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                {project.hasVideo && (
                  <div className="video-overlay">
                    <video loop muted playsInline>
                      <source src="/images/04hero.mp4" type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <div className="project-counter">
                  {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="slider-thumbs">
        {projects.map((project, index) => (
          <div key={`thumb-${project.id}`} className="slider-thumb">
            <img src={project.thumb} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectSlider