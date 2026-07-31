import { useRef } from 'react'
import './DeviceMockup.css'

/**
 * A browser-window frame rendered in real 3D space (CSS perspective + rotateX/Y).
 * It tilts toward the cursor on hover/mouse-move and settles back on leave.
 * The user's own project video plays live inside the "screen" — no external
 * mockup tool needed, this is the mockup.
 */
export default function DeviceMockup({ src, url, poster, image }) {
  const stageRef = useRef(null)
  const frameRef = useRef(null)

  function handleMove(e) {
    const stage = stageRef.current
    const frame = frameRef.current
    if (!stage || !frame) return
    const rect = stage.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height

    const maxTilt = 10
    const rotY = (px - 0.5) * maxTilt * 2
    const rotX = (0.5 - py) * maxTilt

    frame.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`
  }

  function handleLeave() {
    const frame = frameRef.current
    if (!frame) return
    frame.style.transform = 'rotateX(6deg) rotateY(-14deg) translateZ(0)'
  }

  return (
    <div
      className="device-stage"
      ref={stageRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="device-glow" aria-hidden="true" />
      <div className="device-frame" ref={frameRef}>
        <div className="device-topbar">
          <span className="dot dot-a" />
          <span className="dot dot-b" />
          <span className="dot dot-c" />
          <span className="device-url">{url}</span>
        </div>
        <div className="device-screen">
          {image ? (
            <img className="device-video" src={image} alt={url} />
          ) : (
            <video
              className="device-video"
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>
        <div className="device-edge" aria-hidden="true" />
      </div>
      <div className="device-reflection" aria-hidden="true" />
    </div>
  )
}