import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { CONFIG } from '../config'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

// Horarios: Viernes a Domingo 17:00 - 00:00 h
const HORAS = [
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
  '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00',
]

function getNextOpenDays(count: number) {
  const days: Date[] = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  let d = new Date(today)
  while (days.length < count) {
    const dayOfWeek = d.getDay()
    if (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0) {
      days.push(new Date(d))
    }
    d.setDate(d.getDate() + 1)
  }
  return days
}

function formatDate(d: Date) {
  return d.toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric', month: 'short' })
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [fecha, setFecha] = useState<Date | null>(null)
  const [hora, setHora] = useState('')
  const [personas, setPersonas] = useState('2')

  const dias = getNextOpenDays(21)

  const handleConfirmar = () => {
    if (!fecha || !hora) return
    const day = fecha.getDate().toString().padStart(2, '0')
    const month = (fecha.getMonth() + 1).toString().padStart(2, '0')
    const year = fecha.getFullYear()
    const fechaStr = `${day}/${month}/${year}`
    const mensaje = encodeURIComponent(
      `Hola El Cactus ${CONFIG.cactusEmoji}, me gustaría reservar para el día ${fechaStr} a las ${hora} h, para ${personas} personas.`
    )
    window.open(`https://api.whatsapp.com/send?phone=${CONFIG.whatsappNumber}&text=${mensaje}`, '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#1a1a1a] rounded-2xl border-2 border-[#4CAF50] shadow-2xl p-6 mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-2xl font-bold text-[#FFEB3B]">
                Reservar Mesa
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Fecha</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                  {dias.map((d) => (
                    <button
                      key={d.toISOString()}
                      onClick={() => setFecha(d)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        fecha?.toDateString() === d.toDateString()
                          ? 'bg-[#4CAF50] text-white'
                          : 'bg-[#2a2520] text-gray-300 hover:bg-[#3a3530]'
                      }`}
                    >
                      {formatDate(d)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Hora</label>
                <div className="grid grid-cols-4 gap-2 max-h-32 overflow-y-auto">
                  {HORAS.map((h) => (
                    <button
                      key={h}
                      onClick={() => setHora(h)}
                      className={`py-2 rounded-lg text-sm font-medium transition-all ${
                        hora === h
                          ? 'bg-[#FF9800] text-[#1a1a1a]'
                          : 'bg-[#2a2520] text-gray-300 hover:bg-[#3a3530]'
                      }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Personas</label>
                <select
                  value={personas}
                  onChange={(e) => setPersonas(e.target.value)}
                  className="w-full py-3 px-4 bg-[#2a2520] border border-[#4CAF50]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-lg border border-gray-500 text-gray-400 hover:bg-white/5 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmar}
                disabled={!fecha || !hora}
                className="flex-1 py-3 rounded-lg bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Ir a WhatsApp
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
