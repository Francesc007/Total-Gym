import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

const planes = [
  {
    nombre: 'Plan Fit',
    tagline: 'Ideal para empezar con constancia',
    precio: '$599',
    periodo: '/mes',
    destacado: false,
    imagen:
      'https://images.unsplash.com/photo-1593079831268-9451dfa2c889?auto=format&fit=crop&w=900&q=85',
    beneficios: [
      'Acceso al área de cardio y peso libre',
      'Casilleros y regaderas',
      'Horario extendido de lunes a domingo',
      'Evaluación inicial de bienvenida',
    ],
  },
  {
    nombre: 'Plan Black',
    tagline: 'Experiencia completa estilo premium',
    precio: '$899',
    periodo: '/mes',
    destacado: true,
    imagen:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=82',
    beneficios: [
      'Todo lo del Plan Fit',
      'Clases grupales ilimitadas',
      'App de entrenamiento y rutinas guiadas',
      '1 invitado al mes y prioridad en eventos',
      'Área de peso libre y zona funcional ampliada',
    ],
  },
]

function PlanCard({
  plan,
  index,
  onCtaClick,
}: {
  plan: (typeof planes)[0]
  index: number
  onCtaClick: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl flex flex-col h-full border overflow-hidden transition-shadow duration-300 ${
        plan.destacado
          ? 'bg-black border-neutral-600 shadow-xl shadow-black/25 ring-1 ring-neutral-700/50'
          : 'bg-black border-neutral-800'
      }`}
    >
      <div className="relative h-48 sm:h-52 overflow-hidden shrink-0">
        <motion.img
          src={plan.imagen}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent pointer-events-none" />
      </div>

      {plan.destacado && (
        <span className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-neutral-500 text-white px-4 py-1 rounded-full z-10">
          Más elegido
        </span>
      )}

      <div className="p-8 sm:p-10 flex flex-col flex-1">
        <div className="mb-8">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-1">{plan.nombre}</h3>
          <p className="text-neutral-500 text-sm font-medium">{plan.tagline}</p>
          <p className="mt-6 flex items-baseline gap-1">
            <span className="font-display text-4xl sm:text-5xl font-black text-neutral-400">{plan.precio}</span>
            <span className="text-neutral-500 text-sm font-medium">{plan.periodo}</span>
          </p>
        </div>
        <ul className="space-y-4 flex-1 mb-10">
          {plan.beneficios.map((b) => (
            <li key={b} className="flex gap-3 text-neutral-300 text-sm sm:text-base leading-snug">
              <span
                className={`mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center rounded-full ${
                  plan.destacado ? 'bg-neutral-700 text-neutral-300' : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>
        <motion.button
          type="button"
          onClick={onCtaClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`font-display block text-center w-full py-4 rounded-xl font-bold uppercase tracking-wide text-sm transition-colors ${
            plan.destacado
              ? 'bg-neutral-600 text-white hover:bg-neutral-500 border border-neutral-500'
              : 'bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-700'
          }`}
        >
          Quiero este plan
        </motion.button>
      </div>
    </motion.article>
  )
}

export function Pricing({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section id="planes" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-3">
            Membresías
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mb-5 tracking-tight">
            Planes claros. Sin letra chica en la experiencia.
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Elige el nivel que va con tu meta. Ambos incluyen espacio, orden y la misma energía de comunidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
          {planes.map((plan, i) => (
            <PlanCard key={plan.nombre} plan={plan} index={i} onCtaClick={onCtaClick} />
          ))}
        </div>
      </div>
    </section>
  )
}
