import './Skills.css'

const groups = [
  { label: 'Languages', items: ['Java', 'JavaScript', 'Python'] },
  { label: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets'] },
  { label: 'Databases', items: ['MongoDB', 'SQL'] },
  {
    label: 'AI & Voice',
    items: ['LLM integration (GPT-4/3.5-turbo)', 'STT / TTS pipelines', 'Telephony (Exotel, Twilio)', 'Prompt Engineering'],
  },
  { label: 'Tools & Platforms', items: ['Git', 'GitHub', 'Docker', 'AWS', 'Postman', 'Render', 'Vercel'] },
  {
    label: 'CS Fundamentals',
    items: ['DSA', 'OOP', 'OS', 'DBMS', 'Computer Networks', 'System Design', 'Auth & Authorization', 'MVC', 'JWT', 'ML', 'Deep Learning'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="eyebrow">stack</div>
        <h2 className="section-title">What I build with.</h2>

        <div className="skills-grid reveal">
          {groups.map((g) => (
            <div className="skills-card" key={g.label}>
              <h4>{g.label}</h4>
              <p>{g.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

