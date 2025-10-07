import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import {
	businessStructuredData,
	websiteStructuredData,
	organizationStructuredData,
} from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title:
		"Alas Elite Detailing - Premium Mobile Auto Detailing in Santa Clarita, CA",
	description:
		"Professional mobile auto detailing services in Santa Clarita, CA. We bring premium car detailing directly to your home or office. Book now for luxury vehicle care!",
	keywords: [
		"mobile auto detailing",
		"car detailing Santa Clarita",
		"mobile car wash",
		"auto detailing CA",
		"luxury car detailing",
		"mobile detailing service",
		"car detailing near me",
		"professional car detailing",
		"Santa Clarita detailing",
		"mobile car detailing service",
	],
	generator: "Next.js",
	authors: [{ name: "Alas Elite Detailing" }],
	creator: "Alas Elite Detailing",
	publisher: "Alas Elite Detailing",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://alaselitedetailing.com",
		siteName: "Alas Elite Detailing",
		title:
			"Alas Elite Detailing - Premium Mobile Auto Detailing in Santa Clarita, CA",
		description:
			"Professional mobile auto detailing services in Santa Clarita, CA. We bring premium car detailing directly to your home or office. Book now for luxury vehicle care!",
		images: [
			{
				url: "/images/alaslogo.jpg",
				width: 1200,
				height: 630,
				alt: "Alas Elite Detailing - Premium Mobile Auto Detailing Services",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Alas Elite Detailing - Premium Mobile Auto Detailing in Santa Clarita, CA",
		description:
			"Professional mobile auto detailing services in Santa Clarita, CA. We bring premium car detailing directly to your home or office.",
		images: ["/images/alaslogo.jpg"],
		creator: "@alas_elite_detailing",
	},
	alternates: {
		canonical: "https://alaselitedetailing.com",
	},
	verification: {
		google: "your-google-verification-code", // Replace with actual verification code
	},
	other: {
		"geo.region": "US-CA",
		"geo.placename": "Santa Clarita",
		"geo.position": "34.3917;-118.5426",
		ICBM: "34.3917, -118.5426",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(businessStructuredData),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteStructuredData),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationStructuredData),
					}}
				/>
			</head>
			<body
				className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}
			>
				<Suspense fallback={null}>{children}</Suspense>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
