import DeviceMockup from './DeviceMockup'
import './Projects.css'

const projects = [
  {
    title: 'Sara — AI Voice Calling Platform (TeleCRM Integration)',
    url: 'www.aotms.in',
    description:
      'AI-powered automated calling system integrated into a TeleCRM product. Node.js backend orchestrates Exotel & Twilio telephony with multilingual STT/TTS pipelines, LLM prompt-driven conversations, topic restriction, automatic human agent transfers, real-time campaign status polling, and call control actions.',
    tech: ['Node.js', 'Express.js', 'REST APIs', 'Exotel', 'Twilio', 'WebSockets', 'LLM Prompting', 'STT/TTS', 'Docker', 'Render'],
    image: '/projects/project-sara-voice.png',
    liveLink: 'https://www.aotms.in',
    githubLink: 'https://github.com/AOTMS2026/telecommunication',
  },
  {
    title: 'AI-Powered HR Recruitment Automation Platform',
    url: 'github.com/maheshgutha/AI-Powered-HR-Recruitment-Automation-Platform',
    description:
      'End-to-end recruitment pipeline where HR posts job positions and students apply directly, eliminating manual intake work. Features an ATS-style resume scanning/ranking engine and an AI validation layer that automatically triggers skill assessments for shortlisted candidates.',
    tech: ['Node.js', 'React', 'Supabase', 'Python FastAPI', 'spaCy', 'BERT', 'JWT', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: 'https://github.com/maheshgutha/AI-Powered-HR-Recruitment-Automation-Platform',
  },
  {
    title: 'AI-Powered Real-Time Sign Language Translation System',
    url: 'github.com/maheshgutha/AI-Sign-Language-Robotic-Hand',
    description:
      'Real-time hand-gesture recognition converted to speech and replicated via a servo-driven robotic hand for hearing/speech-impaired users. Features bidirectional text-to-sign translation, cloud logging, a live analytics dashboard, and automated Telegram alerts.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Arduino', 'React', 'Supabase'],
    liveLink: '#',
    githubLink:
      'https://github.com/maheshgutha/AI-Sign-Language-Robotic-Hand',
  },
  {
    title: 'Placement & Internship Management Portal',
    url: 'github.com/maheshgutha/internship',
    description:
      'Secure full-stack placement workflow app serving 1,000+ pilot users, built around an NLP resume-screening engine that improved candidate-job matching accuracy by 30%. Implemented encrypted auth, RBAC, an AI eligibility chatbot, and bias-aware ranking logic for fair candidate shortlisting.',
    tech: ['React', 'Python', 'Flask', 'SQL', 'NLP'],
    image: '/projects/project-placement-portal.png',
    liveLink: '#',
    githubLink: 'https://github.com/maheshgutha/internship',
  },
  {
    title: 'BiryaniBox — Restaurant Management System',
    url: 'www.biriyani-box.com',
    description:
      'Full-stack restaurant management platform (MERN) built for a U.S.-based client. Features 6 role-based dashboards, 26 MongoDB collections, and 23 REST API modules covering online ordering, menu catalog, reservations, inventory, and staff management — secured with JWT auth and RBAC.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Render', 'Vercel'],
    image: '/projects/project-biryanibox.png',
    liveLink: 'https://www.biriyani-box.com',
    githubLink: 'https://github.com/maheshgutha/BIRYANIBOX1',
  },
  {
    title: 'FreshMeat Shop Manager — WhatsApp Automation Tool',
    url: 'whatsapp-automation-one-eta.vercel.app',
    description:
      'Full-stack MERN platform that automates WhatsApp marketing, ordering, and delivery for a local meat shop. Owners send image campaigns to bulk contacts via WPPConnect; a conversational bot walks customers through live menu, collects item quantities, and confirms orders with unique order IDs while tracking delivery status end to end.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'WPPConnect', 'SheetJS', 'Vercel'],
    image: '/projects/project-freshmeat.png',
    liveLink: 'https://whatsapp-automation-one-eta.vercel.app/dashboard',
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
                  {p.liveLink && p.liveLink !== '#' && (
                    <a href={p.liveLink} target="_blank" rel="noreferrer" style={{ marginLeft: '1rem' }}>
                      Live demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}