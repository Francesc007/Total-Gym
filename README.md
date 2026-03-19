# El Cactus Antojería - Landing Page

Landing page de alto impacto para El Cactus Antojería, restaurante de comida mexicana tradicional en Tepeji del Río.

## 🚀 Inicio Rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 📋 Configuración

Edita `src/config.ts` para personalizar:

- **whatsappNumber**: Número de WhatsApp con código de país (ej: `527711234567`)
- **googleMapsUrl**: Enlace directo a Google Maps del restaurante
- **horarios**: Horarios de atención

## 🖼️ Logo

Para usar tu logo oficial:
1. Coloca `logo.png` en la carpeta `public/`
2. En `src/components/Navbar.tsx`, cambia `src="/logo.svg"` por `src="/logo.png"`

## 📦 Build para Producción

```bash
npm run build
```

Los archivos se generan en la carpeta `dist/`.

## 🛠️ Tecnologías

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (iconos)
