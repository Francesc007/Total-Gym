/**
 * Fondo fijo muy suave: rejilla + halos difuminados. No interactivo, no tapa el contenido (z-index bajo).
 */
export function PageBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Base cálida-neutra, menos “papel blanco” plano */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-100/90" />
      {/* Rejilla tenue */}
      <div
        className="absolute inset-0 opacity-[0.45] bg-[linear-gradient(rgba(0,0,0,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.028)_1px,transparent_1px)] bg-[size:52px_52px]"
        style={{ maskImage: 'linear-gradient(to bottom, black, transparent 92%)' }}
      />
      {/* Halos difuminados (profundidad sin ruido) */}
      <div className="absolute -top-24 right-0 w-[min(85vw,32rem)] h-[min(85vw,32rem)] rounded-full bg-neutral-300/15 blur-3xl" />
      <div className="absolute top-[38%] -left-16 w-[min(70vw,22rem)] h-[min(70vw,22rem)] rounded-full bg-neutral-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-[12%] w-[min(65vw,20rem)] h-[min(65vw,20rem)] rounded-full bg-neutral-300/12 blur-3xl" />
      {/* Línea superior muy suave bajo el hero */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300/40 to-transparent" />
    </div>
  )
}
