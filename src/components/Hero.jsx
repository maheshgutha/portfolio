import Waveform from './Waveform'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <img src="/profile/mahesh-photo.jpg" alt="Gutha Mahesh" className="hero-photo" />
      <div className="container hero-inner">
        <div className="eyebrow">live · AI voice agent "Sara" · full-stack</div>
        <h1 className="hero-title">
          Gutha Mahesh <span className="dim">builds systems that talk back.</span>
        </h1>
        <p className="hero-sub">
          Full-Stack Software Engineer with hands-on experience building an
          AI-integrated voice calling platform and production MERN-stack
          applications — comfortable across backend architecture, REST API
          design, authentication, and cloud deployment.
        </p>

        <Waveform />

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View projects</a>
          <a className="btn btn-ghost" href="/resume.pdf" download>
            Download résumé
          </a>
        </div>

        <div className="hero-meta">
          <a href="https://github.com/maheshgutha" target="_blank" rel="noreferrer">GitHub</a>
          <span className="sep">/</span>
          <a href="https://www.linkedin.com/in/gutha-mahesh-chowdary-0439912b5/" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="sep">/</span>
          <a href="mailto:maheshchoudare21@gmail.com">Email</a>
        </div>
      </div>
    </section>
  )
}