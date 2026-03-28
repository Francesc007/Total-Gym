import { useState } from 'react'
import { PageBackdrop } from './components/PageBackdrop'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Amenities } from './components/Amenities'
import { Promociones } from './components/Promociones'
import { Footer } from './components/Footer'
import { ReservationModal } from './components/ReservationModal'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <PageBackdrop />
      <Navbar onReservarClick={() => setModalOpen(true)} />
      <Hero onReservarClick={() => setModalOpen(true)} />
      <Pricing onCtaClick={() => setModalOpen(true)} />
      <Amenities />
      <Promociones />
      <Footer />
      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <WhatsAppButton />
    </>
  )
}

export default App
