import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { GallerySection } from "@/components/gallery-section";
import { ServiceAreaSection } from "@/components/service-area-section";
import { Footer } from "@/components/footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export default function HomePage() {
	return (
		<SmoothScrollProvider>
			<main className="min-h-screen bg-background overflow-x-hidden">
				<Navigation />
				<HeroSection />
				<ServicesSection />
				<HowItWorksSection />
				<GallerySection />
				<ServiceAreaSection />
				<Footer />
			</main>
		</SmoothScrollProvider>
	);
}
