import './Experience.css'

const roles = [
  {
    title: 'AI Agent & Full-Stack Developer Intern — AOTMS',
    date: 'Present',
    points: [
      'Contribute to an AI-powered automated calling system in a TeleCRM product, working across Node.js services, LLM prompt integration, and speech-to-text/text-to-speech pipelines.',
      'Build frontend features for live campaign/lead views with real-time status polling and call control actions.',
      'Supported Twilio → Exotel telephony migration with WebSocket-based call streaming; containerized services with Docker.',
      'Collaborate with an ML engineer to debug latency issues across the calling pipeline and improve reliability.',
    ],
  },
  {
    title: 'Full-Stack Developer Intern — AOTMS',
    date: 'May 2024 – Jun 2024',
    points: [
      'Built a full-stack restaurant management platform (MERN) for a U.S.-based client, including an admin dashboard and ordering flow.',
      'Designed REST APIs, MongoDB models, and authentication; deployed and maintained the app on Render and Vercel.',
    ],
  },
  {
    title: 'Python Programming Intern — Vaishnavi Technologies',
    date: 'May 2023 – Jun 2023',
    points: [
      'Built 2 Python projects (file handling automation, OOP-based data processing, workflow utilities) under the Startup India & Skill India initiative (Cert No: VTP 741978).',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="eyebrow">path</div>
        <h2 className="section-title">Where the work happened.</h2>

        <div className="timeline">
          {roles.map((r) => (
            <div className="timeline-row reveal" key={r.title}>
              <div className="timeline-date">{r.date}</div>
              <div className="timeline-content">
                <h3>{r.title}</h3>
                <ul>
                  {r.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

