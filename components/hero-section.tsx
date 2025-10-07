import { Button } from "@/components/ui/button";

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
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
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
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.721c-.49 0-.928.438-.928.928v8.449c0 .49.438.928.928.928h8.558c.49 0 .928-.438.928-.928V8.635c0-.49-.438-.928-.928-.928z" />
							</svg>
							View Our Work
						</a>
					</Button>
				</div>

				{/* Trust Indicators */}
				<div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-300 animate-slide-up-delay-700 opacity-0">
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-primary"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-sm">Fully Insured</span>
					</div>
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-primary"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-sm">5-Star Rated</span>
					</div>
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-primary"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-sm">Mobile Service</span>
					</div>
				</div>
			</div>
		</section>
	);
}
