"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { GallerySection } from "@/components/gallery-section"
import { ServiceAreaSection } from "@/components/service-area-section"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <GallerySection />
      <ServiceAreaSection />
      <Footer />
    </main>
  )
}
