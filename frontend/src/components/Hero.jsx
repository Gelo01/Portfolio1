import { useState } from 'react'
import TypedRoles from './TypedRoles'

export default function Hero({ portfolio }) {
  const [imageError, setImageError] = useState(false)
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  const typedStrings = [
    ...(portfolio.skills?.Languages || []),
    ...(portfolio.skills?.Frameworks || []).slice(0, 4),
    portfolio.title,
  ]

  const showImage = portfolio.profile_image && !imageError

  return (
    <div className="hero" id="home">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <div className="hero-content">
              <div className="hero-text">
                <p>I&apos;m</p>
                <h1>{portfolio.name}</h1>
                <TypedRoles strings={typedStrings} />
                <div className="typed-text d-none">{typedStrings.join(', ')}</div>
              </div>
              <div className="hero-btn">
                <button type="button" className="btn" onClick={scrollToContact}>Hire Me</button>
                <button type="button" className="btn" onClick={scrollToContact}>Contact Me</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-none d-md-block">
            <div className="hero-image">
              {showImage ? (
                <img src={portfolio.profile_image} alt={portfolio.name} onError={() => setImageError(true)} />
              ) : (
                <div className="portfolio-img-placeholder" style={{ minHeight: 320, borderRadius: 8 }}>
                  {portfolio.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
