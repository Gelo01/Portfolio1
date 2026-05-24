import { useEffect, useState } from 'react'
import { fetchPortfolio } from './api/client'
import About from './components/About'
import BackToTop from './components/BackToTop'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import SiteNavbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import useScrollEffects from './hooks/useScrollEffects'

function App() {
  const [portfolio, setPortfolio] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useScrollEffects()

  useEffect(() => {
    fetchPortfolio()
      .then(setPortfolio)
      .catch(() => setError('Could not load portfolio. Start the Laravel API: cd backend && php artisan serve'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div id="loader" className="show">
        <div className="loader" />
      </div>
    )
  }

  if (error || !portfolio) {
    return (
      <div className="container py-5 text-center">
        <p className="text-danger">{error || 'Portfolio unavailable.'}</p>
      </div>
    )
  }

  return (
    <>
      <SiteNavbar
        name={portfolio.name}
        cvDownloadUrl={portfolio.cv_download_url}
        cvAvailable={portfolio.cv_available}
      />
      <Hero portfolio={portfolio} />
      <About portfolio={portfolio} />
      <Services skills={portfolio.skills} />
      <Experience experience={portfolio.experience} />
      <Banner summary={portfolio.experience_summary} />
      <Projects projects={portfolio.projects} />
      <Contact intro={portfolio.contact_intro} />
      <Footer
        name={portfolio.name}
        year={portfolio.copyright_year}
        social={portfolio.social}
        email={portfolio.contact_email}
      />
      <BackToTop />
    </>
  )
}

export default App
