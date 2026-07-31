import { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">GM<span>.</span></a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Stack</a>
          <a href="#experience">Experience</a>
          <a href="#gallery">Gallery</a>
          <a href="#robotics">Robotics</a>
          <a href="#certifications">Certs</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}