import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { CONFIG } from '../config'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

const INTERESES = [
  { value: 'clase_prueba', label: 'Clase de prueba' },
  { value: 'inscripcion', label: 'Inscripción / membresía' },
  { value: 'info', label: 'Solo información' },
] as const

const inputClass =
  'w-full py-3.5 px-4 rounded-xl bg-black border border-neutral-700 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 focus:border-neutral-500 text-base'

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [interes, setInteres] = useState<string>(INTERESES[0].value)
  const [mensaje, setMensaje] = useState('')

  const handleEnviar = () => {
    const tel = telefono.replace(/\s/g, '')
    if (!nombre.trim() || tel.length < 8) return

    const interesLabel = INTERESES.find((i) => i.value === interes)?.label ?? interes
    const partes = [
      `Hola ${CONFIG.siteName} ${CONFIG.brandEmoji}`,
      `Soy ${nombre.trim()}.`,
      `Tel / WhatsApp: ${tel}.`,
      email.trim() ? `Correo: ${email.trim()}.` : null,
      `Me interesa: ${interesLabel}.`,
      mensaje.trim() ? `Nota: ${mensaje.trim()}` : null,
    ].filter(Boolean)

    const texto = encodeURIComponent(partes.join(' '))
    window.open(`https://api.whatsapp.com/send?phone=${CONFIG.whatsappNumber}&text=${texto}`, '_blank')
    onClose()
    setNombre('')
    setTelefono('')
    setEmail('')
    setInteres(INTERESES[0].value)
    setMensaje('')
  }

  const puedeEnviar = nombre.trim().length >= 2 && telefono.replace(/\s/g, '').length >= 8

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md max-h-[90dvh] overflow-y-auto bg-black rounded-2xl border border-neutral-700 shadow-2xl p-6 sm:p-8 mx-4"
          >
            <div className="flex justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Registro & clase de prueba
                </h3>
                <p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                  Déjanos tus datos; te contactamos por WhatsApp para confirmar horario.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors shrink-0"
                aria-label="Cerrar"
              >
                <X size={22} className="text-neutral-400" />
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="lead-nombre" className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                  Nombre completo
                </label>
                <input
                  id="lead-nombre"
                  type="text"
                  autoComplete="name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="lead-tel" className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                  WhatsApp / teléfono
                </label>
                <input
                  id="lead-tel"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="10 dígitos o con lada"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="lead-email" className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                  Correo <span className="text-neutral-600 font-normal">(opcional)</span>
                </label>
                <input
                  id="lead-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="lead-interes" className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                  ¿Qué te interesa?
                </label>
                <div className="relative">
                  <select
                    id="lead-interes"
                    value={interes}
                    onChange={(e) => setInteres(e.target.value)}
                    className={`${inputClass} appearance-none cursor-pointer pl-4 pr-11`}
                  >
                    {INTERESES.map((o) => (
                      <option key={o.value} value={o.value} className="bg-neutral-900">
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                    aria-hidden
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lead-msg" className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                  Comentarios <span className="text-neutral-600 font-normal">(opcional)</span>
                </label>
                <textarea
                  id="lead-msg"
                  rows={3}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Horario preferido, dudas sobre planes…"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3.5 rounded-xl border border-neutral-600 text-neutral-400 hover:bg-white/5 transition-colors font-semibold text-sm"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleEnviar}
                disabled={!puedeEnviar}
                className="flex-1 py-3.5 rounded-xl bg-neutral-600 hover:bg-neutral-500 text-white font-bold disabled:opacity-45 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
              >
                Enviar por WhatsApp
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
