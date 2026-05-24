export default function Experience({ experience }) {
  return (
    <div className="experience" id="experience">
      <div className="container">
        <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <p>My Resume</p>
          <h2>Working Experience</h2>
        </header>
        <div className="timeline">
          {experience.map((item, index) => (
            <div
              key={`${item.company}-${item.role}`}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-text">
                <div className="timeline-date">{item.period}</div>
                <h2>{item.role}</h2>
                <h4>{item.company}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
