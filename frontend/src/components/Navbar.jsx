import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function SiteNavbar({ name, cvDownloadUrl, cvAvailable }) {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setActive(id)
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navClass = (id) => `nav-item nav-link${active === id ? ' active' : ''}`

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container-fluid">
        <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
          {name.split(' ')[0]}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse justify-content-between${open ? ' show' : ''}`} id="navbarCollapse">
          <div className="navbar-nav ms-auto align-items-lg-center">
            <a href="#home" className={navClass('home')} onClick={(e) => { e.preventDefault(); scrollTo('home') }}>Home</a>
            <a href="#about" className={navClass('about')} onClick={(e) => { e.preventDefault(); scrollTo('about') }}>About</a>
            <a href="#experience" className={navClass('experience')} onClick={(e) => { e.preventDefault(); scrollTo('experience') }}>Experience</a>
            <a href="#portfolio" className={navClass('portfolio')} onClick={(e) => { e.preventDefault(); scrollTo('portfolio') }}>Portfolio</a>
            <a href="#contact" className={navClass('contact')} onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Contact</a>
            {cvDownloadUrl && cvAvailable && (
              <a href={cvDownloadUrl} className="nav-item nav-link" download>
                CV
              </a>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
