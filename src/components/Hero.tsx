import { motion } from 'framer-motion'

export function Hero({ onReservarClick }: { onReservarClick: () => void }) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/cactus.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          El Sabor Auténtico de la Tradición en Tepeji
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-[#FFEB3B] mb-12 max-w-2xl mx-auto"
        >
          Antojería El Cactus: Donde cada bocado cuenta una historia
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="font-display px-8 py-4 bg-black hover:bg-[#1a1a1a] text-[#FFEB3B] font-bold rounded-lg transition-all hover:scale-105 shadow-xl uppercase"
          >
            Ver Menú de Hoy
          </a>
          <button
            onClick={onReservarClick}
            className="font-display px-8 py-4 bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold rounded-lg transition-all hover:scale-105 shadow-xl border-2 border-[#4CAF50] uppercase"
          >
            Reservar Mesa
          </button>
        </motion.div>
      </div>
    </section>
  )
}
