import { useState } from 'react'
import Lightbox from './Lightbox'
import './Gallery.css'

// ---------------------------------------------------------------------------
// EDIT ME: hackathon, college, and portrait photos. Files live in
// public/gallery/. Robotics build photos have their own section — see
// Robotics.jsx.
// ---------------------------------------------------------------------------
const photos = [
  { src: '/gallery/gallery-hackathon-1.jpg', caption: 'TechXelerate 2026 — National Level Hackathon, LBRCE' },
  { src: '/gallery/gallery-hackathon-2.jpg', caption: 'TechXelerate 2026 — Certificate handover' },
  { src: '/gallery/gallery-lbrc-1.jpg', caption: 'TechXelerate 2026 — team presenting the sign-language build' },
  { src: '/gallery/gallery-lbrc-2.jpg', caption: 'TechXelerate 2026 — reviewing the robotic hand demo' },
  { src: '/gallery/gallery-lbrc-3.jpg', caption: 'TechXelerate 2026 — with faculty judges' },
  { src: '/gallery/gallery-smarttech.jpg', caption: 'Smart Tech Hackathon 2026 — ALIET, Web/AI/Cyber Security' },
  { src: '/gallery/gallery-minister-visit.jpg', caption: 'Presenting the AI-powered robotic hand at Innovation Fair 2026' },
  { src: '/gallery/gallery-college-team.jpg', caption: 'With the ALIET CSE team and faculty' },
  { src: '/gallery/portrait-4.jpg', caption: 'Gutha Mahesh' },
  { src: '/gallery/portrait-mahi.jpg', caption: 'Gutha Mahesh' },
  { src: '/gallery/portrait-pass.jpg', caption: 'Gutha Mahesh' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)
  const doubled = [...photos, ...photos]

  return (
    <section id="gallery">
      <div className="container">
        <div className="eyebrow">along the way</div>
        <h2 className="section-title">Hackathons, and the people behind them.</h2>
      </div>

      <div className="gallery-strip reveal">
        <div className="gallery-track">
          {doubled.map((p, i) => (
            <button className="gallery-card" key={i} onClick={() => setActive(p)} aria-label={p.caption}>
              <img src={p.src} alt={p.caption} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <Lightbox src={active.src} caption={active.caption} onClose={() => setActive(null)} />
      )}
    </section>
  )
}