import { motion } from 'framer-motion'
import { MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import { CONFIG, LOGO_SRC } from '../config'

export function Footer() {
  return (
    <footer id="ubicacion" className="bg-white border-t border-neutral-200 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-10 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#inicio" className="inline-flex flex-col items-center md:items-start gap-4">
              <img
                src={LOGO_SRC}
                alt={CONFIG.siteName}
                className="h-16 w-auto md:h-[4.5rem] max-w-[220px] object-contain object-left mx-auto md:mx-0"
              />
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Entrena con energía. Equipamiento, comunidad y app en un solo ecosistema.
              </p>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-center"
          >
            <h4 className="font-display text-lg font-bold text-neutral-900 mb-4">Contacto</h4>
            <a
              href={CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mb-3 text-sm sm:text-base"
            >
              <MapPin size={18} />
              <span>Ver en Google Maps</span>
            </a>
            <div className="flex flex-col items-center gap-2 text-neutral-500 text-sm">
              <div className="flex items-start justify-center gap-2">
                <Clock size={18} className="shrink-0 mt-0.5" />
                <div className="text-left space-y-1">
                  {CONFIG.horarios.lineas.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-right"
          >
            <h4 className="font-display text-lg font-bold text-neutral-900 mb-4">Síguenos</h4>
            <div className="flex justify-center md:justify-end gap-3">
              <a
                href={CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800 transition-all"
                aria-label="Facebook H TOTAL GYM"
              >
                <Facebook size={22} />
              </a>
              <a
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800 transition-all"
                aria-label="Instagram H TOTAL GYM"
              >
                <Instagram size={22} />
              </a>
              <a
                href={CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800 transition-all"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-neutral-200 pt-8 text-center text-neutral-500 text-sm space-y-2">
          <p>
            © {new Date().getFullYear()} {CONFIG.siteName}. Huehuetoca, México. Derechos reservados.
          </p>
          <p className="text-xs">
            Powered by{' '}
            <a
              href="https://sigmaaiagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Sigma AI Agency
            </a>
            {' '}
            | Automatización inteligente
          </p>
        </div>
      </div>
    </footer>
  )
}
