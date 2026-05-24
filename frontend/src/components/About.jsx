import { useEffect, useRef } from 'react'

const skillLevels = {
  'Web Design': 85,
  'Web Development': 95,
  'C#': 88,
  '.NET': 85,
  'React': 92,
  'Laravel': 88,
  'Pega': 80,
  'Azure': 82,
}

function getLevel(skill) {
  return skillLevels[skill] || 85
}

export default function About({ portfolio }) {
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.progress-bar').forEach((bar) => {
              bar.style.width = `${bar.getAttribute('aria-valuenow')}%`
            })
          }
        })
      },
      { threshold: 0.3 },
    )
    if (skillsRef.current) observer.observe(skillsRef.current)
    return () => observer.disconnect()
  }, [])

  const topSkills = [
    ...(portfolio.skills?.Languages || []).slice(0, 2),
    ...(portfolio.skills?.Frameworks || []).slice(0, 2),
  ]

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <div className="profile-img-wrapper">
                <div className="profile-ring profile-ring-1" />
                <div className="profile-ring profile-ring-2" />
                <div className="profile-ring profile-ring-3" />
                <div className="profile-dots">
                  {[...Array(8)].map((_, i) => (
                    <span key={i} className={`profile-dot profile-dot-${i + 1}`} />
                  ))}
                </div>
                {portfolio.profile_image ? (
                  <img src={portfolio.profile_image} alt={portfolio.name} className="profile-placeholder" />
                ) : (
                  <div className="portfolio-img-placeholder profile-placeholder">{portfolio.name.charAt(0)}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-header text-left">
                <p>Learn About Me</p>
                <h2>{portfolio.title}</h2>
              </div>
              <div className="about-text">
                {portfolio.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <div className="skills" ref={skillsRef}>
                {topSkills.map((skill) => (
                  <div key={skill}>
                    <div className="skill-name">
                      <p>{skill}</p>
                      <p>{getLevel(skill)}%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={getLevel(skill)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" className="btn" onClick={scrollToContact}>
                Let&apos;s collaborate!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
