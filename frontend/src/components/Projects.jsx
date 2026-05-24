export default function Projects({ projects }) {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <p>My Portfolio</p>
          <h2>Shipped Projects</h2>
        </div>
        <div className="row portfolio-container">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item wow fadeInUp"
              data-wow-delay={`${index * 0.2}s`}
            >
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="portfolio-img-placeholder">{project.title.charAt(0)}</div>
                  )}
                </div>
                <div className="portfolio-text">
                  <h3>{project.title}</h3>
                  <a className="btn" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>
                    +
                  </a>
                </div>
              </div>
              <p className="mt-2 small text-muted px-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
