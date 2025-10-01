"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "1",
    title: "Schedule Your Service",
    description: "Call us or message us on Instagram to book your appointment at your convenience.",
  },
  {
    number: "2",
    title: "We Arrive at Your Location",
    description: "Our fully equipped mobile unit comes to your home or office with everything needed.",
  },
  {
    number: "3",
    title: "Enjoy a Flawless Vehicle",
    description: "Relax while we transform your vehicle with professional-grade products and techniques.",
  },
]

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-16 sm:py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-card-foreground mb-4">How It Works</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your vehicle detailed has never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 200 + 200}ms`,
              }}
            >
              <div className="w-20 h-20 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 transform hover:scale-110 transition-all duration-300 hover:shadow-lg">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
