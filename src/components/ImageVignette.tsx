/**
 * Viñeta + sombra interior: da sensación de sombra alrededor de la foto sin tapar el centro.
 */
export function ImageVignette({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.42)_100%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_55px_rgba(0,0,0,0.35)]" />
      <div className="absolute inset-0 ring-1 ring-inset ring-black/25" />
    </div>
  )
}
