import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TypedRoles({ strings }) {
  const el = useRef(null)
  const typed = useRef(null)

  useEffect(() => {
    if (!el.current || !strings?.length) return

    typed.current = new Typed(el.current, {
      strings,
      typeSpeed: 80,
      backSpeed: 40,
      smartBackspace: false,
      loop: true,
    })

    return () => typed.current?.destroy()
  }, [strings])

  return <h2 ref={el} />
}
