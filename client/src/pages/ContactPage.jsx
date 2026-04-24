import '../styles/contact.css'

const bookingPageUrl =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ37tBknQI0uP52Jjk3n6Y2gdZ5YWbyHqD4N2GjxBQ9Esdmlo4uLzF_RuPDcg-mQBr6P-qePsSX8'

function ContactPage() {
  return (
    <div className="page contact-page">
      <h1 className="page-title">Connect</h1>

      <section className="contact-meeting-section">
        <h2 className="section-title">Schedule Time with Me</h2>
        <p className="contact-intro">Book a time directly on my calendar.</p>
        <div className="contact-calendar-card">
          <iframe
            className="contact-calendar-frame"
            loading="lazy"
            src={bookingPageUrl}
            title="Schedule time with Merlin Valdez"
          />
        </div>
      </section>
    </div>
  )
}

export default ContactPage
