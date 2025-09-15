"use client";

import { useEffect } from "react";

interface SmoothScrollProviderProps {
	children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
	useEffect(() => {
		const handleSmoothScroll = (e: Event) => {
			const target = e.target as HTMLAnchorElement;
			if (target.hash) {
				e.preventDefault();
				const element = document.querySelector(target.hash);
				if (element) {
					element.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}
		};

		const links = document.querySelectorAll('a[href^="#"]');
		links.forEach((link) => {
			link.addEventListener("click", handleSmoothScroll);
		});

		return () => {
			links.forEach((link) => {
				link.removeEventListener("click", handleSmoothScroll);
			});
		};
	}, []);

	return <>{children}</>;
}
