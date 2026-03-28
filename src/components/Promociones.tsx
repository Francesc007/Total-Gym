import { motion } from 'framer-motion'

const promociones = [
  {
    titulo: 'Pase de prueba',
    descripcion: 'Primera clase o semana de cortesía según disponibilidad. Pregunta en recepción.',
    borde: 'border-neutral-500/50',
    imagen:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=82',
  },
  {
    titulo: 'Trae a un amigo',
    descripcion: 'Ambos reciben beneficio en inscripción cuando se registran juntos.',
    borde: 'border-neutral-500/40',
    imagen:
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=82',
  },
  {
    titulo: 'Horario que encaja',
    descripcion: 'Franjas de mañana y tarde entre semana; sábado por la mañana. Consulta horarios en recepción.',
    borde: 'border-neutral-500/35',
    imagen:
      'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=82',
  },
]

export function Promociones() {
  return (
    <section id="promociones" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,#737373_0%,transparent_45%)]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-3">
            Ventajas
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mb-5 tracking-tight">
            Promos que suman a tu rutina
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-base leading-relaxed">
            Información simple — pasa el cursor o mantén pulsado en móvil para ver el efecto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {promociones.map((promo, i) => (
            <motion.div
              key={promo.titulo}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-2xl border-2 ${promo.borde} bg-black overflow-hidden shadow-xl`}
            >
              <div className="relative h-44 overflow-hidden">
                <motion.img
                  src={promo.imagen}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.45 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-8 sm:p-9">
                <h3 className="font-display text-xl font-bold text-white mb-3">{promo.titulo}</h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{promo.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
