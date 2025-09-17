"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav
			className={`sticky top-0 z-50 transition-all duration-300 border-b border-border w-full ${
				isScrolled
					? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg"
					: "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
			}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
				<div className="flex items-center justify-between h-20 md:h-20">
					<div className="flex items-center space-x-3">
						<div className="relative w-12 h-12 md:w-10 md:h-10 transform hover:scale-105 transition-transform duration-200">
							<Image
								src="/images/alas-logo.png"
								alt="Alas Elite Detailing Logo"
								fill
								className="object-contain"
							/>
						</div>
						<div className="text-lg md:text-xl font-bold text-primary transform hover:scale-105 transition-transform duration-200 cursor-pointer">
							<span className="hidden sm:inline">Alas Elite Detailing</span>
							<span className="sm:hidden">Alas Elite</span>
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							<a
								href="#services"
								className="text-foreground hover:text-primary transition-all duration-200 relative group"
							>
								Services
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
							</a>
							<a
								href="#gallery"
								className="text-foreground hover:text-primary transition-all duration-200 relative group"
							>
								Gallery
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
							</a>
							<Button
								asChild
								className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
							>
								<a href="tel:+16612345678">Book Now</a>
							</Button>
						</div>
					</div>

					{/* Mobile Navigation */}
					<div className="md:hidden flex items-center space-x-3">
						<Button
							asChild
							size="sm"
							className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 px-4 py-2 text-sm"
						>
							<a href="tel:+16612345678">Book Now</a>
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="p-2"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</Button>
					</div>
				</div>

				{isMobileMenuOpen && (
					<div className="md:hidden border-t border-border bg-background/95 backdrop-blur w-full">
						<div className="px-2 pt-2 pb-3 space-y-1 w-full">
							<a
								href="#services"
								onClick={handleLinkClick}
								className="block px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-200"
							>
								Services
							</a>
							<a
								href="#gallery"
								onClick={handleLinkClick}
								className="block px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-200"
							>
								Gallery
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
