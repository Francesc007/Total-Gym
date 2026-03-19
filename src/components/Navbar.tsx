import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#menu', label: 'Menú' },
  { href: '#promociones', label: 'Promociones' },
  { href: '#ubicacion', label: 'Ubicación' },
]

interface NavbarProps {
  onReservarClick: () => void
}

export function Navbar({ onReservarClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isScrolled ? 'bg-[#1a1a1a]/95 border-[#4CAF50]/20' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28 py-2">
          <a href="#inicio" className="inline-block">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#4CAF50]/40 bg-white shrink-0">
              <img
                src="/Logo%20Cactus.jpg"
                alt="El Cactus Antojería"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#FFEB3B] hover:text-[#FF9800] transition-colors font-bold"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={onReservarClick}
            className="font-display flex items-center gap-2 bg-[#4CAF50] hover:bg-[#45a049] text-white px-4 py-2 rounded-lg font-bold transition-all hover:scale-105 shadow-lg uppercase"
          >
            <Calendar size={18} />
            <span className="hidden sm:inline">RESERVAR AHORA</span>
          </button>
        </div>

        <div className="md:hidden pb-4 flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#FFEB3B] hover:text-[#FF9800] transition-colors text-sm font-bold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
