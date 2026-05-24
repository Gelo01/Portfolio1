export default function Banner({ summary }) {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="banner wow zoomIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="section-header text-center">
          <h1 className="fw-bold">Let&apos;s work together</h1>
          <h2>
            Open to <span>collaborate</span>
          </h2>
        </div>
        <div className="container banner-text">
          <p>{summary}</p>
          <button type="button" className="btn" onClick={scrollToContact}>
            Get in touch
          </button>
        </div>
      </div>
    </div>
  )
}
