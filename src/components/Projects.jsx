import DeviceMockup from './DeviceMockup'
import './Projects.css'

// ---------------------------------------------------------------------------
// EDIT ME: put your exported 15-sec clips (or 3D-mockup-tool exports) into
// public/videos/ and reference them here as "/videos/filename.mp4"
// ---------------------------------------------------------------------------
const projects = [
  {
    title: 'Sara — AI Voice Calling Platform (TeleCRM Integration)',
    url: 'AOTMS/sara-voice-agent',
    description:
      'AI-powered automated calling system integrated into a TeleCRM product. Node.js backend on Render orchestrates Exotel telephony and Sarvam multilingual STT/TTS (Telugu, Hindi, English), with LLM prompt-driven conversation, topic restriction, automatic call transfer to a human agent, and silent-caller handling.',
    tech: ['Node.js', 'Exotel', 'Sarvam STT/TTS', 'WebSockets', 'LLM prompting', 'Render'],
    video: '/videos/crm.mp4',
    liveLink: '#',
    githubLink: 'https://github.com/AOTMS2026/telecommunication',
  },
  {
    title: 'AI-Powered Real-Time Sign Language Translation System',
    url: 'maheshgutha/sign-language-robotic-hand',
    description:
      'Real-time hand-gesture recognition converted to speech and replicated via a servo-driven robotic hand, with bidirectional text-to-sign translation, cloud logging, and a live analytics dashboard.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Arduino', 'React', 'Supabase'],
    image: '/projects/project-sign-language-hand.jpg',
    liveLink: '#',
    githubLink:
      'https://github.com/maheshgutha/AI-Powered-Sign-Language-Translation-Using-Computer-Vision-and-Robotic-Hand',
  },
  {
    title: 'Placement & Internship Management Portal',
    url: 'maheshgutha/internship',
    description:
      'Secure full-stack placement workflow app serving 50+ pilot users, built around an NLP resume-screening engine that improved candidate-job matching accuracy by 30%. Encrypted auth, RBAC, an AI eligibility chatbot, and bias-aware ranking logic for fair candidate shortlisting.',
    tech: ['React', 'Python', 'Flask', 'SQL', 'NLP'],
    image: '/projects/project-placement-portal.png',
    liveLink: '#',
    githubLink: 'https://github.com/enugulameghana4567/internship',
  },
  {
    title: 'BiryaniBox — Restaurant Management System',
    url: 'maheshgutha/BIRYANIBOX1',
    description:
      'Full-stack restaurant platform with 6 role-based dashboards, 26 MongoDB collections, and 23 REST API modules covering orders, inventory, reservations, and staff — secured with JWT auth and RBAC across every role.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    video: '/videos/biryanibox-highlight.mp4',
    liveLink: '#',
    githubLink: 'https://github.com/maheshgutha/BIRYANIBOX1',
  },
  {
    title: 'FreshMeat Shop Manager — WhatsApp Automation Tool',
    url: 'maheshgutha/whatsappautomation-for-justeat',
    description:
      'Full-stack MERN platform that automates WhatsApp marketing, ordering, and delivery for a local meat shop. Owners send image campaigns to bulk contacts via WPPConnect; a conversational bot walks customers through the live menu, collects item quantities, and confirms orders with a unique order ID, while a dashboard tracks delivery status end to end.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WPPConnect', 'SheetJS'],
    video: '/videos/whatsappautomation.mp4',
    liveLink: '#',
    githubLink: 'https://github.com/maheshgutha/whatsappautomation-for-justeat',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="eyebrow">selected work</div>
        <h2 className="section-title">Projects, live inside the code.</h2>

        <div className="project-list">
          {projects.map((p, i) => (
            <article
              className={`project-row reveal ${i % 2 === 1 ? 'reverse' : ''}`}
              key={p.title}
            >
              <div className="project-media">
                <DeviceMockup src={p.video} url={p.url} image={p.image} />
              </div>
              <div className="project-copy">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="tech-tags">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={p.githubLink} target="_blank" rel="noreferrer">
                    View code →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}