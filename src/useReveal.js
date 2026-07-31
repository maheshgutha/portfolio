import { useEffect, useRef } from 'react'

// Adds 'is-visible' to any element with class "reveal" once it enters the viewport.
export default function useReveal() {
  const scopeRef = useRef(null)

  useEffect(() => {
    const root = scopeRef.current || document
    const els = root.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return scopeRef
}
