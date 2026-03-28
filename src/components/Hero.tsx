import { motion } from 'framer-motion'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85'

export function Hero({ onReservarClick }: { onReservarClick: () => void }) {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-transparent"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        aria-hidden
      />
      {/* Overlay más suave para que la foto se vea más clara */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/18 to-neutral-50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center pt-28 pb-20 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-neutral-300 drop-shadow-md mb-4"
        >
          Huehuetoca · Entrena en serio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
        >
          Tu cuerpo.
          <span className="block text-white/95 mt-1 drop-shadow-md">Tu ritmo. Sin excusas.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="text-base sm:text-lg md:text-xl text-neutral-100 mb-12 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]"
        >
          Equipamiento de peso libre, clases grupales y app de entrenamiento. Diseñado para verse
          impecable en móvil y para que entrenes sin fricción.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto"
        >
          <motion.button
            type="button"
            onClick={onReservarClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-display px-8 py-4 bg-black hover:bg-neutral-900 text-white font-bold rounded-xl transition-colors shadow-xl uppercase tracking-wide text-sm sm:text-base border border-neutral-700"
          >
            ¡Inscríbete ahora!
          </motion.button>
          <motion.button
            type="button"
            onClick={onReservarClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-display px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border-2 border-white/40 hover:border-white/60 text-white font-bold rounded-xl uppercase tracking-wide text-sm sm:text-base text-center"
          >
            Obtén tu pase gratis
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
