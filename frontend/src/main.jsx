import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/devfolio-overrides.css'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

function Root() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('loader')?.classList.remove('show')
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
