import { useState } from 'react'
import Lightbox from './Lightbox'
import './Robotics.css'

// ---------------------------------------------------------------------------
// EDIT ME: robotic-hand build/breadboard photos. Files live in
// public/robotics/ and public/gallery/.
// ---------------------------------------------------------------------------
const photos = [
  { src: '/robotics/robotics-breadboard-3.jpg', caption: 'Camera module + GPS antenna setup' },
  { src: '/robotics/robotics-breadboard-4.jpg', caption: 'Full sensor rig — top view' },
  { src: '/robotics/robotics-breadboard-5.jpg', caption: 'Circuit wiring detail' },
  { src: '/robotics/robotics-demo-1.jpg', caption: 'Robotic hand demo at hackathon floor' },
  { src: '/robotics/robotics-demo-2.jpg', caption: 'Coding the drowsiness detection system' },
]

export default function Robotics() {
  const [active, setActive] = useState(null)
  const doubled = [...photos, ...photos]

  return (
    <section id="robotics">
      <div className="container">
        <div className="eyebrow">the build</div>
        <h2 className="section-title">Robotic hand, drowsiness detection system.</h2>
      </div>

      <div className="robotics-strip reveal">
        <div className="robotics-track">
          {doubled.map((p, i) => (
            <button className="robotics-card" key={i} onClick={() => setActive(p)} aria-label={p.caption}>
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