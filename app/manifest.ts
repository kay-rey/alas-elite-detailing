import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Alas Elite Detailing - Mobile Auto Detailing in Santa Clarita Valley, CA",
		short_name: "Alas Elite Detailing",
		description:
			"Premium mobile auto detailing services in Santa Clarita Valley, CA. Professional car detailing brought directly to your home or office. Serving Santa Clarita, Valencia, Canyon Country, Newhall, Saugus, Castaic, Stevenson Ranch, and Agua Dulce.",
		start_url: "/",
		display: "standalone",
		background_color: "#0F0F0F",
		theme_color: "#3B82F6",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
		categories: ["automotive", "business", "lifestyle", "mobile", "detailing"],
		lang: "en",
		orientation: "portrait-primary",
		scope: "/",
		shortcuts: [
			{
				name: "Book Service",
				short_name: "Book",
				description: "Book a mobile auto detailing service",
				url: "/#contact",
				icons: [
					{
						src: "/icon-192.png",
						sizes: "192x192",
						type: "image/png",
					},
				],
			},
		],
	};
}
