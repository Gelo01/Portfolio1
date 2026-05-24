import { useEffect, useState } from 'react'
import api from '../api/client'

export default function VisitCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    // Only count once per browser session
    const alreadyCounted = sessionStorage.getItem('visit_counted')

    if (!alreadyCounted) {
      api.post('/visit')
        .then(({ data }) => {
          setCount(data.count)
          sessionStorage.setItem('visit_counted', '1')
        })
        .catch(() => {
          // Silently fail — just fetch the current count
          api.get('/visit').then(({ data }) => setCount(data.count)).catch(() => {})
        })
    } else {
      api.get('/visit').then(({ data }) => setCount(data.count)).catch(() => {})
    }
  }, [])

  if (count === null) return null

  return (
    <div className="visit-counter">
      <span className="visit-counter-icon">
        <i className="fa fa-eye" />
      </span>
      <span className="visit-counter-text">
        {count.toLocaleString()} {count === 1 ? 'visit' : 'visits'}
      </span>
    </div>
  )
}
