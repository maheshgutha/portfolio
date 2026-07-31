import './Waveform.css'

// A live-call waveform: nods to the AI voice-calling work without
// resorting to a generic stat block or stock hero image.
const BAR_COUNT = 28

export default function Waveform() {
  const bars = Array.from({ length: BAR_COUNT })
  return (
    <div className="waveform" aria-hidden="true">
      {bars.map((_, i) => (
        <span
          key={i}
          className="waveform-bar"
          style={{
            animationDelay: `${(i % 9) * 0.09}s`,
            left: `${(i / (BAR_COUNT - 1)) * 100}%`,
          }}
        />
      ))}
    </div>
  )
}
