"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const communities = ["Valencia", "Stevenson Ranch", "Canyon Country", "Saugus", "Newhall"]

export function ServiceAreaSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-16 sm:py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
          <div
            className={`transition-all duration-800 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground mb-6">
              Serving All of Santa Clarita
            </h2>
            <p className="text-muted-foreground mb-8 text-sm sm:text-base leading-relaxed">
              We proudly serve the entire Santa Clarita Valley, bringing premium mobile detailing services directly to
              your location.
            </p>
            <div className="space-y-3">
              {communities.map((community, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: `${index * 100 + 400}ms`,
                  }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-card-foreground font-medium text-sm sm:text-base">{community}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-800 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-muted rounded-lg p-4 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <img
                src="/scv-map-serving.png"
                alt="Santa Clarita Valley Service Area Map"
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 transition-all duration-300 hover:brightness-110"
              />
              <p className="text-muted-foreground text-sm sm:text-base">
                Service radius covers all major communities in the Santa Clarita Valley
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
