// Emoji de marca para URLs de WhatsApp (codificación Unicode explícita)
const BRAND_EMOJI = '\u{1F4AA}' // 💪

/** Logo en `public/` (nombre con espacios codificado para URL) */
export const LOGO_SRC = '/Logo%20Total%20Gym.jpg'

export const CONFIG = {
  siteName: 'H TOTAL GYM',
  brandEmoji: BRAND_EMOJI,
  /** WhatsApp: +52 55 4338 2080 */
  whatsappNumber: '525543382080',
  googleMapsUrl:
    'https://www.google.com.mx/maps/place/TOTAL+GYM/@19.8356785,-99.2063945,18.94z/data=!4m6!3m5!1s0x85d227143960d31b:0x2aecb98ac8aa6759!8m2!3d19.8356281!4d-99.2063367!16s%2Fg%2F11pf6ctd3t?entry=ttu',
  facebookUrl: 'https://www.facebook.com/htotalgym',
  instagramUrl: 'https://www.instagram.com/htotalgym/',
  tiktokUrl: 'https://www.tiktok.com/',
  horarios: {
    lineas: [
      'Lun–Vie: 6:00–12:00 h; 16:30–21:00 h',
      'Sáb: 6:00–12:00 h',
      'Dom: cerrado',
    ],
  },
}
