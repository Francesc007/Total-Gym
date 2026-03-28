import { motion } from 'framer-motion'
import { ShowerHead, Dumbbell, Users, Smartphone } from 'lucide-react'

const items = [
  {
    titulo: 'Regaderas',
    descripcion: 'Agua caliente y espacios limpios para salir renovado después de cada sesión.',
    Icon: ShowerHead,
    imagen:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=82',
  },
  {
    titulo: 'Área de peso libre',
    descripcion: 'Rack, discos y mancuernas para progresar en fuerza con total libertad.',
    Icon: Dumbbell,
    imagen:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=82',
  },
  {
    titulo: 'Clases grupales',
    descripcion: 'Ritmo, motivación e instructores que te empujan sin perder la técnica.',
    Icon: Users,
    imagen:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=82',
  },
  {
    titulo: 'App de entrenamiento',
    descripcion: 'Rutinas, seguimiento y recordatorios desde tu celular, donde sea que estés.',
    Icon: Smartphone,
    imagen:
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=82',
  },
]

export function Amenities() {
  return (
    <section id="amenidades" className="py-20 md:py-28 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-3">
            Instalaciones
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mb-5 tracking-tight">
            Todo lo que necesitas, en un solo lugar
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto text-base leading-relaxed">
            Pasá el dedo o el cursor: cada tarjeta reacciona con un ligero zoom en la foto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-neutral-200 bg-black overflow-hidden shadow-lg shadow-black/10"
            >
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <motion.img
                  src={item.imagen}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-700/90 text-neutral-200 ring-1 ring-neutral-500/50 backdrop-blur-sm">
                  <item.Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
              </div>
              <div className="p-8 sm:p-9">
                <h3 className="font-display text-xl font-bold text-white mb-3">{item.titulo}</h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{item.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
