import { useEffect } from 'react'

export default function useScrollEffects() {
  useEffect(() => {
    const onScroll = () => {
      const navbar = document.querySelector('.navbar')
      const backToTop = document.querySelector('.back-to-top')
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('nav-sticky')
        } else {
          navbar.classList.remove('nav-sticky')
        }
      }
      if (backToTop) {
        backToTop.style.display = window.scrollY > 200 ? 'block' : 'none'
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
