import { Button } from "@/components/ui/button";
import { Phone, Instagram, CircleCheck } from "lucide-react";

export function HeroSection() {
	return (
		<section
			className="relative flex items-center justify-center overflow-hidden"
			style={{ minHeight: "calc(100vh - 80px)" }}
		>
			{/* Background Image with Modern Gradient Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in-scale"
				style={{
					backgroundImage: `url('/luxury-black-suv-being-detailed-in-upscale-drivewa.jpg')`,
				}}
			/>

			{/* Modern Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float-in opacity-0" />
				<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-in-delayed opacity-0" />
			</div>

			{/* Content Container */}
			<div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
				{/* Badge */}
				<div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium mb-8 animate-slide-up-delay-200 opacity-0">
					<span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
					Mobile Detailing • Santa Clarita, CA
				</div>

				{/* Main Heading */}
				<h1
					className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 text-balance leading-[1.1] pb-2 animate-slide-up opacity-0"
					style={{
						background:
							"linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #3b82f6 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
						paddingBottom: "0.5rem",
					}}
				>
					Alas Elite
					<br />
					<span className="text-primary">Detailing</span>
				</h1>

				{/* Subtitle */}
				<p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed font-light animate-slide-up-delay-300 opacity-0">
					Premium mobile auto detailing that comes to you.
					<span className="text-primary font-medium">
						{" "}
						Professional-grade service
					</span>{" "}
					at your convenience.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up-delay-500 opacity-0">
					<Button
						asChild
						size="lg"
						className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 w-full sm:w-auto transform hover:scale-105 transition-all duration-200 min-h-[56px] rounded-full shadow-2xl shadow-primary/25 hover:shadow-primary/40"
					>
						<a href="tel:+16618551848" className="flex items-center gap-2">
							<Phone className="w-5 h-5" />
							Book Now
						</a>
					</Button>
					<Button
						asChild
						size="lg"
						variant="outline"
						className="group text-white border-white/60 hover:bg-white/25 hover:border-white/80 text-lg px-10 py-6 w-full sm:w-auto transform hover:scale-105 transition-all duration-200 min-h-[56px] rounded-full backdrop-blur-md bg-white/15 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 border-2"
					>
						<a
							href="https://www.instagram.com/alas_elite_detailing/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							<Instagram className="w-5 h-5" />
							View Our Work
						</a>
					</Button>
				</div>

				{/* Trust Indicators */}
				<div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-300 animate-slide-up-delay-700 opacity-0">
					<div className="flex items-center gap-2">
						<CircleCheck className="w-5 h-5 text-primary" />
						<span className="text-sm">Fully Insured</span>
					</div>
					<div className="flex items-center gap-2">
						<CircleCheck className="w-5 h-5 text-primary" />
						<span className="text-sm">5-Star Rated</span>
					</div>
					<div className="flex items-center gap-2">
						<CircleCheck className="w-5 h-5 text-primary" />
						<span className="text-sm">Mobile Service</span>
					</div>
				</div>
			</div>
		</section>
	);
}
