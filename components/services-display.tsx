"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ServiceData {
	_id: string;
	title: string;
	price: number;
	description: string;
	features: string[];
	popular: boolean;
}

interface ServicesDisplayProps {
	services: ServiceData[];
}

export function ServicesDisplay({ services }: ServicesDisplayProps) {
	const { ref, isVisible } = useScrollAnimation(0.1);

	return (
		<section id="services" className="py-16 sm:py-20 bg-background" ref={ref}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
				>
					<h2 className="text-4xl font-bold text-foreground mb-4">
						Our Signature Packages
					</h2>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
						Choose the perfect detailing package for your vehicle's needs
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{services.map((service, index) => (
						<Card
							key={service._id}
							className={`relative ${
								service.popular
									? "border-primary md:scale-105 shadow-2xl"
									: "border-border"
							} bg-card 
                transform hover:scale-105 md:hover:scale-110 transition-all duration-300 hover:shadow-2xl
                ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}
							`}
							style={{
								transitionDelay: `${index * 200}ms`,
							}}
						>
							{service.popular && (
								<Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
									Most Popular
								</Badge>
							)}

							<CardHeader className="text-center pb-4 px-4 sm:px-6">
								<CardTitle className="text-xl sm:text-2xl font-bold text-card-foreground">
									{service.title}
								</CardTitle>
								<div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
									${service.price}
								</div>
								<CardDescription className="text-muted-foreground text-sm sm:text-base">
									{service.description}
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-3 px-4 sm:px-6">
								{service.features.map((feature, featureIndex) => (
									<div
										key={featureIndex}
										className="flex items-start space-x-3"
									>
										<Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
										<span className="text-card-foreground text-sm sm:text-base leading-relaxed">
											{feature}
										</span>
									</div>
								))}
							</CardContent>

							<CardFooter className="px-4 sm:px-6">
								<Button
									className={`w-full transform hover:scale-105 transition-all duration-200 min-h-[48px] text-sm sm:text-base ${
										service.popular
											? "bg-primary text-primary-foreground hover:bg-primary/90"
											: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
									}`}
								>
									Book This Package
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
