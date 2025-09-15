"use client"

import { Instagram, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div
            className={`text-center md:text-left transition-all duration-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-4">Alas Elite Detailing</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Bringing elite auto detailing services directly to your doorstep. Experience the convenience of
              professional car care without leaving home.
            </p>
          </div>

          <div
            className={`text-center transition-all duration-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4">Ready to Book?</h4>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center space-x-2 text-xl sm:text-2xl font-bold text-primary hover:text-primary/80 transition-all duration-200 transform hover:scale-105 min-h-[48px] px-4 py-2 rounded-lg hover:bg-primary/10"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>(123) 456-7890</span>
            </a>
          </div>

          <div
            className={`text-center md:text-right transition-all duration-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4">Follow Our Work</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 text-primary hover:text-primary/80 transition-all duration-200 transform hover:scale-105 min-h-[48px] px-4 py-2 rounded-lg hover:bg-primary/10"
            >
              <Instagram className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-base sm:text-lg font-medium">@alaselitedetailing</span>
            </a>
          </div>
        </div>

        <div
          className={`border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2024 Alas Elite Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
