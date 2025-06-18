import React, { useEffect, useRef } from 'react'

const Cursor = () => {
  const cursorRef = useRef(null)
  const ballRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ball = ballRef.current
    
    if (!cursor || !ball) return

    let mouseX = 0
    let mouseY = 0
    let ballX = 0
    let ballY = 0

    const updateCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      const speed = 0.15
      ballX += (mouseX - ballX) * speed
      ballY += (mouseY - ballY) * speed
      
      ball.style.transform = `translate(${ballX - 15}px, ${ballY - 15}px)`
      
      requestAnimationFrame(animateCursor)
    }

    const handleMouseEnter = () => {
      cursor.classList.add('cursor-hover')
    }

    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-hover')
    }

    // Add event listeners
    document.addEventListener('mousemove', updateCursor)
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .link')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // Start animation
    animateCursor()

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div ref={cursorRef} className="magic-cursor">
      <div ref={ballRef} className="cursor-ball"></div>
    </div>
  )
}

export default Cursor