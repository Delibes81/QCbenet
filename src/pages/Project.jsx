import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Project = () => {
  const { id } = useParams()

  // Mock project data - in a real app, you'd fetch this based on the ID
  const project = {
    id: id,
    title: "Son of a Tailor",
    subtitle: "Showcasing creativity through outstanding project design",
    category: "Brand Identity",
    year: "2025",
    images: [
      "/images/projects/son01.jpg",
      "/images/projects/son02.jpg"
    ]
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Bennet Creative Agency</title>
        <meta name="description" content={project.subtitle} />
      </Helmet>

      <motion.div 
        className="page-project"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
          <p>Category: {project.category}</p>
          <p>Year: {project.year}</p>
          
          <div className="project-images">
            {project.images.map((image, index) => (
              <img key={index} src={image} alt={`${project.title} ${index + 1}`} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Project