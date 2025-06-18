import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Son of a Tailor",
      category: "Branding",
      filter: "photo",
      year: "2025",
      image: "/images/01hero.jpg",
      thumb: "/images/01hero1.jpg"
    },
    {
      id: 2,
      title: "This is Willo",
      category: "Web Design",
      filter: "design",
      year: "2025",
      image: "/images/02hero.jpg",
      thumb: "/images/02hero1.jpg"
    },
    {
      id: 3,
      title: "The Infin",
      category: "Photography",
      filter: "photo",
      year: "2025",
      image: "/images/03hero.jpg",
      thumb: "/images/03hero1.jpg"
    },
    {
      id: 4,
      title: "The Invincibles",
      category: "Video Production",
      filter: "video",
      year: "2025",
      image: "/images/04hero.jpg",
      thumb: "/images/04hero.jpg",
      hasVideo: true
    },
    {
      id: 5,
      title: "Kivira Naturals",
      category: "Graphic Design",
      filter: "design",
      year: "2025",
      image: "/images/05hero.jpg",
      thumb: "/images/05hero1.jpg"
    },
    {
      id: 6,
      title: "Voxa Speaker",
      category: "Product Design",
      filter: "photo",
      year: "2025",
      image: "/images/06hero.jpg",
      thumb: "/images/06hero1.jpg"
    },
    {
      id: 7,
      title: "Nanotech Agency",
      category: "Graphic Design",
      filter: "design",
      year: "2025",
      image: "/images/07hero.jpg",
      thumb: "/images/07hero1.jpg"
    },
    {
      id: 8,
      title: "VX Lab",
      category: "Photography",
      filter: "photo",
      year: "2025",
      image: "/images/08hero.jpg",
      thumb: "/images/08hero.jpg"
    }
  ]

  const filters = [
    { key: 'all', label: 'all projects' },
    { key: 'design', label: 'design' },
    { key: 'video', label: 'video' },
    { key: 'photo', label: 'photo' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.filter === activeFilter)

  return (
    <>
      <Helmet>
        <title>Portfolio - Bennet Creative Agency</title>
        <meta name="description" content="Designing digital experiences that leave a lasting impression" />
      </Helmet>

      <motion.div 
        className="page-portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <Hero 
          title="projects"
          subtitle={["Designing digital experiences that", "leave a lasting impression"]}
          infoTextBefore="Designs"
          infoTextAfter="Portfolio"
          footerLeft="Scroll to Explore"
          footerRight="All Projects"
        />

        {/* Filters */}
        <motion.section 
          className="filters-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <ul className="filters">
              {filters.map((filter) => (
                <li key={filter.key}>
                  <button
                    className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter.key)}
                  >
                    <span>{filter.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Portfolio Grid */}
        <motion.section 
          className="portfolio-grid-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <div className="portfolio-grid">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="portfolio-item"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  layout
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
                      <div className="project-thumb">
                        <img src={project.thumb} alt={project.title} />
                      </div>
                    </div>
                    
                    <div className="project-caption">
                      <div className="project-title">{project.title}</div>
                      <div className="project-year">{project.year}</div>
                      <div className="project-category">{project.category}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  )
}

export default Portfolio