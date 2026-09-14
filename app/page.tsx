import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Segments from "@/components/sections/Segments"
import Pricing from "@/components/sections/Pricing"
import Facilities from "@/components/sections/Facilities"
import Schedule from "@/components/sections/Schedule"
import TripFlow from "@/components/sections/TripFlow"
import BookingSteps from "@/components/sections/BookingSteps"
import Gallery from "@/components/sections/Gallery"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import Terms from "@/components/sections/Terms"
import Maps from "@/components/sections/Maps"
import CTASection from "@/components/sections/CTASection"
import Footer from "@/components/sections/Footer"

import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Segments />
        <Facilities />
        <Schedule />
        <TripFlow />
        <BookingSteps />
        <Gallery />
        <Maps />
        <FAQ />
        <Terms />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}