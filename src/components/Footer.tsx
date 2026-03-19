import { motion } from 'framer-motion'
import { MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import { CONFIG } from '../config'

export function Footer() {
  return (
    <footer id="ubicacion" className="bg-[#1a1a1a] border-t border-[#4CAF50]/20 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a href="#inicio" className="inline-flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#4CAF50]/40 bg-white">
                <img
                  src="/Logo%20Cactus.jpg"
                  alt="El Cactus Antojería"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400 mt-4 text-center">
                El sabor auténtico de la tradición<br />en Tepeji del Río
              </p>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="font-display text-xl font-bold text-[#FFEB3B] mb-4">Contacto</h4>
            <a
              href={CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[#4CAF50] hover:text-[#FF9800] transition-colors mb-2"
            >
              <MapPin size={18} />
              <span>Ver en Google Maps</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Clock size={18} />
              <p className="text-sm">{CONFIG.horarios.principal} h</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h4 className="font-display text-xl font-bold text-[#FFEB3B] mb-4">Síguenos</h4>
            <div className="flex justify-center gap-4">
              <a
                href={CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#2a2520] flex items-center justify-center text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#2a2520] flex items-center justify-center text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#2a2520] flex items-center justify-center text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-[#4CAF50]/20 pt-8 text-center text-gray-500 text-sm space-y-2">
          <p>© {new Date().getFullYear()} Tepeji del Río, Hidalgo. Derechos reservados.</p>
          <p className="text-xs">
            Powered by{' '}
            <a
              href="https://sigmaaiagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#4CAF50] hover:text-[#FF9800] transition-colors"
            >
              Sigma AI Agency
            </a>
            {' '}| Automatización Inteligente
          </p>
        </div>
      </div>
    </footer>
  )
}
