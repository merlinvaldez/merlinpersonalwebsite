import { useEffect } from 'react'
import '../styles/contact.css'

const hubspotScriptSrc =
  'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'

function ContactPage() {
  useEffect(() => {
    const container = document.querySelector('.meetings-iframe-container')

    if (container) {
      container.innerHTML = ''
    }

    const script = document.createElement('script')
    script.src = hubspotScriptSrc
    script.async = true
    script.type = 'text/javascript'
    document.body.appendChild(script)

    return () => {
      script.remove()

      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="page contact-page">
      <h1 className="page-title">Contact</h1>

      <div className="contact-grid">
        <section className="contact-form-section">
          <h2 className="section-title">
            Drop some <span aria-hidden="true">&#x1F496;</span> on my page
          </h2>

          <form className="contact-form-card" onSubmit={handleSubmit}>
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" name="first_name" type="text" />

            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" name="last_name" type="text" />

            <label htmlFor="message">Message</label>
            <textarea
              cols="40"
              id="message"
              name="message"
              placeholder="Leave me a message here and I'll get back to ya!"
              rows="10"
            />

            <button className="contact-submit" type="submit">
              Send
            </button>
          </form>
        </section>

        <section className="contact-meeting-section">
          <h2 className="section-title">Schedule Time with Me</h2>
          <div
            className="meetings-iframe-container"
            data-src="https://meetings.hubspot.com/merlin-valdez?embed=true"
          />
        </section>
      </div>
    </div>
  )
}

export default ContactPage
