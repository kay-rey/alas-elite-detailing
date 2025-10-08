import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Alas Elite Detailing - Mobile Auto Detailing in Santa Clarita, CA",
		short_name: "Alas Elite Detailing",
		description:
			"Premium mobile auto detailing services in Santa Clarita, CA. Professional car detailing brought directly to your location.",
		start_url: "/",
		display: "standalone",
		background_color: "#0F0F0F",
		theme_color: "#3B82F6",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/jpeg",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/jpeg",
			},
		],
		categories: ["automotive", "business", "lifestyle"],
		lang: "en",
		orientation: "portrait-primary",
		scope: "/",
	};
}
