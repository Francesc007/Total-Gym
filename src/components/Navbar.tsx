import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CONFIG, LOGO_SRC } from '../config'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#planes', label: 'Planes' },
  { href: '#amenidades', label: 'Amenidades' },
  { href: '#promociones', label: 'Promos' },
  { href: '#ubicacion', label: 'Ubicación' },
]

interface NavbarProps {
  onReservarClick: () => void
}

export function Navbar({ onReservarClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        isScrolled ? 'bg-white/95 border-neutral-200 shadow-sm' : 'bg-white/90 border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4.5rem] md:min-h-[5rem] py-3">
          <a href="#inicio" className="inline-flex items-center shrink-0">
            <img
              src={LOGO_SRC}
              alt={CONFIG.siteName}
              className="h-11 w-auto md:h-14 max-w-[200px] object-contain object-left"
            />
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-neutral-700 hover:text-neutral-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={onReservarClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-display bg-black hover:bg-neutral-900 text-white px-4 py-2.5 rounded-xl font-bold transition-colors shadow-md uppercase text-xs sm:text-sm tracking-wide shrink-0 border border-neutral-800"
          >
            Registro
          </motion.button>
        </div>

        <div className="lg:hidden pb-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-neutral-100 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
