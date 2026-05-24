const serviceConfig = [
  { icon: 'fa-laptop-code', title: 'Web Development', key: 'Frameworks' },
  { icon: 'fa-code', title: 'Languages', key: 'Languages' },
  { icon: 'fa-cloud', title: 'Cloud & DevOps', key: 'Other' },
  { icon: 'fa-robot', title: 'Automation', description: 'UI Path, Pega — automating business processes and workflows for real-world impact.' },
]

export default function Services({ skills }) {
  const items = serviceConfig.map((item, index) => {
    const description = item.description || (skills?.[item.key] || []).join(', ') || 'Building reliable solutions for real clients.'
    return { ...item, description, delay: `${index * 0.2}s` }
  })

  return (
    <div className="service" id="service">
      <div className="container">
        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <p>What I do</p>
          <h2>Skills & Services</h2>
        </div>
        <div className="row">
          {items.map((item) => (
            <div key={item.title} className="col-lg-6 wow fadeInUp" data-wow-delay={item.delay}>
              <div className="service-item">
                <div className="service-icon">
                  <i className={`fa ${item.icon}`} />
                </div>
                <div className="service-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
