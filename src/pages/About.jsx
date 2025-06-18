import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'

const About = () => {
  const teamMembers = [
    { name: "Hannah Smith", role: "Co-Founder", image: "/images/team1.jpg", greeting: "Hello" },
    { name: "Lucas Martin", role: "Co-Founder", image: "/images/team2.jpg", greeting: "Bonjour" },
    { name: "Emma Müller", role: "Web Designer", image: "/images/team3.jpg", greeting: "Hallo" },
    { name: "Mark Spencer", role: "Web Developer", image: "/images/team4.jpg", greeting: "Salut" },
    { name: "Charlotte Dunn", role: "SEO Specialist", image: "/images/team5.jpg", greeting: "Holla" },
    { name: "John Doe", role: "Join our Team", image: "/images/team6.jpg", greeting: "Apply" }
  ]

  const awards = [
    { platform: "Awwwards", description: "Developer Award, Site of the Day, Honorable Mention", count: "x08 Awards" },
    { platform: "CSS Design Awards", description: "Website of the Day, Special Kudos", count: "x06 Awards" },
    { platform: "Behance", description: "Featured UX/UI and XD Design", count: "x04 Awards" },
    { platform: "CSS Light", description: "Featured Website, Featured Design", count: "x12 Awards" },
    { platform: "FWA Awards", description: "FWA of the day, FWA of the month", count: "x04 Awards" },
    { platform: "One Page Love", description: "Site of the Day", count: "x10 Awards" },
    { platform: "SiteInspire", description: "Featured Website", count: "x08 Awards" },
    { platform: "CSS Winner", description: "Site of the Day, Special Mention", count: "x12 Awards" }
  ]

  const services = ["branding", "web design", "motion", "development", "marketing"]

  return (
    <>
      <Helmet>
        <title>About - Bennet Creative Agency</title>
        <meta name="description" content="We are passionate about creating memorable experiences" />
      </Helmet>

      <motion.div 
        className="page-about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <Hero 
          title="studio"
          subtitle={["We are passionate about", "creating memorable experience"]}
          infoTextBefore="Creative"
          infoTextAfter="Agency"
          footerLeft="Scroll to Explore"
          footerRight="Our Short Story"
        />

        {/* Parallax Section */}
        <motion.section 
          className="parallax-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="parallax-image">
            <img src="/images/parallax.jpg" alt="Agency workspace" />
          </div>
          <div className="parallax-content">
            <ul className="parallax-list">
              <li>
                <div>We are Bennet</div>
                <div>Digital Studio Agency</div>
              </li>
              <li>
                <div>We bring ideas to life</div>
                <div>Your brand reimagined</div>
              </li>
              <li>
                <div>Design with purpose</div>
                <div>Solutions for businesses</div>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          className="team-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <div className="team-wrapper">
              <div className="team-captions">
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={index}
                    className="team-member"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    data-greeting={member.greeting}
                  >
                    <div className="member-name">
                      <span>{member.name.split(' ')[0]}</span>
                      <span>{member.name.split(' ')[1]}</span>
                    </div>
                    <div className="member-role">{member.role}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="team-images">
                {teamMembers.map((member, index) => (
                  <div key={`img-${index}`} className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          className="services-section dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <div className="services-content">
              <p className="services-intro">You need it? We do it</p>
              <ul className="services-list">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Awards Section */}
        <motion.section 
          className="awards-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <div className="awards-header">
              <p className="awards-subtitle">Recognition</p>
              <h2 className="awards-title">Awards Received</h2>
            </div>
            
            <div className="awards-list">
              {awards.map((award, index) => (
                <motion.div 
                  key={index}
                  className="award-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="award-platform">{award.platform}</span>
                  <span className="award-description">{award.description}</span>
                  <span className="award-count">{award.count}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  )
}

export default About