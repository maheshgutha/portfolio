import { useState } from 'react'
import Lightbox from './Lightbox'
import './Certifications.css'

// ---------------------------------------------------------------------------
// EDIT ME: every certificate you uploaded is converted to an image and
// wired in here. Add more by pushing a new object below — files live in
// public/certs/.
// ---------------------------------------------------------------------------
const certImages = [
  { src: '/certs/cert-springboard-badge.jpg', label: 'Infosys Springboard — Virtual Internship 7.0 (AI)' },
  { src: '/certs/cert-ai-primer.jpg', label: 'Infosys Springboard — Artificial Intelligence Primer Certification' },
  { src: '/certs/cert-genai.jpg', label: 'Infosys Springboard — Principles of Generative AI Certification' },
  { src: '/certs/cert-google-cloud.jpg', label: 'Google Cloud (L4G) — Generative AI, 45hrs, 22 Skill Badges' },
  { src: '/certs/cert-excelr-completion.jpg', label: 'ExcelR EdTech (with APSCHE) — Deep Learning / NLP / AI Internship' },
  { src: '/certs/cert-excelr-acceptance-letter.jpg', label: 'ExcelR EdTech — Internship Acceptance Letter' },
  { src: '/certs/cert-nptl-ci.jpg', label: 'NPTEL (IIT Guwahati) — Design & Implementation of Human-Computer Interfaces' },
  { src: '/certs/cert-nptel-social-networks.jpg', label: 'NPTEL Elite (IIT Madras) — Social Networks' },
  { src: '/certs/cert-ibm-1.jpg', label: 'IBM SkillsBuild — Customer Engagement: Problem Solving and Process Controls' },
  { src: '/certs/cert-ibm-2.jpg', label: 'IBM SkillsBuild — Customer Engagement: Communication and Personality Dynamics' },
  { src: '/certs/cert-ibm-3.jpg', label: 'IBM SkillsBuild — Artificial Intelligence Fundamentals' },
  { src: '/certs/cert-wadhwani.jpg', label: 'Wadhwani Foundation — Ignite India, Entrepreneurship Training' },
  { src: '/certs/cert-ai skillls passport.jpg', label: 'EY & Microsoft — AI Skills Passport, Certificate of Completion' },
  { src: '/certs/cert-springboard-internship.jpg', label: 'Infosys Springboard — Design Thinking Certification' },
  { src: '/certs/cert-prakalp.jpg', label: 'Prakalp 2026 — 24hr Hackathon on AI Agents, Ramachandra College of Engineering' },
  { src: '/certs/cert-lbrc.jpg', label: 'TechXelerate 2026 — Certificate of Award, LBRCE' },
  { src: '/certs/cert-smart tech hackton.jpg', label: 'Smart Tech Hackathon 2026 — Certificate of Excellence, ALIET' },
  { src: '/certs/cert-sih-1.jpg', label: 'Internal Smart India Hackathon 2025' },
  { src: '/certs/cert-sih-2.jpg', label: 'Internal Smart India Hackathon 2025 — Team MAGNICS' },
  { src: '/certs/cert-quiz.jpg', label: 'National Science Day Online Quiz Competition, ALIET' },
  { src: '/certs/cert-python-internship.jpg', label: 'Python Programming Internship — Vaishnav Technologies' },
]

const achievements = [
  '1st Prize — TechXelerate 2026 Hackathon (CSE, AI & ML), LBRCE',
  '1st Prize — Smart Tech Hackathon 2026 (Web, AI, Cyber Security), ALIET',
]

export default function Certifications() {
  const [active, setActive] = useState(null)
  const doubled = [...certImages, ...certImages]

  return (
    <section id="certifications">
      <div className="container">
        <div className="eyebrow">credentials</div>
        <h2 className="section-title">Certifications & achievements.</h2>
      </div>

      <div className="cert-strip reveal">
        <div className="cert-track">
          {doubled.map((c, i) => (
            <button className="cert-card" key={i} onClick={() => setActive(c)} aria-label={c.label}>
              <img src={c.src} alt={c.label} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <ul className="cert-list reveal">
          {achievements.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {active && (
        <Lightbox src={active.src} caption={active.label} onClose={() => setActive(null)} />
      )}
    </section>
  )
}