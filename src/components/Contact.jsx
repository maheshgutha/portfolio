import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-inner reveal">
        <div className="eyebrow">get in touch</div>
        <h2 className="contact-title">Let's build something that ships.</h2>
        <p className="contact-sub">
          Open to SDE and full-stack roles — happy to walk through the AI
          calling system, the sign-language project, or anything else here.
        </p>
        <a className="contact-email" href="mailto:maheshchoudare21@gmail.com">
          maheshchoudare21@gmail.com
        </a>

        <div className="contact-links">
          <a href="https://github.com/maheshgutha" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/gutha-mahesh-chowdary-0439912b5/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/resume.pdf" download>Résumé (PDF)</a>
        </div>

        <p className="contact-foot">Vijayawada, AP · +91 8897071769</p>
      </div>
    </section>
  )
}

