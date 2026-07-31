import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Robotics from './components/Robotics'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import useReveal from './useReveal'

export default function App() {
  const scopeRef = useReveal()

  return (
    <div id="top" ref={scopeRef}>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Gallery />
      <Robotics />
      <Certifications />
      <Contact />
    </div>
  )
}