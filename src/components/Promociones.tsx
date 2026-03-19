import { motion } from 'framer-motion'

const promociones = [
  {
    titulo: 'Cumpleaños',
    descripcion: 'Postre gratis para el cumpleañero. 15% descuento en grupos de 6+.',
    borde: 'border-[#FF9800]',
    imagen: '/promo3.jpg',
  },
  {
    titulo: 'Promo Bebidas',
    descripcion: '2x1 en aguas frescas. Margaritas a mitad de precio en happy hour.',
    borde: 'border-[#4CAF50]',
    imagen: '/plato.jpg',
  },
  {
    titulo: 'Especial Fin de Semana',
    descripcion: 'Platillo + bebida + postre $120. Viernes a domingo, 12:00-16:00.',
    borde: 'border-[#FFEB3B]',
    imagen: '/plato1.jpg',
  },
]

export function Promociones() {
  return (
    <section id="promociones" className="py-20 md:py-28 bg-[#252019] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FF9800\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FFEB3B] mb-4">
            Promociones del Mes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Aprovecha nuestras ofertas especiales y vive la experiencia El Cactus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {promociones.map((promo, i) => (
            <motion.div
              key={promo.titulo}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className={`group bg-[#1a1a1a] rounded-2xl overflow-hidden border-2 ${promo.borde} shadow-xl hover:shadow-2xl transition-shadow`}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={promo.imagen}
                  alt={promo.titulo}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-[#FFEB3B] mb-2">
                  {promo.titulo}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {promo.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
