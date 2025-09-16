"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image */}
			<div
				className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ${
					isLoaded ? "scale-100" : "scale-110"
				}`}
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/luxury-black-suv-being-detailed-in-upscale-drivewa.jpg')`,
				}}
			/>

			{/* Content */}
			<div className="relative z-10 text-center px-6 sm:px-8 lg:px-8 max-w-4xl mx-auto">
				<h1
					className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance transition-all duration-1000 leading-tight ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					Elite Detail. Unmatched Excellence.
				</h1>

				<p
					className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-300 leading-relaxed ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					Experience premium mobile auto detailing that brings
					professional-grade results directly to your location.
				</p>

				<div
					className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
						isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					<Button
						size="lg"
						className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-8 py-4 w-full sm:w-auto transform hover:scale-105 transition-all duration-200 min-h-[48px]"
					>
						Get a Free Quote
					</Button>
					<Button
						size="lg"
						variant="ghost"
						className="text-white border-white hover:bg-white/10 text-base sm:text-lg px-8 py-4 w-full sm:w-auto transform hover:scale-105 transition-all duration-200 min-h-[48px]"
					>
						View Our Work
					</Button>
				</div>
			</div>
		</section>
	);
}
