# H TOTAL GYM — Landing

Landing page mobile-first para **H TOTAL GYM** (Huehuetoca): planes, amenidades, promos y registro de leads vía WhatsApp.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Configuración

Edita `src/config.ts`:

- **whatsappNumber**: número con código de país sin `+` (ej. `525543382080`)
- **googleMapsUrl**, **facebookUrl**, **instagramUrl**
- **horarios.lineas**: textos de horario mostrados en el footer

Logo: coloca `Logo Total Gym.jpg` en `public/` (o ajusta `LOGO_SRC` en `config.ts`).

## Build producción

```bash
npm run build
```

Salida en `dist/`.

## GitHub

Repositorio: [github.com/Francesc007/Total-Gym](https://github.com/Francesc007/Total-Gym)

```bash
git remote -v
git push -u origin main
```

## Vercel

1. En [vercel.com](https://vercel.com) → **Add New** → **Project** → importa `Francesc007/Total-Gym`.
2. Framework: **Vite** (detectado). Build: `npm run build`, output: `dist`.
3. Deploy. Cada push a `main` puede generar un despliegue automático si activas Git Integration.

El archivo `vercel.json` fija build y carpeta de salida por si el asistente no detecta el preset.

## Stack

- React 19 + TypeScript + Vite 8  
- Tailwind CSS 4  
- Framer Motion · Lucide React  
