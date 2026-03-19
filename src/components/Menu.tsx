import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award } from 'lucide-react'

const platos = [
  {
    nombre: 'Enchiladas Suizas',
    descripcion: 'Tortillas bañadas en crema, queso gratinado y salsa verde. Un clásico que nunca falla.',
    precio: '$95',
    topDelMes: true,
    imagen: '/enchiladas.jpg',
  },
  {
    nombre: 'Tacos al Pastor',
    descripcion: 'Trompo tradicional con piña, cilantro y cebolla. El sabor de la CDMX en Tepeji.',
    precio: '$85',
    topDelMes: true,
    imagen: '/tacos.jpg',
  },
  {
    nombre: 'Chiles en Nogada',
    descripcion: 'Poblano relleno de picadillo, cubierto de nogada y granada. Temporada especial.',
    precio: '$165',
    topDelMes: false,
    imagen: '/chiles.jpg',
  },
  {
    nombre: 'Mole Poblano',
    descripcion: 'Pollo en mole tradicional de Oaxaca. Más de 20 ingredientes en cada cucharada.',
    precio: '$125',
    topDelMes: true,
    imagen: '/mole-poblano.webp',
  },
]

function MenuCard({ plato, index }: { plato: typeof platos[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)' }}
      className="bg-[#2a2520] rounded-xl overflow-hidden border border-[#4CAF50]/30 hover:border-[#FF9800]/50 transition-all cursor-default"
    >
      <div className="h-40 bg-[#1a1a1a] overflow-hidden">
        <img
          src={plato.imagen}
          alt={plato.nombre}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-bold text-[#FFEB3B]">{plato.nombre}</h3>
          {plato.topDelMes && (
            <span className="flex items-center gap-1 bg-[#FF9800] text-[#1a1a1a] text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
              <Award size={12} /> Top del Mes
            </span>
          )}
        </div>
        <p className="text-gray-300 mt-2 text-sm">{plato.descripcion}</p>
        <p className="text-[#4CAF50] font-bold mt-4">{plato.precio}</p>
      </div>
    </motion.div>
  )
}

export function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FFEB3B] mb-4">
            Nuestros Platos Estrella
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre los sabores que nos han hecho famosos en Tepeji del Río
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {platos.map((plato, i) => (
            <MenuCard key={plato.nombre} plato={plato} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B4513] hover:bg-[#A0522D] text-white font-semibold rounded-lg transition-all border border-[#FF9800]/30"
          >
            Descargar Menú Completo (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  )
}
