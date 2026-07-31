import { useEffect } from 'react'
import './Lightbox.css'

export default function Lightbox({ src, caption, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!src) return null

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      <img
        src={src}
        alt={caption || ''}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      {caption && <p className="lightbox-caption">{caption}</p>}
    </div>
  )
}
